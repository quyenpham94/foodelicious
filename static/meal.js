




$(document).ready(function(){
	const mealInfo = $('.meal-info')
	const addLikeBtn = $('.fav')
   

	mealInfo.on('click', '.meal', async function(event){
        
		const id = $(event.target).parent().data('id')
		console.log(id)
	
		if (event.target.classList.contains('fa-minus')) {
			await axios.delete(`/api/meal/${id}`)
			$(event.target).toggleClass('fa fa-minus')
			$(event.target).toggleClass('fa fa-plus')
			console.log('Delete Ingredient From Meal')
		} else {
			try {
				await axios.post(`/api/meal/${id}`, (data = { id: id }))
				$(event.target).toggleClass('fa fa-minus')
				$(event.target).toggleClass('fa fa-plus')
				console.log('Add Ingredient To Meal')
			} catch (err) {
				console.log('Login Required', err)
			}
		}
	})
    
})
