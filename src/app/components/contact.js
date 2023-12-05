import React from 'react';

function contact(props) {
    return (
        <>
        <div>
            
    <div id="contact">
        <div class="container">
            <div class="row">
                <div class="contact-left">
                    <h1 class="sub-title">Contact me</h1>
                    <p><i class="fa-solid fa-paper-plane"></i>sarfaraz.saifi20@gmail.com</p>
                    <p><i class="fa-sharp fa-solid fa-square-phone"></i>09958629247</p>
                    
                    <div class="social-icons">
                        <a href="#"><i class="fa-brands fa-facebook"></i></a>
                        <a href="#"><i class="fa-brands fa-twitter-square"></i></a>
                        <a href="#"><i class="fa-brands fa-instagram"></i></a>
                        <a href="#"><i class="fa-brands fa-linkedin"></i></a>
                    </div>
                    <a href="" class="btn btn2">Download Cv</a>
                </div>
                
                <div class="contact-right">
                    <form >
                        <input type="text" name="Name" placeholder="Your Name" required/>
                        <input type="text" name="e-mail" placeholder="Your Email" required/>
                        <textarea name="Message" rows="6" placeholder="Your Message"></textarea>
                        <button type="submit" class="btn btn2">Submit</button>
                    </form>
                </div>
            </div>
        </div>

        <div class="copyright">
          <p>Copyright © Sarfaraz.Made with	<span>&#9829;</span> by sarfaraz.</p>
        </div>
    </div>
        </div>
        </>
    );
}

export default contact;