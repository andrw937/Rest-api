import { Router } from "express";
import { getEmployees, createEmployees,updateEmployees,deleteEmployees,getEmployee } from '../controllers/employes.controler.js';
const router = Router()


router.get("/empleados", getEmployees );

router.get("/empleados/:id", getEmployee);

router.post("/empleados",createEmployees);

router.patch("/empleados/:id",updateEmployees); //actuali zar algunos datos para que no queden datos en "NULL"

router.delete("/empleados/:id",deleteEmployees);


export default router