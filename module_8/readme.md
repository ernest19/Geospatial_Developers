# Django Rest Framework Curriculum

### Instructor

**Emmanuel Jolaiya, Geospatial Software Engineer, Founder, Spatialnode.**

Training Duration: 3

## Day 1

- Prerequisites
  - Django/GeoDjango
- Why learn Django Rest Framework(DRF)?
  - Job Opportunities, build your ideas, logical next step, fun!
- Who uses Django/DRF?
  - Spatialnode, Instagram, Reddit, Spotify, Eventbrite, Pinterest, Disqus, Sentry etc
- What is an API?
  - Application Programming Interface
- Some Backend concepts
  - URLs/Endpoints/API Routes
  - CRUD - Create Update Delete
  - HTTP & HTTP (Hypertext Transfer Protocol) Verbs
    - Waiter can you **GET/POST/PUT/DELETE/PATCH** me a jollof rice
    - GET: fetch/collect/request
    - POST: giving/paying
    - DELETE: cancel my order/delete request
    - PATCH: edit my order/partial change of order
    - PUT: complete change of order
  - Statelessness
  - Status codes
    - 200 : OK
    - 400 : Bad Request
    - 404 : Not Found
    - 500 : Server Error
    - 201 : HTTP Created
    - 422 : ....
  - client server architecture
  - Microservices
  - Representative State Transfer (REST)
    - www.myendpoint.com/blogs
  - WebHooks
    - Listen to request and process
    - business logic ->
  - Servers
  - Staging environment - test your features/API
  - Production environment - what the user interacts with
  - CI/CD - Continuous Integration/ Continuous Development - DevOps
    - Circle CI
    - GitHub Action ...
  - Logging/Monitoring
- What is DRF
- Main Function of DRF
- What is Javascript Object Notation (JSON)
- Setting up a Django/GeoDjango project with DRF
  - Installing DRF
- Creating our first API - Todo app API
- DRF Browsable Interface

## Day 2

- Register app in settings
- Setup postgres/sqlite
  - migrate & makemigrations
  - create superuser
  - install psycopg2-binary ( incase you want to use postgres)
- Todo app creation continuation
- create models
- create views
- create urls
- create serializer
- create superadmin
- API Documentation - Swagger, redoc
  - install drf-yasg
- CORS
  - django cors
- Security considerations
  - Bleach
- Pagination
- Viewsets and Routers
- Authentication
  - Djoser, djrest-auth
- API Deployment
  - Code cleanup and bug fixes
  - environment variables
  - logging
  - Disabling DRF browsable interface
  - API profiling - django debug toolbar, django silk
  - Heroku -> PAAS - Platform As A Service. AWS - Amazon Web Service. Elastic BeanStalk., DO- Digital Ocean. PythonAnywhere, Google CLoud, Azure, Your Server, IBM etc
  - Setup Procfile
  - Serving API with Gunicorn, and static files with whitenoise
  - Dockerizing
  - WSGI - Web Server Gateway Interface
  - Gunicorn => Nginx (Reverse Proxy) https://www.x.com <=> http://www.x.come :80 => :8000 | :443 |301
- Resources to learn more:
  - Django for APIs Build web APIs with Python and Django by William S Vincent
  - Youtube Channel : Dennis Ivy and others...
  - Official docs

### Assignment

- Deploy your Todo list API to heroku
- Integrating with a frontend application - HTML, CSS & Javascript
- Submit on the GitHub repo

## Heroku deployment steps

- Install gunicorn
- Install whitenoise
- create procfile
- creat runtime.txt
- initialize git
  git init
- install heroku cli
- login
- create heroku git repo
