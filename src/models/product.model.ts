type Product = {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    createdAt: string;
    updatedAt: string;
    rating: {
        rate: number;
        count: number;
    }
}

export default Product