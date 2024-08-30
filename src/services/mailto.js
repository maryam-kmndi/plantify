document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault(); 
    // دریافت مقادیر فیلدهای فرم
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

       // ساختن لینک mailto
       const mailtoLink = `mailto:maryamkmndi8@gmail.com?subject=Contact%20Form%20Submission&body=Name:%20${encodeURIComponent(name)}%0AEmail:%20${encodeURIComponent(email)}%0AMessage:%20${encodeURIComponent(message)}`;

       // باز کردن کلاینت ایمیل با استفاده از لینک mailto
       window.location.href = mailtoLink;
   });