class CreateQuestions < ActiveRecord::Migration[6.1]
  def change
    create_table :questions do |t|
      t.string :link
      t.float :duration
      t.integer :job_id

      t.timestamps
    end
  end
end
