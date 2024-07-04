import { Footer } from "../footer/footer";
import { Header } from "../header/component";

export const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};