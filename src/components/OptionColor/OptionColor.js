import styles from './OptionColor.module.scss';
import shortid from 'shortid';
import propTypes from 'prop-types';
import clsx from 'clsx';

const OptionColor = (props) => {

    const prepareColorClassName = color => {
        return styles['color' + color[0].toUpperCase() + color.substr(1).toLowerCase()];
      }

    return (
        <div>
        <h3 className={styles.optionLabel}>Colors</h3>
        <ul className={styles.choices}>
            {props.colors.map(item => (<li key={shortid.generate()}><button type="button" color={item} className={clsx(prepareColorClassName(item), item ===props.activecolor?styles.active:undefined)} onClick={props.changecolor}/></li>))}
        </ul>
        </div>
    )
};

OptionColor.propTypes = {
    colors: propTypes.arrayOf(propTypes.string).isRequired,
    activecolor: propTypes.string.isRequired,
    changecolor: propTypes.func.isRequired
};

export default OptionColor;