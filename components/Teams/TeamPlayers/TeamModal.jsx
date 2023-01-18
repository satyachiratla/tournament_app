import { useRef } from "react";
import { useRouter } from "next/router";


export default function TeamModal(props) {
  const { onCancel, teamName } = props;
  const router = useRouter();

  const name = teamName.replace(/ /g,"-")

  const player1Ref = useRef();
  const player2Ref = useRef();
  const player3Ref = useRef();
  const player4Ref = useRef();
  const player5Ref = useRef();
  const player6Ref = useRef();
  const player7Ref = useRef();
  const player8Ref = useRef();
  const player9Ref = useRef();
  const player10Ref = useRef();
  const player11Ref = useRef();

  function submitHandler(e) {
    e.preventDefault();

    const player1 = player1Ref.current.value;
    const player2 = player2Ref.current.value;
    const player3 = player3Ref.current.value;
    const player4 = player4Ref.current.value;
    const player5 = player5Ref.current.value;
    const player6 = player6Ref.current.value;
    const player7 = player7Ref.current.value;
    const player8 = player8Ref.current.value;
    const player9 = player9Ref.current.value;
    const player10 = player10Ref.current.value;
    const player11 = player11Ref.current.value;

    const playersData = {
      name,
      player1,
      player2,
      player3,
      player4,
      player5,
      player6,
      player7,
      player8,
      player9,
      player10,
      player11,
    };

    fetch("/api/teams/teamplayers", {
      method: "POST",
      body: JSON.stringify(playersData),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data));

      router.push('/matches')
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center animate-players-appear ">
      <div className="md:w-[600px] mt-32 border-1 rounded-xl sm:h-[470px] md:h-[600px] bg-gray-200 sm:w-[95%]">
        <div className="bg-slate-500 p-5 w-full border-1 border-slate-500 rounded-t-xl">
          <h1 className="text-center text-xl text-stone-900 tracking-wider font-bold">
            Select a team Players 😁
          </h1>
        </div>
        <form onSubmit={submitHandler}>
          <div className="bg-cyan-900 text-center py-3">
            <h1 className="tracking-wider">{teamName}</h1>
          </div>
          <div className="flex flex-row items-center justify-center flex-wrap sm:h-[350px] md:h-[470px] sm:overflow-y-scroll ">
            <input
              ref={player1Ref}
              className="text-black md:w-64 px-5 py-3 m-3 border-2 border-gray-300 rounded-full sm:w-[170px] "
              type="text"
              placeholder="Player 1"
            />
            <input
              ref={player2Ref}
              className="text-black md:w-64 px-5 py-3 m-3 border-2 border-gray-300 rounded-full sm:w-[170px]"
              type="text"
              placeholder="Player 2"
            />
            <input
              ref={player3Ref}
              className="text-black md:w-64 px-5 py-3 m-3 border-2 border-gray-300 rounded-full sm:w-[170px]"
              type="text"
              placeholder="Player 3"
            />
            <input
              ref={player4Ref}
              className="text-black md:w-64 px-5 py-3 m-3 border-2 border-gray-300 rounded-full sm:w-[170px] "
              type="text"
              placeholder="Player 4"
            />
            <input
              ref={player5Ref}
              className="text-black md:w-64 px-5 py-3 m-3 border-2 border-gray-300 rounded-full sm:w-[170px]"
              type="text"
              placeholder="Player 5"
            />
            <input
              ref={player6Ref}
              className="text-black md:w-64 px-5 py-3 m-3 border-2 border-gray-300 rounded-full sm:w-[170px]"
              type="text"
              placeholder="Player 6"
            />
            <input
              ref={player7Ref}
              className="text-black md:w-64 px-5 py-3 m-3 border-2 border-gray-300 rounded-full sm:w-[170px] "
              type="text"
              placeholder="Player 7"
            />
            <input
              ref={player8Ref}
              className="text-black md:w-64 px-5 py-3 m-3 border-2 border-gray-300 rounded-full sm:w-[170px]"
              type="text"
              placeholder="Player 8"
            />
            <input
              ref={player9Ref}
              className="text-black md:w-64 px-5 py-3 m-3 border-2 border-gray-300 rounded-full sm:w-[170px] "
              type="text"
              placeholder="Player 9"
            />
            <input
              ref={player10Ref}
              className="text-black md:w-64 px-5 py-3 m-3 border-2 border-gray-300 rounded-full sm:w-[170px] "
              type="text"
              placeholder="Player 10"
            />
            <input
              ref={player11Ref}
              className="text-black md:w-64 px-5 py-3 m-3 border-2 border-gray-300 rounded-full sm:w-[170px]"
              type="text"
              placeholder="Player 11"
            />
          </div>
          <div className="bg-slate-700 h-16 flex items-center justify-end border-1 border-slate-700 rounded-b-xl ">
            <button
              type="submit"
              className="bg-slate-500 border-1 hover:bg-slate-600 border-slate-300 px-5 py-2 rounded-full mr-5"
            >
              Submit
            </button>
            <button
              className="bg-slate-500 border-1 hover:bg-slate-600 border-slate-300 px-5 py-2 rounded-full mr-5"
              onClick={onCancel}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
