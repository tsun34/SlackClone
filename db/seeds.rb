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

demo_user = User.create!(email: 'goosek@gmail.com', password: 'honkhonk', full_name:'King Goose', display_name: 'King Goose', title: 'Untitled', avatar: 6, description: 'I honk very loudly.',status: 1 )
q_goose = User.create!(email:'gooseq@gmail.com', password: 'qhonkhonk', full_name: 'Queen Goose', avatar: 7, status: 1)
goose1 = User.create!(email:'goose1@gmail.com', password: '1honkhonk', full_name: 'Lazy Goose', avatar: 1, status: 1)
goose2 = User.create!(email:'goose2@gmail.com', password: '2honkhonk', full_name: 'Peppy Goose', avatar: 2, status: 1)
goose3 = User.create!(email:'goose3@gmail.com', password: '3honkhonk', full_name: 'Jock Goose', avatar: 3, status: 1)
goose4 = User.create!(email:'goose4@gmail.com', password: '4honkhonk', full_name: 'Cranky Goose', avatar: 4, status: 1)
goose5 = User.create!(email:'goose5@gmail.com', password: '5honkhonk', full_name: 'Snooty Goose', avatar: 5, status: 1)
goose6 = User.create!(email:'goose6@gmail.com', password: '6honkhonk', full_name: 'Smug Goose', avatar: 0, status: 1)



general_channel = Conversation.create!(name: 'general', description: 'a public space for every goose to honk freely', admin_id: demo_user.id, is_private: false, conversation_type: 'channel')

general_sub1 = Subscription.create!(user_id: demo_user.id, conversation_id: general_channel.id)
general_sub2 = Subscription.create!(user_id: q_goose.id, conversation_id: general_channel.id) 
general_sub3 = Subscription.create!(user_id: goose1.id, conversation_id: general_channel.id)
general_sub4 = Subscription.create!(user_id: goose2.id, conversation_id: general_channel.id)
general_sub5 = Subscription.create!(user_id: goose3.id, conversation_id: general_channel.id)
general_sub6 = Subscription.create!(user_id: goose4.id, conversation_id: general_channel.id)
general_sub7 = Subscription.create!(user_id: goose5.id, conversation_id: general_channel.id)
general_sub8 = Subscription.create!(user_id: goose6.id, conversation_id: general_channel.id)

general_msg1 = Message.create!(body: "Hello boys, let's go on some mischievous missions", author_id: demo_user.id, conversation_id: general_channel.id)
general_msg2 = Message.create!(body: "What's new on the checklist today?", author_id: q_goose.id, conversation_id: general_channel.id)
general_msg3 = Message.create!(body: "hoonk honk I'm excited", author_id: goose1.id, conversation_id: general_channel.id)
general_msg4 = Message.create!(body: 'hooooooooooooooooooooooooonnnkk', author_id: goose2.id, conversation_id: general_channel.id)
general_msg5 = Message.create!(body: "Let's go honk at wimpy boy", author_id: goose3.id, conversation_id: general_channel.id)
general_msg6 = Message.create!(body: 'me call dibs on his glasses', author_id: goose1.id, conversation_id: general_channel.id)
general_msg7 = Message.create!(body: 'honk me will help', author_id: q_goose.id, conversation_id: general_channel.id)
general_msg8 = Message.create!(body: 'hon-onk', author_id: goose1.id, conversation_id: general_channel.id)
general_msg9 = Message.create!(body: 'Groundskeeper is mad for me getting him wet and set up a no geese sign. Watch out!', author_id: goose4.id, conversation_id: general_channel.id)
general_msg0 = Message.create!(body: 'I stole the no geese sign hahahahahahohoonk', author_id: goose5.id, conversation_id: general_channel.id)
general_msg11 = Message.create!(body: 'honk hahohonk', author_id: goose1.id, conversation_id: general_channel.id)
general_msg12 = Message.create!(body: 'hohohonk', author_id: goose6.id, conversation_id: general_channel.id)
general_msg13 = Message.create!(body: 'Wanna meet up for a picnic at the garden? I got sandwiches, apples and a radio playing our favoirte metal songs.', author_id: demo_user.id, conversation_id: general_channel.id)


