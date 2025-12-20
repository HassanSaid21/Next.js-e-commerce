'use client'

import { Briefcase, Footprints, Glasses, Hand, Shirt, ShoppingBasket, Venus } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";


const categories = [
  {
    name: "All",
    icon: <ShoppingBasket className="w-4 h-4" />,
    slug: "all",
  },
  {
    name: "T-shirts",
    icon: <Shirt className="w-4 h-4" />,
    slug: "t-shirts",
  },
  {
    name: "Shoes",
    icon: <Footprints className="w-4 h-4" />,
    slug: "shoes",
  },
  {
    name: "Accessories",
    icon: <Glasses className="w-4 h-4" />,
    slug: "accessories",
  },
  {
    name: "Bags",
    icon: <Briefcase className="w-4 h-4" />,
    slug: "bags",
  },
  {
    name: "Dresses",
    icon: <Venus className="w-4 h-4" />,
    slug: "dresses",
  },
  {
    name: "Jackets",
    icon: <Shirt className="w-4 h-4" />,
    slug: "jackets",
  },
  {
    name: "Gloves",
    icon: <Hand className="w-4 h-4" />,
    slug: "gloves",
  },
];
const Categories = () => {
  const searchParams =  useSearchParams()
  const router =  useRouter()
  const path = usePathname()
  const cat = searchParams.get('cat')

  const handleCategoryChange =  (category :string| null)=>{
    const params  = new URLSearchParams(searchParams)
      params.set("cat" ,category ||'all')
     router.push(`${path}/?${params.toString()}` , {scroll:false})
  }
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 xl:grid-cols-8 gap-2 p-2 rounded-lg mb-4 text-sm bg-gray-100 ">
    {  categories.map(category=>(
        <div onClick={()=>handleCategoryChange(category.slug)} key={category.slug} className={`flex items-center justify-center px-2 py-1 gap-1 cursor-pointer ${cat===category.slug ?'bg-amber-300' :''}  rounded-md`}>
          {category.name}
          {category.icon}
        </div>
      ))}
    </div>
  );
}

export default Categories;
