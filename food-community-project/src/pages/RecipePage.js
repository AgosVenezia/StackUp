import Header from '../components/Header';
import Footer from "../components/Footer";
import { my_recipe } from '../recipe';
 
const RecipePage = () => {
  let recipe_id = window.location.pathname.split('/')[2];
  return (
    <div>
      <Header />
      <div className="container">
        <div style={{marginTop:"100px"}} className="inner-container">
          <h1>{my_recipe[recipe_id].name}</h1>
          <p>Preparation Time: {my_recipe[recipe_id].preparation_time} | Servings: {my_recipe[recipe_id].servings} pax</p>
          <img src={my_recipe[recipe_id].image} alt="" className="recipe-image"/>
          <h3>Ingredients:</h3>
          <ul>
            {my_recipe[recipe_id].ingredients.map((ingredient) => {
              return (
                <li>{ingredient}</li>
              );
            })}
          </ul>
 
          <h3>Instructions:</h3>
          <ol>
            {my_recipe[recipe_id].instructions.map((instruction) => {
              return (
                <li>{instruction}</li>
              );
            })}
          </ol>
        </div>
      </div>
      <Footer />
    </div>
  );
}
 
export default RecipePage;