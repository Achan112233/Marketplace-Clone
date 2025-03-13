import mongoose from "mongoose";

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
}, {
    //whenever product is created, it will automatically add createdAt and updatedAt fields
    //createdAt is the date when the product was created and updatedAt is the date when the product was last updated
    timestamps: true 
});