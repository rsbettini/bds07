import { ReactComponent as MainImage } from 'assets/images/car-header.svg';
import ButtonHome from 'components/ButtonHome';
import { Link } from 'react-router-dom';

import './styles.css';

const Home = () => {
  return (
    <>
      <div className="home-container">
        <div className="base-card home-card">
          <div className="home-content-container">
            <h1>O carro perfeito para você</h1>
            <p>
              Conheça nossos carros e dê mais um passo na realização do seu
              sonho
            </p>
          </div>
          <div className="home-image-container">
            <MainImage />
          </div>
        </div>
      </div>
      <div>
        <Link to="/products">
          <ButtonHome />
        </Link>
      </div>
    </>
  );
};

export default Home;
