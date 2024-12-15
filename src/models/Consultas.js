import mongoose from "mongoose";

const consultasSchema = new mongoose.Schema({
  id: { type: mongoose.Schema.Types.ObjectId },
  data: {type: String, required: true},
  horario: {type: String, required: true},
  medico: { type: mongoose.Schema.Types.ObjectId, ref: "medicos" },
  pacientes: {type: mongoose.Schema.Types.ObjectId, ref: "pacientes"},
  modalidade: {type: String}
});

export const consultas = mongoose.model("consultas", consultasSchema);
