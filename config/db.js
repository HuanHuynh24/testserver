const sql = require('mssql');

const config = {
    user: 'yourUsername',
    password: 'yourPassword',
    server: 'localhost',
    database: 'yourDatabase',
    options: {
        encrypt: true,
        trustServerCertificate: true
    }
};

const connectDB = async () => {
    try {
        const pool = await sql.connect(config);
        console.log('Kết nối thành công đến SQL Server');
        return pool;
    } catch (err) {
        console.error('Lỗi kết nối SQL Server:', err);
    }
};

module.exports = connectDB;
