import styles from './OptionSize.module.scss';
import shortid from 'shortid';
import propTypes from 'prop-types';

const OptionSize = (props) => {

    return (
        <div className={styles.sizes}>
          <h3 className={styles.optionLabel}>Sizes</h3>
          <ul className={styles.choices}>           
              {props.sizes.map(size => (<li key={shortid.generate()}><button type="button" addprice={size.additionalPrice} className={props.activesize===size.name?styles.active:undefined} onClick={props.changesize}>{size.name}</button></li>))}
          </ul>
        </div>
    )
};

OptionSize.propTypes = {
    sizes: propTypes.arrayOf(propTypes.shape({
        name: propTypes.string.isRequired,
        additionalPrice: propTypes.number.isRequired
        })).isRequired,
    activesize: propTypes.string.isRequired,
    changesize: propTypes.func.isRequired
};

export default OptionSize;