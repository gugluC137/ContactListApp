import React, { Component } from 'react';
import { StyleSheet, View, Button } from 'react-native';

import contacts from '../contacts';
import SectionContactList from '../Components/SectionContactList';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});

class ContactListScreen extends Component {
    state = {
        contacts: contacts,
        showContacts: true,
    }

    toggleContacts = () => {
        this.setState(prevState => ({
            showContacts: !prevState.showContacts
        }));
    }

    addContact = newContact => {
        newContact.name = newContact.name.trim();
        this.setState(prevState => ({
            showForm: !prevState.showForm,
            contacts: [...prevState.contacts, newContact]
        }));
        this.props.navigation.navigate('contacts');
    }

    render() {
        const {navigation} = this.props;

        return (
            <View style={styles.container}>
                <Button
                    title='Toggle Contacts'
                    onPress={this.toggleContacts}
                />
                <Button
                    title='Add Contacts'
                    onPress={() => navigation.navigate('addContact', {
                        onSubmit: this.addContact,
                    })}
                />
                { this.state.showContacts &&
                    <SectionContactList contacts={this.state.contacts} />
                }
            </View>
        );
    }
}

export default ContactListScreen;
