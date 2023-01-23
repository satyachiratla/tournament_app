import MatchBoard from "./MatchBoard";

export default function Matches(props) {
  return (
    <div className="mt-32 text-white">
      <div className="text-center text-3xl tracking-wider text-sky-500 font-bold underline underline-offset-8 decoration-gray-300">
        <h1>Set an El Clásico Match</h1>
      </div>
      <MatchBoard />
    </div>
  );
}
