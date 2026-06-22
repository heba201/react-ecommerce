import { cartProductI } from "./cart.type";
import { productI } from "./producttype";

export interface orderI extends cartProductI {
cartItems:cartProductI[],
createdAt:string,
id:number,
isDelivered:boolean,
isPaid:boolean,
paymentMethodType:string,
shippingPrice:number,
taxPrice:number,
totalOrderPrice:number,
updatedAt:string,
__v:number,
_id:string
}
