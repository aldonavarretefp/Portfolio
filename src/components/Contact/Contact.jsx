
import { ReactComponent as DealSvg } from '../../icons/undraw_business_deal_cpi9.svg';
import Swal from 'sweetalert2';

import "./contact.scss";
import { useForm } from '../../hooks/useForm';


const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
}
export default function Contact() {

    const [formValues, handleInputChange] = useForm({
        email: "",
        msg: ""
    });
    const { email, msg } = formValues;
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: "There you go!",
            text: "I will be notified about your message, Thank you! .",
            showConfirmButton: true,
            timer:2500
        });



        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact", ...this.state })
        })
        // if(!e.target.email.value){
        //     const { value:email } = await Swal.fire({
        //         title: 'Email is missing!',
        //         input: 'email',
        //         inputLabel: 'Your email address',
        //         inputPlaceholder: 'Enter your email address'
        //     });
        //     if(!email){
        //         return;    
        //     }
        //     e.target.email.value = email;
        // } 
        // if(!e.target.text.value){
        //     const { value: text } = await Swal.fire({
        //         input: 'textarea',
        //         inputLabel: 'Your message is missing...!',
        //         inputPlaceholder: 'Type your message here...',
        //         inputAttributes: {
        //             'aria-label': 'Type your message here'
        //         },
        //         showCancelButton: true
        //     });
        //     if(!text){
        //         return;    
        //     }
        //     e.target.text.value = text;
        // }
    
    }

    return (
        <div className="contact" id="contact">
            <div className="left">
                <DealSvg className="icon"/>
            </div>
            <div className="right">
                <h2>Contact me <span>and let's work together!</span></h2>
                <form onSubmit={handleSubmit} data-netlify="true" name="contact" method= "POST">
                    <input type="hidden" name="form-name" value="contact" />
                    <div className="inputContainer">
                        <input name="email" autoComplete="off" type="email" value={email} onChange={handleInputChange} placeholder=" " required/>
                        <label>Email</label>
                    </div>
                    <div className="textAreaContainer">
                        <textarea name="msg" className="form-control" value={msg} onChange={handleInputChange} placeholder=" " required/>
                        <label>Leave a message!</label>
                    </div>
                        {/* <textarea name="text" className="form-control" placeholder=" "/>
                        <label>Leave a message!</label> */}
                    <button className="btn-5" name="submit"type="submit" >Send</button>
                </form>
            </div>
        </div>
    )
}
