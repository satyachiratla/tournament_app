import { connectDatabase } from "../../../../helpers/db-util";

export default async function handler(req, res) {
  let client;

  try {
    client = await connectDatabase();
  } catch (err) {
    res.status(500).json({ message: "Failed to connect Database!" });
    client.close();
  }

  if (req.method === "PATCH") {
    const id = req.query.playerid;
    const { r, b, fours, sixes, sr } = req.body;

    try {
      const db = client.db();
      const updatedData = { r: r, b: b, 4: fours, 6: sixes, SR: sr };
      const result = await db
        .collection("TeamPlayers")
        .findOneAndUpdate({ id: id }, updatedData);
      res
        .status(200)
        .json({ message: "Successfully updated!", updated: result });
      client.close();
      return result;
    } catch (err) {
      res.status(500).json({ message: "Failed to update!" });
    }
  }
}
