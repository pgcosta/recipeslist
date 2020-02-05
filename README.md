# Recipes

## How to run

`docker-compose up frontend backend`

![GitHub Logo](/appdescroption.gif)

## How was this made:

* Backend written in ruby, with minimaist web framework [sinatra](http://sinatrarb.com/)
* Frontend written in [ReactJS](https://reactjs.org/)

## 1- Why Sinatra? 2- Why backend + frontend? 3- Why not Rails?

* Rails: too much for too little.
* 1- I'm well versed in ruby. So I started with sinatra + ruby to connect to Contentful.
* 2- I don't do HTML + CSS on a daily basis, so ReactJS helps me create prettier interfaces easilly.
* 3- Too much for too little, and using backend + frontend I get to show both

## What is left to be done to be production ready?

* More backend tests
* Frontend tests
* Do not upload `.env` to github
* Tune puma
* Compile JS for production: `npm run build`