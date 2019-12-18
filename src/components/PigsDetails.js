import React from 'react';

const PigsDetails = ({pig}) => {
 const greased = pig.greased
 const specialty = pig.specialty
 const weight = pig.weight
    const medal = pig['highest medal achieved']

return (
    <div className="description">
    <h5>Weight: {weight} </h5>
        <h5>Pig greased?: {greased ? (<b>Greased</b>) : ('Not greased')}</h5>
        <h5>Highest Medal Achieved: {medal.slice(0,1).toUpperCase() + medal.slice(1, medal.length)

        }</h5>
    </div>
 )
 // <div>{console.log(pig, name, weight, medal)}</div>
}
export default PigsDetails