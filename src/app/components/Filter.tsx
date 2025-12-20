"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";


const Filter = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const path = usePathname();
  console.log(path);
  const params = new URLSearchParams(searchParams);
  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    params.set("filter", e.target.value);
    router.push(`${path}?${params.toString()}`);
  };

  return (
    <div className="flex justify-end items-baseline gap-2 my-4">
      <span className="text-sm text-gray-500">Sort By: </span>
      <select
        className="ring-1 ring-gray-200 shadow-md rounded-md text-sm text-gray-500 px-2 py-1"
        name="filter"
        id="filter"
        onChange={(e) => {
          handleSelect(e);
        }}
      >
        <option value="newwest">Newest</option>
        <option value="oldest"> Oldest</option>
        <option value="low-to-high-price">Price: Low to High</option>
        <option value="high-to-low-price">Price: High to Low</option>
      </select>
    </div>
  );
};

export default Filter;
