class AddLikesToSaves < ActiveRecord::Migration[5.2]
  def change
    add_column :saves, :likes, :integer
  end
end
