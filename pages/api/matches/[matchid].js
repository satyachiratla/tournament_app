import { connectDatabase } from "../../../helpers/db-util";

export default async function handler(req, res) {

    let client;

    try {
      client = await connectDatabase();
    } catch (err) {
      res.status(500).json({ message: "Failed to connect Database!" });
      client.close();
    }

    if (req.method === "DELETE") {
        const { matchid } = req.query
        try {
          const db = client.db();
          const result = await db.collection("matches").deleteOne({ id: matchid })
          res.status(200).json({ message: "Deleting Success!" })
          client.close();
          return result;
        } catch (err) {
          res.status(500).json({ message: "Failed to delete team!" })
        }
    }
}