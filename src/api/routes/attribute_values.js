const express = require("express");
const router = express.Router();
const pool = require("../connection");

//this route displays the list of all attribute values for the attribute id
router.get("/:attribute_id", async (req, res) => {
  try {
    const { attribute_id } = req.params;
    if (!attribute_id) {
      res.status(400).end();
    }
    const conn = await pool.getConnection();
    const queryResponse = await conn.execute(
      `SELECT * FROM shopeasy.attribute_values WHERE attribute_id = ?`,
      [attribute_id]
    );
    conn.release();
    // const attribute_value =
    //   queryResponse && queryResponse[0] && queryResponse[0][0];
    // if (!attribute_value) {
    //   res.status(404).end();
    // }
    console.log(queryResponse);
    res.status(200).send(queryResponse);
  } catch (error) {
    res.status(500).send(error);
  }
});

//this route displays the list of all attribute values
router.get("/", async (req, res) => {
  try {
    const conn = await pool.getConnection();
    const queryResponse = await conn.execute(
      `SELECT * FROM shopeasy.attribute_values`
    );
    conn.release();
    console.log(queryResponse);
    res.status(200).send(queryResponse[0]);
  } catch (error) {
    res.status(500).send(error);
  }
});

//it creates an attribute value
router.post("/", async (req, res) => {
  try {
    const { attribute_id, value, icon_image } = req.body;
    if (!attribute_id || !value || !icon_image) {
      res.status(400).end();
    }

    const conn = await pool.getConnection();
    const queryResponse = await conn.execute(
      `INSERT INTO shopeasy.attribute_values (attribute_id, value, icon_image) VALUES (?, ?, ?)`,
      [attribute_id, value, icon_image]
    );
    conn.release();
    console.log(queryResponse);
    res.status(200).send(queryResponse);
  } catch (error) {
    res.status(500).send(error);
  }
});
module.exports = router;
