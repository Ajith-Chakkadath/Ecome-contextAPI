const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');  
const dotenv = require('dotenv');
const swaggerUi = require('swagger-ui-express');
const swaggerSpecs = require('./swagger');
const app = express();
const PORT = process.env.PORT || 4000;
const authRoute = require('./Router/userRoutes');
const productRoute = require('./Router/productRoutes')
const sellerRoutes = require('./Router/sellerProductRoutes')
// const bodyParser = require('body-parser');

dotenv.config();

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connection.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});

mongoose.connection.once('open', () => {
  console.log('Connected to MongoDB');
});
// app.use(bodyParser.json());
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));

app.use(cors());

app.use('/', productRoute);
// app.use('/' ,sellerRoutes);
app.use('/users', cors(), authRoute);


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
