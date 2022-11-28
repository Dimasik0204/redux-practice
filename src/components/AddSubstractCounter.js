import { useState } from "react"
import {connect} from 'react-redux';
import '../style.css'

function AddSubstractCounter (props) {

    const [counter, setCounter] = useState('')

    const handleChange = (e) => {
        setCounter(e.target.value)
    }

    const handleAdd = () => {
        props.onAdd(parseInt(counter))
    }
    const handleSubstract = () => {
        props.onSubstract(parseInt(counter))
    }


    return (
        <>
        <h2>AddSubstractCounter</h2>
        <input className="input"  type = "text" onChange={handleChange}></input>
        <div className='buttons'>
        <button onClick={handleAdd}>Add</button>
        <button onClick = {handleSubstract}>Substract</button>
        </div>
        </>
    )
}
const mapDispatchToProps = (dispatch) => {
    return {
        onAdd: (value) => dispatch({type: 'ADD', payload: value}),
        onSubstract: (value) => dispatch({type: 'Substarct', payload: value})
    }
}

export default connect (null, mapDispatchToProps)(AddSubstractCounter)

