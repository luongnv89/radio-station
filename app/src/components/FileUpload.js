import React from 'react';

class FileUpload extends React.Component {
  render() {
    const { className, style, onUpload, label } = this.props;
    return (
      <button
        type="button"
        className={className}
        style={style}
        onClick={() => this.inputFileDOM.click()}
      >
        {label}
        <input
          type="file"
          onChange={(event) => onUpload(event.target.files)}
          ref={input => { this.inputFileDOM = input; }}
          style={{ display: 'none' }}
        />
      </button>
    );
  }
}

export default FileUpload;
