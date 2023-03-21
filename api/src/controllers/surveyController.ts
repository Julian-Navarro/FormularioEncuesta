import { Request, Response, NextFunction } from "express";
import { DatabaseRepository } from "../declarations";
import { Survey } from "../entity/Survey";

export class SurveyController {
    constructor(private repository: DatabaseRepository<Survey>) {}

    async list(
        req: Request, 
        res: Response, 
        next: NextFunction
        ):Promise<void> {
            try {
                const surveys = await this.repository.list()
                res.status(200).send(surveys)    
            } catch (error) {
                next(error)
            }
    };
    async create(
        req: Request, 
        res: Response, 
        next: NextFunction
        ):Promise<void> {
            try {
              const { gender, livesWith, city, commune, childrens, punctuation } = req.body
              
              if(!gender || !city || !commune || !punctuation) {
                  res.status(404).json({msg: "Faltan datos para completar la encuesta"})
                } else {
                  const newSurvey = await this.repository.create(req.body)
                
                res.status(200).json({msg: "Creacion correcta", newSurvey})
              }
            } catch (error) {
              console.log(error);
              next(error)
                
            }
    };
    async get(
        req: Request, 
        res: Response, 
        next: NextFunction
        ):Promise<void> {
         res.status(200).send({msg: "Get id Surveys"})    
    };
    async update(
        req: Request, 
        res: Response, 
        next: NextFunction
        ):Promise<void> {
         res.status(200).send({msg: "Update Surveys"})    
    };
    async remove(
        req: Request, 
        res: Response, 
        next: NextFunction
        ):Promise<void> {
         res.status(200).send({msg: "Remove Survey"})    
    };
}