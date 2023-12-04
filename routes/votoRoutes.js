import { Router } from "express";
import VotoController from "../controllers/VotoController.js";

const votoRoutes = Router();
const votoController = new VotoController();

votoRoutes.post("/", votoController.createVoto);
votoRoutes.get("/", votoController.getCantidadDeVotos);

export default votoRoutes;