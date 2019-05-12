import React, { Component } from 'react'
import chroma from 'chroma-js';
import Select from 'react-select';

export default class TagSelector extends Component {
    colourStyles = {
        control: styles => ({ ...styles, backgroundColor: 'white' }),
        option: (styles, { data, isDisabled, isFocused, isSelected }) => {
          const color = chroma(data.color);
          return {
            ...styles,
            backgroundColor: isDisabled
              ? null
              : isSelected ? data.color : isFocused ? color.alpha(0.1).css() : null,
            color: isDisabled
              ? '#ccc'
              : isSelected
                ? chroma.contrast(color, 'white') > 2 ? 'white' : 'black'
                : data.color,
            cursor: isDisabled ? 'not-allowed' : 'default',
      
            ':active': {
              ...styles[':active'],
              backgroundColor: !isDisabled && (isSelected ? data.color : color.alpha(0.3).css()),
            },
          };
        },
        multiValue: (styles, { data }) => {
          const color = chroma(data.color);
          return {
            ...styles,
            backgroundColor: color.alpha(0.1).css(),
          };
        },
        multiValueLabel: (styles, { data }) => ({
          ...styles,
          color: data.color,
        }),
        multiValueRemove: (styles, { data }) => ({
          ...styles,
          color: data.color,
          ':hover': {
            backgroundColor: data.color,
            color: 'white',
          },
        }),
    }

    colourOptions = [
        { value: 'ocean', label: 'Ocean', color: '#00B8D9', isFixed: true },
        { value: 'blue', label: 'Blue', color: '#0052CC', disabled: true },
        { value: 'purple', label: 'Purple', color: '#5243AA' },
        { value: 'red', label: 'Red', color: '#FF5630', isFixed: true },
        { value: 'orange', label: 'Orange', color: '#FF8B00' },
        { value: 'yellow', label: 'Yellow', color: '#FFC400' },
        { value: 'green', label: 'Green', color: '#36B37E' },
        { value: 'forest', label: 'Forest', color: '#00875A' },
        { value: 'slate', label: 'Slate', color: '#253858' },
        { value: 'silver', label: 'Silver', color: '#666666' },
    ]

    render() {
        return (
            <Select
                closeMenuOnSelect={false}
                isMulti
                options={this.colourOptions}
                styles={this.colourStyles}
                value={this.props.value}
                onChange={this.props.onChange}
                placeholder="เพิ่มแท็ก"
            />
        )
    }
}
