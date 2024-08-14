import PropTypes from "prop-types";
import Header from "../Header";
import Footer from "../Footer";
import Sidebar from "../Sidebar";

function DefaultLayout({ children }) {
  return (
    <div className="layout">
      <Header />
      <div className="layout-content">
        <Sidebar />
        <div className="content">{children}</div>
      </div>
      <Footer />
    </div>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DefaultLayout;
