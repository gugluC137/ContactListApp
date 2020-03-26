import React from 'react';
import { SectionList, Text } from 'react-native';

import Row from './Row';

const renderItem = obj => <Row name={obj.item.name} phone={obj.item.phone} />

const renderSectionHeader = obj => <Text style={{textAlign: 'center'}}>{obj.section.title}</Text>

const SectionContactList = props => {

    const contactByLetter = props.contacts.reduce((obj, contact) => {
        const firstLetter = contact.name[0].toUpperCase();
        return ({
            ...obj,
            [firstLetter]: [...(obj[firstLetter] || []), contact],
        });
    }, {});

    const sections = Object.keys(contactByLetter).sort().map(letter => ({
        title: letter,
        data: contactByLetter[letter],
    }));

    return ( 
        <SectionList 
            renderItem={renderItem} 
            renderSectionHeader={renderSectionHeader}
            sections={sections}
        />
    )
}

export default SectionContactList;