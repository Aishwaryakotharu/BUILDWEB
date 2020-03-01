const sequelize = require("sequelize");

const ClassDB = new sequelize(process.env.dbURL);
//promise authentication async
ClassDB.authenticate()
  .then(() => {
    console.log("connection succesful");
  })
  .catch(err => {
    console.log("onnection failed");
    console.log(err);
  });
module.exports = ClassDB;
