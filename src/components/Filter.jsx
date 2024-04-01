import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import './Filter.css';

const FilterComponent = ({onFilterChange}) => {
    const [selectedCuisines, setSelectedCuisines] = useState([]);
    const [selectedDietaryPreferences, setSelectedDietaryPreferences] = useState([])

    const handleCuisineChange = (e) => {
        const newCuisines = e.target.checked
        // if checkbox is checked
        ? [...selectedCuisines, e.target.value]
        // if checkbox is unchecked
        : selectedCuisines.filter(cuisine => cuisine !== e.target.value);

        setSelectedCuisines(newCuisines);
        onFilterChange(newCuisines, selectedDietaryPreferences)
    }

    const handleDietaryChange = (e) => {
        const newDietaryPreferences = e.target.checked 
        ? [...selectedDietaryPreferences, e.target.value]
        : selectedDietaryPreferences.filter(diet => diet !== e.target.value);
        setSelectedDietaryPreferences(newDietaryPreferences);
        onFilterChange(selectedCuisines, newDietaryPreferences);
    }

    return (
        <Form className="filter-box">
            <h2> Filter By </h2>
            <div className="mb-3">
            <Form.Label>Dietary Preferences</Form.Label>
                <Form.Check
                    inline
                    label="Vegan"
                    name="dietary-preferences"
                    type="checkbox"
                    id="dietary-preference-vegan"
                    onChange={handleDietaryChange}
                    value="Vegan"
                />
                <Form.Check
                    inline
                    label="Vegetarian"
                    name="dietary-preferences"
                    type="checkbox"
                    id="dietary-preference-vegetarian"
                    onChange={handleDietaryChange}
                    value="Vegetarian"
                />
                <Form.Check
                    inline
                    label="Gluten-Free"
                    name="dietary-preferences"
                    type="checkbox"
                    id="dietary-preference-gluten-free"
                    onChange={handleDietaryChange}
                    value="Gluten-Free"
                />
            </div>


            <div className="mb-3">
            <Form.Label>Cuisines</Form.Label>
                <Form.Check
                    inline
                    label="Peruvian"
                    name="cuisine"
                    type="checkbox"
                    id="cuisine-peruvian"
                    onChange={handleCuisineChange}
                    value="Peruvian"
                />
                <Form.Check
                    inline
                    label="Italian"
                    name="cuisine"
                    type="checkbox"
                    id="cuisine-italian"
                    onChange={handleCuisineChange}
                    value="Italian"
                />
                <Form.Check
                    inline
                    label="Chinese"
                    name="cuisine"
                    type="checkbox"
                    id="cuisine-chinese"
                    onChange={handleCuisineChange}
                    value="Chinese"
                />
            </div>
        </Form>
    )
};

export default FilterComponent;