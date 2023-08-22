## Backend

### Stack & Libraries
- **Main Framework**: [Node.js](https://nodejs.org/)
- **Architecture**: Hexagonal Architecture (Ports and Adapters)
- **Database**: [MongoDB](https://www.mongodb.com/) accessed via [Mongoose](https://mongoosejs.com/)
- **Session Management**: JWT
- **Validation**: [Joi](https://joi.dev/)
- **Server**: [Express](https://expressjs.com/)
  
### Features
- **JWT Session**: Securely authenticate and manage user sessions using JSON web tokens.
- **Entities**: 
  - **Post**: Create, fetch, and manage blog posts.

### Local Development with Docker
1. Install the necessary packages:
```bash
npm install
```
2. Use Docker to set up the MongoDB instance:
```bash
docker run --name easypost-mongodb -p 27017:27017 -d mongo
```
3. Seed the database with mock data by accessing:
```http
GET http://localhost:YOUR_PORT/api/seed
```
Replace `YOUR_PORT` with the port on which your backend server is running.

4. To run the server in development mode:
```bash
npm run dev
```
5. Build the server for production:
```bash
npm run build
```
6. Start the production server:
```bash
npm start
```

---

Please replace `YOUR_PORT` with the actual port on which your backend server is configured to run. This updated README provides instructions for using Docker to set up the MongoDB instance and seeding the database with mock data using the `/api/seed` endpoint.

---
