import React from 'react';
import './Form.css';

const Form = (props) => {
  return (
    <form onSubmit={props.loadWeather}>
      <div className="form-group">
        <input type="text" name="city" placeholder="City..." />
      </div>
      <div className="form-group">
        <input type="text" name="country" placeholder="Country..." />
      </div>
      
      <button type="submit" className="btn btn-primary">Get Weather</button>
    </form>
  )
}
export default Form;