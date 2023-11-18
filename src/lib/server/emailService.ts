import { APP_PASSWORD, EMAIL } from "$env/static/private"
import nodemailer from "nodemailer"

const transporter = nodemailer.createTransport({
    service: 'gmail',
    port: 8080,
    secure: false,
    auth: {
        user: EMAIL,
        pass: APP_PASSWORD
    }
})

transporter.verify((error, success) => {
    if (error)
        return console.log("error while creating transporter ", error)
    console.log("transporter setup is done")
})

export default transporter
