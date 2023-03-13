const categoryBtns = document.querySelectorAll('.category');
const searchInput = document.querySelector('#search');
const productCards = document.querySelectorAll('.catalog-item');

// Filter Products by Category
categoryBtns.forEach(btn => {
	btn.addEventListener('click', () => {
		const category = btn.dataset.filter;
		productCards.forEach(card => {
			if (category === 'all') {
				card.style.display = 'block';
			} else {
				card.classList.contains(category) ? card.style.display = 'block' : card.style.display = 'none';
			}
		});
	});
});

// Search Products by Title and Description
searchInput.addEventListener('keyup', () => {
	const searchTerm = searchInput.value.toLowerCase();
	productCards.forEach(card => {
		const title = card.querySelector('.catalog-item__subtitle').textContent.toLowerCase();
		const description = card.querySelector('.catalog-item__descr').textContent.toLowerCase();
		if (title.includes(searchTerm) || description.includes(searchTerm)) {
			card.style.display = 'block';
		} else {
			card.style.display = 'none';
		}
	});
});

// Get the filter checkboxes
const filterCheckboxes = document.querySelectorAll('.category');

// Listen for changes in the filter checkboxes
filterCheckboxes.forEach(function (checkbox) {
	checkbox.addEventListener('change', function () {
		// Get the selected filters
		const selectedFilters = getSelectedFilters();

		// Hide/show products based on selected filters
		filterProducts(selectedFilters);
	});
});

// Get the currently selected filters
function getSelectedFilters() {
	const selectedFilters = [];

	filterCheckboxes.forEach(function (checkbox) {
		if (checkbox.checked) {
			selectedFilters.push(checkbox.value);
		}
	});

	return selectedFilters;
}

// Hide/show products based on selected filters
function filterProducts(selectedFilters) {
	const products = document.querySelectorAll('.catalog-item');

	products.forEach(function (product) {
		const filters = product.getAttribute('data-filter').split(' ');

		if (selectedFilters.length === 0) {
			// Show all products if no filters are selected
			product.style.display = 'block';
		} else {
			// Show the product only if all selected filters match
			let match = true;

			selectedFilters.forEach(function (filter) {
				const filterCount = filters.filter(function (f) {
					return f === filter;
				}).length;

				if (filterCount === 0) {
					match = false;
				}
			});

			if (match) {
				product.style.display = 'block';
			} else {
				product.style.display = 'none';
			}
		}
	});
}


$(document).ready(function () {
	$('.button_filter').click(function () {
		$('#filters').toggle();
	});
});

