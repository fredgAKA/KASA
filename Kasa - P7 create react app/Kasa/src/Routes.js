import React, {Component} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import NoMatch from "./Components/NoMatch";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import AccommodationPage from "./Components/AccommodationPage"



export default class RouteConfig extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Header />
                    <Switch>
                        <Route exact path="/">
                            <Home datas={this.props.datas}/>
                        </Route>
                        <Route path="/about">
                            <About />
                        </Route>
                        <Route path="/accommodation/:accommodationId">
                            <AccommodationPage datas={this.props.datas}/>
                        </Route>
                        <Route path="*">
                            <NoMatch />
                        </Route>
                        <Route path="/404">
                            <NoMatch />
                        </Route>
                    </Switch>
                    <Footer />
                </Router>
            </div>
        );
    }
}