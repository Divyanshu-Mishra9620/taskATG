import React from "react";

export default function HobbySection() {
  return (
    <div className="col-12 col-md-7 px-2 px-md-5 d-flex flex-column align-items-center text-center text-md-start">
      <h1
        className="text-dark mb-3"
        style={{ fontSize: "2rem", lineHeight: "1.3" }}
      >
        Explore your hobby or passion
      </h1>

      <p
        className="text-secondary mb-3"
        style={{ fontSize: "1rem", lineHeight: "1.6" }}
      >
        Sign in to interact with a community of fellow hobbyists and an
        ecosystem of experts, teachers, suppliers, classes, workshops, and
        places to practice, participate, or perform.
      </p>

      <p
        className="text-secondary mb-4"
        style={{ fontSize: "1rem", lineHeight: "1.6" }}
      >
        If you are an expert or a seller, you can{" "}
        <strong>Add your Listing</strong> and promote yourself, your students,
        products, services, or events.
      </p>

      {/* Image Section */}
      <div className="d-flex flex-column flex-sm-row justify-content-center gap-3 w-100">
        <div className="flex-grow-1" style={{ maxWidth: "600px" }}>
          <img
            src="./download.png"
            alt="creative women"
            className="img-fluid w-100 h-100"
            style={{
              borderRadius: "10px",
              objectFit: "cover",
              minHeight: "200px",
            }}
          />
        </div>
        <div className="flex-grow-1" style={{ maxWidth: "600px" }}>
          <img
            src="./download1.png"
            alt="creative women"
            className="img-fluid w-100 h-100"
            style={{
              borderRadius: "10px",
              objectFit: "cover",
              minHeight: "200px",
            }}
          />
        </div>
      </div>
    </div>
  );
}
