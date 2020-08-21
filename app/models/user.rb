class User < ApplicationRecord

    attr_reader :password
    after_initialize :ensure_session_token

    validates :email, :full_name, :status, :password_digest, :session_token, presence: true
    validates :email, uniqueness: true, email: true
    validates :password, length: {minimum: 6}, allow_nil: true

    has_many :messages,
        foreign_key: :author_id,
        class_name: :Message
    
    has_many :subscriptions,
        foreign_key: :user_id,
        class_name: :Subscription

    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        if user && user.check_password?(password)
            user
        else
            nil 
        end
    end

    def check_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def password
        @password
    end

    def new_session_token
        SecureRandom.urlsafe_base64
    end

    #private
    def ensure_session_token
        self.session_token ||= new_session_token
    end

    def reset_session_token!
        self.session_token = new_session_token
        self.save!
        self.session_token
    end

end
