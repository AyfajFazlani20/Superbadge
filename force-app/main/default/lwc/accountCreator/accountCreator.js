import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import PHONE_FIELD from '@salesforce/schema/Account.Phone';
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry';

export default class AccountCreator extends LightningElement {
    fields = [NAME_FIELD, PHONE_FIELD, INDUSTRY_FIELD];

    handleSuccess(event) {
        const evt = new ShowToastEvent({
            title: 'Account Created',
            message: 'Account Id: ' + event.detail.id,
            variant: 'success',
        });
        this.dispatchEvent(evt);
    }
}
