document.getElementById('search').addEventListener('click', function(){
    document.getElementById('search').value = '';

    const searchFood = document.getElementById('searchFood').value;
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchFood}`)
    
    
    .then(res => res.json())
    .then(data => displayFoods(data));
})

const displayFoods = foods => {
    // const foodsDiv = document.getElementById('foods');
    // for (let i = 0; i < foods.length; i++) {
    //     const food = food[i];
     console.log(foods);
        for (let i = 0; i < foods.length; i++) {
            const food = foods[i];
             console.log(food.meals[0].strMeal);
        }
    }
    // foods.forEach(food => {
    //     const foodDiv = document.createElement('div');
    //     foodDiv.className = 'food';

    //     const foodInfo = `
    //         <h3>${food.meals.strMeal}</h3>
    //     `;
    //     foodDiv.innerHTML = foodInfo;
    //     foodsDiv.appendChild(foodDiv);
    // });


