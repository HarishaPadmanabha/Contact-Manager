import React from 'react' 
import { Link } from 'react-router-dom'
import axios from '../../config/axios'

class ContactList extends React.Component {
    constructor(props){
        super(props) 
        this.state = {
            contacts: []
        }
    }

    componentDidMount() {
        axios.get('/contacts')
            .then(response => this.setState(() => ({ contacts: response.data })))
    }
    render() {
        return (
            <div>
                {
                    this.state.contacts.length === 0 ? (<p> No contacts found. Add your first Contact</p>) : (
                        <div> 
                            <h2>Listing Contacts - {this.state.contacts.length} </h2>
                            <ul>
                                {
                                    this.state.contacts.map(contact => {
                                        return (
                                            <li key={contact._id}> <Link to={`/contacts/${contact._id}`}>{contact.name} </Link> </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    ) 
                }

                <Link to="/contacts/new">Add Contact</Link>

            </div>
        )
    }
}

export default ContactList