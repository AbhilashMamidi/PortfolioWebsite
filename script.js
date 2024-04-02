var tabLinks =document.getElementsByClassName('tab-links')
var tabContents =document.getElementsByClassName('tab-contents')

function opentab(tabname){
    for(tablink of tabLinks){
        tablink.classList.remove("active-link");
    }
    for(tabContent of tabContents){
        tabContent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab")
}

var sidemenu=document.getElementById('sidemenu');

function openmenu(){
    sidemenu.style.right="0";   
}
function closemenu(){
    sidemenu.style.right="-200px"
}

// google script for verification

  const scriptURL = 'https://script.google.com/macros/s/AKfycby65q5Rx4jNijfMAL-Vhg7-GCR21wRPIiIJ4PKi246jUnR0m4iruqZYvs-igI7kwKUQ/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg=document.getElementById('msg') 

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML="Message Sent Successfully"
        setTimeout(function(){
            msg.innerHTML=""
        },5000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })