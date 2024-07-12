import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Sidebar from "../Sidebar/Sidebar";

function DefaultLayout({ children }) {
  return (
    <div>
      <Header />
      <div className="sidebar h-screen w-1/2 bg-gray-200">
        <Sidebar />
        <div className="content">{children}</div>
      </div>
      <Footer />
    </div>
  );
}

export default DefaultLayout;
