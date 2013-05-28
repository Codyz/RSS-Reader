class User < ActiveRecord::Base
  attr_accessible :email, :password_digest, :password, :password_confirmation, :feeds_attributes

  has_many :feeds, inverse_of: :user
  has_many :entries, through: :feeds

  accepts_nested_attributes_for :feeds

  has_secure_password
  validates :password_digest, :email, :password_confirmation, :presence => true
  validates :password, :confirmation => true
  validates :email, :uniqueness => true
end