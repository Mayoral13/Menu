import { createContext, useState, useEffect } from "react";
const Context = createContext();
const ContextProvider = ({children}) =>{
const [Meals,SetMeals] = useState([])
const [Categorybool, SetCategorybool] = useState(false)
const [Category,SetCategory] = useState('')

    const FetchMeals = async() =>{
        try {
        const fetchdata = await fetch('/search.json')
        const data = await fetchdata.json()
        SetMeals(data)
            
        } catch (error) {
            console.log(error)
            
        }
        SetCategorybool(false);
    }

    useEffect(()=>{
        FetchMeals()
    },[])

    const HandleCategory = (e) =>{
        const response = e.target.innerHTML
        SetCategory(response);
        var meals = [];
        meals = Meals.filter((meals)=>meals.strCategory === response);
        SetMeals(meals);
        SetCategorybool(true);
    }



    return(
        <Context.Provider value={{Meals, HandleCategory, Categorybool, FetchMeals}}>
            {children}
        </Context.Provider>
    )

}

export {Context, ContextProvider}