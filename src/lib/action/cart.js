export const onAdd = (product) => {
  try {
    let data = {
      name: product.name,
      imageUrl: product.imageUrl,
      price: product.price,
    };
    console.table(data);

    if (!product) {
      throw new Error("Product not found, please try again.");
    }

    return {
      data,
      error: null,
    };
  } catch (error) {
    return {
      data: null,
      error: error.message,
    };
  }
};
