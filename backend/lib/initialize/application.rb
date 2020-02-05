module Initialize
  module Application
    def self.contentful_client
      @@client ||= ::Contentful::Client.new(
        space: ENV['CONTENTFUL_SPACE'],
        access_token: ENV['CONTENTFUL_TOKEN'],
        environment: ENV['CONTENTFUL_ENV']
      )
    end
  end
end