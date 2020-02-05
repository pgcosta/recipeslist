require "./lib/tools/get_content.rb"
require "ostruct"

RSpec.describe "GetContent" do
  before(:all) do
    class MockEntries
      def entries(_)
        mock_fields = OpenStruct.new({
          id: "2uPXLn31U8A68wQkGA06e8",
          fields: {
            title: "bacalhau a bras",
            calories: "734",
            description: "bacalhau com ovo e batata palha",
            photo: nil,
            tags: nil,
            chef: OpenStruct.new({
                fields: {
                  name: "Pedro C."
                }
              })
          }})
        return [mock_fields]
      end
    end
  end
  
  it "should return an array of hashes with the content fetched" do
    allow(Initialize::Application).to receive(:contentful_client).and_return(MockEntries.new)
    restult = Tools::GetContent.get_recipes()

    expect(restult).to eq([{
                            id: "2uPXLn31U8A68wQkGA06e8",
                            title: "bacalhau a bras",
                            calories: "734",
                            description: "bacalhau com ovo e batata palha",
                            photo: "",
                            tags: [],
                            chef: "Pedro C."}])
  end
end