import styles from './ProductForm.module.scss';
import PropTypes from 'prop-types';
import { useState } from 'react';
import Button from '../Button/Button';
import OptionColor from '../OptionColor/OptionColor';
import OptionSize from '../OptionSize/OptionSize';


const ProductForm = props => {

    const [activeSize, setActiveSize] = useState(props.sizes[0].name);
    const [activeColor, setActiveColor] = useState(props.colors[0]);
    const [basePrice, setBasePrice] = useState(props.baseprice);
    const [currentPrice, setCurrentPrice] = useState(basePrice+props.sizes[0].additionalPrice);
  
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

    return (

      <div>
        <header>
          <h2 className={styles.name}>
            {props.title}
          </h2>
          <span className={styles.price}>
            Price:&nbsp; 
          {currentPrice}$</span>
        </header>
        <form>
          
          <OptionSize
            sizes={props.sizes}
            activesize={activeSize}
            changesize={changeActiveSize}
          />
          <OptionColor
            colors={props.colors}
            activecolor={props.activecolor}
            changecolor={props.changecolor}
          />
          <Button
            action={reportProductParams}
            className={styles.button}
          >
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