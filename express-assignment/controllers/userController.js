let User = [{ id: 1, name: "John Doe", email: "john@example.com" }];

const getUsers = (req, res) => {
    res.json(User);
};

const registerUser = (req, res) => {
    const { name, email, password } = req.body;
    if (!name || !email) return res.status(400).json({ message: "Name and email are required" });

    const user = new User({ name, email, password });
    user.save()
        .then(() => {
            res.json({ message: 'User created successfully' });
        })
        .catch((err) => {
            res.status(400).json({ message: err.message });
        });
    };

const updateUser = (req, res) => {
    const { name, email, password } = req.body;
    const { id } = req.params;

    User.findByIdAndUpdate(id, { name, email, password })
        .then(() => {
            res.json({ message: 'User updated successfully' });
        })
        .catch((err) => {
            res.status(400).json({ message: err.message });
        });
    };

const deleteUser = (req, res) => {
    const { id } = req.params;

    User.findByIdAndDelete(id)
        .then(() => {
            res.json({ message: 'User deleted successfully' });
        })
        .catch((err) => {
            res.status(400).json({ message: err.message });
        });
    };

module.exports = { getUsers, registerUser, updateUser, deleteUser };