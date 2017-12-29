class Budget
  include Mongoid::Document
  include Mongoid::Timestamps

  field :name, type: String
  field :start_date, type: Date, default: ->{ Date.today }
  field :payees, type: Hash, default: ->{ {} } # {name: category}
  field :accountIDs, type: Array, default: [] # used for maintaining an order
  field :groupIDs, type: Array, default: [] # used for maintaining an order
  
  belongs_to :user
  has_many :accounts, dependent: :destroy
  embeds_many :groups

  validates_uniqueness_of :name, :message => "Budget name with: '%{value}', already exists.", scope: :user

  before_create :edit_ID
  after_create :create_default_categories

  private
  def edit_ID
    self.id = "Budget_"+self.id.to_s unless self.id.to_s[0] == "B"
  end

  def create_default_categories
    defaultCategories = [ 
      {
        "Group" => "Immediate Obligations",
        "Categories" => [
          {"name" => "Rent/Mortgage", "budgeted" => {}},
          {"name" => "Electric", "budgeted" => {}},
          {"name" => "Water", "budgeted" => {}},
          {"name" => "Internet", "budgeted" => {}},
          {"name" => "Groceries", "budgeted" => {}},
          {"name" => "Transportation", "budgeted" => {}},
          {"name" => "Interest & Fees", "budgeted" => {}}
        ]
      },
      {
        "Group" => "True Expenses",
        "Categories" => [
          {"name" => "Auto Maintenance", "budgeted" => {}},
          {"name" => "Home Maintenance", "budgeted" => {}},
          {"name" => "Renter's/Home Insurance", "budgeted" => {}},
          {"name" => "Medical", "budgeted" => {}},
          {"name" => "Clothing", "budgeted" => {}},
          {"name" => "Gifts", "budgeted" => {}},
          {"name" => "Giving", "budgeted" => {}},
          {"name" => "Computer Replacement", "budgeted" => {}},
          {"name" => "Software Subscriptions", "budgeted" => {}},
          {"name" => "Stuff I Forgot to Budget For", "budgeted" => {}}
        ]
      },
      {
        "Group" => "Debt Payments",
        "Categories" => [
          {"name" => "Student Loan", "budgeted" => {}},
          {"name" => "Auto Loan", "budgeted" => {}}
        ]
      },
      {
        "Group" => "Quality of Life Goals",
        "Categories" => [
          {"name" => "Vacation", "budgeted" => {}},
          {"name" => "Fitness", "budgeted" => {}},
          {"name" => "Education", "budgeted" => {}}
        ]
      },
      {
        "Group" => "Just for Fun",
        "Categories" => [
          {"name" => "Dining Out", "budgeted" => {}},
          {"name" => "Gaming", "budgeted" => {}},
          {"name" => "Music", "budgeted" => {}},
          {"name" => "Fun Money", "budgeted" => {}}
        ]
      }
    ]
    defaultCategories.each do |groupParams|
      group = Group.create(name: groupParams["Group"], budget: self)
      self.groupIDs.push(group.id.to_s)
      groupParams["Categories"].each do |categoryParams|
        category = Category.create(name: categoryParams["name"], group: group)
        group.categoryIDs.push(category.id.to_s)
      end
      group.save
      self.save
    end
  end


end
