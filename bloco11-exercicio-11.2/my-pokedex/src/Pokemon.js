import propTypes from 'prop-types'
import React from "react";

class Pokemon extends React.Component {
  render() {
    const { pokemon: { name, type, averageWeight, image } } = this.props

    return (
      <section className="pokemon">
        <div>
          <p> {name} </p>
          <p> {type} </p>
          <p>
            {`Average weight: ${averageWeight.value} ${averageWeight.measurementUnit}`}
          </p>

        </div>
        <div>
          <img src={image} alt={`${name} sprite`} />
        </div>

      </section>
    );
  }

}

Pokemon.propTypes ={
  pokemon: propTypes.shape({
    name: propTypes.string,
    type: propTypes.string,
    averageWeight: propTypes.shape({
      value: propTypes.number,
      measurementUnit: propTypes.string,
    }),
    image: propTypes.string,
  
  }).isRequired,
}
export default Pokemon