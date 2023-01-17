import { useEffect, useState } from "react";
import MatchBoard from "./MatchBoard";
import MatchList from './MatchList';

export default function Matches(props) {
  const [matches, setMatches] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch("api/matches")
      .then((res) => res.json())
      .then((data) => {
        setMatches(data.matches);
        setIsLoading(false)
      });
  }, []);

  return (
    <div className="mt-32 text-white">
      <div className="text-center text-3xl tracking-wider text-sky-500 font-bold underline underline-offset-8 decoration-gray-300">
        <h1>Set an El Clásico Match</h1>
      </div>
      <MatchBoard />
      {!isLoading && <MatchList matches={matches} />}
      {isLoading && (
        <p className="bg-cyan-500 text-center w-32 mt-16 px-3 py-3 border-sm border-cyan-800 rounded-md m-auto">
          Loading...
        </p>
      )}
      {!isLoading && matches.length === 0 && <p className="bg-cyan-500 text-center w-64 mt-16 px-3 py-3 border-sm border-cyan-800 rounded-md m-auto">
          No Matches yet: Add one!
        </p>}
    </div>
  );
}
