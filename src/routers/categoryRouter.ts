import { Router } from "express";
import { getCategories } from "../controllers";

const categoryRouter = Router()

categoryRouter
.get('/', getCategories)

export { categoryRouter }