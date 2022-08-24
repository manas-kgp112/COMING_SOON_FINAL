var modalEAD = document.getElementById("myModalEAD"); // Get the modal EAD
var btnEAD = document.getElementById("myBtnEAD"); // Get the button that opens the modal
var spanEAD = document.getElementsByClassName("closeEAD")[0]; // Get the <span> element that closes the modal

var modalLSM = document.getElementById("myModalLSM");
var btnLSM = document.getElementById("myBtnLSM");
var spanLSM = document.getElementsByClassName("closeLSM")[0];
      
  // function RegisterEAD() {
        btnEAD.onclick = function () {
          // When the user clicks the button, open the modal
          modalEAD.style.display = "block";
        };
        spanEAD.onclick = function () {
          // When the user clicks on <span> (x), close the modal
          modalEAD.style.display = "none";
        };
        window.onclick = function (event) {
          // When the user clicks anywhere outside of the modal, close it
          if (event.target == modalEAD) {
            modalEAD.style.display = "none";
          } else if (event.target == modalLSM) {
            modalLSM.style.display = "none";
          } 
        };
      // }

      function RegisterLSM() {
        // When the user clicks the button, open the modal
        btnLSM.onclick = function () {
          modalLSM.style.display = "block";
        };
        // When the user clicks on <span> (x), close the modal
        spanLSM.onclick = function () {
          modalLSM.style.display = "none";
        };
        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function (event) {
          if (event.target == modalLSM) {
            modalLSM.style.display = "none";
          } else if (event.target == modalEAD) {
            modalEAD.style.display = "none";
          }
        };
      }


(
  function () {
    const second = 1000,
          minute = second * 60,
          hour = minute * 60,
          day = hour * 24;
  
    //I'm adding this section so I don't have to keep updating this pen every year :-)
    //remove this if you don't need it
    let today = new Date(),
        dd = String(today.getDate()).padStart(2, "0"),
        mm = String(today.getMonth() + 1).padStart(2, "0"),
        yyyy = today.getFullYear(),
        nextYear = yyyy + 1,
        dayMonth = "09/30/",
        birthday = dayMonth + yyyy;
    
    today = mm + "/" + dd + "/" + yyyy;
    if (today > birthday) {
      birthday = dayMonth + nextYear;
    }
    //end
    
    const countDown = new Date(birthday).getTime(),
        x = setInterval(function() {    
  
          const now = new Date().getTime(),
                distance = countDown - now;
  
          document.getElementById("days").innerText = Math.floor(distance / (day)),
            document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
            document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
            document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);
  
          //do something later when date is reached
          if (distance < 0) {
            document.getElementById("headline").innerText = "It's my birthday!";
            document.getElementById("countdown").style.display = "none";
            document.getElementById("content").style.display = "block";
            clearInterval(x);
          }
          //seconds
        }, 0)
    }());



  // LOGO
let statements = document.getElementsByClassName('text_logo');
console.log(statements);
// statements[0].style.diplay = "block";
for (let i = 0; i < statements.length; i++) {
    statements[i].style.display = "none";   
}

let j = 0;
function changeWord() {
    for (let i = 0; i < statements.length; i++) {
        statements[i].style.display = "none";   
    }
    if (j < statements.length-1) {
        statements[j].style.display = "block";
        // statements[j+1].style.display = "block";
    } else {
        j = 0;
        statements[j].style.display = "block";
        // statements[j+1].style.display = "block";
    }
    j++;
}
setInterval(changeWord, 1500);


// EAD-LSM Section

function show_ead_about() {
  ead_about.style.display = 'block';
  lsm_about.style.display = "none";
  console.log(5);
}
function show_lsm_about() {
  lsm_about.style.display = "block";
  ead_about.style.display = "none";
}
ead_button = document.getElementById("ead_button_about");
lsm_button = document.getElementById("lsm_button_about");
ead_nav_link = document.getElementById("ead_nav_link");
lsm_nav_link = document.getElementById("lsm_nav_link");


ead_about = document.getElementById("ead_about");
lsm_about = document.getElementById("lsm_about");
ead_button.onclick = function () {
  show_ead_about()
}
lsm_button.onclick = function () {
  show_lsm_about()
}
ead_nav_link.onclick = function () {
  show_ead_about()
}
lsm_nav_link.onclick = function () {
  show_lsm_about()
}

// lsm_button.addEventListener('click', show_lsm_about);

