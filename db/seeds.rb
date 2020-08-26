# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all

demo_user = User.create!(email: 'goosek@gmail.com', password: 'honkhonk', full_name:'King Goose', display_name: 'King Goose', title: 'Untitled', avatar: '', description: 'I honk very loudly.',status: 1, avatar: {window.kingGooseURL} )