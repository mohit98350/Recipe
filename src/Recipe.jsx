import react from 'react';
import style from './recipe.module.css'

const Recipe = (props) =>{
    return(
    <div className={style.recipe}>
        <h1 className={style.recipe}>{props.title}</h1>
        <ol >
            <h3>INGREDIENTS</h3>
           {props.ingredients.map(ingredients => (
               <li>{ingredients.text}</li>
           ))}
        </ol>
       <img  className={style.image} src={props.img} alt="Recipe Menu"/>
        <p> Calories : {props.calories}</p>
        
        </div>
       

    )
}
export default Recipe;