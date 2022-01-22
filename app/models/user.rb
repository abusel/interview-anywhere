class User < ApplicationRecord
    has_secure_password
    validates :email, presence: true
    validates :email, uniqueness: true
    has_many :interviews
    has_many :jobs, through: :interviews
    validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }


    # validate :email_at



    # def email_at
    #     if !email.include?('@')
    #         errors.add(:email, "must have an @ in the email")
    #     end
    # end
end
