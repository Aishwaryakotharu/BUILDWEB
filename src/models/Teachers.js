const Sequelize = require("sequelize");
const ClassDB = require("../config/ClassDB");

const Teacher = ClassDB.define("teachers", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  firstName: {
    type: Sequelize.STRING,
    field: "first_name",
    allowNull: false
  },
  lastName: {
    type: Sequelize.STRING,
    field: "last_name",
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    unique: true,
    validate: {
      isEmail: true
    }
  },
  class: Sequelize.STRING,
  subject: {
    type: Sequelize.ENUM,
    values: ["english", "maths", "physics"],
    allowNull: false
  }
});

const newTeacher = {
  firstName: "Dani",
  lastName: "Akash",
  email: "test@gmail.com",
  subject: "english"
};

const teacherData = [
  {
    firstName: "aish",
    lastName: "kotharu",
    email: "test23@gmail.com",
    subject: "english"
  },
  {
    firstName: "a1",
    lastName: "k1",
    email: "test2@gmail.com",
    subject: "english"
  },
  {
    firstName: "a2",
    lastName: "k2",
    email: "test3@gmail.com",
    subject: "english"
  },
  {
    firstName: "a3",
    lastName: "k3",
    email: "test4@gmail.com",
    subject: "english"
  },
  {
    firstName: "a4",
    lastName: "k4",
    email: "test5@gmail.com",
    subject: "english"
  }
];

Teacher.sync({ force: true })
  .then(() => {
    return Teacher.bulkCreate(teacherData, { returning: true });
  })
  .then(result => {
    console.log(result.forEach(item => console.log(item.get())));
  })
  .catch(console.error);
