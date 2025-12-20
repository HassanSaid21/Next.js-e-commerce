'use client'
import { SubmitHandler, useForm } from 'react-hook-form'
import { shippingFormInputs, shippingFormSchema } from '@/types'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { ArrowRightIcon } from 'lucide-react'

const ShippingForm = ({setShippingForm}:{setShippingForm:(data:shippingFormInputs)=>void}) => {

  const {register , handleSubmit ,formState:{errors} , } =  useForm<shippingFormInputs>({
    resolver :zodResolver(shippingFormSchema)
  })
  const router =  useRouter()

  const handleShippingForm  : SubmitHandler<shippingFormInputs> = (data) =>{
    setShippingForm(data)
    router.push('/cart?step=3'  ,{scroll:false})
  }
  return (
    <div className="flex flex-col gap-6 text-gray-500 text-xs">
      <h2 className="text-black text-[1.3em] font-semibold">Shipping Address</h2>

      <form className="flex flex-col gap-1" onSubmit={handleSubmit(handleShippingForm)}>
        <label htmlFor="name"  className='text-xs font-medium' >Name</label>
        <input 
          type="text" 
          id="name" 
          {...register("name")} 
          placeholder="Karim" 
          className="py-2 border-b  border-gray-200 focus:border-green-400 outline-0 text-gray-950 " 
        />
         {errors.name && <p className='mb-4 text-red-600'>{errors.name.message} </p>}
        <label htmlFor="email" className='text-xs font-medium'>Email</label>
        <input 
          type="email" 
          id="email" 
          {...register('email')}
          placeholder="karim@gmail.com" 
          className="py-2 border-b border-gray-200 focus:border-green-400 outline-0 text-gray-950 " 
        />
         {errors.email && <p className='mb-4 text-red-600'>{errors.email.message} </p>}

        <label htmlFor="phone" className='text-xs font-medium'>Phone</label>
        <input 
          type="tel" 
          id="phone" 
          {...register("phone")}
          placeholder="0123456789" 
          className="py-2 border-b border-gray-200 focus:border-green-400 outline-0 text-gray-950 " 
        />
         {errors.phone && <p className='mb-4 text-red-600'>{errors.phone.message} </p>}

        <label htmlFor="address" className='text-xs font-medium'>Address</label>
        <input 
          type="text" 
          id="address" 
        {...register('address')}
          placeholder="Address" 
          className="py-2 border-b border-gray-200 focus:border-green-400 outline-0 text-gray-950 " 
        />
 {errors.address && <p className='mb-4 text-red-600'>{errors.address.message} </p>}

        <label htmlFor="city" className='text-xs font-medium'>City</label>
        <input 
          type="text" 
          id="city" 
        {...register('city')}
          placeholder="Cairo" 
          className="py-2 border-b border-gray-200 focus:border-green-400 outline-0 text-gray-950 " 
        />
         {errors.city && <p className='mb-4 text-red-600'>{errors.city.message} </p>}

         <button type='submit'  className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg cursor-pointer bg-gray-900  transition-all duration-300 hover:bg-gray-700 text-white text-sm">
        Continue <ArrowRightIcon className="w-4 h-4" />
      </button>
      </form>
    </div>
  )
}

export default ShippingForm
