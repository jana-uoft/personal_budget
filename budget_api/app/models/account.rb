class Account
  include Mongoid::Document
  
  field :name, type: String
  field :type, type: String
  field :description, type: String, default: ""
  field :start_date, type: DateTime, default: ->{ Date.today }
  field :start_balance, type: Float
  field :track, type: Boolean, default: true
  
  belongs_to :budget
  has_many :transactions, dependent: :destroy

  validates_uniqueness_of :name, :message => "Account name with: '%{value}', already exists.", scope: :budget

  before_create :edit_ID

  private
  def edit_ID
    self.id = "Account_"+self.id.to_s unless self.id.to_s[0] == "A"
  end

end
