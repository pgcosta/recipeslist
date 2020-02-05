FROM ruby:2.6.5

WORKDIR /app

ADD Gemfile /app/Gemfile
RUN gem install bundler
RUN bundle install
RUN bundle update

ADD . /app

EXPOSE 8080