// Your solution goes here
// Hints:
// 1. Assign a id to the tags you want to select
// 2. Use appropriate methods and properties to complete the specified task.
// Example: 
// (style) property to change style
// (classList) property to modify class
// (getAttribute) and (setAttribute) to modify attributes

// Change the bg color
let cngcolor = document.getElementById("iits-bg");
cngcolor.classList.remove("bg-danger");
cngcolor.style.backgroundColor = "orange";


// Change the img src attribute
document.getElementById("iits-img").src = "https://media.licdn.com/dms/image/C5603AQG3MPTL54ERHA/profile-displayphoto-shrink_800_800/0/1660228905142?e=2147483647&v=beta&t=UtItg9ylZSbSdk-RC_acc29KMK-a0Rx4e88Q5seassI";


// Change the copyright message
let cngContentVar = document.getElementById("iits-cr-msg");
cngContentVar.textContent = "Pranto Kumar Saha Dept. of BCSE";


//Change the Button bg color
let cngbcolor = document.getElementById("iits-btn");
cngbcolor.classList.remove("bg-danger");
cngbcolor.style.backgroundColor = "orange";
cngbcolor.style.borderColor = "orange";

// Change Area ~(Your name)~ 
document.getElementById("iits-name").textContent = "Pranto Kumar Saha";
document.getElementById("iits-name").classList.remove("text-danger");
document.getElementById("iits-name").style.color = "orange";

// Change Area ~(Your Profession)~ 
document.getElementById("iits-prof").textContent = "Student";
document.getElementById("iits-prof").classList.remove("text-danger");
document.getElementById("iits-prof").style.color = "orange";

// Change Area ~(Your Current Level of Education)~
document.getElementById("iits-edu").textContent = "Bs.c in engineering";
document.getElementById("iits-edu").classList.remove("text-danger");
document.getElementById("iits-edu").style.color = "orange";

// Change Area ~(Your Field of Study)~ 
document.getElementById("iits-study").textContent = "Computer Science & Engineering";
document.getElementById("iits-study").classList.remove("text-danger");
document.getElementById("iits-study").style.color = "orange";

//Change Area ~(Your School Name)~
document.getElementById("iits-school").textContent = "IUBAT";
document.getElementById("iits-school").classList.remove("text-danger");
document.getElementById("iits-school").style.color = "orange";

//Change Area  ~(Your Passion and Interest)~
document.getElementById("iits-passion").textContent = "Web Design & Development";
document.getElementById("iits-passion").classList.remove("text-danger");
document.getElementById("iits-passion").style.color = "orange";


//Change Area  ~(Number of Years)~
document.getElementById("iits-numYears").textContent = "3 years";
document.getElementById("iits-numYears").classList.remove("text-danger");
document.getElementById("iits-numYears").style.color = "orange";


//Change Area  ~(Your Hobbies or Interests)~
document.getElementById("iits-hobby").textContent = "Learn New Skills";
document.getElementById("iits-hobby").classList.remove("text-danger");
document.getElementById("iits-hobby").style.color = "orange";


//Change Area  ~(Your Personal Traits or Characteristics)~
document.getElementById("iits-crc").textContent = "Flexible";
document.getElementById("iits-crc").classList.remove("text-danger");
document.getElementById("iits-crc").style.color = "orange";

//Change Area  ~(Your Strengths or Abilities)~
document.getElementById("iits-ability").textContent = "Dcipline";
document.getElementById("iits-ability").classList.remove("text-danger");
document.getElementById("iits-ability").style.color = "orange";


//Change Area  ~(Your Goals or Vision)~
document.getElementById("iits-goal").textContent = "Wev Developer";
document.getElementById("iits-goal").classList.remove("text-danger");
document.getElementById("iits-goal").style.color = "orange";


//Change the facebook link
let newURL = "https://www.facebook.com/sreeprantokumar.saha/";
document.getElementById("iits-fb-link").href = newURL;


//Change the gmail link
let newURL2 = "mailto:pranto113015@gmail.com";
document.getElementById("iits-email").href = newURL2;


//Change the github link
let newURL3 = "https://github.com/pranto113015";
document.getElementById("iits-github-link").href = newURL3;