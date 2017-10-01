class Message < ActiveRecord::Base
  belongs_to :user
  belongs_to :chat_room

  validates :body, presence: true, length: { minimum: 2, maximum: 1000 }

  after_create_commit { MessageBroadcastJob.perform_later(self) } ## broadcast message

  def timestamp
    created_at.strftime('%H:%M:%S %d/%m/%y')
  end
end
