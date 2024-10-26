import Button from '~/components/Button';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function MenuItem({ data, onClick }) {
    const className = cx('menu-item', { separate: data.separate });
    return (
        <Button
            className={className}
            leftIcon={data.icon || <span className={cx('leftIcon')}></span>}
            to={data.to}
            onClick={onClick}
        >
            {data.title}
        </Button>
    );
}

export default MenuItem;
