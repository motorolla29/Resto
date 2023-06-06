import React from 'react';
import { connect } from 'react-redux';
import './cart-table.scss';
import { deleteFromCart, changeTotalCount } from '../../actions';

const CartTable = ({ items, deleteFromCart, changeTotalCount }) => {
  return (
    <>
      <div className="cart__title">Ваш заказ:</div>
      <div className="cart__list">
        {items.map((item) => {
          const { title, price, url, id, quantity } = item;
          return (
            <div key={id} className="cart__item">
              <img src={url} className="cart__item-img" alt={title}></img>
              <div className="cart__item-title">{title}</div>
              <div className="cart__item-price">
                {price}$ x{quantity}
              </div>
              <div
                onClick={() => {
                  deleteFromCart(id);
                  changeTotalCount();
                }}
                className="cart__close"
              >
                &times;
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

const mapStateToProps = ({ items }) => {
  return {
    items,
  };
};

const mapDispatchToProps = { deleteFromCart, changeTotalCount };

export default connect(mapStateToProps, mapDispatchToProps)(CartTable);
