import express from 'express';
import mongoose from 'mongoose';
import { getProducts, postProduct, putProduct, deleteProduct} from "../controllers/product.controller.js";

const router = express.Router();

//gets product
router.get("/", getProducts);

//creates product
router.post("/", postProduct);

//updates product by id
/**
 * The PUT method is used to update an existing resource.
 * In this case, it will update the product with the given id.
 */
router.put("/:id", putProduct);

//deletes product by id
/**
 * The DELETE method is used to delete a resource.
 * In this case, it will delete the product with the given id.
 */
router.delete("/:id", deleteProduct);

export default router; //exporting the router to use in server.js