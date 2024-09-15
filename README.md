---

This is a simple backend API built with Node.js and Express.js for managing items. The API allows you to add, delete, and fetch items stored in a local JSON file.

## Features

- Fetch all items
- Add a new item
- Delete an existing item

## Installation

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v20 or higher)
- [npm](https://www.npmjs.com/)

### Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/sabin6969/Backend-internship-task
   ```

2. Navigate to the project directory:

   ```bash
   cd Backend-internship-task
   ```

3. Install the required dependencies:

   ```bash
   npm install
   ```

4. Run the server:

   ```bash
   npm start
   ```

   By default, the server will run on `http://localhost:4000`.

## API Endpoints

### 1. Fetch All Items

- **URL:** `/api/v1/item/getAllItems`
- **Method:** `GET`
- **Description:** Retrieves all items from the JSON file.
- **Response:**
  - **200 OK**: Returns a list of items.

### 2. Add Item

- **URL:** `/api/v1/item/addItem`
- **Method:** `POST`
- **Description:** Adds a new item to the JSON file.
- **Request Body:**
  - `id`: (integer) Unique identifier for the item
  - `itemName`: (string) Name of the item
- **Response:**
  - **200 OK**: Item successfully added.
  - **400 Bad Request**: Missing or invalid data.

### 3. Delete Item

- **URL:** `/api/v1/item/deleteItem/:id`
- **Method:** `DELETE`
- **Description:** Deletes an item by its `id`.
- **URL Parameter:**
  - `id`: (integer) Unique identifier of the item to be deleted.
- **Response:**
  - **200 OK**: Item successfully deleted.
  - **400 Bad Request**: Invalid or non-existent `id`.


## License

This project is licensed under the MIT License.

---

This README provides an overview of the project setup, usage, and API details.
