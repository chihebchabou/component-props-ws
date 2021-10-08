import React from 'react';
import PropTypes from 'prop-types';

const ProductItem = ({
  product: { image, name, description, price, colors, sizes },
  title,
  children,
}) => {
  const showPrice = (price) => {
    alert(price);
  };
  return (
    <div className="col-md-4">
      <h3>
        {title} {children}
      </h3>
      <div className="card mb-3">
        <img src={image} alt={name} className="card-image-top" />
        <div className="card-body">
          <h3 className="card-title text-center">{name}</h3>
          <p className="card-text text-center">
            {sizes.map((size, i) => (
              <span key={i} style={{ padding: '0 .5rem' }}>
                {size}
              </span>
            ))}
          </p>
          <p className="card-text text-center">
            {Object.entries(colors).map(([color, value], i) => (
              <span
                title={color}
                key={i}
                className="rounded-circle"
                style={{ ...colorStyle, background: value }}
              ></span>
            ))}
          </p>
          <p className="card-text text-center">{description}</p>
          <p className="card-text text-center">
            {/* {price} */}
            <a
              href="#!"
              className="card-link"
              onClick={(e) => {
                e.preventDefault();
                showPrice(price);
              }}
            >
              price
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

ProductItem.propTypes = {
  product: PropTypes.object.isRequired,
  title: PropTypes.string,
  children: PropTypes.object,
};

const colorStyle = {
  display: 'inline-block',
  border: '1px solid black',
  width: '1.5rem',
  height: '1.5rem',
  margin: '0 .2rem',
};

export default ProductItem;
