import ProductList from "../components/ProductList";


const Page = async ({searchParams}:{searchParams: Promise<{cat :string}>}) => {
     const cat  = (await searchParams).cat
  return (
  <ProductList  cat= {cat} params='products'/>
  );
}

export default Page;
