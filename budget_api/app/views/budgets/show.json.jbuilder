json.extract! @budget, :id, :name, :start_date, :accountIDs, :groupIDs


json.set! "payees" do
  @budget.payees.keys.sort.each do |name|
    json.payee name
    json.category @budget.payees[:name]
  end
end


json.set! "accounts" do
  @budget.accounts.each do |account|
    json.set! account.id do
      json.extract! account, :id, :name, :type, :description, :start_date, :start_balance, :track
    end
  end
end


categories = []
json.set! "groups" do
  @budget.groups.each do |group|
    json.set! group.id do
      json.extract! group, :id, :name, :show
      json.set! "categories" do
        json.categories group.categoryIDs
      end
      categories += group.categories
    end
  end
end


json.set! "categories" do
  categories.each do |category|
    json.set! category.id do
      json.extract! category, :id, :name, :show, :budgeted
      json.group category.group.id
    end
  end
end


transactions = []
json.set! "accounts" do
  @budget.accounts.each do |account|
    json.set! account.id do
      json.extract! account, :id, :name, :type, :description, :start_date, :start_balance, :to_budget
    end
    transactions += account.transactions
  end
end


json.set! "transactions" do
  json.array! transactions.sort_by{ |transaction| [ transaction.date, transaction.payee, transaction.approved, transaction.cleared, transaction.outflow ] } do |transaction|
    json.extract! transaction, :id, :date, :recurring, :payee, :memo, :outflow, :inflow, :cleared, :approved
    json.account transaction.account.id
    json.category transaction.category.id
  end
end