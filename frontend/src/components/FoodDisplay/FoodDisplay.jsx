import React, { useContext } from 'react'
import './FoodDisplay.css'
import FoodItem from '../FoodItem/FoodItem'
import { StoreContext } from '../../Context/StoreContext'
import PropTypes from 'prop-types'; // Import PropTypes

const FoodDisplay = ({category}) => {
  const { food_list } = useContext(StoreContext);

  console.log('Food List:', food_list); // Debugging
  console.log('Selected Category:', category); // Debugging

  return (
    <div className='food-display' id='food-display'>
      <h2>Top dishes near you</h2>
      <div className='food-display-list'>
        {food_list.map((item) => {
          if (category === "All" || category === item.category) {
            return <FoodItem key={item._id} image={item.image} name={item.name} desc={item.description} price={item.price} id={item._id} />
          }
          return null;
        })}
      </div>
    </div>
  )
}

// Add prop-types validation
FoodDisplay.propTypes = {
  category: PropTypes.string.isRequired
};

export default FoodDisplay
