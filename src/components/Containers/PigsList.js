import React, { Component } from 'react';
import PigsCard from "../PigsCard"



export default class PigsList extends Component {


    render() {
        return(

        <div className='ui grid container'>

                 {this.props.pigs.map(pig =>
                    <PigsCard
                        key={pig.name}
                     pig={pig}
                     name={pig.name}
                    medal={pig['highest medal achieved']}
                     />)}
        </div>

        )}
}

//map thru hugs