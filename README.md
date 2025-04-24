## Manual installation
 - Install nodejs locally 
 - clone the repo
 - Install Dependencies (npm install)
 - Start the DB locally 
    - docker run -e POSTGRES_PASSWORD=mysecretpassword -d -p 5432:5432 postgres
    - or, Go to neon.tech and get yourself a new db
 - Update .env file with your db credentials
 - npx prisma migrate 
 - npx prisma generate
 - npm run build
 - npm run start
 

## Docker Installation



## Docker Compose Installation