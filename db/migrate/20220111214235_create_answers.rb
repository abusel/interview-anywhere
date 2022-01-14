class CreateAnswers < ActiveRecord::Migration[6.1]
  def change
    create_table :answers do |t|
      t.string :link
      t.float :duration
      t.integer :interview_id

      t.timestamps
    end
  end
end
