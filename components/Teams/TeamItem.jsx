import { Fragment, useState } from "react";
import TeamModal from "./TeamPlayers/TeamModal";

export default function TeamItem(props) {
  const { id, name } = props;

  const [showModal, setShowModal] = useState(false);

  function showModalHandler() {
    setShowModal(true);
  }

  function closeModalHandler() {
    setShowModal(false);
  }

  async function deleteTeamHandler(teamid) {
    const response = await fetch(`/api/teams/${teamid}`, {
      method: "DELETE",
    })
    const data = await response.json();
    console.log(data)
  }

  return (
    <Fragment>
      <li className="bg-slate-500 flex flex-col items-center border-1 rounded-xl md:w-72 py-3 md:mx-16 mb-16 sm:mb-8 sm:w-[80%] sm:mx-2">
        <h3 className="text-lg text-white tracking-wider font-semibold">{name}</h3>
        <div>
          <button className="bg-slate-600 hover:bg-slate-700 border-1 rounded-lg py-1 px-2 mt-3" onClick={showModalHandler}>Create a Team</button>
        </div>
        <button onClick={deleteTeamHandler.bind(null, id)} className="mt-2 hover:bg-black">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path d="M2 3a1 1 0 00-1 1v1a1 1 0 001 1h16a1 1 0 001-1V4a1 1 0 00-1-1H2z" />
            <path
              fillRule="evenodd"
              d="M2 7.5h16l-.811 7.71a2 2 0 01-1.99 1.79H4.802a2 2 0 01-1.99-1.79L2 7.5zm5.22 1.72a.75.75 0 011.06 0L10 10.94l1.72-1.72a.75.75 0 111.06 1.06L11.06 12l1.72 1.72a.75.75 0 11-1.06 1.06L10 13.06l-1.72 1.72a.75.75 0 01-1.06-1.06L8.94 12l-1.72-1.72a.75.75 0 010-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </li>
      {showModal && <TeamModal teamName={name} onCancel={closeModalHandler} />}
    </Fragment>
  );
}
