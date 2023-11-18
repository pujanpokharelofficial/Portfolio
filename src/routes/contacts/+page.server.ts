import { EMAIL } from "$env/static/private";
import transporter from "$lib/server/emailService";
import type { Actions } from "@sveltejs/kit"
export const actions = {
    sendMessage: async ({ request }) => {
        try {
            const data = await request.formData();
            const email = data.get('email');
            const phone_number = data.get('phone_number');
            const message = data.get('message');
            const html = `
                        <h1> Message </h1>
                        <p>${message}</p>
                        <hr />
                        <span> Email: <strong>${email}</strong> <br />
                        <span> Phone Number: <strong>${phone_number}</strong>
                          `
            const email_message = {
                from: EMAIL,
                to: EMAIL,
                subject: "Someone send you a message, from your portfolio !!",
                text: message,
                html,
            }

            send_email(email_message)
        } catch (e) {
            throw new Error(`Error occured while sending your message: \n ${e}`);
        }
    }

} satisfies Actions


async function send_email(data: any) {
    await new Promise((resolve, reject) => {
        transporter.sendMail(data, (err, info) => {
            if (err) return reject(`Cannot send email${err} `);
            resolve(`Email sent ${info}`)
        })

    })
}
