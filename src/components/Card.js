import React, {useState} from 'react';
import Cat from '../img/cat.png';

function Card ({food, dose, mouse, weight, disable}) {
    
    const [isSelected, setIsSelected] = useState(false);

    let theme = disable ? "bg-grey" : isSelected ? "bg-pink" : "bg-blue"

    return (
        <div className="Card">
            <div className={"Card__item" + " " + theme} onClick={() => setIsSelected(!isSelected)}>
                <div className="Card__info">
                    <p className="Card__header">Сказочное заморское яство</p>
                     <h1 className="Card__title">Нямушка</h1>
                     <h3 className="Card__subtitle">{food[0]}</h3>
                     <p className="Card__dose">{dose} порций</p>
                     <p className="Card__dose">{mouse} в подарок</p>
                     {dose > 99 ? <p className="Card__dose">заказчик доволен</p> : ""}
                </div>
                <div className={"Card__weight" + " " + theme}>
                        <p className="Card__count">{weight}</p>
                        <p className="Card__kg">кг</p>
                </div>
                <img src={Cat} alt="cat" />
                {disable ? <div className="disabled"></div> : ""}
            </div>
            {   
                disable ?
                <div className="Card__text disabled-color">Печалька, {food[0]} закончился.</div> :
                isSelected ? 
                <div className="Card__text">{food[1]}</div> :
                <div className="Card__text">Чего сидишь? Порадуй котэ, <span onClick={() => setIsSelected(!isSelected)}>купи.</span></div>
            }
        </div>
    );
}


export default Card;