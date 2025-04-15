import mongoose, {Schema} from "mongoose";

const produitSchema = new Schema(
    {
        nom: {
            type: String,
            required: true,
            trim: true,
        },
        image: {
            type: String,
            required: true,
            trim: true,
        },
        description: {
            type: String,
            required: true,
            trim: true,
        },
        prix: {
            type: Number,
            required: true,
        },
        qte: {
            type: Number,
            required: true,
        }
    },
    {
        timestamps: true,
    }
);

const produitModel = mongoose.model ("produit", produitSchema );
export default produitModel; 