garden_channel = Conversation.create!(name: 'Garden', description: 'a peaceful English village', admin_id: demo_user.id, is_private: false, conversation_type: 'channel')

garden_sub1 = Subscription.create!(user_id: demo_user.id, conversation_id: garden_channel.id)
garden_sub2 = Subscription.create!(user_id: goose2.id, conversation_id: garden_channel.id)
garden_sub3 = Subscription.create!(user_id: goose4.id, conversation_id: garden_channel.id)
garden_sub4 = Subscription.create!(user_id: goose6.id, conversation_id: garden_channel.id)

garden_msg1 = Message.create!(body: "Groundskeeper got his sunhat on.", author_id: demo_user.id, conversation_id: garden_channel.id)
garden_msg2 = Message.create!(body: "Where is his key???", author_id: goose2.id, conversation_id: garden_channel.id)
garden_msg3 = Message.create!(body: "honk i got it", author_id: goose4.id, conversation_id: garden_channel.id)
garden_msg4 = Message.create!(body: "honk honk", author_id: goose6.id, conversation_id: garden_channel.id)
garden_msg5 = Message.create!(body: "get the rake too", author_id: goose2.id, conversation_id: garden_channel.id)
garden_msg6 = Message.create!(body: "hon it", author_id: goose6.id, conversation_id: garden_channel.id)
garden_msg7 = Message.create!(body: "honk", author_id: goose2.id, conversation_id: garden_channel.id)


highstreet_channel = Conversation.create!(name: 'High-Street', description: 'lots of shops, perfect place for the townspeople to hangout', admin_id: demo_user.id, is_private: false, conversation_type: 'channel')

highstreet_sub1 = Subscription.create!(user_id: demo_user.id, conversation_id: highstreet_channel.id)
highstreet_sub2 = Subscription.create!(user_id: q_goose.id, conversation_id: highstreet_channel.id)
highstreet_sub3 = Subscription.create!(user_id: goose1.id, conversation_id: highstreet_channel.id)
highstreet_sub4 = Subscription.create!(user_id: goose3.id, conversation_id: highstreet_channel.id)
highstreet_sub5 = Subscription.create!(user_id: goose5.id, conversation_id: highstreet_channel.id)

highstreet_msg1 = Message.create!(body: "Geeyse me is on TV!! Come see!!", author_id: goose3.id, conversation_id: highstreet_channel.id)
highstreet_msg2 = Message.create!(body: "honk hooongrats!!", author_id: goose1.id, conversation_id: highstreet_channel.id)
highstreet_msg3 = Message.create!(body: "Coming in a second. Trapped inthe phone booth", author_id: goose5.id, conversation_id: highstreet_channel.id)
highstreet_msg4 = Message.create!(body: "hoonk honing", author_id: goose1.id, conversation_id: highstreet_channel.id)
highstreet_msg5 = Message.create!(body: "honk do some shopping", author_id: demo_user.id, conversation_id: highstreet_channel.id)



backgarden_channel = Conversation.create!(name: 'Back-Garden', description: 'a garden in the back of the garden', admin_id: demo_user.id, is_private: false, conversation_type: 'channel')

backgarden_sub1 = Subscription.create!(user_id: demo_user.id, conversation_id: backgarden_channel.id)
backgarden_sub2 = Subscription.create!(user_id: q_goose.id, conversation_id: backgarden_channel.id)
backgarden_sub3 = Subscription.create!(user_id: goose1.id, conversation_id: backgarden_channel.id)

