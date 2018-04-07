
//Selecting all individual student's information in the li class student-item
//Getting the number of student-item elements
//Setting the desired number of students to show per page
//Setting the desired number of pages based on number of student elements
//Setting initial page number to 0
const eachStudent = $('.student-item');
const studentNum = eachStudent.length;
const studentsPerPage = 10;
const numberOfPages = Math.ceil(studentNum / studentsPerPage);
const currentPageNumber = 0;

// A function to show 10 students on the page, hides all student-items,
// and shows only the first 10.
function showPage(currentPageNumber) {
    // first hide all students on the page
    eachStudent.hide();
    // Then loop through all students in our student list argument
    eachStudent.each(function(index){
      // if student should be on this page number
      if (index >= studentsPerPage * (currentPageNumber - 1)
         && index < studentsPerPage * currentPageNumber) {
        // show the student
        $(this).show();
      };
    });
}
showPage(1);

function appendPageLinks(/* take a student list as an argument */eachStudent) {
     // determine how many pages for this student list
     numberOfPages;
     // create a page link section
     // “for” every page
         // add a page link to the page link section
     // remove the old page link section from the site
     // append our new page link section to the site
     // define what happens when you click a link
         // Use the showPage function to display the page for the link clicked
         // mark that link as “active”
 }
