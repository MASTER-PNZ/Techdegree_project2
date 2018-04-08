
//Selecting all individual student's information in the li class student-item
//Getting the number of student-item elements
//Setting the desired number of students to show per page
//Setting initial page number to 0
const eachStudent = $('.student-item');
const studentNum = eachStudent.length;
const studentsPerPage = 10;
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


function appendPageLinks(/* take a student list as an argument */) {
     // determine how many pages for this student list
     const numberOfPages = Math.ceil(studentNum / studentsPerPage);
     // create a page link section
     $('.page').append('<div class="pagination"><ul></ul></div>');
     // “for” every page
     for (currentPageNumber; currentPageNumber < numberOfPages; currentPageNumber += 1) {
         // add a page link to the page link section
         if (currentPageNumber == 0) {
           $('.pagination')
           .append(
             '<li><a class="active" href="#">' +
             (currentPageNumber + 1) + '</a></li>');
         } else {
           $('.pagination')
           .append('<li><a href="#">' +
           (currentPageNumber + 1) + '</a></li>');
         }
     };
      showPage(1);
     // remove the old page link section from the site

     // append our new page link section to the site

     // define what happens when you click a link
     $('.pagination li a').on('click', function(){
         // Use the showPage function to display the page for the link clicked

         // mark that link as “active”
     });
 }
