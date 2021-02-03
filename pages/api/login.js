export default (req, res) => {
    const {email} = req.body;

    console.log(res.json({ message: `Hello ${email}`}))
}