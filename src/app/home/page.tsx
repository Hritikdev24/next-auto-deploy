import Image from "next/image";

export default async function Home() {
  // Fetch products on the server (SSR)
  const res = await fetch("https://fakestoreapi.com/products");
  const products = await res.json();

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        padding: "20px",
        backgroundColor: "#f9f9f9",
      }}
    >
      {/* Header */}
      <header
        style={{
          backgroundColor: "#0070f3",
          padding: "15px",
          color: "white",
          textAlign: "center",
          borderRadius: "8px",
          marginBottom: "20px",
        }}
      >
        <h1>Hritik’s Store</h1>
      </header>

      {/* Page Heading */}
      <h2
        style={{
          textAlign: "center",
          color: "#333",
          marginBottom: "20px",
        }}
      >
        🛍️ Products
      </h2>

      {/* Products Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
          gap: "20px",
        }}
      >
        {products.map((item: any) => (
          <div
            key={item.id}
            style={{
              backgroundColor: "#fff",
              border: "1px solid #ddd",
              borderRadius: "8px",
              padding: "15px",
              textAlign: "center",
              boxShadow: "0px 2px 5px rgba(0,0,0,0.1)",
            }}
          >
            <Image
              src={item.image}
              alt={item.title}
              width={120}
              height={120}
              style={{
                objectFit: "contain",
                marginBottom: "10px",
              }}
            />
            <h3
              style={{
                fontSize: "16px",
                fontWeight: "bold",
                color: "#333",
                marginBottom: "10px",
              }}
            >
              {item.title}
            </h3>
            <p
              style={{
                fontSize: "14px",
                color: "#666",
                marginBottom: "10px",
                height: "40px",
                overflow: "hidden",
              }}
            >
              {item.description}
            </p>
            <p
              style={{
                fontWeight: "bold",
                color: "#0070f3",
              }}
            >
              ${item.price}
            </p>
          </div>
        ))}
      </div>

      {/* Footer */}
      <footer
        style={{
          marginTop: "40px",
          padding: "15px",
          textAlign: "center",
          borderTop: "1px solid #ddd",
          color: "#666",
        }}
      >
        © {new Date().getFullYear()} Hritik. All Rights Reserved.
      </footer>
    </div>
  );
}
