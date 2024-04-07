import { promises as fs } from "fs";
import ProductCard from "@/components/productCard/ProductCard";

export default async function Home() {
  const file = await fs.readFile(process.cwd() + "/src/app/data.json", "utf8");
  const products = JSON.parse(file);

  return (
    <main className="main">
      {products.map((product) => (
        <ProductCard key={product.name} product={product} />
      ))}
    </main>
  );
}
