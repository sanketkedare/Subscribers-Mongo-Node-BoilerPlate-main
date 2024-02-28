# Get Youtube Subcriber - NODE JS
### Capstone Project | **Almabetter** | Full Stack Web Developement

A web service has been developed using the popular JavaScript framework Node.js, coupled with a MongoDB database. This project proves valuable for retrieving data on YouTube subscribers from a specific channel. Diverse routing configurations are employed to handle various types of data. This straightforward backend project utilizes Node.js to manage all configurations, assisted by the versatile JavaScript library Express.js for creating REST API services. MongoDB is employed for data storage, enabling the storing and retrieval of data from the database. The web service is accessible at "https://get-youtube-subscribers.onrender.com."


## Table of Contents
- [Introduction](#introduction)
- [Installation](#installation)
- [Overview](#overview)
- [Routes](#routes)




## Introduction

*Project Introduction Here*


## Installation

1. Clone the repository:

    ```
    git clone https://github.com/your-username/your-repo.git
    ```

2. Navigate to the project folder:

    ```
    cd your-repo
    ```

3. Install dependencies:

    ```
    npm install
    ```




## Overview:

The project is structured into various components for effective organization and development.

1. Source Code Folder:
The "src" folder contains essential elements for the application's functionality.

Controllers: "SubscriberRoutes.js" manages routes for "/subscriberRoutes."
Models: "subscribers.js" defines the database schema.
App Configuration: "app.js" configures the API.
Database Connection: "createDatabase.js" establishes a connection.
Data Storage: "data.js" holds relevant project data.
Main File: "index.js" serves as the primary execution file.


2. Project Configuration:
The project directory encompasses key files and folders.

Node Modules: "node_modules" stores project dependencies.
GitHub Ignoring: ".gitignore" specifies files to exclude when pushing to GitHub.
Dependency Details: "package-lock.json" records precise dependency versions.
Dependency Management: "package.json" lists project dependencies and scripts.
Documentation: "README.md" provides additional project information.


3. Functional Components:
The project includes distinct modules for various purposes.

Routing Management: "SubscriberRoutes.js" handles routes for subscriber-related functionalities.
Database Schema: "subscribers.js" defines the structure for the MongoDB database.
API Configuration: "app.js" sets up configurations for the API.
Database Interaction: "createDatabase.js" establishes a connection for database operations.
Data Storage: "data.js" houses relevant data for the project.
Execution Entry: "index.js" acts as the primary entry point for the application.


## Routes

- "/subscribers"      : Getting All Subscribers
- "/subscribers/name" : Getting Subscribers by Name
- "/subscribers/:id"  : Getting Subscribers by ID


© Sanket Kedare
