class CreateInterviews < ActiveRecord::Migration[6.1]
  def change
    create_table :interviews do |t|
      t.integer :job_id
      t.integer :user_id

      t.timestamps
    end
  end
end
