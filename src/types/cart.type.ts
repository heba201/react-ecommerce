export interface cartI {
  status: string;
  message : string;
  cartId: string;
  numOfCartItems:number;
  data: cartDataI;
}

export interface cartDataI {
  _id: string;
  cartOwner: string;
  products:cartProductI[];
  totalCartPrice:number;
  createdAt: string;
  updataedAt: string;
  _v:number;
}

export interface cartProductI {
 _id: string;
 count:number;
 price:number;
 product:productI;
}

export interface productI {
  brand: brandI;
  category: categoryI;
  id: string;
  imageCover: string;
  quantity: number;
  ratingsAverage: number;
  slug: string;
  subcategory: subcategoryI[];
  title: string;
  _id: string;
}

export interface brandI {
  _id: string;
  name: string;
  slug: string;
  image: string;
}
export interface categoryI {
  _id: string;
  name: string;
  slug: string;
  image: string;
}

export interface subcategoryI {
  _id: string;
  name: string;
  slug: string;
  category: string;
}
export interface ShippingDataI{
   shippingAddress: {
    details: string,
    phone: string,
    city: string,
    postalCode: string
      } 
}