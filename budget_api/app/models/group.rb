class Group
  include Mongoid::Document

  field :name, type: String
  field :show, type: Boolean, default: true
  field :categoryIDs, type: Array, default: [] # used for maintaining an order

  embedded_in :budget
  embeds_many :categories

  before_create :edit_id

  private
  def edit_id
    self.id = "Group_"+self.id.to_s unless self.id.to_s[0] == "G"
  end

end
