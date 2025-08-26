import Image from "next/image";

type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  thumbnail: string;
};

export default async function About() {
  // Fetch products from DummyJSON on each request (SSR)
  const res = await fetch("https://dummyjson.com/products?limit=5");
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
         :
        </p>
      </section>

      {/* Product Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
          gap: "20px",
          width: "100%",
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
              cursor: "pointer",
            }}
          >
            <Image
              src={item.thumbnail}
              alt={item.title}
              width={180}
              height={180}
              style={{
                objectFit: "contain",
                width: "100%",
                height: "auto",
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
