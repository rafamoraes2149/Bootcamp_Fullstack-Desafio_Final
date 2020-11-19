const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;

// Aqui havia um erro difícil de pegar. Importei como "transactionModel",
// com "t" minúsculo. No Windows, isso não faz diferença. Mas como no Heroku
// o servidor é Linux, isso faz diferença. Gastei umas boas horas tentando
// descobrir esse erro :-/

const express = require('express');
const TransactionModel = require('../models/TransactionModel');

const GetService = async (req, res) => {
  try {
    const parametros = JSON.stringify(req.query);
    if (parametros === '{}') {
      throw new Error('Requisição vazia!');
    } else {
      const { period } = req.query;
      const transactions = await TransactionModel.find({ yearMonth: period });
      const response = {
        lenght: transactions.length,
        transactions: transactions,
      };
      res.send(response);
    }
  } catch (err) {
    console.log(err);
    res.status(400).send({
      erro: err + ' É necessário informar o "?period=" na query da requisição',
    });
  }
};

const PostService = async (req, res) => {
  try {
    let newData = req.body;
    newData = new TransactionModel(newData);
    await newData.save();
    res.send(newData);
  } catch (err) {
    console.log(err);
    res.status(400).send({
      erro: 'Erro ao tentar o POST',
    });
  }
};

const UpdateService = async (req, res) => {
  try {
    let newData = req.body;
    const dataId = newData._id;
    await TransactionModel.findByIdAndUpdate(dataId, newData);
    newData = new TransactionModel(newData);
    res.send(newData);
  } catch (err) {
    console.log(err);
    res.status(400).send({
      erro: 'Erro ao tentar o UPDATE: ' + err,
    });
  }
};

const DeleteService = async (req, res) => {
  // try {
  //   let dataToDelete = req.body;
  //   const dataId = dataToDelete._id;
  //   await TransactionModel.findByIdAndDelete(dataId);
  //   res.send('Registro apagado com sucesso');
  // } catch (err) {
  //   console.log(err);
  //   res.status(400).send({
  //     erro: 'Erro ao tentar o DELETE: ' + err,
  //   });
  // }
};

module.exports = { GetService, PostService, UpdateService, DeleteService };
