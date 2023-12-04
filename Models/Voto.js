import { DataTypes, Model } from "sequelize";
import connection from "../connection/connection.js";
import {DISTRITOS,CANDIDATOS} from "../utils/constantesVotos.js"

class Voto extends Model {}

Voto.init(
  {
    distrito: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "La zona no puede estar vacía.",
        },
        isIn: {
          args:[DISTRITOS],
          msg: "Zona no Correspondiente"
        } 
      },
    },
    candidato: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isIn:{
          args: [CANDIDATOS],
          msg: "Candidato no Válido"
        }
      },
    },
  },
  {
    sequelize: connection,
    modelName: "Voto",
    timestamps: false
  }
);

export { Voto };