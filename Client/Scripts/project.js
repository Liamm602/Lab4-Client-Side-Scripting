/* information that will be displayed on the page */
document.getElementById("Paragraph1").innerHTML = "One favorite project would have to be the 2nd Cobol assignment from MAFDD4201, it was fun setting all the variables and adding all the calculations. It was also fun getting the input file to section them into its own varibles for formatting.";


document.getElementById("Paragraph2").innerHTML = "A good assignment was from NETD3202 assignment 4, where the whole assignment was using visual studio to automatically form a ASP.NET project that uses the MVC model";


document.getElementById("Paragraph3").innerHTML = "Lastly great project was the final group project from SYSA 3204, it was a nice interactive project of doing a test case then keeping track of all the progress and bugs with a excel sheet";

// get id for a tag in list 
var navbarProject = document.getElementById("projectsNav");

//make a variable with the value projects
newtitle = "Projects";
//change the a tag value to "projects"
navbarProject.textContent = newtitle;
navbarProject.setAttribute("class", "nav-link active");



//get the id HR from the list and then create a a tag, after that set the attribute of the a tag to lav link. Then
//add the text "Human Resources to the a tag then add the a tag to the li"
var HRnav = document.getElementById("HR");

var link= document.createElement("a");

link.setAttribute("class", "nav-link");
link.textContent = "Human Resources";

HRnav.appendChild(link);