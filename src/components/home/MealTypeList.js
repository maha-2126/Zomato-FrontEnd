import { useEffect, useState } from "react";
import {useNavigate, useParams} from 'react-router-dom';
import axios from "axios";

function MealTypeList() {
    // instance of use navigate
    let navigate = useNavigate();

    let [mealList,setMealList] = useState([]); // mealList => [] #1

    let getMenuListFromServer = async () => {
        let url = 'http://localhost:5003/api/get-meal-types-list';
        let {data} = await axios.get(url); // #4

        setMealList([...data.meal_types]);// #5 [...data.meal_types] => recreate a memory
    };

    console.log(mealList);
    
    useEffect(() => {
        getMenuListFromServer(); // #3
    }, []); // when we use empty array in useEffect it will run only once on page load
    // use effect run's when there is a side effect (When state will change) in component

return (
    <>
        {/* #2 */}
    <section className="quick-search">
    <h1 className="quick-search-title">Quick Searches</h1>
    <p className="quick-search-desc">Discover restaurants by type of meal</p>
    <div className="quick-search-items">
        {/* <!-- item start --> */}
        {
            mealList.map((meal, index) => {
                return (
                    <section key={meal._id} className="quick-search-item"
                    onClick={() => navigate("/quick-search/" + meal.meal_type)}
                    >
                    <div className="quick-search-item-image">
                        <img 
                        src={"/images/" + meal.image}
                        alt="" 
                        className="image-item" 
                        />
                    </div>
                    <div className="quick-search-item-desc">
                        <p>{meal.name}</p>
                        <span>{meal.content}</span>
                    </div>
                  </section>
                );
            })
      }
      {/* <!-- item end --> */}

    </div>

    </section>
    </> 
    );
}

export default MealTypeList;