import React from "react";

class Pokemon extends React.Component {
  render() {
    const { pokemon: { name, type, averageWeight, image } } = this.props

    return (
      <section>
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
export default Pokemon;