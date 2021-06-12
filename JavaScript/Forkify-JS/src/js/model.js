import { async } from "regenerator-runtime";
import { API_URL } from "./config";
import { getJSON } from "./helpers";
export const state = {
	recipe: {},
	search: {
		query: "",
		results: [],
		resultsPerPage: 10,
	},
};

export const loadRecipe = async function (id) {
	try {
		const { recipe } = await getJSON(`${API_URL}${id}`);

		recipe = {
			id: recipe.id,
			title: recipe.title,
			publisher: recipe.publisher,
			sourceUrl: recipe.source_url,
			image: recipe.image_url,
			servings: recipe.servings,
			cookingTime: recipe.cooking_time,
			ingredients: recipe.ingredients,
		};
	} catch (error) {
		throw error;
	}
};

export const loadSearchResults = async function (query) {
	try {
		state.search.query = query;
		const { data } = await getJSON(`${API_URL}?search=${query}`);

		state.search.results = data.recipes.map((recipe) => {
			return {
				id: recipe.id,
				title: recipe.title,
				publisher: recipe.publisher,
				image: recipe.image_url,
			};
		});
	} catch (error) {
		throw error;
	}
};

export const getSearchResultsPage = function (page) {
	const start = (page - 1) * state.search.resultsPerPage; //0;
	const end = page * state.search.resultsPerPage; // 9;

	return state.search.results.slice(start, end);
};
