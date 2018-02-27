import React, { Component } from 'react';

class Product extends Component {
  render() {
    const nameAndPriceStyle = {
      display: 'flex',
      fontWeight: 'bold',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: '30px',
    };

    const productStyle = {
      display: 'flex',
      flexDirection: 'column',
      border: '1px',
      borderStyle: 'solid',
      borderColor: '#e1e1e1',
      height: '456px',
      width: '329px',
    };

    const productNameStyle = {
      marginLeft: '5px',
      fontSize: '18px'
    };

    const productPriceStyle = {
      marginRight: '5px',
      fontSize: '25px'
    };

    const middleSpaceHolder = {
      flex: 1,
    };

    const saleOrExclusiveStyle = {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: 'white',
      marginLeft: '10px',
      height: '50px',
    };

    const saleStyle = {
      width: '75px',
      backgroundColor: '#cc3333',
    };

    const exclusiveStyle = {
      backgroundColor: '#009900',
      width: '139px',
    };

    const imageStyle = {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
    };

    const saleOrExclusiveContainer = {
      height: '50px',
    };

    const sale = this.props.product.isSale ? <div style={{...saleOrExclusiveStyle, ...saleStyle}}>Sale</div> : null;

    const exclusive = this.props.product.isExclusive ? <div style={{...saleOrExclusiveStyle, ...exclusiveStyle}}>Exclusive</div> : null;

    const saleOrExclusive = (
      <div style={saleOrExclusiveContainer}>
        {sale}
        {exclusive}
      </div>
    );

    return (
      <div style={productStyle}>
        <div style={imageStyle}>
          <img src={process.env.PUBLIC_URL + '/Products/' + this.props.product.productImage} alt={this.props.product.productName}/>
        </div>
        <div>
          {saleOrExclusive}
          <div style={nameAndPriceStyle}>
            <div style={productNameStyle}>{this.props.product.productName} </div>
            <div style={middleSpaceHolder}></div>
            <div style={productPriceStyle}>{this.props.product.price}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Product;