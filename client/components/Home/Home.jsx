import React, { PropTypes as T } from 'react';

class Home extends React.Component {

  render() {
    return (
      <div className='wrapper'>
        <div className='img-bg'>
        </div>
        <div className='promo-wrapper'>
          <div className='promo-card sm-img-1'></div>
          <div className='promo-card sm-img-2'></div>
          <div className='promo-card sm-img-3'></div>
        </div>
      </div>
    );
  }
}

module.exports = Home;



