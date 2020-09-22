const express = require("express");
const router = express.Router();
const pool = require("../connection");

//this route displays the list of all products
router.get("/", async (req, res) => {
  try {
    const conn = await pool.getConnection();
    const queryResponse = await conn.execute(`SELECT * FROM shopeasy.products`);
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
      `SELECT * FROM shopeasy.products WHERE id = ?`,
      [id]
    );
    conn.release();
    const product = queryResponse && queryResponse[0] && queryResponse[0][0];
    if (!product) {
      res.status(404).end();
    }
    res.status(200).send(product);
  } catch (error) {
    res.status(500).send(error);
  }
});

//it creates a product
router.post("/", async (req, res) => {
  try {
    const {
      title,
      slug,
      price,
      description,
      background,
      image,
      estimated_shipping,
    } = req.body;
    if (
      !title ||
      !slug ||
      !price ||
      !description ||
      !background ||
      !image ||
      !estimated_shipping
    ) {
      res.status(400).end();
    }

    const conn = await pool.getConnection();
    const queryResponse = await conn.execute(
      `INSERT INTO shopeasy.products (title, slug, price, description, background, image, estimated_shipping) VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [title, slug, price, description, background, image, estimated_shipping]
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
      `DELETE FROM shopeasy.categories WHERE id = ?`,
      [id]
    );
    conn.release();
    res.status(200).send(queryResponse);
  } catch (error) {
    res.status(500).send(error);
  }
});

// it updates a product
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      res.status(400).end();
    }
    const conn = await pool.getConnection();
    const selectQuery = await conn.execute(
      `SELECT id FROM shopeasy.products WHERE id = ? LIMIT 1`,
      [id]
    );
    conn.release();
    const product = selectQuery && selectQuery[0] && selectQuery[0][0];
    if (!product) {
      res.status(400).end();
    }
    const {
      title,
      slug,
      price,
      description,
      background,
      image,
      estimated_shipping,
    } = req.body;
    if (
      !title ||
      !slug ||
      !price ||
      !description ||
      !background ||
      !image ||
      !estimated_shipping
    ) {
      res.status(400).end();
    }
    const queryResponse = await conn.execute(
      `UPDATE shopeasy.products SET title = ?, slug = ?, price = ?, description = ?, background = ?, image = ?, estimated_shipping = ? WHERE id = ?`,
      [
        title,
        slug,
        price,
        description,
        background,
        image,
        estimated_shipping,
        id,
      ]
    );
    conn.release();
    console.log(queryResponse);
    res.send(queryResponse);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
