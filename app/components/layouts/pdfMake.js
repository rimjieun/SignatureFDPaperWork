/**
 * Created by ryanrodwell on 7/14/17.
 */
// playground requires you to assign document definition to a variable called dd
var userName = "Ryan";
var printedName = "RyanRodwell";
var savedDate = "10/26/93";

var dd = {
    content: [
        {
            text: '\n\n',
            style: 'subheader'
        },

        {
            text: 'Acknowledgement of Receipt of the Employee Handbook of SignatureFD, LLC \n\n\n',
            style: 'subheader'
        },
        {
            text: "I hereby acknowledge receipt of a copy of the Firm's Employee Handbook, which I have read and understand. I certify that, to the best of my knowledge, I have complied with these polices and procedures to the extent they have applied to me during the past year. I further understand and acknowledge that any violation of these policies and procedures may subject me to disciplinary action, including termination of employment.\n\n\n",
        },

        {
            columns: [
                {
                    width: 'auto',
                    alignment: "left",
                    stack: [
                        {
                            text: "Signature",
                            style: "form"
                        },
                        {
                            text: "Printed Name",
                            style: "form"
                        },
                        {
                            text: "Date",
                            style: "form"
                        }

                    ]
                },
                {
                    width: 'auto',
                    alignment: 'left',
                    stack: [
                        {
                            style: 'data',
                            text: userName+"           "
                        },
                        {
                            style: 'data',
                            text: printedName+"           "
                        },
                        {
                            style: 'data',
                            text: savedDate+"           "
                        }
                    ]
                }
            ]
        }

    ],

    styles: {

        subheader: {
            fontSize: 14,
            bold: true,
            decoration: 'underline',
            alignment: 'center'

        },
        form: {
            italics: true,
        },
        data: {
            decoration: "underline"
        }
    }
}