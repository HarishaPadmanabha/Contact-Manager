import React from 'react' 
import axios from 'axios'

class UserRegister extends React.Component {
    constructor(props) {
        super(props) 
        this.state = {
            username: '', 
            email: '', 
            password: '', 
            notice: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }  


    handleSubmit(e) {
        e.preventDefault()
        const formData = {
            username: this.state.username, 
            email: this.state.email, 
            password: this.state.password
        }

        // todo client side validation

        axios.post('http://localhost:3005/users/register', formData)
            .then(() => {
                this.setState(() => ({
                    username: '', email: '', password: '', notice: 'successfully registered, taking you to login screen'
                }))
                setTimeout(() => {
                    this.props.history.push('/users/login')
                }, 2000)
            })
            .catch(err => console.log(err))
    }
    
    handleChange(e) {
        e.persist()
        this.setState(() => ({
            [e.target.name] : e.target.value
        })) 
    }

    render() {
        console.log(this.props)
        return (
            <div>
                <h2>Register with us</h2>
                { this.state.notice && <p>{this.state.notice}</p>}
                <form onSubmit={this.handleSubmit}>
                    <label>
                        username 
                        <input type="text" value={this.state.username} onChange={this.handleChange} name="username"/>
                    </label> <br/>

                    <label>
                        email
                        <input type="text" value={this.state.email} onChange={this.handleChange} name="email" />
                    </label> <br />

                    <label>
                        password
                        <input type="password" value={this.state.password} onChange={this.handleChange} name="password" />
                    </label> <br />

                    <input type="submit" />
                </form>
            </div>
        )
    }
}

export default UserRegister