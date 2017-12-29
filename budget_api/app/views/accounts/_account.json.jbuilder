json.extract! account, :id, :name, :type, :start_balance, :created_at, :updated_at
json.url account_url(account, format: :json)
