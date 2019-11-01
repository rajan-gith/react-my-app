import React, {
  Component
} from 'react';
import ReactDOM from 'react-dom';
import "./Demo.css"


const Demo = (props) => {
	return <div className="main-div">
      <h1> It worked...{props.name} </h1>
      <p>Enclosed in div tag</p>
    </div>
}

// class Demo extends Component {
//   render() {
//     return <div className="main-div">
//       <h1> It worked...{this.props.name} </h1>
//       <p>Enclosed in div tag</p>
//     </div>
//   }
// }

export default Demo;
