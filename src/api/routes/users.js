const express = require("express");
const router = express.Router();
const pool = require("../connection");

//this route displays the list of all users
router.get("/", async (req, res) => {
  try {
    const conn = await pool.getConnection();
    const queryResponse = await conn.execute(`SELECT * FROM shopeasy.users`);
    conn.release();
    console.log(queryResponse);
    res.status(200).send(queryResponse[0]);
  } catch (error) {
    res.status(500).send(error);
  }
});

// it displays a specific user
router.get("/:email", async (req, res) => {
  try {
    const { email } = req.params;
    if (!email) {
      res.status(400).end();
    }
    const conn = await pool.getConnection();
    const queryResponse = await conn.execute(
      `SELECT * FROM shopeasy.users WHERE email = ?`,
      [email]
    );
    conn.release();
    const category = queryResponse && queryResponse[0] && queryResponse[0][0];
    if (!category) {
      res.status(404).end();
    }
    res.status(200).send(category);
  } catch (error) {
    res.status(500).send(error);
  }
});

//it creates a user
router.post("/", async (req, res) => {
  try {
    const { firstname, lastname, email, password } = req.body;
    if (!firstname || !lastname || !email || !password) {
      res.status(400).end();
    }

    const conn = await pool.getConnection();
    const queryResponse = await conn.execute(
      `INSERT INTO shopeasy.users (firstname, lastname, email, password) VALUES (?, ?, ?, ?)`,
      [firstname, lastname, email, password]
    );
    conn.release();
    console.log(queryResponse);
    res.status(200).send(queryResponse);
  } catch (error) {
    res.status(500).send(error);
  }
});

// it deletes a specific user
router.delete("/:email", async (req, res) => {
  try {
    const { email } = req.params;
    if (!email) {
      res.status(400).end();
    }
    const conn = await pool.getConnection();
    const queryResponse = await conn.execute(
      `DELETE FROM shopeasy.users WHERE email = ?`,
      [email]
    );
    conn.release();
    res.status(200).send(queryResponse);
  } catch (error) {
    res.status(500).send(error);
  }
});

// it updates a user
router.put("/:email", async (req, res) => {
  try {
    const { email } = req.params;
    if (!email) {
      res.status(400).end();
    }
    const conn = await pool.getConnection();
    const selectQuery = await conn.execute(
      `SELECT email FROM shopeasy.users WHERE email = ? LIMIT 1`,
      [email]
    );
    conn.release();
    const user = selectQuery && selectQuery[0] && selectQuery[0][0];
    if (!user) {
      res.status(400).end();
    }
    const { firstname, lastname, password } = req.body;
    if (!firstname || !lastname || !password) {
      res.status(400).end();
    }
    const queryResponse = await conn.execute(
      `UPDATE shopeasy.users SET firstname = ?, lastname = ?, password = ? WHERE email = ?`,
      [firstname, lastname, password, email]
    );
    conn.release();
    console.log(queryResponse);
    res.send(queryResponse);
  } catch (error) {
    res.status(500).send(error);
  }
});
module.exports = router;
