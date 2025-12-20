"use client";

import useCartStore from "@/store/cartStore";
import { CartItemType, ProductType } from "@/types";
import { ShoppingCartIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { toast } from "react-toastify";

const ProductCard = ({ product }: { product: ProductType }) => {
  const {addToCart  } = useCartStore()
  const [imgColor, setImgColor] = useState(product.colors[0]||'');
  const [productSize, setProductSize] = useState(product.sizes[0]);

  const handleProduct = () => {
     const selectedProduct :CartItemType =  {...product ,  selectedColor:imgColor ||'' , selectedSize:productSize ||'' , quantity:1}
     addToCart(selectedProduct)
     toast.success('product added to cart')
  };
  return (
    <div className="shadow-lg rounded-lg overflow-hidden ">
      {/* Card Image */}
      <Link href={`/products/${product.id}`}>
        <div className=" relative aspect-[2/3] ">
          <Image
            src={product?.images[imgColor]||''}
            alt={product.shortDescription}
            fill
            className="object-fit transition-all duration-300 hover:scale-105"
          />
        </div>
      </Link>
      {/* Card Details */}
      <div className="flex flex-col gap-3 p-4 ">
        <h1 className="font-medium">{product.name}</h1>
        <p className="text-sm text-gray-500 mb-2">
          {product.shortDescription}
        </p>

        <div className=" flex gap-6 items-baseline text-xs mb-2">
          {/* Color And Size  */}
          <div className="flex flex-col   gap-1  ">
            <span className="text-gray-500">Size</span>
            <select
              onChange={(e) => {
                setProductSize(e.target.value);
              }}
              name="size"
              id="size"
              className="px-2 py-1 ring ring-gray-300 rounded-sm cursor-pointer "
            >
              {product.sizes.map((size) => (
                <option key={size} value={size}>
                  {size.toUpperCase()}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col gap-1 cursor-pointer">
            <span className="text-gray-500">color</span>
            <div className="flex items-center gap-1">
              {product.colors.map((color) => (
                <div
                  key={color}
                  className={`border-[1.2px]  rounded-full ${
                    color === imgColor ? " border-gray-500" : "border-gray-200 "
                  }`}
                >
                  <div
                    className={`rounded-full w-[14px] h-[14px] m-[2px]   
                     `}
                    style={{ backgroundColor: color }}
                    onClick={() => {
                      setImgColor(color);
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Add to Cart And Price  */}
        <div className="flex items-end justify-between  ">
          <p className=" font-medium"> {product.price.toFixed(2)}</p>
          <button onClick={handleProduct} className="ring-1 ring-gray-200 text-sm   flex items-center gap-1 shadow-lg  rounded-md transition-all duration-300 cursor-pointer px-2 py-1 hover:bg-black hover:text-white">
            <ShoppingCartIcon className="w-4 h-4" />
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
