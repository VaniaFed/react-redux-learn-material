import React from 'react';

const CountDown = ({count=10, tick=f=>f, reset=f=>f}) => {
  if (count) {
    setTimeout(() => tick(), 1000);
  }

  return (
    <div className="container">
      {(count) ?
        <h1 className="count">{count}</h1> :
        <div className="reset" onClick={() => reset(10)}>Reset</div>}
    </div>
    
  )
};

export default CountDown;