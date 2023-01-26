import TeamList from "../../components/Teams/TeamList";
import { useState, useRef, useEffect } from "react";

export default function Teams(props) {
  const [teams, setTeams] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const nameRef = useRef();

  async function submitHandler(e) {
    e.preventDefault();

    if (!nameRef.current.value) {
      return;
    }

    const enteredTeamName = nameRef.current.value.replace(/ /g, "-");
    const body = { teamName: enteredTeamName };

    const response = await fetch("/api/teams", {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    setTeams([
      ...teams,
      { id: Math.floor(Math.random() * 999), name: data.name },
    ]);
    nameRef.current.value = "";
  }

  useEffect(() => {
    setIsLoading(true);
    fetch("/api/teams")
      .then((res) => res.json())
      .then((data) => {
        setTeams(data.teams);
        setIsLoading(false);
      });
  }, []);

  function deleteTeamById(teamid) {
    const updatedTeams = teams.filter((team) => team.id !== teamid);
    setTeams(updatedTeams);
  }

  return (
    <div className="text-white mt-32">
      <div className="text-3xl tracking-wider text-center text-sky-500 underline underline-offset-8 decoration-gray-300">
        Create a New Team
      </div>
      <div className="mt-16">
        <form
          onSubmit={submitHandler}
          className="flex flex-col justify-center items-center"
        >
          <input
            ref={nameRef}
            className="mb-3 bg-gray-100 border border-gray-200 rounded-md shadow-md shadow-gray-500/80 py-2 px-6 outline-none text-black"
            type="text"
            placeholder="Enter a Team Name"
          />
          <button
            className="bg-cyan-900 px-6 py-1 border border-cyan-800 rounded-lg hover:bg-cyan-700"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
      {!isLoading && <TeamList teams={teams} onDeleteTeam={deleteTeamById} />}
      {isLoading && (
        <p className="bg-cyan-500 text-center w-32 mt-16 px-3 py-3 border-sm border-cyan-800 rounded-md m-auto">
          Loading...
        </p>
      )}
      {!isLoading && teams.length === 0 && (
        <p className="bg-cyan-500 text-center w-64 mt-16 px-3 py-3 border-sm border-cyan-800 rounded-md m-auto">
          No teams yet: Add one!
        </p>
      )}
    </div>
  );
}
