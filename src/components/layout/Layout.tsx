import Shortcut from "../module/Shortcut";
import Header from "./Header";
import Footer from "./Footer";
import { LayoutProps } from "@/types/layoutProps";

function Layout({ children }: LayoutProps) {
  return (
    <div>
      <Header />
      <div>{children}</div>
      <div>
        <Shortcut />
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
