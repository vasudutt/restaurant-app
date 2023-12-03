const RestaurantDetails = ({ restaurant }) => {
	const renderAwards = () => {
		return restaurant.awards.map((award, index) => (
			<div key={index}>
				<p>{`${award.year}: ${award.organization} - ${award.award}`}</p>
			</div>
		));
	};

	const renderSustainabilityInitiatives = () => {
		return restaurant.sustainability.initiatives.map(
			(initiative, index) => (
				<div key={index}>
					<p>
						{`${initiative.name}: ${initiative.description}`}
					</p>
				</div>
			)
		);
	};

	const renderMenuCategories = () => {
		return restaurant.menu.categories.map((category, index) => (
			<div key={index}>
				<h2 className="text-2xl font-bold my-2">
					{category.name}
				</h2>
				{renderMenuItems(category.items)}
			</div>
		));
	};

	const renderMenuItems = (items) => {
		return items.map((item, index) => (
			<div key={index} className="my-4">
				<h3 className="text-xl font-semibold">{item.name}</h3>
				<p>{item.description}</p>
				<p>{`Price: $${item.price.toFixed(2)}`}</p>
				<p>{`Ingredients: ${item.ingredients.join(', ')}`}</p>
				<p>{`Nutritional Info: Calories - ${item.nutritional_info.calories}, Protein - ${item.nutritional_info.protein}, Carbs - ${item.nutritional_info.carbohydrates}, Fat - ${item.nutritional_info.fat}`}</p>
			</div>
		));
	};

	const renderSeasonalMenu = () => {
		return (
			<div>
				<h2 className="text-2xl font-bold my-2">
					{restaurant.menu.seasonal_menu.name}
				</h2>
				{renderMenuItems(restaurant.menu.seasonal_menu.items)}
			</div>
		);
	};

	const renderReviews = () => {
		return restaurant.reviews.map((review, index) => (
			<div key={index} className="my-4">
				<h3 className="text-xl font-semibold">
					{review.customer_name}
				</h3>
				<p>{`Rating: ${review.rating}/5`}</p>
				<p>{`Comment: ${review.comment}`}</p>
			</div>
		));
	};

	return (
		<div className="max-w-2xl mx-auto p-4">
			<h1 className="text-4xl font-bold my-4">
				{restaurant.name}
			</h1>
			<p>{`Location: ${restaurant.location.address}`}</p>
			<p>{`Chef: ${restaurant.chef.name}`}</p>
			<p>{`Signature Dish: ${restaurant.chef.signature_dish}`}</p>
			<div className="my-4">
				<h2 className="text-2xl font-bold">Awards</h2>
				{renderAwards()}
			</div>
			<p>{`Ambiance: ${restaurant.ambiance.description}`}</p>
			<div className="my-4">
				<h2 className="text-2xl font-bold">
					Sustainability Initiatives
				</h2>
				{renderSustainabilityInitiatives()}
			</div>
			<div className="my-4">
				<h2 className="text-2xl font-bold">
					Upcoming Events
				</h2>
				{restaurant.events.upcoming_events.map(
					(event, index) => (
						<div key={index}>
							<p>{`${event.name} - Date: ${event.date}, Description: ${event.description}`}</p>
						</div>
					)
				)}
			</div>
			<div className="my-4">
				<h2 className="text-2xl font-bold">
					Online Presence
				</h2>
				<p>{`Website: ${restaurant.online_presence.website}`}</p>
				<div>
					<h3>Social Media:</h3>
					<p>{`Facebook: ${restaurant.online_presence.social_media.facebook}`}</p>
					<p>{`Instagram: ${restaurant.online_presence.social_media.instagram}`}</p>
					<p>{`Twitter: ${restaurant.online_presence.social_media.twitter}`}</p>
				</div>
			</div>
			<div className="my-4">
				<h2 className="text-2xl font-bold">Menu</h2>
				{renderMenuCategories()}
			</div>
			{renderSeasonalMenu()}
			<div className="my-4">
				<h2 className="text-2xl font-bold">Reviews</h2>
				{renderReviews()}
			</div>
		</div>
	);
};

export default RestaurantDetails;
