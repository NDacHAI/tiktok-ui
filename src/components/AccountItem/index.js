import classNames from 'classnames/bind';
import styles from './AcountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/118441977edc639baf728fd892d500b3~c5_300x300.webp?lk3s=a5d48078&nonce=27617&refresh_token=a73c4c988a8cde35979a03fb6c0a8c70&x-expires=1729587600&x-signature=IupuwZV55TfU2rRVwE4ZVhGhPfs%3D&shp=a5d48078&shcp=c1333099"
                alt="hoa"
            />
            <div className={cx('infor')}>
                <h4 className={cx('name')}>
                    <span>Nguyễn Đắc Hải</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>nguyendachai</span>
            </div>
        </div>
    );
}

export default AccountItem;
