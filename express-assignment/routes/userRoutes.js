const express = require('express');
const router = express.Router();

let User = [{ id: 1, name: "John Doe", email: "john@example.com" }];

router.get('/', (req, res) => {
    res.json(User);
});

router.post('/register', (req, res) => {
    const { email, password } = req.body;

    const user = new User({ email, password });
    user.save()
        .then(() => {
            res.json({ message: 'User created successfully' });
        })
        .catch((err) => {
            res.status(400).json({ message: err.message });
        });
});

router.put('/update/:id', (req, res) => {
    const { email, password } = req.body;
    const { id } = req.params;

    User.findByIdAndUpdate(id, { email, password })
        .then(() => {
            res.json({ message: 'User updated successfully' });
        })
        .catch((err) => {
            res.status(400).json({ message: err.message });
        });
});

router.delete('/delete/:id', (req, res) => {
    const { id } = req.params;

    User.findByIdAndDelete(id)
        .then(() => {
            res.json({ message: 'User deleted successfully' });
        })
        .catch((err) => {
            res.status(400).json({ message: err.message });
        });
});

module.exports = router;