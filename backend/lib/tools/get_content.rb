require 'contentful'
require "./lib/initialize/application.rb"

module Tools
  module GetContent
    def self.get_recipes
      client = Initialize::Application.contentful_client
      entries= client.entries(content_type: 'recipe')
      entries.inject([]) do |results, entry|
        results << {
          id: entry.id,
          title: entry.fields[:title],
          calories: entry.fields[:calories],
          description: entry.fields[:description],
          tags: build_tags(entry.fields[:tags]),
          photo: build_photo(entry.fields[:photo], client),
          chef: build_chef(entry.fields[:chef], client)
      }
      end
    end

    private

    def self.build_tags(tags_entry)
      tags_entry.nil? ? [] : tags_entry.map(&:fields)
    end

    def self.build_photo(photo_entry, client)
      if photo_entry.nil?
        ""
      else
        client.asset(photo_entry.id).url(width: 350, height: 200, format: 'jpg', quality: 80)
      end
    end

    def self.build_chef(chef_entry, client)
      chef_entry.nil? ? "" : chef_entry.fields[:name]
    end
  end
end