const mongoose = require("mongoose");

const connectDatabase = () => {
    mongoose.connect(process.env.db_url
    )
    .then(() => {
      console.log("MongoDB Connected Successfully ✅");
    })
    .catch((err) => {
      console.log(`MongoDB Connection Failed ❌: ${err.message}`);
      process.exit(1);
    });
};
module.exports = connectDatabase;
