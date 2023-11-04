import { Component } from 'react';
import StickersList from './components/stickers/stickersList/StickersList';
import Choice from './components/choice/Choice';


export default class App extends Component {
  state = {
    stickers: [
      {
        "img": "https://tlgrm.eu/_/stickers/e3a/876/e3a87689-707f-3495-b94a-8ee96e2538e5/256/32.webp",
        "label": "Coding"
      },
      {
        "img": "https://tlgrm.eu/_/stickers/e3a/876/e3a87689-707f-3495-b94a-8ee96e2538e5/256/41.webp",
        "label": "Chilling"
      },
      {
        "img": "https://tlgrm.eu/_/stickers/e3a/876/e3a87689-707f-3495-b94a-8ee96e2538e5/256/61.webp",
        "label": "Astronaut"
      },
      {
        "img": "https://tlgrm.eu/_/stickers/e3a/876/e3a87689-707f-3495-b94a-8ee96e2538e5/256/72.webp",
        "label": "Doing his thing"
      },
      {
        "img": "https://tlgrm.eu/_/stickers/e3a/876/e3a87689-707f-3495-b94a-8ee96e2538e5/256/86.webp",
        "label": "Napping"
      },
      {
        "img": "https://tlgrm.eu/_/stickers/e3a/876/e3a87689-707f-3495-b94a-8ee96e2538e5/256/84.webp",
        "label": "In the cold"
      }
    ], 
    choise: ""
  };

  onClick = (e) => {
    this.setState({
      choise: e.target.textContent
    })
  
  };

  render() {
    return (
      <>
       <StickersList onClick={this.onClick} data={this.state.stickers}/>
       <Choice choice={this.state.choise}/>
       </>
     
    )
  }
}


