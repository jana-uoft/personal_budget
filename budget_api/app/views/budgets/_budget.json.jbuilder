json.extract! budget, :id, :name, :start_date, :payees, :accounts, :created_at, :updated_at

json.set! "groups" do
  json.array! budget.groups do |group|
    json.extract! group, :id, :name, :show
    json.set! "categories" do
      json.array! group.categories do |category|
        json.extract! category, :id, :name, :show, :budgeted
      end
    end
  end
end

json.set! "accounts" do
  json.array! budget.accountIDs do |accountID|
    account = Account.find(accountID)
    json.extract! account, :id, :name, :type, :description, :start_date, :start_balance, :to_budget
    json.set! "transactions" do
      json.array! account.transactions.sort_by{ |transaction| transaction[:date] } do |transaction|
        json.extract! transaction, :id, :date, :recurring, :payee, :memo, :outflow, :inflow, :cleared, :approved
      end
    end
  end
end

