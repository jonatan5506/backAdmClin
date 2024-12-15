import mongoose from "mongoose";

//TODO validação de cpf
const pacientesSchema = new mongoose.Schema({
  id: { type: mongoose.Schema.Types.ObjectId },
  nome: {type: String, required: true},
  cpf: {type: String, required: true},
  dataDeNascimento: {type: Date},
  imagem: {type: String}
}, {versionKey: false});

export const pacientes = mongoose.model("pacientes", pacientesSchema);
