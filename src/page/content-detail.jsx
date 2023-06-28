import { ContentDetail, Footer, Header } from "../component";
import { Navbar } from "../component/layout/header/navbar";
import { Categori, Wrapper } from "../styles/styled";

const ContentDetailPage = () => {
  return (
    <>
      <Header />
      <Categori>
        <Navbar />
        <Wrapper
          style={{
            padding: "0 30px",
          }}
        >
          <ContentDetail />
        </Wrapper>
      </Categori>
      <Footer />
    </>
  );
};

export default ContentDetailPage;
