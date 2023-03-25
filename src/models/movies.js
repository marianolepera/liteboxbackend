import { Schema, model } from "mongoose";

const moviesSchema = new Schema(
    {
        
      original_title: {
        type: String,
        required: true,
        trim: true
      },
      backdrop_path: {
        type: String,
        required: true
      },
    },
    {
      timestamps: true,
      versionKey: false
    }
  );
  
  export default model("Movie", moviesSchema);