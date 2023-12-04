import express from "express"
import { environment } from "./Config/config.js"
import connection from "./connection/connection.js";
import generalError from "./Middlewares/generalError.js"
import router from "./routes/router.js";

const app = express()

//MIDDLEWARES
app.use(express.json())
app.use(express.urlencoded({ extended:true }))

//LLAMADA AL ENRUTARDOR
app.use("/api",router)

app.use(generalError)

await connection.sync({ force: true }).then(async () => {
})

//LISTENER
app.listen(environment.SERVER_PORT, ()=> {
    console.log("Server is running on port http://localhost:"+environment.SERVER_PORT);
})