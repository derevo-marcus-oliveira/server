import {Request, Response} from 'express'
import { client } from '../client';
import { Decimal } from '@prisma/client/runtime';


export class PetToAdd {
    async handle (request: Request, response: Response) {

        const { animal, raca, idade, sexo, nome, observacao, preco, url } = request.body;

        try {
            const pet = await client.pet.create({
                data: {
                    animal : animal,
                    raca : raca,
                    idade : idade,
                    sexo : sexo,
                    nome : nome,
                    observacao : observacao,
                    preco : preco,
                    url : url
                }
            });

            console.log(pet);

            return response.json(pet);
        }
        catch (err){
            return response.json(err);
        }
    }
}

export class PetToFind {
    async handle (request: Request, response: Response) {

        try {

            const pet = await client.pet.findMany();            

            return response.json(pet);
        }
        catch (err){
            return response.json(err);
        }
    }
}

export class PetToRemove {
    async handle (request: Request, response: Response) {

        try {

        }
        catch (err){

        }
    }
}


export class PetToUpdate {
    async handle (request: Request, response: Response) {

        try {

        }
        catch (err){

        }
    }
}

