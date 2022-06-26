
document.addEventListener('DOMContentLoaded',() =>{

const select = document.querySelector(".option");
fetch("https://fast-wave-83090.herokuapp.com/courses")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((course) => render(course));
    
  });
  
function render(course) {
  const opt = document.createElement("option");
  opt.value = course.course_type;
  const content = document.createTextNode(`${course.course_type}`);
  opt.appendChild(content);
  select.appendChild(opt);
}

const courseCardTemplate = document.querySelector("[data-course-template]");
const courseCardContainer = document.querySelector("[data-course-cards-container]");
const searchInput = document.querySelector("[data-search]");
let courses = [];
searchInput.addEventListener("input", (e) => {
  const value = e.target.value.toLowerCase();
  courses.forEach((course) => {
    const isVisible = 
    course.institution.toLowerCase().includes(value) ||
      course.course_type.toLowerCase().includes(value) ||
      course.county.toLowerCase().includes(value);
    course.element.classList.toggle("hide", !isVisible);
  });
});
fetch("https://fast-wave-83090.herokuapp.com/courses")
  .then((res) => res.json())
  .then((data) => {
    courses = data.map((course) => {
      const card = courseCardTemplate.content.cloneNode(true).children[0];
      const image = card.querySelector("[image-body]");
      const header = card.querySelector("[data-header]");
      const unit = card.querySelector("[unit-body]");
      const body = card.querySelector("[data-body]");
    
     image.src = course.image_url;
      header.textContent = course.institution;
      unit.textContent = course.course_type;
      body.textContent = course.county;
      
      courseCardContainer.append(card);
      return {
        image_url: course.image_url,
        institution: course.institution,
       course_type: course.course_type,
        county: course.county,
        element: card
        
      };
    });
  });
  
function validate() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  const error_message = document.getElementById("error_message");

  error_message.style.padding = "10px";

  let text;
  if (name.length < 5) {
    text = "Please Enter valid Name";
    error_message.innerHTML = text;
    return false;
  }

  if (email.indexOf("@") == -1 || email.length < 6) {
    text = "Please Enter valid Email";
    error_message.innerHTML = text;
    return false;
  }

  if (message.length <= 20) {
    text = "Please Enter More Than 20 Characters";
    error_message.innerHTML = text;
    return false;
  }
  const form = document.getElementById("contacts");
  form.addEventListener("submit", function (evt) {
    for (let i = 0; i < form.elements.length; i++) {
      let el = form.elements[i];
      if (!el.checkValidity()) {
        evt.preventDefault();
        console.log("Fix the form!");
        return;
      }
    }
  });
}

let initialize = () => {
  render()
  click() 
};
initialize();
})