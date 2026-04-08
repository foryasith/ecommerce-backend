const registerUser = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      res.status(400);
      throw new Error("Name, email, and password are required");
    }

    res.status(201).json({
      success: true,
      message: "User registered successfully",
      data: {
        id: "temp-user-id",
        name,
        email,
      },
    });
  } catch (error) {
    next(error);
  }
};

const loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      res.status(400);
      throw new Error("Email and password are required");
    }

    res.status(200).json({
      success: true,
      message: "Login successful",
      data: {
        id: "temp-user-id",
        name: "Demo User",
        email,
        token: "temp-jwt-token",
      },
    });
  } catch (error) {
    next(error);
  }
};

const getProfile = async (req, res, next) => {
  try {
    res.status(200).json({
      success: true,
      message: "Profile fetched successfully",
      data: {
        id: "temp-user-id",
        name: "Demo User",
        email: "demo@example.com",
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  registerUser,
  loginUser,
  getProfile,
};