import React from 'react';

const Home = ({state, dispatch}) => {
  return (
    <div>
      Home test : count : {state.count}
      <button onClick={() => dispatch({type: 'increment'})}>Increment</button>
    </div>
  );
}

export default Home;