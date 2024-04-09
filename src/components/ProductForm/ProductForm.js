import styles from './ProductForm.module.scss';
import clsx from 'clsx';
import Button from '../Button/Button';
import PropTypes from 'prop-types';
import { useState } from 'react';
import shortid from 'shortid';


const ProductForm = props => {

    const [activeSize, setActiveSize] = useState(props.sizes[0].name);
    const [activeColor, setActiveColor] = useState(props.colors[0]);
    const [basePrice, setBasePrice] = useState(props.baseprice);
    const [currentPrice, setCurrentPrice] = useState(basePrice+props.sizes[0].additionalPrice);
  
    const prepareColorClassName = color => {
      return styles['color' + color[0].toUpperCase() + color.substr(1).toLowerCase()];
    }
  
    const changeActiveSize = e => {
      e.preventDefault();
      setActiveSize(e.target.innerText);
      setCurrentPrice(basePrice+parseInt(e.target.getAttribute('addprice')));
    }

    
  
    const reportProductParams = () => {
      console.log(`Product: ${props.title}`);
      console.log(`Size: ${activeSize}`);
      console.log(`Color: ${activeColor}`);
      console.log(`Price: ${currentPrice}`);
    }

    const changeActiveColor = e => {
      e.preventDefault();
      setActiveColor(e.target.getAttribute('color'));
    }

    return (

      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>Price: {currentPrice}$</span>
        </header>
        <form>
          <div className={styles.sizes}>
          <h3 className={styles.optionLabel}>Sizes</h3>
          <ul className={styles.choices}>           
              {props.sizes.map(size => (<li key={shortid.generate()}><button type="button" addprice={size.additionalPrice} className={activeSize===size.name?styles.active:undefined} onClick={changeActiveSize}>{size.name}</button></li>))}
          </ul>
          </div>
          <div className={styles.colors}>
          <h3 className={styles.optionLabel}>Colors</h3>
          <ul className={styles.choices}>
              {props.colors.map(item => (<li key={shortid.generate()}><button type="button" color={item} className={clsx(prepareColorClassName(item), item ===props.activecolor?styles.active:undefined)} onClick={props.changecolor}/></li>))}
          </ul>
          </div>
          <Button action={reportProductParams} className={styles.button}>
          <span className="fa fa-shopping-cart" />
          </Button>
        </form>
      </div>
    )};

    ProductForm.propTypes = {
      title: PropTypes.string.isRequired,
      baseprice: PropTypes.number.isRequired,
      colors: PropTypes.arrayOf(PropTypes.string).isRequired,
      report: PropTypes.func.isRequired,
      changecolor: PropTypes.func.isRequired,
      sizes: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        additionalPrice: PropTypes.number.isRequired})).isRequired
      };

    export default ProductForm;