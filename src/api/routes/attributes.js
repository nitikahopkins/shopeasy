const express = require("express");
const router = express.Router();
const pool = require("../connection");

//this route displays the list of all attributes
router.get("/", async (req, res) => {
  try {
    const conn = await pool.getConnection();
    const queryResponse = await conn.execute(
      `SELECT * FROM shopeasy.attributes`
    );
    conn.release();
    console.log(queryResponse);
    res.status(200).send(queryResponse[0]);
  } catch (error) {
    res.status(500).send(error);
  }
});

// it displays a specific attribute
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      res.status(400).end();
    }
    const conn = await pool.getConnection();
    const queryResponse = await conn.execute(
      `SELECT * FROM shopeasy.attributes WHERE id = ?`,
      [id]
    );
    conn.release();
    const attribute = queryResponse && queryResponse[0] && queryResponse[0][0];
    if (!attribute) {
      res.status(404).end();
    }
    res.status(200).send(attribute);
  } catch (error) {
    res.status(500).send(error);
  }
});

//it creates an attribute
router.post("/", async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) {
      res.status(400).end();
    }

    const conn = await pool.getConnection();
    const queryResponse = await conn.execute(
      `INSERT INTO shopeasy.attributes (name) VALUES (?)`,
      [name]
    );
    conn.release();
    console.log(queryResponse);
    res.status(200).send(queryResponse);
  } catch (error) {
    res.status(500).send(error);
  }
});

// it deletes a specific attribute
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      res.status(400).end();
    }
    const conn = await pool.getConnection();
    const queryResponse = await conn.execute(
      `DELETE FROM shopeasy.attributes WHERE id = ?`,
      [id]
    );
    conn.release();
    res.status(200).send(queryResponse);
  } catch (error) {
    res.status(500).send(error);
  }
});

// it updates an attribute
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      res.status(400).end();
    }
    const conn = await pool.getConnection();
    const selectQuery = await conn.execute(
      `SELECT id FROM shopeasy.attributes WHERE id = ? LIMIT 1`,
      [id]
    );
    conn.release();
    const attribute = selectQuery && selectQuery[0] && selectQuery[0][0];
    if (!attribute) {
      res.status(400).end();
    }
    const { name } = req.body;
    if (!name) {
      res.status(400).end();
    }
    const queryResponse = await conn.execute(
      `UPDATE shopeasy.attributes SET name = ? WHERE id = ?`,
      [name, id]
    );
    conn.release();
    console.log(queryResponse);
    res.send(queryResponse);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
