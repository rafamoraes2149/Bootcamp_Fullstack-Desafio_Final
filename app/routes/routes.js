const express = require('express');
const transactionRouter = express.Router();
const TransactionService = require('../services/TransactionService.js');

transactionRouter.get('/', TransactionService.GetService);

transactionRouter.post('/', TransactionService.PostService);

transactionRouter.patch('/', TransactionService.UpdateService);

transactionRouter.delete('/', TransactionService.DeleteService);

module.exports = transactionRouter;
