import React, { Component } from 'react'
import 'react-quill/dist/quill.snow.css';
import ReactQuill from 'react-quill';
export default class TextEditor extends Component {

    modules = {
        toolbar: [
            [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
            ['bold', 'italic', 'underline','strike', 'blockquote'],
            [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
            ['clean'],
            [{color:['#e6194b', '#3cb44b', '#ffe119', '#4363d8', '#f58231', '#911eb4', '#46f0f0', '#f032e6', '#bcf60c', '#fabebe', '#008080', '#e6beff', '#9a6324', '#fffac8', '#800000', '#aaffc3', '#808000', '#ffd8b1', '#000075', '#808080', '#ffffff', '#000000']}],
            [{script:'sub'}, {script:"super"}],
            ['link', 'image', 'video']
            [{size:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]}]
        ]
    }
    
    formats = [
        'header',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet', 'indent',
        'link', 'image' , 'color'
    ]

  render() {
    return (
        <ReactQuill 
            value={this.props.value} 
            onChange={this.props.onChange} 
            modules={this.modules} 
            formats={this.formats}
            style={{height:'300px'}}
        />
    )
  }
}
