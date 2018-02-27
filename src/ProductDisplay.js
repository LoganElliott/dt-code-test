import React, { Component } from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Product from './Product.js';
import products from './products';

class ProductDisplay extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filterBySize: null,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event, index, filterBySize){
    this.setState({filterBySize});
  }

   render() {
      const headerStyle = {
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#def1f4',
        marginBottom: '20px'
      };

      const title = {
        fontSize: '26px',
        fontWeight: 'bold',
        marginLeft: '20px',
      };

     const middleSpaceHolder = {
       flex: 1,
     };

     const filterBySize = {
       marginRight: '20px',
     };

     const productDisplay = {
       display: 'flex',
       flexWrap: 'wrap',
       justifyContent: 'center'
     };

    let displayProducts =  products.reduce((accumulator, currentProduct) => {
      if(this.state.filterBySize === null || currentProduct.size.some((size) => size === this.state.filterBySize)){
        accumulator.push(<Product key={currentProduct.index} product={currentProduct}/>);
      }
      return accumulator;
    }, []);


    const header = (
      <div style={headerStyle}>
        <div style={title}>
          Women's Tops
        </div>
        <div style={middleSpaceHolder}>
        </div>
        <SelectField style={filterBySize} value={this.state.filterBySize} onChange={this.handleChange} floatingLabelText='Filter by size'>
          <MenuItem value={null} primaryText='' />
          <MenuItem value={'XS'} primaryText='XS' />
          <MenuItem value={'S'} primaryText='S' />
          <MenuItem value={'M'} primaryText='M' />
          <MenuItem value={'L'} primaryText='L' />
          <MenuItem value={'XL'} primaryText='XL' />
        </SelectField>
      </div>
    );

    return (
      <div>
        {header}
        <div style={productDisplay}>
          {displayProducts}
        </div>
      </div>
    );
  }
}

export default ProductDisplay;