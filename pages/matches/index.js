import Matches from "../../components/Matches/Matches";
import Head from "next/head";

export default function MatchPage(props) {
  return (
    <div>
      <Head>
        <title>Matches</title>
        <meta
          name="description"
          content="Set a rivalry match for your tournament..."
        />
      </Head>
      <Matches />
    </div>
  );
}
