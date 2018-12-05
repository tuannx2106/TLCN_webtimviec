import React, { Component } from 'react';

export default class SelectLocation extends Component {
  render() {
    const {citys, handleOnLocationChange} = this.props;

    const listCity = citys.map(city => {
      return <option value={city.id}>{city.name}</option>
    })

    return (
      <select name="location" id="selectLocation" onChange={handleOnLocationChange}>
        {listCity}
      </select>
    )
  }
}