import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Sidebar from "../layouts/Sidebar/Sidebar";
import backgroundImage from "../../src/assets/images/background.png";

function DefaultLayout({ children }) {
  return (
    <div>
      <Header />
      <div
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "100%",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <Sidebar />
        <div className="content">{children}</div>
      </div>
      <Footer />
    </div>
  );
}

export default DefaultLayout;
