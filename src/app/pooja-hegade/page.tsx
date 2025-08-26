import Image from "next/image";
import { images } from "@/assets/assets";
export default function Pooja() {
  return (
    <div
      style={{
        padding: "20px",
        backgroundColor: "#f9f9f9",
        minHeight: "100vh",
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Pooja Gallery</h2>

     

      {/* Responsive Image Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "20px",
        }}
      >
        {images.map((item, index) => (
          <div
            key={index}
            style={{
              borderRadius: "12px",
              overflow: "hidden",
              boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
              background: "#fff",
              transition: "transform 0.2s ease, box-shadow 0.2s ease",
            }}
          >
            <Image
              src={item.src}
              alt={"pooja photos"}
              width={800}
              height={1000}
              style={{ objectFit: "cover", width: "100%", height: "100%" }}
            />
          </div>
        ))}
      </div>

       {/* Responsive Video */}
       <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "40px",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "900px",
            borderRadius: "12px",
            overflow: "hidden",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
            backgroundColor: "#000",
          }}
        >
          <video
            src="videos/pooja.mp4"
            controls
            poster="horizontal.jpg"
            style={{
              width: "100%",
              height: "auto",
              display: "block",
            }}
            
          />
        </div>
      </div>
    </div>
  );
}
