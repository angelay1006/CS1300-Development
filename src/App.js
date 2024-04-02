import Header from './components/Header';
import RecipeCard from './components/RecipeCard';
import recipes from './components/Recipes';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import FilterComponent from './components/Filter';
import Sort from './components/Sort'; 



import './App.css';

function App() {

  // filter functionality and sort
  const [filteredRecipes, setFilteredRecipes] = useState(recipes.slice(0, 12));
  const [sortOrder, setSortOrder] = useState('default');
  const [selectedCuisines, setSelectedCuisines] = useState([]);
  const [selectedDietaryPreferences, setSelectedDietaryPreferences] = useState([]);

  // reset
  const resetFiltersAndSorting = () => {
    setSelectedCuisines([]); 
    setSelectedDietaryPreferences([]); 
    setSortOrder('default');
  };

  // recipe book
  const [myRecipes, setMyRecipes] = useState([]);
  const toggleRecipeInMyBook = (recipe) => {
    setMyRecipes(currentRecipes => {
      const isRecipePresent = currentRecipes.some(r => r.id === recipe.id);
      if (isRecipePresent) {
        // remove recipe if already in myrecipebook
        return currentRecipes.filter(r => r.id !== recipe.id);
      } else {
        // add recipe if not in myrecipebook
        return [...currentRecipes, recipe];
      }
    })
  };


  useEffect(() => {
    // filtering logic
    let newFilteredRecipes = [...recipes];

    if (selectedCuisines.length) {
      newFilteredRecipes = newFilteredRecipes.filter(recipe =>
        selectedCuisines.includes(recipe.cuisine));
    }

    if (selectedDietaryPreferences.length) {
      newFilteredRecipes = newFilteredRecipes.filter(recipe =>
        selectedDietaryPreferences.some(diet => recipe.dietaryPreference.includes(diet))
      );
    }

    // Sorting logic
    if (sortOrder === 'asc') {
      newFilteredRecipes.sort((a, b) => a.prepTime - b.prepTime);
    } else if (sortOrder === 'desc') {
      newFilteredRecipes.sort((a, b) => b.prepTime - a.prepTime);
    } 

    setFilteredRecipes(newFilteredRecipes.slice(0, 12));

  }, [sortOrder, selectedCuisines, selectedDietaryPreferences]);



  const handleFilterChange = (cuisines, dietaryPreferences) => {
    setSelectedCuisines(cuisines);
    setSelectedDietaryPreferences(dietaryPreferences);
  }



  return (
    <div className="app">
      <Header />

      <div className="main-content">
        
        {/* row for filter and sorting */}
        <div className="container">
          <div className="row mt-4">
              <h1 className="heading-fonts"> Available Recipes </h1>
          </div>
          <div className="row mt-4">
            <div className="col-md-4">
              <FilterComponent 
                onFilterChange={handleFilterChange} 
                selectedCuisines={selectedCuisines}
                selectedDietaryPreferences={selectedDietaryPreferences}
                className="w-100"/>
            </div>

            <div className="col-md-4 d-flex align-items-center justify-content-center">
              <Sort onSortChange={setSortOrder} />
            </div>

            <div className="reset-box col-md-4 d-flex align-items-center justify-content-center">
              <button className="btn btn-secondary" onClick={resetFiltersAndSorting}>Reset Filters and Sorting</button>
            </div>
          </div>

        {/* row for cards */}
          <div className="row mt-4">
            {filteredRecipes.map((recipe) => (
              <div className="col-md-4" key={recipe.id}>
                <RecipeCard
                  recipe={recipe}
                  onToggleMyRecipe={() => toggleRecipeInMyBook(recipe)}
                  isInMyRecipes={myRecipes.some(r => r.id === recipe.id)}
                  
                />
              </div>
            ))}
          </div>

          <div className="row mt-10">
            <h1 className="heading-fonts"> My Recipe Book </h1>
          </div>

          <div className="my-recipe-book">
            <div className="recipe-count-box">
              Total Recipes: <span className="recipe-count">{myRecipes.length}</span>
            </div>

            
            {/* if recipes are present */}
            {myRecipes.length > 0 ? (
              <div className="recipe-list-box">
                <ul>
                  {myRecipes.map(recipe => (
                    <li key={recipe.id} className="recipe-item">
                      <span className="recipe-title">{recipe.title}</span>
                      <span className="recipe-cuisine"> {recipe.cuisine}</span>
                      
                    {recipe.dietaryPreference.map((preference, index) => (
                      <span key={index} className="recipe-dietary"> {preference}</span>
                  ))}
                    <span className="recipe-preptime"> {recipe.prepTime} mins </span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <p className="empty-message"> You have not added any recipes yet!</p>
            )}

          </div>

          </div>
        </div>
      </div>

  );
}

export default App;
