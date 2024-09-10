// Import the Express module
import express from "express";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { isContentTypeApplicationJSON } from "./middleware/utils.js";
import authRouteMiddleware from "./middleware/authRoute.js";
import authRoutes from "./routes/auth.js";

// Import the index routes module
import indexRoutes from "./routes/index.js";
import usersRoutes from "./routes/users.js";

// Create an Express application
const app = express();

// Use the PORT environment variable or 3000
const PORT = process.env.PORT || 3000;

// Use the routes module
app.use("/", indexRoutes);
app.use(express.urlencoded({ extended: false })); // To parse the incoming requests with urlencoded payloads. For example, form data

// This should be declared under app.use(urlencoded({ extended: false }));
app.use(express.json()); // To parse the incoming requests with JSON payloads. For example, REST API requests
// This should be declared under app.use(express.json());
const swaggerOptions = {
    definition: {
      openapi: "3.0.0",
      info: {
        title: "User Management System API",
        version: "0.0.1",
        description: "A User Management System API",
        contact: {
          name: "Greedy Guppies",
        },
      },
      servers: [
        {
          url: "http://localhost:3000",
        },
      ],
    },
    apis: ["./routes/*.js"],
};
  
  // This should be declared under const swaggerOptions = { ... };
const swaggerDocs = swaggerJSDoc(swaggerOptions);
app.use(isContentTypeApplicationJSON);
app.use("/api/users", authRouteMiddleware, usersRoutes);
// This should be declared under app.use("/api/institutions", institutionRoutes);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use("/api/auth", authRoutes);

// Start the server on port 3000
app.listen(PORT, () => {
  console.log(
    `Server is listening on port ${PORT}. Visit http://localhost:${PORT}`
  );
});

// Export the Express application. May be used by other modules. For example, API testing
export default app;