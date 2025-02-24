let Product = [{ id: 1, name: "Laptop", price: 1200 }];

const getProduct = (req, res) => {
    res.json(Product);
};

const addProduct = (req, res) => {
    const { name, price } = req.body;
    const product = new Product({ name, price });
    product.save()
        .then(() => {
            res.json({ message: 'Product created successfully' });
        })
        .catch((err) => {
            res.status(400).json({ message: err.message });
        });
};

const updateProduct = (req, res) => {
    const { name, price } = req.body;
    const { id } = req.params;

    Product.findByIdAndUpdate
        (id, { name, price })
        .then(() => {
            res.json({ message: 'Product updated successfully' });
        })
        .catch((err) => {
            res.status(400).json({ message: err.message });
        });
};

const deleteProduct = (req, res) => {
    const { id } = req.params;
    Product.findByIdAndRemove(id)
        .then(() => {
            res.json({ message: 'Product deleted successfully' });
        })
        .catch((err) => {
            res.status(400).json({ message: err.message });
        });
};

module.exports = { getProduct, addProduct, updateProduct, deleteProduct };