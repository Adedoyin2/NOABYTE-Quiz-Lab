
/* ========== Question bank: 100 unique tech questions ========== */
const QUESTION_BANK = [
    { id:1, category:'FND', question:'What does HTML stand for?', 
      options:['Hyper Text Markup Language','Home Tool Markup Language',
        'Hyperlinks and Text Markup Language','High Tech Machine Language'], 
        answer:'Hyper Text Markup Language', explanation:'HTML structures content on the web.'},
  { id:101, category:'FND', question:'What does HTML stand for?', options:['Hyper Text Markup Language','Home Tool Markup Language','Hyperlinks and Text Markup Language','High Tech Machine Language'], answer:'Hyper Text Markup Language', explanation:'HTML structures content on the web.'},
  {id:101, category:'BND', question:'What is the main purpose of Node.js in backend development?', options:['Running JavaScript on the server','Styling webpages','Managing databases only','Rendering HTML'], answer:'Running JavaScript on the server', explanation:'Node.js allows JavaScript to run on the server using the V8 engine.'},
  {id:102, category:'BND', question:'Which module is used to create a basic HTTP server in Node.js?', options:['http','fs','os','events'], answer:'http', explanation:'The built-in http module allows creating HTTP servers.'},
  {id:103, category:'BND', question:'What does npm stand for?', options:['Node Package Manager','New Project Manager','Network Package Module','Node Process Machine'], answer:'Node Package Manager', explanation:'npm is the default package manager for Node.js.'},
  {id:104, category:'BND', question:'Which keyword is used to handle asynchronous operations in modern JS?', options:['async/await','then/catch','promise only','callback'], answer:'async/await', explanation:'async/await makes asynchronous code easier to read and write.'},
  {id:105, category:'BND', question:'What is Express.js?', options:['A backend framework','A frontend library','A database','A package manager'], answer:'A backend framework', explanation:'Express.js is a minimal and flexible Node.js web application framework.'},
  {id:106, category:'BND', question:'Which method is used to parse JSON bodies in Express?', options:['express.json()','express.body()','app.parse()','app.useJSON()'], answer:'express.json()', explanation:'express.json() parses incoming JSON request bodies.'},
    {id:107, category:'BND', question:'What does REST stand for?', options:['Representational State Transfer','Random State Transition','Remote Security Testing','Resource Server Technology'], answer:'Representational State Transfer', explanation:'REST defines architectural constraints for scalable APIs.'},
    {id:108, category:'BND', question:'Which HTTP method is idempotent?', options:['GET','POST','PATCH','OPTIONS'], answer:'GET', explanation:'GET requests should not change server state, making them idempotent.'},
    {id:109, category:'BND', question:'What is middleware in Express?', options:['A function that handles requests','A CSS framework','A Node engine','A debugging tool'], answer:'A function that handles requests', explanation:'Middleware functions process requests/responses before they reach a route.'},
    {id:110, category:'BND', question:'Which database is NoSQL?', options:['MongoDB','MySQL','PostgreSQL','Oracle'], answer:'MongoDB', explanation:'MongoDB is a popular NoSQL document database.'},
    {id:111, category:'BND', question:'Which library is used to interact with MongoDB in Node?', options:['Mongoose','Sequelize','Prisma','Knex'], answer:'Mongoose', explanation:'Mongoose is an ODM for MongoDB.'},
  {id:112, category:'BND', question:'Which function handles errors in Express middleware?', options:['(err, req, res, next)','(req, res)','(req, res, next)','(error, res)'], answer:'(err, req, res, next)', explanation:'Error middleware must contain 4 parameters.'},
    {id:113, category:'BND', question:'Which command initializes a Node project?', options:['npm init','node start','npm create','node init'], answer:'npm init', explanation:'npm init generates a package.json file.'},
    {id:114, category:'BND', question:'What is a Promise in JavaScript?', options:['An object for async operations','A type of loop','A synchronous function','An event emitter'], answer:'An object for async operations', explanation:'Promises represent asynchronous results.'},
    {id:115, category:'BND', question:'What is the default port for Express apps?', options:['3000','80','5000','8080'], answer:'3000', explanation:'Express apps commonly default to port 3000.'},
    {id:116, category:'BND', question:'Which Node module handles file operations?', options:['fs','http','url','dns'], answer:'fs', explanation:'fs stands for File System module.'},
    {id:117, category:'BND', question:'JWT stands for?', options:['JSON Web Token','Java Web Token','JavaScript Web Template','Joint Web Transfer'], answer:'JSON Web Token', explanation:'JWT is used for authentication and authorization.'},
    {id:118, category:'BND', question:'Which header is used to send a JWT?', options:['Authorization','Content-Type','Accept','Token'], answer:'Authorization', explanation:'JWT is sent via Authorization: Bearer <token>.'},
    {id:119, category:'BND', question:'Which hashing algorithm is recommended for passwords?', options:['bcrypt','md5','sha1','base64'], answer:'bcrypt', explanation:'bcrypt is secure and recommended for password hashing.'},
    {id:120, category:'BND', question:'What is CORS used for?', options:['Allowing cross-origin requests','Encrypting data','Handling cookies','Minifying code'], answer:'Allowing cross-origin requests', explanation:'CORS controls access to resources between different domains.'},
    {id:121, category:'BND', question:'Which Express method defines a GET route?', options:['app.get()','app.route()','app.fetch()','app.connect()'], answer:'app.get()', explanation:'app.get() handles HTTP GET requests.'},
    {id:122, category:'BND', question:'What is clustering in Node?', options:['Utilizing multiple CPU cores','Grouping variables','Bundling routes','Merging databases'], answer:'Utilizing multiple CPU cores', explanation:'Clustering improves performance by using all CPU cores.'},
    {id:123, category:'BND', question:'What is the event loop?', options:['A mechanism for async operations','A for loop variation','A middleware','A routing table'], answer:'A mechanism for async operations', explanation:'The event loop handles asynchronous JavaScript execution.'},
  {id:124, category:'BND', question:'Which database is relational?', options:['PostgreSQL','MongoDB','CouchDB','DynamoDB'], answer:'PostgreSQL', explanation:'PostgreSQL is a relational SQL database.'},
    {id:125, category:'BND', question:'Which statement terminates a Node app?', options:['process.exit()','app.stop()','node.exit()','server.close()'], answer:'process.exit()', explanation:'process.exit() stops Node.js execution.'},
    {id:126, category:'BND', question:'What is rate limiting used for?', options:['Preventing excessive requests','Speeding database queries','Caching responses','Encrypting headers'], answer:'Preventing excessive requests', explanation:'Rate limiting protects against abuse and DDoS attacks.'},
    {id:127, category:'BND', question:'Which HTTP code means "Created"?', options:['201','200','204','404'], answer:'201', explanation:'201 indicates that a resource was successfully created.'},
    {id:128, category:'BND', question:'Which library is used for input validation in Node?', options:['Joi','Helmet','Bcrypt','Morgan'], answer:'Joi', explanation:'Joi validates request payloads.'},
    {id:129, category:'BND', question:'Helmet.js is used for?', options:['Securing HTTP headers','Logging data','Handling routing','Parsing forms'], answer:'Securing HTTP headers', explanation:'Helmet adds security headers to Express apps.'},
    {id:130, category:'BND', question:'Which Node module handles environment variables?', options:['dotenv','env','config','system'], answer:'dotenv', explanation:'dotenv loads environment variables from a .env file.'},
    {id:131, category:'BND', question:'What does async keyword do?', options:['Returns a promise','Runs synchronously','Stops execution','Declares a module'], answer:'Returns a promise', explanation:'Async functions always return a promise.'},
    {id:132, category:'BND', question:'What is a callback function?', options:['A function passed into another function','A Node module','A promise type','A route handler'], answer:'A function passed into another function', explanation:'Callbacks execute after another function finishes.'},
    {id:133, category:'BND', question:'Which command installs a package globally?', options:['npm install -g','npm install','npm add','npm global'], answer:'npm install -g', explanation:'-g installs a package globally.'},
    {id:134, category:'BND', question:'Which header identifies JSON data?', options:['Content-Type: application/json','Accept: text/html','Type: json','Data-Type: JSON'], answer:'Content-Type: application/json', explanation:'This header specifies JSON payloads.'},
    {id:135, category:'BND', question:'What is a 500 status code?', options:['Server error','Bad request','Not found','Unauthorized'], answer:'Server error', explanation:'500 indicates an internal server error.'},
    {id:136, category:'BND', question:'Which tool restarts Node automatically on changes?', options:['Nodemon','Webpack','Gulp','Babel'], answer:'Nodemon', explanation:'Nodemon watches files and restarts Node on changes.'},
    {id:137, category:'BND', question:'What is the purpose of package.json?', options:['Managing project dependencies','Running HTML','Storing CSS','Hosting the database'], answer:'Managing project dependencies', explanation:'package.json stores metadata and dependency lists.'},
    {id:138, category:'BND', question:'Which database uses SQL?', options:['MySQL','MongoDB','Redis','Firebase'], answer:'MySQL', explanation:'MySQL is an SQL/relational database.'},
    {id:139, category:'BND', question:'Which Node function reads files asynchronously?', options:['fs.readFile()','fs.read()','file.read()','fs.load()'], answer:'fs.readFile()', explanation:'fs.readFile reads files asynchronously.'},
    {id:140, category:'BND', question:'What is API versioning?', options:['Managing API upgrades','Caching endpoints','Securing tokens','Optimizing queries'], answer:'Managing API upgrades', explanation:'Versioning prevents breaking changes in APIs.'},
    {id:141, category:'BND', question:'What is a 404 response?', options:['Resource not found','Server down','Unauthorized','Bad gateway'], answer:'Resource not found', explanation:'404 means the requested resource does not exist.'},
    {id:142, category:'BND', question:'Which protocol does REST use?', options:['HTTP/HTTPS','FTP','SSH','SMTP'], answer:'HTTP/HTTPS', explanation:'RESTful APIs work over HTTP/HTTPS.'},
    {id:143, category:'BND', question:'Which component handles routing in Express?', options:['Router','Navigator','Dispatcher','RouteMap'], answer:'Router', explanation:'Express.Router organizes application routes.'},
    {id:144, category:'BND', question:'What is load balancing?', options:['Distributing traffic across servers','Increasing RAM','Caching APIs','Minifying code'], answer:'Distributing traffic across servers', explanation:'Load balancing improves scalability and performance.'},
    {id:145, category:'BND', question:'Which database is in-memory?', options:['Redis','MySQL','MongoDB','PostgreSQL'], answer:'Redis', explanation:'Redis stores data in memory for speed.'},
    {id:146, category:'BND', question:'What is SQL injection?', options:['Attacking a database through queries','A logging method','A cache bug','A crypto attack'], answer:'Attacking a database through queries', explanation:'SQL injection exploits vulnerable query structures.'},
    {id:147, category:'BND', question:'Which tool tests APIs?', options:['Postman','Photoshop','Figma','Premiere Pro'], answer:'Postman', explanation:'Postman is widely used to test APIs.'},
    {id:148, category:'BND', question:'Which method sends JSON responses in Express?', options:['res.json()','res.sendFile()','res.download()','res.pipe()'], answer:'res.json()', explanation:'res.json() sends JSON data.'},
    {id:149, category:'BND', question:'Which Node runtime powers Node.js?', options:['V8','SpiderMonkey','Rhino','Chakra'], answer:'V8', explanation:'Node.js uses Google’s V8 JavaScript engine.'},
    {id:150, category:'BND', question:'What is the purpose of MongoDB indexes?', options:['Speeding up queries','Storing more data','Encrypting records','Updating schemas'], answer:'Speeding up queries', explanation:'Indexes optimize read performance.'},
    {id:151, category:'BND', question:'What is ORM?', options:['Object Relational Mapping','Order Record Model','Object Route Manager','Online Resource Manager'], answer:'Object Relational Mapping', explanation:'ORM maps JS objects to database tables.'},
    {id:152, category:'BND', question:'Which ORM works with MySQL?', options:['Sequelize','Mongoose','Prisma only','Joi'], answer:'Sequelize', explanation:'Sequelize is an ORM for SQL databases.'},
    {id:153, category:'BND', question:'What is a microservice?', options:['Small independent service','CSS library','Display component','Mobile app type'], answer:'Small independent service', explanation:'Microservices break systems into small components.'},
    {id:154, category:'BND', question:'Which file stores environment variables?', options:['.env','config.js','settings.json','vars.txt'], answer:'.env', explanation:'Environment variables are stored in .env.'},
    {id:155, category:'BND', question:'What is horizontal scaling?', options:['Adding more machines','Increasing CPU speed','Upgrading RAM','Compressing logs'], answer:'Adding more machines', explanation:'Horizontal scaling adds more servers to handle load.'},
    {id:156, category:'BND', question:'What is a webhook?', options:['A callback triggered by events','A UI component','A database schema','A Node plugin'], answer:'A callback triggered by events', explanation:'Webhooks notify external systems when events occur.'},
    {id:157, category:'BND', question:'Which header sends cookies?', options:['Set-Cookie','Cookie-Type','Token','Auth'], answer:'Set-Cookie', explanation:'Servers use Set-Cookie to send cookies to clients.'},
    {id:158, category:'BND', question:'Which Node tool manages version control?', options:['Git','NPM','Yarn','Node CLI'], answer:'Git', explanation:'Git is the standard version control tool.'},
    {id:159, category:'BND', question:'What is a 403 status code?', options:['Forbidden','Unauthorized','Server timeout','Bad request'], answer:'Forbidden', explanation:'403 means the server refuses the request.'},
    {id:160, category:'BND', question:'Which Node module handles streams?', options:['stream','http','fs','events'], answer:'stream', explanation:'Node’s stream module manages streaming data.'},
    {id:161, category:'BND', question:'What is CSRF?', options:['Cross-Site Request Forgery','Client Server Routing Failure','Cross Script Resource File','Cookie Security Random Failure'], answer:'Cross-Site Request Forgery', explanation:'CSRF forces users to perform unwanted actions.'},
    {id:162, category:'BND', question:'Which library helps prevent CSRF?', options:['csurf','bcrypt','helmet','validator'], answer:'csurf', explanation:'csurf adds CSRF protection middleware.'},
    {id:163, category:'BND', question:'Which pattern handles async errors?', options:['try/catch with async/await','for loops','if/else','switch case'], answer:'try/catch with async/await', explanation:'Async/await requires try/catch for errors.'},
    {id:164, category:'BND', question:'What is a reverse proxy?', options:['A server that forwards requests','A DNS lookup','A routing rule','An SQL feature'], answer:'A server that forwards requests', explanation:'Reverse proxies forward client requests to backend servers.'},
    {id:165, category:'BND', question:'Which tool monitors Node performance?', options:['PM2','VS Code','React DevTools','Mongo Compass'], answer:'PM2', explanation:'PM2 is a production process manager for Node.js.'},
    {id:166, category:'BND', question:'What is a container in backend development?', options:['An isolated runtime environment','A database query','A route handler','A JSON object'], answer:'An isolated runtime environment', explanation:'Containers isolate apps using Docker.'},
    {id:124, category:'BND', question:'Which database is relational?', options:['PostgreSQL','MongoDB','CouchDB','DynamoDB'], answer:'PostgreSQL', explanation:'PostgreSQL is a relational SQL database.'},
    {id:125, category:'BND', question:'Which statement terminates a Node app?', options:['process.exit()','app.stop()','node.exit()','server.close()'], answer:'process.exit()', explanation:'process.exit() stops Node.js execution.'},
    {id:126, category:'BND', question:'What is rate limiting used for?', options:['Preventing excessive requests','Speeding database queries','Caching responses','Encrypting headers'], answer:'Preventing excessive requests', explanation:'Rate limiting protects against abuse and DDoS attacks.'},
    {id:127, category:'BND', question:'Which HTTP code means "Created"?', options:['201','200','204','404'], answer:'201', explanation:'201 indicates that a resource was successfully created.'},
    {id:128, category:'BND', question:'Which library is used for input validation in Node?', options:['Joi','Helmet','Bcrypt','Morgan'], answer:'Joi', explanation:'Joi validates request payloads.'},
    {id:129, category:'BND', question:'Helmet.js is used for?', options:['Securing HTTP headers','Logging data','Handling routing','Parsing forms'], answer:'Securing HTTP headers', explanation:'Helmet adds security headers to Express apps.'},
    {id:130, category:'BND', question:'Which Node module handles environment variables?', options:['dotenv','env','config','system'], answer:'dotenv', explanation:'dotenv loads environment variables from a .env file.'},
    {id:131, category:'BND', question:'What does async keyword do?', options:['Returns a promise','Runs synchronously','Stops execution','Declares a module'], answer:'Returns a promise', explanation:'Async functions always return a promise.'},
    {id:132, category:'BND', question:'What is a callback function?', options:['A function passed into another function','A Node module','A promise type','A route handler'], answer:'A function passed into another function', explanation:'Callbacks execute after another function finishes.'},
    {id:133, category:'BND', question:'Which command installs a package globally?', options:['npm install -g','npm install','npm add','npm global'], answer:'npm install -g', explanation:'-g installs a package globally.'},
    {id:134, category:'BND', question:'Which header identifies JSON data?', options:['Content-Type: application/json','Accept: text/html','Type: json','Data-Type: JSON'], answer:'Content-Type: application/json', explanation:'This header specifies JSON payloads.'},
    {id:135, category:'BND', question:'What is a 500 status code?', options:['Server error','Bad request','Not found','Unauthorized'], answer:'Server error', explanation:'500 indicates an internal server error.'},
    {id:136, category:'BND', question:'Which tool restarts Node automatically on changes?', options:['Nodemon','Webpack','Gulp','Babel'], answer:'Nodemon', explanation:'Nodemon watches files and restarts Node on changes.'},
    {id:137, category:'BND', question:'What is the purpose of package.json?', options:['Managing project dependencies','Running HTML','Storing CSS','Hosting the database'], answer:'Managing project dependencies', explanation:'package.json stores metadata and dependency lists.'},
    {id:138, category:'BND', question:'Which database uses SQL?', options:['MySQL','MongoDB','Redis','Firebase'], answer:'MySQL', explanation:'MySQL is an SQL/relational database.'},
    {id:139, category:'BND', question:'Which Node function reads files asynchronously?', options:['fs.readFile()','fs.read()','file.read()','fs.load()'], answer:'fs.readFile()', explanation:'fs.readFile reads files asynchronously.'},
    {id:140, category:'BND', question:'What is API versioning?', options:['Managing API upgrades','Caching endpoints','Securing tokens','Optimizing queries'], answer:'Managing API upgrades', explanation:'Versioning prevents breaking changes in APIs.'},
    {id:141, category:'BND', question:'What is a 404 response?', options:['Resource not found','Server down','Unauthorized','Bad gateway'], answer:'Resource not found', explanation:'404 means the requested resource does not exist.'},
    {id:142, category:'BND', question:'Which protocol does REST use?', options:['HTTP/HTTPS','FTP','SSH','SMTP'], answer:'HTTP/HTTPS', explanation:'RESTful APIs work over HTTP/HTTPS.'},
    {id:143, category:'BND', question:'Which component handles routing in Express?', options:['Router','Navigator','Dispatcher','RouteMap'], answer:'Router', explanation:'Express.Router organizes application routes.'},
    {id:144, category:'BND', question:'What is load balancing?', options:['Distributing traffic across servers','Increasing RAM','Caching APIs','Minifying code'], answer:'Distributing traffic across servers', explanation:'Load balancing improves scalability and performance.'},
    {id:145, category:'BND', question:'Which database is in-memory?', options:['Redis','MySQL','MongoDB','PostgreSQL'], answer:'Redis', explanation:'Redis stores data in memory for speed.'},
    {id:146, category:'BND', question:'What is SQL injection?', options:['Attacking a database through queries','A logging method','A cache bug','A crypto attack'], answer:'Attacking a database through queries', explanation:'SQL injection exploits vulnerable query structures.'},
    {id:147, category:'BND', question:'Which tool tests APIs?', options:['Postman','Photoshop','Figma','Premiere Pro'], answer:'Postman', explanation:'Postman is widely used to test APIs.'},
    {id:148, category:'BND', question:'Which method sends JSON responses in Express?', options:['res.json()','res.sendFile()','res.download()','res.pipe()'], answer:'res.json()', explanation:'res.json() sends JSON data.'},
    {id:149, category:'BND', question:'Which Node runtime powers Node.js?', options:['V8','SpiderMonkey','Rhino','Chakra'], answer:'V8', explanation:'Node.js uses Google’s V8 JavaScript engine.'},
    {id:150, category:'BND', question:'What is the purpose of MongoDB indexes?', options:['Speeding up queries','Storing more data','Encrypting records','Updating schemas'], answer:'Speeding up queries', explanation:'Indexes optimize read performance.'},
    {id:151, category:'BND', question:'What is ORM?', options:['Object Relational Mapping','Order Record Model','Object Route Manager','Online Resource Manager'], answer:'Object Relational Mapping', explanation:'ORM maps JS objects to database tables.'},
    {id:152, category:'BND', question:'Which ORM works with MySQL?', options:['Sequelize','Mongoose','Prisma only','Joi'], answer:'Sequelize', explanation:'Sequelize is an ORM for SQL databases.'},
    {id:153, category:'BND', question:'What is a microservice?', options:['Small independent service','CSS library','Display component','Mobile app type'], answer:'Small independent service', explanation:'Microservices break systems into small components.'},
    {id:154, category:'BND', question:'Which file stores environment variables?', options:['.env','config.js','settings.json','vars.txt'], answer:'.env', explanation:'Environment variables are stored in .env.'},
    {id:155, category:'BND', question:'What is horizontal scaling?', options:['Adding more machines','Increasing CPU speed','Upgrading RAM','Compressing logs'], answer:'Adding more machines', explanation:'Horizontal scaling adds more servers to handle load.'},
    {id:156, category:'BND', question:'What is a webhook?', options:['A callback triggered by events','A UI component','A database schema','A Node plugin'], answer:'A callback triggered by events', explanation:'Webhooks notify external systems when events occur.'},
    {id:157, category:'BND', question:'Which header sends cookies?', options:['Set-Cookie','Cookie-Type','Token','Auth'], answer:'Set-Cookie', explanation:'Servers use Set-Cookie to send cookies to clients.'},
    {id:158, category:'BND', question:'Which Node tool manages version control?', options:['Git','NPM','Yarn','Node CLI'], answer:'Git', explanation:'Git is the standard version control tool.'},
    {id:159, category:'BND', question:'What is a 403 status code?', options:['Forbidden','Unauthorized','Server timeout','Bad request'], answer:'Forbidden', explanation:'403 means the server refuses the request.'},
    {id:160, category:'BND', question:'Which Node module handles streams?', options:['stream','http','fs','events'], answer:'stream', explanation:'Node’s stream module manages streaming data.'},
    {id:161, category:'BND', question:'What is CSRF?', options:['Cross-Site Request Forgery','Client Server Routing Failure','Cross Script Resource File','Cookie Security Random Failure'], answer:'Cross-Site Request Forgery', explanation:'CSRF forces users to perform unwanted actions.'},
    {id:162, category:'BND', question:'Which library helps prevent CSRF?', options:['csurf','bcrypt','helmet','validator'], answer:'csurf', explanation:'csurf adds CSRF protection middleware.'},
   {id:163, category:'BND', question:'Which pattern handles async errors?', options:['try/catch with async/await','for loops','if/else','switch case'], answer:'try/catch with async/await', explanation:'Async/await requires try/catch for errors.'},
    {id:164, category:'BND', question:'What is a reverse proxy?', options:['A server that forwards requests','A DNS lookup','A routing rule','An SQL feature'], answer:'A server that forwards requests', explanation:'Reverse proxies forward client requests to backend servers.'},
    {id:165, category:'BND', question:'Which tool monitors Node performance?', options:['PM2','VS Code','React DevTools','Mongo Compass'], answer:'PM2', explanation:'PM2 is a production process manager for Node.js.'},
    {id:166, category:'BND', question:'What is a container in backend development?', options:['An isolated runtime environment','A database query','A route handler','A JSON object'], answer:'An isolated runtime environment', explanation:'Containers isolate apps using Docker.'},
    {id:167, category:'BND', question:'Which command starts an Express server?', options:['node server.js','start express','npm run app','server start'], answer:'node server.js', explanation:'node server.js runs the server script.'},
    {id:168, category:'BND', question:'What is middleware chaining?', options:['Running multiple middleware functions','Looping routes','Connecting APIs','Binding sockets'], answer:'Running multiple middleware functions', explanation:'Express allows chaining middleware functions.'},
    {id:169, category:'BND', question:'What is WebSocket used for?', options:['Real-time communication','File uploads','Static hosting','Query optimization'], answer:'Real-time communication', explanation:'WebSockets allow full-duplex communication.'},
  // FULLSTACK DEVELOPER — 70 Questions (ID: 171–240)
  {id:171, category:'FSD', question:'What does the term "Fullstack" refer to?', options:['Working on frontend only','Working on backend only','Working on both frontend and backend','Working only on APIs'],  answer:'Working on both frontend and backend', explanation:'A fullstack developer handles both client-side and server-side development.'},  
  {id:172, category:'FSD', question:'Which of the following is a frontend framework?', options:['Express.js','Django','React','Laravel'], answer:'React', explanation:'React is used to build interactive UI on the frontend.'},
 {id:173, category:'FSD', question:'Which HTTP method is used to update a resource?',  options:['GET','POST','PUT','DELETE'], answer:'PUT', explanation:'PUT is used for updating an existing resource.'},
 
 // 4
 {id:174, category:'FSD', question:'Which database is NoSQL?', 
  options:['MySQL','PostgreSQL','MongoDB','MariaDB'], 
  answer:'MongoDB', 
  explanation:'MongoDB stores data as documents in BSON format.'},
 
 // 5
 {id:175, category:'FSD', question:'Which of these is used to style a webpage?', 
  options:['HTML','CSS','Python','Node'], 
  answer:'CSS', 
  explanation:'CSS handles visual presentation and styling.'},
 
 // 6
 {id:176, category:'FSD', question:'Which of these defines the structure of a webpage?', 
  options:['HTML','CSS','JavaScript','PHP'], 
  answer:'HTML', 
  explanation:'HTML is used to structure the content of webpages.'},
 
 // 7
 {id:177, category:'FSD', question:'Which runtime allows JavaScript to run on the server?', 
  options:['V8','Node.js','NPM','Docker'], 
  answer:'Node.js', 
  explanation:'Node.js uses the V8 engine to run JS server-side.'},
 
 // 8
 {id:178, category:'FSD', question:'Which of these is NOT a backend language?', 
  options:['PHP','Python','Go','CSS'], 
  answer:'CSS', 
  explanation:'CSS is a styling language, not backend.'},
 
 // 9
 {id:179, category:'FSD', question:'Which HTTP status code means "Not Found"?', 
  options:['200','301','404','500'], 
  answer:'404', 
  explanation:'404 is returned when a resource cannot be located.'},
 
 // 10
 {id:180, category:'FSD', question:'Which tool is used to manage JavaScript packages?', 
  options:['Git','Composer','NPM','Webpack'], 
  answer:'NPM', 
  explanation:'NPM is the default package manager for Node.js.'},
 
 // 11
 {id:181, category:'FSD', question:'Which of these is a server-side framework for Node.js?', 
  options:['Express','Bootstrap','React','jQuery'], 
  answer:'Express', 
  explanation:'Express is a minimal backend framework for Node.'},
 
 // 12
 {id:182, category:'FSD', question:'What does REST stand for?', 
  options:['Random Easy Server Transfer','Representational State Transfer','Remote Execution Standard Transfer','Real-time State Transaction'], 
  answer:'Representational State Transfer', 
  explanation:'REST is an architectural style for building APIs.'},
 
 // 13
 {id:183, category:'FSD', question:'Which of these is a build tool?', 
  options:['Webpack','MySQL','Python','HTML'], 
  answer:'Webpack', 
  explanation:'Webpack bundles JavaScript modules.'},
 
 // 14
 {id:184, category:'FSD', question:'Which CSS layout uses rows and columns?', 
  options:['Flexbox','Grid','Float','Inline'], 
  answer:'Grid', 
  explanation:'CSS Grid is used for 2D layouts.'},
 
 // 15
 {id:185, category:'FSD', question:'Which command initializes a Git repository?', 
  options:['git start','git init','git open','git create'], 
  answer:'git init', 
  explanation:'git init creates a new local repository.'},
 
 // 16
 {id:186, category:'FSD', question:'Which file contains Node.js project metadata?', 
  options:['package.json','metadata.js','server.config','nodefile.json'], 
  answer:'package.json', 
  explanation:'package.json stores project configuration and dependencies.'},
 
 // 17
 {id:187, category:'FSD', question:'Which protocol is used for secure HTTP?', 
  options:['FTP','SMTP','HTTPS','SSH'], 
  answer:'HTTPS', 
  explanation:'HTTPS encrypts data using SSL/TLS.'},
 
 // 18
 {id:188, category:'FSD', question:'Which database query language does MongoDB use?', 
  options:['SQL','MQL','GraphQL','NoSQL'], 
  answer:'MQL', 
  explanation:'MQL stands for MongoDB Query Language.'},
 
 // 19
 {id:189, category:'FSD', question:'Which of these is a CSS preprocessor?', 
  options:['Sass','Vue','Node','XML'], 
  answer:'Sass', 
  explanation:'Sass extends CSS with variables and mixins.'},
 
 // 20
 {id:190, category:'FSD', question:'Which API format is lightweight and easy for web use?', 
  options:['XML','CSV','JSON','DOC'], 
  answer:'JSON', 
  explanation:'JSON is widely used for API data exchange.'},
 
 // 21
 {id:191, category:'FSD', question:'The lifecycle method "componentDidMount" belongs to?', 
  options:['React','Laravel','Django','Vue'], 
  answer:'React', 
  explanation:'It runs after a component is mounted in React.'},
 
 // 22
 {id:192, category:'FSD', question:'Which HTTP method retrieves data?', 
  options:['GET','POST','DELETE','PUT'], 
  answer:'GET', 
  explanation:'GET requests data from a server.'},
 
 // 23
 {id:193, category:'FSD', question:'Which of these is NOT a JavaScript data type?', 
  options:['Undefined','Boolean','Float','Symbol'], 
  answer:'Float', 
  explanation:'JS does not have a specific float type; numbers are all Number type.'},
 
 // 24
 {id:194, category:'FSD', question:'Which design pattern organizes MVC?', 
  options:['Model View Code','Model View Controller','Main View Component','Module Version Control'], 
  answer:'Model View Controller', 
  explanation:'MVC separates logic into model, view, and controller.'},
 
 // 25
 {id:195, category:'FSD', question:'Which tag links a CSS file?', 
  options:['<css>','<style>','<link>','<meta>'], 
  answer:'<link>', 
  explanation:'The <link> tag connects external stylesheets.'},
 
 // 26
 {id:196, category:'FSD', question:'Which tool is used for API testing?', 
  options:['VS Code','Postman','Photoshop','XAMPP'], 
  answer:'Postman', 
  explanation:'Postman lets developers test and document APIs.'},
 
 // 27
 {id:197, category:'FSD', question:'Which JavaScript feature handles asynchronous operations?', 
  options:['Loops','Promises','Variables','Arrays'], 
  answer:'Promises', 
  explanation:'Promises manage async results in JS.'},
 
 // 28
 {id:198, category:'FSD', question:'Which of these is a cloud platform?', 
  options:['AWS','MongoDB','Git','React'], 
  answer:'AWS', 
  explanation:'AWS provides cloud-hosted services.'},
 
 // 29
 {id:199, category:'FSD', question:'Which tag creates a form in HTML?', 
  options:['<input>','<form>','<div>','<section>'], 
  answer:'<form>', 
  explanation:'The <form> tag begins a form element.'},
 
 // 30
 {id:200, category:'FSD', question:'Which command installs a package globally with npm?', 
  options:['npm add','npm global','npm install -g','npm run'], 
  answer:'npm install -g', 
  explanation:'-g installs the package globally.'},
 
 // 31
 {id:201, category:'FSD', question:'Which of these is a web server?', 
  options:['Apache','Flutter','React','NPM'], 
  answer:'Apache', 
  explanation:'Apache is a widely used web server.'},
 
 // 32
 {id:202, category:'FSD', question:'Which directive is used in Angular to bind data?', 
  options:['v-bind','ng-model','@bind','data-bind'], 
  answer:'ng-model', 
  explanation:'Used for two-way data binding.'},
 
 // 33
 {id:203, category:'FSD', question:'Which type of database uses tables and rows?', 
  options:['NoSQL','Graph DB','Relational','File DB'], 
  answer:'Relational', 
  explanation:'Relational DBs store structured tabular data.'},
 
 // 34
 {id:204, category:'FSD', question:'Which HTML element is semantic?', 
  options:['<div>','<span>','<article>','<b>'], 
  answer:'<article>', 
  explanation:'Semantic tags describe meaning.'},
 
 // 35
 {id:205, category:'FSD', question:'Which caching mechanism stores data in browser?', 
  options:['SQL Cache','LocalStorage','Redis','Session DB'], 
  answer:'LocalStorage', 
  explanation:'LocalStorage keeps key-value data in browser.'},
 
 // 36
 {id:206, category:'FSD', question:'Which Linux command lists files?', 
  options:['rm','cd','ls','mv'], 
  answer:'ls', 
  explanation:'ls displays files in a directory.'},
 
 // 37
 {id:207, category:'FSD', question:'Which of these is used for containerization?', 
  options:['Docker','AWS Lambda','React','phpMyAdmin'], 
  answer:'Docker', 
  explanation:'Docker packages apps into containers.'},
 
 // 38
 {id:208, category:'FSD', question:'Which HTTP status means "Server Error"?', 
  options:['200','404','500','302'], 
  answer:'500', 
  explanation:'500 is returned when server fails unexpectedly.'},
 
 // 39
 {id:209, category:'FSD', question:'Which of these is a version control system?', 
  options:['Git','NPM','Node','React'], 
  answer:'Git', 
  explanation:'Git manages source code revisions.'},
 
 // 40
 {id:210, category:'FSD', question:'What does CDN stand for?', 
  options:['Central Data Network','Content Delivery Network','Code Distribution Node','Client Data Navigator'], 
  answer:'Content Delivery Network', 
  explanation:'CDNs deliver content faster worldwide.'},
 
 // 41
 {id:211, category:'FSD', question:'Which command clones a repository?', 
  options:['git copy','git clone','git fork','git download'], 
  answer:'git clone', 
  explanation:'git clone downloads a remote repo.'},
 
 // 42
 {id:212, category:'FSD', question:'Which function parses JSON in JavaScript?', 
  options:['JSON.read','JSON.stringify','JSON.parse','JSON.load'], 
  answer:'JSON.parse', 
  explanation:'JSON.parse converts JSON string to object.'},
 
 // 43
 {id:213, category:'FSD', question:'Which environment variable stores app secrets?', 
  options:['APP.js','package.json','env file','.config'], 
  answer:'env file', 
  explanation:'Environment variables keep sensitive keys safe.'},
 
 // 44
 {id:214, category:'FSD', question:'Which of these is a backend framework?', 
  options:['Next.js','Angular','Laravel','Tailwind'], 
  answer:'Laravel', 
  explanation:'Laravel is a PHP backend framework.'},
 
 // 45
 {id:215, category:'FSD', question:'Which HTML attribute makes input required?', 
  options:['must','validate','required','force'], 
  answer:'required', 
  explanation:'The required attribute enforces user input.'},
 
 // 46
 {id:216, category:'FSD', question:'What does API stand for?', 
  options:['Application Program Interface','Applied Programming Interaction','Advanced Program Input','Access Protocol Instruction'], 
  answer:'Application Program Interface', 
  explanation:'APIs allow communication between software.'},
 
 // 47
 {id:217, category:'FSD', question:'Which storage is temporary and clears when browser closes?', 
  options:['LocalStorage','Cookies','SessionStorage','Cache'], 
  answer:'SessionStorage', 
  explanation:'SessionStorage persists only during tab session.'},
 
 // 48
 {id:218, category:'FSD', question:'Which command starts a Node server?', 
  options:['node start','npm serve','node app.js','npm create'], 
  answer:'node app.js', 
  explanation:'Node runs the JS file to start server.'},
 
 // 49
 {id:219, category:'FSD', question:'Which CSS property adds space inside an element?', 
  options:['margin','padding','gap','spacing'], 
  answer:'padding', 
  explanation:'Padding adds internal spacing.'},
 
 // 50
 {id:220, category:'FSD', question:'Which tool bundles JS modules?', 
  options:['Babel','Webpack','Nodemon','MySQL'], 
  answer:'Webpack', 
  explanation:'Webpack combines and optimizes JS dependencies.'},
 
 // 51
 {id:221, category:'FSD', question:'Which of these is used to hash passwords?', 
  options:['bcrypt','axios','express','vuex'], 
  answer:'bcrypt', 
  explanation:'bcrypt provides secure password hashing.'},
 
 // 52
 {id:222, category:'FSD', question:'Which protocol is used to send email?', 
  options:['SMTP','HTTP','FTP','POP'], 
  answer:'SMTP', 
  explanation:'SMTP sends outgoing emails.'},
 
 // 53
 {id:223, category:'FSD', question:'Which CSS property changes text color?', 
  options:['font-style','color','text-type','text-color'], 
  answer:'color', 
  explanation:'Color changes text color.'},
 
 // 54
 {id:224, category:'FSD', question:'Which database is relational?', 
  options:['MySQL','Redis','MongoDB','Firestore'], 
  answer:'MySQL', 
  explanation:'MySQL stores data in rows and tables.'},
 
 // 55
 {id:225, category:'FSD', question:'Which tool formats JS code?', 
  options:['Prettier','Postman','Chrome DevTools','Nodemon'], 
  answer:'Prettier', 
  explanation:'Prettier auto-formats code for consistency.'},
 
 // 56
 {id:226, category:'FSD', question:'Which command installs dependencies?', 
  options:['npm get','npm i','npm make','npm set'], 
  answer:'npm i', 
  explanation:'npm i installs all required packages.'},
 
 // 57
 {id:227, category:'FSD', question:'Which design principle means “Don’t Repeat Yourself”?', 
  options:['SOLID','DRY','KISS','YAGNI'], 
  answer:'DRY', 
  explanation:'DRY helps reduce repeated logic.'},
 
 // 58
 {id:228, category:'FSD', question:'Which language compiles to JavaScript?', 
  options:['TypeScript','Python','PHP','Ruby'], 
  answer:'TypeScript', 
  explanation:'TypeScript is a superset of JS that compiles to JS.'},
 
 // 59
 {id:229, category:'FSD', question:'Which tool monitors file changes in Node?', 
  options:['Nodemon','Webpack','PM2','Babel'], 
  answer:'Nodemon', 
  explanation:'Nodemon restarts server on file changes.'},
 
 // 60
 {id:230, category:'FSD', question:'Which HTTP code means "Success"?', 
  options:['200','400','401','503'], 
  answer:'200', 
  explanation:'200 OK means the request was successful.'},
 
 // 61
 {id:231, category:'FSD', question:'Which method adds data to an array?', 
  options:['push()','pop()','slice()','shift()'], 
  answer:'push()', 
  explanation:'push() appends an element to the array end.'},
 
 // 62
 {id:232, category:'FSD', question:'Which CSS property makes an element a flex container?', 
  options:['display:flex','layout:flex','position:flex','container:flex'], 
  answer:'display:flex', 
  explanation:'display:flex applies flexbox layout.'},
 
 // 63
 {id:233, category:'FSD', question:'Which of these is a JS framework?', 
  options:['Laravel','Vue','Django','Flask'], 
  answer:'Vue', 
  explanation:'Vue is a lightweight JS frontend framework.'},
 
 // 64
 {id:234, category:'FSD', question:'Which of these formats is used for environment variables?', 
  options:['.txt','.env','.js','.cfg'], 
  answer:'.env', 
  explanation:'Environment variables are stored in .env files.'},
 
 // 65
 {id:235, category:'FSD', question:'Which protocol retrieves email?', 
  options:['POP3','SMTP','SSH','SCP'], 
  answer:'POP3', 
  explanation:'POP3 retrieves incoming emails.'},
 
 // 66
 {id:236, category:'FSD', question:'Which security measure protects against SQL injection?', 
  options:['Escaping strings','CSS reset','API caching','HTML minification'], 
  answer:'Escaping strings', 
  explanation:'Escaping user input prevents malicious queries.'},
 
 // 67
 {id:237, category:'FSD', question:'Which tag creates a clickable button?', 
  options:['<div>','<btn>','<button>','<link>'], 
  answer:'<button>', 
  explanation:'<button> creates interactive button elements.'},
 
 // 68
 {id:238, category:'FSD', question:'Which extension hosts Node apps in production?', 
  options:['PM2','Vue CLI','Figma','Docker'], 
  answer:'PM2', 
  explanation:'PM2 manages Node processes at scale.'},
 
 // 69
 {id:239, category:'FSD', question:'Which HTTP code means unauthorized?', 
  options:['200','301','401','502'], 
  answer:'401', 
  explanation:'401 Unauthorized means authentication is required.'},
 
 // 70
 {id:240, category:'FSD', question:'Which library is used for state management in React?', 
  options:['Redux','jQuery','Axios','Bootstrap'], 
  answer:'Redux', 
  explanation:'Redux manages predictable state in React apps.'},
 
  {id:241, category:'python', question:'What is the correct file extension for Python files?', options:['.py','.pt','.python','.p'], answer:'.py', explanation:'Python scripts always end with the .py extension.'},
 
 {id:242, category:'python', question:'Which data type is immutable in Python?', options:['List','Dictionary','Tuple','Set'], answer:'Tuple', explanation:'Tuples cannot be modified after creation.'},
 
 {id:243, category:'python', question:'What does PEP stand for?', options:['Python Execution Process','Python Enhancement Proposal','Program Enhancement Protocol','Python Enterprise Package'], answer:'Python Enhancement Proposal', explanation:'PEPs describe guidelines and improvements for Python.'},
 
 {id:244, category:'python', question:'Which keyword defines a function?', options:['function','def','fun','method'], answer:'def', explanation:'The def keyword is used to declare a new function.'},
 
 {id:245, category:'python', question:'Which operator is used for exponentiation?', options:['^','**','*','exp'], answer:'**', explanation:'Python uses ** for power operations.'},
 
 {id:246, category:'python', question:'What is the output of len("Python")?', options:['5','6','7','Error'], answer:'6', explanation:'The string has six characters.'},
 
 {id:247, category:'python', question:'Which collection is ordered and changeable?', options:['Tuple','Set','List','FrozenSet'], answer:'List', explanation:'Lists maintain order and allow modifications.'},
 
 {id:248, category:'python', question:'Which method adds an element to a list?', options:['add()','append()','push()','insert()'], answer:'append()', explanation:'append() adds an item to the end of a list.'},
 
 {id:249, category:'python', question:'What does the range() function return?', options:['List','Tuple','Iterator','String'], answer:'Iterator', explanation:'range() returns a range object which is iterable.'},
 
 {id:250, category:'python', question:'Which keyword is used to handle exceptions?', options:['except','catch','handle','error'], answer:'except', explanation:'Used inside try blocks to handle exceptions.'},
 
 {id:251, category:'python', question:'What is the output of 3//2?', options:['1','1.5','2','Error'], answer:'1', explanation:'// performs floor division.'},
 
 {id:252, category:'python', question:'Which keyword deletes an object?', options:['remove','pop','delete','del'], answer:'del', explanation:'del removes variables or object references.'},
 
 {id:253, category:'python', question:'What is a correct way to open a file for writing?', options:['open("a.txt","r")','open("a.txt","w")','open("a.txt","rw")','open("a.txt")'], answer:'open("a.txt","w")', explanation:'"w" opens a file for writing.'},
 
 {id:254, category:'python', question:'Which module is used for regular expressions?', options:['regex','pyregex','re','match'], answer:'re', explanation:'The re module supports regular expression operations.'},
 
 {id:255, category:'python', question:'Which statement creates a set?', options:['set = {}','set = []','set = ()','set = set()'], answer:'set = set()', explanation:'{} creates a dictionary, not a set.'},
 
 {id:256, category:'python', question:'What is the output of bool(0)?', options:['True','False','0','None'], answer:'False', explanation:'Zero evaluates to False in Python.'},
 
 {id:257, category:'python', question:'Which function returns the type of an object?', options:['data()','typeof()','type()','object()'], answer:'type()', explanation:'type() returns the datatype of an object.'},
 
 {id:258, category:'python', question:'Which operator is used for logical AND?', options:['&','*','and','&&'], answer:'and', explanation:'Python uses plain English operators.'},
 
 {id:259, category:'python', question:'Which library is used for data manipulation?', options:['numpy','pandas','math','sys'], answer:'pandas', explanation:'Pandas is used for data analysis and manipulation.'},
 
 {id:260, category:'python', question:'Python is…?', options:['Compiled','Interpreted','Hybrid','Machine code'], answer:'Interpreted', explanation:'Python executes line by line.'},
 
 {id:261, category:'python', question:'Which command installs a package?', options:['python install','pip install','pkg install','pip get'], answer:'pip install', explanation:'pip is Python’s package manager.'},
 
 {id:262, category:'python', question:'How do you create a class?', options:['class MyClass:','MyClass class:','define class MyClass','create class MyClass'], answer:'class MyClass:', explanation:'The class keyword defines classes.'},
 
 {id:263, category:'python', question:'Which statement is used to exit a loop?', options:['stop','exit','break','continue'], answer:'break', explanation:'break terminates loops immediately.'},
 
 {id:264, category:'python', question:'What is the output of type([])?', options:['List','Tuple','Set','Dictionary'], answer:'List', explanation:'[] syntax creates a list.'},
 
 {id:265, category:'python', question:'Which keyword starts a loop?', options:['for','loop','iterate','each'], answer:'for', explanation:'Used to begin for loops.'},
 
 {id:266, category:'python', question:'What is the correct way to install Django?', options:['pip install django','pip get django','install django','django install'], answer:'pip install django', explanation:'Installed from Python Package Index.'},
 
 {id:267, category:'python', question:'What is __init__ used for?', options:['Delete objects','Initialize objects','Call methods','Import modules'], answer:'Initialize objects', explanation:'__init__ is the constructor method.'},
 
 {id:268, category:'python', question:'Which library is for machine learning?', options:['numpy','scikit-learn','tkinter','pygame'], answer:'scikit-learn', explanation:'Used for ML algorithms.'},
 
 {id:269, category:'python', question:'What is pip?', options:['Python editor','Package manager','Compiler','Debugger'], answer:'Package manager', explanation:'pip manages third-party modules.'},
 
 {id:270, category:'python', question:'What is indentation used for?', options:['Comments','Block definition','Spacing','Docstrings'], answer:'Block definition', explanation:'Python uses indentation instead of braces.'},
 
 {id:271, category:'python', question:'Which decorator is used for static methods?', options:['@method','@utility','@static','@staticmethod'], answer:'@staticmethod', explanation:'Used to define static methods.'},
 
 {id:272, category:'python', question:'What is the symbol for comments?', options:['//','#','<!-- -->','--'], answer:'#', explanation:'Python uses # for comments.'},
 
 {id:273, category:'python', question:'Which function converts to a string?', options:['str()','toString()','string()','convert()'], answer:'str()', explanation:'str() casts values to strings.'},
 
 {id:274, category:'python', question:'Which loop runs at least once?', options:['for','while','do-while','Python has no do-while'], answer:'Python has no do-while', explanation:'Python doesn’t implement do-while loops.'},
 
 {id:275, category:'python', question:'What is lambda?', options:['Class','Package','Anonymous function','Module'], answer:'Anonymous function', explanation:'lambda creates small inline functions.'},
 
 {id:276, category:'python', question:'Which function returns a list of object attributes?', options:['dir()','attr()','list()','props()'], answer:'dir()', explanation:'dir() lists attributes of objects.'},
 
 {id:277, category:'python', question:'What is used to handle multiple exceptions?', options:['multi except','except()','except: except:','except (A,B)'], answer:'except (A,B)', explanation:'You can catch multiple exceptions in a tuple.'},
 
 {id:278, category:'python', question:'What is the output of 2 ** 3?', options:['6','8','9','Error'], answer:'8', explanation:'Exponentiation: 2³ = 8.'},
 
 {id:279, category:'python', question:'Which keyword is used to create an anonymous block?', options:['pass','skip','continue','null'], answer:'pass', explanation:'pass is a placeholder statement.'},
 
 {id:280, category:'python', question:'Which is a Python web framework?', options:['Laravel','Spring','Django','Ruby on Rails'], answer:'Django', explanation:'Django is a high-level Python web framework.'},
 
 {id:281, category:'python', question:'What does dict.get() prevent?', options:['IndexError','KeyError','ImportError','TypeError'], answer:'KeyError', explanation:'get() returns None instead of raising KeyError.'},
 
 {id:282, category:'python', question:'What does the strip() method remove?', options:['Spaces','Tabs','Whitespace','All of the above'], answer:'All of the above', explanation:'strip() removes leading/trailing whitespace.'},
 
 {id:283, category:'python', question:'Which module handles dates?', options:['calendar','datetime','time','datelib'], answer:'datetime', explanation:'datetime is used for date/time operations.'},
 
 {id:284, category:'python', question:'What is GIL?', options:['General Interpreter Lock','Global Instance Lock','Global Interpreter Lock','Global Input Lock'], answer:'Global Interpreter Lock', explanation:'GIL allows only one thread to execute at a time.'},
 
 {id:285, category:'python', question:'Which keyword creates a generator?', options:['yield','return','gen','generate'], answer:'yield', explanation:'yield produces generator values.'},
 
 {id:286, category:'python', question:'Which module is used to generate random numbers?', options:['random','math','numbers','rng'], answer:'random', explanation:'random provides many randomization functions.'},
 
 {id:287, category:'python', question:'What does *args represent?', options:['Keyword arguments','Variable positional arguments','Static arguments','Integer args'], answer:'Variable positional arguments', explanation:'*args collects unlimited positional arguments.'},
 
 {id:288, category:'python', question:'What does **kwargs represent?', options:['Fixed arguments','Dictionary arguments','Variable keyword arguments','List arguments'], answer:'Variable keyword arguments', explanation:'**kwargs collects unlimited keyword args.'},
 
 {id:289, category:'python', question:'Which built-in function finds max value?', options:['maximum()','max()','largest()','big()'], answer:'max()', explanation:'Returns the highest element.'},
 
 {id:290, category:'python', question:'Which statement creates a virtual environment?', options:['virtualenv start','python -m venv env','pip start env','create venv'], answer:'python -m venv env', explanation:'This command creates a Python venv.'},
 
 {id:291, category:'python', question:'Which module is used for scientific computing?', options:['numpy','pandas','tkinter','sci'], answer:'numpy', explanation:'NumPy powers scientific computing in Python.'},
 
 {id:292, category:'python', question:'What is monkey patching?', options:['Fixing bugs','Runtime modification','Testing','Debugging'], answer:'Runtime modification', explanation:'Monkey patching modifies code at runtime.'},
 
 {id:293, category:'python', question:'What is __str__ used for?', options:['Representation','Memory','Creation','Indexing'], answer:'Representation', explanation:'__str__ returns a readable string form.'},
 
 {id:294, category:'python', question:'Which python method is called when an object is deleted?', options:['__end__','__delete__','__del__','__destroy__'], answer:'__del__', explanation:'Called when an object is garbage-collected.'},
 
 {id:295, category:'python', question:'Which keyword allows inheritance?', options:['extends','inherits','superclass','class B(A)'], answer:'class B(A)', explanation:'Python uses class B(A) syntax for inheritance.'},
 
 {id:296, category:'python', question:'Which module supports JSON operations?', options:['json','yaml','pickle','serialize'], answer:'json', explanation:'json handles JSON serialization.'},
 
 {id:297, category:'python', question:'What does list.pop() do?', options:['Adds','Deletes last item','Sorts list','Shifts items'], answer:'Deletes last item', explanation:'pop() removes and returns the last element.'},
 
 {id:298, category:'python', question:'Which method copies a list?', options:['clone()','copy()','duplicate()','replicate()'], answer:'copy()', explanation:'copy() creates a shallow copy.'},
 
 {id:299, category:'python', question:'Which module is used for GUI applications?', options:['pygame','tkinter','Qt','kivy'], answer:'tkinter', explanation:'tkinter is Python’s built-in GUI module.'},
 
 {id:300, category:'python', question:'Which library handles HTTP requests?', options:['requests','browser','fetch','urllib'], answer:'requests', explanation:'requests is widely used for API/HTTP calls.'},
 
 {id:301, category:'python', question:'Which statement defines a constant?', options:['const','final','Constant','Python has no constants'], answer:'Python has no constants', explanation:'By convention, uppercase variable names act as constants.'},
 
 {id:302, category:'python', question:'What does zip() do?', options:['Join strings','Combine iterables','Compress files','Encode data'], answer:'Combine iterables', explanation:'zip() pairs items from multiple iterables.'},
 
 {id:303, category:'python', question:'Which operator compares identity?', options:['=','= =','===','is'], answer:'is', explanation:'is checks object identity.'},
 
 {id:304, category:'python', question:'Which operator checks membership?', options:['in','of','inside','contains'], answer:'in', explanation:'Used to check if a value exists in a collection.'},
 
 {id:305, category:'python', question:'Which function sorts a list?', options:['order()','sorted()','arrange()','organize()'], answer:'sorted()', explanation:'sorted() returns a new sorted list.'},
 
 {id:306, category:'python', question:'Which keyword is used inside functions to return values?', options:['return','output','send','exit'], answer:'return', explanation:'return sends a value back to the caller.'},
 
 {id:307, category:'python', question:'Which Python file stores environment variables?', options:['config.py','.pythonenv','.env','settings.txt'], answer:'.env', explanation:'Environment variables are commonly stored in .env files.'},
 
 {id:308, category:'python', question:'Which Python version introduced f-strings?', options:['2.7','3.0','3.6','3.10'], answer:'3.6', explanation:'f-strings were introduced in Python 3.6.'},
 
 {id:309, category:'python', question:'What is the output of bool("False")?', options:['False','True','None','Error'], answer:'True', explanation:'Non-empty strings evaluate to True.'},
 
 {id:310, category:'python', question:'Which operator merges dictionaries?', options:['+','*','|','&'], answer:'|', explanation:'The | operator merges dictionaries in Python 3.9+'},
 
 {id:311, category:'MAD', question:'Which language is primarily used for Android development?', options:['Swift','Kotlin','Dart','React'], answer:'Kotlin', explanation:'Kotlin is now Google’s recommended language for Android.'},
 
 {id:312, category:'MAD', question:'Which language is used for iOS development?', options:['Java','Swift','Kotlin','C#'], answer:'Swift', explanation:'Swift is the official language for building iOS apps.'},
 
 {id:313, category:'MAD', question:'What is the file extension for Android layout files?', options:['.json','.xml','.html','.ui'], answer:'.xml', explanation:'Android UI layouts are written in XML.'},
 
 {id:314, category:'MAD', question:'Which framework is used for cross-platform development?', options:['React Native','TensorFlow','NumPy','Flask'], answer:'React Native', explanation:'React Native builds apps for iOS and Android.'},
 
 {id:315, category:'MAD', question:'Which tool is used to build Android apps?', options:['Visual Studio','Xcode','Android Studio','PyCharm'], answer:'Android Studio', explanation:'Official IDE provided by Google.'},
 
 {id:316, category:'MAD', question:'Flutter uses which programming language?', options:['Java','Swift','Kotlin','Dart'], answer:'Dart', explanation:'Flutter apps are written in Dart.'},
 
 {id:317, category:'MAD', question:'What is an APK?', options:['iOS file','Mac file','Android app package','Web app'], answer:'Android app package', explanation:'APK is the installable package for Android apps.'},
 
 {id:318, category:'MAD', question:'What is an IPA file?', options:['Android app','iOS app file','Image file','Plugin'], answer:'iOS app file', explanation:'IPA is the installable package for iOS apps.'},
 
 {id:319, category:'MAD', question:'What is ADB used for?', options:['Debugging Android devices','Building iOS apps','Web hosting','Database access'], answer:'Debugging Android devices', explanation:'ADB helps communicate with Android devices.'},
 
 {id:320, category:'MAD', question:'Which layout is commonly used in Android?', options:['LinearLayout','StackLayout','FrameLayout','FlexLayout'], answer:'LinearLayout', explanation:'Most common Android layout container.'},
 
 {id:321, category:'MAD', question:'What is the default iOS UI framework?', options:['Jetpack','UIKit','Material UI','Vuetify'], answer:'UIKit', explanation:'UIKit powers native iOS interfaces.'},
 
 {id:322, category:'MAD', question:'What is the purpose of Gradle?', options:['Database system','Build automation tool','UI framework','Compiler'], answer:'Build automation tool', explanation:'Gradle compiles and packages Android projects.'},
 
 {id:323, category:'MAD', question:'Which widget is the base of Flutter UI?', options:['Component','Widget','View','Element'], answer:'Widget', explanation:'Everything in Flutter is a widget.'},
 
 {id:324, category:'MAD', question:'What does SDK stand for?', options:['Software Development Kit','System Data Kernel','Standard Development Key','Software Driver Kit'], answer:'Software Development Kit', explanation:'SDK contains tools for building applications.'},
 
 {id:325, category:'MAD', question:'Which command creates a new Flutter project?', options:['flutter init','flutter new','flutter create','flutter run'], answer:'flutter create', explanation:'Creates a new Flutter application.'},
 
 {id:326, category:'MAD', question:'What is the main UI file in an Android project?', options:['MainActivity.xml','index.html','activity_main.xml','layout.xml'], answer:'activity_main.xml', explanation:'This is the default layout file.'},
 
 {id:327, category:'MAD', question:'What is Jetpack Compose?', options:['iOS SDK','Android declarative UI toolkit','Database tool','Game engine'], answer:'Android declarative UI toolkit', explanation:'Jetpack Compose is Android’s modern UI framework.'},
 
 {id:328, category:'MAD', question:'Which iOS tool is used to publish apps?', options:['App Store Connect','Firebase','GitHub','Heroku'], answer:'App Store Connect', explanation:'Apps are uploaded through App Store Connect.'},
 
 {id:329, category:'MAD', question:'Which file contains app permissions in Android?', options:['manifest.xml','config.xml','app.json','settings.xml'], answer:'manifest.xml', explanation:'AndroidManifest.xml stores permissions.'},
 
 {id:330, category:'MAD', question:'What is the root widget in Flutter apps?', options:['Application','Root','MaterialApp','MainView'], answer:'MaterialApp', explanation:'Provides structure for Flutter UI.'},
 
 {id:331, category:'MAD', question:'Which programming language is used for React Native?', options:['Java','Swift','JavaScript','Dart'], answer:'JavaScript', explanation:'React Native uses JavaScript/TypeScript.'},
 
 {id:332, category:'MAD', question:'What is the UI framework used in React Native?', options:['SwiftUI','UIKit','JavaFX','React'], answer:'React', explanation:'React Native uses React components for UI.'},
 
 {id:333, category:'MAD', question:'Which platform uses SwiftUI?', options:['Android','iOS','Windows','Linux'], answer:'iOS', explanation:'SwiftUI is Apple’s declarative UI framework.'},
 
 {id:334, category:'MAD', question:'Which Android lifecycle method is called first?', options:['onStart()','onCreate()','onResume()','onPause()'], answer:'onCreate()', explanation:'Called when the activity is created.'},
 
 {id:335, category:'MAD', question:'Which tool is used for iOS UI designing?', options:['Interface Builder','Callback Builder','UI Designer','Storyboard Editor'], answer:'Interface Builder', explanation:'Available in Xcode for UI construction.'},
 
 {id:336, category:'MAD', question:'Hot Reload is a feature of which framework?', options:['Flutter','Android Studio','Xcode','React'], answer:'Flutter', explanation:'Hot Reload quickly refreshes UI changes.'},
 
 {id:337, category:'MAD', question:'What does APK stand for?', options:['Android Kit','Android Package Kit','App Program Key','Application Kernel'], answer:'Android Package Kit', explanation:'The installable package for Android.'},
 
 {id:338, category:'MAD', question:'Which API is used for maps in Android?', options:['Google Maps API','MapBox','HTML Maps','OSM'], answer:'Google Maps API', explanation:'Most used for mobile mapping.'},
 
 {id:339, category:'MAD', question:'What language is used for Xamarin?', options:['C++','Swift','C#','Kotlin'], answer:'C#', explanation:'Xamarin apps are written in C#.'},
 
 {id:340, category:'MAD', question:'Which Firebase service handles authentication?', options:['Firestore','Storage','Auth','Functions'], answer:'Auth', explanation:'Firebase Auth handles user authentication.'},
 
 {id:341, category:'MAD', question:'Which pattern is common in mobile apps?', options:['MVC','MVP','MVVM','All of the above'], answer:'All of the above', explanation:'All patterns are used in mobile development.'},
 
 {id:342, category:'MAD', question:'Which tool is used to test Android apps?', options:['JUnit','Espresso','RoboTest','Mocha'], answer:'Espresso', explanation:'Espresso is Android’s UI testing tool.'},
 
 {id:343, category:'MAD', question:'What is a Fragment in Android?', options:['Background task','UI component','Compiler','Database'], answer:'UI component', explanation:'Fragments represent parts of UI inside activities.'},
 
 {id:344, category:'MAD', question:'Which library is used for local storage in React Native?', options:['LocalDB','AsyncStorage','TinyDB','ReactStorage'], answer:'AsyncStorage', explanation:'Used for storing small key-value pairs.'},
 
 {id:345, category:'MAD', question:'What is Cocoa Touch?', options:['Android SDK','iOS framework','Windows framework','Linux toolkit'], answer:'iOS framework', explanation:'Cocoa Touch builds iOS applications.'},
 
 {id:346, category:'MAD', question:'Which command runs a Flutter app?', options:['flutter start','flutter build','flutter run','flutter debug'], answer:'flutter run', explanation:'Used to run an app on emulator or device.'},
 
 {id:347, category:'MAD', question:'Which Android layout adapts to screen sizes?', options:['RelativeLayout','ConstraintLayout','LinearLayout','FrameLayout'], answer:'ConstraintLayout', explanation:'Best for responsive UI.'},
 
 {id:348, category:'MAD', question:'Which mobile database works offline?', options:['MySQL','Firebase','SQLite','MongoDB'], answer:'SQLite', explanation:'SQLite runs locally on devices.'},
 
 {id:349, category:'MAD', question:'Which is used for push notifications?', options:['Firebase Cloud Messaging','WebSockets','AWS Lambda','HTTP'], answer:'Firebase Cloud Messaging', explanation:'FCM handles push notifications.'},
 
 {id:350, category:'MAD', question:'Which iOS file contains app metadata?', options:['app.json','info.plist','manifest.xml','metadata.xml'], answer:'info.plist', explanation:'Used for configurations and permissions.'},
 
 {id:351, category:'MAD', question:'What is Android Jetpack?', options:['Database','UI theme','Framework for Android components','Debugger'], answer:'Framework for Android components', explanation:'Jetpack provides libraries for Android architecture.'},
 
 {id:352, category:'MAD', question:'What is the purpose of RecyclerView?', options:['Display lists efficiently','Database storage','Animations','Networking'], answer:'Display lists efficiently', explanation:'RecyclerView improves list performance.'},
 
 {id:353, category:'MAD', question:'Which Flutter command installs packages?', options:['flutter add','flutter install','flutter pub get','flutter fetch'], answer:'flutter pub get', explanation:'Downloads dependencies from pubspec.yaml.'},
 
 {id:354, category:'MAD', question:'Which tool monitors Android logs?', options:['LogReader','Logcat','Console','ADB Log'], answer:'Logcat', explanation:'Used to view logs in Android Studio.'},
 
 {id:355, category:'MAD', question:'Which file stores Flutter dependencies?', options:['package.json','pubspec.yaml','composer.json','flutter.json'], answer:'pubspec.yaml', explanation:'All Flutter dependencies are listed here.'},
 
 {id:356, category:'MAD', question:'Which React Native command starts a new project?', options:['npm start','react-native build','npx react-native init','npm create rn'], answer:'npx react-native init', explanation:'Creates a new project.'},
 
 {id:357, category:'MAD', question:'Which service stores images in Firebase?', options:['Firestore','Storage','Commands','Hosting'], answer:'Storage', explanation:'Firebase Storage keeps images & files.'},
 
 {id:358, category:'MAD', question:'What is a launch screen?', options:['Loading page','Login page','Settings screen','Exit page'], answer:'Loading page', explanation:'Shown while app initializes.'},
 
 {id:359, category:'MAD', question:'Which iOS tool tests apps?', options:['XCTest','JUnit','Mocha','PyTest'], answer:'XCTest', explanation:'XCTest is Apple’s testing framework.'},
 
 {id:360, category:'MAD', question:'Which Android class loads images from URLs?', options:['BitmapURL','Glide','Paint','ImageView'], answer:'Glide', explanation:'Glide is a popular image loader.'},
 
 {id:361, category:'MAD', question:'What does iOS use for layouts?', options:['XML','CSS','Storyboard','HTML'], answer:'Storyboard', explanation:'Interface Builder builds screens using storyboards.'},
 
 {id:362, category:'MAD', question:'Which protocol is used for APIs in mobile apps?', options:['HTTP','FTP','DNS','SMTP'], answer:'HTTP', explanation:'Most API requests use HTTP/HTTPS.'},
 
 {id:363, category:'MAD', question:'Which object stores state in Flutter?', options:['StatefulWidget','StatelessWidget','Provider','Future'], answer:'StatefulWidget', explanation:'Used when UI changes dynamically.'},
 
 {id:364, category:'MAD', question:'Which React Native component creates scrollable lists?', options:['ListView','FlatList','ScrollList','ListBlock'], answer:'FlatList', explanation:'Efficient list component.'},
 
 {id:365, category:'MAD', question:'What does UI stand for?', options:['User Instruction','User Interface','Universal Input','User Integration'], answer:'User Interface', explanation:'UI is the visible part of an app.'},
 
 {id:366, category:'MAD', question:'What is UX?', options:['User Xperience','Universal Experience','User Experience','User Exchange'], answer:'User Experience', explanation:'UX focuses on interaction experience.'},
 
 {id:367, category:'MAD', question:'Which Android format stores string resources?', options:['strings.xml','string.json','text.xml','values.txt'], answer:'strings.xml', explanation:'All text resources are stored here.'},
 
 {id:368, category:'MAD', question:'Which Flutter widget creates a button?', options:['TextButton','ClickButton','Button','MainButton'], answer:'TextButton', explanation:'Flutter uses TextButton, ElevatedButton, etc.'},
 
 {id:369, category:'MAD', question:'Which tool emulates mobile devices?', options:['Emulator','Navigator','Simulator','Compiler'], answer:'Emulator', explanation:'Used for testing apps.'},
 
 {id:370, category:'MAD', question:'Which Apple tool simulates iPhone apps?', options:['Simulator','Emulator','PhoneTester','iTest'], answer:'Simulator', explanation:'Built into Xcode.'},
 
 {id:371, category:'MAD', question:'Which Android library simplifies networking?', options:['Retrofit','Volley','OkHttp','All of the above'], answer:'All of the above', explanation:'These three are common for networking.'},
 
 {id:372, category:'MAD', question:'What is TestFlight used for?', options:['Web hosting','iOS beta testing','Android deployment','Data storage'], answer:'iOS beta testing', explanation:'Apple uses TestFlight for beta apps.'},
 
 {id:373, category:'MAD', question:'Which storage option is secure in mobile apps?', options:['SharedPrefs','LocalStorage','SecureStorage','Files'], answer:'SecureStorage', explanation:'Encrypts sensitive data.'},
 
 {id:374, category:'MAD', question:'Which architecture is recommended for Android?', options:['Layered','MVVM','Pipeline','State'], answer:'MVVM', explanation:'MVVM is widely used in Android development.'},
 
 {id:375, category:'MAD', question:'What is a widget tree?', options:['Database tree','UI hierarchy','File structure','API tree'], answer:'UI hierarchy', explanation:'Flutter UI is built from a tree of widgets.'},
 
 {id:376, category:'MAD', question:'What does NPM stand for?', options:['Node Package Manager','Network Package Module','Native Programming Manager','None'], answer:'Node Package Manager', explanation:'Used to manage React Native packages.'},
 
 {id:377, category:'MAD', question:'Which data format is used in APIs?', options:['HTML','JSON','CSS','TXT'], answer:'JSON', explanation:'JSON is the default API format.'},
 
 {id:378, category:'MAD', question:'Which Android tool signs apps?', options:['zipSigner','jarsigner','keytool','ADB signer'], answer:'jarsigner', explanation:'Used for APK signing.'},
 
 {id:379, category:'MAD', question:'Which graphic format is recommended for app icons?', options:['JPEG','SVG','PNG','TIFF'], answer:'PNG', explanation:'PNG supports transparency and high quality.'},
 
 {id:380, category:'MAD', question:'Which layer handles business logic?', options:['UI','Domain','Data','Core'], answer:'Domain', explanation:'Domain layer contains business logic.'},
 
 {id:311, category:'ai', question:'What is supervised learning?', options:['Learning with labeled data','Learning without data','Learning from rewards','Learning from random guesses'], answer:'Learning with labeled data', explanation:'Supervised learning uses labeled datasets for training models.'},
 
 {id:312, category:'ai', question:'Which algorithm is commonly used for classification?', options:['KNN','K-Means','Apriori','DBSCAN'], answer:'KNN', explanation:'KNN is a supervised classification algorithm.'},
 
 {id:313, category:'ai', question:'Which concept refers to “the ability of a model to perform well on unseen data”?', options:['Overfitting','Underfitting','Generalization','Bias'], answer:'Generalization', explanation:'Generalization is how well a model performs on new unseen data.'},
 
 {id:314, category:'ai', question:'Which ML algorithm is used for clustering?', options:['Decision Tree','Random Forest','K-Means','Linear Regression'], answer:'K-Means', explanation:'K-Means is an unsupervised clustering algorithm.'},
 
 {id:315, category:'ai', question:'Which of the following is a loss function?', options:['ReLU','MSE','Softmax','Sigmoid'], answer:'MSE', explanation:'Mean Squared Error is a loss function for regression tasks.'},
 
 {id:316, category:'ai', question:'Deep learning models are mainly built using?', options:['Decision Trees','Neural Networks','Heuristics','Rule-based systems'], answer:'Neural Networks', explanation:'Deep learning relies on deep neural networks.'},
 
 {id:317, category:'ai', question:'Which activation function outputs only 0 or 1?', options:['Softmax','Sigmoid','ReLU','Step Function'], answer:'Step Function', explanation:'The step function produces binary output.'},
 
 {id:318, category:'ai', question:'Gradient Descent is used to?', options:['Increase error','Update model weights','Generate features','Remove outliers'], answer:'Update model weights', explanation:'Gradient Descent optimizes weights by minimizing the loss.'},
 
 {id:319, category:'ai', question:'Which library is used for deep learning?', options:['NumPy','Pandas','TensorFlow','Matplotlib'], answer:'TensorFlow', explanation:'TensorFlow is a popular deep learning framework.'},
 
 {id:320, category:'ai', question:'What does CNN stand for?', options:['Central Neural Network','Convolutional Neural Network','Control Neural Net','Continuous Net Node'], answer:'Convolutional Neural Network', explanation:'CNNs are used for image processing and computer vision.'},
 
 {id:321, category:'ai', question:'RNNs are best used for?', options:['Tabular Data','Time Series','Images','Maps'], answer:'Time Series', explanation:'Recurrent Neural Networks capture sequential patterns.'},
 
 {id:322, category:'ai', question:'What is overfitting?', options:['Model performs well on training but poorly on test data','Model performs poorly everywhere','Model ignores training data','Model learns too slow'], answer:'Model performs well on training but poorly on test data', explanation:'Overfitting occurs when the model memorizes training data.'},
 
 {id:323, category:'ai', question:'Which is used to reduce overfitting?', options:['Dropout','Increasing layers','Increasing epochs','Removing test set'], answer:'Dropout', explanation:'Dropout randomly removes neurons during training to prevent overfitting.'},
 
 {id:324, category:'ai', question:'Which technique is used for dimensionality reduction?', options:['PCA','SVM','Logistic Regression','Naive Bayes'], answer:'PCA', explanation:'Principal Component Analysis reduces feature dimensions.'},
 
 {id:325, category:'ai', question:'Which model is used for Natural Language Processing?', options:['CNN','RNN','Linear Regression','SVM'], answer:'RNN', explanation:'RNNs and LSTMs are widely used in NLP tasks.'},
 
 {id:326, category:'ai', question:'Which tool is used for building ML pipelines?', options:['scikit-learn','NumPy','OpenCV','PIL'], answer:'scikit-learn', explanation:'Sklearn supports ML pipelines and preprocessing.'},
 
 {id:327, category:'ai', question:'Which term refers to the difference between predicted and actual values?', options:['Error','Label','Feature','Bias'], answer:'Error', explanation:'Error measures how far predictions are from true values.'},
 
 {id:328, category:'ai', question:'Softmax is typically used in?', options:['Binary classification','Multi-class classification','Regression','Clustering'], answer:'Multi-class classification', explanation:'Softmax outputs probability distribution across classes.'},
 
 {id:329, category:'ai', question:'What is reinforcement learning based on?', options:['Labeled data','Unlabeled data','Rewards and penalties','Random decisions'], answer:'Rewards and penalties', explanation:'RL uses reward feedback to learn optimal actions.'},
 
 {id:330, category:'ai', question:'Which algorithm is used for regression?', options:['Logistic Regression','Linear Regression','K-Means','Naive Bayes'], answer:'Linear Regression', explanation:'Linear regression predicts continuous numeric values.'},
 
 {id:331, category:'ai', question:'Which neural network is best for images?', options:['RNN','CNN','LSTM','GAN'], answer:'CNN', explanation:'CNNs use convolutional layers to analyze images.'},
 
 {id:332, category:'ai', question:'Which is NOT an activation function?', options:['Tanh','ReLU','Sigmoid','Gradient'], answer:'Gradient', explanation:'Gradient is not an activation function.'},
 
 {id:333, category:'ai', question:'GANs are used for?', options:['Clustering','Generating images','Regression','Classification'], answer:'Generating images', explanation:'GANs generate new synthetic data samples.'},
 
 {id:334, category:'ai', question:'Which model is best for translation?', options:['Transformer','Decision Tree','CNN','SVM'], answer:'Transformer', explanation:'Transformers are the foundation of modern NLP models.'},
 
 {id:335, category:'ai', question:'Bias in ML refers to?', options:['Noise in data','Error from wrong assumptions','Model complexity','Learning rate'], answer:'Error from wrong assumptions', explanation:'Bias measures how much predictions differ from actual patterns.'},
 
 {id:336, category:'ai', question:'What is an epoch?', options:['One full pass over dataset','One batch','One prediction','One training variable'], answer:'One full pass over dataset', explanation:'Epoch is a complete iteration over training data.'},
 
 {id:337, category:'ai', question:'Which algorithm builds decision boundaries using hyperplanes?', options:['KNN','SVM','CNN','RNN'], answer:'SVM', explanation:'Support Vector Machines create hyperplanes to separate data.'},
 
 {id:338, category:'ai', question:'What is feature scaling used for?', options:['Increase features','Normalize numeric values','Remove features','Add noise'], answer:'Normalize numeric values', explanation:'Scaling ensures features contribute equally to model learning.'},
 
 {id:339, category:'ai', question:'Which function is used in binary classification output?', options:['ReLU','Sigmoid','Softmax','Tanh'], answer:'Sigmoid', explanation:'Sigmoid outputs values between 0 and 1.'},
 
 {id:340, category:'ai', question:'Which is a type of data augmentation?', options:['Increasing batch size','Image rotation','More labels','Removing noise'], answer:'Image rotation', explanation:'Data augmentation expands training data artificially.'},
 
 {id:341, category:'ai', question:'Which ML task is sentiment analysis?', options:['Regression','Clustering','Classification','Forecasting'], answer:'Classification', explanation:'Sentiment analysis categorizes text sentiment.'},
 
 {id:342, category:'ai', question:'Which is a common ML evaluation metric?', options:['Confusion Matrix','Brightness','Contrast','Color Depth'], answer:'Confusion Matrix', explanation:'Confusion matrices evaluate classification performance.'},
 
 {id:343, category:'ai', question:'Which term describes a variable used to make predictions?', options:['Feature','Label','Noise','Bias'], answer:'Feature', explanation:'Features are inputs used for model training.'},
 
 {id:344, category:'ai', question:'Which is used for object detection?', options:['YOLO','SVM','LSTM','Naive Bayes'], answer:'YOLO', explanation:'YOLO is a real-time object detection model.'},
 
 {id:345, category:'ai', question:'Which model handles long-term dependencies?', options:['CNN','LSTM','Decision Tree','Simple RNN'], answer:'LSTM', explanation:'LSTMs solve vanishing gradient issues for sequences.'},
 
 {id:346, category:'ai', question:'Which metric is used in regression?', options:['Accuracy','MSE','Recall','Precision'], answer:'MSE', explanation:'MSE measures error in regression predictions.'},
 
 {id:347, category:'ai', question:'A dataset imbalance affects?', options:['Accuracy','Recall','All ML metrics','Scaling'], answer:'All ML metrics', explanation:'Imbalanced datasets can distort performance metrics.'},
 
 {id:348, category:'ai', question:'What does NLP stand for?', options:['Natural Learning Programming','Natural Language Processing','Network Language Protocol','Node Language Processing'], answer:'Natural Language Processing', explanation:'NLP enables computers to understand human language.'},
 
 {id:349, category:'ai', question:'Which tool is used for ML model deployment?', options:['TensorFlow Serving','NumPy','OpenCV','Seaborn'], answer:'TensorFlow Serving', explanation:'Used for deploying ML models into production.'},
 
 {id:350, category:'ai', question:'Which technique prevents exploding gradients?', options:['Batching','Clipping','Dropout','Augmentation'], answer:'Clipping', explanation:'Gradient clipping limits gradient magnitude.'},
 
 {id:351, category:'ai', question:'Which optimizer is widely used in deep learning?', options:['SGD','Adam','GD','Rprop'], answer:'Adam', explanation:'Adam combines momentum + adaptive learning rates.'},
 
 {id:352, category:'ai', question:'Which framework is used for ML in JavaScript?', options:['TensorFlow.js','React','Flutter','Bootstrap'], answer:'TensorFlow.js', explanation:'Deep learning models can run in browsers.'},
 
 {id:353, category:'ai', question:'Which system mimics the human brain?', options:['Rule-based systems','Neural Networks','SQL','Logic gates'], answer:'Neural Networks', explanation:'Neural networks are modeled after the human brain.'},
 
 {id:354, category:'ai', question:'What is the first step in ML?', options:['Model training','Data collection','Hyperparameter tuning','Testing'], answer:'Data collection', explanation:'ML projects begin with gathering data.'},
 
 {id:355, category:'ai', question:'Which is a type of neural network weight initializer?', options:['Xavier','ReLU','Sigmoid','Adam'], answer:'Xavier', explanation:'Xavier improves training stability.'},
 
 {id:356, category:'ai', question:'Which term describes training too long?', options:['Underfitting','Overtraining','Bias','Noise'], answer:'Overtraining', explanation:'Overtraining leads to overfitting.'},
 
 {id:357, category:'ai', question:'Which model extracts image features?', options:['CNN','LSTM','Transformer','KNN'], answer:'CNN', explanation:'CNNs detect patterns in images.'},
 
 {id:358, category:'ai', question:'Which technique is used for sequence-to-sequence tasks?', options:['Transformers','Naive Bayes','KNN','SVM'], answer:'Transformers', explanation:'Transformers excel in translation and sequence tasks.'},
 
 {id:359, category:'ai', question:'Which approach uses Q-learning?', options:['Reinforcement Learning','Supervised Learning','Unsupervised Learning','Semi-supervised Learning'], answer:'Reinforcement Learning', explanation:'Q-learning is an RL technique.'},
 
 {id:360, category:'ai', question:'Which model generates text?', options:['GPT','SVM','CNN','K-Means'], answer:'GPT', explanation:'GPT models produce human-like text.'},
 
 {id:361, category:'ai', question:'Which technique reduces ML training time?', options:['Batch training','Overfitting','High learning rate','Random trees'], answer:'Batch training', explanation:'Batching improves efficiency and performance.'},
 
 {id:362, category:'ai', question:'Which image dataset is used in ML research?', options:['Fashion-MNIST','SQL','CSV','HTML'], answer:'Fashion-MNIST', explanation:'Fashion-MNIST is common for image classification.'},
 
 {id:363, category:'ai', question:'Which is a cloud ML service?', options:['AWS SageMaker','VS Code','Nmap','Git'], answer:'AWS SageMaker', explanation:'SageMaker supports training + deploying ML models.'},
 
 {id:364, category:'ai', question:'Which model uses “attention”?', options:['Transformers','KNN','Decision Tree','CNN'], answer:'Transformers', explanation:'Transformers use self-attention mechanisms.'},
 
 {id:365, category:'ai', question:'Which is part of data preprocessing?', options:['Scaling','Training','Hyperparameter tuning','Prediction'], answer:'Scaling', explanation:'Scaling is applied before training.'},
 
 {id:366, category:'ai', question:'Which file format stores ML datasets?', options:['CSV','EXE','DLL','APK'], answer:'CSV', explanation:'CSV is widely used for storing datasets.'},
 
 {id:367, category:'ai', question:'Which method detects anomalies?', options:['Isolation Forest','SVM','Linear Regression','LSTM'], answer:'Isolation Forest', explanation:'Isolation Forest identifies outliers.'},
 
 {id:368, category:'ai', question:'Which ML task is image classification?', options:['Supervised learning','Unsupervised learning','RL','Hybrid'], answer:'Supervised learning', explanation:'Image classification requires labeled examples.'},
 
 {id:369, category:'ai', question:'Which term describes noise in data?', options:['Irrelevant randomness','Feature importance','Bias','Prediction'], answer:'Irrelevant randomness', explanation:'Noise decreases model accuracy.'},
 
 {id:370, category:'ai', question:'Which method selects best features?', options:['Feature selection','Batching','ReLU','Dropout'], answer:'Feature selection', explanation:'Feature selection removes irrelevant attributes.'},
 
 {id:371, category:'ai', question:'Which metric is used for clustering evaluation?', options:['Silhouette Score','Accuracy','Precision','Recall'], answer:'Silhouette Score', explanation:'Silhouette score measures cluster separation.'},
 
 {id:372, category:'ai', question:'Which process improves model accuracy?', options:['Hyperparameter tuning','Ignoring errors','Removing training data','Random guessing'], answer:'Hyperparameter tuning', explanation:'Tuning improves model performance.'},
 
 {id:373, category:'ai', question:'Which algorithm predicts house prices?', options:['Linear Regression','SVM','CNN','GAN'], answer:'Linear Regression', explanation:'Regression predicts numeric values.'},
 
 {id:374, category:'ai', question:'Which concept describes training on few samples?', options:['Few-shot learning','Batch learning','Clustering','Feature extraction'], answer:'Few-shot learning', explanation:'Few-shot learning trains models with minimal examples.'},
 
 {id:375, category:'ai', question:'Which language is most used for ML?', options:['Python','Java','C','PHP'], answer:'Python', explanation:'Python has powerful ML libraries.'},
 
 {id:376, category:'ai', question:'Which library is used for image processing?', options:['OpenCV','Pandas','Matplotlib','Seaborn'], answer:'OpenCV', explanation:'OpenCV processes images and videos.'},
 
 {id:377, category:'ai', question:'Which model is trained using backpropagation?', options:['Neural Networks','Decision Trees','KNN','Random Forest'], answer:'Neural Networks', explanation:'Backpropagation updates neural network weights.'},
 
 {id:378, category:'ai', question:'What is the output of a sigmoid function?', options:['0 to 1','-1 to 1','Integers','Images'], answer:'0 to 1', explanation:'Sigmoid squashes values between 0 and 1.'},
 
 {id:379, category:'ai', question:'Which technique improves stability during training?', options:['Batch Normalization','Increasing epochs','Removing dropout','Lower learning rate'], answer:'Batch Normalization', explanation:'BatchNorm stabilizes and speeds up training.'},
 
 {id:380, category:'ai', question:'Which technique is used for text vectorization?', options:['Word2Vec','CNN','PCA','KNN'], answer:'Word2Vec', explanation:'Word2Vec converts text into numeric vectors.'},
 
 // ---------------- DATABASE DEVELOPER QUESTIONS (70) ----------------
 
 {id:381, category:'db', question:'What is a database?', options:['A data storage system','A programming language','An operating system','A network device'], answer:'A data storage system', explanation:'A database stores and organizes data for easy access.'},
 
 {id:382, category:'db', question:'Which SQL statement is used to retrieve data?', options:['GET','SELECT','FETCH','TAKE'], answer:'SELECT', explanation:'SELECT retrieves data from a database table.'},
 
 {id:383, category:'db', question:'What does SQL stand for?', options:['Structured Query Language','Simple Query Library','System Query Logic','Stored Query List'], answer:'Structured Query Language', explanation:'SQL is used to manage relational databases.'},
 
 {id:384, category:'db', question:'Which clause filters records?', options:['WHERE','SET','FROM','ORDER BY'], answer:'WHERE', explanation:'WHERE is used to filter data based on conditions.'},
 
 {id:385, category:'db', question:'What is a primary key?', options:['A unique identifier','A duplicated field','A foreign record','A stored procedure'], answer:'A unique identifier', explanation:'A primary key uniquely identifies table records.'},
 
 {id:386, category:'db', question:'What is a foreign key?', options:['Key referencing another table','A random key','Duplicate key','Encrypted token'], answer:'Key referencing another table', explanation:'Foreign keys create relationships between tables.'},
 
 {id:387, category:'db', question:'Which SQL command is used to remove a table?', options:['DELETE','REMOVE','DROP','CLEAR'], answer:'DROP', explanation:'DROP permanently deletes a database object.'},
 
 {id:388, category:'db', question:'Which SQL keyword sorts data?', options:['SORT BY','GROUP','ORDER BY','FILTER'], answer:'ORDER BY', explanation:'ORDER BY sorts results in ascending or descending order.'},
 
 {id:389, category:'db', question:'Which JOIN returns only matching rows?', options:['LEFT JOIN','RIGHT JOIN','INNER JOIN','FULL JOIN'], answer:'INNER JOIN', explanation:'INNER JOIN selects only matching records from both tables.'},
 
 {id:390, category:'db', question:'What is normalization?', options:['Organizing data to reduce redundancy','Duplicating data','Encrypting tables','Sorting data'], answer:'Organizing data to reduce redundancy', explanation:'Normalization removes duplication and improves consistency.'},
 
 {id:391, category:'db', question:'Which SQL function counts rows?', options:['SUM()','COUNT()','LENGTH()','ROWS()'], answer:'COUNT()', explanation:'COUNT() returns the number of rows.'},
 
 {id:392, category:'db', question:'What does ACID stand for?', options:['Atomicity Consistency Isolation Durability','Active Cache Indexed Database','Automatic Control Internal Data','Applied Consistency ID'], answer:'Atomicity Consistency Isolation Durability', explanation:'ACID ensures reliability in database transactions.'},
 
 {id:393, category:'db', question:'Which database type supports tables and relations?', options:['Relational','NoSQL','File storage','Flat data'], answer:'Relational', explanation:'Relational databases store data in tables with relationships.'},
 
 {id:394, category:'db', question:'Which of the following is a NoSQL database?', options:['MySQL','MongoDB','PostgreSQL','Oracle'], answer:'MongoDB', explanation:'MongoDB is a document-based NoSQL database.'},
 
 {id:395, category:'db', question:'Which keyword removes duplicate values?', options:['DISTINCT','UNIQUE','FILTER','SEPARATE'], answer:'DISTINCT', explanation:'DISTINCT hides repeated values in results.'},
 
 {id:396, category:'db', question:'Which SQL clause groups rows?', options:['GROUP BY','ORDER BY','WHERE','LIMIT'], answer:'GROUP BY', explanation:'GROUP BY groups rows by column values.'},
 
 {id:397, category:'db', question:'Which command adds a new row?', options:['INSERT','INCLUDE','ADD','APPEND'], answer:'INSERT', explanation:'INSERT adds new records to a table.'},
 
 {id:398, category:'db', question:'Which command updates table records?', options:['CHANGE','UPDATE','SET','EDIT'], answer:'UPDATE', explanation:'UPDATE modifies existing records.'},
 
 {id:399, category:'db', question:'Which command removes table records?', options:['REMOVE','DELETE','DROP','CUT'], answer:'DELETE', explanation:'DELETE removes specific rows.'},
 
 {id:400, category:'db', question:'Which command creates a new table?', options:['CREATE TABLE','NEW TABLE','MAKE TABLE','ADD TABLE'], answer:'CREATE TABLE', explanation:'Used to create new tables.'},
 
 {id:401, category:'db', question:'What is an index?', options:['A query','A tool for faster search','A table','A join type'], answer:'A tool for faster search', explanation:'Indexes speed up data retrieval operations.'},
 
 {id:402, category:'db', question:'Which index ensures unique values?', options:['Full-text index','Non-unique index','Unique index','Sparse index'], answer:'Unique index', explanation:'Unique indexes prevent duplicate values.'},
 
 {id:403, category:'db', question:'What is a stored procedure?', options:['Saved SQL code','A join type','Table structure','Backup file'], answer:'Saved SQL code', explanation:'Stored procedures store SQL code that can be reused.'},
 
 {id:404, category:'db', question:'What is a trigger?', options:['Automatic SQL execution','Security policy','Backup plan','Query filter'], answer:'Automatic SQL execution', explanation:'Triggers run automatically in response to events.'},
 
 {id:405, category:'db', question:'Which SQL command limits results?', options:['LIMIT','STOP','END','BREAK'], answer:'LIMIT', explanation:'LIMIT controls number of records returned.'},
 
 {id:406, category:'db', question:'What is denormalization?', options:['Adding redundancy for speed','Removing redundancy','Encrypting data','Indexing'], answer:'Adding redundancy for speed', explanation:'Denormalization improves performance at cost of redundancy.'},
 
 {id:407, category:'db', question:'Which clause is used with aggregate functions?', options:['GROUP BY','ORDER BY','WHERE','JOIN'], answer:'GROUP BY', explanation:'Aggregate functions often require GROUP BY.'},
 
 {id:408, category:'db', question:'Which SQL command creates a database?', options:['MAKE DATABASE','CREATE DATABASE','INIT DATABASE','NEW DATABASE'], answer:'CREATE DATABASE', explanation:'Creates a new database instance.'},
 
 {id:409, category:'db', question:'What is a schema?', options:['Logical database structure','A backup file','A user account','A function'], answer:'Logical database structure', explanation:'A schema defines tables, fields, and relationships.'},
 
 {id:410, category:'db', question:'Which JOIN retrieves all rows even without matches?', options:['INNER JOIN','FULL OUTER JOIN','LEFT JOIN','CROSS JOIN'], answer:'FULL OUTER JOIN', explanation:'Returns all records from both tables.'},
 
 {id:411, category:'db', question:'What does CRUD stand for?', options:['Create Read Update Delete','Copy Replace Update Destroy','Create Remove Upload Download','Change Reset Update Drop'], answer:'Create Read Update Delete', explanation:'CRUD refers to four basic DB operations.'},
 
 {id:412, category:'db', question:'What is a transaction?', options:['A sequence of operations','A join type','A backup','An index'], answer:'A sequence of operations', explanation:'Transactions group SQL statements into a single unit.'},
 
 {id:413, category:'db', question:'Which command rolls back a transaction?', options:['BACK','UNDO','ROLLBACK','REVERSE'], answer:'ROLLBACK', explanation:'ROLLBACK undoes changes made in a transaction.'},
 
 {id:414, category:'db', question:'What does COMMIT do?', options:['Saves transaction changes','Deletes rows','Creates tables','Sorts data'], answer:'Saves transaction changes', explanation:'COMMIT permanently saves transactions.'},
 
 {id:415, category:'db', question:'Which key allows NULL values?', options:['Primary key','Foreign key','Unique key','Identifier key'], answer:'Foreign key', explanation:'Foreign key columns can allow NULL unless restricted.'},
 
 {id:416, category:'db', question:'Which datatype stores long text?', options:['VARCHAR','TEXT','INT','FLOAT'], answer:'TEXT', explanation:'TEXT stores long strings.'},
 
 {id:417, category:'db', question:'What is cardinality?', options:['Uniqueness of data','Table count','Table size','Memory usage'], answer:'Uniqueness of data', explanation:'Cardinality measures uniqueness in database columns.'},
 
 {id:418, category:'db', question:'Which SQL operator finds patterns?', options:['PATTERN','MATCH','LIKE','SIMILAR'], answer:'LIKE', explanation:'LIKE is used for pattern matching.'},
 
 {id:419, category:'db', question:'Which wildcard matches any characters?', options:['#','?','%','*'], answer:'%', explanation:'% matches any sequence of characters in SQL LIKE.'},
 
 {id:420, category:'db', question:'What is a view?', options:['Virtual table','Backup','Stored table','Primary key'], answer:'Virtual table', explanation:'Views display data from one or more tables without storing it.'},
 
 {id:421, category:'db', question:'Which operator selects between ranges?', options:['BETWEEN','WITHIN','AMONG','RANGE'], answer:'BETWEEN', explanation:'BETWEEN checks if a value is within a range.'},
 
 {id:422, category:'db', question:'What is a composite key?', options:['Multiple columns as primary key','Encrypted key','Foreign key','Temporary key'], answer:'Multiple columns as primary key', explanation:'Composite keys use more than one column.'},
 
 {id:423, category:'db', question:'What is replication?', options:['Copying data across servers','Deleting duplicates','Creating indexes','Executing stored procedures'], answer:'Copying data across servers', explanation:'Replication increases availability and reliability.'},
 
 {id:424, category:'db', question:'What is sharding?', options:['Horizontal database partitioning','Vertical scaling','Indexing','Backup'], answer:'Horizontal database partitioning', explanation:'Sharding splits data across multiple servers.'},
 
 {id:425, category:'db', question:'Which command modifies table structure?', options:['ALTER TABLE','UPDATE TABLE','CHANGE TABLE','MODIFY'], answer:'ALTER TABLE', explanation:'ALTER modifies table structure.'},
 
 {id:426, category:'db', question:'What is a deadlock?', options:['Multiple transactions waiting on each other','Server shutdown','Incorrect query','Data loss'], answer:'Multiple transactions waiting on each other', explanation:'Deadlocks occur when two processes block each other.'},
 
 {id:427, category:'db', question:'What does NULL represent?', options:['No value','Zero','Empty string','False'], answer:'No value', explanation:'NULL means unknown or missing data.'},
 
 {id:428, category:'db', question:'Which SQL constraint enforces a rule?', options:['CHECK','VERIFY','FORCE','RULE'], answer:'CHECK', explanation:'CHECK validates data inserted into columns.'},
 
 {id:429, category:'db', question:'Which SQL command copies a table?', options:['CLONE TABLE','COPY TABLE','CREATE TABLE AS','REPLICATE TABLE'], answer:'CREATE TABLE AS', explanation:'Creates a new table using SELECT.'},
 
 {id:430, category:'db', question:'What is an ER diagram?', options:['Entity Relationship diagram','Enhanced Relational diagram','Entity Routing diagram','External Relation diagram'], answer:'Entity Relationship diagram', explanation:'ERD models database entities and relationships.'},
 
 {id:431, category:'db', question:'What is an auto-increment?', options:['Automatically increasing values','Automatic join','Auto backup','Auto formatting'], answer:'Automatically increasing values', explanation:'Auto-increment generates unique numeric values.'},
 
 {id:432, category:'db', question:'Which database supports SQL?', options:['MySQL','MongoDB','Firebase','Redis'], answer:'MySQL', explanation:'MySQL is a relational SQL database.'},
 
 {id:433, category:'db', question:'Which command removes duplicates from results?', options:['DISTINCT','FILTER','REMOVE','ORDER'], answer:'DISTINCT', explanation:'DISTINCT eliminates duplicate rows.'},
 
 {id:434, category:'db', question:'Which data type stores decimal values?', options:['INT','FLOAT','BOOLEAN','TEXT'], answer:'FLOAT', explanation:'FLOAT stores decimal numeric values.'},
 
 {id:435, category:'db', question:'Which function returns the highest value?', options:['HIGH()','MAX()','TOP()','UPPER()'], answer:'MAX()', explanation:'MAX() returns the largest value.'},
 
 {id:436, category:'db', question:'Which is a non-relational database?', options:['PostgreSQL','SQLite','Cassandra','MariaDB'], answer:'Cassandra', explanation:'Cassandra is a distributed NoSQL database.'},
 
 {id:437, category:'db', question:'What is indexing used for?', options:['Speeding up searches','Deleting data','Formatting tables','User control'], answer:'Speeding up searches', explanation:'Indexes make queries faster.'},
 
 {id:438, category:'db', question:'What is the result of CROSS JOIN?', options:['Cartesian product','Matching rows only','Right table rows only','Left table rows only'], answer:'Cartesian product', explanation:'CROSS JOIN combines all rows from both tables.'},
 
 {id:439, category:'db', question:'Which clause is used for filtering groups?', options:['HAVING','WHERE','GROUP','FILTER'], answer:'HAVING', explanation:'HAVING filters groups after aggregation.'},
 
 {id:440, category:'db', question:'What is a data warehouse?', options:['Large analytical database','Operational database','Transaction system','Temporary cache'], answer:'Large analytical database', explanation:'Used for reporting and analytics.'},
 
 {id:441, category:'db', question:'Which SQL function sums values?', options:['TOTAL()','ADD()','SUM()','COUNT()'], answer:'SUM()', explanation:'SUM() adds numeric values.'},
 
 {id:442, category:'db', question:'What is OLAP?', options:['Online Analytical Processing','Online Access Protocol','Offline Access Point','Object Layer and Processing'], answer:'Online Analytical Processing', explanation:'OLAP supports complex analytical queries.'},
 
 {id:443, category:'db', question:'Which part of SQL defines database structure?', options:['DDL','DML','DCL','TCL'], answer:'DDL', explanation:'DDL (Data Definition Language) defines DB objects.'},
 
 {id:444, category:'db', question:'Which part of SQL manipulates data?', options:['DML','DDL','DCL','TCL'], answer:'DML', explanation:'DML handles INSERT, UPDATE, DELETE.'},
 
 {id:445, category:'db', question:'Which SQL command removes all rows but keeps table structure?', options:['CLEAR','DELETE','DROP','TRUNCATE'], answer:'TRUNCATE', explanation:'TRUNCATE removes data but keeps table definition.'},
 
 {id:446, category:'db', question:'Which NoSQL type is Redis?', options:['Document','Graph','Key-value','Column'], answer:'Key-value', explanation:'Redis is a key-value database.'},
 
 {id:447, category:'db', question:'What is data integrity?', options:['Accuracy and consistency of data','Database speed','Storage type','User accounts'], answer:'Accuracy and consistency of data', explanation:'Data integrity ensures data correctness over time.'},
 
 {id:448, category:'db', question:'Which SQL operator combines results of two queries?', options:['JOIN','MERGE','UNION','MATCH'], answer:'UNION', explanation:'UNION merges results from two SELECT queries.'},
 
 {id:449, category:'db', question:'Which graph database is popular?', options:['Neo4j','MySQL','SQLite','Oracle'], answer:'Neo4j', explanation:'Neo4j is a widely used graph database.'},
 
 {id:450, category:'db', question:'Which command grants user permission?', options:['ALLOW','PERMIT','GRANT','ENABLE'], answer:'GRANT', explanation:'GRANT gives permissions in DCL (Data Control Language).'},
 
  // 🔐 CYBER SECURITY QUESTIONS (70) 
 {id:246, category:'sec', question:'What is the primary goal of cybersecurity?', 
 options:['Confidentiality, Integrity, Availability', 'High system speed', 'Reduced storage', 'Better UI'], 
 answer:'Confidentiality, Integrity, Availability', 
 explanation:'The CIA triad defines the core foundation of cybersecurity.'},
 
 {id:247, category:'sec', question:'Which attack uses overwhelming traffic to make a system unavailable?', 
 options:['DDoS', 'SQL Injection', 'Phishing', 'MITM'], 
 answer:'DDoS', 
 explanation:'Distributed Denial of Service floods a target with excessive traffic.'},
 
 {id:248, category:'sec', question:'What does VPN stand for?', 
 options:['Virtual Private Network', 'Verified Process Node', 'Virtual Protocol Network', 'Velocity Proxy Net'], 
 answer:'Virtual Private Network', 
 explanation:'VPNs encrypt connections over public networks.'},
 
 {id:249, category:'sec', question:'What is phishing?', 
 options:['Malicious email deception', 'Network upgrade', 'Database query', 'Valid system update'], 
 answer:'Malicious email deception', 
 explanation:'Phishing tricks users into revealing sensitive data.'},
 
 {id:250, category:'sec', question:'Which encryption is stronger?', 
 options:['AES-256', 'AES-64', 'DES', 'ROT13'], 
 answer:'AES-256', 
 explanation:'AES-256 is currently the industry standard for strong encryption.'},
 
 {id:251, category:'sec', question:'What is a firewall?', 
 options:['Network traffic filter', 'Programming tool', 'Cloud storage', 'Password manager'], 
 answer:'Network traffic filter', 
 explanation:'Firewalls control inbound and outbound traffic.'},
 
 {id:252, category:'sec', question:'Which attack targets human psychology?', 
 options:['Social engineering', 'SQL injection', 'ARP spoofing', 'XSS'], 
 answer:'Social engineering', 
 explanation:'Attackers manipulate people rather than systems.'},
 
 {id:253, category:'sec', question:'What is brute-force attack?', 
 options:['Password guessing', 'Data encryption', 'VPN bypass', 'Traffic routing'], 
 answer:'Password guessing', 
 explanation:'Attackers try many possible passwords until one works.'},
 
 {id:254, category:'sec', question:'What is hashing used for?', 
 options:['Password storage', 'Video compression', 'Network routing', 'Image editing'], 
 answer:'Password storage', 
 explanation:'Hashes store passwords securely using a one-way function.'},
 
 {id:255, category:'sec', question:'Which tool is used for network packet analysis?', 
 options:['Wireshark', 'Figma', 'Excel', 'VS Code'], 
 answer:'Wireshark', 
 explanation:'Wireshark captures and analyzes packets.'},
 
 {id:256, category:'sec', question:'What is SQL Injection?', 
 options:['Injecting malicious SQL queries', 'Image update', 'Cloud configuration', 'Frontend API call'], 
 answer:'Injecting malicious SQL queries', 
 explanation:'Attackers manipulate queries to access unauthorized data.'},
 
 {id:257, category:'sec', question:'What does 2FA mean?', 
 options:['Two-Factor Authentication', 'Two File Access', 'Temporary File Allocation', 'Two Frame Architecture'], 
 answer:'Two-Factor Authentication', 
 explanation:'2FA adds an extra layer of verification.'},
 
 {id:258, category:'sec', question:'Which is NOT a malware type?', 
 options:['Trojan', 'Worm', 'Firewall', 'Ransomware'], 
 answer:'Firewall', 
 explanation:'Firewalls are protective tools, not malware.'},
 
 {id:259, category:'sec', question:'Ransomware does what?', 
 options:['Encrypts files for payment', 'Deletes cookies', 'Improves connection', 'Optimizes CPU'], 
 answer:'Encrypts files for payment', 
 explanation:'Ransomware locks user data until ransom is paid.'},
 
 {id:260, category:'sec', question:'What is penetration testing?', 
 options:['Simulated cyberattack', 'Database backup', 'Server installation', 'Code linting'], 
 answer:'Simulated cyberattack', 
 explanation:'Pen testing identifies system vulnerabilities.'},
 
 {id:261, category:'sec', question:'What is MFA?', 
 options:['Multi-Factor Authentication', 'Master File Access', 'Mainframe Analyzer', 'Multi Frequency Audit'], 
 answer:'Multi-Factor Authentication', 
 explanation:'MFA requires multiple verification methods.'},
 
 {id:262, category:'sec', question:'What does HTTPS provide?', 
 options:['Encrypted web communication', 'Page speed improvement', 'Server reboot', 'File backup'], 
 answer:'Encrypted web communication', 
 explanation:'HTTPS uses TLS to secure data between client and server.'},
 
 {id:263, category:'sec', question:'Which is a password hashing algorithm?', 
 options:['bcrypt', 'HTML', 'FTP', 'PNG'], 
 answer:'bcrypt', 
 explanation:'bcrypt is a secure slow-hashing algorithm.'},
 
 {id:264, category:'sec', question:'Which attack intercepts traffic between two parties?', 
 options:['Man-in-the-Middle', 'Brute force', 'XSS', 'Phishing'], 
 answer:'Man-in-the-Middle', 
 explanation:'MITM attacks involve eavesdropping on communication.'},
 
 {id:265, category:'sec', question:'What is a botnet?', 
 options:['Network of compromised devices', 'Cloud server', 'Email filter', 'DNS manager'], 
 answer:'Network of compromised devices', 
 explanation:'Botnets often perform coordinated attacks like DDoS.'},
 
 {id:266, category:'sec', question:'What is XSS?', 
 options:['Cross-Site Scripting', 'Cross-System Security', 'Extended Secure Script', 'Xtra Safe Setting'], 
 answer:'Cross-Site Scripting', 
 explanation:'XSS injects malicious scripts into websites.'},
 
 {id:267, category:'sec', question:'What is salting in password security?', 
 options:['Adding random data to hashes', 'Encrypting keys', 'Removing logs', 'Increasing bandwidth'], 
 answer:'Adding random data to hashes', 
 explanation:'Salting prevents rainbow table attacks.'},
 
 {id:268, category:'sec', question:'Which port does HTTPS use?', 
 options:['443', '80', '21', '53'], 
 answer:'443', 
 explanation:'HTTPS communicates over port 443.'},
 
 {id:269, category:'sec', question:'What is symmetric encryption?', 
 options:['Same key for encryption/decryption', 'Different keys for each user', 'No key required', 'Public-only encryption'], 
 answer:'Same key for encryption/decryption', 
 explanation:'Symmetric encryption uses a shared secret key.'},
 
 {id:270, category:'sec', question:'Which is an example of asymmetric encryption?', 
 options:['RSA', 'AES', 'DES', 'Blowfish'], 
 answer:'RSA', 
 explanation:'RSA uses public and private keys.'},
 
 {id:271, category:'sec', question:'What is malware?', 
 options:['Malicious software', 'System update', 'Text editor', 'Network cable'], 
 answer:'Malicious software', 
 explanation:'Malware harms or exploits systems.'},
 
 {id:272, category:'sec', question:'Best practice for password creation?', 
 options:['Long + unique + complex', 'Short and common', 'Only numbers', 'Using birthdate'], 
 answer:'Long + unique + complex', 
 explanation:'Strong passwords resist brute force.'},
 
 {id:273, category:'sec', question:'What is cybersecurity hardening?', 
 options:['Reducing attack surface', 'Deleting apps', 'Increasing UI animations', 'Disabling internet'], 
 answer:'Reducing attack surface', 
 explanation:'Hardening strengthens system security.'},
 
 {id:274, category:'sec', question:'What is a security audit?', 
 options:['Formal security evaluation', 'UI update', 'JavaScript testing', 'Content moderation'], 
 answer:'Formal security evaluation', 
 explanation:'Audits review policies, configurations, and vulnerabilities.'},
 
 {id:275, category:'sec', question:'What does IDS stand for?', 
 options:['Intrusion Detection System', 'Image Data Scheme', 'Internet Domain Service', 'Internal Debug Shell'], 
 answer:'Intrusion Detection System', 
 explanation:'IDS monitors networks for malicious activities.'},
 
 {id:276, category:'sec', question:'What does IPS do?', 
 options:['Blocks threats in real-time', 'Stores images', 'Compresses logs', 'Manages emails'], 
 answer:'Blocks threats in real-time', 
 explanation:'IPS prevents malicious activities detected by IDS logic.'},
 
 {id:277, category:'sec', question:'What is ransomware recovery best practice?', 
 options:['Restore from backup', 'Pay the attacker', 'Ignore the issue', 'Disable antivirus'], 
 answer:'Restore from backup', 
 explanation:'Backups prevent permanent data loss.'},
 
 {id:278, category:'sec', question:'Which protocol secures WiFi?', 
 options:['WPA3', 'FTP', 'SMTP', 'POP3'], 
 answer:'WPA3', 
 explanation:'WPA3 is the most secure WiFi protocol.'},
 
 {id:279, category:'sec', question:'What is OWASP known for?', 
 options:['Top 10 web vulnerabilities', 'Mobile apps', 'UI design', 'Game development'], 
 answer:'Top 10 web vulnerabilities', 
 explanation:'OWASP publishes global security standards.'},
 
 {id:280, category:'sec', question:'Which attack involves overloading memory?', 
 options:['Buffer overflow', 'XSS', 'Phishing', 'MITM'], 
 answer:'Buffer overflow', 
 explanation:'Buffer overflow manipulates memory to execute code.'},
 
 {id:281, category:'sec', question:'What is digital forensics?', 
 options:['Investigating cyber incidents', 'Data compression', 'UI testing', 'Wireframing'], 
 answer:'Investigating cyber incidents', 
 explanation:'Forensics analyzes digital evidence.'},
 
 {id:282, category:'sec', question:'What is a honeypot?', 
 options:['Decoy system for attackers', 'Video editor', 'Password policy', 'Proxy server'], 
 answer:'Decoy system for attackers', 
 explanation:'Honeypots lure attackers to study their behavior.'},
 
 {id:283, category:'sec', question:'Which port is used by SSH?', 
 options:['22', '8080', '110', '8888'], 
 answer:'22', 
 explanation:'SSH uses port 22 for secure shell access.'},
 
 {id:284, category:'sec', question:'What is keylogging?', 
 options:['Recording keystrokes', 'Encrypting files', 'Deleting logs', 'Resetting passwords'], 
 answer:'Recording keystrokes', 
 explanation:'Keyloggers capture user input to steal information.'},
 
 {id:285, category:'sec', question:'What is a Zero-Day vulnerability?', 
 options:['Unknown unpatched flaw', 'System upgrade', 'UI redesign', 'Slow network'], 
 answer:'Unknown unpatched flaw', 
 explanation:'Zero-days are exploited before developers know about them.'},
 
 {id:286, category:'sec', question:'What is DNS Spoofing?', 
 options:['Redirecting traffic to fake sites', 'Deleting DNS records', 'Speeding up DNS', 'Encrypting cookies'], 
 answer:'Redirecting traffic to fake sites', 
 explanation:'DNS spoofing manipulates DNS responses.'},
 
 {id:287, category:'sec', question:'What is a rootkit?', 
 options:['Stealthy malware hiding itself', 'VPN protocol', 'Web API', 'Antivirus'], 
 answer:'Stealthy malware hiding itself', 
 explanation:'Rootkits hide processes to avoid detection.'},
 
 {id:288, category:'sec', question:'What does TLS provide?', 
 options:['Secure communication', 'UI theming', 'DNS lookup', 'Password reset'], 
 answer:'Secure communication', 
 explanation:'TLS encrypts data in transit.'},
 
 {id:289, category:'sec', question:'What does hashing NOT allow?', 
 options:['Reversing to original value', 'Storing passwords', 'Integrity checks', 'Signing data'], 
 answer:'Reversing to original value', 
 explanation:'Hashing is one-way and cannot be reversed.'},
 
 {id:290, category:'sec', question:'What is patch management?', 
 options:['Installing security updates', 'Network sharing', 'Removing UI lag', 'Expanding storage'], 
 answer:'Installing security updates', 
 explanation:'Patches fix vulnerabilities in systems.'},
 
 {id:291, category:'sec', question:'What is the strongest authentication factor?', 
 options:['Biometrics', 'Password', 'PIN', 'Email'], 
 answer:'Biometrics', 
 explanation:'Biometric factors are hardest to replicate.'},
 
 {id:292, category:'sec', question:'What does EDR stand for?', 
 options:['Endpoint Detection and Response', 'Email Delivery Rate', 'Encrypted Data Relay', 'External Device Reader'], 
 answer:'Endpoint Detection and Response', 
 explanation:'EDR protects and monitors endpoint devices.'},
 
 {id:293, category:'sec', question:'What is spyware?', 
 options:['Software that collects user data secretly', 'Firewall rule', 'Encryption method', 'UI component'], 
 answer:'Software that collects user data secretly', 
 explanation:'Spyware monitors user activity without permission.'},
 
 {id:294, category:'sec', question:'Which attack injects malicious scripts into dynamic websites?', 
 options:['XSS', 'Phishing', 'MITM', 'RAT'], 
 answer:'XSS', 
 explanation:'Cross-site scripting executes JavaScript on victims’ browsers.'},
 
 {id:295, category:'sec', question:'What is a security token?', 
 options:['Physical/electronic authentication device', 'VPN server', 'Malware scanner', 'Firewall'], 
 answer:'Physical/electronic authentication device', 
 explanation:'Tokens provide additional authentication security.'},
 
 {id:296, category:'sec', question:'What is a vulnerability scan?', 
 options:['Automated system weaknesses check', 'Manual testing', 'DNS lookup', 'System reboot'], 
 answer:'Automated system weaknesses check', 
 explanation:'Scanners detect known vulnerabilities.'},
 
 {id:297, category:'sec', question:'What is encryption at rest?', 
 options:['Encrypting stored data', 'Encrypting network traffic', 'UI protection', 'Code obfuscation'], 
 answer:'Encrypting stored data', 
 explanation:'Data at rest encryption protects files stored on disk.'},
 
 {id:298, category:'sec', question:'What is a digital certificate?', 
 options:['Electronic proof of identity', 'Hard drive backup', 'IP address', 'Authentication cookie'], 
 answer:'Electronic proof of identity', 
 explanation:'Certificates verify identity via PKI.'},
 
 {id:299, category:'sec', question:'What is social engineering primarily aimed at?', 
 options:['Human manipulation', 'Server cleanup', 'Code compilation', 'Network routing'], 
 answer:'Human manipulation', 
 explanation:'Humans are often the weakest link.'},
 
 {id:300, category:'sec', question:'Which tool is used for password cracking?', 
 options:['John the Ripper', 'Figma', 'Notepad', 'Chrome'], 
 answer:'John the Ripper', 
 explanation:'It is a popular password cracking tool.'},
 
 {id:301, category:'sec', question:'What is cyber hygiene?', 
 options:['Routine security best practices', 'Network cleaning', 'Desktop organization', 'Password writing'], 
 answer:'Routine security best practices', 
 explanation:'Cyber hygiene maintains healthy system security.'},
 
 {id:302, category:'sec', question:'What is secure coding?', 
 options:['Writing code to minimize vulnerabilities', 'UI optimization', 'Debugging UI', 'Database formatting'], 
 answer:'Writing code to minimize vulnerabilities', 
 explanation:'Developers must write secure code to prevent exploits.'},
 
 {id:303, category:'sec', question:'What is a WAF?', 
 options:['Web Application Firewall', 'Wireless Access Filter', 'Windows App Finder', 'Web Accelerator Framework'], 
 answer:'Web Application Firewall', 
 explanation:'WAF protects web apps from common vulnerabilities.'},
 
 {id:304, category:'sec', question:'What is DLP?', 
 options:['Data Loss Prevention', 'Data Link Protocol', 'DNS Load Proxy', 'Dynamic Line Policy'], 
 answer:'Data Loss Prevention', 
 explanation:'DLP restricts sensitive data from leaving systems.'},
 
 {id:305, category:'sec', question:'What does the principle of least privilege mean?', 
 options:['Users get minimum required permissions', 'All users get admin access', 'No permissions are given', 'Full root access'], 
 answer:'Users get minimum required permissions', 
 explanation:'It reduces security risks by limiting access.'},
 
 {id:306, category:'sec', question:'What is an exploit?', 
 options:['Code used to take advantage of a vulnerability', 'UI update', 'Firewall rule', 'Mobile app'], 
 answer:'Code used to take advantage of a vulnerability', 
 explanation:'Exploits attack system weaknesses.'},
 
 {id:307, category:'sec', question:'What is a threat actor?', 
 options:['Person/party performing cyber attack', 'Firewall rule', 'Security patch', 'Network admin'], 
 answer:'Person/party performing cyber attack', 
 explanation:'Threat actors include hackers and insiders.'},
 
 {id:308, category:'sec', question:'What is a RAT?', 
 options:['Remote Access Trojan', 'Random Access Tool', 'Root Admin Terminal', 'Real-time Alert Tracker'], 
 answer:'Remote Access Trojan', 
 explanation:'RATs give attackers remote control of systems.'},
 
 {id:309, category:'sec', question:'What is multi-layered security called?', 
 options:['Defense in Depth', 'SSL', 'Hardening', 'Filtering'], 
 answer:'Defense in Depth', 
 explanation:'Defense in depth uses multiple protective layers.'},
 
 {id:310, category:'sec', question:'What is VPN used for?', 
 options:['Secure remote connection', 'Speeding up WiFi', 'Making apps free', 'Deleting logs'], 
 answer:'Secure remote connection', 
 explanation:'VPNs encrypt traffic and hide IP addresses.'},
 
 {id:311, category:'sec', question:'Which is a cyber attack lifecycle model?', 
 options:['Kill Chain', 'SDLC', 'UI Flow', 'MVC'], 
 answer:'Kill Chain', 
 explanation:'The Cyber Kill Chain explains attacker progression.'},
 
 {id:312, category:'sec', question:'What is privilege escalation?', 
 options:['Gaining elevated permissions illegally', 'Increasing file size', 'Server optimization', 'Debugging'], 
 answer:'Gaining elevated permissions illegally', 
 explanation:'Attackers exploit vulnerabilities to get admin-level access.'},
 
 {id:313, category:'sec', question:'What is sandboxing?', 
 options:['Isolating programs for safety', 'Code compilation', 'User login', 'IP blocking'], 
 answer:'Isolating programs for safety', 
 explanation:'Sandboxes restrict applications from harming the system.'},
 
 {id:314, category:'sec', question:'Which cybersecurity framework is widely used?', 
 options:['NIST', 'Bootstrap', 'Flask', 'React'], 
 answer:'NIST', 
 explanation:'NIST provides comprehensive cybersecurity standards.'},
 
    { id:2, category:'FND', question:'What does CSS stand for?', options:['Cascading Style Sheets','Computer Style Sheets','Creative Style Syntax','Coded Style Script'], answer:'Cascading Style Sheets', explanation:'CSS styles HTML content.'},
    { id:3, category:'FND', question:'Which of these is a JavaScript framework?', options:['Django','Laravel','React','Flask'], answer:'React', explanation:'React is a JavaScript library for building UIs.'},
    { id:4, category:'FND', question:'Which tag is used to create a hyperlink?', options:['&lt;a&gt;','&lt;link&gt;','&lt;href&gt;','&lt;url&gt;'], answer:'&lt;a&gt;', explanation:'The <a> tag creates links.'},
    { id:5, category:'FND', question:'Which symbol starts a single-line comment in JavaScript?', options:['//','/*','<!--','##'], answer:'//', explanation:'// starts single-line comments.'},
    { id:6, category:'db', question:'Which of these is a relational database?', options:['MongoDB','MySQL','Cassandra','Redis'], answer:'MySQL', explanation:'MySQL is a widely used relational DBMS.'},
    { id:7, category:'net', question:'What does HTTP stand for?', options:['HyperText Transfer Protocol','Hyper Transfer Text Program','Hyperlink Transfer Protocol','Home Transfer Text Protocol'], answer:'HyperText Transfer Protocol', explanation:'HTTP is the foundation of data communication for the web.'},
    { id:8, category:'sec', question:'Which of the following is a common password attack?', options:['Phishing','Brute force','Caching','Indexing'], answer:'Brute force', explanation:'Brute force tries many passwords until success.'},
    { id:9, category:'ai', question:'What does AI stand for?', options:['Artificial Intelligence','Automated Information','Applied Interaction','Advanced Integration'], answer:'Artificial Intelligence', explanation:'AI refers to machines that perform tasks requiring human intelligence.'},
    { id:10, category:'python', question:'Which keyword defines a function in Python?', options:['def','function','fun','define'], answer:'def', explanation:'def starts a function definition.'},
    { id:11, category:'os', question:'Which OS uses kernel-based architecture known as monolithic kernel?', options:['Linux','MicrokernelOS','BrowserOS','ServerlessOS'], answer:'Linux', explanation:'Linux uses a monolithic kernel.'},
    { id:12, category:'ds', question:'Which data structure uses FIFO ordering?', options:['Stack','Queue','Tree','Graph'], answer:'Queue', explanation:'Queue follows First-In-First-Out.'},
    { id:13, category:'alg', question:'What is the average time complexity of binary search?', options:['O(n)','O(log n)','O(n log n)','O(1)'], answer:'O(log n)', explanation:'Binary search halves the search space each step.'},
    { id:14, category:'FND', question:'Which attribute specifies an image source in HTML?', options:['src','href','link','ref'], answer:'src', explanation:'src defines the image URL.'},
    { id:15, category:'FND', question:'Which CSS property controls element spacing inside its border?', options:['margin','padding','border','gap'], answer:'padding', explanation:'Padding is inside the element border.'},
    { id:16, category:'FND', question:'Which method converts a JSON string to a JavaScript object?', options:['JSON.parse()','JSON.stringify()','JSON.toObject()','JSON.convert()'], answer:'JSON.parse()', explanation:'JSON.parse parses JSON text.'},
    { id:17, category:'db', question:'Which SQL command is used to retrieve data?', options:['SELECT','INSERT','UPDATE','DELETE'], answer:'SELECT', explanation:'SELECT fetches rows from a table.'},
    { id:18, category:'net', question:'What does DNS stand for?', options:['Domain Name System','Data Name Service','Domain Number Server','Distributed Name System'], answer:'Domain Name System', explanation:'DNS resolves domain names to IP addresses.'},
    { id:19, category:'sec', question:'SSL and TLS are protocols for what?', options:['Encryption','Compression','Indexing','Rendering'], answer:'Encryption', explanation:'They secure data in transit.'},
    { id:20, category:'ai', question:'Which ML type uses labeled data for training?', options:['Supervised learning','Unsupervised learning','Reinforcement learning','Self-supervised learning'], answer:'Supervised learning', explanation:'Supervised learning trains on labeled examples.'},
    { id:21, category:'python', question:'Which symbol is used for indentation block in Python?', options:['Colon + indent','Braces {}','Parentheses ()','Angle brackets <>'], answer:'Colon + indent', explanation:'A colon starts a block and indentation follows.'},
    { id:22, category:'FND', question:'Which tag defines a table row in HTML?', options:['&lt;tr&gt;','&lt;td&gt;','&lt;th&gt;','&lt;table&gt;'], answer:'&lt;tr&gt;', explanation:'tr defines table row.'},
    { id:23, category:'FND', question:'Which value of display makes an element take only necessary width and allow others inline?', options:['inline-block','block','inline','flex'], answer:'inline-block', explanation:'inline-block allows block features inline.'},
    { id:24, category:'FND', question:'Which object stores key-value pairs in modern JS?', options:['Object','Array','Set','Map'], answer:'Map', explanation:'Map preserves insertion order and allows any key type.'},
    { id:25, category:'db', question:'Which database type stores documents like JSON?', options:['Relational DB','Document DB','Graph DB','Column DB'], answer:'Document DB', explanation:'Document DBs like MongoDB store documents.'},
    { id:26, category:'net', question:'Which layer in OSI handles routing between networks?', options:['Network layer','Transport layer','Application layer','Physical layer'], answer:'Network layer', explanation:'Network layer routes packets.'},
    { id:27, category:'sec', question:'What is two-factor authentication designed to provide?', options:['Two passwords','Extra security by two factors','Database replication','Single sign-on'], answer:'Extra security by two factors', explanation:'2FA requires two independent proofs.'},
    { id:28, category:'ai', question:'Which algorithm is commonly used for classification?', options:['Decision trees','K-means clustering','Apriori','PageRank'], answer:'Decision trees', explanation:'Decision trees are popular for classification.'},
    { id:29, category:'python', question:'Which built-in Python type holds ordered immutable sequence?', options:['list','tuple','set','dict'], answer:'tuple', explanation:'Tuple is immutable ordered sequence.'},
    { id:30, category:'os', question:'Which command lists files in Linux terminal?', options:['ls','dir','list','show'], answer:'ls', explanation:'ls shows directory contents.'},
    { id:31, category:'ds', question:'Which structure best models parent-child relationships?', options:['Graph','Queue','Tree','Array'], answer:'Tree', explanation:'Trees represent hierarchical parent-child.'},
    { id:32, category:'alg', question:'Which algorithm finds shortest paths in weighted graphs?', options:['Dijkstra','QuickSort','Depth-first search','Linear search'], answer:'Dijkstra', explanation:'Dijkstra computes shortest paths.'},
    { id:33, category:'FND', question:'Which attribute sets alternative text for an image?', options:['alt','title','desc','text'], answer:'alt', explanation:'alt gives alt text for images.'},
    { id:34, category:'FND', question:'Which CSS unit is relative to the root font size?', options:['rem','em','px','vw'], answer:'rem', explanation:'rem is relative to root font size.'},
    { id:35, category:'FND', question:'Which keyword declares a constant in JavaScript?', options:['const','let','var','constant'], answer:'const', explanation:'const declares a constant binding.'},
    { id:36, category:'db', question:'Which SQL clause filters rows returned by SELECT?', options:['WHERE','GROUP BY','HAVING','ORDER BY'], answer:'WHERE', explanation:'WHERE filters rows before grouping.'},
    { id:37, category:'net', question:'Which protocol uses port 443 by default?', options:['HTTP','FTP','SSH','HTTPS'], answer:'HTTPS', explanation:'HTTPS typically listens on 443.'},
    { id:38, category:'sec', question:'What does XSS stand for?', options:['Cross-site scripting','Cross-site security','Xml site script','Cross server scripting'], answer:'Cross-site scripting', explanation:'XSS injects scripts into web pages.'},
    { id:39, category:'ai', question:'In machine learning, what is overfitting?', options:['Model fits training too well','Model underperforms','Model size too small','No validation used'], answer:'Model fits training too well', explanation:'Overfitting reduces generalization.'},
    { id:40, category:'python', question:'Which operator is used for exponentiation in Python?', options:['**','^','pow','exp'], answer:'**', explanation:'** computes power in Python.'},
    { id:41, category:'os', question:'Which is a common desktop operating system?', options:['Android','iOS','Windows','Unix server'], answer:'Windows', explanation:'Windows is a common desktop OS.'},
    { id:42, category:'ds', question:'Which traversal visits root first then children?', options:['Inorder','Preorder','Postorder','Level order'], answer:'Preorder', explanation:'Preorder visits node before children.'},
    { id:43, category:'alg', question:'Which sorting algorithm has average O(n log n) complexity?', options:['Bubble sort','Insertion sort','Merge sort','Selection sort'], answer:'Merge sort', explanation:'Merge sort is O(n log n).' },
    { id:44, category:'FND', question:'Which HTML element is semantic for main content?', options:['&lt;main&gt;','&lt;div&gt;','&lt;section&gt;','&lt;article&gt;'], answer:'&lt;main&gt;', explanation:'main designates main document content.'},
    { id:45, category:'css', question:'Which property controls the flex basis in a flexbox?', options:['flex-basis','flex-grow','flex-shrink','align-items'], answer:'flex-basis', explanation:'flex-basis sets initial main size.'},
    { id:46, category:'FND', question:'Which event triggers when a form is submitted?', options:['submit','click','change','load'], answer:'submit', explanation:'submit fires on form submission.'},
    { id:47, category:'db', question:'Which index type improves equality searches?', options:['Hash index','Full-text index','Spatial index','B-tree index'], answer:'Hash index', explanation:'Hash indexes are efficient for equality.'},
    { id:48, category:'net', question:'Which address type uniquely identifies a device on the internet?', options:['IP address','MAC address','Subnet mask','Gateway'], answer:'IP address', explanation:'IP addresses route packets online.'},
    { id:49, category:'sec', question:'What is social engineering?', options:['Software exploit','Human manipulation technique','Encryption method','Network routing'], answer:'Human manipulation technique', explanation:'It manipulates people to reveal information.'},
    { id:50, category:'ai', question:'Which library is commonly used for deep learning in Python?', options:['TensorFlow','NumPy','Pandas','Matplotlib'], answer:'TensorFlow', explanation:'TensorFlow is a deep learning framework.'},
    { id:51, category:'python', question:'Which statement is used to handle exceptions in Python?', options:['try/except','catch/finally','handle/except','throw/catch'], answer:'try/except', explanation:'Use try and except to catch errors.'},
    { id:52, category:'os', question:'What does CPU stand for?', options:['Central Processing Unit','Computer Power Unit','Central Performance Unit','Control Processing Unit'], answer:'Central Processing Unit', explanation:'CPU executes program instructions.'},
    { id:53, category:'ds', question:'Which data structure offers average O(1) lookup for keys?', options:['Array','Hash table','Linked list','Binary tree'], answer:'Hash table', explanation:'Hash tables map keys to values quickly.'},
    { id:54, category:'alg', question:'Which algorithm is used for finding minimum spanning tree?', options:['Kruskal','Dijkstra','Bellman-Ford','DFS'], answer:'Kruskal', explanation:'Kruskal finds MST in weighted graphs.'},
    { id:55, category:'FND', question:'Which attribute adds a tooltip on hover?', options:['title','alt','hover','tooltip'], answer:'title', explanation:'title shows a tooltip on hover.'},
    { id:56, category:'FND', question:'Which property controls element transparency?', options:['opacity','visibility','display','z-index'], answer:'opacity', explanation:'opacity sets transparency level.'},
    { id:57, category:'FND', question:'Which function delays execution until after a specified time?', options:['setTimeout','setInterval','delay','sleep'], answer:'setTimeout', explanation:'setTimeout runs code once after delay.'},
    { id:58, category:'db', question:'Which SQL function calculates average value?', options:['AVG()','SUM()','COUNT()','MIN()'], answer:'AVG()', explanation:'AVG returns average of numeric column.'},
    { id:59, category:'net', question:'Which protocol is used for email retrieval?', options:['POP3','FTP','SSH','SNMP'], answer:'POP3', explanation:'POP3 retrieves email messages from server.'},
    { id:60, category:'sec', question:'Which is a best practice for secure passwords?', options:['Use long unique phrases','Use 123456','Use same password everywhere','Use simple words'], answer:'Use long unique phrases', explanation:'Long unique passphrases improve security.'},
    { id:61, category:'ai', question:'Which measure evaluates classification predictions?', options:['Accuracy','Latency','Throughput','Bandwidth'], answer:'Accuracy', explanation:'Accuracy measures correct predictions proportion.'},
    { id:62, category:'python', question:'Which library is best for data analysis in Python?', options:['Pandas','Flask','Django','Scikit-learn'], answer:'Pandas', explanation:'Pandas provides dataframes for analysis.'},
    { id:63, category:'os', question:'Which command is used to change directory in terminal?', options:['cd','ls','mv','cp'], answer:'cd', explanation:'cd changes current directory.'},
    { id:64, category:'ds', question:'Which data structure uses nodes with pointers?', options:['Array','Linked list','Stack','Queue'], answer:'Linked list', explanation:'Linked lists use node pointers.'},
    { id:65, category:'alg', question:'Which algorithm sorts by repeatedly swapping adjacent items?', options:['Bubble sort','Quick sort','Merge sort','Heap sort'], answer:'Bubble sort', explanation:'Bubble sort swaps neighbors repeatedly.'},
    { id:66, category:'FND', question:'Which element defines a block of navigation links?', options:['&lt;nav&gt;','&lt;header&gt;','&lt;section&gt;','&lt;aside&gt;'], answer:'&lt;nav&gt;', explanation:'nav is semantic for navigation links.'},
    { id:67, category:'FND', question:'Which CSS value centers text horizontally?', options:['text-align:center','align:center','justify:center','place:center'], answer:'text-align:center', explanation:'text-align centers inline content.'},
    { id:68, category:'FND', question:'Which operator checks strict equality in JavaScript?', options:['===','==','!=','!=='], answer:'===', explanation:'=== checks value and type equality.'},
    { id:69, category:'db', question:'What does ACID stand for in databases?', options:['Atomicity, Consistency, Isolation, Durability','Availability, Consistency, Indexing, Durability','Atomicity, Connectivity, Integrity, Durability','Accuracy, Consistency, Integrity, Data'], answer:'Atomicity, Consistency, Isolation, Durability', explanation:'ACID are key DB transaction properties.'},
    { id:70, category:'net', question:'Which device connects different networks together?', options:['Router','Switch','Hub','Bridge'], answer:'Router', explanation:'Routers forward packets between networks.'},
    { id:71, category:'sec', question:'What is phishing?', options:['A social engineering attack','A type of firewall','A malware scanner','A database backup'], answer:'A social engineering attack', explanation:'Phishing tricks users into revealing info.'},
    { id:72, category:'ai', question:'Which activation function is commonly used in neural networks?', options:['ReLU','Linear','Step','Log'], answer:'ReLU', explanation:'ReLU is common due to performance and gradient properties.'},
    { id:73, category:'python', question:'Which keyword creates a loop that iterates over items of a sequence?', options:['for','while','loop','iterate'], answer:'for', explanation:'for iterates over sequence items.'},
    { id:74, category:'os', question:'Which scheduling algorithm gives highest priority to shortest job?', options:['SJF','Round Robin','FIFO','Priority Scheduling'], answer:'SJF', explanation:'Shortest Job First schedules shortest tasks first.'},
    { id:75, category:'ds', question:'Which structure stores levels of a binary tree?', options:['Queue','Stack','Array','Hash'], answer:'Queue', explanation:'Queue used in BFS level traversal.'},
    { id:76, category:'alg', question:'Which algorithm is best for sorting large arrays on average?', options:['Quick sort','Bubble sort','Selection sort','Insertion sort'], answer:'Quick sort', explanation:'Quick sort is average O(n log n) and efficient.'},
    { id:77, category:'FND', question:'Which attribute makes an input required in a form?', options:['required','mandatory','needed','validate'], answer:'required', explanation:'required enforces input before submit.'},
    { id:78, category:'FND', question:'Which CSS selector targets elements by class?', options:['.classname','#id','element','*'], answer:'.classname', explanation:'Dot selects elements by class.'},
    { id:79, category:'FND', question:'Which statement creates a new array in JavaScript?', options:['[]','{}','()','new Array[]'], answer:'[]', explanation:'[] literal creates an array.'},
    { id:80, category:'db', question:'Which command adds a new row to a table?', options:['INSERT INTO','ADD ROW','NEW ROW','UPDATE'], answer:'INSERT INTO', explanation:'INSERT adds rows.'},
    { id:81, category:'net', question:'Which technology allows multiple virtual networks on one physical network?', options:['VLAN','VPN','NAT','DHCP'], answer:'VLAN', explanation:'VLAN segments networks logically.'},
    { id:82, category:'sec', question:'Which practice reduces attack surface for web apps?', options:['Input validation','Disable SSL','Open ports','Use default passwords'], answer:'Input validation', explanation:'Validation prevents many attacks.'},
    { id:83, category:'ai', question:'Which metric is used for regression model evaluation?', options:['Mean Squared Error','Accuracy','F1 score','Precision'], answer:'Mean Squared Error', explanation:'MSE measures average squared errors.'},
    { id:84, category:'python', question:'Which method adds an element to the end of a list?', options:['append()','push()','add()','insert()'], answer:'append()', explanation:'append adds item to list tail.'},
    { id:85, category:'os', question:'Which file system concept maps filenames to inodes?', options:['Unix file system','Windows registry','FAT table','NTFS MFT'], answer:'Unix file system', explanation:'Inodes store file metadata in Unix.'},
    { id:86, category:'ds', question:'Which is best for LIFO operations?', options:['Stack','Queue','Tree','Graph'], answer:'Stack', explanation:'Stack is Last-In-First-Out.'},
    { id:87, category:'alg', question:'Which algorithm uses divide and conquer for sorting?', options:['Merge sort','Bubble sort','Insertion sort','Selection sort'], answer:'Merge sort', explanation:'Merge sort divides and merges arrays.'},
    { id:88, category:'FND', question:'Which tag is used for page headings?', options:['&lt;h1&gt;','&lt;title&gt;','&lt;head&gt;','&lt;header&gt;'], answer:'&lt;h1&gt;', explanation:'h1 is main heading tag.'},
    { id:89, category:'FND', question:'Which property controls the layout of items in a flex container?', options:['display:flex','layout:flex','box:flex','flex-container'], answer:'display:flex', explanation:'display:flex activates flexbox layout.'},
    { id:90, category:'FND', question:'Which function schedules repeated execution at intervals?', options:['setInterval','setTimeout','requestAnimationFrame','clearInterval'], answer:'setInterval', explanation:'setInterval repeats callback at given interval.'},
    { id:91, category:'db', question:'Which normalization form removes repeating groups?', options:['1NF','2NF','3NF','BCNF'], answer:'1NF', explanation:'1NF ensures atomic values and no repeating groups.'},
    { id:92, category:'net', question:'Which protocol translates private IPs to public IPs?', options:['NAT','DNS','DHCP','ICMP'], answer:'NAT', explanation:'NAT maps private addresses to public addresses.'},
    { id:93, category:'sec', question:'Which tool analyzes network packets?', options:['Wireshark','Nmap','Metasploit','John the Ripper'], answer:'Wireshark', explanation:'Wireshark captures and inspects packets.'},
    { id:94, category:'ai', question:'Which technique reduces overfitting by adding penalty to weights?', options:['Regularization','Augmentation','Dropout','Batch normalization'], answer:'Regularization', explanation:'Regularization penalizes large weights.'},
    { id:95, category:'python', question:'Which comprehension creates a list from iterable?', options:['[x for x in iterable]','{x for x in iterable}','(x for x in iterable)','list(iterable)'], answer:'[x for x in iterable]', explanation:'List comprehensions produce lists concisely.'},
    { id:96, category:'os', question:'Which process handles hardware interruptions?', options:['Interrupt handler','Scheduler','Loader','Garbage collector'], answer:'Interrupt handler', explanation:'Interrupt handlers respond to hardware interrupts.'},
    { id:97, category:'ds', question:'Which traversal visits nodes level by level?', options:['Breadth-first search','Depth-first search','Preorder','Postorder'], answer:'Breadth-first search', explanation:'BFS traverses level by level.'},
    { id:98, category:'alg', question:'Which algorithm finds connected components in an undirected graph?', options:['Union-Find','Dijkstra','Prim','Kahn'], answer:'Union-Find', explanation:'Union-Find identifies components efficiently.'},
    { id:99, category:'FND', question:'Which meta tag sets the viewport for responsive design?', 
      options:['&lt;meta name=\"viewport\"...&gt;','&lt;meta charset&gt;','&lt;meta http-equiv&gt;','&lt;link rel=\"viewport\"&gt;'], answer:'&lt;meta name=\"viewport\"...&gt;', explanation:'Viewport meta enables responsive scaling.'},
    { id:100, category:'general', question:'Which term describes making a site accessible to people with disabilities?', options:['Accessibility','Responsiveness','Optimization','Indexing'], answer:'Accessibility', explanation:'Accessibility ensures use by people with disabilities.'}
    // {id:99, category:'BND', question:'What is the main purpose of Node.js in backend development?', options:['Running JavaScript on the server','Styling webpages','Managing databases only','Rendering HTML'], answer:'Running JavaScript on the server', explanation:'Node.js allows JavaScript to run on the server using the V8 engine.'},

     
  ];
  
  /* ========== UI references ========== */
  const startBtn = document.getElementById('startBtn');
  const sampleBtn = document.getElementById('sampleBtn');
  const userNameInput = document.getElementById('userName');
  const numQuestionsSelect = document.getElementById('numQuestions');
  const timeLimitInput = document.getElementById('timeLimit');
  const categorySelect = document.getElementById('category');
  
  const avatarText = document.getElementById('avatarText');
  const displayName = document.getElementById('displayName');
  const displayMeta = document.getElementById('displayMeta');
  
  const timeDisplay = document.getElementById('timeDisplay');
  const timeBar = document.getElementById('timeBar');
  const qProgress = document.getElementById('qProgress');
  const scoreLive = document.getElementById('scoreLive');
  
  const questionText = document.getElementById('questionText');
  const optionsWrap = document.getElementById('optionsWrap');
  
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const finishBtn = document.getElementById('finishBtn');
  const saveBtn = document.getElementById('saveBtn');
  
  const resultCard = document.getElementById('resultCard');
  const resultTitle = document.getElementById('resultTitle');
  const finalScore = document.getElementById('finalScore');
  const percentEl = document.getElementById('percent');
  const passMsg = document.getElementById('passMsg');
  const timeTakenEl = document.getElementById('timeTaken');
  const bestScoreEl = document.getElementById('bestScore');
  const printBtn = document.getElementById('printBtn');
  const shareBtn = document.getElementById('shareBtn');
  const retryBtn = document.getElementById('retryBtn');
  const savedMsg = document.getElementById('savedMsg');
  
  /* ========== State ========= */
  let quizState = {
    userName: 'Guest',
    totalTime: 120, // seconds
    numQuestions: 10,
    category: 'general',
    questions: [], // chosen questions
    currentIndex: 0,
    selectedAnswers: {}, // { questionId: selectedOption }
    score: 0,
    timer: null,
    timeLeft: 0,
    startedAt: null,
    endedAt: null,
    finished: false
  };
  
  /* ========== Utilities ========== */
  function formatTime(seconds){
    const m = Math.floor(seconds/60).toString().padStart(2,'0');
    const s = Math.floor(seconds%60).toString().padStart(2,'0');
    return `${m}:${s}`;
  }
  function shuffle(arr){
    return arr.slice().sort(()=>Math.random()-0.5);
  }
  function beep(frequency=440, duration=120, type='sine', vol=0.08){
    try {
      const ctx = new (window.AudioContext || window.webkitAudioContext)();
      const o = ctx.createOscillator();
      const g = ctx.createGain();
      o.type = type;
      o.frequency.value = frequency;
      g.gain.value = vol;
      o.connect(g);
      g.connect(ctx.destination);
      o.start(0);
      setTimeout(()=>{ o.stop(); ctx.close(); }, duration);
    } catch(e){
      // audio might be blocked by browser until user interaction
    }
  }
  
  /* ========== Load/Start Quiz ========= */
  function loadBestScore(){
    const key = 'noabyte_best';
    const raw = localStorage.getItem(key);
    bestScoreEl.textContent = raw ? raw + ' pts' : '—';
  }
  loadBestScore();
  
  sampleBtn.onclick = ()=>{
    userNameInput.value = 'Oladele Toluwani Janet';
    numQuestionsSelect.value = '10';
    timeLimitInput.value = 120;
    categorySelect.value = 'general';
  };
  
  startBtn.onclick = startQuiz;
  
  function startQuiz(){
    // read inputs
    const name = userNameInput.value.trim() || 'Guest';
    const totalTime = Math.max(15, parseInt(timeLimitInput.value) || 120);
    const numQ = Math.max(1, parseInt(numQuestionsSelect.value) || 10);
    const category = categorySelect.value;
  
    // update state
    quizState.userName = name;
    quizState.totalTime = totalTime;
    quizState.numQuestions = numQ;
    quizState.category = category;
    quizState.currentIndex = 0;
    quizState.selectedAnswers = {};
    quizState.score = 0;
    quizState.finished = false;
    quizState.startedAt = Date.now();
    quizState.timeLeft = totalTime;
  
    // UI updates
    avatarText.textContent = name.charAt(0).toUpperCase();
    displayName.textContent = name;
    displayMeta.textContent = `${numQ} questions • ${formatTime(totalTime)} total time`;
  
    // pick questions from bank by category and shuffle and slice
    const pool = QUESTION_BANK.filter(q => category === 'general' ? true : q.category === category);
    const shuffled = shuffle(pool);
    quizState.questions = shuffled.slice(0, numQ);
  
    qProgress.textContent = `Q ${1} / ${quizState.questions.length}`;
    scoreLive.textContent = `Score: ${quizState.score}`;
    timeBar.style.width = '100%';
    timeDisplay.textContent = formatTime(quizState.timeLeft);
  
    // enable controls
    prevBtn.disabled = true;
    nextBtn.disabled = false;
    finishBtn.disabled = false;
    nextBtn.textContent = 'Next';
  
    // show first question
    renderQuestion();
  
    // start timer
    clearInterval(quizState.timer);
    quizState.timer = setInterval(()=> {
      quizState.timeLeft--;
      timeDisplay.textContent = formatTime(quizState.timeLeft);
      const pct = Math.max(0, (quizState.timeLeft / quizState.totalTime) * 100);
      timeBar.style.width = pct + '%';
      if (quizState.timeLeft <= 10) {
        timeBar.style.background = 'linear-gradient(90deg,#ff8a8a,#ff5252)';
        if (quizState.timeLeft <= 5) beep(880,80,'sine',0.09);
      }
      if (quizState.timeLeft <= 0) {
        clearInterval(quizState.timer);
        endQuiz('time');
      }
    }, 1000);
  
    // small start beep
    beep(880,120,'triangle',0.06);
  }
  
  /* ========== Render question ========= */
  function renderQuestion(){
    const qObj = quizState.questions[quizState.currentIndex];
    if(!qObj) {
      questionText.textContent = 'No question loaded';
      optionsWrap.innerHTML = '';
      return;
    }
    // question text
    questionText.textContent = `Q${quizState.currentIndex+1}. ${qObj.question}`;
  
    // build options (shuffled)
    let opts = shuffle(qObj.options);
    optionsWrap.innerHTML = '';
    opts.forEach((opt, idx) => {
      const btn = document.createElement('button');
      btn.className = 'option';
      btn.innerHTML = `<div class="tag">${String.fromCharCode(65 + idx)}</div><div style="flex:1"><div style="font-weight:700">${opt}</div><div style="font-size:13px;color:var(--muted);margin-top:6px" data-explain hidden></div></div>`;
      btn.onclick = ()=> onSelectOption(qObj.id, opt, btn);
      optionsWrap.appendChild(btn);
    });
  
    // disable prev if at start
    prevBtn.disabled = quizState.currentIndex === 0;
    nextBtn.disabled = false;
  
    // progress UI
    qProgress.textContent = `Q ${quizState.currentIndex+1} / ${quizState.questions.length}`;
    scoreLive.textContent = `Score: ${quizState.score}`;
  }
  
  /* ========== Selection handling ========= */
  function onSelectOption(qId, selectedOpt, buttonEl){
    // prevent multiple clicks
    if (buttonEl.classList.contains('disabled')) return;
  
    const qObj = quizState.questions[quizState.currentIndex];
    const correct = qObj.answer;
    // mark all options disabled
    const optionEls = optionsWrap.querySelectorAll('.option');
    optionEls.forEach(el=>{
      el.classList.add('disabled');
      el.style.pointerEvents = 'none';
    });
  
    // highlight correct and selected
    optionEls.forEach(el => {
      const txt = el.querySelector('div > div').textContent;
      if (txt === correct) {
        el.classList.add('correct');
        el.querySelector('div [data-explain]').hidden = false;
        el.querySelector('div [data-explain]').textContent = qObj.explanation || '';
      }
      if (txt === selectedOpt && selectedOpt !== correct) {
        el.classList.add('wrong');
        el.querySelector('div [data-explain]').hidden = false;
        el.querySelector('div [data-explain]').textContent = `Correct: ${correct} — ${qObj.explanation || ''}`;
      }
    });
  
    // record selection
    quizState.selectedAnswers[qId] = selectedOpt;
    if (selectedOpt === correct) {
      quizState.score++;
      beep(1200,120,'sine',0.07);
    } else {
      beep(220,180,'sine',0.08);
    }
    scoreLive.textContent = `Score: ${quizState.score}`;
  
    // optional: auto move to next after a short delay
    setTimeout(()=> {
      // enable next
      if (quizState.currentIndex < quizState.questions.length - 1) {
        quizState.currentIndex++;
        renderQuestion();
      } else {
        // finish
        endQuiz('complete');
      }
    }, 900);
  }
  
  /* ========== navigation buttons ========= */
  prevBtn.onclick = ()=> {
    if (quizState.currentIndex > 0) {
      quizState.currentIndex--;
      renderQuestion();
    }
  };
  nextBtn.onclick = ()=> {
    if (quizState.currentIndex < quizState.questions.length - 1) {
      quizState.currentIndex++;
      renderQuestion();
    } else {
      endQuiz('manual');
    }
  };
  
  finishBtn.onclick = ()=> endQuiz('manual');
  
  /* ========== Save and persistence ========= */
  saveBtn.onclick = ()=> {
    // save partial progress to localStorage
    const key = `noabyte_save_${quizState.userName || 'guest'}`;
    const payload = {
      savedAt: Date.now(),
      state: {
        ...quizState,
        timerActive: !!quizState.timer
      }
    };
    localStorage.setItem(key, JSON.stringify(payload));
    savedMsg.textContent = 'Progress saved locally.';
    setTimeout(()=> savedMsg.textContent = '', 4000);
  };
  
  /* ========== End quiz & show results ========= */
  function endQuiz(reason = 'complete'){
    // prevent multiple calls
    if (quizState.finished) return;
    quizState.finished = true;
    clearInterval(quizState.timer);
    quizState.endedAt = Date.now();
  
    // compute final score
    const total = quizState.questions.length;
    const score = quizState.score;
    const percent = Math.round((score/total)*100);
  
    // show result UI
    document.getElementById('questionCard').style.display = 'none';
    resultCard.style.display = 'block';
  
    finalScore.textContent = `${score} / ${total}`;
    percentEl.textContent = `${percent}%`;
    const passed = percent >= 60; // pass threshold
    passMsg.innerHTML = passed ? `<span class="pass">Congratulations ${quizState.userName}! You passed 🎉</span>` : `<span class="fail">Sorry ${quizState.userName}, you did not pass. Try again!</span>`;
    resultTitle.textContent = passed ? 'Well done!' : 'Result';
  
    // play sound and confetti (simple)
    if (passed) {
      beep(1200,300,'sawtooth',0.09);
      // small confetti-like animation using emojis (lightweight)
      resultTitle.insertAdjacentHTML('afterend', '<div id="confetti" style="margin-top:8px;font-size:18px">🎉🎉</div>');
      setTimeout(()=> { const c = document.getElementById('confetti'); if(c) c.remove(); }, 3500);
    } else {
      beep(300,300,'sine',0.08);
    }
  
    // time used
    const msUsed = Math.max(0, (quizState.endedAt - quizState.startedAt));
    const secUsed = Math.round(msUsed/1000);
    timeTakenEl.textContent = `Time used: ${formatTime(secUsed)}`;
  
    // display pass/fail/message animated
    document.getElementById('resultWrap').classList.add('animate-pop');
  
    // save best score
    const keyBest = 'noabyte_best';
    const prev = parseInt(localStorage.getItem(keyBest) || '0');
    if (percent > prev) {
      localStorage.setItem(keyBest, percent);
      bestScoreEl.textContent = percent + ' pts';
      savedMsg.textContent = 'New best score saved!';
    }
  
    // update display meta
    displayMeta.textContent = `Completed • ${quizState.questions.length} q • ${formatTime(quizState.totalTime - quizState.timeLeft)} used`;
  
    // enable share and print
    printBtn.onclick = ()=> {
      // Prepare printable content: questions with correct answers
      const printWindow = window.open('', '', 'width=800,height=600');
      let html = '<html><head><title>NOABYTE Quiz Results</title></head><body>';
      html += `<h2>NOABYTE Quiz Result - ${quizState.userName}</h2>`;
      html += `<p>Score: ${score} / ${total} (${percent}%)</p>`;
      html += '<ol>';
      quizState.questions.forEach(q => {
        const qb = QUESTION_BANK.find(x => x.id === q.id) || q;
        html += `<li><strong>${qb.question}</strong><br>Correct answer: ${qb.answer}</li>`;
      });
      html += '</ol></body></html>';
      printWindow.document.write(html);
      printWindow.document.close();
      printWindow.print();
    };
    shareBtn.onclick = shareResult;
    retryBtn.onclick = ()=> {
      resultCard.style.display = 'none';
      document.getElementById('questionCard').style.display = 'block';
      // reset tiny: allow restart with same settings
      quizState.currentIndex = 0;
      quizState.selectedAnswers = {};
      quizState.score = 0;
      quizState.finished = false;
      startQuiz();
    };
  }
  
  /* ========== Share result function ========== */
  function shareResult(){
    const scoreText = finalScore.textContent;
    const percent = percentEl.textContent;
    const txt = `NOABYTE Quiz Result\nName: ${quizState.userName}\nScore: ${scoreText}\nPercent: ${percent}\nTry the NOABYTE Quiz!`;
    if (navigator.share) {
      navigator.share({ title:'NOABYTE Quiz Result', text: txt }).catch(()=> copyFallback(txt));
    } else {
      copyFallback(txt);
    }
  }
  function copyFallback(text){
    navigator.clipboard?.writeText(text).then(()=>{
      alert('Result copied to clipboard. You can paste it anywhere to share.');
    }).catch(()=> {
      prompt('Copy result', text);
    });
  }
  
  /* ========== Initialize small UI defaults ========== */
  (function init(){
    // set defaults
    userNameInput.value = '';
    numQuestionsSelect.value = '10';
    timeLimitInput.value = '120';
    categorySelect.value = 'general';
    loadBestScore();
  })();
   