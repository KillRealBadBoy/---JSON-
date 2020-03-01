import React, {Component} from 'react';
import Loader from './Loader/Loader'
import Table from './Table/Table'

class App extends Component {
  state = {
    isLoading: true,
    data:[]
  }
  async componentDidMount(){
    const response = await fetch(`http://www.json-generator.com/api/json/get/ceRHciXcVu?indent=2`)
    const data = await response.json()
    this.setState({
      isLoading:false,
      data
    })
  }
  render(){
    return(
      <div className="Container">
{
this.state.isLoading
?<Loader/>
:<Table
data={this.state.data}
/>
}
      </div>
    )
  }
}
export default App;