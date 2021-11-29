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
  friend_id: [2, 3, 4, 5],
  post_id: [1, 2],
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
  friend_id: [1],
  post_id: [4, 5],
  calendar_id: [],
  name: 'Shaun', 
  email: 'shaun@robs.ca',
  password: 'password',
  birthday: '1992-06-15',
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
  friend_id: [1],
  post_id: [6],
  calendar_id: [],
  name: 'Alexa', 
  email: 'lions@google.com',
  password: 'password',
  birthday: '1997-04-07',
  hometown: 'Toronto',
  location: 'Bali',
  profile_picture: 'https://i.pinimg.com/originals/ac/c0/17/acc01701dbc609ee8be4b55afb896b22.jpg',
  description: 'Lion from the Jungle looking to do yoga in the Saharan Desert',
  active: true,
  traveller: true,
  local: false
)
  
#user.id = 4
User.create!(
  friend_id: [1],
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
  friend_id: [1],
  post_id: [3],
  calendar_id: [],
  name: 'Tim', 
  email: 'tattootime@hotmail.com',
  password: 'password',
  birthday: '1993-03-10',
  hometown: 'Toronto',
  location: 'Bali',
  profile_picture: 'https://www.verywellmind.com/thmb/zqjlPGA4B2vtk9dKKJ4_nKIQzpE=/2122x1194/smart/filters:no_upscale()/happy-relaxed-man-wearing-glasses-ee2f1576532643e0845952e209bad8ee.jpg',
  description: 'Hey all! Tattoo Tim here looking to find inspiration for my next pieces. Let me know if you want a shot at my at home tattoo gun ;)',
  active: true,
  traveller: true,
  local: false
)

#user.id = 6
User.create!(
  friend_id: [],
  post_id: [3],
  calendar_id: [],
  name: 'Fred', 
  email: 'lonelyme@hotmail.com',
  password: 'password',
  birthday: '1991-03-10',
  hometown: 'Toronto',
  location: 'Vancouver',
  profile_picture: 'hhttps://cdn.pixabay.com/photo/2018/10/22/22/23/portrait-3766552_1280.jpg',
  description: 'Just moved here from the east coast! Anybody want to show me around?',
  active: true,
  traveller: true,
  local: false
)
      

#post.id = 1
Post.create!(
user_id: 1,
photo_id: [1],
comment_ids: [],
content: "Watch me and my girls kick ass on the big screen!",
likes: 351,
published: true,
posted_at: '2000-04-20 15:16:38 UTC'
)
  
#post.id = 2
Post.create!(
user_id: 1,
photo_id: [2],
comment_ids: [],
content: "Absolute legends!",
likes: 220,
published: true,
posted_at: '2021-10-12 15:26:38 UTC'
)

#post.id = 3
Post.create!(
user_id: 5,
photo_id: [],
comment_ids: [],
content: "Tim Cook here looking for cooks to get this cooking show done?",
likes: 14,
published: true,
posted_at: '2021-11-27 20:23:38 UTC'
)
  
#post.id = 4
Post.create!(
  user_id: 2,
  photo_id: [],
  comment_ids: [],
  content: "GOING CLIFF-DIVING IF ANYBODY WANTS TO COME!!!",
  likes: 20,
  published: true,
  posted_at: '2021-10-01 15:16:38 UTC'
)

#post.id = 5
Post.create!(
  user_id: 2,
  photo_id: [],
  comment_ids: [],
  content: "Howdy YALL! 🤠🤠🤠🤠",
  likes: 55,
  published: true,
  posted_at: '2021-11-29 15:16:38 UTC'
)

#post.id = 6
Post.create!(
  user_id: 3,
  photo_id: [],
  comment_ids: [],
  content: "Hey guys, this is my first post. Simba here just treking with my lion pack.",
  likes: 89,
  published: true,
  posted_at: '2021-11-29 00:16:38 UTC'
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
  content: "My car is full of guys! Anybody want to meet us up at Squamish, we'll be there for noon!"
)