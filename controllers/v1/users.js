// Create a GET route
const getUser = (req, res) => {
  // req is an object that contains information about the HTTP request. res is an object that contains information about the HTTP response.
  return res.status(200).json({
    message: "USERS",
  });
};

// Export the getIndex function. May be used by other modules. For example, the index routes module
export { getUser };

import { PrismaClient, Prisma} from "@prisma/client";

//Create a new Instance of PrismaClient
const prisma = new PrismaClient();

// Add this code under const prisma = new PrismaClient();
const createUser = async (req, res) => {
  // Try/catch blocks are used to handle exceptions
  try {
    // Create a new user
    await prisma.user.create({
      // Data to be inserted
      data: {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password,
      },
    });

    // Get all Users from the User table
    const newUsers = await prisma.institution.findMany();

    // Send a JSON response
    return res.status(201).json({
      message: "User successfully created",
      data: newUsers,
    });
  } catch (err) {
    if (err instanceof Prisma.PrismaClientKnownRequestError) {
      {
        if (err.code === "P2002") {
          return res.status(409).json({
            message: "User with the same name already exists",
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

// Add this code under the createUser function
const findUsers = async (req, res) => {
  try {
    const users = await prisma.user.findMany();

    // Check if there are no institutions
    if (!users) {
      return res.status(404).json({ message: "No users found" });
    }

    return res.status(200).json({
      data: users,
    });
  } catch (err) {
    return res.status(500).json({
      message: err.message,
    });
  }
};

// Add this code under the getInstitutions function
const findUser = async (req, res) => {
  try {
    const user = await prisma.user.findUnique({
      where: { id: req.params.id },
    });

    // Check if there is no institution
    if (!user) {
      return res.status(404).json({
        message: `No user with the id: ${req.params.id} found`,
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
const updateUser = async (req, res) => {
  try {
    // Find the institution by id
    let user = await prisma.institution.findUnique({
      where: { id: req.params.id },
    });

    // Check if there is no institution
    if (!user) {
      return res.status(404).json({
        message: `No user with the id: ${req.params.id} found`,
      });
    }

    // Update the institution
    user = await prisma.user.update({
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
      message: `User with the id: ${req.params.id} successfully updated`,
      data: institution,
    });
  } catch (err) {
    if (err instanceof Prisma.PrismaClientKnownRequestError) {
      if (err.code === "P2002") {
        return res.status(409).json({
          message: "User with the same name already exists",
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
const deleteUser = async (req, res) => {
  try {
    const user = await prisma.user.findUnique({
      where: { id: req.params.id },
    });

    if (!user) {
      return res.status(404).json({
        message: `No user with the id: ${req.params.id} found`,
      });
    }

    await prisma.user.delete({
      where: { id: req.params.id },
    });

    return res.json({
      message: `User with the id: ${req.params.id} successfully deleted`,
    });
  } catch (err) {
    return res.status(500).json({
      message: err.message,
    });
  }
};

// Add this code under the deleteInstitution function
export { createUser, findUsers, findUser, updateUser, deleteUser };
