import { Nav } from './nav';
import { Info } from './info';
import './footer.scss';

export const Footer = () => {
  return (
    <footer className='footer-global-wrap'>
      <section className='container footer-wrap'>
        <Nav />
        <Info />
      </section>
    </footer>
  );
};
