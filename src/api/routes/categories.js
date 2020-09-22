const express = require("express");
const router = express.Router();
const pool = require("../connection");

//this route displays the list of all categories
async function abc(category) {
  try {
    const conn1 = await pool.getConnection();
    const query1Response = await conn1.execute(
      `SELECT * FROM shopeasy.products WHERE category_id = ?`,
      [category.id]
    );

    // category.products = await query1Response[0];
    return category;
  } catch (error) {
    console.error(error);
  }
}
router.get("/", async (req, res) => {
  try {
    const conn = await pool.getConnection();
    const queryResponse = await conn.execute(
      `SELECT * FROM shopeasy.categories`
    );
    // let categories = await queryResponse[0];
    // categories = await categories.forEach((category) => {
    //   console.log(category);
    //   return category;
    //  });
    // const abc1 = await categories.map(async (category) => await abc(category));
    conn.release();
    res.status(200).send(queryResponse[0]);
  } catch (error) {
    res.status(500).send(error);
  }
});

// it displays a specific category
router.get("/:slug", async (req, res) => {
  try {
    const { slug } = req.params;
    if (!slug) {
      res.status(400).end();
    }
    const conn = await pool.getConnection();
    const queryResponse = await conn.execute(
      `SELECT * FROM shopeasy.categories WHERE slug = ?`,
      [slug]
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

//it creates a category
router.post("/", async (req, res) => {
  try {
    const { slug, name, image } = req.body;
    if (!slug || !name || !image) {
      res.status(400).end();
    }

    const conn = await pool.getConnection();
    const queryResponse = await conn.execute(
      `INSERT INTO shopeasy.categories (slug, name, image) VALUES (?, ?, ?)`,
      [slug, name, image]
    );
    conn.release();
    console.log(queryResponse);
    res.status(200).send(queryResponse);
  } catch (error) {
    res.status(500).send(error);
  }
});
// it deletes a specific category i.e. Men || Women
router.delete("/:slug", async (req, res) => {
  try {
    const { slug } = req.params;
    if (!slug) {
      res.status(400).end();
    }
    const conn = await pool.getConnection();
    const queryResponse = await conn.execute(
      `DELETE FROM shopeasy.categories WHERE slug = ?`,
      [slug]
    );
    conn.release();
    res.status(200).send(queryResponse);
  } catch (error) {
    res.status(500).send(error);
  }
});
// it updates a category i.e. MEN || WOMEN
router.put("/:slug", async (req, res) => {
  try {
    const { slug } = req.params;
    if (!slug) {
      res.status(400).end();
    }
    const conn = await pool.getConnection();
    const selectQuery = await conn.execute(
      `SELECT slug FROM shopeasy.categories WHERE slug = ? LIMIT 1`,
      [slug]
    );
    conn.release();
    const category = selectQuery && selectQuery[0] && selectQuery[0][0];
    if (!category) {
      res.status(400).end();
    }
    const { name, image } = req.body;
    if (!name || !image) {
      res.status(400).end();
    }
    const queryResponse = await conn.execute(
      `UPDATE shopeasy.categories SET name = ?, image = ? WHERE slug = ?`,
      [name, image, slug]
    );
    conn.release();
    console.log(queryResponse);
    res.send(queryResponse);
  } catch (error) {
    res.status(500).send(error);
  }
});

//https://www.freecodecamp.org/news/how-to-make-create-react-app-work-with-a-node-backend-api-7c5c48acb1b0/
module.exports = router;
