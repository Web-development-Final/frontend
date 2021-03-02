import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

interface TITLE {
  title: string;
}

const Layout: React.FC<TITLE> = ({ children, title = "None Title" }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
