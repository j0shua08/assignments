const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/condos', (req, res) => {
    const condos = [
        { id: 1, name: "Sunrise Apartments", location: "Manila", price: 15000 },
        { id: 2, name: "Moonlight Condos", location: "Quezon City", price: 20000 },
        { id: 3, name: "Greenleaf Suites", location: "Pasig", price: 25000 }
    ];
    res.json(condos);
});

app.get('/api/roommates', (req, res) => {
    const roommates = [
        { id: 1, name: "John Doe", gender: "male", condo: "Sunrise Apartments" },
        { id: 2, name: "Jane Smith", gender: "female", condo: "Moonlight Condos" },
        { id: 3, name: "Alex Taylor", gender: "nonbinary", condo: "Greenleaf Suites" }
    ];
    res.json(roommates);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
