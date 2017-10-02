class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable :recoverable, :rememberable, :trackable, :validatable
  devise :database_authenticatable, :registerable

  has_many :chat_rooms
  has_many :messages

  def display_name
    email.split('@')[0]
  end
end
