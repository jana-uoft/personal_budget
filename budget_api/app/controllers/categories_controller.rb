class CategoriesController < ApplicationController
  before_action :authenticate!
  before_action :set_category, only: [:update, :destroy]

  # POST /categories
  def create
    @category = Category.new(category_params)
    render json: @category.errors, status: :unprocessable_entity unless @category.save
  end

  # PATCH/PUT /categories/1
  def update
    render json: @category.errors, status: :unprocessable_entity unless @category.update(category_params)
  end

  # DELETE /categories/1
  def destroy
    @category.destroy
  end

  private
  def set_category
    @category = Category.find(params[:id])
  end

  def category_params
    params.require(:category).permit(:name, :show, :budgeted=>[])
  end

end
