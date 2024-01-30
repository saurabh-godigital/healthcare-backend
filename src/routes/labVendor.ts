import express from "express";
import { createLabVendor, updateVendor } from "../controllers/labVendor";
import { getAllVendor } from "../controllers/labVendor";


export default (router: express.Router) => {
  router.post("/labVender/register", createLabVendor);
  router.get("/labVender/getAllVendor",getAllVendor);
  router.put("/labVender/update/:id",updateVendor)
};