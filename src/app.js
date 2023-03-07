const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require('./db/models/index');
const api =require('./routes');

const app = express();
const corsOptions = {
  origin: "http://localhost:8081"
};
const { sequelize: dbCon } = db;
const PORT = process.env.PORT || 8080;
app.use(cors(corsOptions));
app.use(express.json());
app.use('/api', api)


app.get("/", (req, res) => {
  res.json({ message: "Welcome to Classfied app" });
});

dbCon
  .sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log(
        `Database succesfully connected ✅\nServer is up and running on port ${PORT}`
      );
    });
  })
  .catch((error) => {
    console.log(error);
  });