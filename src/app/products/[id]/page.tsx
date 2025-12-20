 import { ProductType } from "@/types"; 
import Image from "next/image";
import ProductInteractions from "../ProductInteractions";

  const product :ProductType= {  id: 1,
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
};

const ProductPage =async ({
  params, // eslint-disable-line @typescript-eslint/no-unused-vars
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ color: string; size: string }>
}) => {
  const { size, color } = await searchParams;
  const selectedSize = size || (product.sizes[0] as string );
  const selectedColor = color || (product.colors[0] as string) ;

  return (
    <div className="flex flex-col justify-between  md:flex-row gap-4  md:gap-6 my-12 ">
      {/* Product  Image  */}
      <div className="w-full  md:w-6/12 aspect-[2/3]  relative ">
        <Image src={product?.images[selectedColor]||''} alt={product.shortDescription} fill />
      </div>
      {/* product details */}
      <div className="flex flex-col gap-6  md:w-7/12">
        <h1 className="text-xl font-medium">{product.name}</h1>
        <p className="text-gray-500 text-sm font-medium">
          {product.description}
        </p>
        <h2 className="text-lg font-medium">${product.price.toFixed(2)}</h2>

        {/* interactions  */}
      <ProductInteractions  product={product} selectedColor={selectedColor} selectedSize={selectedSize} />
        
      {/* payment methods */}
        <div className="flex gap-2 items-center">
          <Image
            src="/klarna.png"
            alt="klarna"
            className="rounded-md "
            width={50}
            height={25}
          />
          <Image
            src="/stripe.png"
            alt="stripe"
            className="rounded-md"
            width={50}
            height={25}
          />
          <Image
            src="/cards.png"
            alt="cards"
            className="rounded-md"
            width={50}
            height={25}
          />
        </div>
        <p className="text-xs text-gray-500">  By clicking Pay Now, you agree to our{" "}
          <span className="underline hover:text-black">Terms & Conditions</span>{" "}
          and <span className="underline hover:text-black">Privacy Policy</span>
          . You authorize us to charge your selected payment method for the
          total amount shown. All sales are subject to our return and{" "}
          <span className="underline hover:text-black">Refund Policies</span>.</p>
      </div>
    </div>
  );
};

export default ProductPage;
