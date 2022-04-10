import './styles.css';

const ProductSearch = () => {
  return (
    <div className="base-card product-search-container">
      <div className="product-search-input">
        <input placeholder="Digite sua busca" />
      </div>
      <div className="product-search-button">
        <button className="btn-search">
          <h6>Buscar</h6>
        </button>
      </div>
    </div>
  );
};

export default ProductSearch;
