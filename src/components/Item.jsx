import React, { useContext, useState } from 'react';
import { Context } from '../Context';
import maleImage from '/images/male.jfif';

const Item = () => {
  const { Meals } = useContext(Context);
  const [expandedCardId, setExpandedCardId] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 5; // Number of items to display per page

  // Calculate total number of pages
  const totalPages = Math.ceil(Meals.length / perPage);

  // Calculate index range for current page
  const startIndex = (currentPage - 1) * perPage;
  const endIndex = startIndex + perPage;

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const toggleExpand = (mealId) => {
    setExpandedCardId((prevId) => (prevId === mealId ? '' : mealId));
  };

  const truncateText = (text, limit) => {
    if (text.length <= limit) {
      return text;
    }
    return text.slice(0, limit) + '...';
  };

  return (
    <main className="container justify-content-center align-items-center col-4 mt-4">
      {Meals.slice(startIndex, endIndex).map((meal) => (
        <div key={meal.idMeal} className="card mt-5" onClick={() => toggleExpand(meal.idMeal)}>
          <div>
            <img className="card-img-top" src={maleImage} style={{ height: '260px' }} alt="Food" />
            <div className="card-body">
              <div className="mb-3" style={{ listStyle: 'none', justifyContent: 'space-between', display: 'flex', alignItems: 'center' }}>
                <li>
                  <h5 className="card-title">{meal.strMeal}</h5>
                </li>
                <li style={{ border: '2px solid orange', background: 'orange', borderRadius: '7%', paddingLeft: '1rem', paddingRight: '1rem' }}>
                  <p style={{ color: 'white' }} className="card-text">
                    {meal.strCategory}
                  </p>
                </li>
              </div>
              <p style={{ color: 'grey' }} className="card-text">
                {expandedCardId === meal.idMeal ? meal.strInstructions : truncateText(meal.strInstructions, 250)}
              </p>
            </div>
          </div>
        </div>
      ))}

      {/* Pagination */}
      <ul className="pagination mt-2 justify-content-center">
        {Array.from({ length: totalPages }, (_, index) => (
          <li key={index + 1} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
            <button className="page-link" onClick={() => handlePageChange(index + 1)}>
              {index + 1}
            </button>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Item;