backgarden_msg1 = Message.create!(body: "gurl I got you a ribbon", author_id: demo_user.id, conversation_id: backgarden_channel.id)
backgarden_msg2 = Message.create!(body: "so shiny", author_id: q_goose.id, conversation_id: backgarden_channel.id)
backgarden_msg3 = Message.create!(body: "honks for the rose too", author_id: q_goose.id, conversation_id: backgarden_channel.id)


pub_channel = Conversation.create!(name: 'Pub', description: 'where to contend with townspeople', admin_id: demo_user.id, is_private: false, conversation_type: 'channel')

pub_sub1 = Subscription.create!(user_id: demo_user.id, conversation_id: pub_channel.id)
pub_sub2 = Subscription.create!(user_id: goose3.id, conversation_id: pub_channel.id)
pub_sub3 = Subscription.create!(user_id: goose4.id, conversation_id: pub_channel.id)
pub_sub4 = Subscription.create!(user_id: goose5.id, conversation_id: pub_channel.id)

pub_msg1 = Message.create!(body: "honk let's get a pint", author_id: goose4.id, conversation_id: pub_channel.id)
pub_msg2 = Message.create!(body: "honking good", author_id: goose3.id, conversation_id: pub_channel.id)
pub_msg3 = Message.create!(body: "hoonk honk", author_id: goose5.id, conversation_id: pub_channel.id)
pub_msg4 = Message.create!(body: "me will set up the table", author_id: goose3.id, conversation_id: pub_channel.id)
pub_msg5 = Message.create!(body: "honks", author_id: goose4.id, conversation_id: pub_channel.id)
pub_msg6 = Message.create!(body: "honking welcome", author_id: goose3.id, conversation_id: pub_channel.id)


modelvillage_channel = Conversation.create!(name: 'Model-Village', description: 'us model citizens live in model village', admin_id: demo_user.id, is_private: false, conversation_type: 'channel')

modelvillage_sub1 = Subscription.create!(user_id: demo_user.id, conversation_id: modelvillage_channel.id)
modelvillage_sub2 = Subscription.create!(user_id: goose1.id, conversation_id: modelvillage_channel.id)
modelvillage_sub3 = Subscription.create!(user_id: goose2.id, conversation_id: modelvillage_channel.id)
modelvillage_sub4 = Subscription.create!(user_id: goose6.id, conversation_id: modelvillage_channel.id)
modelvillage_sub5 = Subscription.create!(user_id: q_goose.id, conversation_id: modelvillage_channel.id)

modelvillage_msg1 = Message.create!(body: "I FOUND THE GOLDEN BELL", author_id: goose2.id, conversation_id: modelvillage_channel.id)
modelvillage_msg2 = Message.create!(body: "HOONK????", author_id: goose1.id, conversation_id: modelvillage_channel.id)
modelvillage_msg3 = Message.create!(body: "HONKRATUALTIONS", author_id: goose6.id, conversation_id: modelvillage_channel.id)
modelvillage_msg4 = Message.create!(body: "honking proud of you my gosling", author_id: demo_user.id, conversation_id: modelvillage_channel.id)
modelvillage_msg5 = Message.create!(body: "so shiny", author_id: q_goose.id, conversation_id: modelvillage_channel.id)
modelvillage_msg6 = Message.create!(body: "golden bell!!!!!", author_id: goose1.id, conversation_id: modelvillage_channel.id)


king_dm = Conversation.create!(name: 'King Goose, Queen Goose', description: '', admin_id: demo_user.id, is_private: false, conversation_type: 'direct')

king_dm_sub1 = Subscription.create!(user_id: demo_user.id, conversation_id: king_dm.id)
king_dm_sub2 = Subscription.create!(user_id: q_goose.id, conversation_id: king_dm.id)

king_dm_msg1 = Message.create!(body: "What's for dinner?", author_id: demo_user.id, conversation_id: king_dm.id)
king_dm_msg2 = Message.create!(body: 'apples', author_id: q_goose.id, conversation_id: king_dm.id)
king_dm_msg3 = Message.create!(body: 'apples again??? *upset honk*', author_id: demo_user.id, conversation_id: king_dm.id)

