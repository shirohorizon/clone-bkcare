import React from 'react';
import classNames from 'classnames/bind';

import styles from './Footer.module.scss';
import images from '~/assets/images';
import config from '~/config';
import Button from '~/components/Button';
import Image from '~/components/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCheck,
  faLocationDot,
  faMobileScreenButton,
} from '@fortawesome/free-solid-svg-icons';
import { faCopyright } from '@fortawesome/free-regular-svg-icons';

const cx = classNames.bind(styles);

const Footer = () => {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('grid')}>
        <div className={cx('row gut')}>
          <div className={cx('col lg-6')}>
            <div className={cx('intro')}>
              <Button to={config.routes.home} className={cx('link')}>
                <Image className={cx('logo')} src={images.logo} alt={'logo'} />
              </Button>
              <h2 className={cx('company-name', 'detail')}>
                Công ty Cổ phần Công nghệ BookingCare
              </h2>
              <p className={cx('detail')}>
                <FontAwesomeIcon className={cx('icon')} icon={faLocationDot} />
                28 Thành Thái, Dịch Vọng, Cầu Giấy, Hà Nội
              </p>
              <p className={cx('detail')}>
                <FontAwesomeIcon className={cx('icon')} icon={faCheck} />
                ĐKKD số: 0106790291. Sở KHĐT Hà Nội cấp ngày 16/03/2015
              </p>
              <div className={cx('link')}>
                <Button to={config.routes.home} className={cx('link-btn')}>
                  <Image
                    className={cx('images')}
                    src={images.boCongThuong}
                    alt={'bộ công thương'}
                  />
                </Button>
                <Button to={config.routes.home} className={cx('link-btn')}>
                  <Image
                    className={cx('images')}
                    src={images.boCongThuong}
                    alt={'bộ công thương'}
                  />
                </Button>
              </div>
            </div>
          </div>
          <div className={cx('col lg-3')}>
            <nav className={cx('nav')}>
              <ul className={cx('list')}>
                <li className={cx('item')}>
                  <Button to={config.routes.home} className={cx('nav-link')}>
                    Liên hệ hợp tác
                  </Button>
                </li>
                <li className={cx('item')}>
                  <Button to={config.routes.home} className={cx('nav-link')}>
                    Gói chuyển đổi số doanh nghiệp
                  </Button>
                </li>
                <li className={cx('item')}>
                  <Button to={config.routes.home} className={cx('nav-link')}>
                    Tuyển dụng
                  </Button>
                </li>
                <li className={cx('item')}>
                  <Button to={config.routes.home} className={cx('nav-link')}>
                    Câu hỏi thường gặp
                  </Button>
                </li>
                <li className={cx('item')}>
                  <Button to={config.routes.home} className={cx('nav-link')}>
                    Điều khoản sử dụng
                  </Button>
                </li>
                <li className={cx('item')}>
                  <Button to={config.routes.home} className={cx('nav-link')}>
                    Chính sách Bảo mật
                  </Button>
                </li>
                <li className={cx('item')}>
                  <Button to={config.routes.home} className={cx('nav-link')}>
                    Quy trình hỗ trợ giải quyết khiếu nại
                  </Button>
                </li>
                <li className={cx('item')}>
                  <Button to={config.routes.home} className={cx('nav-link')}>
                    Quy chế hoạt động
                  </Button>
                </li>
              </ul>
            </nav>
          </div>
          <div className={cx('col lg-3')}>
            <div className={cx('info')}>
              <h3 className={cx('agency', 'detail')}>Trụ sở tại Hà Nội</h3>
              <p className={cx('detail')}>
                28 Thành Thái, Dịch Vọng, Cầu Giấy, Hà Nội
              </p>
            </div>
            <div className={cx('info')}>
              <h3 className={cx('agency', 'detail')}>
                Văn phòng tại TP Hồ Chí Minh
              </h3>
              <p className={cx('detail')}>
                Số 01, Hồ Bá Kiện, Phường 15, Quận 10
              </p>
            </div>
            <div className={cx('info')}>
              <h3 className={cx('agency', 'detail')}>Hỗ trợ khách hàng</h3>
              <p className={cx('detail')}>
                support@bookingcare.vn (7h30 - 18h)
              </p>
            </div>
          </div>
          <div className={cx('col')}>
            <div className={cx('download')}>
              <h3 className={cx('title')}>
                <FontAwesomeIcon
                  className={cx('icon')}
                  icon={faMobileScreenButton}
                />
                Tải ứng dụng BookingCare cho điện thoại hoặc máy tính bảng:
              </h3>
              <div className={cx('links')}>
                <Button className={cx('link')} href={config.routes.home}>
                  Android
                </Button>
                <span>-</span>
                <Button className={cx('link')} href={config.routes.home}>
                  iPhone/iPad
                </Button>
                <span>-</span>
                <Button className={cx('link')} href={config.routes.home}>
                  khac
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={cx('bottom')}>
        <div className={cx('grid')}>
          <div className={cx('row')}>
            <div className={cx('col')}>
              <div className={cx('content')}>
                <div className={cx('copyright')}>
                  <FontAwesomeIcon className={cx('icon')} icon={faCopyright} />
                  2023 BookingCare
                </div>
                <div className={cx('socials')}>
                  <Image
                    className={cx('image')}
                    src={images.facebook}
                    alt="facebook"
                  />
                  <Image
                    className={cx('image')}
                    src={images.youtube}
                    alt="youtube"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
