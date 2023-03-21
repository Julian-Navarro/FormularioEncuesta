import database from "../config/database";

import { DatabaseRepository, Id, Query } from "../declarations";
import { Survey } from "../entity/Survey";

export class SurveyRepository implements DatabaseRepository<Survey>{
    
    async create(data: Partial<Survey>, query?: Query | undefined): Promise<Survey> {
    const repository = database.getRepository(Survey)
    const newSurvey = repository.create(data);
    await repository.save(newSurvey)
    return newSurvey
    }

    async list(query?: Query | undefined): Promise<Survey[]> {
        const repository = await database.getRepository(Survey);
        return repository.find()

    }

    get(id: Id, query?: Query | undefined): Promise<Survey> {
        throw new Error("Method not implemented.");
    }

    update(id: Id, data: Survey, query: Query): Promise<Survey> {
        throw new Error("Method not implemented.");
    }

    remove(id: Id, query?: Query | undefined): Promise<Survey> {
        throw new Error("Method not implemented.");
    }
    
}