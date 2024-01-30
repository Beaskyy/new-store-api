const getAllProductsStatic = async (req, res) => {
  res.status(200).json({ msg: `Products testing routes` });
};

const getAllProducts = async (req, res) => {
  res.status(200).json({ msg: `Get all products` });
};

module.exports = {
  getAllProducts,
  getAllProductsStatic,
};
