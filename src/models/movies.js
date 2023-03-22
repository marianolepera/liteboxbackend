import { Schema, model } from "mongoose";

const moviesSchema = new Schema(
    {
        
      original_title: String,
      poster_path: String,
    },
    {
      timestamps: true,
      versionKey: false
    }
  );
  
  export default model("Movie", moviesSchema);