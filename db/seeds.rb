require "faker"

Thing.destroy_all
5.times do |i|
  Thing.create(name: Faker::Name.name)
end

User.destroy_all
user = User.create(email: "test@test.com", password: 123456)

2.times do |i|
  user.blogs.create(title: Faker::Name.name, body: "body here for")
end
