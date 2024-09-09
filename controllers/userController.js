// controllers/userController.js
const connectDB = require('../config/db');

// Xử lý thêm người dùng
const addUser = async (req, res) => {
    try {
        const { name, age } = req.body;
        
        // Kết nối SQL Server và thực thi truy vấn
        const pool = await connectDB();
        const result = await pool.request()
            .input('name', sql.VarChar, name)
            .input('age', sql.Int, age)
            .query('INSERT INTO Users (name, age) VALUES (@name, @age)');
        
        res.status(200).send('Thêm người dùng thành công');
    } catch (err) {
        console.error('Lỗi:', err);
        res.status(500).send('Lỗi khi thêm người dùng');
    }
};

module.exports = { addUser };
