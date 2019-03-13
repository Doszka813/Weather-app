import React, { Component } from 'react';
import Title from './app/components/Title/Title';
import Form from './app/components/Form/Form';
import Weather from './app/components/Weather/Weather';
import './App.css';

const apiKey = "b97f8e00d38b7a4b76bceeb8b10a1c97";

class App extends Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
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
                    humidity={this.state.humidity}
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
        temperature: response.main.temp-272.15,
        city: response.name,
        country: response.sys.country,
        humidity: response.main.humidity,
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
