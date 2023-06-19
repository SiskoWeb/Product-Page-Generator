const express = require('express')
const { CreateOrder, getAllPOrders, updateIsDelivered, deleteOrder, getOneOrder } = require('../controller/orderController')
const router = express.Router()

const AuthService = require('../controller/authController')


router.route('/')
    .post(AuthService.protect, CreateOrder)
    .get(AuthService.protect, getAllPOrders)


router.route('/:id')
    .put(AuthService.protect, updateIsDelivered)
    .delete(AuthService.protect, deleteOrder)
    .get(AuthService.protect, getOneOrder)