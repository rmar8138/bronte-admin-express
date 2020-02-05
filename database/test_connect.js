const mongoose = require("mongoose");

module.exports = dbHostName => {
  mongoose.connect(dbHostName, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  mongoose.Promise = global.Promise;
  mongoose.connection.on("error", console.log);
  return mongoose;
};
