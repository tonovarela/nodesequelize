const nodemailer = require('nodemailer');
const logo = require("./logo");
let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    auth: {
        user: "noreply@litoprocess.com",
        pass: "n666r33pl"
    }
})
const html= `
<img src="${logo}"/>
<h1>Holis</h1>
`;
message = {
    from: "soporte@litoprocess.com",
    to: "isela.gutierrez@odelnorte.com",
    subject: "Correo desde Node",
    html
}


console.log(logo);
// transporter.sendMail(message, function (err, info) {
//     if (err) {
//         console.log(err)
//     } else {
//         console.log(info);
//     }
// });