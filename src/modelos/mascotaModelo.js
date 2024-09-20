import Sequelize  from "sequelize";
import {db} from "../database/conexion.js";
import sequelize from "sequelize";


const mascotas = db.define("mascotas",{
  id: {
    type: sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
},
nombre: {
    type: sequelize.STRING,
    allowNull: true
},
especie: {
    type: sequelize.STRING,
    allowNull: false
},
raza: {
    type: sequelize.STRING,
    allowNull: true
},
edad: {
    type: sequelize.INTEGER,
    allowNull: true
},
descripcion: {
    type: sequelize.STRING,
    allowNull: true
},
estado: {
    type: sequelize.STRING,
    allowNull: false,
    defaultValue: 'disponible'
},
fecha_registro: {
    type: sequelize.DATE,
    allowNull: true
}
});

export {mascotas}
