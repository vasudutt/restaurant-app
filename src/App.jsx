import RestaurantDetails from './RestaurantDetails';
import jsonData from './restaurantData.json';

const App = () => {
	return (
		<div>
			<RestaurantDetails restaurant={jsonData.restaurant} />
		</div>
	);
};

export default App;
