import axios from 'axios';
import './App.css';
import React, {Component} from "react";
import Card from "react-bootstrap/Card";
import 'bootstrap/dist/css/bootstrap.min.css';

export default class App extends Component{

    constructor(props) {
        super(props);
        this.state =
            {
                result: {
                    main: {
                        temp: undefined,
                        feels_like: undefined
                    },
                    weather: [
                        {
                            icon: undefined,
                            main: undefined
                        }
                    ],
                    name: undefined
                }

            }
    }

    componentDidMount() {
        axios
            .get(`http://api.openweathermap.org/data/2.5/weather?q=Toronto&units=metric&appid=24bed330ea325ba74396fb0bd3453429`)
            .then(res => this.setState({result: res.data})).then(() => console.log(this.state.result))
    }

    render(){
      return (
          <div className="App">
              <header className="App-header">
                  <Card bg="light" style={{ width: '18rem' }} text="dark" border="danger">
                      <Card.Img variant="top" src={`http://openweathermap.org/img/wn/${this.state.result.weather[0].icon}@2x.png`} />
                      <Card.Body>
                          <Card.Title>{this.state.result.name}</Card.Title>
                          <Card.Text>
                              {Math.round(this.state.result.main.temp)} °C
                          </Card.Text>
                          <Card.Text>
                              Feels like: {Math.round(this.state.result.main.feels_like)} °C
                          </Card.Text>
                          <Card.Text>
                             {this.state.result.weather[0].main}
                          </Card.Text>
                      </Card.Body>
                  </Card>
              </header>
          </div>
      );
  }
}

