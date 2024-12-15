import express from "express";
import { PacientesController } from "../controller/pacienteController.js";

export const pacientesRoutes = express.Router();

pacientesRoutes.get("/pacientes", PacientesController.listasPacientes);
pacientesRoutes.post("/pacientes", PacientesController.cadastrarpaciente);