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

  before_create :edit_ID

  private
  def edit_ID
    self.id = "Transaction_"+self.id.to_s unless self.id.to_s[0] == "T"
  end

end
