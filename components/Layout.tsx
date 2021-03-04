import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";
import Navbar from "./Navbar";

interface Title {
  title: string;
}

const Layout: React.FC<Title> = ({ children, title = "None Title" }) => {
  return (
    <div className="font-primary bg-primary text-primary">
      <Head>
        <title>{title}</title>
      </Head>
      <Header title={title} />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
