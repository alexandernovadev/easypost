# EasyPost App

A modern web application for blogging that employs a hexagonal architecture in the backend, JWT session management, and an interactive frontend. Keep reading to discover more about the technology stack and functionalities.


## Website: [https://www.easypostapp.com](https://www.easypostapp.com)
## Production Deployment

### Backend (Heroku)
1. Connect your Heroku account and create a new app.
2. Deploy your backend to Heroku using Git.

### Frontend (Netlify)
1. Connect your Netlify account and create a new site.
2. Deploy your frontend by linking your GitHub repository.


---

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

## Frontend

### Stack & Libraries
- **Framework**: [React](https://reactjs.org/) with [React Hooks](https://reactjs.org/docs/hooks-intro.html)
- **Form Management**: [React Hook Form](https://react-hook-form.com/)
- **Bundler/Builder**: [Vite](https://vitejs.dev/)
- **Styling**: [Styled Components](https://styled-components.com/) & Atomic Design
- **State Management**: React Context
- **Routing**: [React Router Dom](https://reactrouter.com/web/guides/quick-start)

### Features
- **Fetch All Posts**: View a list of all available blog posts.
- **Create Post**: Easily create a new blog post.
- **View My Posts**: View and manage your own blog posts.

### Local Development
1. Install the necessary packages:
```bash
npm install
```
2. To start the development server:
```bash
npm run dev
```
3. Build for production:
```bash
npm run build
```
4. Preview the production build:
```bash
npm run preview
```

### Coding Standards
This project uses [Prettier](https://prettier.io/) to maintain coding style consistency. Run the linter to identify and fix potential issues:
```bash
npm run lint
```

## Conclusion

For the discerning developer who values architectural integrity, efficient development cycles, and scalability, this blogging app represents more than just a collection of cutting-edge tools—it epitomizes modern development ethos.

The Hexagonal Architecture in the backend ensures that our application remains flexible, maintainable, and scalable. By decoupling core logic from external services, ports, and adapters, it allows for a clean separation of concerns, ensuring that changing one aspect of the system (e.g., the database) doesn't necessitate massive rewrites elsewhere. This approach not only streamlines development, but also makes unit testing more straightforward, contributing to the overall robustness and resilience of the system.

JWT session management enhances security, ensuring that data transactions remain authenticated and integral. Leveraging MongoDB through Mongoose offers a schema-based approach to data, allowing for flexibility and efficiency in handling diverse and complex datasets.

On the frontend, the use of React combined with the power of React Hooks offers a declarative UI logic that doesn't skip on performance. React Hook Form provides an optimized and simplified form handling process, while Vite ensures lightning-fast builds and hot module replacement, making the development experience seamless. The styling, managed by Styled Components and informed by the principles of Atomic Design, ensures a user interface that's both beautiful and consistent. This is not just about aesthetics—it's about creating an intuitive, user-friendly experience.

Furthermore, the project's commitment to coding standards through Prettier cannot be understated. It ensures that every line of code adheres to a unified style, making collaboration more efficient and reducing the cognitive load when switching between different parts of the codebase.

In essence, this blogging app isn't just a testament to what's possible with today's technologies—it's a beacon for where web development is headed. For the veteran developer, it offers a playground of best practices and modern techniques. For the newcomer, it serves as a blueprint of how to build applications that are scalable, maintainable, and, above all, user-centric.

So, whether you're diving into the code or simply using the app, know that you're engaging with a project that stands at the forefront of web development's best practices. Happy coding!




