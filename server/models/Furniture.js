const { model, Schema } = require('mongoose');
const schema = new Schema(
    {
        category_product: {
            type: String,
            required: true,
        },
        sub_category_product: {
            type: String,
        },
        product_name: {
            type: String,
            required: true,
        },
        product_name_rus: {
            type: String,
            required: true,
        },
        product_image: {
            type: [String],
            required: true,
        },
        present_price: {
            type: String,
            required: true,
        },
        past_price: {
            type: String,
        },
        arrDescrImage: {
            type: Array,
            required: true,
        },
        type: {
            type: String,
        },
    },
    {
        timestamp: true,
    },
);

module.exports = model('Furniture', schema);
