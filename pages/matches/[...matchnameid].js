import Batters from "../../components/ScoreBoard/Batters";
import Bowlers from '../../components/ScoreBoard/Bowlers'
import { getPlayersByTeamName, getAllMatches } from "../../helpers/api-util";
import Head from 'next/head';

export default function LivePage(props) {

  const { batters, bowlers, team1, team2 } = props.teams;

  return (
    <div className="mt-24 flex md:flex-row sm:flex-col ">
      <Head>
        <title>{team1} vs {team2}</title>
        <meta name="description" content="App brings you all cricbuzz features that set up your local tournament match results..." />
      </Head>
      <Batters batters={batters} bowlers={bowlers} team1={team1} team2={team2} />
      <Bowlers batters={batters} bowlers={bowlers} team1={team1} team2={team2} />
    </div>
  );
}

export async function getServerSideProps(context) {
  const { params } = context;
  const teamNames = params.matchnameid;

  const team1 = teamNames[0];
  const team2 = teamNames[1];

  const batters = await getPlayersByTeamName(team1);
  const bowlers = await getPlayersByTeamName(team2);

  if (!batters || !bowlers) {
    return { notFound: true }
  }

  const team1Name = batters.name.replace(/-/g, ' ');
  const team2Name = bowlers.name.replace(/-/g, ' ');

  return {
    props: {
      teams: {
        team1: team1Name,
        team2: team2Name,
        batters: batters.teamData,
        bowlers: bowlers.teamData
      },
    },
  };
}