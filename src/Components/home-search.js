import React, { useState, useEffect } from "react";
import axios from "axios";
import RecipeCard from "./recipeCard";


export default function HomeSearch() {
    const [ data, setData ] = useState([]);
    const [search, setSearch] = useState("");
    const [ filtered, setFiltered ] = useState([]);
    
    useEffect(() => {
      axios
        .get(`https://backend-chef.herokuapp.com/api/recipes`)
        .then(res => {
          // console.log(res.data)
          const filtered = res.data.filter(filter => {
              console.log(search === filter.recipe_name)
              filter.recipe_name.toLowerCase().includes(search.toLowerCase()) 
              // || filter.chef_name.toLowerCase().includes(search.toLocaleLowerCase()) 
              //   || filter.ingredient.toLowerCase().includes(search.toLocaleLowerCase())
          });
          setFiltered(filtered);
      })  
      }, [search]);

      // console.log(filtered);

      const handleChange = e => {
        // e.preventDefault();
        setSearch(e.target.value)
        setFiltered(e.target.value)
            
      };
     
      return (
        <section className="search-bar">
         <label>
         <input
            id="search"
            type="search"
            placeholder="Search Recipes, Meal types, Chefs, and Ingredients!"
            onChange={handleChange}
            value={search}
         />
        <button type="submit">Search</button>
        </label>
        <div>
             {data.map((recipes => {
               return (
                 <RecipeCard 
                    id={recipes.id}
                    chef_name={recipes.chef_name}
                    recipe_photo={recipes.recipe_photo}
                    recipe_name={recipes.recipe_name} 
                    ingredients={recipes.ingredients}
                    cook_time={recipes.cook_time}
                    prep_time={recipes.prep_time}
                    instructions={recipes.instructions}
                    servings={recipes.servings}
                    />
                )})
             )}
    </div>
   </section>
  );
}
