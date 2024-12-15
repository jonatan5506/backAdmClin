import express from "express";

import { pacientesRoutes } from "./pacientesRoutes.js";

const routes = (app) => {
  app.route("/").get((req, res) => res.status(200).send("Clinica em Desenvolvimento!"));

  app.use(express.json(), pacientesRoutes);
};

export default routes;