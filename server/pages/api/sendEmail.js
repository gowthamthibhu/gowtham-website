"use strict";
(() => {
var exports = {};
exports.id = 719;
exports.ids = [719];
exports.modules = {

/***/ 2933:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ handler)
});

;// CONCATENATED MODULE: external "nodemailer"
const external_nodemailer_namespaceObject = require("nodemailer");
var external_nodemailer_default = /*#__PURE__*/__webpack_require__.n(external_nodemailer_namespaceObject);
;// CONCATENATED MODULE: ./src/pages/api/sendEmail.js

async function handler(req, res) {
    if (req.method === "POST") {
        const { name, email, message } = req.body;
        // Create a transporter object using SMTP transport
        let transporter = external_nodemailer_default().createTransport({
            service: "gmail",
            auth: {
                user: "gowthamthibhu@gmail.com",
                pass: "glbxplvqjwwyslqc"
            }
        });
        // Set up email data
        let mailOptions = {
            from: email,
            to: "gowthamthibhu@gmail.com",
            subject: "Contact Form",
            text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
        };
        // Send mail
        try {
            await transporter.sendMail(mailOptions);
            res.status(200).json({
                message: "Email sent successfully"
            });
        } catch (error) {
            res.status(500).json({
                message: "Error sending email",
                error
            });
        }
    } else {
        res.status(405).json({
            message: "Method not allowed"
        });
    }
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(2933));
module.exports = __webpack_exports__;

})();