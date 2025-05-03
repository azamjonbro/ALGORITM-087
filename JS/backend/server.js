const express = require('express');
const fs = require('fs');
const path = require('path');
const multer = require('multer');
const app = express();
const cors = require('cors');
const PORT = 3000;

const booksFile = path.join(__dirname, 'books.json');

// Middleware
app.use(express.json());
app.use('/uploads', express.static('uploads'));
app.use(cors({ origin: 'http://127.0.0.1:5500' }));
// Multer config
const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, 'uploads/'),
    filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname)
});
const upload = multer({ storage });

// 📥 CREATE
app.post('/books', (req, res) => {
    const { title, description,image, quantity, price, sale, salePrice } = req.body;

    if (!title || !description || !quantity || !price) {
        return res.status(400).json({ message: 'Majburiy maydonlar: title, description, quantity, price' });
    }

    fs.readFile(booksFile, 'utf8', (err, data) => {
        if (err) return res.status(500).json({ message: 'Faylni o‘qishda xatolik' });

        let books = JSON.parse(data);
        const newBook = {
            id: Date.now(),
            title,
            description,
            quantity: Number(quantity),
            price: Number(price),
            sale: sale?sale: false,
            salePrice: sale ? Number(salePrice) : null,
            image
        };

        books.push(newBook);

        fs.writeFile(booksFile, JSON.stringify(books, null, 2), err => {
            if (err) return res.status(500).json({ message: 'Faylga yozishda xatolik' });
            res.status(201).json(newBook);
        });
    });
});

// 📖 READ ALL
app.get('/book', (req, res) => {
    fs.readFile(booksFile, 'utf8', (err, data) => {
        if (err) return res.status(500).json({ message: 'Faylni o‘qishda xatolik' });

        const books = JSON.parse(data);
        res.json(books);
    });
});

// 📖 READ ONE
app.get('/books/:id', (req, res) => {
    fs.readFile(booksFile, 'utf8', (err, data) => {
        if (err) return res.status(500).json({ message: 'Faylni o‘qishda xatolik' });

        const books = JSON.parse(data);
        const book = books.find(b => b.id === parseInt(req.params.id));
        if (!book) return res.status(404).json({ message: 'Kitob topilmadi' });

        res.json(book);
    });
});

// ✏️ UPDATE
app.put('/books/:id', upload.single('image'), (req, res) => {
    const { title, description, quantity, price, sale, salePrice } = req.body;
    const image = req.file ? req.file.path : null;

    fs.readFile(booksFile, 'utf8', (err, data) => {
        if (err) return res.status(500).json({ message: 'Faylni o‘qishda xatolik' });

        let books = JSON.parse(data);
        const index = books.findIndex(b => b.id === parseInt(req.params.id));
        if (index === -1) return res.status(404).json({ message: 'Kitob topilmadi' });

        const updatedBook = {
            ...books[index],
            title: title || books[index].title,
            description: description || books[index].description,
            quantity: quantity ? Number(quantity) : books[index].quantity,
            price: price ? Number(price) : books[index].price,
            sale: sale !== undefined ? sale === 'true' : books[index].sale,
            salePrice: salePrice ? Number(salePrice) : books[index].salePrice,
            image: image || books[index].image
        };

        books[index] = updatedBook;

        fs.writeFile(booksFile, JSON.stringify(books, null, 2), err => {
            if (err) return res.status(500).json({ message: 'Faylga yozishda xatolik' });
            res.json(updatedBook);
        });
    });
});

// 🗑 DELETE
app.delete('/books/:id', (req, res) => {
    fs.readFile(booksFile, 'utf8', (err, data) => {
        if (err) return res.status(500).json({ message: 'Faylni o‘qishda xatolik' });

        let books = JSON.parse(data);
        const index = books.findIndex(b => b.id === parseInt(req.params.id));
        if (index === -1) return res.status(404).json({ message: 'Kitob topilmadi' });

        const deletedBook = books.splice(index, 1);

        fs.writeFile(booksFile, JSON.stringify(books, null, 2), err => {
            if (err) return res.status(500).json({ message: 'Faylga yozishda xatolik' });
            res.json({ message: 'Kitob o‘chirildi', book: deletedBook[0] });
        });
    });
});

app.listen(PORT, () => {
    console.log(`Server ishlayapti: http://localhost:${PORT}`);
});
