import express from "express"

import moviesRoutes from "./routes/movies";
//middleware de express
import morgan from "morgan"
import pkg from "../package.json";
import cors from "cors";
import helmet from "helmet";


const app= express();

app.set("pkg", pkg);

app.use(express.json());
app.use(morgan(("dev")))
app.use(cors())
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true,}));

app.get("/", (req, res) => {
    res.json({
      message: "Api de peliculas para litebox",
      name: app.get("pkg").name,
      version: app.get("pkg").version,
      description: app.get("pkg").description,
      author: app.get("pkg").author,
    });
  });

// Routes
app.use("/api/peliculas", moviesRoutes);



export default app;