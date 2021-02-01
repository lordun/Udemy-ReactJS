import React, {Component} from 'react';
import Card from './Card';
import './Deck.css';
import axios from "axios";
const API_BASE_URL = " https://deckofcardsapi.com/api/deck";

class Deck extends Component {
    constructor(props){
        super(props);
        this.state={deck: null, drawn: []};
        this.getCard = this.getCard.bind(this);
    }
    async componentDidMount() {
        let deck = await axios.get(`${API_BASE_URL}/new/shuffle`);
        this.setState({deck: deck.data});
    }
    async getCard() {
        //make a request using deck id
        // axios.get()
        let deck_id = this.state.deck.deck_id;
        try{
            let cardURL = `${API_BASE_URL}/${deck_id}/draw/`;
            let cardResponse = await axios.get(cardURL);
            if(!cardResponse.data.success) {
            throw new Error("No Cards Remaining!")
        }
        let card = cardResponse.data.cards[0];
        this.setState(st => ({
            drawn: [
                ...st.drawn,
            {
                id: card.code,
                image: card.image,
                name: `${card.value} of ${card.suit} `
            }
        ]
        }));
        //set state using new card info from API
    } catch(err) {
    alert(err);
    }
}
    render() {
        const cards = this.state.drawn.map(c =>(
            <Card key={c.id} name={c.name} image={c.image} />
        ));
        return(
        <div className='Deck'>
            <h1 className = 'Deck-title'>♦ Card Dealer ♦</h1>
            <h2 className = 'Deck-title subtitle'>♦ A Little Demo Made with React ♦</h2>
            <button className ='Deck-btn' onClick = {this.getCard}>Get Card!</button>
            <div className = 'Deck-cardarea'>{cards}</div>
            
        </div>
        );
    }
    
}

export default Deck;