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

coords = [
    [37.870163, -122.268308, "Downtown Berkeley, food and transit!"],
    [37.869030, -122.271974, "MLK Jr. park, next to Berkeley High School"],
    [37.809829, -122.259707, "Just outside of Fairyland, Oakland"],
    [37.879624, -122.246045, "Lawrence Hall of Science. Great views!"],
    [37.885153, -122.262896, "Berkeley Rose Garden. Bay views and flowers."]
]

coords.each do |coord|
    lat = coord[0]
    lng = coord[1]
    description = coord[2]

    Bench.create(description: description, lat: lat, lng: lng)
end