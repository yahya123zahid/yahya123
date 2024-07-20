let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a')

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop -50;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id')

        if(top >= offset && top <offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a {href='+ id + + '}').classList.add ('active');            });
        };
    });
};
const form = document.querySelector("form");
function sendEmail() {
    const bodyMessage = "Name :" + document.getElementById("name").value
     + "<br> Email:" + document.getElementById("email").value
      + "<br> Phone No:" + document.getElementById("phone").value 
      +"<br> Message :" + document.getElementById("message").value;

Email.send({
    Host : "smtp.elasticemail.com",
    Username : "tzybiasalah@gmail.com",
    Password : "5B012D7CDEA472206982C64340E3BE7A8288",
    To : 'tzybiasalah@gmail.com',
    From : "tzybiasalah@gmail.com",
    Subject : subject.value,
    Body : bodyMessage
        
}).then(
  message => {
    if (message == "OK") {
        Swal.fire({
            title: "Massage!",
            text: "message sent succesfully!",
            icon: "success"
          });
    }
  }
);
}
form.addEventListener("submit", (e) => {
    e.preventDefault();
        sendEmail();
});