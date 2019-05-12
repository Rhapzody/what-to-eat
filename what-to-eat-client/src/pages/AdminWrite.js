import React, { Component } from 'react';
import TextEditor from '../components/TextEditor';
import TagSelector from '../components/TagSelector';


export default class AdminWrite extends Component {

  state = {
    text: "",
    selectedOption: null
  }

  handleEditorChange = (value) => {
    this.setState({text: value});
    console.log(value);
  }

  handleTagSelectChange = (selectedOption) => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  }

  handleSubmitClick = () => {
    console.log('Submit button clicked');
    
  }

  render() {
    return (
      <div className="pb-5">
        <div className="mb-5">
          <h1 className="h3 mb-4 text-gray-800">เพิ่มเมนูอาหาร</h1>
          <TagSelector
            value={this.state.selectedOption}
            onChange={this.handleTagSelectChange}
          />
          <br/>
          <TextEditor 
            onChange={this.handleEditorChange} 
            value={this.state.text}
          />
        </div>
        <br/><br/>
        <button onClick={this.handleSubmitClick} className="btn btn-primary btn-icon-split">
          <span className="icon text-white-50"> 
            <i className="far fa-save"></i> 
          </span>
          <span className="text"> บันทึก </span>
        </button>
        
      </div>
    )
  }
}
