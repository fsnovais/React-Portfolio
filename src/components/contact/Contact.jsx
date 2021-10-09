import "./contact.scss"
import {useState} from "react";

export default function Contact() {
    const [message, setMessage] = useState(false);
    
    const handleSubmit = (e)=> {
        e.preventDefault();
        setMessage(true)
    }
    return (
        <div className="contact" id="contact">
            <div className="left">
            <img src="assets/shake.svg" alt="" />
            </div>
            <div className="right">
                <h2>Contact.</h2>
                <form onSubmit={handleSubmit} >
                    <input type="text" placeholder="email" />
                    <textarea placeholder="message"></textarea>
                    <button type="submit">Send</button>
                    {message && <span> Thanks, i will reply ASAP! :)</span>}
                </form>
            </div>
        </div>
    )
}
