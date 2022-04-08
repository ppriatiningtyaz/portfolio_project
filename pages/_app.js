import "../styles/globals.css";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <div className="flex flex-col w-full">
      <Head>
        <title>Portofolio Puspita</title>
      </Head>
      <div className="flex flex-col max-w-screen-xl">
        <Navbar />
        <Sidebar />
        <Contact />
        <Component {...pageProps} />
        <Footer />
      </div>
    </div>
  );
}

export default MyApp;
