class Group
  include Mongoid::Document

  field :name, type: String
  field :show, type: Boolean, default: true
  field :categoryIDs, type: Array, default: [] # used for maintaining an order

  embedded_in :budget
  embeds_many :categories
end
