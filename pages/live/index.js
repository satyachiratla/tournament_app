import Head from 'next/head'

export default function NothingPage() {
  return (
    <div className="mt-32 text-white text-center md:w-[40%] mx-auto sm:w-[80%] border-1 border-blue-400 rounded-lg bg-blue-500">
      <Head>
        <title>Live matches</title>
        <meta
          name="description"
          content="Get the ICC events 2022 Scorecard, Schedules of International matches along with Latest News and ICC Cricket ..."
        />
      </Head>
      <h1 className="p-5">No live matches!</h1>
    </div>
  );
}
