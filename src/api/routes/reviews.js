const express = require("express");
const router = express.Router();
const pool = require("../connection");

//this route displays the list of all categories
router.get("/", async (req, res) => {
  try {
    const conn = await pool.getConnection();
    const queryResponse = await conn.execute(`SELECT * FROM shopeasy.reviews`);
    conn.release();
    console.log(queryResponse);
    res.status(200).send(queryResponse[0]);
  } catch (error) {
    res.status(500).send(error);
  }
});

// it displays a specific product
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      res.status(400).end();
    }
    const conn = await pool.getConnection();
    const queryResponse = await conn.execute(
      `SELECT * FROM shopeasy.reviews WHERE id = ?`,
      [id]
    );
    conn.release();
    const review = queryResponse && queryResponse[0] && queryResponse[0][0];
    if (!review) {
      res.status(404).end();
    }
    res.status(200).send(review);
  } catch (error) {
    res.status(500).send(error);
  }
});

// it creates a review for a product
router.post("/", async (req, res) => {
  try {
    const { product_id, comment, rating, date } = req.body;
    if (!product_id || !comment || !rating || !date) {
      res.status(400).end();
    }
    const conn = await pool.getConnection();
    const queryResponse = await conn.execute(
      `INSERT INTO shopeasy.reviews (product_id, comment, rating, date) VALUES (?, ?, ?, ?)`,
      [product_id, comment, rating, new Date()]
    );
    conn.release();
    console.log(queryResponse);
    res.status(200).send(queryResponse);
  } catch (error) {
    res.status(500).send(error);
  }
});

// it deletes a specific product
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      res.status(400).end();
    }
    const conn = await pool.getConnection();
    const queryResponse = await conn.execute(
      `DELETE FROM shopeasy.reviews WHERE id = ?`,
      [id]
    );
    conn.release();
    res.status(200).send(queryResponse);
  } catch (error) {
    res.status(500).send(error);
  }
});

// it updates a review
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      res.status(400).end();
    }
    const conn = await pool.getConnection();
    const selectQuery = await conn.execute(
      `SELECT id FROM shopeasy.reviews WHERE id = ? LIMIT 1`,
      [id]
    );
    conn.release();
    const review = selectQuery && selectQuery[0] && selectQuery[0][0];
    if (!review) {
      res.status(400).end();
    }
    const { comment, rating } = req.body;
    if (!comment || !rating) {
      res.status(400).end();
    }
    const queryResponse = await conn.execute(
      `UPDATE shopeasy.reviews SET comment = ?, rating = ? WHERE id = ?`,
      [comment, rating, id]
    );
    conn.release();
    console.log(queryResponse);
    res.send(queryResponse);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
