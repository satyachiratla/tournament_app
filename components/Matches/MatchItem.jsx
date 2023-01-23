import Link from "next/link";

export default function MatchItem(props) {
  const { id, team1, team2, t1, t2, onDelete } = props;

  async function deleteMatchHandler(matchid) {
    await fetch(`/api/matches/${matchid}`, {
      method: "DELETE",
    });
    onDelete(matchid);
  }

  return (
    <li className="bg-cyan-900 text-white flex flex-col items-center sm:mb-8 mb-16 md:mx-16 md:w-72 sm:w-[80%] border-1 rounded-xl sm:mx-2">
      <div className="text-center">
        <Link href={`/matches/${t1}/${t2}`} className="px-5">
          <h1 className="tracking-wider">{team1}</h1>
          <h2 className="tracking-widest text-center">vs</h2>
          <h1 className="tracking-wider">{team2}</h1>
        </Link>
      </div>
      <div className="mx-auto">
        <button
          onClick={deleteMatchHandler.bind(null, id)}
          className="mx-auto hover:bg-black"
        >
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
      </div>
    </li>
  );
}
