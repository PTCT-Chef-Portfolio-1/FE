import React, { useState, useEffect } from "react";
//import axios from "axios";
//import Cards 

export default function HomeSearch() {
    // const [search, setSearch] = useState("");
    // const [filtered, setFiltered] = useState([]);
    
    // useEffect(() => {
    //   axios
    //     .get(`https://backend-chef.herokuapp.com/api/recipes/`)
    //     .then(res => {
    //       console.log(res.data.results)
    //       const filtered = res.data.results.filter(filter => {
    //           console.log(input === filter.recipe,filter.meal, filter.chef, filter.ingredient)
    //           return filter.recipe.toLowerCase().includes(input.toLowerCase()) || filter.meal.toLowerCase().includes(input.toLowerCase()) || filter.chef.toLowerCase().includes(input.toLowerCase()) || filter.ingredient.toLowerCase().includes(input.toLowerCase())
    //       });
    //       setFiltered(filtered);
    //   })  
    //     .catch(err => {
    //       console.log("The data was not returned", err);
    //     })
    //   }, [search]);

      const handleChange = e => {
        e.preventDefault();
        setSearch(e.target.value)
            
      };
     
      return (
        <section className="search-bar">
         <label>
         <input
            type="text"
            placeholder="Search Recipes, Meal types, Chefs, and Ingredients!"
            onChange={handleChange}
            value={search}
         />
        <button type="submit">Search</button>
        </label>
        <div>
        {/* {filtered.map((filter, index) => {
        return (
            <Card filter={filter} key={filter.created}/> */}
        )
      })}
    </div>
   </section>
  );
}
