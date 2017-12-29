class Transaction
  include Mongoid::Document

  field :date, type: Date, default: ->{ Date.today }
  field :recurring, type: Hash, default: -> { {repeat: "", end_on: "", end_after: 0} }
  field :payee, type: String
  field :memo, type: String, default: ""
  field :outflow, type: Float, default: 0
  field :inflow, type: Float, default: 0
  field :cleared, type: Boolean, default: true
  field :approved, type: Boolean, default: false

  belongs_to :account
  belongs_to :category
end
