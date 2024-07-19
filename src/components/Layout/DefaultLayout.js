import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Sidebar from "../Sidebar/Sidebar";

function DefaultLayout({ children }) {
  return (
    <div>
      <Header />
<<<<<<< HEAD
      <div
        style={{
          backgroundImage: `url(${require("../../assets/images/background1.jpg")})`,
          backgroundSize: "100%",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
=======
      <div className="sidebar h-screen w-1/2 bg-gray-200">
>>>>>>> 7d747a155fbac383f008aaef4efa392750c7d34e
        <Sidebar />
        <div className="content">{children}</div>
      </div>
      <Footer />
    </div>
  );
}

export default DefaultLayout;
