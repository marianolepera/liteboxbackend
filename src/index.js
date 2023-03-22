import app from "./app"
import "./database"
import config from "./config";

app.listen(config.PORT);

console.log("server listen",config.PORT)