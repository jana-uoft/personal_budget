class TransactionsController < ApplicationController
  before_action :authenticate!
  before_action :set_transaction, only: [:update, :destroy]

  # POST /transactions
  def create
    @transaction = Transaction.new(transaction_params)
    render json: @transaction.errors, status: :unprocessable_entity unless @transaction.save
  end

  # PATCH/PUT /transactions/1
  def update
    render json: @transaction.errors, status: :unprocessable_entity unless @transaction.update(transaction_params)
  end

  # DELETE /transactions/1
  def destroy
    @transaction.destroy
  end

  private
  def set_transaction
    @transaction = Transaction.find(params[:id])
  end

  def transaction_params
    params.require(:transaction).permit(:date, :recurring=>[:repeat, :end_on, :end_after], :account, :payee, :category, :memo, :outflow, :inflow, :cleared)
  end

end
