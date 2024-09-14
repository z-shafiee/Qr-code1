        const wrapper = document.querySelector(".wrapper"),  
  qrInput = wrapper.querySelector(".form input"),  
  generateBtn = wrapper.querySelector(".form button"),  
        qrImg = wrapper.querySelector(".qr-code img");  
let preValue;  

//  کلیک برای دکمه  
generateBtn.addEventListener("click", () => {  
  const qrValue = qrInput.value.trim(); // دریافت مقدار از ورودی  
  if (!qrValue || preValue === qrValue) return; // اگر ورودی خالی باشد یا تغییر نکرده باشد  
  preValue = qrValue;  
  generateBtn.innerText = "Generating QR Code...";  

  // QR میسازه API با ورودی کاربر   
  qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(qrValue)}`;  
  
  qrImg.addEventListener("load", () => {  
    wrapper.classList.add("active");  
    generateBtn.innerText = "Generate QR Code";  
  });  
});  

//  تایپ در ورودی  
qrInput.addEventListener("keyup", () => {  
  if (!qrInput.value.trim()) {  
    wrapper.classList.remove("active");  
    preValue = "";  
  }  
});  