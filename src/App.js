import Header from './components/Header';
import RecipeCard from './components/RecipeCard';
import recipes from './components/Recipes';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import FilterComponent from './components/Filter';
import Sort from './components/Sort'; // Import the Sort component






import './App.css';

function App() {

  // filter functionality and sort
  const [filteredRecipes, setFilteredRecipes] = useState(recipes.slice(0, 12));
  const [sortOrder, setSortOrder] = useState('default');
  const [selectedCuisines, setSelectedCuisines] = useState([]);
  const [selectedDietaryPreferences, setSelectedDietaryPreferences] = useState([]);


  const handleSortChange = (newSortOrder) => {
    setSortOrder(newSortOrder);
  };


  useEffect(() => {
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
        <h1 className="heading-fonts"> Available Recipes </h1>


        {/* row for filter and sorting */}
        <div className="container">
          <div className="row mt-4">
            <div className="col-md-4">
              <FilterComponent onFilterChange={handleFilterChange} className="w-100"/>
            </div>

            <div className="col-md-4 d-flex align-items-center justify-content-center">
              <Sort onSortChange={setSortOrder} />
            </div>
          </div>


            <div className="row mt-4">
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

  );
}

export default App;
