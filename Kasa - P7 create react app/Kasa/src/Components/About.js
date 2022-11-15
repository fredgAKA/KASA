import React, { Component } from "react";
import Banner from "./Banner";
import Dropdown from "./Dropdown";

export default class About extends Component {
    constructor(props) {
    super(props);
    this.state = {
      info: {
        type: "banner-aboutpage",
        text: "",
      },
      textOne: {
        title: "Fiabilité",
        body: "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
      },
      textTwo: {
        title: "Respect",
        body: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
      },
      textThree: {
        title: "Service",
        body: "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
      },
      textFour: {
        title: "Sécurité",
        body: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
      },
      class: "dropdown",
    }
  }

    render() {
        return(
          <main>
            <div className="about">
              <Banner info={this.state.info} />
              <Dropdown text={this.state.textOne} class={this.state.class} />
              <Dropdown text={this.state.textTwo} class={this.state.class} />
              <Dropdown text={this.state.textThree} class={this.state.class} />
              <Dropdown text={this.state.textFour} class={this.state.class} />
            </div>
          </main>
        )
    }
}