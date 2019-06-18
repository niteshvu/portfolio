import React from 'react'
import './contact.css'
import Firebase from 'firebase';
import axios from 'axios'
class Contact extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: '',
            email: '',
            phone: '',
            message: '',
            disabled: true,
            submitted: false
        }
    }
    handleChange = (id, event) => {
        this.setState({
            [id]: event.target.value
        }, () => {
            if(this.state.name.length === 0 || 
                this.state.email.length === 0 || 
                this.state.phone.length === 0 || 
                this.state.message.length === 0)
            {
                this.setState({
                    disabled: true
                }) 
            }
            else{
                this.setState({
                    disabled: false
                })
            }
        })
    }
    submit = () => {
        Firebase.database().ref(`/messages/${this.state.email.replace(/[^\w\s]/gi, '')}`).update({
            name: this.state.name,
            email: this.state.email,
            message: this.state.message
        }).then(() => {
            const data = {
                toEmail: this.state.email,
                toName: this.state.name,
                message: this.state.message
              }
           axios.post('https://us-central1-email-df99a.cloudfunctions.net/httpEmail', data)
           .then(() => {
            axios.post('https://us-central1-email-df99a.cloudfunctions.net/httpEmailtoMe', data)
           })
        }).then(() => {
            this.setState({
                name: '',
                email: '',
                phone: '',
                message: '',
                disabled: true,
                submitted: true
            }) 
        }).catch(() => {
            alert("Something went wrong! Please try again")
        })
    }
    render(){
        let renderString = (<form className = "contactMainContiner">
        <label>Name</label>
        <input 
            type = "text"
            value = {this.state.name}
            id = "name"
            onChange = {this.handleChange.bind(this, "name")}
        />
        <label>Email</label>
        <input
            type = "text"
            value = {this.state.email}
            id = "email"
            onChange = {this.handleChange.bind(this, "email")}
        />
        <label>Phone</label>
        <input 
            type = "text"
            value = {this.state.phone}
            id = "phone"
            onChange = {this.handleChange.bind(this, "phone")}
        />
        <label>Message</label>
        <textarea
            type = "text"
            value = {this.state.message}
            id = "phone"
            onChange = {this.handleChange.bind(this, "message")}
        />
        <br/>
        <button 
            type = "button"
            disabled = {this.state.disabled} 
            className = "btn btn-primary"
            onClick = {this.submit}
        >
            Submit
        </button>
        </form>)
        if(this.state.submitted){
            renderString = <h4>Thanks for the Message!</h4>
        }
        return(
            renderString
        )
    }
}

export default Contact;