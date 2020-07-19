// @desc Get all transactions
// @route GET /api/v1/transactions
// @acces Public
exports.getTransactions = (req, res, next) => {
    res.send("GET Transactions")
}

// @desc Add transactions
// @route POST /api/v1/transactions
// @acces Public
exports.addTransaction = (req, res, next) => {
    res.send("POST Transaction")
}

// @desc Delete transactions
// @route DELETE /api/v1/transactions/:id
// @acces Public
exports.deleteTransaction = (req, res, next) => {
    res.send("DELETE Transaction")
}




