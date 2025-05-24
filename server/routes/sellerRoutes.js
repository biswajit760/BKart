import express from 'express'
import authSeller from '../middlewares/authSeller.js';
import { isSellerAuth, sellerLogin, SellerLogout } from '../controllers/sellerController.js';

const sellerRouter = express.Router();

sellerRouter.post('/login', sellerLogin);
sellerRouter.get('/is-auth', authSeller, isSellerAuth);
sellerRouter.get('/logout', authSeller, SellerLogout)

export default sellerRouter;   