document.addEventListener(`DocumentContentLoaded`, (event) => {});

let search_program=()=> {
    const url="https://fast-wave-83090.herokuapp.com/courses"
    fetch(url)
    .then(res=> res.json())
    .then(courses=>{ console.log(courses)
        let input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("searchbar");
    filter = input.value.toUpperCase();
    ul = document.getElementById("course-list");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
})
    //input=input.toLowerCase();
    // let x = document.getElementsByClassName('courses');
      
    // for (i = 0; i < x.length; i++) { 
    //     if (!x[i].innerHTML.toLowerCase().includes(input)) {
    //         x[i].style.display="none";
    //     }
    //     else {
    //         x[i].style.display="list-item";                 
    //     }
    // }
    .catch(error => console.log(error))
}

// function search_program() {
//     let input, filter, ul, li, a, i, txtValue;
//     input = document.getElementById("searchbar");
//     filter = input.value.toUpperCase();
//     ul = document.getElementById("course-list");
//     li = ul.getElementsByTagName("li");
//     for (i = 0; i < li.length; i++) {
//         a = li[i].getElementsByTagName("a")[0];
//         txtValue = a.textContent || a.innerText;
//         if (txtValue.toUpperCase().indexOf(filter) > -1) {
//             li[i].style.display = "";
//         } else {
//             li[i].style.display = "none";
//         }
//     }
// }
let initialize = () => {
    search_program() 
};
initialize();
