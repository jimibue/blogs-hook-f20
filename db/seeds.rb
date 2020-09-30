require "faker"

Thing.destroy_all
5.times do |i|
  Thing.create(name: Faker::Name.name)
end

# create some dummy data
# this useful for two reason
# it will get my front some dummy to start with
# it is way for me to check I set things
# it is way me to explore my database/api

User.destroy_all
user = User.create(email: "test@test.com", password: 123456)

2.times do |i|
  user.blogs.create(title: Faker::Name.name, body: "body here for")
end
