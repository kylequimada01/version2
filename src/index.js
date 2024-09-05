

import express from 'express'
const port = process.env.PORT || 3000;

const app = express();

// Define your personal details
const firstName = 'kyle';
const lastName = 'quimada';
const age = 23;
const schoolEmail = 'kylequimada@phinmaed.com';

// Route handlers
app.get('/firstname', (req, res) => {
    res.send(firstName.toUpperCase());
});

app.get('/lastname', (req, res) => {
    res.send(lastName.toUpperCase());
});

app.get('/age', (req, res) => {
    res.send(`${age}`);
});

app.get('/schoolemail', (req, res) => {
    res.send(schoolEmail);
});

app.get('/mydata', (req, res) => {
    res.json({
        first_name: firstName.toUpperCase(),
        last_name: lastName.toUpperCase(),
        age: age,
        school_email: schoolEmail
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});