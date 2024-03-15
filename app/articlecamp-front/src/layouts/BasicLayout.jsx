import Footer from "../components/Footer";
import Header from "../components/Header";

export default function BasicLayout({ children }) {
    return (
      <>
        <Header/>
        <main style={{height: '75vh'}}>{children}</main>
        <Footer/>
      </>
    );
}