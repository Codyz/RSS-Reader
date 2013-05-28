class User < ActiveRecord::Base
  attr_accessible :email, :password_digest, :password, :password_confirmation

  has_secure_password
  validates :password_digest, :email, :password_confirmation, :presence => true
  validates :password, :confirmation => true

  has_many :feeds, :inverse_of :user
  has_many :entries, through: :feeds
end