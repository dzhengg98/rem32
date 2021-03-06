class User < ApplicationRecord
  
  validates :username, :session_token, :password_digest, presence: true
  validates :username, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true}
  
  attr_reader :password
  after_initialize :ensure_session_token

  has_one_attached :profilepic
  has_one_attached :coverpic

  has_many :images,
  foreign_key: :uploader_id,
  class_name: :Image

  has_many :comments,
  foreign_key: :user_id,
  class_name: :Comment

  has_many :likes,
  foreign_key: :liker_id,
  class_name: :Like

  has_many :follows,
  foreign_key: :follower_id,
  class_name: :Follow

  has_many :followers,
  foreign_key: :followee_id,
  class_name: :Follow

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    if user && user.is_password?(password)
      return user
    else
      return nil
    end
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64
    self.save
    self.session_token
  end

  private

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end
  
end
