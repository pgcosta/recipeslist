require 'sinatra'
require 'sinatra/cross_origin'
require "sinatra/reloader"
require './lib/tools/get_content'
require 'json'

set :port, 8080
set :bind, '0.0.0.0'

# Deal with cross origin
# Should be changed in production, to allow only the 
#frontend public DNS to query this server
configure do
  enable :cross_origin
end

options "*" do
  response.headers["Allow"] = "HEAD,GET,PUT,POST,DELETE,OPTIONS"
  response.headers["Access-Control-Allow-Headers"] = "X-Requested-With, X-HTTP-Method-Override, Content-Type, Cache-Control, Accept"
  200
end

get '/recipes' do
  result = Tools::GetContent.get_recipes
  content_type :json
  return result.to_json
end