import Image from "next/image";
import ProductList from "./components/ProductList";

const Homepage = async ({
  searchParams,
}: {
  searchParams: Promise<{ cat: string }>;
}) => {
  const cat = (await searchParams).cat;
  return (
    <div className="">
      <div className="relative aspect-[3/1] mb-12">
        <Image src="/featured.png" alt="featured Product" fill />
      </div>
      <ProductList cat={cat} params="homepage" />
    </div>
  );
};

export default Homepage;
