# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all

User.create!(
  name: 'Lucy', 
  email: 'lucy@littlemermaid.com',
  password: 'password',
  birthday: '1994-04-07',
  hometown: 'Vancouver',
  location: 'Barcelona',
  profile_picture: 'https://video-images.vice.com/_uncategorized/1630621230611-gettyimages-115363484.jpeg',
  description: 'Little mermaid from the Pacific looking to sight-see and cliff-dive in the Mediterranean',
  active: true,
  traveller: true,
  local: false
)

User.create!(
  name: 'Shaun', 
  email: 'shaun@robs.ca',
  password: 'password2',
  birthday: '1989-06-15',
  hometown: 'Vancouver',
  location: 'Vancouver',
  profile_picture: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/ct-white-4560-1619794724.jpg',
  description: 'West Coast born and raised, male model looking for friends who want to do photoshoots in the mountains!',
  active: true,
  traveller: false,
  local: true
)

User.create!(
  name: 'Simba', 
  email: 'lions@google.com',
  password: 'password3',
  birthday: '1993-04-07',
  hometown: 'Toronto',
  location: 'Bali',
  profile_picture: 'https://images.goodsmile.info/cgm/images/product/20200114/9164/66743/large/04c45b878e5a2be879d9137a18905611.jpg',
  description: 'Lion from the Jungle looking to travel and ATV in the Saharan Desert',
  active: true,
  traveller: true,
  local: false
)
