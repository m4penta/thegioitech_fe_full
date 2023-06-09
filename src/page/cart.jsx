import { Cart, Footer, Header } from '../component';

const CartPage = () => {
  return (
    <>
      <Header />
      <main className='main-global-wrap'>
        <Cart />
      </main>
      <Footer />
    </>
  );
};

export default CartPage;
