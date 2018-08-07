/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

// Add variables that store DOM elements you will need to reference and/or manipulate
const listContainer = document.getElementsByClassName('.student-list');
const studentSelector = document.querySelectorAll('li');



// hideList function hides all students from the page
const hideList = (studentSelector) => {
	for (let i = 0; i < studentSelector.length; i++) {
		studentSelector[i].style.display = 'none';
	} 
};


// Create a function to hide all of the items in the list except for the ten you want to show
const showPage = (studentSelector,page) => {
	hideList(studentSelector);
	for (let i = 0; i < studentSelector.length; i++) {
		if (studentSelector[i] > 0 && studentSelector[i] < 10) {
			studentSelector[i].style.display = 'block';
			}
	}
};
showPage();


// Create and append the pagination links - Creating a function that can do this is a good approach




// Add functionality to the pagination buttons so that they show and hide the correct items
// Tip: If you created a function above to show/hide list items, it could be helpful here






