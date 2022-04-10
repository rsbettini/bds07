import './styles.css';

import ProductImg from 'assets/images/car-card.png';
import ButtonBuy from 'components/ButtonBuy';

const ProductCard = () => {
  return (
    <>
      <div className="base-card product-card">
        <div className="card-image-container">
          <img src={ProductImg} alt="Car card" />
        </div>
        <div className="car-description-container">
          <h6>Audi Supra TT</h6>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Cupiditate, nisi
          </p>
          <ButtonBuy />
        </div>
      </div>
    </>
  );
};
export default ProductCard;
