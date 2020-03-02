import React, { Component } from 'react';
import Loader from './Loader/Loader'
import { JSONViewer } from './Table/Table'

class App extends Component {
  state = {
    isLoading: true,
    data: []
  }
  async componentDidMount() {
    const response = await fetch(`http://www.json-generator.com/api/json/get/ceRHciXcVu?indent=2`)
    const data = await response.json()
    this.setState({
      isLoading: false,
      data
    })
  }
  render() {
    const { isLoading, data } = this.state
    return (
      <div className="Container">
        {
          isLoading
            ? <Loader />
            : <JSONViewer name="Список" value={data} level={0} />
        }
      </div>
    )
  }
}
export default App;