const sendOrderToERP = async (orderPayload) => {
  return {
    success: true,
    message: "ERP integration placeholder",
    data: {
      erpOrderId: "ERP-PLACEHOLDER-001",
      status: "Created",
    },
  };
};

module.exports = {
  sendOrderToERP,
};