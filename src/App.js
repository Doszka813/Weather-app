import React, { Component } from 'react';
import Title from './app/components/Title/Title';
import Form from './app/components/Form/Form';
import Weather from './app/components/Weather/Weather';
import './App.css';

const apiKey = "";

class App extends Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    clouds: undefined,
    humidity: undefined,
    pressure: undefined,
    description: undefined,
    error: undefined
  }

  render() {
    return (
        <div className="wrapper">
          <div className="title-container">
            <Title />
          </div>
          <div className="form-container">
            <Form loadWeather={this.getWeather} />
          </div>
          <div className="weather-container">
            <Weather
              temperature={this.state.temperature}
              city={this.state.city}
              country={this.state.country}
              clouds={this.state.clouds}
              humidity={this.state.humidity}
              pressure={this.state.pressure}
              weather={this.state.weather}
              description={this.state.description}
              error={this.state.error}
            />
          </div>
        </div>
    );
  }

  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiKey}`);
    const response = await api_call.json();
    console.log(response);
    
    if(city && country) {
      this.setState({
        temperature: response.main.temp-273.15,
        city: response.name,
        country: response.sys.country,
        clouds: response.clouds.all,
        humidity: response.main.humidity,
        pressure: response.main.pressure,
        weather: response.weather[0].icon,
        description: response.weather[0].description,
        error: ""
      })
    }else {
      this.setState({
        error: "Please select city and country"
      })
    }
  }
}

export default App;
