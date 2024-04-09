import styles from './Product.module.scss';
import PropTypes from 'prop-types';
import { useState } from 'react';
import ProductImage from '../ProductImage/ProductImage';
import ProductForm from '../ProductForm/ProductForm';

const Product = props => {

  const [activeSize, setActiveSize] = useState(props.sizes[0].name);
  const [activeColor, setActiveColor] = useState(props.colors[0]);
  const [basePrice, setBasePrice] = useState(props.basePrice);
  const [currentPrice, setCurrentPrice] = useState(basePrice+props.sizes[0].additionalPrice);

  const changeActiveColor = e => {
    e.preventDefault();
    setActiveColor(e.target.getAttribute('color'));
  }

  const reportProductParams = () => {
    console.log(`Product: ${props.title}`);
    console.log(`Size: ${activeSize}`);
    console.log(`Color: ${activeColor}`);
    console.log(`Price: ${currentPrice}`);
  }

  return (
    <article className={styles.product}>
      <ProductImage
        name={props.name}
        color={activeColor}
        title={props.title}
      />   
      <ProductForm
        title={props.title}
        baseprice={props.basePrice}
        colors={props.colors}
        report={reportProductParams}
        changecolor={changeActiveColor}
        activecolor={activeColor}
        sizes={props.sizes}
      />
      
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