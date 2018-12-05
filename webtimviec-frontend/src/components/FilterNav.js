import React, { Component } from 'react';

export default class FilterNav extends Component {
  render() {
    return (
      <div class="filter-nav table-display">
        <div class="filter-item table-cell-display">Ngày</div>
        <div class="filter-item table-cell-display">Lương</div>
        <div class="filter-item table-cell-display">Vị Trí</div>
      </div>
    )
  }
}