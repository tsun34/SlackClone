# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all
Message.delete_all
Conversation.delete_all
Subscription.delete_all

demo_user = User.create!(email: 'goosek@gmail.com', password: 'honkhonk', full_name:'King Goose', display_name: 'King Goose', title: 'Untitled', avatar: '', description: 'I honk very loudly.',status: 1 )
user2 = User.create!(email:'test@gmail.com', password: 'testing', full_name: 'Test User', status: 1)


general_channel = Conversation.create!(name: 'general', description: '', admin_id: demo_user.id, is_private: false, conversation_type: 'channel')

sample_msg = Message.create!(body: 'Test message for ahahahhahaaaaaaaahhh', author_id: demo_user.id, conversation_id: general_channel.id)
sample_sub = Subscription.create!(user_id: demo_user.id, conversation_id: general_channel.id)


specific_channel = Conversation.create!(name: 'specific', description: '', admin_id: user2.id, is_private: false, conversation_type: 'channel')

specific_msg1 = Message.create!(body: 'specific channel test message one', author_id: demo_user.id, conversation_id: specific_channel.id)
specific_msg2 = Message.create!(body: 'specific channel test message two', author_id: user2.id, conversation_id: specific_channel.id)
specific1_sub = Subscription.create!(user_id: demo_user.id, conversation_id: specific_channel.id)
specific2_sub = Subscription.create!(user_id: user2.id, conversation_id: specific_channel.id)

test_dm = Conversation.create!(name: 'test-dm', description: '', admin_id: user2.id, is_private: false, conversation_type: 'direct')

test_dm_msg1 = Message.create!(body: 'direct messaging test message one', author_id: demo_user.id, conversation_id: test_dm.id)
test_dm_msg2 = Message.create!(body: 'direct messaging test message two', author_id: user2.id, conversation_id: test_dm.id)
test_dm1_sub = Subscription.create!(user_id: demo_user.id, conversation_id: test_dm.id)
test_dm2_sub = Subscription.create!(user_id: user2.id, conversation_id: test_dm.id)