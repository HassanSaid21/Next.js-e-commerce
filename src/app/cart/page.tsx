"use client";
import {  CartItemType, shippingFormInputs } from "@/types";
import { ArrowRightIcon, Trash2 } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import ShippingForm from "./ShippingForm";
import ShippingPayment from "./ShippingPayment";
import { useRouter, useSearchParams } from "next/navigation";
import useCartStore from "@/store/cartStore";

const steps: string[] = ["Shopping Cart", "Shipping Adress", "Payment Method"];

// const products: ProductsType = [
//   {
//     id: 1,
//     name: "Adidas CoreFit T-Shirt",
//     shortDescription:
//       "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
//     description:
//       "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
//     price: 39.9,
//     sizes: ["s", "m", "l", "xl", "xxl"],
//     colors: ["gray", "purple", "green"],
//     images: {
//       gray: "/products/1g.png",
//       purple: "/products/1p.png",
//       green: "/products/1gr.png",
//     },
//   },
//   {
//     id: 2,
//     name: "Puma Ultra Warm Zip",
//     shortDescription:
//       "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
//     description:
//       "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
//     price: 59.9,
//     sizes: ["s", "m", "l", "xl"],
//     colors: ["gray", "green"],
//     images: { gray: "/products/2g.png", green: "/products/2gr.png" },
//   },
//   {
//     id: 3,
//     name: "Nike Air Essentials Pullover",
//     shortDescription:
//       "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
//     description:
//       "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
//     price: 69.9,
//     sizes: ["s", "m", "l"],
//     colors: ["green", "blue", "black"],
//     images: {
//       green: "/products/3gr.png",
//       blue: "/products/3b.png",
//       black: "/products/3bl.png",
//     },
//   },
// ];

const CartPage = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const handleClick = () => {
    
    router.push("/cart?step=2");

  };
  const activeStep = parseInt(searchParams.get('step') || '1');
  const [shippingForm, setShippingForm] = useState<shippingFormInputs>();
   const {cart ,  removeFromCart} =  useCartStore()


   const handleDeleteProduct = (product :CartItemType)=>{
    removeFromCart(product)
   }
   
  return (
    <div className="flex flex-col gap-12 my-12">
      {/* header */}
      <div className="flex flex-col items-center  gap-8">
        <h1 className="font-semibold text-xl"> Your Shopping Cart</h1>

        <div className="flex justify-center flex-col sm:flex-row  sm:gap-10  items-center ">
          {steps.map((step, i) => (
            <div
              key={i}
              className={`
      flex items-center  gap-2 py-4 text-lg font-medium border-b-2 
      ${
        i + 1 === activeStep
          ? "border-black text-black"
          : "border-gray-400 text-gray-500"
      }
    `}
            >
              <span
                className={`
        w-8 h-8 rounded-full flex items-center justify-center text-white 
        ${i + 1 === activeStep ? "bg-black" : "bg-gray-400"}
      `}
              >
                {i + 1}
              </span>
              <span className="text-sm font-medium">{step}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="grid items-start grid-cols-1 lg:grid-cols-3  gap-y-10 lg:gap-x-10  ">
        <div className="col-span-2 flex flex-col gap-8  p-8   shadow-md min-h-72 ">
          {/* cart items */}
          {activeStep === 1 ? (
            <div className='flex flex-col  gap-4'>
              <h2 className="font-medium text-lg">Cart Items</h2>
              {cart.map((product) => (
                <div
                  key={product.id + product.selectedColor +product.selectedSize}
                  className="flex items-center justify-between"
                >
                  <div className="flex gap-6">
                    <div className="relative bg-gray-50 w-25 aspect-[2/2.5] overflow-hidden rounded-lg">
                      <Image
                        alt="image"
                        src={product?.images[product.selectedColor]||''}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div className="flex flex-col gap-2 justify-between">
                      <h2 className="text-black font-semibold text-sm">
                        {product.name}
                      </h2>
                      <div className="text-gray-500 flex flex-col gap-1 text-xs">
                      <span>Quantity: {product.quantity}</span>
                        <span>Size: {product.selectedSize.toUpperCase()}</span>
                        <span >Color: <span style={{color: product.selectedColor}}> {product.selectedColor}</span></span>
                      </div>
                      <p className="text-black font-medium text-sm">${product.price.toFixed()}</p>
                    </div>
                  </div>
                  <button onClick={()=>handleDeleteProduct(product)} className="w-8 h-8 flex items-center cursor-pointer justify-center rounded-full bg-red-400 hover:bg-red-200 transition-all duration-300">
                    <Trash2 className="w-4 h-4"  />
                  </button>
                </div>
              ))}
            </div>
          ) : activeStep === 2 ? (
            <ShippingForm setShippingForm={setShippingForm} />
          ) : activeStep === 3 && shippingForm ? (
            <ShippingPayment />
          ) : (
            "please provide your contact information"
          )}
        </div>
        {/*price details*/}
        <div className="flex flex-col gap-6 py-6 px-6  shadow-md ">
          <h2 className="font-medium ">Cart Details</h2>{" "}
          <div className="flex flex-col gap-1">
            <div className="flex  justify-between  ">
              <span className="text-sm text-gray-500">Subtotal</span>
              <span className="text-sm font-medium">${cart.reduce((acc , item)=>acc+ item.price * item.quantity ,0).toFixed(2) }</span>
            </div>
            <div className="flex justify-between ">
              <span className="text-sm text-gray-500">Discount (10%)</span>
              <span className="text-sm font-medium text-red-600">-10</span>
            </div>
            <div className="flex justify-between ">
              <span className="text-sm text-gray-500">Shipping Fee</span>
              <span className="text-sm font-medium">$50</span>
            </div>
            <hr className="text-gray-200 my-3" />
            <div className="flex justify-between ">
              <span className="text-sm font-medium">Total</span>
              <span className="text-md font-medium">
              ${cart.reduce((acc , item)=>acc+ item.price * item.quantity ,0).toFixed(2) + - 60}
              </span>
            </div>
          </div>
          {activeStep !== 2 && (
            <button
              onClick={handleClick}
              className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg cursor-pointer bg-gray-900  transition-all duration-300 hover:bg-gray-700 text-white text-sm"
            >
              Continue <ArrowRightIcon className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartPage;
