import React, { Component } from 'react';
import SelectCategory from '../components/SelectCategory';
import SelectLocation from '../components/SelectLocation';

export default class SearchBar extends Component {
  render() {
    const {citys, handleOnLocationChange, professions, handleOnProfessionChange, onClickSearch } = this.props;

    return (
      <div className="search-bar">
        <div className="bar-item location-area">
          <SelectLocation citys={citys} handleOnLocationChange={handleOnLocationChange}></SelectLocation>
        </div>
        <div className="bar-item category-area">
          <SelectCategory professions={professions} handleOnProfessionChange={handleOnProfessionChange}></SelectCategory>
        </div>
        <div className="bar-item button-area">
          <button className="button-search-job button" id="buttonSearch" onClick={onClickSearch}>Tìm kiếm</button>
        </div>
      </div>
    )
  }
}