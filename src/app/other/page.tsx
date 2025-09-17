import Image from "next/image";

export default async function Other() {
  // Fetch images from NestJS API
  const response = await fetch(
    "https://nest-rest-service-k0ad.onrender.com/api/auth/images"
  );
  const data = await response.json();
  const images: string[] = data.data;

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f9fafb",
        padding: "40px 20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Page Title */}
      <h1
        style={{
          textAlign: "center",
          fontSize: "40px",
          fontWeight: "bold",
          color: "#ff69b4",
          marginBottom: "50px",
        }}
      >
        Other Gallery
      </h1>

      {/* Responsive Grid */}
      <div
        style={{
          display: "grid",
          gap: "25px",
          gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", // responsive
          justifyItems: "center",
        }}
      >
        {images.map((item, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "#fff",
              borderRadius: "16px",
              overflow: "hidden",
              boxShadow: "0 6px 16px rgba(0,0,0,0.1)",
              transition: "transform 0.3s ease",
              cursor: "pointer",
              width: "100%", // responsive full width of column
              maxWidth: "500px", // prevent extra stretch
            }}
          >
            <Image
              src={`https://nest-rest-service-k0ad.onrender.com/images/images/${item}`}
              alt={`Image ${index + 1}`}
              width={800} // keeps good resolution
              height={600} // ratio maintained
              style={{
                width: "100%",
                height: "auto", // maintain aspect ratio, no crop
                borderRadius: "16px",
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
