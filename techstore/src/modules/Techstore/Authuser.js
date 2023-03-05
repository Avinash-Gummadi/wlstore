import React, { Component } from 'react'
import "../css/auth.css";
export default class Authuser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            authenticated: true
        }
    }
    componentDidMount() {
        document.body.classList.add('authbody')
    }
    componentWillUnmount() {
        document.body.classList.remove('authbody')
    }
    render() {
        return (
            <div>
                <div>
                    <div className="background">
                        <div className="shape"></div>
                        <div className="shape"></div>
                    </div>
                    {this.state.authenticated ?
                        <form className='authform'>
                            <h3>Login Here</h3>
                            <label htmlFor="username">Username</label>
                            <input type="text" placeholder="Email or Phone" id="username" />

                            <label htmlFor="password">Password</label>
                            <input type="password" placeholder="Password" id="password" />

                            <button>Log In</button>
                            <div className="social">
                                <div className="go"><i className="bi bi-google"></i>  Google</div>
                                <div className="fb"><i className="bi bi-facebook"></i>  Facebook</div>
                            </div>
                        </form> :
                        <form className='authform registerform'>
                            <h3>Register Here</h3>
                            <label htmlFor="fullname">Full Name</label>
                            <input type="text" placeholder="Your fullname" id="fullname" />

                            <label htmlFor="username">Username</label>
                            <input type="text" placeholder="Email or Phone" id="username" />

                            <label htmlFor="password">Password</label>
                            <input type="password" placeholder="Password" id="password" />

                            <button>Register</button>
                            <div className="social">
                                <div className="go"><i className="bi bi-google"></i>  Google</div>
                                <div className="fb"><i className="bi bi-facebook"></i>  Facebook</div>
                            </div>
                        </form>
                    }
                </div>
            </div>
        )
    }
}
