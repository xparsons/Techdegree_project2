/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

// variables to manipulate DOM elements
const listContainer = document.getElementsByClassName('.student-list');
const studentSelector = document.querySelectorAll('li');
const pageContainer = document.getElementsByClassName('.page')


// function to hide all students from page
const hideList = (studentSelector) => {
	for (let i = 0; i < studentSelector.length; i++) {
		studentSelector[i].style.display = 'none';
	} 
};


// function that shows only the first ten students
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

const createLinkDiv = () => {
	let ul = document.querySelector('ul');
	let li = document.createElement('a', 'li');
	li.className = 'pagination';
	li.innerHTML = 1;
	ul.appendChild(li);
};


const appendPageLinks = (studentSelector) => {
	let pages = Math.ceil(studentSelector.length / 10);
	for (var i = 0; i <= pages; i++) {
		
	}
};

appendPageLinks(1,studentSelector);


// Add functionality to the pagination buttons so that they show and hide the correct items
// Tip: If you created a function above to show/hide list items, it could be helpful here