boys_dm = Conversation.create!(name: 'Lazy Goose, Peppy Goose, Jock Goose', description: '', admin_id: goose1.id, is_private: false, conversation_type: 'direct')

boys_dm_sub1 = Subscription.create!(user_id: goose1.id, conversation_id: boys_dm.id)
boys_dm_sub2 = Subscription.create!(user_id: goose2.id, conversation_id: boys_dm.id)
boys_dm_sub3 = Subscription.create!(user_id: goose3.id, conversation_id: boys_dm.id)

boys_dm_msg1 = Message.create!(body: "What kind of junk food is your favorite kind of junk food, Jock?", author_id: goose1.id, conversation_id: boys_dm.id)
boys_dm_msg2 = Message.create!(body: "Broccoli, the fresh ones", author_id: goose3.id, conversation_id: boys_dm.id)
boys_dm_msg3 = Message.create!(body: "Hey! You two! Talking about junk food in front of me is just mean! The store sold out of my favorite chips!", author_id: goose2.id, conversation_id: boys_dm.id)
boys_dm_msg4 = Message.create!(body: "Really? Maybe if you listen to us, we'll remind you of a different snack you like, broccoli. Lately, I've been eating a lot of morning grass and baby buckwheat...", author_id: goose1.id, conversation_id: boys_dm.id)
boys_dm_msg5 = Message.create!(body: "Cut it out! You're not helping at all! What if they never get more?! What if I never eat them again?! It's just not fair!", author_id: goose2.id, conversation_id: boys_dm.id)
boys_dm_msg6 = Message.create!(body: "Oh geez! So picky! Jock, what do I do now?", author_id: goose1.id, conversation_id: boys_dm.id)
boys_dm_msg7 = Message.create!(body: "Sorry. Too busy eating broccoli to care", author_id: goose3.id, conversation_id: boys_dm.id)



girls_dm = Conversation.create!(name: 'Cranky Goose, Snooty Goose, Smug Goose', description: '', admin_id: goose6.id, is_private: false, conversation_type: 'direct')

girls_dm_sub1 = Subscription.create!(user_id: goose4.id, conversation_id: girls_dm.id)
girls_dm_sub2 = Subscription.create!(user_id: goose5.id, conversation_id: girls_dm.id)
girls_dm_sub3 = Subscription.create!(user_id: goose6.id, conversation_id: girls_dm.id)

girls_dm_msg1 = Message.create!(body: "Hey, Snooty! Cranky and I were talking about the aesthetics of specific men.", author_id: goose6.id, conversation_id: girls_dm.id)
girls_dm_msg2 = Message.create!(body: "When a scary-lookin' dude goes and does something really nice without warning... ", author_id: goose4.id, conversation_id: girls_dm.id)
girls_dm_msg3 = Message.create!(body: "It's that gap between how he looks and how he acts that makes him awesome, honk", author_id: goose4.id, conversation_id: girls_dm.id)
girls_dm_msg4 = Message.create!(body: "I see... Thanks! I think that's pretty helpful, Cranky.", author_id: goose6.id, conversation_id: girls_dm.id)
girls_dm_msg5 = Message.create!(body: "To be honest, I kind of admire the real bad boys, the ones who don't care what you think...", author_id: goose6.id, conversation_id: girls_dm.id)
girls_dm_msg6 = Message.create!(body: "What are YOU talking about?!", author_id: goose4.id, conversation_id: girls_dm.id)
girls_dm_msg7 = Message.create!(body: "I was talkin' about ME!", author_id: goose4.id, conversation_id: girls_dm.id)
girls_dm_msg8 = Message.create!(body: "I'm not a bad boy, you know!", author_id: goose4.id, conversation_id: girls_dm.id)
