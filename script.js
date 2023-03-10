
const wrapper = document.querySelector(".wrapper"),//gets the wrapper css and stores it in the wrapper variable
    qrInput = wrapper.querySelector(".form input"),//gets the form input css and stores it in the qrInput variable
    qrImg = wrapper.querySelector(".qr-code img"),//gets the qr-code img and stores it in the qrImg variable
    generateBtn = wrapper.querySelector(".form button");//gets the form button css and stores it in the henerateBtn variable


/* This functions work as generate QR is pressed */
generateBtn.addEventListener("click", call_fun("asd"))
function call_fun(par) {
    

{
    let qrValue = "https://qr-based-attendance-manager.pages.dev/pages/add_student_details";
    if (!qrValue) return;
    let cv=par
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${qrValue}`;
    console.log()
    qrImg.addEventListener("load", () => {
        wrapper.classList.add("active");
        generateBtn.innerText = "Generate QR Code";
    })
};
}



setInterval(() => {
// window.location.reload()
 call_fun("po") 
 console.log("As")  
}, 5000);