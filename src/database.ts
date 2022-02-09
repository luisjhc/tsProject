import mongoose from "mongoose";
import config from "./config";

// connecting to database
(async () => {
  try {
    const db = await mongoose.connect(
      `mongodb://${config.MONGO_HOST}/${config.MONGO_DATABASE}`
    );
    console.log("database is connceted to:", db.connection.name);
  } catch (err) {
    console.error(err);
  }
})();
