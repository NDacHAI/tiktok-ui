import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react';
import HeadlessTippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner, faEllipsisVertical, faKeyboard } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';

import Button from '~/components/Button';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './Header.module.scss';
import images from '~/assets/images';
import AccountItem from '~/components/AccountItem';
import Menu from '~/components/Popper/Menu';
import Image from '~/components/Image';
import 'tippy.js/dist/tippy.css';
import {
    CheckIcon,
    CoinsIcon,
    FeedbackIcon,
    LanguageIcon,
    LogoutIcon,
    MailBoxIcon,
    SearchIcon,
    SettingIcon,
    ThemeIcon,
    UploadIcon,
} from '~/components/icons';

const cx = classNames.bind(styles);
const MENU_ITEMS = [
    {
        icon: <LanguageIcon />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'Languge',
                    code: 'en',
                    title: 'English', // United States, Canada, Australia, etc.
                    icon: <CheckIcon />,
                },
                {
                    type: 'Languge',
                    code: 'vi',
                    title: 'Tiếng Việt', // Vietnam
                },
                {
                    type: 'Languge',
                    code: 'fi',
                    title: 'Suomi', // Finland
                },
                {
                    type: 'Languge',
                    code: 'no',
                    title: 'Norsk', // Norway
                },
                {
                    type: 'Languge',
                    code: 'se',
                    title: 'Svenska', // Sweden
                },
                {
                    type: 'Languge',
                    code: 'dk',
                    title: 'Dansk', // Denmark
                },
                {
                    type: 'Languge',
                    code: 'ch',
                    title: 'Schweizerdeutsch', // Switzerland (Swiss German)
                },
                {
                    type: 'Languge',
                    code: 'nl',
                    title: 'Nederlands', // Netherlands
                },
            ],
        },
    },
    {
        icon: <FeedbackIcon />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
    {
        icon: <ThemeIcon />,
        title: 'Dark mode',
        children: {
            title: 'Dark mode',
            data: [
                {
                    type: 'theme',
                    code: 'en',
                    title: 'Auto',
                },
                {
                    type: 'theme',
                    code: 'vi',
                    title: 'Dark mode',
                },
                {
                    type: 'theme',
                    code: 'fi',
                    icon: <CheckIcon />,
                    title: 'Bright mode',
                },
            ],
        },
    },
];

function Header() {
    const [searchResult, setSearchResult] = useState([]);
    const currenUser = true;

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([]);
        }, 0);
    }, []);

    //Handle logic
    const handleMenuChange = (menuItem) => {
        console.log(menuItem);
    };

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View profile',
            to: '/@hoaa',
        },
        {
            icon: <CoinsIcon />,
            title: 'Get coins',
            to: '/coins',
        },
        {
            icon: <SettingIcon />,
            title: 'Setting',
            to: '/setting',
        },
        ...MENU_ITEMS,
        {
            icon: <LogoutIcon />,
            title: 'Log out',
            to: '/logout',
            separate: true,
        },
    ];

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="TikTok" />
                </div>
                <HeadlessTippy
                    interactive
                    visible={searchResult.length > 0}
                    render={(attrs) => (
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <h4 className={cx('search-title')}>Accounts</h4>
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input type="text" placeholder="Search accounts and videos" spellCheck={false} />
                        <button className={cx('clear')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
                        <button className={cx('search-btn')}>
                            <SearchIcon />
                        </button>
                    </div>
                </HeadlessTippy>

                <div className={cx('actions')}>
                    {currenUser ? (
                        <>
                            <button className={cx('action-upload')}>
                                <UploadIcon />
                                <span>Tải lên</span>
                            </button>
                            <Tippy delay={[0, 200]} content="Hộp thư" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <MailBoxIcon />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button primary>Log in</Button>
                        </>
                    )}

                    <Menu items={currenUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currenUser ? (
                            <Image
                                src="https://p9-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/118441977edc639baf728fd892d500b3.jpeg?lk3s=30310797&nonce=43191&refresh_token=314815905fe82e1a84e5a78574d80dd0&x-expires=1729936800&x-signature=0Hm8vgn%2BN1e3wc3lD4U1OiyMe8g%3D&shp=30310797&shcp=-"
                                className={cx('user-avatar')}
                                alt="user"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
