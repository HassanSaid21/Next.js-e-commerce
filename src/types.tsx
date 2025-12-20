import z from "zod";

export type ProductType = {
  id: string | number;
  name: string;
  shortDescription: string;
  description: string;
  price: number;
  sizes: string[]|[string];
  colors: string[]|[string];
  images: Record<string, string>;
};

export type ProductsType =ProductType[]

export type CartItemType =  ProductType & {
  quantity : number ,
  selectedColor : string  ,
  selectedSize : string
}

export type CartItemsType =  CartItemType[]

export  const shippingFormSchema = z.object({
  name : z.string().min(1 ,'name is required!') , 
   email : z.email('invalid email format ').min(1 , 'email is required!') ,
   phone : z.string().min(11 ,'phone must be between 7 and 11 digits!').regex(/^\d+$/ , 'phone must contain only numbers'),
   address : z.string().min(1 , ' address is required!')
   , city : z.string().min(1 , ' city is required!')
})

export type shippingFormInputs = z.infer<typeof shippingFormSchema>

export  const paymentFormSchema = z.object({
  cardName : z.string().min(7 ,'card name is required!') , 
   cardNumber : z.string().regex(/^\d{16}$/, {
    message: "Must be exactly 16 digits",
  })
   , expireDate : z
   .string()
   .regex(/^(0[1-9]|1[0-2])\/\d{2}$/, {
     message: "Expiry must be in MM/YY format",
   }) ,
   cvv :z.string().regex(/^\d{3}$/, {
    message: "CVV must be exactly 3 digits",
  })
})

export type paymentFormInputs = z.infer< typeof paymentFormSchema>

export type  CartStoreStateType = {
  cart : CartItemsType ,
  hasHydrated :boolean

} 
export type CartStoreActionType = {
  addToCart : (product :CartItemType)=>void ;
  removeFromCart :(product :CartItemType)=> void ;
  clearCart :()=>void

}