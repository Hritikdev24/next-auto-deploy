import Image from "next/image";

export default async function Other() {
  // Fetch images from NestJS API
  const response = await fetch(
    "https://nest-rest-service-k0ad.onrender.com/api/auth/images"
  
  );
  const data = await response.json();
  const images: string[] = data.data;
  console.log("image",images)
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f9fafb",
        padding: "50px 20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Page Title */}
      <h1
        style={{
          textAlign: "center",
          fontSize: "36px",
          fontWeight: "bold",
          color: "#ff69b4",
          marginBottom: "40px",
        }}
      >
        Other Gallery
      </h1>

      {/* Responsive Grid */}
      <div
        style={{
          display: "grid",
          gap: "20px",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        }}
      >
        {images.map((item, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "#fff",
              borderRadius: "16px",
              overflow: "hidden",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              transition: "all 0.3s ease",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.transform = "scale(1.05)";
              (e.currentTarget as HTMLElement).style.boxShadow =
                "0 8px 20px rgba(0,0,0,0.2)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.transform = "scale(1)";
              (e.currentTarget as HTMLElement).style.boxShadow =
                "0 4px 12px rgba(0,0,0,0.1)";
            }}
          >
            <div
              style={{
                position: "relative",
                width: "100%",
                height: "250px",
                backgroundColor: "#f3f4f6",
              }}
            >
              <Image
                src={`https://nest-rest-service-k0ad.onrender.com/images/${item}`}
                alt={`Image ${index + 1}`}
                fill
                style={{
                  objectFit: "contain",
                  backgroundColor: "#f3f4f6",
                }}
              />
            </div>
            <div style={{ padding: "12px", textAlign: "center" }}>
              <p
                style={{
                  fontSize: "14px",
                  fontWeight: "500",
                  color: "#374151",
                }}
              >
                {item}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

