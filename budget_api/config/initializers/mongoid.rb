# Config for jbuilder view to handle id as a string in JSON response
module BSON
    class ObjectId
      def to_json(*args)
        to_s.to_json
      end
  
      def as_json(*args)
        to_s.as_json
      end
    end
  end
  