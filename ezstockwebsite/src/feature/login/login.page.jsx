import React from 'react';
import axios from 'axios';
import { setUserSession } from '../../non-feature/helpers/session.helper';

class LoginPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    // handle button click of login form
    handleSubmit = (e) => {
        e.preventDefault();

        this.setState({ submitted: true });
        const { username, password } = this.state;
        if (username && password) {            
            axios.post(
                'http://localhost:83/api/account/login', 
                { 
                    username: username, 
                    password: password 
                }
            ).then(response => {        
                if(response.data.isSuccess == true) {
                    setUserSession(response.data.token, username);
                    this.props.history.push('/stock');
                }                
            }).catch(error => {
                if (error.response.status === 401) {
                    //setError(error.response.data.message);
                    console.log(error.response.data.message);
                }                
                else {
                    //setError("Something went wrong. Please try again later.");
                    console.log('Something went wrong. Please try again later.');
                }                
            });
        }
    }

    render() {
        const { processing } = this.props;
        const { username, password, submitted } = this.state;
        return (
            <div className="col-md-6 col-md-offset-3">
                <h2>Login</h2>
                <form name="form" onSubmit={this.handleSubmit}>
                    <div className={'form-group' + (submitted && !username ? ' has-error' : '')}>
                        <label htmlFor="username">Username</label>
                        <input type="text" className="form-control" name="username" value={username} onChange={this.handleChange} />
                        {submitted && !username &&
                            <div className="help-block">Username is required</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !password ? ' has-error' : '')}>
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" name="password" value={password} onChange={this.handleChange} />
                        {submitted && !password &&
                            <div className="help-block">Password is required</div>
                        }
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary">Login</button>
                        {processing &&
                            <img alt="loading..." src="../non-feature/assets/loading.gif" />
                        }
                        {/* <Link to="/register" className="btn btn-link">Register</Link> */}
                    </div>
                </form>
            </div>
        );
    }
}

export default LoginPage;