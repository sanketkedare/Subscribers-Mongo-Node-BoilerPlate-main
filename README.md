# Get Youtube Subcriber - NODE JS

### Capstone Project | **Almabetter** | Full Stack Web Developement

A web service has been developed using the popular JavaScript framework Node.js, coupled with a MongoDB database. This project proves valuable for retrieving data on YouTube subscribers from a specific channel. Diverse routing configurations are employed to handle various types of data. This straightforward backend project utilizes Node.js to manage all configurations, assisted by the versatile JavaScript library Express.js for creating REST API services. MongoDB is employed for data storage, enabling the storing and retrieval of data from the database. The web service is accessible at "https://subscribers-mongo-node-boilerplate-main.onrender.com/subscribers."

## Table of Contents

- [Introduction](#introduction)
- [Installation](#installation)
- [Description](#description)
- [Routes](#routes)
- [Mocha-Report](#mocha-report)

## Introduction

     A capstone project focusing on backend web development has successfully created a web service using the widely used JavaScript framework, Node.js, in conjunction with a MongoDB database. This initiative has proven its effectiveness in fetching data related to YouTube subscribers from a designated channel. The project incorporates diverse routing configurations to efficiently manage different data types. Leveraging Node.js for comprehensive configuration management, the project also utilizes the versatile Express.js JavaScript library to facilitate the creation of REST API services. The MongoDB database serves as a reliable storage solution, enabling seamless storage and retrieval of data.

      The "Get YouTube Subscriber" project has been meticulously structured to adhere to established standards, with its components thoughtfully organized within the root folder. The "src" directory encompasses key elements such as "Controllers," exemplified by "SubscriberRoutes.js," which proficiently manages routes for "/subscriberRoutes." The "Models" section, embodied by "subscribers.js," defines the database schema, while the "App Configuration" is handled by "app.js," configuring the API. The "Database Connection" aspect is established through "createDatabase.js," ensuring a robust connection. Data storage is efficiently managed by "data.js," housing relevant project data, and the pivotal execution file, "index.js," resides as the primary file in this structure.


                In addition to the project's core structure, the "node_modules" directory stores essential project dependencies, and the ".gitignore" file specifies excluded files when pushing to GitHub. Detailed dependency information is recorded in "package-lock.json," capturing precise versions, while "package.json" serves as the platform for listing dependencies and scripts. Lastly, comprehensive project details and guidance are encapsulated in "README.md," providing additional information for users and developers. This well-organized structure ensures clarity, maintainability, and seamless collaboration throughout the development process.

## Installation

➡️ Clone the repository:

    ```
    git clone git@github.com:sanketkedare/Subscribers-Mongo-Node-BoilerPlate-main.git
    ```

➡️ Install dependencies:

    ```
    npm install
    ```

## Description:

### The project is structured into various components for effective organization and development.

**♦️ Source Code Folder:**
_The "src" folder contains essential elements for the application's functionality._

- Controllers: "SubscriberRoutes.js" manages routes for "/subscriberRoutes."
- Models: "subscribers.js" defines the database schema.
- App Configuration: "app.js" configures the API.
- Database Connection: "createDatabase.js" establishes a connection.
- Data Storage: "data.js" holds relevant project data.
- Main File: "index.js" serves as the primary execution file.

**♦️ Project Configuration:**
_The project directory encompasses key files and folders._

- Node Modules: "node_modules" stores project dependencies.
- GitHub Ignoring: ".gitignore" specifies files to exclude when pushing to GitHub.
- Dependency Details: "package-lock.json" records precise dependency versions.
- Dependency Management: "package.json" lists project dependencies and scripts.
- Documentation: "README.md" provides additional project information.

**♦️ Functional Components:**
_The project includes distinct modules for various purposes._

- Routing Management: "SubscriberRoutes.js" handles routes for subscriber-related functionalities.
- Database Schema: "subscribers.js" defines the structure for the MongoDB database.
- API Configuration: "app.js" sets up configurations for the API.
- Database Interaction: "createDatabase.js" establishes a connection for database operations.
- Data Storage: "data.js" houses relevant data for the project.
- Execution Entry: "index.js" acts as the primary entry point for the application.

## Routes

- "/subscribers" : Getting All Subscribers
- "/subscribers/name" : Getting Subscribers by Name
- "/subscribers/:id" : Getting Subscribers by ID

## Mocha-Report

© Sanket Kedare
