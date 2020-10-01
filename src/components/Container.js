import React from 'react';
import Card from './Card'

const food = {
    fg: ["с фуа-гра", "Печень утки разварная с артишоками."],
    fish: ["с рыбой", "Головы щучьи с чесноком да свежайшая сёмгушка."],
    chicken: ["с курой", "Филе из цыплят с трюфелями в бульоне."]
};


const Container = () => (

    <div className="Container">
       <Card mouse={"мышь"} dose={10} food={food.fg} weight={"0,5"} />
       <Card mouse={"2 мыши"} dose={40} food={food.fish} weight={"2"} />
       <Card mouse={"5 мышей"} dose={100} food={food.chicken} weight={"5"} disable={true}/>
    </div>
)


export default Container;