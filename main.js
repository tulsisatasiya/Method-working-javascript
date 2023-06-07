const formData = [];

function check() {
    var name = document.getElementById('name').value;
    var namel = document.getElementById('namel').value;
    var email = document.getElementById('email').value;
    var age = document.getElementById('phone').value;
    var phone = document.getElementById('phone').value;
    var password = document.getElementById('password').value;

    
    var  nameRegex = /^[a-zA-Z ]{2,30}$/;
    var  emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var  ageRegex = /^[0-9]{1,2}$/;
    var  phoneRegex = /^[0-9]{10}$/;
    var  passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

    var isValid = true;

    if (isValid) {
      formData.push({
          name: name,
          email: email,
          age: age,
          phone: phone,
          password: password
      });
      console.log(formData); 
  }

  if (isValid) {
    const nameLength = name.length;
    const emailLowerCase = email.toLowerCase();
    const phoneSubstring = phone.substring(0, 10);
    // const passwordUpperCase = password.toUpperCase();
    const namelowercase = name.toLowerCase();
    const fullname = name+ " "+namel;

    console.log("Full Name :", fullname);
    console.log("Name Length:", nameLength);
    console.log("Email in Lower Case:", emailLowerCase);
    console.log("Phone Substring:", phoneSubstring);
    // console.log("Password in Upper Case:", passwordUpperCase);
    console.log("Name Lowerer Case:", namelowercase);
  }

    if (name === "") {
        document.getElementById('namerrr').innerHTML = " FirstName is required";
        isValid = false;
    } else if (!nameRegex.test(name)) {
        document.getElementById('namerrr').innerHTML = "Enter a valid Name";
        isValid = false;
    }
    if (namel === "") {
        document.getElementById('namerrrl').innerHTML = "Last Name is required";
        isValid = false;
    } else if (!nameRegex.test(namel)) {
        document.getElementById('namerrrl').innerHTML = "Enter a valid Name";
        isValid = false;
    }

    if (email === "") {
        document.getElementById('emailerr').innerHTML = "Email is required";
        isValid = false;
    } else if (!emailRegex.test(email)) {
        document.getElementById('emailerr').innerHTML = "Enter a valid Email";
        isValid = false;
    }

    if (age === "") {
        document.getElementById('ageerr').innerHTML = "Age is required";
        isValid = false;
    } 
    // else if (!ageRegex.test(age)) {
    //     document.getElementById('ageerr').innerHTML = "Enter a valid Age";
    //     isValid = false;
    // }

    if (phone === "") {
        document.getElementById('phonerr').innerHTML = "Phone number is required";
        isValid = false;
    } else if (!phoneRegex.test(phone)) {
        document.getElementById('phonerr').innerHTML = "Enter a valid Phone number";
        isValid = false;
    }
    if (password === "") {
        document.getElementById('passerr').innerHTML = "Password is required";
        isValid = false;
    } else if (!passwordRegex.test(password)) {
        document.getElementById('passerr').innerHTML = "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one digit";
        isValid = false;
    }

    // try {
    //   if (password === "") {
    //     throw new Error("Password is required");
    //   } else if (!passwordRegex.test(password)) {
    //     throw new Error("Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one digit");
    //   }
    // } catch (error) {
    //   document.getElementById('passerr').innerHTML = error.message;
    //   isValid = false;
    // }
    

    // if (!gender) {
    //   document.getElementById('gerr').innerHTML = "Please select a gender";
    //   isValid = false;
    // }

    try {
        const maleRadio = document.getElementById("male").value;
        const femaleRadio = document.getElementById("female").value;

        gcheck(); 
      } catch (error) {
        console.log("An error occurred");
        // document.getElementById('gerr').innerHTML = "An error occurred";
      }
      

    return isValid;

    // alert("All data has been successfully added!");

    
}

const rework = () => {
    document.getElementById('namerrr').innerHTML = "";
  };
const reworks = () => {
    document.getElementById('namerrrl').innerHTML = "";
  };
  
  const emailinput = () => {
    document.getElementById('emailerr').innerHTML = "";
  };

  const ageinput = () => {
    document.getElementById('ageerr').innerHTML = "";
  };

  const phoneinput = () => {
    document.getElementById('phonerr').innerHTML = "";
  };
  
  const passinput = () => {
    document.getElementById('passerr').innerHTML = "";
  };
  
  const ginput = () => {
    document.getElementById('gerr').innerHTML = "";
  };

