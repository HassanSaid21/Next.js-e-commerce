'use client'

import useCartStore from "@/store/cartStore";
import { ProductType } from "@/types";
import { Plus, ShoppingCart } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";

  
const ProductInteractions = ({selectedSize ,selectedColor , product} :{selectedSize:string , selectedColor:string , product:ProductType}) => {
  
  const [quantity, setQuantity] = useState(1);
  const router = useRouter()
  const path =  usePathname()
  const searchParams = useSearchParams()
  const {addToCart } = useCartStore()

  const handleType =(type :string , value :string)=>{
    const params = new  URLSearchParams(searchParams)
    params.set(type , value)
    router.push(`${path}?${params.toString()}` , {scroll : false})
 } 
   const handleAddToCart=()=>{
   console.log(selectedColor , selectedSize);
         addToCart({...product ,quantity, selectedColor, selectedSize })
    toast.success('product added to cart')



     }


  return (
    <>
          <div className="flex flex-col gap-2">
          <p className="text-xs font-medium text-gray-500">Size</p>
          <div className=" flex items-center  gap-2 ">
            {product.sizes.map((size) => (
              <div  key={size} onClick={()=>handleType('size' , size)} className={`    border ${selectedSize === size ? 'border-gray-600':'border-gray-300'}`}>
                <div className={`flex items-center justify-center w-6 h-6 ${selectedSize===size ?'bg-black text-white ':''} text-xs cursor-pointer font-medium m-[1px]`}>
                  {size.toUpperCase()}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* colors */}
        <div className="flex flex-col gap-2">
          <p className="text-xs font-medium text-gray-500">Color</p>
          <div className=" flex items-center  gap-2 ">
            {product.colors.map((color) => (
              <div
              onClick={()=>handleType('color' , color)}
                key={color}
                className={` flex items-center justify-center ${
                  selectedColor === color ? "border  border-gray-600" : ""
                } `}
              >
                <div
                  
                  style={{ backgroundColor: color }}
                  className="w-6 h-6 cursor-pointer font-medium m-[1px]"
                />
              </div>
            ))}
          </div>
        </div>

        {/* quantity */}

        <div className="flex flex-col gap-2">
          <p className="text-xs font-medium text-gray-500"> Quantity</p>
          <div className="flex gap-2 items-center">
            <span
              className="h-6 w-6 flex items-center border border-gray-500 justify-center cursor-pointer"
              onClick={() =>
                setQuantity((prev) => (prev === 1 ? prev : prev - 1))
              }
            >
              {" "}
              -
            </span>
            {quantity}
            <span
              className="h-6 w-6 flex items-center border border-gray-500 justify-center cursor-pointer"
              onClick={() => setQuantity((prev) => prev + 1)}
            >
              {" "}
              +
            </span>
          </div>
          {/* Buttons */}
          <button onClick={handleAddToCart} className=" cursor-pointer flex items-center justify-center text-white p-2 text-sm font-medium rounded-md bg-gray-900 gap-1">
          <Plus className="w-4 h-4" />
          Add To Cart
        </button>

        <button className=" cursor-pointer flex items-center justify-center text-black p-2  text-sm font-medium border border-gray-500 rounded-md  gap-1">
          Buy This Item
          <ShoppingCart className="w-4  h-4" />
        </button>
        </div>
    </>
  );
}

export default ProductInteractions;
