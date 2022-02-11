import React from 'react';
import Navbar from './navbar';
import Form from './form';

export default class WebPage extends React.Component {
    render() {
        return (
            <div className='container'>
                <Navbar />
                <br />
                <Form />
            </div>
        );
    }
}