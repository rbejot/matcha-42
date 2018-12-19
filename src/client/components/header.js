import React from 'react'

const Header = (props) => {
  return (
    <div>
      {props.state.count}
      <button onClick={() => props.dispatch({type: 'decrement'})}>-</button>
    </div>
  );
}

export default Header