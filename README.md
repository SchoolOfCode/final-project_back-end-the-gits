# School of Code Final Project (back-end)


## Our House - Your one stop shop to organise your home

The brief of our project was to find a solution to a real life problem. As a team, we ideated and reflected on our day to day needs and came up with Our House, and app that helps you organise your household. On the first iteration this included a shared shopping list. The second iteration included a chores list, future iterations will include a shared events/calendar.

## Overview

A back-end server written with express.js to manage the connection to a mongodb database
A REST api availabe for our front-end using no-sql Mongo Database with document objects.

# Usage

## API Reference

| Method | Path             | Additional Info | Result                                         | 
| ------ | ---------------- | --------------- | ---------------------------------------------- |
| GET    | /api/v1/shopping-list/:id         |    | returns all items by shop name                                      | |
| POST    | /api/v1/shopping-list/          | Posts to the database using unique user id  | Creates a new item                                     |  |
| PATCH    | /api/v1/shopping-list/         | Posts to the database using unique user id    | Edits an item to mark as completed/incomplete                                     |


## Example GET Response

```javaScript

{
    "_id": "********",
    "username": "******@hotmail.com",
    "item": "Paint",
    "shoppingListName": "Asda",
    "completed": false,
    "sub": "**************",
    "createdAt": "2022-08-11T14:34:24.922Z",
    "updatedAt": "2022-08-11T14:34:24.922Z",
    "__v": 0
  }

```



## features

### authors

- [@Alistair McGill](https://github.com/AliMcG)
- [@Abdullahi Mohamoud](https://github.com/Abdu11ahi)
- [@Carlos E Alford](https://github.com/CarlosEAM)
- [@Lee Conroy](https://github.com/leeconroy77)
- [@Mumtaz Obsiye](https://github.com/MumtazO)
- [@Yasar Gulzar](https://github.com/Yasar000)






