# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create(username: 'Jim', password_digest: "ASDASKDN", session_token: "123-12398")
User.create(username: 'BTS Jimin', password_digest: "oknjsokmnvbkolmnb", session_token: "097823")
User.create(username: 'Axl Rose', password_digest: "poioxuc", session_token: "5091293")