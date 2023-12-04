import VotoApi from "../Api/VotoApi.js";

class VotoController {
  constructor() {
    this.votoApi = new VotoApi();
  }

  createVoto = async (req, res) => {
    try {
      const { distrito, candidato } = req.body;
      const voto = await this.votoApi.createVoto({ distrito, candidato });
      if (voto == null) throw new Error("Error al cargar el voto")
      return res.status(200).send({ success: true, message: "Voto cargado"});
    } catch (error) {
      return res.status(400).send({ success: false, message: error.message });
    }
  };
  getCantidadDeVotos = async (req, res) => {
    try{
      const cantidadDeVotos = await this.votoApi.getCantidadDeVotos();
      if (JSON.stringify(cantidadDeVotos) === '{}') {
        return res.status(404).send({ success: false, message: "No hay votos"});
      }
      return res.status(200).send({ success: true, message: "Todos los votos de los candidatos", data: cantidadDeVotos });
    } catch (error) {
      return res.status(400).send({ success: false, message: error.message });
    }
  };
  
}

export default VotoController;
