class CreateJobs < ActiveRecord::Migration[6.1]
  def change
    create_table :jobs do |t|
      t.integer :user_id
      t.string :title
      t.boolean :allow_multiple_attempts

      t.timestamps
    end
  end
end
