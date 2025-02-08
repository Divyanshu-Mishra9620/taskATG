import HobbySection from "./HobbySection";
import SigninSection from "./SigninSection";
import Testimonials from "./Testimonials";
import Footer from "./Footer";
import End from "./End";
import AddSection from "./AddSection";
import AddYourOwn from "./AddYourOwn";

export default function Main() {
  return (
    <div>
      <div
        className="d-flex flex-column flex-md-row justify-content-center align-items-start align-items-md-center min-vh-80 p-3 p-md-5"
        style={{
          backgroundColor: "#eef7f1",
          gap: "30px",
          paddingTop: "80px",
        }}
      >
        <HobbySection />
        <SigninSection />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <AddSection />
        <div
          style={{
            backgroundColor: "#F7FDFF",
          }}
        >
          <AddYourOwn />
        </div>
        <div>
          <Testimonials />
        </div>
        <div
          style={{
            backgroundColor: "#F7FDFF",
          }}
        >
          <End />
        </div>
        <Footer />
      </div>
    </div>
  );
}
