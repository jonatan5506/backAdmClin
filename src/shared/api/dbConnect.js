import mongoose from "mongoose";

async function conectaComDb() {
  await mongoose.connect(process.env.DB_CONNECTION_STRING);
  return mongoose.connection;
}

export default conectaComDb;

// mongoose.connect(process.env.DB_CONNECTION_STRING);
// let db = mongoose.connection;
//export default db;
