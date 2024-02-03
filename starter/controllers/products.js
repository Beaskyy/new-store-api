const product = require("../models/product");
const Product = require("../models/product");

const getAllProductsStatic = async (req, res) => {
  const products = await Product.find({
    name: "vase table",
  });
  res.status(200).json({ products, nbHits: products.length });
};

const getAllProducts = async (req, res) => {
  const { featured, company, name } = req.query;

  const queryObjects = {};

  if (featured) {
    queryObjects.featured = featured === "true" ? true : false;
  }

  if (company) {
    queryObjects.company = company;
  }

  if (name) {
    queryObjects.name = name;
  }

  console.log(queryObjects);
  const products = await Product.find(queryObjects);
  res.status(200).json({ products, nbHits: products.length });
};

module.exports = {
  getAllProducts,
  getAllProductsStatic,
};
