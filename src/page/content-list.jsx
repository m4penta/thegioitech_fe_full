import { ContentList, Footer, Header } from '../component';

const ContentListPage = (props) => {
  return (
    <>
      <Header />
      <main className='main-global-wrap'>
        <ContentList />
      </main>
      <Footer />
    </>
  );
};

export default ContentListPage;
