import { useContext } from "react"
import { Context } from "../Context"
const Header = () =>{
  const uniqueCategories = [];
  const {Meals, HandleCategory, Categorybool, FetchMeals} = useContext(Context)
  if(Categorybool){
    return(
      <header className="container align-items-center justify-content-center d-flex flex-column">
       <div style={{marginBottom:'0.5rem'}}>
         <h1 style={{ position: 'relative',paddingBottom:'2rem',marginTop:'5rem' }}>
       Our Menu
       <span
         style={{
           position: 'absolute',
           left: '50%',
           transform: 'translateX(-50%)',
           bottom: '10px',
           width: '70%',
           borderBottom: '5px solid orange',
         }}
       ></span>
     </h1>
     </div>



     <div>
     
       <ul style={{listStyle:'none'}}>
        
        <button className="btn btn-warning m-2" onClick={FetchMeals} style={{color:'white'}}>View All</button>

       </ul>
     </div>
      </header>
     
     
     
   )
  }else{
    return(
       <header className="container align-items-center justify-content-center d-flex flex-column">
        <div style={{marginBottom:'0.5rem'}}>
          <h1 style={{ position: 'relative',paddingBottom:'2rem',marginTop:'5rem' }}>
        Our Menu
        <span
          style={{
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-50%)',
            bottom: '10px',
            width: '70%',
            borderBottom: '5px solid orange',
          }}
        ></span>
      </h1>
      </div>



      <div>
      
      <ul style={{ listStyle: 'none' }}>
    {Meals.map((meal) => {
      if (!uniqueCategories.includes(meal.strCategory)) {
        uniqueCategories.push(meal.strCategory);
        return (
          <span key={meal.idMeal}>
            <button className="btn btn-warning m-2" onClick={HandleCategory} style={{ color: 'white' }}>
              {meal.strCategory}
            </button>
          </span>
        );
      }
      return null;
    })}
  </ul>
      </div>
       </header>
      
      
      
    )
          }
}
export default Header