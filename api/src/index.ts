import "reflect-metadata";
import express from "express";
import RouterController from "./router/index";
import database from "./config/database";

const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: false}))
database.initialize()
.then(()=> console.log("Database connected"))
.catch((error)=>console.log(error)
)

app.use("/api", RouterController)
app.listen(3001, () => {
    console.log("App execute in port: 3001");
})