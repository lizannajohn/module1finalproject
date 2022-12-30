function submitContactForm()
{
    let fname = document.getElementById("fullname").value;
    let lname = document.getElementById("lastname").value;
    let email = document.getElementById("emailid").value;
    console.log(fname, lname, email);

    if(fname && lname && email)
    {
        alert("Form submitted successfully!")
    }
    else {
        alert("All fields are required!")
    }
}