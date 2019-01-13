({
	init: function (cmp, event, helper) {
        var pageReference = component.get("v.pageReference");
        cmp.set("v.productName", pageReference.state.productName,
                "v.country", pageReference.state.country,
                'v.columns', [
            {label: 'Case Number', fieldName: 'CaseNumber', type: 'text'},
            {label: 'Subject', fieldName: 'Subject', type: 'text'},
            {label: 'Product', fieldName: 'Contact.Product__c', type: 'text'},
            {label: 'Home Country', fieldName: 'Contact.Home_Country__c', type: 'text'}
        ]
        );
    
        helper.fetchData(cmp);
    }
    
})