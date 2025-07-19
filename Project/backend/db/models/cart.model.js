import mongoose, { Schema } from "mongoose";

const cartItemSchema = new Schema({
    productId: {
        type: mongoose.Types.ObjectId,
        ref: 'product',
    },
    quantity: {
        type: Number,
    },
    price: {
        type: Number,
    }
},
    {
        _id: false
    });

const cartSchema = new Schema({
    userId: {
        type: mongoose.Types.ObjectId,
        ref: 'user',
        unique: true
    },
    items: [cartItemSchema],
}, {
    versionKey: false,
    timestamps: true
});


export const cartModel = mongoose.model("cart", cartSchema);