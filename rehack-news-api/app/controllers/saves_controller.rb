class SavesController < ApplicationController
  def index
    @saves = Save.all

    render json: @saves, status: :ok
  end

  def create
    @save = Save.new(save_params)
    @save.save
    render json: @save, status: :created
  end

  def destroy
    @save = Save.where(id: params[:id]).first
    @save.destroy
    render json: @save
  end

  def update #put '/saves/:id', to: 'saves#update'
    @save = Save.find_by_id(params[:id])
    @save.update_attributes(save_params)
    render json: @save, status: :ok
  end

  def save_params
    params.permit(
      :id,
      :objectID,
      :title,
      :url,
      :likes
    )
  end
end
