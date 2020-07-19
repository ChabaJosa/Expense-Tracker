const Transaction = require("../models/Transaction");


// @desc Get all transactions
// @route GET /api/v1/transactions
// @acces Public
exports.getTransactions = async (req, res, next) => {
  try {
    const transactions = await Transaction.find(); // This Transaction is the model
    return res.status(200).json({
      success: true,
      count: transactions.length,
      data: transactions,
    });
  } catch (err) {
    return res.status(500).json({
      // 500 is the usual server error
      success: false,
      error: "Server Error",
    });
  }
};

// @desc Add transactions
// @route POST /api/v1/transactions
// @acces Public
exports.addTransaction = async (req, res, next) => {
  try {
    const { text, amount } = req.body;
    const transaction = await Transaction.create(req.body);

    return res.status(201).json({
      // 201 is ususally the status when you create/add something and it's a success
      success: true,
      data: transaction,
    });
  } catch (err) {
    if (err.name === "ValidationError") {
      const messages = Object.values(err.errors).map((val) => val.message);
      return res.status(400).json({
        // 400 because Client didn't send whatever he was supposed to
        success: false,
        error: messages,
      });
    } else {
      return res.status(500).json({
        success: false,
        error: "Server Error",
      });
    }
  }
};

// @desc Delete transactions
// @route DELETE /api/v1/transactions/:id
// @acces Public
exports.deleteTransaction = async (req, res, next) => {

  try {
    const transaction = await Transaction.findById(req.params.id);
    if (!transaction) {
      return res.status(404).json({
        success: false,
        error: "No transaction found"
      });
    }

    await transaction.remove();

    return res.status(200).json({
      success: true,
      data: {}
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: `Server Error: ${err.message}`,
    });
  }
};




