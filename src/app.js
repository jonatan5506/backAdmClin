import express from "express";
import cors from "cors";
import conectaComDb from "./shared/api/dbConnect.js";
import routes from "./routes/index.js";

const db = await conectaComDb();

db.on("error", console.log.bind(console, "Erro de conexão"));
db.once("open", () => {
  console.log("conexão com o banco feita com sucesso");
});

const app = express();

app.use(cors({
  origin: '*',  // Permite qualquer origem
}));

app.use(express.json());
routes(app);

export default app;
