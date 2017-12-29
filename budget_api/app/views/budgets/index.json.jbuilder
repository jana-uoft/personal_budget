json.array! @budgets do |budget|
  json.extract! budget, :id, :name, :created_at, :updated_at
end
