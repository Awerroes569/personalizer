<div className={styles.imageContainer}>
        <img 
          className={styles.image}
          alt="Kodilla shirt"
          src={`${process.env.PUBLIC_URL}/images/products/shirt-${props.name}--${activeColor}.jpg`} />
      </div>

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
    {props.colors.map(item => (<li key={shortid.generate()}><button type="button" color={item} className={clsx(prepareColorClassName(item), item ===activeColor?styles.active:undefined)} onClick={changeActiveColor}/></li>))}
  </ul>
</div>
<Button action={reportProductParams} className={styles.button}>
  <span className="fa fa-shopping-cart" />
</Button>
</form>