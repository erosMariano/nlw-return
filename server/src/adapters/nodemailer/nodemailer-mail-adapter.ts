import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from "nodemailer"

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "a1ff9f2080d083",
        pass:  "4e402188ebdfe7"
    }
});

export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({subject, body}: SendMailData) {
        await transport.sendMail({
            from: "Equipe Feedget <oi@feedget.com>",
            to: "Eros Mariano <erosmariano1@gmail.com>",
            subject: subject,
            html: body,
        })

    }
}