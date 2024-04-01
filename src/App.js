import Header from './components/Header';
import RecipeCard from './components/RecipeCard';
import recipes from './components/Recipes';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import FilterComponent from './components/Filter';
import Sort from './components/Sort'; // Import the Sort component






import './App.css';

function App() {

  // filter functionality
  const [filteredRecipes, setFilteredRecipes] = useState(recipes.slice(0, 12));

  const filterRecipes = (selectedCuisines, selectedDietaryPreferences) => {
    let newFilteredRecipes = recipes;

    if (selectedCuisines.length) {
      newFilteredRecipes = newFilteredRecipes.filter(recipe => 
        selectedCuisines.includes(recipe.cuisine));
    }

    if (selectedDietaryPreferences.length) {
      newFilteredRecipes = newFilteredRecipes.filter(recipe =>
        selectedDietaryPreferences.some(diet => recipe.dietaryPreference.includes(diet))
      );
    }

    setFilteredRecipes(newFilteredRecipes.slice(0, 12)); // Keep the limit to 12 recipes
  }

  // Mock function for handling recipe card actions
  // const mockHandleActionClick = (recipeId) => {
  //   console.log(`Action clicked for recipe with id: ${recipeId}`);
  // };


  return (
    <div className="app">
      <Header />

      <div className="main-content">
        <h1 className="heading-fonts"> Available Recipes </h1>
        
        
        {/* row for filter and sorting */}
        <div className="container">
          <div className="row">
            <div className="col-md-4"> 
              <FilterComponent onFilterChange={filterRecipes} />
            </div>
          <div className="row">
            {filteredRecipes.map((recipe) => (
                <div className="col-md-4" key={recipe.id}>
                  <RecipeCard
                    recipe={recipe}
                    onActionClick={() => console.log(`Action clicked for recipe with id: ${recipe.id}`)}
                    isInMyRecipes={false}
                  />
                </div>
              ))}
          </div>
        
          </div>
        </div>
        
      
      </div>
    </div>

  );
}

export default App;
