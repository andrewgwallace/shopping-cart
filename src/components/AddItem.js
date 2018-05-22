import React from 'react';
// Props received: addItem, products
class AddItem extends React.Component {
  state = {
    product: {},
    quantity: ''
  };
  render() {
    return (
      <div>
        <form method="post" onSubmit={this.handleSubmit}>
          <label htmlFor="quantity">Quantity</label> <br />
          <input 
          type="text" 
          name="quantity" 
          onChange={this.handleQuantity} />
          <br />
          <label htmlFor="products">Products</label>
          <br />
          <select
            className="form-control"
            name="name"
            onChange={this.handleSelection}
          >
            <option selected value="">Select an option...</option>
            {this.props.products.map(product => (
              <option key={product.id} value={product.id}>{product.name}</option>
            ))}}
          </select>
          <button className="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  }

  handleSelection = e => {
    const {value} = e.target;
    const targetId = parseInt(value, 10);
    const product = this.props.products.filter(({id}) => id === targetId)[0]
    this.setState(prevState => {
      return { product };
    });
  };

  handleQuantity = e => {
    const {value} = e.target
    this.setState(prevState => {
      return{ quantity: parseInt(value, 10) };
    })
  }
  handleSubmit = e => {
    e.preventDefault();
    this.props.addItem({ id: Date.now(), ...this.state});
  };
}

export default AddItem;