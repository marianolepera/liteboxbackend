import mongoose from "mongoose";
import config from "./config";

mongoose.connect(config.MONGODB_ATLAS,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then((db) => console.log(`base de datos conectada`))
  .catch((err) => console.log(err));