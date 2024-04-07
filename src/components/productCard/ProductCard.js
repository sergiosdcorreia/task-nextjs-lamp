"use client";

import Image from "next/image";
import NoImage from "../../../public/no-image.jpg";
import { onAdd } from "@/lib/action/cart";

const ProductCard = ({ product }) => {
  if (!product || !product.name) {
    return null;
  }

  return (
    <div className="card">
      {product.imageUrl ? (
        <Image
          src={product.imageUrl}
          alt={product.name}
          width={700}
          height={700}
          className="card-image"
        />
      ) : (
        <Image src={NoImage} alt={product.name} className="card-image" />
      )}
      <div className="card-header">
        <div className="card-content">
          <h2 aria-label={product.name} className="card-title">
            {product.name}
          </h2>
          <p className="card-price">
            <span>£</span>
            {product.price}
          </p>
        </div>
        <button
          aria-label="Add to cart"
          className="card-button"
          onClick={() => {
            const { error } = onAdd(product);
            if (error) {
              console.error(error);
            }
          }}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
