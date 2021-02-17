import Footer from "./Footer";
import Meta from "./Meta";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div className="content">
      <Meta />
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
 
export default Layout;