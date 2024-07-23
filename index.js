const generatedPassword=()=>{

    let inputLenght=document.querySelector("#input1").value;

    let chars="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";
    let password=" ";


      for (var i=0;i<inputLenght;i++){
        let randomNumber=Math.floor(Math.random()*chars.length);

        password=password + chars.charAt(randomNumber);
      }
    console.log(password)
      let display=password;
      document.querySelector("#input2").value=display; 
}
  
let btn=document.querySelector(".btn");
btn.addEventListener("click",generatedPassword);

