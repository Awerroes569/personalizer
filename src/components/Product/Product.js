import styles from './Product.module.scss';
import clsx from 'clsx';
import Button from '../Button/Button';
import PropTypes from 'prop-types';
import { useState } from 'react';
import shortid from 'shortid';

const Product = props => {

  const [activeSize, setActiveSize] = useState(props.sizes[0].name);
  const [activeColor, setActiveColor] = useState(props.colors[0]);

  const prepareColorClassName = color => {
    return styles['color' + color[0].toUpperCase() + color.substr(1).toLowerCase()];
  }

  const changeActiveSize = e => {
    e.preventDefault();
    setActiveSize(e.target.innerText);
  }

  const changeActiveColor = e => {
    e.preventDefault();
    console.log('TARGET COLOR:',e.target.getAttribute('color'));
    setActiveColor(e.target.getAttribute('color'));
  }

  return (
    <article className={styles.product}>
      <div className={styles.imageContainer}>
        <img 
          className={styles.image}
          alt="Kodilla shirt"
          src={`${process.env.PUBLIC_URL}/images/products/shirt-${props.name}--${activeColor}.jpg`} />
      </div>
      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>Price: {props.basePrice}$</span>
        </header>
        <form>
          <div className={styles.sizes}>
            <h3 className={styles.optionLabel}>Sizes</h3>
            <ul className={styles.choices}>           
              {props.sizes.map(size => (<li key={shortid.generate()}><button type="button" className={activeSize===size.name?styles.active:undefined} onClick={changeActiveSize}>{size.name}</button></li>))}
            </ul>
          </div>
          <div className={styles.colors}>
            <h3 className={styles.optionLabel}>Colors</h3>
            <ul className={styles.choices}>
              {props.colors.map(item => (<li key={shortid.generate()}><button type="button" color={item} className={clsx(prepareColorClassName(item), item ===activeColor?styles.active:undefined)} onClick={changeActiveColor}/></li>))}
            </ul>
          </div>
          <Button className={styles.button}>
            <span className="fa fa-shopping-cart" />
          </Button>
        </form>
      </div>
    </article>
  )
};

Product.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  basePrice: PropTypes.number.isRequired,
  colors: PropTypes.arrayOf(PropTypes.string).isRequired,
  sizes: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    additionalPrice: PropTypes.number.isRequired})).isRequired
};

export default Product;