import express from "express";
import {crear,buscar,buscarId,actualizar,eliminar} from "../controladores/mascotasController.js";

const routerMascotas = express.Router();

routerMascotas.get('/', (req, res) => {
    res.send('empresa_adopcion este es el Sitio de Mascotas');
});

routerMascotas.post('/crear', (req, res) => {
    //res.send('Crear Mascota');
    crear(req,res);
    
});

routerMascotas.get('/buscar', (req, res) => {
    //res.send('Buscar Mascota');
    buscar(req,res);
});

routerMascotas.get('/buscar/:id', (req, res) => {
    //res.send('Buscar Mascota');
    buscarId(req,res);
});

routerMascotas.put('/actualizar/:id', (req, res) => {
    //res.send('Actualizar Mascota');
    actualizar(req,res);
});

routerMascotas.delete('/eliminar/:id', (req, res) => {
    eliminar(req,res);
});

export {routerMascotas}