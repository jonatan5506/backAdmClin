import mongoose from "mongoose";

const medicosSchema = new mongoose.Schema({
  id: { type: mongoose.Schema.Types.ObjectId },
  nome: {type: String, required: true},
  especialidade: {type: String},
  imagem: {type: String},
  nota: {type: Number}
  //crm
  //cpf
  //dataDeNascimento
}, {versionKey: false});

export const medicos = mongoose.model("medicos", medicosSchema);
