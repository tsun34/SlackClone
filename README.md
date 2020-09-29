# Slant

Slant is a single-page live chatting web application with public channels and private direct messaging chats inspired by Slack.  

Check out the live site: https://slant-slack.herokuapp.com/ 

![Landing Page Wireframe](https://raw.githubusercontent.com/tsun34/Slant/master/app/assets/images/slantchat.png)

## Features
- Real time chatting through full-duplex connection
- Shared-user channels
- Direct messages and Group chat with other users
- Users are allowed to create their own channels and send direct messages to selected members
- Users are allowed to add members to public channels

## Technology
 - ReactJs
 - Redux
 - Ruby on Rails
 - Rails ActionCable
 - WebSockets
 - Redis
 - PostgreSQL
 - JQuery
 - Babel
 - Webpack
 - Heroku

## Deployment Instructions
Make sure you have postgresql installed and running.

To install its dependancy, run `npm install` and `bundle install` in the root directory.

To launch the project at local host, run `rails s`, and in a new terminal window, run `npm start`. You will find the site at `localhost:3000` in your browser. 


To create the database run `rails db:create`; to seed the database run `rails db:seed`. If you would like to reset the database, run `rails db:reset`
