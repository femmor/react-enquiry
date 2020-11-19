import React, {useState} from 'react'
import { Form, Button } from "react-bootstrap"

const ContactForm = () => {
    const [state, setState] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })

    const onInputChange = e => {
        const {name, value} = e.target

        setState({
            ...state,
            [name]: value
        })
    }

    const sendEmail = e => {
        e.preventDefault()

        console.log(state)
    }


    return (
        <>
            <form onSubmit={sendEmail}>
                <Form.Group controlId="name">
                <Form.Label>Full Name</Form.Label>
                <Form.Control
                    type="text"
                    name="name"
                    value={state.name}
                    placeholder="Enter your full name"
                    onChange={onInputChange}
                />
                </Form.Group>
                <Form.Group controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                    type="text"
                    name="email"
                    value={state.email}
                    placeholder="Enter your email"
                    onChange={onInputChange}
                />
                </Form.Group>
                <Form.Group controlId="subject">
                <Form.Label>Subject</Form.Label>
                <Form.Control
                    type="text"
                    name="subject"
                    value={state.subject}
                    placeholder="Enter subject"
                    onChange={onInputChange}
                />
                </Form.Group>
                <Form.Group controlId="subject">
                <Form.Label>Message</Form.Label>
                <Form.Control
                    as="textarea"
                    name="message"
                    value={state.message}
                    rows="3"
                    placeholder="Enter your message"
                    onChange={onInputChange}
                />
                </Form.Group>
                <Button variant="primary" type="submit" className="btn-block">
                    Submit
                </Button>
            </form>
        </>
    )
}

export default ContactForm
