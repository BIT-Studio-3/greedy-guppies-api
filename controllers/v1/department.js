// Create a GET route
const getFood = (req, res) => {
    // req is an object that contains information about the HTTP request. res is an object that contains information about the HTTP response.
    return res.status(200).json({
      message: "FoodS",
    });
  };
  
  // Export the getIndex function. May be used by other modules. For example, the index routes module
  export { getFood };
  
  import { PrismaClient, Prisma} from "@prisma/client";
  
  //Create a new Instance of PrismaClient
  const prisma = new PrismaClient();
  
  // Add this code under const prisma = new PrismaClient();
  const createFood = async (req, res) => {
    // Try/catch blocks are used to handle exceptions
    try {
      // Create a new Food
      await prisma.Food.create({
        // Data to be inserted
        data: {
          Name: req.body.Name,
          Description: req.body.lastName,
        },
      });
  
      // Get all Foods from the Food table
      const newFoods = await prisma.institution.findMany();
  
      // Send a JSON response
      return res.status(201).json({
        message: "Food successfully created",
        data: newFoods,
      });
    } catch (err) {
      if (err instanceof Prisma.PrismaClientKnownRequestError) {
        {
          if (err.code === "P2002") {
            return res.status(409).json({
              message: "Food with the same name already exists",
            });
          }
        }
      } else {
        return res.status(500).json({
          message: err.message,
        });
      }
    }
  };
  
  // Add this code under the createFood function
  const findFoods = async (req, res) => {
    try {
      const Foods = await prisma.Food.findMany();
  
      // Check if there are no institutions
      if (!Foods) {
        return res.status(404).json({ message: "No Foods found" });
      }
  
      return res.status(200).json({
        data: Foods,
      });
    } catch (err) {
      return res.status(500).json({
        message: err.message,
      });
    }
  };
  
  // Add this code under the getInstitutions function
  const findFood = async (req, res) => {
    try {
      const Food = await prisma.Food.findUnique({
        where: { id: req.params.id },
      });
  
      // Check if there is no institution
      if (!Food) {
        return res.status(404).json({
          message: `No Food with the id: ${req.params.id} found`,
        });
      }
  
      return res.status(200).json({
        data: institution,
      });
    } catch (err) {
      return res.status(500).json({
        message: err.message,
      });
    }
  };
  
  // Add this code under the getInstitution function
  const updateFood = async (req, res) => {
    try {
      // Find the institution by id
      let Food = await prisma.institution.findUnique({
        where: { id: req.params.id },
      });
  
      // Check if there is no institution
      if (!Food) {
        return res.status(404).json({
          message: `No Food with the id: ${req.params.id} found`,
        });
      }
  
      // Update the institution
      Food = await prisma.Food.update({
        where: { id: req.params.id },
        data: {
          // Data to be updated
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          email: req.body.email,
          password: req.body.password,
        },
      });
  
      return res.status(200).json({
        message: `Food with the id: ${req.params.id} successfully updated`,
        data: institution,
      });
    } catch (err) {
      if (err instanceof Prisma.PrismaClientKnownRequestError) {
        if (err.code === "P2002") {
          return res.status(409).json({
            message: "Food with the same name already exists",
          });
        }
      } else {
        return res.status(500).json({
          message: err.message,
        });
      }
    }
  };
  
  // Add this code under the updateInstitution function
  const deleteFood = async (req, res) => {
    try {
      const Food = await prisma.Food.findUnique({
        where: { id: req.params.id },
      });
  
      if (!Food) {
        return res.status(404).json({
          message: `No Food with the id: ${req.params.id} found`,
        });
      }
  
      await prisma.Food.delete({
        where: { id: req.params.id },
      });
  
      return res.json({
        message: `Food with the id: ${req.params.id} successfully deleted`,
      });
    } catch (err) {
      return res.status(500).json({
        message: err.message,
      });
    }
  };
  
  // Add this code under the deleteInstitution function
  export { createFood, findFoods, findFood, updateFood, deleteFood };
  