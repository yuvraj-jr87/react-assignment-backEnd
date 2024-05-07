import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: true,
    service: 'gmail',
    auth: {
        user: 'yuvrajjr87@gmail.com',
        pass: 'kzzw bxry stkl vzzm'
    }

});

const sendEmail = () => {

    const mailOptions = {
        from: 'yuvrajjr87@gmail.com',
        to: 'yuvrajjr87@gmail.com',
        subject: 'Test mail',
        text: 'this is a test mail'
    };

    transporter.sendMail(mailOptions);

};

// const sendEmail2 = (mailInfo) => {
    
//     const mailOptions = {
//         from: 'yuvrajjr87@gmail.com',
//         to: mailInfo.to,
//         subject: mailInfo.subject,
//         text: mailInfo.text
//     };

//     transporter.sendMail(mailOptions);

// };

const sendEmail3 = (mailProps) => {
    const mailOptions = {
        from: 'yuvrajjr87@gmail.com',
        to: mailProps.to,
        subject: mailProps.subject,
        text: mailProps.text
    };
    return new Promise((resolve, reject) => {
        try {
            const success =
                transporter.sendMail(mailOptions);
            resolve(success);
        }
        catch (error) {
            reject(error);
        }
    });
};

export { sendEmail, sendEmail3 };