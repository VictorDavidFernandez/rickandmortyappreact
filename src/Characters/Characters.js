import React from "react";
import './Characters.css';

const Characters = ({charactersList = []}) => {
    return (
        <div className="row row row-cols-1 row-cols-md-6 g-8">
            {charactersList.map((item, index) =>
                <div key = {index} >
                    <div className="card-group">
                        <div className="card border-warning card-wr-bg">
                            <img src={item.image} alt=""/>
                            <div className="card-body">
                               <h5 className="card-title">{item.name}</h5> 
                            </div>
                        </div>
                    </div>
                    <br/>
                </div>
            )}
        </div>
    )
}

export default Characters

