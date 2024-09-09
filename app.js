// app.js
const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes'); // Import routes

const app = express();

// Middleware để phân tích cú pháp dữ liệu JSON
app.use(bodyParser.json());

// Sử dụng route cho người dùng
app.use('/api', userRoutes);

// Khởi chạy server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server đang chạy trên cổng ${PORT}`);
});
