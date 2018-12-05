import React, { Component } from 'react';

export default class SelectCategory extends Component {
  render() {
    const {professions, handleOnProfessionChange} = this.props;

    const listProfession = professions.map(p => {
      return <option value={p.id}>{p.professionJobName}</option> 
    })

    return (
      <select name="category" id="selectCategory" onChange={handleOnProfessionChange}>
        {listProfession}
      </select>
    )
  }
}