import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Sidebar from "../Sidebar/Sidebar";

function DefaultLayout({ children }) {
  return (
    <div>
      <Header />
      <div
        style={{
          backgroundImage: `url(${require("../../assets/images/background.png")})`,
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
