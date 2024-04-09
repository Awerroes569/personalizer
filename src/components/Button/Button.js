import styles from './Button.module.scss';
import clsx from 'clsx';
import propTypes from 'prop-types';

const Button = (props) => {
    return (<button type="button" onClick={props.action} className={clsx(styles.button, props.className)}>{props.children}</button>);
};

Button.propTypes = {
    action: propTypes.func.isRequired,
    children: propTypes.node.isRequired,
    className: propTypes.string
};

export default Button;