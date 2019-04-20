const AWS = require('aws-sdk');

const responseHeaders = {
    'Access-Control-Allow-Origin': 'https://samvk.com',
    'Access-Control-Allow-Headers': 'x-requested-with',
    'Access-Control-Allow-Credentials': true,
};

const successResponse = (body) => ({
    statusCode: 200,
    headers: responseHeaders,
    body: JSON.stringify(body),
});

const errorResponse = (err) => ({
    statusCode: 500,
    headers: responseHeaders,
    body: JSON.stringify(err),
});

const makeEmailParams = ({ name, email, message, phone = '' }) => {
    if (!name || !email || !message) {
        throw new Error('Some required fields left blank.');
    }

    const sender = 'Admin <noreply@samvk.com>';
    const recipient = 'Sam Kauffman <mail@samvk.com>';
    const subject = 'You\'ve received a new message from SamVK!';

    const bodyHtml = `<html>
    <head>
        <title>SamVK - Message</title>

        <style>
            .body {
                width: 320px;
                max-width: calc(100% - 140px);
                padding: 50px 35px 25px;
                font-size: 16px;
                color: #575757;
                background-color: #F8F8F8;
                border-width: 65px 35px;
                border-style: solid;
                border-color: #EC412C;

            }
            .text-center {
                text-align: center;
            }
            .title {
                display: inline-block;
                width: 55px;
                margin-right: 10px;
                font-weight: 600;
            }
            .logo {
                width: 120px;
                padding-bottom: 30px;
            }
            .info, .line {
                width: 300px;
                max-width: 100%;
                margin: 0 auto;
            }
            .info {
                padding-left: 20px;
            }
            .line {
                border-left: 4px solid transparent;
                border-right: 4px solid transparent;
                border-top: 4px solid #EF6250;
                height: 0;
            }
            .copyright {
                padding-top: 20px;
                font-size: 12px;
                font-weight: 600;
            }
        </style>
    </head>
    <body>
        <div class='body'>
            <div class='text-center'>
                <img class='logo' alt='SamVK' src='https://samvk.com/img/logo.png' />
            </div>
            <div class='info'>
                <p><span class='title'>Name</span> ${name}</p>
                <p><span class='title'>Email</span> ${email}</p>
                <p><span class='title'>Phone</span> ${phone}</p>
            </div>
            <div class='line'></div>
            <p>${message}</p>
            <p class='copyright text-center'>2019 &copy; SamVK</p>
        </div>
    </body>
</html>`;

// fallback for non-HTML email clients
    const bodyText = `
Name: ${name}
Email: ${email}
Phone: ${phone}
Message: ${message}`;

    const charset = 'UTF-8';

    return {
        Source: sender,
        Destination: {
            ToAddresses: [recipient],
        },
        Message: {
            Subject: {
                Data: subject,
                Charset: charset,
            },
            Body: {
                Html: {
                    Data: bodyHtml,
                    Charset: charset,
                },
                Text: {
                    Data: bodyText,
                    Charset: charset,
                },
            },
        },
    };
};

exports.handler = async (event) => {
    try {
        AWS.config.update({
            apiVersions: { ses: '2010-12-01' },
            region: 'us-east-1',
        });

        const body = JSON.parse(event.body);
        const emailParams = makeEmailParams(body);
        const sendEmailResponse = await new AWS.SES().sendEmail(emailParams).promise();

        return successResponse({ messageId: sendEmailResponse.MessageId });
    } catch (err) {
        return errorResponse({ message: 'Failed to send message.', errorMessage: err.message });
    }
};
