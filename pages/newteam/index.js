import Teams from "../../components/Teams/Teams";
import Head from 'next/head';

export default function NewTeam() {

  return (
    <div>
      <Head>
        <title>New Team</title>
        <meta name="description" content="Create a team for your tounament matches..." />
      </Head>
      <Teams />
    </div>
  );
}

