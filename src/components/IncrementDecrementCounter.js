
import {useState} from 'react';
import {connect} from 'react-redux'
import '../style.css'

function IncrementDecrementCounter(props) {
    
    const [counter, setCounter] = useState ('')

    const handleIncrement = () => {
        props.onIncrement ()
    }
    const handleDecrement = () => {
        props. onDecrement()
    }



    return (
        <div>
            <h2>IncrementDecrementCounter</h2>
            <div className='buttons'>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick = {handleDecrement}>Decrement</button>
            </div>
        </div>
    )

}

const mapDispatchToProps = (dispatch) => {
    return{
        onIncrement: () => dispatch ({type:'Increment'}),
        onDecrement: () => dispatch ({type:'Decrement'})
    }
}
export default connect (null, mapDispatchToProps) (IncrementDecrementCounter)