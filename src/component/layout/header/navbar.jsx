import { faHandshake } from '@fortawesome/free-regular-svg-icons';
import {
  faClock,
  faFire,
  faFlask,
  faGamepad,
  faHeadphones,
  faHome,
  faLaptop,
  faMobileScreenButton,
  faNewspaper,
  faScrewdriverWrench,
  faSimCard,
  faTabletScreenButton,
  faToolbox,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavItem } from './nav-item';
import { CATEGORIES } from '../../../constant';

export const Navbar = () => {
  return (
    <nav className='nav-global-wrap'>
      <section className='container nav-wrap'>
        <NavItem
          path={`category/${CATEGORIES[0][0]}-${CATEGORIES[0][1]}`}
          icon={<FontAwesomeIcon icon={faMobileScreenButton} />}
          name='Điện thoại'
        />
        <NavItem
          path={`category/${CATEGORIES[1][0]}-${CATEGORIES[1][1]}`}
          icon={<FontAwesomeIcon icon={faTabletScreenButton} />}
          name='Tablet'
        />
        <NavItem
          path={`category/${CATEGORIES[2][0]}-${CATEGORIES[2][1]}`}
          icon={<FontAwesomeIcon icon={faLaptop} />}
          name='Laptop'
        />
        <NavItem
          path={`#deactive`}
          icon={<FontAwesomeIcon icon={faClock} />}
          name='Đồng hồ'
        />
        <NavItem
          path={`#deactive1`}
          icon={<FontAwesomeIcon icon={faHeadphones} />}
          name='Âm thanh'
        />
        <NavItem
          path={`#deactive2`}
          icon={<FontAwesomeIcon icon={faHome} />}
          name='Smart home'
        />
        <NavItem
          path={`#deactive3`}
          icon={<FontAwesomeIcon icon={faToolbox} />}
          name='Phụ kiện'
        />
        <NavItem
          path={`#deactive4`}
          icon={<FontAwesomeIcon icon={faGamepad} />}
          name='Đồ chơi công nghệ'
        />
        <NavItem
          path={`#deactive5`}
          icon={<FontAwesomeIcon icon={faHandshake} />}
          name='Máy cũ giá rẻ'
        />
        <NavItem
          path={`#deactive6`}
          icon={<FontAwesomeIcon icon={faScrewdriverWrench} />}
          name='Sửa chữa'
        />
        <NavItem
          path={`#deactive7`}
          icon={<FontAwesomeIcon icon={faSimCard} />}
          name='Sim thẻ'
        />
        <NavItem
          path={`#deactive8`}
          icon={<FontAwesomeIcon icon={faNewspaper} />}
          name='Tin tức'
        />
        <NavItem
          path={`#deactive9`}
          icon={<FontAwesomeIcon icon={faFlask} />}
          name='Flash sale'
        />
        <NavItem
          path={`#deactive10`}
          icon={<FontAwesomeIcon icon={faFire} />}
          name='khuyến mãi'
        />
      </section>
    </nav>
  );
};
