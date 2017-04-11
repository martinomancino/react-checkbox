import React, {Component} from 'react'

class Checkbox extends Component {

  constructor(props){
    super(props)
    this.state = {checked: false};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(props) {
    this.setState({checked: !this.state.checked});
  }

  render() {
    return (
      <div>
        <div className="checkbox" data-checked={this.state.checked} onClick={this.handleChange}></div>
        <label>How Cool!!!</label>
      </div>
    )
  }
}

export default Checkbox;
