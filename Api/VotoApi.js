import { Voto } from "../Models/Voto.js";

class VotoApi {
  createVoto = async (voto) => {
    try {
      const votoCreado = await Voto.create(voto);
      return await votoCreado;
    } catch (error) {
      throw error;
    }
  };
  getCantidadDeVotos = async () => {
    try {
      const todosLosVotos = await Voto.findAll({
        attributes: ["candidato"],
      });

      const cantidadDeVotos = {};
      todosLosVotos.forEach((voto) => {
        if (!cantidadDeVotos[voto.candidato]) {
          cantidadDeVotos[voto.candidato] = 1;
        } else {
          cantidadDeVotos[voto.candidato] += 1;
        }
      });
      return await cantidadDeVotos;

    } catch (error) {
      throw error;
    }
  };
}

export default VotoApi;