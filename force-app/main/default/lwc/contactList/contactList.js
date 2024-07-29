import { LightningElement, wire } from 'lwc';
import FIRSTNAME_FIELD from '@salesforce/schema/Contact.FirstName';
import LASTNAME_FIELD from '@salesforce/schema/Contact.LastName';
import EMAIL_FIELD from '@salesforce/schema/Contact.Email';
import getContacts from '@salesforce/apex/ContactController.getContacts';

const COLUMNS = [
    { label: 'First Name', fieldName: FIRSTNAME_FIELD.fieldApiName },
    { label: 'Last Name', fieldName: LASTNAME_FIELD.fieldApiName },
    { label: 'Email', fieldName: EMAIL_FIELD.fieldApiName }
];

export default class ContactList extends LightningElement {
    columns = COLUMNS;
    contacts;
    error;

    @wire(getContacts)
    wiredContacts({ error, data }) {
        if (data) {
            this.contacts = data;
            this.error = undefined;
        } else if (error) {
            this.error = error;
            this.contacts = undefined;
        }
    }
}
