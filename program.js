function mainContactFormOnLoad(executionContext) {
    const formContext = executionContext.getFormContext();
    //let firstName = formContext.getAttribute("Owner").getValue();

    alert("Hello world!!");
}

function onChange_AccountType(executionContext) {
    const formContext = executionContext.getFormContext();
    
    var confirmStrings = {
       text: "Do you want to clone this Quote and Proposed Vessels.", title: "Please Confirmation",
       subtitle: "", "cancelButtonLabel": "Cancel", confirmButtonLabel: "Confirm"
    };

    var confirmOptions = { height: 200, width: 500 };
    Xrm.Navigation.openConfirmDialog(confirmStrings, confirmOptions).then(
       function (success) {
           if (formContext.getAttribute("").getValue() != null) {
                alert(formContext.getAttribute("").getValue());
                formContext.getAttribute("").setValue(null);
                formContext.getAttribute("").setValue(null);
            }
   });
}
