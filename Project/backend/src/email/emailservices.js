import nodemailer from "nodemailer";

export default const sendEmail = ()=>{
// Create a test account or replace with real credentials.
const transporter = nodemailer.createTransport({
    host: "gmail",
    auth: {
        user: "a",
        pass: "jn7jnAPss4f63QBp6D",
    },
});

// Wrap in an async IIFE so we can use await.
async () => {
    const info = await transporter.sendMail({
        from: '"ahmedhat"',
        to: "bar@example.com, baz@example.com",
        subject: "Hello ✔",
        text: "Hello world?", // plain‑text body
        html: "<b>Hello world?</b>", // HTML body
    });

    console.log("Message sent:", info.messageId);
};
}