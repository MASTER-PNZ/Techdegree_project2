
//Selecting all individual student's information in the li class student-item.
//Getting the number of student-item elements.
//Setting the desired number of students to show per page.
//Setting initial page number to 0.
const eachStudent = $('.student-item');
const studentNum = eachStudent.length;
const studentsPerPage = 10;
var currentPageNumber = 0;

// A function to show 10 students on the page
function showPage(currentPageNumber) {
    eachStudent.hide();
    eachStudent.each(function(index){
      if (index >= studentsPerPage * (currentPageNumber - 1)
      && index < studentsPerPage * currentPageNumber) {
        $(this).show();
      };
    });
}

// A function to dynamically add page links to the index.html file

function appendPageLinks() {
     //Calculates number of pages needed given number of students in list.
     var numberOfPages = Math.ceil(studentNum / studentsPerPage);
     $('.page').append('<div class="pagination"><ul></ul></div>');
     for (currentPageNumber; currentPageNumber < numberOfPages; currentPageNumber += 1) {
         if (currentPageNumber == 0) {
           $('.pagination').append(
             '<li><a class="active" href="#">' +
             (currentPageNumber + 1) + '</a></li>');
         } else {
           $('.pagination')
           .append('<li><a href="#">' +
           (currentPageNumber + 1) + '</a></li>');
         }
     };
      // Show the first page of students with the first page link active.
      showPage(1);
      // A click handler that targets the page links and adds or removes the
      // 'active' class depending on the current page.
      // Calls the showPage function and passes the currentPageNumber as an argument.
     $('.pagination li a').on('click', function(){
       $('.pagination li a').removeClass('active');
           $(this).addClass('active');
           showPage(parseInt($(this).html()));
     });
 }
appendPageLinks();
