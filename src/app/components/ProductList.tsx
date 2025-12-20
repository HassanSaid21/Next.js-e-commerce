  import { ProductsType } from "@/types";
import Categories from "./Categories";
import ProductCard from "./ProductCard";
import Link from "next/link";
import Filter from "./Filter";



const products: ProductsType = [
  {
    id: 1,
    name: "Adidas CoreFit T-Shirt",
    shortDescription:
      "Lightweight athletic t-shirt designed for daily training and comfort.",
    description:
      "The Adidas CoreFit T-Shirt is made from breathable cotton blend fabric with moisture-wicking technology to keep you dry during workouts. Designed with a regular fit, it provides both flexibility and comfort for everyday wear or gym sessions.",
    price: 39.9,
    sizes: ["s", "m", "l", "xl", "xxl"],
    colors: ["gray", "purple", "green"],
    images: {
      gray: "/products/1g.png",
      purple: "/products/1p.png",
      green: "/products/1gr.png",
    },
  },
  {
    id: 2,
    name: "Puma Ultra Warm Zip",
    shortDescription:
      "Soft fleece zip-up jacket for warmth and comfort in cool weather.",
    description:
      "The Puma Ultra Warm Zip is built with insulating fleece fabric and a high collar design to trap warmth. Perfect for outdoor runs or casual layering, it offers a stylish look while keeping you cozy in colder conditions.",
    price: 59.9,
    sizes: ["s", "m", "l", "xl"],
    colors: ["gray", "green"],
    images: { gray: "/products/2g.png", green: "/products/2gr.png" },
  },
  {
    id: 3,
    name: "Nike Air Essentials Pullover",
    shortDescription:
      "Classic pullover hoodie with soft cotton blend and streetwear style.",
    description:
      "The Nike Air Essentials Pullover delivers casual comfort with a soft interior lining and ribbed cuffs. Its versatile design makes it ideal for lounging, training, or pairing with jeans for a modern street look.",
    price: 69.9,
    sizes: ["s", "m", "l"],
    colors: ["green", "blue", "black"],
    images: {
      green: "/products/3gr.png",
      blue: "/products/3b.png",
      black: "/products/3bl.png",
    },
  },
  {
    id: 4,
    name: "Nike Dri Flex T-Shirt",
    shortDescription:
      "Moisture-wicking training t-shirt for performance and mobility.",
    description:
      "Stay dry and comfortable with the Nike Dri Flex T-Shirt. Built with Nike’s Dri-FIT fabric, it pulls sweat away from the skin while offering a natural stretch for unrestricted movement during workouts.",
    price: 29.9,
    sizes: ["s", "m", "l"],
    colors: ["white", "pink"],
    images: { white: "/products/4w.png", pink: "/products/4p.png" },
  },
  {
    id: 5,
    name: "Under Armour StormFleece",
    shortDescription:
      "Weather-resistant fleece jacket designed for outdoor training.",
    description:
      "The Under Armour StormFleece combines lightweight warmth with water-resistant technology, making it suitable for chilly mornings and unpredictable weather. Its durable build ensures comfort and protection wherever you go.",
    price: 49.9,
    sizes: ["s", "m", "l"],
    colors: ["red", "orange", "black"],
    images: {
      red: "/products/5r.png",
      orange: "/products/5o.png",
      black: "/products/5bl.png",
    },
  },
  {
    id: 6,
    name: "Nike Air Max 270",
    shortDescription:
      "Lifestyle sneakers with iconic Air cushioning for all-day comfort.",
    description:
      "The Nike Air Max 270 features a large Air unit in the heel for responsive cushioning. Designed with breathable mesh uppers and bold styling, it blends performance innovation with everyday wearability.",
    price: 59.9,
    sizes: ["40", "42", "43", "44"],
    colors: ["gray", "white"],
    images: { gray: "/products/6g.png", white: "/products/6w.png" },
  },
  {
    id: 7,
    name: "Nike Ultraboost Pulse",
    shortDescription:
      "High-performance running shoes with superior energy return.",
    description:
      "The Nike Ultraboost Pulse is built for runners who demand both style and function. Featuring responsive cushioning and a flexible outsole, it adapts to every stride while offering all-day comfort.",
    price: 69.9,
    sizes: ["40", "42", "43"],
    colors: ["gray", "pink"],
    images: { gray: "/products/7g.png", pink: "/products/7p.png" },
  },
  {
    id: 8,
    name: "Levi’s Classic Denim",
    shortDescription:
      "Iconic straight-fit denim jeans for timeless everyday wear.",
    description:
      "Levi’s Classic Denim is crafted from durable cotton with just the right amount of stretch for comfort. A wardrobe staple, these jeans pair effortlessly with t-shirts, hoodies, or jackets for a casual look.",
    price: 59.9,
    sizes: ["s", "m", "l"],
    colors: ["blue", "green"],
    images: { blue: "/products/8b.png", green: "/products/8gr.png" },
  },
];



const ProductList = ({cat  , params}:{cat:string , params:'homepage' |'products'}) => {
  
   
  return (
    <div className="w-full">

      <Categories />
      { params==='products'&&
  <Filter />}
      <div className="grid grid-cols-1  sm:grid-cols-2   xl:grid-cols-3  2xl:grid-cols-4 gap-8" >
        {  products.map(product=>(
    <ProductCard key={product.id} product ={product} />
        )  )}
      </div>

      <Link className=" flex justify-end my-4 underline text-sm text-gray-500" href={cat?`/products/?cat=${cat}`:'/products'}> View All Products</Link>
      
    </div>
  );
}

export default ProductList;
