import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Accommodation extends Component {
    constructor(props) {
    super(props);
    this.state = {
      datas: this.props.datas
    }
  }
    render() {  
        return (      
            <section className='home__cards'>
                {this.state.datas.map(el => {
                    return (
                        <Link to={`/accommodation/${el.id}`} key={el.id}>
                            <article className='home__cards__thumb'>
                                <img src={el.cover} alt={el.title} />
                                <p className='home__cards__thumb__title'>{el.title}</p>
                            </article>
                        </Link>
                         )
                })}
            </section>
        )
    }
}