import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux'
import IncrementDecrementCounter from './components/IncrementDecrementCounter';
import AddSubstractCounter from './components/AddSubstractCounter';
import './style.css'

// import DisplayCounter from './components/DisplayCounter';

function App(props) {
  return (
    <div className='mainContainer'>
      <h2 className='header'>APP</h2>
      <div className='secondContainer'>
          <div className='greenContainer'>
          <IncrementDecrementCounter />
          </div>
          <hr></hr>
          <h1>Main Counter: {props.ctr}</h1>
          <hr></hr>
            <div className='greenContainer'>
            <AddSubstractCounter />
            </div>
          <hr></hr>
      </div>
          <div className='DisplayContainer'>
          <h1>DisplayCounter</h1>
          <h1>{props.ctr}</h1>
          </div>
      
    </div>
    
  );
}

const mapStateToProps = (state) => {
  return {
    ctr: state.count
  }
}

export default connect(mapStateToProps) (App);
