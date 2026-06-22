import { brandI, categoryI, subcategoryI } from "./cart.type";

export interface whishlistI {
    brand: brandI;
    category: categoryI;
    createdAt: string;
    description: string;
    id: string;
    imageCover: string;
    images: [];
    price: number;
    quantity: number;
    ratingsAverage: GLfloat;
    ratingsQuantity: number;
    slug: string;
    sold: number;
    subcategory: subcategoryI[];
    title: string;
    updatedAt: string;
    __v: string;
    _id: string;
}
