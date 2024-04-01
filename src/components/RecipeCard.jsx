import React from 'react';
import './RecipeCard.css';


const RecipeCard = ({recipe, onToggleMyRecipe, isInMyRecipes}) => {
    return (
        <div className="recipe-card">
            <img src={recipe.imageUrl} alt="foodpic" className="recipe-image" />
            <h3 className="recipe-title"> {recipe.title} </h3>

            {/* there can be multiple dietary preferences */}
            <div className="tags-container">
                {recipe.dietaryPreference.map((preference,index) => (
                    <span key={index} className="tag-dietary">
                        {preference}
                    </span>
                ))}
            </div>
            <div className="tags-container"> 
                <span className="tag-cuisine">{recipe.cuisine}</span>
            </div>
            
            <div className="tags-container">
                <span className="tag-preptime">{recipe.prepTime} mins</span>
            </div>
            

            <button type="button" className={`btn ${isInMyRecipes ? 'btn-danger' : 'btn-success'}`} onClick={onToggleMyRecipe}>
                {isInMyRecipes ? 'Remove from My Recipes' : 'Add to My Recipes'}
            </button>
        </div>
    )
}

export default RecipeCard;