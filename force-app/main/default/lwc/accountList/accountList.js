import { LightningElement ,wire} from 'lwc';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import REVENUE_FIELD from '@salesforce/schema/Account.AnnualRevenue';
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry';
import getAccounts from '@salesforce/apex/AccountController.getAccounts';
// import AnnualRevenue from '@salesforce/schema/Account.AnnualRevenue';

const Columns=[
    {
        label :'Account Name',
        fieldName :NAME_FIELD.fieldApiName,
        type:'text'

    },
    {
        label :'Account revenue',
        fieldName :REVENUE_FIELD.fieldApiName ,
        type:'currency'

    },
    {
        label :'INDUSTRY Name',
        fieldName :INDUSTRY_FIELD.fieldApiName ,
        type:'text'

    }
]
export default class AccountList extends LightningElement {

columns=Columns ;
@wire(getAccounts)
accounts ;

}