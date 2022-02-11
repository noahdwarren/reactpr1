import React from 'react';

export default class Form extends React.Component {
    render() {
        return (
            <div id='form'>
                <h3 id='login' className='container'>Log In</h3>
                <form className='container'>
                    <div className='mb-3'>
                        <label for='InputUserName' className='form-label'>Username</label>
                        <input type='text' className='form-control' id='InputUserName' name='username' /><br />
                    </div>
                    <div className='mb-3'>
                        <label for='InputPassword' className='form-label'>Password</label>
                        <input type='text' className='form-control' id='InputPassword' name='password' /><br />
                    </div>
                    <div>
                        <button type='submit' className='btn btn-success'>Log In</button>
                    </div>
                </form>
            </div>
        );
    }
}