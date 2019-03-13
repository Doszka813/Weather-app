import React from 'react';
import './Weather.css';

class Weather extends React.Component{
  render(){
      return(
          <div className="weather-info">
              {
                this.props.country && this.props.city && <p className="weather-key-name">{this.props.city}, {this.props.country}<span className="weather__value">
                  <img id="icon" src={`http://openweathermap.org/img/w/${this.props.weather}.png`}></img></span></p> 
              }
              {
                this.props.temperature && <p className="weather-key">Temperature: 
                  <span className="weather__value">  {this.props.temperature.toFixed(1)}&deg;C</span>
                </p>
              }
              {
                this.props.clouds && <p className="weather-key">Cloudiness: 
                  <span className="weather__value">  {this.props.clouds}%</span>
                </p>
              }
              {
                this.props.humidity && <p className="weather-key">Humidity: 
                  <span className="weather__value">  {this.props.humidity}%</span>
                </p>
              }
              {
                this.props.pressure && <p className="weather-key">Pressure: 
                  <span className="weather__value">  {this.props.pressure} HPa</span>
                </p>
              }  
              {
                this.props.description && <p className="weather-key">Conditions:  
                  <span className="weather__value">  {this.props.description}</span>
                </p>
              }
              {
                this.props.error && <p className="weather__error">{this.props.error}</p>
              }
      
          </div>
      )
  }
}
export default Weather;