import "./AddSection.css";

export default function AddSection() {
  const items = [
    {
      title: "People",
      description:
        "Find a teacher, coach, or expert for your hobby interest in your locality. Find a partner, teammate, accompanist or collaborator.",
      button: "Connect",
      icon: "🙋‍♂️",
      color: "primary",
    },
    {
      title: "Place",
      description:
        "Find a class, school, playground, auditorium, studio, shop or an event venue. Book a slot at venues that allow booking through hobbycue.",
      button: "Meet up",
      icon: "📍",
      color: "success",
    },
    {
      title: "Product",
      description:
        "Find equipment or supplies required for your hobby. Buy, rent or borrow from shops, online stores or from community members.",
      button: "Get it",
      icon: "👜",
      color: "danger",
    },
    {
      title: "Program",
      description:
        "Find events, meetups and workshops related to your hobby. Register or buy tickets online.",
      button: "Attend",
      icon: "📅",
      color: "info",
    },
  ];

  return (
    <div className="container my-5">
      <div className="row g-4">
        {items.map((item, index) => (
          <div key={index} className="col-12 col-md-6 d-flex">
            <div
              className={`card shadow-sm p-4 h-100 d-flex flex-column w-100 border border-${item.color} hover-bg-${item.color} hover-text-white`}
            >
              <div className="d-flex align-items-center mb-3">
                <span
                  className={`fs-3 me-2 text-${item.color} hover-text-white`}
                >
                  {item.icon}
                </span>
                <h5 className="fw-bold m-0 text-dark hover-text-white">
                  {item.title}
                </h5>
              </div>
              <p className="text-muted flex-grow-1 hover-text-white">
                {item.description}
              </p>
              <button
                className={`btn btn-outline-${item.color} mt-auto hover-btn-${item.color}`}
              >
                {item.button}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
