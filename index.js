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
let selectText = (ele) => {
  let msg = document.getElementById('course-card-grid');
    msg.innerHTML =  ele.options[ele.selectedIndex].text 
         
}

fetch("https://fast-wave-83090.herokuapp.com/courses")
  .then((response) => response.json())
  .then((cardData) => {
    let first =""
    
    cardData.forEach((values)=>{
      first+=`<article>
      <img src="${values.image_url}" alt="sample image"> 
      <div class = "text">
       <h1 >${values.institution.in1}</h1>
       <h4 > ${values.county.cnt1} </h4>
       <button>Apply</button>  
      </div>
      </article>`
      first+=`<article>
      <img src="${values.image_url}" alt="sample image"> 
      <div class = "text">
       <h1 >${values.institution.in2}</h1>
       <h4 > ${values.county.cnt2} </h4>
       <button>Apply</button>  
      </div>
      </article>`
      first+=`<article>
      <img src="${values.image_url}" alt="sample image"> 
      <div class = "text">
       <h1 >${values.institution.in3}</h1>
       <h4 > ${values.county.cnt3} </h4>
       <button>Apply</button>  
      </div>
      </article>`
    })
    document.getElementById("course-card-grid").innerHTML=first
    
  });
  

  
function validate(){
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;
  
  const error_message = document.getElementById("error_message");
  
  error_message.style.padding = "10px";
  
  let text;
  if(name.length < 5){
    text = "Please Enter valid Name";
    error_message.innerHTML = text;
    return false;
  }
 
    if(email.indexOf("@") == -1 || email.length < 6){
      text = "Please Enter valid Email";
      error_message.innerHTML = text;
      return false;
    }  
 
    if(message.length <= 20){
    text = "Please Enter More Than 20 Characters";
    error_message.innerHTML = text;
    return false;
  }
  const form = document.getElementById("contacts");
form.addEventListener("submit", function(evt) {
  for(let i = 0; i < form.elements.length; i++) {
    let el = form.elements[i];
    if (!el.checkValidity()) {
      evt.preventDefault();
      console.log('Fix the form!');
      return;
    }
  }
});
  
}


let initialize = () => {
  render();
  
};
initialize();
