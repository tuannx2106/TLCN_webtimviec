import React, { Component } from 'react';

export default class CategoryTable extends Component {
  render() {
    const { professions, onClickFilterByProfession } = this.props;

    const professionList = professions.map(profession => {
      return (
        <tr key={profession.id}>
          <td class="category-td" data-pfsid={profession.id} onClick={onClickFilterByProfession}>{profession.professionJobName}</td>
        </tr>
      )
    })

    return (
      <table class="table-category">
        {professionList}
      </table>
    )
  }
}