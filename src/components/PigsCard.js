import React from 'react';
import PigsDetails from './PigsDetails'

export default class PigsCard extends React.Component {
    constructor() {
        super();
        this.state = ({clicked: false})
    }
// .split(" ")
// .join("_")
// .toLowerCase();
    getImages = (oldName = this.props.name) => {
        let hogName = oldName
            .split(' ')
            .join('_')
            .toLowerCase()
        let image = require(`../hog-imgs/${hogName}.jpg`)
        return image
    }

    renderDetails = (event) => {
        this.setState({clicked: !this.state.clicked})
    }





    render() {
        return (



            <div className='ui card eight wide column pigTile' onClick={this.renderDetails}>

                <img  className='image' alt={this.props.name} src={this.getImages()}/>
                <div className='content'>
                    <h3 className='Header'>  {this.props.pig.name}</h3>
                    <h5 className='description'> <b>Specialty: {this.props.pig.specialty}</b></h5>
                </div>
                <div className="extra content">
                    {this.state.clicked ? <PigsDetails pig={this.props.pig}/>: null}
                <button className='ui button' onClick={this.renderDetails}>

                        {!this.state.clicked ? 'Show Details' : 'Hide Details'} </button>
                </div>
            </div>



        )
    }


}
