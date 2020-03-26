import React, { Component } from 'react';

import AddContactForm from '../Components/AddContactForm'


class AddContactScreen extends Component {
    render() {
        return <AddContactForm onSubmit={this.props.route.params.onSubmit}/>
    }
}

export default AddContactScreen;

