import express from 'express';
import storeRoutes from './routes/storeRoutes';
import inventoryRoutes from './routes/inventoryRoutes';
import salesRoutes from './routes/salesRoutes';
import reportRoutes from './routes/reportRoutes';
import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());


const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Store and Inventory Management API',
      version: '1.0.0',
      description: 'API documentation for Store and Inventory Management',
      contact: {
        name: 'Your Name or Team',
        email: 'contact@example.com',
      },
      license: {
        name: 'MIT',
        url: 'https://opensource.org/licenses/MIT',
      },
    },
    servers: [
      {
        url: 'http://localhost:3000',
        description: 'Local server',
      },
    ],
    tags: [
      { name: 'Store', description: 'Store management' },
      { name: 'Inventory', description: 'Inventory management' },
      { name: 'Sales', description: 'Sales operations' },
      { name: 'Reports', description: 'Reporting endpoints' },
    ],
  },
  apis: ['./src/routes/*.ts', './src/models/*.ts'],
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
// Serve raw Swagger JSON
app.get('/swagger.json', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(swaggerSpec);
});


app.use('/stores', storeRoutes);
app.use('/inventory', inventoryRoutes);

app.use('/sales', salesRoutes);
app.use('/reports', reportRoutes);

app.get('/', (req, res) => {
  res.send('Store and Inventory Management API');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
