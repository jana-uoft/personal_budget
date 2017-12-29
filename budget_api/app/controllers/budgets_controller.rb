class BudgetsController < ApplicationController
  before_action :authenticate!
  before_action :set_budget, only: [:show, :update, :destroy]

  # GET /budgets
  # GET /budgets.json
  def index
    @budgets = Budget.all
  end

  # GET /budgets/1
  # GET /budgets/1.json
  def show
  end

  # POST /budgets
  # POST /budgets.json
  def create
    @budget = Budget.new(budget_params)
    @budget.user = current_user
    if @budget.save
      render :show, status: :created, location: @budget
    else
      render json: @budget.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /budgets/1
  # PATCH/PUT /budgets/1.json
  def update
    if @budget.update(budget_params)
      render :show, status: :ok, location: @budget
    else
      render json: @budget.errors, status: :unprocessable_entity
    end
  end

  # DELETE /budgets/1
  # DELETE /budgets/1.json
  def destroy
    @budget.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_budget
      @budget = Budget.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def budget_params
      params.require(:budget).permit(:name, :start_date)
    end
end
