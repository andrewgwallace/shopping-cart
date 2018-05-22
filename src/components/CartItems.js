import React from 'react';
import CartItem from './CartItem';
import AddItem from './AddItem';



const CartItems = ({myStuff, products, addItem}) => {
  return <div className="container">
      <h1>Cart Items</h1>
      <div className="list-group">
        <div className="list-group-item">
          <div className="row">
            <div className="col-md-8">Product</div>
            <div className="col-md-2">Price</div>
            <div className="col-md-2">Quantity</div>
          </div>
        </div>
        
        {myStuff.map(item => <CartItem key={item.id} item={item} />)}
      <div>
        <span>{`Total Price: $`}
          {myStuff.reduce((total, item) => {
            return ((item.product.priceInCents / 100) * item.quantity + total)
          }, 0)}
        </span>
      </div>
        <AddItem products={products} addItem={addItem}/>
      </div>
    </div>;
}

export default CartItems;