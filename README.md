# colin-social-network-api


## User Story
AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data

## Description
Social network API is a social network web application where users can share their thoughts, 
reactions to friends, thoughts, and can also create a friend list. This application is built using node.js, and mongoose DB.

## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Author](#author)

## Project URL


## Project Github Repository
https://github.com/ColinNebula/colin-social-network-api/tree/main

## Project Markup
### GET
![18-nosql-homework-demo-04](https://user-images.githubusercontent.com/57843842/138008759-aeb6ae1f-6029-40aa-9bbd-64bbc8496375.gif)
### GET
![18-nosql-homework-demo-01](https://user-images.githubusercontent.com/57843842/138008760-1893485a-7ece-457c-8e19-a3cd3aff2b2f.gif)
### POST PUT DELETE
![18-nosql-homework-demo-02](https://user-images.githubusercontent.com/57843842/138008763-ba251d8f-2781-4b93-93a1-8a5eedf97020.gif)
### POST and DELETE
![18-nosql-homework-demo-03](https://user-images.githubusercontent.com/57843842/138008766-38f4c729-b4bb-404d-9844-823efe34abaa.gif)

## Installation
* Clone or downloads the repository 
* Npm start in node.js to start the server

## Author
Colin Nebula

## Acceptance Criteria
GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia Core for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia Core
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia Core
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list