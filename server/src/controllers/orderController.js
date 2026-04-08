const checkoutOrder = async (req, res, next) => {
  try {
    const { customer, items, shippingAddress, paymentMethod, totalAmount } = req.body;

    if (!customer || !items || items.length === 0 || !shippingAddress || !paymentMethod) {
      res.status(400);
      throw new Error("Missing required checkout data");
    }

    res.status(201).json({
      success: true,
      message: "Order checkout successful. Ready to send to ERP.",
      data: {
        storefrontOrderId: "SF-1001",
        erpOrderId: null,
        status: "Pending ERP Sync",
        customer,
        items,
        shippingAddress,
        paymentMethod,
        totalAmount,
      },
    });
  } catch (error) {
    next(error);
  }
};

const getMyOrders = async (req, res, next) => {
  try {
    res.status(200).json({
      success: true,
      message: "Customer orders fetched successfully",
      data: [
        {
          storefrontOrderId: "SF-1001",
          erpOrderId: "ERP-5001",
          status: "Processing",
          totalAmount: 255500,
        },
        {
          storefrontOrderId: "SF-1002",
          erpOrderId: "ERP-5002",
          status: "Delivered",
          totalAmount: 12500,
        },
      ],
    });
  } catch (error) {
    next(error);
  }
};

const getOrderById = async (req, res, next) => {
  try {
    const orderId = req.params.id;

    res.status(200).json({
      success: true,
      message: "Order fetched successfully",
      data: {
        storefrontOrderId: orderId,
        erpOrderId: "ERP-5001",
        status: "Processing",
        totalAmount: 255500,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  checkoutOrder,
  getMyOrders,
  getOrderById,
};