class GroupsController < ApplicationController
  before_action :authenticate!
  before_action :set_group, only: [:update, :destroy]

  # POST /groups
  def create
    @group = Group.new(group_params)
    render json: @group.errors, status: :unprocessable_entity unless @group.save
  end

  # PATCH/PUT /groups/1
  def update
    render json: @group.errors, status: :unprocessable_entity unless @group.update(group_params)
  end

  # DELETE /groups/1
  def destroy
    @group.destroy
  end

  private
  def set_group
    @group = Group.find(params[:id])
  end

  def group_params
    params.require(:group).permit(:budget, :name, :show, :categoryIDs=>[])
  end

end
