import Header from "./shared/Header";
import Footter from "./shared/Footer";

const Layout = ({ children, minimumHeader }) => {
  return (
    <>
      <Header minimum={minimumHeader} />
      {children}
      <Footter />
    </>
  );
};

export default Layout