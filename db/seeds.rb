# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
puts "Seeding the database"

t1 = User.create(name: "Victora", username: "Victoria", password:"1234", img:Faker::Avatar.image)
t2 = User.create(name: "Ana", username: "Ana", password:"1234", img:Faker::Avatar.image)
t3 = User.create(name: "Najma", username: "Najma", password:"1234", img:Faker::Avatar.image)


d1 = Destination.create(country: "Switzerland", city: "Lucerne" , star_rating: 5 )
d2 = Destination.create(country:'France', city:'Paris', star_rating: 4 )
d3 = Destination.create(country:"Spain", city: "Madrid", star_rating: 3 )
d4 = Destination.create(country: "Italy", city:"Florence", star_rating: 5)
d5 = Destination.create(country: "Iceland", city: "Vik" , star_rating: 2 )
d6 = Destination.create(country: "Greece", city: "Athens", star_rating: 4)
d7 = Destination.create(country: "Germany", city: "Berlin", star_rating: 3)



a1 = Attraction.create(location: "Chapel Bridge", rating: 10, destination_id: d1.id, user_id: t1.id)
a2 = Attraction.create(location: "Eiffel Tower", rating: 7, destination_id: d2.id, user_id: t2.id)
a3 = Attraction.create(location: "Plaza Mayor", rating: 4, destination_id: d3.id, user_id: t1.id)
a4 = Attraction.create(location: "Ponte Vecchio", rating: 8, destination_id: d4.id, user_id: t3.id)
a5 = Attraction.create(location: "Reynisfjara Beach", rating: 2, destination_id: d5.id, user_id: t3.id)
a6 = Attraction.create(location:"David of Michelangelo", rating: 5, destination_id: d4.id, user_id: t1.id)
a7 = Attraction.create(location: "Louvre Museum", rating: 1, destination_id: d2.id, user_id: t3.id)
a8 = Attraction.create(location: "Acropolis", rating: 9, destination_id: d6.id, user_id: t1.id)
a9 = Attraction.create(location: "Parthenon", rating: 8, destination_id: d6.id, user_id: t2.id)
a10 = Attraction.create(location: "Brandenburg Gate", rating: 7, destination_id: d7.id, user_id: t3.id)
a11 = Attraction.create(location: "Reichstag Building", rating: 6, destination_id: d7.id, user_id: t1.id)

puts "Done!"