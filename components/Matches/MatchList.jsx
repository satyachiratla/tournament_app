import MatchItem from "./MatchItem";

export default function MatchList(props) {
  const { matches, onDeleteMatch } = props;

  return (
    <ul className="flex flex-wrap justify-center items-center mt-16">
      {matches.map((match) => {
        return (
          <MatchItem
            key={match.id}
            onDelete={onDeleteMatch}
            id={match.id}
            match={match.match}
            t1={match.team1}
            t2={match.team2}
            team1={match.team1.replace(/-/g, " ")}
            team2={match.team2.replace(/-/g, " ")}
          />
        );
      })}
    </ul>
  );
}
