import { connectDatabase } from "../../../../helpers/db-util";

export default async function handler(req, res) {
  let client;

  try {
    client = await connectDatabase();
  } catch (err) {
    res.status(500).json({ message: "Failed to connect Database!" });
    client.close();
  }

  if (req.method === "POST") {
    const {
      name,
      player1,
      player2,
      player3,
      player4,
      player5,
      player6,
      player7,
      player8,
      player9,
      player10,
      player11,
    } = req.body;

    if (
      !name ||
      !player1 ||
      !player2 ||
      !player3 ||
      !player4 ||
      !player5 ||
      !player6 ||
      !player7 ||
      !player8 ||
      !player9 ||
      !player10 ||
      !player11
    ) {
      res.status(500).json({ message: "Please enter valid data!" });
      return;
    }

    const teamData = [
      {
        id: Math.random() * 11,
        batter: player1,
        r: 0,
        b: 0,
        4: 0,
        6: 0,
        SR: 0,
        O: 0,
        M: 0,
        R: 0,
        W: 0,
        ECO: 0,
      },
      {
        id: Math.random() * 11,
        batter: player2,
        r: 0,
        b: 0,
        4: 0,
        6: 0,
        SR: 0,
        O: 0,
        M: 0,
        R: 0,
        W: 0,
        ECO: 0,
      },
      {
        id: Math.random() * 11,
        batter: player3,
        r: 0,
        b: 0,
        4: 0,
        6: 0,
        SR: 0,
        O: 0,
        M: 0,
        R: 0,
        W: 0,
        ECO: 0,
      },
      {
        id: Math.random() * 11,
        batter: player4,
        r: 0,
        b: 0,
        4: 0,
        6: 0,
        SR: 0,
        O: 0,
        M: 0,
        R: 0,
        W: 0,
        ECO: 0,
      },
      {
        id: Math.random() * 11,
        batter: player5,
        r: 0,
        b: 0,
        4: 0,
        6: 0,
        SR: 0,
        O: 0,
        M: 0,
        R: 0,
        W: 0,
        ECO: 0,
      },
      {
        id: Math.random() * 11,
        batter: player6,
        r: 0,
        b: 0,
        4: 0,
        6: 0,
        SR: 0,
        O: 0,
        M: 0,
        R: 0,
        W: 0,
        ECO: 0,
      },
      {
        id: Math.random() * 11,
        batter: player7,
        r: 0,
        b: 0,
        4: 0,
        6: 0,
        SR: 0,
        O: 0,
        M: 0,
        R: 0,
        W: 0,
        ECO: 0,
      },
      {
        id: Math.random() * 11,
        batter: player8,
        r: 0,
        b: 0,
        4: 0,
        6: 0,
        SR: 0,
        O: 0,
        M: 0,
        R: 0,
        W: 0,
        ECO: 0,
      },
      {
        id: Math.random() * 11,
        batter: player9,
        r: 0,
        b: 0,
        4: 0,
        6: 0,
        SR: 0,
        O: 0,
        M: 0,
        R: 0,
        W: 0,
        ECO: 0,
      },
      {
        id: Math.random() * 11,
        batter: player10,
        r: 0,
        b: 0,
        4: 0,
        6: 0,
        SR: 0,
        O: 0,
        M: 0,
        R: 0,
        W: 0,
        ECO: 0,
      },
      {
        id: Math.random() * 11,
        batter: player11,
        r: 0,
        b: 0,
        4: 0,
        6: 0,
        SR: 0,
        O: 0,
        M: 0,
        R: 0,
        W: 0,
        ECO: 0,
      },
    ];

    try {
      const db = client.db();
      const result = await db
        .collection("TeamPlayers")
        .insertOne({ name, teamData });
      res.status(201).json({ message: "Added team players", data: teamData });
      client.close();
      return result;
    } catch (err) {
      res.status(500).json({ message: "Failed to add data!" });
    }
  }

  if (req.method === "GET") {
    try {
      const db = client.db();
      const result = await db.collection("TeamPlayers").find().toArray();
      res
        .status(200)
        .json({ message: "Fetching teamplayers success", players: result });
      client.close();
      return result;
    } catch (err) {
      res.status(500).json({ message: "Failed to fetch team players!" });
    }
  }

}
