import React, {Component} from 'react'
import Checkbox from '../components/checkbox/Checkbox';


class CheckboxContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      checked: false
    }
    this.onStateChange = this.onStateChange.bind(this);
  }

  onStateChange() {
    this.setState({checked: !this.state.checked});
  }

  render() {
    return (
      <div>
        <h5>Amazing React Checkbox</h5>
        <Checkbox
        checked={this.state.checked}
        onStateChange={this.onStateChange}/>
      </div>
    )
  }
}

export default CheckboxContainer;
