import { pacientes as tablePacientes } from "../models/Paciente.js";

export class PacientesController {
  static async listasPacientes(req, res) {
    try {
      const dadosDosPacientes = await tablePacientes.find({});
      res.status(200).send(dadosDosPacientes);
    } catch (error) {
      res
        .status(500)
        .json({ message: `Falha na requisição - ${error.message}` });
    }
  }

  static async cadastrarpaciente(req, res) {
    try {
      const dadosDoPaciente = await tablePacientes.create(req.body);
      res.status(201).json({ message: "Criado com sucesso", dadosDoPaciente });
    } catch (error) {
      res
        .status(500)
        .json({ message: `Falha ao cadastrar paciente - ${error.message}` });
    }
  }
}
