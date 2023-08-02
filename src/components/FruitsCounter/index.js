import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {mcount: 0, bcount: 0}

  onMango = () => {
    const {mcount} = this.state

    this.setState({mcount: mcount + 1})
  }

  onBanana = () => {
    const {bcount} = this.state

    this.setState({bcount: bcount + 1})
  }

  render() {
    const {mcount, bcount} = this.state

    return (
      <div className="main-container">
        <div className="sub-container">
          <h1 className="heading">
            Bob ate <span className="mb-span">{mcount}</span> mangoes{' '}
            <span className="mb-span">{bcount} </span>bananas
          </h1>

          <div className="fruits-container">
            <div className="mango-div">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
                className="mango-decor"
              />
              <button
                className="mango-btn"
                onClick={this.onMango}
                type="button"
              >
                Eat Mango
              </button>
            </div>
            <div className="banana-div">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
                className="banana-decor"
              />
              <button
                className="banana-btn"
                onClick={this.onBanana}
                type="button"
              >
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default FruitsCounter
