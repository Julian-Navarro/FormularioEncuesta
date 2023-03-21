import { DataSource } from "typeorm";
import { Survey } from "../entity/Survey";

export default new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username:"postgres",
    password: "BVBadmin",
    database:"surveyForm",
    entities: [Survey],
    synchronize: true,
    logging: false
})