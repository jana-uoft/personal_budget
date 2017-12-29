json.extract! transaction, :id, :date, :payee, :memo, :outflow, :inflow, :cleared, :created_at, :updated_at
json.url transaction_url(transaction, format: :json)
