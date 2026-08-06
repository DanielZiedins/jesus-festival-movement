export const KINGDOM_SHOP_URL = "https://thykingdom.shop";

export type ShopProduct = {
  handle: string;
  title: string;
  price: string;
  image: string;
  available: boolean;
  url: string;
};

const fallbackProducts: ShopProduct[] = [
  {
    handle: "jesus-festival-hoodie",
    title: "Jesus Festival Hoodie",
    price: "57.99",
    image: "https://cdn.shopify.com/s/files/1/0024/2778/1220/files/unisex-premium-pullover-hoodie-black-front-6a74afb87c5c9.jpg?v=1786032076",
    available: true,
    url: `${KINGDOM_SHOP_URL}/products/jesus-festival-hoodie`,
  },
  {
    handle: "jesus-festival-tee",
    title: "Jesus Festival Tee",
    price: "29.99",
    image: "https://cdn.shopify.com/s/files/1/0024/2778/1220/files/unisex-classic-tee-black-front-6a74abd6e5a79.jpg?v=1786031084",
    available: true,
    url: `${KINGDOM_SHOP_URL}/products/jesus-festival-tee`,
  },
  {
    handle: "jesus-festival-2024-tee",
    title: "Jesus Festival 2024 Tee",
    price: "29.99",
    image: "https://cdn.shopify.com/s/files/1/0024/2778/1220/files/unisex-classic-tee-black-front-678d390d01323.jpg?v=1737308441",
    available: true,
    url: `${KINGDOM_SHOP_URL}/products/jesus-festival-2024-tee`,
  },
];

type ShopifyProduct = {
  handle: string;
  title: string;
  images?: Array<{ src?: string }>;
  variants?: Array<{ price?: string; available?: boolean }>;
};

export async function getJesusFestivalProducts(): Promise<ShopProduct[]> {
  try {
    const response = await fetch(`${KINGDOM_SHOP_URL}/products.json?limit=250`, {
      next: { revalidate: 3600 },
    });

    if (!response.ok) return fallbackProducts;
    const data = (await response.json()) as { products?: ShopifyProduct[] };
    const products = (data.products ?? [])
      .filter((product) => product.title.toLowerCase().includes("jesus festival"))
      .map((product): ShopProduct | null => {
        const image = product.images?.[0]?.src;
        const firstVariant = product.variants?.[0];
        if (!image || !firstVariant?.price) return null;

        return {
          handle: product.handle,
          title: product.title,
          price: firstVariant.price,
          image,
          available: Boolean(product.variants?.some((variant) => variant.available)),
          url: `${KINGDOM_SHOP_URL}/products/${product.handle}`,
        };
      })
      .filter((product): product is ShopProduct => product !== null);

    return products.length > 0 ? products : fallbackProducts;
  } catch {
    return fallbackProducts;
  }
}
