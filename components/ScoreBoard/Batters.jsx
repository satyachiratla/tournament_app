import Card from "../UI/Card";
import { useState } from "react";
import BattersTable from "./BattersTable";

export default function Batters(props) {
  const { batters, bowlers, team1, team2 } = props;

  const [openTeam1, setOpenTeam1] = useState(true);
  const [openTeam2, setOpenTeam2] = useState(false);

  function openTeam1Handler() {
    setOpenTeam1(true);
    setOpenTeam2(false);
  }

  function openTeam2Handler() {
    setOpenTeam2(true);
    setOpenTeam1(false);
  }

  return (
    <Card>
      <div className="text-white m-4 text-center">
        <h1 className="bg-gray-900 w-32 m-auto rounded-sm p-2">Batters Table</h1>
      </div>
      <div className="text-white font-semibold ml-1 mb-2">
        <button
          onClick={openTeam1Handler}
          className={`${
            openTeam1 ? "underline underline-offset-2" : null
          } border-r-2 hover:bg-slate-500 border-gray-400 px-3`}
        >
          {team1}
        </button>
        <button
          onClick={openTeam2Handler}
          className={`${
            openTeam2 ? "underline underline-offset-2" : null
          } hover:bg-slate-500 border-gray-400 px-3`}
        >
          {team2}
        </button>
      </div>
      {openTeam1 && <BattersTable players={batters} />}
      {openTeam2 && <BattersTable players={bowlers} />}
    </Card>
  );
}
