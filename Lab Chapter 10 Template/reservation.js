"use strict";

$(document).ready(() => {
    const emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
    const numericPattern = /^\d+$/;

    $('#arrival_date').focus();

    const handleSubmit = (event) => {
        let isValid = true;
        const contactDetails = ['#arrival_date','#nights','#name', '#email', '#phone'];
        contactDetails.forEach((contactDetail) => {
            let contactDetailElement = $(contactDetail).val().trim();
            if (contactDetailElement === "") {
                $(contactDetail).next().text("This field is required.");
                isValid = false;
                return;
            } else {
                $(contactDetail).next().text("*");
            }
            if (contactDetail === '#email' && !emailPattern.test(contactDetailElement)) {
                $(contactDetail).next().text("This field must be a valid email.");
                isValid = false;
            } else if (contactDetail === '#email') {
                $(contactDetail).next().text("*");
            }
            if ((contactDetail === '#nights'|| contactDetail === '#phone') && !numericPattern.test(contactDetailElement)) {
                $(contactDetail).next().text("This field must be numeric.");
                isValid = false;
            } else if (contactDetail === '#phone') {
                $(contactDetail).next().text("*");
            }
        });
        
        if (!isValid) {
            event.preventDefault();
        }
    };

    $("#reservation_form").submit((event) => handleSubmit(event));
}); // end ready