
import { ReactComponent as DealSvg } from '../../icons/undraw_business_deal_cpi9.svg';
import Swal from 'sweetalert2';

import "./contact.scss";
const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
  }
export default function Contact() {
    const handleSubmit = async (e) => {
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact", ...this.state })
        })
        .then(() => alert("Success!"))
        .catch(error => alert(error));
        e.preventDefault();
        if(!e.target.email.value){
             const { value:email } = await Swal.fire({
                title: 'Email is missing!',
                input: 'email',
                inputLabel: 'Your email address',
                inputPlaceholder: 'Enter your email address'
            });
            if(!email){
                return;    
            }
            e.target.email.value = email;
        } 
        if(!e.target.text.value){
            const { value: text } = await Swal.fire({
                input: 'textarea',
                inputLabel: 'Your message is missing...!',
                inputPlaceholder: 'Type your message here...',
                inputAttributes: {
                  'aria-label': 'Type your message here'
                },
                showCancelButton: true
            });
            if(!text){
                return;    
            }
            e.target.text.value = text;
        }
    
        Swal.fire({
            position: 'center',
            icon: 'info',
            title: "There you go!",
            text: "I will be notified about your message, Thank you! .",
            showConfirmButton: true,
            timer:2500
            
        });
    }

    return (
        <div className="contact" id="contact">
            <div className="left">
                <DealSvg className="icon"/>
            </div>
            <div className="right">
                <h2>Contact me <span>and let's work together!</span></h2>
                <form onSubmit={handleSubmit} data-netlify="true" name="contact">
                    <input name="email"type="email" placeholder="Email"/>
                    <textarea name="text" className="form-control" placeholder="Leave your message"/>
                    <button name="submit"type="submit" >Send</button>
                </form>
            </div>
        </div>
    )
}
