/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

// Add variables that store DOM elements you will need to reference and/or manipulate
const listContainer = document.getElementsByClassName('.student-list');
const studentSelector = document.querySelectorAll('li');
let page;


// hideList function hides all students from the page
const hideList = (studentSelector) => {
	for (let i = 0; i < studentSelector.length; i++) {
		studentSelector[i].style.display = 'none';
	} 
};


// Create a function to hide all of the items in the list except for the ten you want to show
const showPage = (page, studentSelector) => {
	hideList(studentSelector);
	for (let i = 0; i < studentSelector.length; i++) {
		page = 1;
		if ( i >= 0 && i < 10) {
			studentSelector[i].style.display = 'block';
			}
	}
};
showPage(1, studentSelector);


// Create and append the pagination links - Creating a function that can do this is a good approach

// Add functionality to the pagination buttons so that they show and hide the correct items
// Tip: If you created a function above to show/hide list items, it could be helpful here






