import { useEffect, useState, useRef } from "react";

export default function MatchBoard(props) {
  const [teams, setTeams] = useState([]);

  const team1ref = useRef();
  const team2ref = useRef();

  useEffect(() => {
    fetch("/api/teams")
      .then((res) => res.json())
      .then((data) => {
        setTeams(data.teams);
      });
  }, []);

  function submitHandler(e) {
    e.preventDefault();

    const selectedTeam1 = team1ref.current.value;
    const selectedTeam2 = team2ref.current.value;

    if (selectedTeam1 === selectedTeam2) {
      alert(`Can't set same opponents! Try different opponents`);
      return;
    }

    const selectedData = {
      team1: selectedTeam1.replace(/ /g,"-"),
      team2: selectedTeam2.replace(/ /g,"-"),
    };
    console.log(selectedData);

    fetch("/api/matches", {
      method: "POST",
      body: JSON.stringify(selectedData),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="md:flex justify-evenly mt-20">
        <div className="flex flex-col items-center">
          <label
            htmlFor="team1"
            className="text-cyan-500 text-xl font-normal tracking-wide"
          >
            Team 1
          </label>
          <select
            id="team1"
            ref={team1ref}
            className="text-black w-72 mt-3 tracking-wider outline-none px-8 py-3 border-1 border-gray-400 rounded-md shadow-md shadow-gray-300/50"
          >
            {teams.map((team) => {
              return (
                <option key={team._id} value={team.name}>
                  {team.name.replace(/-/g, ' ')}
                </option>
              );
            })}
          </select>
        </div>
        <h1 className="md:mt-12 sm:mt-5 sm:text-center font-extrabold tracking-widest">
          VS
        </h1>
        <div className="flex flex-col items-center">
          <label
            htmlFor="team2"
            className="text-cyan-500 text-xl font-normal tracking-wide"
          >
            Team 2
          </label>
          <select
            id="team2"
            ref={team2ref}
            className="text-black w-72 mt-3 tracking-wider outline-none px-8 py-3 border-1 border-gray-400 rounded-md shadow-md shadow-gray-300/50"
          >
            {teams.map((team) => {
              return (
                <option key={team._id} value={team.name}>
                  {team.name.replace(/-/g, ' ')}
                </option>
              );
            })}
          </select>
        </div>
      </div>
      <div className="text-center mt-8">
        <button
          type="submit"
          className="bg-slate-500 border-1 border-slate-600 rounded-full px-3 py-2 tracking-wider hover:bg-slate-700"
        >
          Set Match
        </button>
      </div>
    </form>
  );
}
