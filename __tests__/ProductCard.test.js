import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import ProductCard from "@/components/productCard/ProductCard";

describe("Product Card", () => {
  it("Product should have a title", () => {
    render(<ProductCard />);

    const heading = screen.getByRole("heading", { level: 2 });

    expect(heading).toBeInTheDocument();
  });
});
