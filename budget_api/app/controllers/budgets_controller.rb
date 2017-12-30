class BudgetsController < ApplicationController
  before_action :authenticate!
  before_action :set_budget, only: [:show, :update, :destroy, :update_payee, :combine_payees, :delete_payees]

  # GET /budgets
  def index
    @budgets = Budget.all
  end

  # GET /budgets/1
  def show
  end

  # POST /budgets
  def create
    @budget = Budget.new(budget_params)
    @budget.user = current_user
    if @budget.save
      render :show, status: :created
    else
      render json: @budget.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /budgets/1
  def update
    render json: @budget.errors, status: :unprocessable_entity unless @budget.update(budget_params)
  end

  # DELETE /budgets/1
  def destroy
    @budget.destroy
  end

  # PATCH/PUT /budgets/1/payees
  def update_payee
    payees = update_payee_params.to_h[:old_names]
    new_name = update_payee_params.to_h[:new_name]
    category = update_payee_params.to_h[:category]
    affected_transactions = []
    payees.each do |name|
      if @budget.payees.key?(name)
        @budget.payees.delete(name)
        affected_transactions += Transaction.where(payee: name)
      end
    end
    @budget.payees[new_name] = category
    @budget.save
    affected_transactions.update_all(payee: new_name) unless affected_transactions.empty?
  end

  # PATCH/PUT /budgets/1/combine_payees
  def combine_payees
    payees = update_payee_params.to_h[:old_names]
    new_name = update_payee_params.to_h[:new_name]
    category = update_payee_params.to_h[:category]
    affected_transactions = []
    payees.each do |name|
      if @budget.payees.key?(name)
        @budget.payees.delete(name)
        affected_transactions += Transaction.where(payee: name)
      end
    end
    @budget.payees[new_name] = category
    @budget.save
    affected_transactions.update_all(payee: new_name) unless affected_transactions.empty?
  end

  # DELETE /budgets/1/payees
  def delete_payees
    payees = update_payee_params.to_h[:payees]
    new_name = update_payee_params.to_h[:new_name]
    affected_transactions = []
    payees.each do |name|
      if @budget.payees.key?(name)
        @budget.payees.delete(name)
        affected_transactions += Transaction.where(payee: name)
      end
    end
    affected_transactions.update_all(payee: new_name) unless affected_transactions.empty?
    @budget.save
  end

  private
  def set_budget
    @budget = Budget.find(params[:id])
  end

  def budget_params
    params.require(:budget).permit(:name, :start_date, :accountIDs=>[], :groupIDs=>[])
  end

  def update_payee_params
    params.permit(:new_name, :category, :payees=>[])
  end

end
