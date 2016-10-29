import React from 'react';
import AppHeader from '../components/appHeader'

/* Import Components */
import NextButton from '../components/nextButton';
import Wrapper from '../components/wrapper';
import Header from '../components/header';
import Ingredient from '../components/ingredient';

export default class extends React.Component {

  constructor (props) {
    super(props)
  }

	render () {
    const title = `Was dezue passt`;
    const ingredients = [{
        text: "lauch",
        image: "http://www.gemuese.ch/Ressourcen/Bilder/Gemusearten/Gemusebilder-Header/Headerbilder_Saisonkalender_Lauch-de.jpg",
      },
      {
        text: "broccoli",
        image: "http://www.deutsches-obst-und-gemuese.de/uploads/pics/produktbilder_gross_brokkoli_01.jpg",
      }
    ]

    return (
  	  <div>
        <Header />
        <Wrapper>
  	      <AppHeader>{title}</AppHeader>
          {ingredients.map((item,index) => {
            return (<Ingredient text={item.text} image={item.image} key={index}/>)
          })}
          <NextButton linkText="Next" link="page1" url={this.props.url}></NextButton>
        </Wrapper>
  	  </div>
  	);
  }
}
