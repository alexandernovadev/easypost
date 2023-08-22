PRUEBA TÉCNICA BACKEND

Easy Media por el lado del backend deberá disponer lo necesario para suplir todas las funcionalidades del front end, y otras propias de la API para su correcto funcionamiento:

Registro de usuarios con: Nombre, email, contraseña
Inicio de sesión de usuarios.
Creación de mensajes/post únicamente para usuarios registrados y con sesión activa.
Filtrado de mensajes, por usuario logueado, por usuarios registrados,  por fecha y por palabras incluidas en el título.
Cerrar sesión.

La cantidad de endpoints, el uso de status HTTP, manejo de errores, middlewares, JWT, arquitectura, routers, patrones, tablas/colecciones, motor de bd, manejo de estandares, performance, variables de entorno (dev, stage, prod), entre otras, estarán bajo su criterio. El único requerimiento es que se trabaje con NodeJs. Todo esto entrará a formar parte de la evaluación final de su solución.

Consideraciones
Recordar que se debe construir un API Rest, la cual será consumida por el cliente (Angular). En el backend no se debe configurar ningún template, a menos que implemente una solución basada en SSR desde el frontend. Importante implementar swagger o en su defecto compartir un archivo o proyecto en postman con todas las API Rest.

Gestión de la base de datos
La base de datos es suficiente que se maneje de forma local, en caso de realizar un despliegue a algún host de db (por ejemplo mongo Atlas para Mongo DB), esto le dará puntos extras. Sin embargo, el proyecto debe funcionar localmente, por lo que es recomendable (mas no obligatorio), el uso de Docker para este apartado.

Criterios de evaluación
Manejo de Git
Manejo de swagger o en su defecto postman
Conocimiento de NodeJs
Conocimiento de Bases de datos (CRUD, querys ( simples, avanzados), etc…)
Estándares de programación (Código limpio, estructurado, comentarios, JSDoc, declaración semántica, entre otros).
Cumplimiento de los requerimientos (Se evaluará el alcance).
Manejo de autenticación en el backend.
Manejo de excepciones
Estructuras de datos
Validaciones
Estándares web (Verbos HTTP, status, etc…)
Optimización de código.


