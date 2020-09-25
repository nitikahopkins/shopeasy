require("dotenv").config();
const express = require("express");
const mysql = require("mysql2/promise");
const cors = require("cors");
//const bodyParser = require("body-parser");

const PORT = 4000;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
});

const dbRouter = require("./routes/db");
const categoriesRouter = require("./routes/categories");
const usersRouter = require("./routes/users");
const productsRouter = require("./routes/products");
const attributesRouter = require("./routes/attributes");
const attribute_valuesRouter = require("./routes/attribute_values");
const reviewsRouter = require("./routes/reviews");

app.use("/api/db", dbRouter);
app.use("/api/categories", categoriesRouter);
app.use("/api/users", usersRouter);
app.use("/api/products", productsRouter);
app.use("/api/attributes", attributesRouter);
app.use("/api/attribute_values", attribute_valuesRouter);
app.use("/api/reviews", reviewsRouter);

app.listen(PORT, () => console.log(`server is running on port${PORT}`));

module.exports = app;
