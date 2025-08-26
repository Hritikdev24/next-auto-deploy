import Image from "next/image";

type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  thumbnail: string;
};

export default async function About() {
  // Fetch products from DummyJSON (SSR)
  const res = await fetch("https://dummyjson.com/products?limit=5", {
    cache: "no-store", // ensures SSR fetch each request
  });
  const data = await res.json();
  const products: Product[] = data.products;

  return (
    <main
      style={{
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f4f6f8",
        minHeight: "100vh",
        padding: "40px 20px",
      }}
    >
      {/* Page Title */}
      <section style={{ textAlign: "center", marginBottom: "30px" }}>
        <h2 style={{ fontSize: "28px", marginBottom: "10px" }}>About Page</h2>
        <p style={{ fontSize: "16px", color: "#666" }}>
          Here are some products from <strong>DummyJSON</strong>:
        </p>
      </section>

      {/* Product Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "25px",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {products.map((item) => (
          <div
            key={item.id}
            style={{
              backgroundColor: "#fff",
              borderRadius: "12px",
              padding: "20px",
              textAlign: "center",
              boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
              transition: "transform 0.2s ease, box-shadow 0.2s ease",
            }}>
            <Image
              src={item.thumbnail}
              alt={item.title}
              width={180}
              height={180}
              style={{
                objectFit: "contain",
                borderRadius: "10px",
                marginBottom: "15px",
              }}
            />
            <h4 style={{ fontSize: "18px", marginBottom: "10px" }}>
              {item.title}
            </h4>
            <p
              style={{
                fontSize: "14px",
                color: "#666",
                marginBottom: "12px",
                lineHeight: "1.4",
              }}
            >
              {item.description.substring(0, 60)}...
            </p>
            <p
              style={{
                fontWeight: "bold",
                fontSize: "16px",
                color: "#2c7a7b",
              }}
            >
              ${item.price}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}
