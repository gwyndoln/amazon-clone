import "./Product.css";
import React from "react";
import { useStateValue } from "./StateProvider";

function Product({ id, title, image, price, rating }) {
  // eslint-disable-next-line
  const [, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: Math.random().toString(16),
        title,
        image,
        price,
        rating,
      },
    });
  };

  return (
    <div className='product'>
      <div className='product__info'>
        <p className='product__title'>{title}</p>

        <p className='product__price'>
          <small>$</small>
          <strong>{price}</strong>
        </p>

        <div className='product__rating'>
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>⭐</p>
            ))}
        </div>
      </div>

      <img className='product__image' src={image} alt={title} />

      <button onClick={addToBasket} className='product__button'>
        Add to basket
      </button>
    </div>
  );
}

export default Product;
