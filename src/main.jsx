import React from 'react'
import ReactDOM from 'react-dom/client'

import {restaurants} from '../materials/mock';

ReactDOM.createRoot(document.getElementById('root')).render(
 <div>
  <div><h1>{restaurants[0].name}</h1></div>
  <h3>MENU</h3>
  <ul>
    <li>{restaurants[0].menu[0].name}. Price={restaurants[0].menu[0].price}$ ({restaurants[0].menu[0].ingredients[0]}, {restaurants[0].menu[0].ingredients[1]}).</li>
    <li>{restaurants[0].menu[1].name}. Price={restaurants[0].menu[1].price}$ ({restaurants[0].menu[1].ingredients[0]}).</li>
    
  </ul>
  <h3>REVIEWS </h3>
  <ul>
    <li>{restaurants[0].reviews[0].text}. Raiting={restaurants[0].reviews[0].rating} ({restaurants[0].reviews[0].user})</li>
    <li>{restaurants[0].reviews[1].text}. Raiting={restaurants[0].reviews[1].rating} ({restaurants[0].reviews[1].user})</li>
  </ul>

  <div><h1><font color="red">{restaurants[1].name}</font></h1></div>
  <h3><font color="red">MENU</font></h3>
  <ul>
    <li>{restaurants[1].menu[0].name}. Price={restaurants[1].menu[0].price}$ ({restaurants[1].menu[0].ingredients[0]}, {restaurants[1].menu[0].ingredients[1]}, {restaurants[1].menu[0].ingredients[2]}).</li>
    <li>{restaurants[1].menu[1].name}. Price={restaurants[1].menu[1].price}$ ({restaurants[1].menu[1].ingredients[0]}, {restaurants[1].menu[1].ingredients[1]}, {restaurants[1].menu[1].ingredients[2]}, {restaurants[1].menu[1].ingredients[3]}).</li>
  </ul>
  <h3><font color="red">REVIEWS</font></h3>
  <ul>
    <li>{restaurants[1].reviews[0].text}. Raiting={restaurants[1].reviews[0].rating} ({restaurants[1].reviews[0].user})</li>
    <li>{restaurants[1].reviews[1].text}. Raiting={restaurants[1].reviews[1].rating} ({restaurants[1].reviews[1].user})</li>
    <li>{restaurants[1].reviews[2].text}. Raiting={restaurants[1].reviews[2].rating} ({restaurants[1].reviews[2].user})</li>
  </ul>

  <div><h1><font color="blue">{restaurants[2].name} </font></h1></div>
  <h3> <font color="blue">MENU</font></h3>
  
  <ul>
    <li>{restaurants[2].menu[0].name}. Price={restaurants[2].menu[0].price}$ ({restaurants[2].menu[0].ingredients[0]}).</li>
    <li>{restaurants[2].menu[1].name}. Price={restaurants[2].menu[1].price}$ ({restaurants[2].menu[1].ingredients[0]}, {restaurants[2].menu[1].ingredients[1]}).</li>
    <li>{restaurants[2].menu[2].name}. Price={restaurants[2].menu[2].price}$ ({restaurants[2].menu[2].ingredients[0]}).</li>
  </ul>
  <h3><font color="blue">REVIEWS</font> </h3>
  <ul>
    <li>{restaurants[2].reviews[0].text}. Raiting={restaurants[2].reviews[0].rating} ({restaurants[2].reviews[0].user})</li>
    </ul>

  <div><h1><font color="green">{restaurants[3].name}</font></h1></div>
  <h3><font color="green">MENU</font></h3>
  <ul>
    <li>{restaurants[3].menu[0].name}. Price={restaurants[3].menu[0].price}$ ({restaurants[3].menu[0].ingredients[0]}).</li>
    <li>{restaurants[3].menu[1].name}. Price={restaurants[3].menu[1].price}$ ({restaurants[3].menu[1].ingredients[0]}, {restaurants[3].menu[1].ingredients[1]}).</li>
  </ul>
  <h3><font color="green">REVIEWS</font></h3>
  <ul>
    <li>{restaurants[3].reviews[0].text}. Raiting={restaurants[3].reviews[0].rating} ({restaurants[3].reviews[0].user})</li>
    </ul>
 </div>
  
  );
