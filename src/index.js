import express from 'express';

const port = process.env.PORT || 3000;
const app = express();

// Define your personal details
const subjectCode = 'ITE314';
const examDetails = 'P2';
const nodeMessage = 'NODEJS';

// Route handlers
app.get('/subject', (req, res) => {
    res.send(subjectCode.toUpperCase());
});

app.get('/exam', (req, res) => {
    res.send(examDetails);
});

app.get('/node', (req, res) => {
    res.send(nodeMessage);
});

app.get('/mydata', (req, res) => {
    res.json({
        subject: subjectCode.toUpperCase(),
        exam: examDetails,
        node: nodeMessage
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
