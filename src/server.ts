import express from 'express';
import cors from 'cors';

import { router } from './router';

import { PetToAdd, PetToFind, PetToRemove, PetToUpdate } from './controllers/PetController';

const app = express();

app.use(cors());
app.use(express.json());
app.use(router);


// Adicionar
const toAdd = new PetToAdd();
router.post("/ToAdd", toAdd.handle)

// // Adicionar
// const toFind = new PetToFind();
// router.post("/ToFind", toFind.handle)

// Adicionar
const toFind = new PetToFind();
router.get("/ToFind", toFind.handle)

// Adicionar
const toRemove = new PetToRemove();
router.delete("/ToRemove", toRemove.handle)


// Adicionar
const toUpdate = new PetToUpdate();
router.put("/ToUpdate", toUpdate.handle)



app.listen(4003, () => console.log("server is running on PORT 4003"))