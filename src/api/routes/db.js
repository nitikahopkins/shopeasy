const pool = require("../connection");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const conn = await pool.getConnection();

    conn.query(`CREATE DATABASE IF NOT EXISTS ${process.env.DB_NAME}`);

    //console.log("connection created", conn);
    conn.release();
    res.end("1");
  } catch (error) {
    console.error(error);
    res.end("0");
  }
});

router.get("/users", async (req, res) => {
  try {
    const conn = await pool.getConnection();
    conn.query(`USE ${process.env.DB_NAME}`);
    const userDb = await conn.query(
      "CREATE TABLE IF NOT EXISTS `users` (`id` INT NOT NULL AUTO_INCREMENT, `firstname` VARCHAR(255) NOT NULL, `lastname` VARCHAR(255) NOT NULL,`email` VARCHAR(255) NOT NULL,`password` VARCHAR(255) NOT NULL, UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE, PRIMARY KEY (`id`), UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE, UNIQUE INDEX `password_UNIQUE` (`password` ASC) VISIBLE);"
    );
    console.log(userDb);

    conn.release();
    res.end("Created users Table");
  } catch (error) {
    console.error(error);
    res.end("Error with creating users table");
  }
});

router.get("/categories", async (req, res) => {
  try {
    const conn = await pool.getConnection();

    conn.query(`USE ${process.env.DB_NAME}`);

    const categoriesDb = await conn.query(
      "CREATE TABLE IF NOT EXISTS `categories` (`id` INT NOT NULL AUTO_INCREMENT,`slug` VARCHAR(255) NOT NULL, `name` VARCHAR(255) NOT NULL, `image` VARCHAR(255) NOT NULL,PRIMARY KEY (`id`),UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,UNIQUE INDEX `slug_UNIQUE` (`slug` ASC) VISIBLE,UNIQUE INDEX `name_UNIQUE` (`name` ASC) VISIBLE);"
    );
    console.log(categoriesDb);

    //console.log("connection created", conn);
    conn.release();
    res.end("Created Categories Table");
  } catch (error) {
    console.error(error);
    res.end("Error with creating categories table");
  }
});

router.get("/products", async (req, res) => {
  try {
    const conn = await pool.getConnection();

    conn.query(`USE ${process.env.DB_NAME}`);

    const productsDb = await conn.query(
      "CREATE TABLE IF NOT EXISTS `shopeasy`.`products` ( `id` INT NOT NULL AUTO_INCREMENT, `title` VARCHAR(255) NOT NULL, `slug` VARCHAR(255) NOT NULL, `price` FLOAT NOT NULL, `description` LONGTEXT NOT NULL, `background` LONGTEXT NULL, `image` VARCHAR(255) NULL, `estimated_shipping` DATETIME NULL, `category_id` INT NOT NULL, PRIMARY KEY (`id`), UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE, UNIQUE INDEX `slug_UNIQUE` (`slug` ASC) VISIBLE, INDEX `category_id_idx` (`category_id` ASC) VISIBLE, CONSTRAINT `category_id` FOREIGN KEY (`category_id`) REFERENCES `shopeasy`.`categories` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION)"
    );
    console.log(productsDb);

    //console.log("connection created", conn);
    conn.release();
    res.end("Created products Table");
  } catch (error) {
    console.error(error);
    res.end("Error with creating products table");
  }
});

// router.get("/category_product", async (req, res) => {
//   try {
//     const conn = await pool.getConnection();

//     conn.query(`USE ${process.env.DB_NAME}`);

//     const categoryproductDb = await conn.query(
//       "CREATE TABLE IF NOT EXISTS shopeasy.category_product (`category_id` INT NOT NULL, `product_id` INT NOT NULL, CONSTRAINT `category_id` FOREIGN KEY (`category_id`) REFERENCES shopeasy.`categories` (`id`)ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT `product_id` FOREIGN KEY (`product_id`) REFERENCES shopeasy.`products` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION)"
//     );
//     console.log(categoryproductDb);

