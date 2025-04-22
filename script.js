// const body=document.body;
// body.addEventListener("click",()=>{
//     console.log("click event occureed!!");
// })

function sendEmail(){
    let param= {
        name:document.getElementById("username").value,
        email:document.getElementById("email").value,
        message:document.getElementById("message").value,
        Phone: document.getElementById("Phone").value
    }
    emailjs.send("service_aiqjlq2", "template_0f16hqv",param).then(alert("email sent !!"));
}
