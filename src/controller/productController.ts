import { Request, Response } from 'express'
import productService from '../services/ProductService';


class ProductController{    

    public async createProduct(req, res) {

        productService.createProduct(req.body);
        res.status(200).json({message: 'product created sucessfully'});
    }

    public async getAllProducts(req, res) {
        const products = productService.getAll();
        res.status(200).json(products)
    }

    public async getStock(req, res) {
        const stock = productService.getStock()
        res.status(200).json(stock)
    }

    public getStockPrice(req, res){
        const stock = productService.getStockPrice()
        res.status(200).json(stock)
    }

}

export default new ProductController()