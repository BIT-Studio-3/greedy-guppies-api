/**
 * @file Manages all operations related to users
 * @author logan
 * @description This function creates a new user
 * @param {object} req - The request object
 * @param {object} res - The response object
 * @returns {object} - The response object
 */


import {
    createResource,
    getResources,
    getResource,
    getEmailResource,
    updateResource,
    deleteResource,
  } from "./base.js";
  
  const createUser = async (req, res) =>
    createResource(req, res, "user");
  
  const getUsers = async (req, res) => getResources(req, res, "user");
  
  const getUser = async (req, res) => getResource(req, res, "user");

  const getEmail = async (req, res) => getEmailResource(req, res, "user");
  
  const updateUser = async (req, res) =>
    updateResource(req, res, "user");
  
  const deleteUser = async (req, res) =>
    deleteResource(req, res, "user");
  
  export {
    createUser,
    getUsers,
    getUser,
    getEmail,
    updateUser,
    deleteUser,
  };