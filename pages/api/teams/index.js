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
    const { teamName } = req.body;

    if (!teamName || teamName.trim().length === 0) {
      res.status(500).json({ message: "Invalid name!" })
      return;
    }

    try {
      const db = client.db();
      const result = await db.collection("teams").insertOne({ name: teamName });
      res.status(201).json({ message: "Added team", team: teamName });
      client.close();
      return result;
    } catch (err) {
      res.status(500).json({ message: "Inserting data failed!" });
    }
  }

  if (req.method === "GET") {
    try {
      const db = client.db();
      const result = await db.collection("teams").find().toArray();
      res
        .status(200)
        .json({ message: "Fetching teams success!", teams: result });
        client.close()
      return result;
    } catch (err) {
      res.status(500).json({ message: "Fetching teams failed!" });
    }
  }
}
