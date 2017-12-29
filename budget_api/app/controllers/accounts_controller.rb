class AccountsController < ApplicationController
  before_action :authenticate!
  before_action :set_account, only: [:update, :destroy]

  # POST /accounts
  def create
    @account = Account.new(account_params)
    render json: @account.errors, status: :unprocessable_entity unless @account.save
  end

  # PATCH/PUT /accounts/1
  def update
    render json: @account.errors, status: :unprocessable_entity unless @account.update(account_params)
  end

  # DELETE /accounts/1
  def destroy
    @account.destroy
  end

  private
  def set_account
    @account = Account.find(params[:id])
  end

  def account_params
    params.require(:account).permit(:budget, :name, :type, :description, :start_date, :start_balance, :track)
  end
  
end
