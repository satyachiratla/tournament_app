import { connectDatabase } from "../../../helpers/db-util";

export default async function handler(req, res) {
  let client;

  try {
    client = await connectDatabase();
  } catch (err) {
    res.status(500).json({ message: "Failed to connect Database!" });
    client.close();
  }

  if (req.method === "POST") {
    const { team1, team2 } = req.body;

    const match = `${team1} vs ${team2}`;

    const opponents = {
      id: Math.floor(Math.random() * 999).toString(),
      match,
      team1,
      team2,
    };

    try {
      const db = client.db();
      const result = await db.collection("matches").insertOne(opponents);
      res.status(200).json({ message: "Added Match!", match: opponents });
      client.close();
      return result;
    } catch (err) {
      res.status(500).json({ message: "Failed to add match!" });
    }
  }

  if (req.method === "GET") {
    try {
      const db = client.db();
      const result = await db.collection("matches").find().toArray();
      res
        .status(200)
        .json({ message: "Fetching matches success!", matches: result });
      return result;
    } catch (err) {
      res.status(500).json({ message: "Fetching matches failed!" });
    }
  }
}
