require 'rails_helper'

RSpec.describe Message, type: :model do
  it { should respond_to(:body) }
  it { should belong_to(:user) }
  it { should belong_to(:chat_room) }

  it { should validate_length_of(:body) }
end
