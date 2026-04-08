const sampleProducts = [
  {
    id: "1",
    name: "Laptop",
    description: "High performance laptop",
    price: 250000,
    category: "Electronics",
    image: "https://via.placeholder.com/300",
    stock: 10,
  },
  {
    id: "2",
    name: "Wireless Mouse",
    description: "Smooth and fast wireless mouse",
    price: 5500,
    category: "Accessories",
    image: "https://via.placeholder.com/300",
    stock: 25,
  },
  {
    id: "3",
    name: "Keyboard",
    description: "Mechanical keyboard",
    price: 12500,
    category: "Accessories",
    image: "https://via.placeholder.com/300",
    stock: 15,
  },
];

const getAllProducts = async (req, res, next) => {
  try {
    res.status(200).json({
      success: true,
      message: "Products fetched successfully",
      data: sampleProducts,
    });
  } catch (error) {
    next(error);
  }
};

const getProductById = async (req, res, next) => {
  try {
    const product = sampleProducts.find((item) => item.id === req.params.id);

    if (!product) {
      res.status(404);
      throw new Error("Product not found");
    }

    res.status(200).json({
      success: true,
      message: "Product fetched successfully",
      data: product,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllProducts,
  getProductById,
};