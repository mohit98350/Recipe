import react, { useEffect,useState } from 'react'
import './App.css';
import Navbar from './Navbar';
import 'bootstrap/dist/css/bootstrap.css';
import {Autocomplete} from '@material-ui/lab';
import {Container, TextField,Button} from '@material-ui/core';
import Recipe from './Recipe';



const App = ()=>{
const APP_ID = '7222c80c';
const APP_KEY="8c647c61dc8bb77e9331b1eaa2819eb8	";


const [recipes,setrecipes] = useState([]);
const[search,setsearch] = useState("");
const[query,setquery] = useState("chicken");


const getRecipes =  async()=>{
const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
const data = await response.json();
console.log(data);
setrecipes(data.hits);
}


useEffect(()=>{
 
  getRecipes();

 
console.log("UseEffect invoked...")

},[query]);


const HandleSearch = (e)=>{
  console.log("handle search invoking....");
  setsearch(e.target.value)
}

const HandleQuery = (e)=>{
  console.log("handle query invoked...");
  e.preventDefault();
  setquery(search);
  if(e === "Enter"){
  setquery(search);
  }


}


  return(
    <div>
    <Navbar/>
    <Container fixed className="container">
    
    
    <div className="App">
    <Autocomplete className="ac"
         
         id="multiple-limit-tags"
         options={auto}
         getOptionLabel={(option) => option.name}
         style={{ width: "100%" }}
         
         renderInput={(params) => <TextField {...params  }
    
          
          onChange={HandleSearch} 
           onSelect={HandleSearch} value={search} 
          label="Search Recipe......"  type="text" variant="outlined" />}
         />    
         <Button onClick={HandleQuery} variant="contained" size="large" color="primary">Search </Button>



  
  {recipes.map(recipe => (
  <Recipe 
  title={recipe.recipe.label}
  img={recipe.recipe.image}
  calories={recipe.recipe.calories}
  ingredients={recipe.recipe.ingredients}
  />
  
  ))}

    </div>
    </Container>
    </div>
);
};

const auto=[

  {
      "name":"Mutton"
  },
  {
      "name":"Fish"
  },
  {
      "name":"Paneer"
  },
  {
      "name":"ice-cream"
  },
  {
      "name":"Crab"
  },
  {
      "name":"Snake"
  },
  {
      "name":"Juice"
  },
  {
      "name":"Milk"
  },
  {
      "name":"Mango"
  },
  {
      "name":"Grapes"
  },
  {
    "name":"Pig"
  }
  
  
  
  ]


export default App;