//     //console.log("connection created", conn);
//     conn.release();
//     res.end("Created categoryproduct Table");
//   } catch (error) {
//     console.error(error);
//     res.end("Error with creating categoryproduct table");
//   }
// });

router.get("/attributes", async (req, res) => {
  try {
    const conn = await pool.getConnection();

    conn.query(`USE ${process.env.DB_NAME}`);

    const attributesDb = await conn.query(
      "CREATE TABLE IF NOT EXISTS `attributes` (`id` INT NOT NULL AUTO_INCREMENT,`name` VARCHAR(45) NOT NULL,PRIMARY KEY (`id`),UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE)"
    );
    console.log(attributesDb);

    //console.log("connection created", conn);
    conn.release();
    res.end("Created attributes Table");
  } catch (error) {
    console.error(error);
    res.end("Error with creating attributes table");
  }
});

router.get("/attribute_product", async (req, res) => {
  try {
    const conn = await pool.getConnection();

    conn.query(`USE ${process.env.DB_NAME}`);

    const attributeproductDb = await conn.query(
      "CREATE TABLE IF NOT EXISTS `attribute_product` (`attribute_id` INT NOT NULL,`product_id` INT NOT NULL,INDEX `attribute_id_idx` (`attribute_id` ASC) VISIBLE,INDEX `product_id_idx` (`product_id` ASC) VISIBLE,CONSTRAINT `attribute_id_1`FOREIGN KEY (`attribute_id`)REFERENCES `attributes` (`id`)ON DELETE NO ACTION ON UPDATE NO ACTION,CONSTRAINT `product_id_1`FOREIGN KEY (`product_id`)REFERENCES `products` (`id`)ON DELETE NO ACTION ON UPDATE NO ACTION)"
    );
    console.log(attributeproductDb);

    //console.log("connection created", conn);
    conn.release();
    res.end("Created attributeproduct Table");
  } catch (error) {
    console.error(error);
    res.end("Error with creating attributeproduct table");
  }
});

router.get("/attribute_values", async (req, res) => {
  try {
    const conn = await pool.getConnection();

    conn.query(`USE ${process.env.DB_NAME}`);

    const attributevaluesDb = await conn.query(
      "CREATE TABLE IF NOT EXISTS `attribute_values` (`id` INT NOT NULL AUTO_INCREMENT,`value` VARCHAR(45) NOT NULL,`attribute_id` INT NOT NULL,PRIMARY KEY (`id`),UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,UNIQUE INDEX `value_UNIQUE` (`value` ASC) VISIBLE,INDEX `attribute_id_idx` (`attribute_id` ASC) VISIBLE,CONSTRAINT `attribute_id`FOREIGN KEY (`attribute_id`)REFERENCES `attributes` (`id`)ON DELETE NO ACTION ON UPDATE NO ACTION)"
    );
    console.log(attributevaluesDb);

    //console.log("connection created", conn);
    conn.release();
    res.end("Created attributevalues Table");
  } catch (error) {
    console.error(error);
    res.end("Error with creating attributevalues table");
  }
});

router.get("/reviews", async (req, res) => {
  try {
    const conn = await pool.getConnection();

    conn.query(`USE ${process.env.DB_NAME}`);

    const reviewsDb = await conn.query(
      "CREATE TABLE IF NOT EXISTS `reviews` (`id` INT NOT NULL AUTO_INCREMENT,`product_id` INT NOT NULL,`comment` VARCHAR(45) NOT NULL,`rating` VARCHAR(255) NOT NULL,`date` DATETIME NULL,PRIMARY KEY (`id`),UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE, INDEX `product_id_idx` (`product_id` ASC) VISIBLE,CONSTRAINT `product_id_2`FOREIGN KEY (`product_id`)REFERENCES `products` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION)"
    );
    console.log(reviewsDb);

    //console.log("connection created", conn);
    conn.release();
    res.end("Created reviews Table");
  } catch (error) {
    console.error(error);
    res.end("Error with creating reviews table");
  }
});

module.exports = router;
