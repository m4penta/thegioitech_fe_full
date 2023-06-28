import { Footer, Header } from "../component";
import { Navbar } from "../component/layout/header/navbar";
import { Categori, Wrapper } from "../styles/styled";

const OrderCheckPage = () => {
  return (
    <>
      <Header />
      <Categori>
        <Navbar />
        <Wrapper>
          {" "}
          <main className="main-global-wrap"></main>
        </Wrapper>
      </Categori>
      <Footer />
    </>
  );
};

export default OrderCheckPage;
