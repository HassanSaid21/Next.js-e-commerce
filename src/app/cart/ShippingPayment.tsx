'use client'
import { SubmitHandler, useForm } from 'react-hook-form'
import { paymentFormInputs, paymentFormSchema } from '@/types'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import {  ShoppingCartIcon } from 'lucide-react'
import Image from 'next/image'

const PaymentForm = () => {

  const {register , handleSubmit ,formState:{errors} , } =  useForm<paymentFormInputs>({
    resolver :zodResolver(paymentFormSchema)
  })
  const router =  useRouter()

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleShippingForm  : SubmitHandler<paymentFormInputs> = (_data) =>{
    // TODO: Process payment data
    router.push('/cart?step=3'  ,{scroll:false})
  }
  return (
    <div className="flex flex-col gap-6 text-gray-500 text-xs">
      <h2 className="text-black text-[1.3em] font-semibold">Payment Form</h2>

      <form className="flex flex-col gap-1" onSubmit={handleSubmit(handleShippingForm)}>
        <label htmlFor="cardName"  className='text-xs font-medium' >Card Name</label>
        <input 
          type="text" 
          id="cardName" 
          {...register("cardName")} 
          placeholder="Karim said" 
          className="py-2 border-b  border-gray-200 focus:border-green-400 outline-0 text-gray-950 " 
        />
         {errors.cardName && <p className='mb-4 text-red-600'>{errors.cardName.message} </p>}
        <label htmlFor="cardNumber" className='text-xs font-medium'>Card Number</label>
        <input 
          type="text" 
          id="cardNumber" 
          {...register('cardNumber')}
          placeholder="4556-5468-7845-5456" 
          className="py-2 border-b border-gray-200 focus:border-green-400 outline-0 text-gray-950 " 
        />
         {errors.cardNumber && <p className='mb-4 text-red-600'>{errors.cardNumber.message} </p>}

        <label htmlFor="expireDate" className='text-xs font-medium'>Expire Date</label>
        <input 
          type="text" 
          id="expireDate" 
          {...register("expireDate")}
          placeholder="MM/YY" 
          className="py-2 border-b border-gray-200 focus:border-green-400 outline-0 text-gray-950 " 
        />
         {errors.expireDate && <p className='mb-4 text-red-600'>{errors.expireDate.message} </p>}

        <label htmlFor="cvv" className='text-xs font-medium'>CVV</label>
        <input 
          type="text" 
          id="cvv" 
        {...register('cvv')}
          placeholder="123" 
          className="py-2 border-b border-gray-200 focus:border-green-400 outline-0 text-gray-950 " 
        />
    {errors.cvv && <p className='mb-4 text-red-600'>{errors.cvv.message} </p>}

<div className="flex items-center gap-2 mt-4">
<Image src = '/klarna.png' alt='klarana' width={50} height={25}  className='rounded-md' />
<Image src = '/cards.png' alt = 'cards'  width={50} height={25}  className='rounded-md' />
<Image src = '/stripe.png' alt='stripe'   width={50} height={25} className='rounded-md' />
</div>
         <button type='submit'  className="w-full flex items-center justify-center mt-2 gap-2 px-4 py-2 rounded-lg cursor-pointer bg-gray-900  transition-all duration-300 hover:bg-gray-700 text-white text-sm">
        Check out <ShoppingCartIcon className="w-4 h-4" />
      </button>
      </form>
    </div>
  )
}

export default PaymentForm

