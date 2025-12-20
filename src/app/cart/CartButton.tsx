'use client'
import { ArrowRightIcon } from "lucide-react";
import {  useRouter } from "next/navigation";

const CartButton = ({  nextStep } :{  nextStep :number }) => {
const router =  useRouter()
  const handleClick = ()=>{
    router.push(`cart?step=${nextStep}` , {scroll : false})
  }
  return  ( 
      <button type='submit' onClick= {handleClick} className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg cursor-pointer bg-gray-900  transition-all duration-300 hover:bg-gray-700 text-white text-sm">
        Continue <ArrowRightIcon className="w-4 h-4" />
      </button>
              
            )
  
}

export default CartButton;
