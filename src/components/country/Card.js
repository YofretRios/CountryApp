import React from 'react'
import PropTypes from 'prop-types'

const Card = ({ data }) => {
  const goToDetails = () => {
    console.log(data);
  };

  return (
    <div className="card bounce cursor-pointer" onClick={goToDetails}>
      <div className="card-body">
        <div className="card-flag">
          <img src={data.flag} alt={data.name} />
        </div>
        <div className="card-info">
          <h3>{data.name}</h3>
          <p>{data.region}</p>
          <p>{data.subregion}</p>
        </div>
      </div>
    </div>
  )
}

Card.propTypes = {
  data: PropTypes.object.isRequired
}

export default Card
