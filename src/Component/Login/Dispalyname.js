import React, { Component } from 'react';

class Dispalyname extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue:'',
      finalValue:[]
    };
  }
    handleChange(e) {
        
    this.setState({
      inputValue: e.target.value,
    });
  }
    handleSubmit(e) {
        let totalValue = [...this.state.finalValue, this.state.inputValue];
        this.setState({
            finalValue: totalValue,
            inputValue:''
        });
  }
  renderInput() {
    return <div>
      <input type="text" value={this.state.inputValue} onChange={(e) => this.handleChange(e)}></input>
      <button type="submit" onClick={(e) => this.handleSubmit(e)}>
        nameSubmit
      </button>
    </div>;
    }
    renderDisplayplayName() {   
        const { finalValue } = this.state; 
        return (
          <div>
            {finalValue && finalValue.map((item, index) => (
              <span key={index}> {item}</span>
            ))}
          </div>
        );
    }
    render() {
      const {inputValue}=this.state
        return (
          <div>
            {" "}
            {inputValue}
            {this.renderInput()}
            {this.renderDisplayplayName()}
          </div>
        );
  }
}

export default Dispalyname;
