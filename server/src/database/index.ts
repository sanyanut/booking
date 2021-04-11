import { MongoClient } from "mongodb";
import { Database } from "../lib/types";
// Note: Need to add appropriate credentials here to make the connection
// Note #2: Database credentials should never be committed to source code!


const url = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_USER_PASSWORD}@${process.env.DB_CLUSTER}.mongodb.net`;

export const connectDatabase = async (): Promise<Database> => {
  const client = await MongoClient.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  const db = client.db("main");

  return {
    listings: db.collection("test_listings")
  };
};


