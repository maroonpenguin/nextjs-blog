import Head from "next/head";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";

const Layout = ({ children, title = "きゅうりブログ" }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <main className="dark:bg-gray-800 bg-teal-50 relative overflow-auto h-screen">
        <Navbar />
        <div className="p-12">{children}</div>
        {/* <Footer /> */}
      </main>
    </>
  );
};

export default Layout;
