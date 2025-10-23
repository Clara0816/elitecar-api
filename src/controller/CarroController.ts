import Carro from "../model/Carro.js";
import type { Request, Response } from "express";


class CarroController extends Carro {   
    
    static async todos(req: Request, res: Response): Promise<Response> {
        try {
            // Chama o método listarCarros da classe Carro para buscar todos os carros no banco de dados
            const listaCarro: Array<Carro> | null = await Carro.listarCarros();

            // Retorna uma resposta HTTP com status 200 (OK) e envia a lista de carros em formato JSON
            return res.status(200).json(listaCarro);

        } catch (error) {
            // Em caso de erro, exibe a mensagem no console para ajudar na depuração
            console.error(`Erro ao consultar modelo. ${error}`);

            // Retorna uma resposta HTTP com status 500 (erro interno do servidor)
            // Envia uma mensagem informando que não foi possível acessar os dados
            return res.status(500).json({ mensagem: "Não foi possivel acessar a lista de carro." });
        }
    }

}


export default CarroController;