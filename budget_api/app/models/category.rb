class Category
  include Mongoid::Document

  field :name, type: String
  field :show, type: Boolean, default: true
  field :budgeted, type: Hash, default: ->{ {} }

  embedded_in :group
  has_many :transactions
end
