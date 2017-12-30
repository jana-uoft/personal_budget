class Category
  include Mongoid::Document

  field :name, type: String
  field :show, type: Boolean, default: true
  field :budgeted, type: Hash, default: ->{ {} }

  embedded_in :group
  has_many :transactions

  before_create :edit_id

  private
  def edit_id
    self.id = "Category_"+self.id.to_s unless self.id.to_s[0] == "C"
  end

end
