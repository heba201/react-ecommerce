export interface productI{
    brand : brandI;
    category : brandI;
    createdAt:string;
    description:string;
     id:string;
     imageCover : string;
     images : string[];
      quantity: number;
    price: number;
    ratingsAverage:number;
    slug:string;
    sold:number;
    priceAfterDiscount: number,
    subcategory:brandI;
    title:string;
    updatedAt:string;
     _id:string;
}

interface brandI{
    image : string,
    name : string,
    slug : string,
    id: string,
    _id:string,
}