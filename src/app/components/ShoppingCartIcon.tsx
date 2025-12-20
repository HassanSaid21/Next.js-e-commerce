'use client'
import useCartStore from "@/store/cartStore";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";



const ShoppingCartIcon = () => {
const {cart , hasHydrated} =  useCartStore()
if(!hasHydrated) return null
  return (
    <Link href='/cart?' className="relative">
        <ShoppingCart  className="w-4 h-4 text-gray-500 "/>
        <span className="absolute w-4 h-4 rounded-full bg-amber-400 -right-3 -top-3 text-xs text-gray-500 text-center font-medium">{cart.reduce((acc, item) => acc+item.quantity , 0)}</span>
    </Link>
  );
}

export default ShoppingCartIcon;
