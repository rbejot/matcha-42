import React from 'react';

const Profil = ({state, dispatch, match}) => {
  return (
    <div>Profil page {match.params.UserId}</div>
  );
}

export default Profil;