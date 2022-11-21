export type Product = {
    id: number;
    name: string;
    description: string;
    type: string;
    capacity: number;
    price: number;
    image: string;
};
const productsArray:Product[] = [
    {
        id:1,
        name: "iPhone X",
        description: "This is iphone X",
        type: "phone",
        capacity: 64,
        price: 500,
        image: 'public/images/iphone-gold.webp'
    },
    {
        id:2,
        name: "iPhone XS",
        description: "This is iphone XS",
        type: "phone",
        capacity: 128,
        price: 800,
        image: 'public/images/iphone-blu.webp'

    },
    {
        id:3,
        name: "iPhone X",
        description: "This is iphone X",
        type: "phone",
        capacity: 256,
        price: 600,
        image: 'public/images/iphone-green.webp'

    },
    {
        id:4,
        name: "iPhone X",
        description: "This is iphone X",
        type: "phone",
        capacity: 64,
        price: 500,
        image: 'public/images/iphone-purple.webp'

    },
    {
        id:5,
        name: "iPhone 12",
        description: "This is iphone 12",
        type: "phone",
        capacity: 512,
        price: 700,
        image: 'public/images/iphone-red.webp'

    },
    {
        id:6,
        name: "iPhone 13",
        description: "This is iphone 13",
        type: "phone",
        capacity: 64,
        price: 700,
        image: 'public/images/iphone-silver.webp'

    },
    {
        id:7,
        name: "iPhone 14",
        description: "This is iphone 14",
        type: "phone",
        capacity: 128,
        price: 900,
        image: 'public/images/iphone-yellow.webp'

    },
        {
        id:8,
        name: "iPhone 12",
        description: "This is iphone 12",
        type: "phone",
        capacity: 512,
            price: 700,
        image: 'public/images/iphone-black.webp'
        
    },
]

export const getProductsObject = (array: Product[]) => array.reduce((object,
    product) => ({
    ...object,
    [product.id]: product
    }), {})

export default productsArray