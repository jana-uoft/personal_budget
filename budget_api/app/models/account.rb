class Account
  include Mongoid::Document
  
  field :name, type: String
  field :type, type: String
  field :description, type: String, default: ""
  field :start_date, type: DateTime, default: ->{ Date.today }
  field :start_balance, type: Float
  field :to_budget, type: Boolean, default: true
  
  belongs_to :budget
  has_many :transactions, dependent: :destroy
end
