import React from 'react';

const Card = (props) => {
    const{id, name , email} =props

    return (
        <div className="bg-white dib br3 pa3 ma2 grow bw1 shadow-5 tc ba">

            <img alt='robot ' src={`https://robohash.org/${id}`} ></img>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
           
        </div>



    );


}

export default Card;