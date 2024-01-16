const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');  // Fix the typo here
const dotenv = require('dotenv');
const swaggerUi = require('swagger-ui-express');
const swaggerSpecs = require('./swagger');
const app = express();
const PORT = process.env.PORT || 4000;
const authRoute = require('./Router/userRoutes');

dotenv.config();

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connection.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});

mongoose.connection.once('open', () => {
  console.log('Connected to MongoDB');
});

app.use(cors());  // Use the correct module
app.use('/api-docs',swaggerUi.serve,swaggerUi.setup(swaggerSpecs))
app.use(bodyParser.json());
app.use('/users', authRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
