# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all

#user.id = 1
User.create!(
  friend_id: [],
  post_id: [1],
  calendar_id: [],
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

#user.id = 2
User.create!(
  friend_id: [],
  post_id: [4],
  calendar_id: [],
  name: 'Shaun', 
  email: 'shaun@robs.ca',
  password: 'password',
  birthday: '1989-06-15',
  hometown: 'Vancouver',
  location: 'Vancouver',
  profile_picture: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/ct-white-4560-1619794724.jpg',
  description: 'West Coast born and raised, male model looking for friends who want to do photoshoots in the mountains!',
  active: true,
  traveller: false,
  local: true
)

#user.id = 3
User.create!(
  friend_id: [],
  post_id: [],
  calendar_id: [],
  name: 'Simba', 
  email: 'lions@google.com',
  password: 'password',
  birthday: '1993-04-07',
  hometown: 'Toronto',
  location: 'Bali',
  profile_picture: 'https://images.goodsmile.info/cgm/images/product/20200114/9164/66743/large/04c45b878e5a2be879d9137a18905611.jpg',
  description: 'Lion from the Jungle looking to travel and ATV in the Saharan Desert',
  active: true,
  traveller: true,
  local: false
)

#user.id = 4
User.create!(
  friend_id: [],
  post_id: [],
  calendar_id: [],
  name: 'George', 
  email: 'g@curious.com',
  password: 'password',
  birthday: '1998-03-16',
  hometown: 'LA',
  location: 'Bali',
  profile_picture: 'https://media.istockphoto.com/photos/success-happens-the-moment-you-believe-it-will-picture-id1262964438?b=1&k=20&m=1262964438&s=170667a&w=0&h=rgmdwXyMrmNuY_3BlmBFI0MdeayurqAjQSvweG4Htso=',
  description: 'Hollywood start looking for a fresh start in a more grounded place. Hit me up if you want you adventure! I love yoga & mediation',
  active: true,
  traveller: true,
  local: false
)

#user.id = 5
User.create!(
  friend_id: [],
  post_id: [],
  calendar_id: [],
  name: 'Tim', 
  email: 'cookingwithtime@hotmail.com',
  password: 'password',
  birthday: '1989-03-10',
  hometown: 'Toronto',
  location: 'Bali',
  profile_picture: 'http://pm1.narvii.com/7234/e77bfd73a13901d675d3ca234e48654d2f0d9128r1-279-282v2_uhq.jpg',
  description: 'Chef Tim here looking to bring new tastes to places I\ve never been to, like Honolulu!',
  active: true,
  traveller: true,
  local: false
)

#post.id = 1
Post.create!(
  user_id: 1,
  photo_id: [1],
  comment_ids: [1, 2],
  content: "Watch me and my girls kick ass on the big screen!",
  likes: 7000,
  published: true,
  posted_at: '2000-04-20 15:16:38 UTC'
)

#post.id = 2
Post.create!(
  user_id: 1,
  photo_id: [2],
  comment_ids: [1, 2],
  content: "Absolute ledgends!",
  likes: 220,
  published: true,
  posted_at: '2000-04-12 15:26:38 UTC'
)

#post.id = 3
Post.create!(
  user_id: 5,
  photo_id: [],
  comment_ids: [],
  content: "Tim Cook here looking for cooks to get this cooking show done?",
  likes: 1,
  published: true,
  posted_at: '2020-04-27 20:23:38 UTC'
)

#post.id = 4
Post.create!(
  user_id: 2,
  photo_id: [],
  comment_ids: [4, 5],
  content: "GOING CLIFF-DIVING IF ANYBODY WANTS TO COME!!!",
  likes: 5,
  published: true,
  posted_at: '2020-07-01 15:16:38 UTC'
)
   
#photo.id = 1
Photo.create!(
  user_id: 3,
  post_id: 1,
  url: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2019/11/22/15/gettyimages-1304408.jpg?width=982&height=726&auto=webp&quality=75"
)

#photo.id = 2
Photo.create!(
  user_id: 5,
  post_id: 1,
  url: "https://files.worldwildlife.org/wwfcmsprod/images/Mountains_New_Hero_Image/story_full_width/5c6n24n4pm_mountains_hero.jpg"
)

#photo.id = 1
Photo.create!(
  user_id: 3,
  post_id: 1,
  url: "https://www.hinduamerican.org/wp-content/uploads/2020/06/20120510012-scaled.jpg"
)
  
#comment.id = 1
Comment.create!(
  user_id: 2, 
  post_id: 1,
  content: "So awesome!! Can't wait to see it!"
)
          
#comment.id = 2
Comment.create!(
  user_id: 4, 
  post_id: 1,
  content: "So great working with you talented people! "
)
            
#comment.id = 3
Comment.create!(
  user_id: 2,  
  post_id: 2,
  content: "Omg what a snooze"
)

#comment.id = 4
Comment.create!(
  user_id: 5,  
  post_id: 4,
  content: "Wish I could be there! I miss Vancouver"
)

#comment.id = 5
Comment.create!(
  user_id: 2,  
  post_id: 4,
  content: "My car is full guys! Anybody want to meet us up at Squamish, we'll be there for noon!"
)
