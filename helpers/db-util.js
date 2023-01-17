import { MongoClient } from "mongodb";

export async function connectDatabase() {
  const url = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_cluster}.tpavfve.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority`;
  const client = await MongoClient.connect(url);

  return client;
}

export async function getAllDocuments(client, collection, sort) {
  const db = client.db();

  const documents = await db.collection(collection).find().toArray();

  return documents;
}

//"mongodb+srv://vivekchowdary:vivek77@cluster0.tpavfve.mongodb.net/tournament?retryWrites=true&w=majority"
