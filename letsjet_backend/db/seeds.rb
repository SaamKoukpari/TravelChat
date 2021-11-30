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
  friend_id: [2, 3, 4, 5, 17, 18, 19, 20, 21],
  post_id: [1, 2],
  calendar_id: [],
  name: 'Lucy Charlie', 
  email: 'lucy@littlemermaid.com',
  password: 'password',
  birthday: '1994-04-07',
  hometown: 'Vancouver',
  location: 'Barcelona',
  profile_picture: "./lucy-angel.png",
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
  name: 'Shaun Robinson', 
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
  name: 'Alexa Google', 
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
  name: 'George Emery', 
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
  name: 'Tim Tats', 
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
  name: 'Freddie Lane', 
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

###################################
#user.id = 7
User.create!(
  friend_id: [],
  post_id: [],
  calendar_id: [],
  name: 'James Bain', 
  email: 'jamesbain@hotmail.com',
  password: 'password',
  birthday: '1988-08-10',
  hometown: 'Calgary',
  location: 'Los Angeles',
  profile_picture: 'https://www.lighthouselabs.ca/uploads/team_member/avatar/594/medium_206-0-2.jpeg',
  description: 'New to Calgary, in love with coding! Anybody want to show me around?',
  active: true,
  traveller: true,
  local: false
)



#user.id = 8
User.create!(
  friend_id: [],
  post_id: [],
  calendar_id: [],
  name: 'Andy Lindsay', 
  email: 'andywebdev@geocities.com',
  password: 'password',
  birthday: '1983-03-12',
  hometown: 'Vancouver',
  location: 'Chiang Mai',
  profile_picture: 'https://www.lighthouselabs.ca/uploads/team_member/avatar/330/medium_Andy_Lindsay_profile.jpeg',
  description: 'Fullstack web developer visiting Chaing Mai! What a beautiful place! ',
  active: true,
  traveller: true,
  local: false
)

#user.id = 9
User.create!(
  friend_id: [],
  post_id: [],
  calendar_id: [],
  name: 'Jenny Slate', 
  email: 'jslate@gmail.com',
  password: 'password',
  birthday: '1990-03-12',
  hometown: 'Vancouver',
  location: 'Chiang Mai',
  profile_picture: 'https://static.onecms.io/wp-content/uploads/sites/14/2019/10/22/102219-jenny-slate-lead-2000.jpg',
  description: 'Just enjoying life! With a passion for the outdoors',
  active: true,
  traveller: true,
  local: false
)

#user.id = 10
User.create!(
  friend_id: [],
  post_id: [],
  calendar_id: [],
  name: 'Naomi Ackie', 
  email: 'Naomisworld@gmail.com',
  password: 'password',
  birthday: '1992-03-12',
  hometown: 'Vancouver',
  location: 'Chiang Mai',
  profile_picture: 'https://static.wikia.nocookie.net/starwars/images/d/d8/Naomi_Ackie_%28Helen_Maybanks%29_HiRes.jpg',
  description: 'Passionate photographer living everyday likes its my last',
  active: true,
  traveller: true,
  local: false
)

#user.id = 11
User.create!(
  friend_id: [],
  post_id: [],
  calendar_id: [],
  name: 'Ash Santos', 
  email: 'ashknowsbest@gmail.com',
  password: 'password',
  birthday: '1989-03-12',
  hometown: 'Vancouver',
  location: 'Chiang Mai',
  profile_picture: 'https://i.pinimg.com/736x/f3/65/66/f365664aa247b132e1859e7191941ad7.jpg',
  description: 'Always searching for another great spot to go for a hike :)',
  active: true,
  traveller: true,
  local: false
)

#user.id = 12
User.create!(
  friend_id: [],
  post_id: [],
  calendar_id: [],
  name: 'Zendaya', 
  email: 'Zendaya@gmail.com',
  password: 'password',
  birthday: '1994-03-12',
  hometown: 'Los Angeles',
  location: 'Chiang Mai',
  profile_picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Zendaya_-_2019_by_Glenn_Francis.jpg/220px-Zendaya_-_2019_by_Glenn_Francis.jpg',
  description: 'Eat sleep code repeat. Live laugh love',
  active: true,
  traveller: true,
  local: false
)

#user.id = 13
User.create!(
  friend_id: [],
  post_id: [],
  calendar_id: [],
  name: 'Tedd Lasso', 
  email: 'believe@gmail.com',
  password: 'password',
  birthday: '1980-03-12',
  hometown: 'New york',
  location: 'Los Angeles',
  profile_picture: 'https://m.media-amazon.com/images/M/MV5BMjE3NTE4Nzg3Ml5BMl5BanBnXkFtZTgwODc5OTUxMTI@._V1_.jpg',
  description: 'Love coaching soccer',
  active: true,
  traveller: true,
  local: false
)

#user.id = 14
User.create!(
  friend_id: [],
  post_id: [],
  calendar_id: [],
  name: 'Freida', 
  email: 'wouldratherberunning@gmail.com',
  password: 'password',
  birthday: '1994-03-12',
  hometown: 'New york',
  location: 'Los Angeles',
  profile_picture: 'https://static.wikia.nocookie.net/planetoftheapes/images/0/02/Freida_Pinto.jpg',
  description: 'Acting is my passion but I really love running',
  active: true,
  traveller: true,
  local: false
)

#user.id = 15
User.create!(
  friend_id: [],
  post_id: [],
  calendar_id: [],
  name: 'Tadej Pogačar', 
  email: 'topofthegame@gmail.com',
  password: 'password',
  birthday: '1998-03-12',
  hometown: 'Slovenia',
  location: 'Los Angeles',
  profile_picture: 'http://cyclingpub.com/photos/1613845979.jpg',
  description: 'Two time Tour de france winner, trainning hard to win again next year',
  active: true,
  traveller: true,
  local: false
)

#user.id = 16
User.create!(
  friend_id: [],
  post_id: [],
  calendar_id: [],
  name: 'Egan Bernal', 
  email: 'ineosgrenadiers@gmail.com',
  password: 'password',
  birthday: '1997-03-12',
  hometown: 'Bogota',
  location: 'Los Angeles',
  profile_picture: 'https://gossipgist.com/uploads/26970/egan-bernal-cyclist.png',
  description: 'First Latin american rider to win the tour de france',
  active: true,
  traveller: true,
  local: false
)




#user.id = 17 LUCY FRIENDS !!!! 
User.create!(
  friend_id: [1],
  post_id: [8, 11],
  calendar_id: [],
  name: 'Timothée Chalamet', 
  email: 'tim@savetheseas.com',
  password: 'password',
  birthday: '1995-03-12',
  hometown: 'New York',
  location: 'Miami',
  profile_picture: 'https://api.time.com/wp-content/uploads/2021/10/timothee-chalamet-next-generation-leaders-2021.jpg',
  description: 'Passionate about enviromental issues',
  active: true,
  traveller: true,
  local: false
)

#user.id = 18 LUCY FRIENDS !!!! 
User.create!(
  friend_id: [1],
  post_id: [10, 12],
  calendar_id: [],
  name: 'Ana de Armas', 
  email: 'cuba@gmail.com',
  password: 'password',
  birthday: '1995-03-12',
  hometown: 'Santa Cruz del Norte',
  location: 'Miami',
  profile_picture: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/ana-de-armas-1626771511.jpg',
  description: 'Lets goto the beach!',
  active: true,
  traveller: true,
  local: false
)

#user.id = 19 LUCY FRIENDS !!!! 
User.create!(
  friend_id: [1],
  post_id: [14,16],
  calendar_id: [],
  name: 'Tawny', 
  email: 'fourlostsouls@gmail.com',
  password: 'password',
  birthday: '1983-03-12',
  hometown: 'Vacaville',
  location: 'Portland',
  profile_picture: 'https://static.wikia.nocookie.net/space-force/images/e/ea/Unnamed.jpg',
  description: 'Musician that loves to bake',
  active: true,
  traveller: true,
  local: false
)

#user.id = 20 LUCY FRIENDS !!!! 
User.create!(
  friend_id: [1],
  post_id: [13, 15],
  calendar_id: [],
  name: 'Lauren London', 
  email: 'LLondon@gmail.com',
  password: 'password',
  birthday: '1984-03-12',
  hometown: 'Los Angeles',
  location: 'Austin',
  profile_picture: 'https://cdn.vox-cdn.com/thumbor/DL45lX96sUmgfhko1NJ0QsvMfTk=/0x0:594x360/1200x800/filters:focal(251x110:345x204)/cdn.vox-cdn.com/uploads/chorus_image/image/68905225/Lauren_London.0.jpg',
  description: 'Artistic people are my favorite! Make things its great!',
  active: true,
  traveller: true,
  local: false
)

#user.id = 21 LUCY FRIENDS !!!! 
User.create!(
  friend_id: [1],
  post_id: [7, 9],
  calendar_id: [],
  name: 'Ramón Laureano', 
  email: 'anglesintheoutfield@gmail.com',
  password: 'password',
  birthday: '1994-03-12',
  hometown: 'Santo Domingo',
  location: 'Oakland',
  profile_picture: 'https://www.mercurynews.com/wp-content/uploads/2019/06/1153777700.jpg',
  description: 'They call me the laser',
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

#post.id = 7
Post.create!(
  user_id: 21,
  photo_id: [],
  comment_ids: [],
  content: "Sure it's the off season but I sure do miss the Coliseum ⚾ ⚾ ⚾ !",
  likes: 63,
  published: true,
  posted_at: '2021-11-30 01:16:38 UTC'
)



#post.id = 8
Post.create!(
  user_id: 17,
  photo_id: [],
  comment_ids: [],
  content: "Awesome turn out today! Thanks to all who volunteered 🏖️",
  likes: 189,
  published: true,
  posted_at: '2021-11-25 01:26:38 UTC'
)


#post.id = 9
Post.create!(
  user_id: 21,
  photo_id: [],
  comment_ids: [],
  content: "Was just chatting with Egan, what a legend!!",
  likes: 21,
  published: true,
  posted_at: '2021-11-26 01:16:38 UTC'
)



#post.id = 10
Post.create!(
  user_id: 18,
  photo_id: [],
  comment_ids: [],
  content: "Fantastic day of 🤿  in the warm waters off Cuba today",
  likes: 289,
  published: true,
  posted_at: '2021-11-24 02:26:38 UTC'
)



#post.id = 11
Post.create!(
  user_id: 17,
  photo_id: [],
  comment_ids: [],
  content: "Great to see friends and family while visiting home",
  likes: 189,
  published: true,
  posted_at: '2021-11-28 02:26:38 UTC'
)

#post.id = 12
Post.create!(
  user_id: 18,
  photo_id: [],
  comment_ids: [],
  content: "Recieved flowers today from a secret admirer🥰 🥰 🥰 ",
  likes: 109,
  published: true,
  posted_at: '2021-11-26 02:26:38 UTC'
)

#post.id = 13
Post.create!(
  user_id: 20,
  photo_id: [],
  comment_ids: [],
  content: "Next time your in Austin be sure to checkout Casino El Camino ",
  likes: 170,
  published: true,
  posted_at: '2021-11-29 01:00:38 UTC'
)


#post.id = 14 
Post.create!(
  user_id: 19,
  photo_id: [],
  comment_ids: [],
  content: "Went to Cannon beach today! Such a beautiful place. Totally need to rewatch Goonies now!🏴‍☠️ ",
  likes: 190,
  published: true,
  posted_at: '2021-11-29 01:00:38 UTC'
)


#post.id = 15 
Post.create!(
  user_id: 20,
  photo_id: [],
  comment_ids: [],
  content: "Austin is incredible, Barton springs is a must see!! ",
  likes: 232,
  published: true,
  posted_at: '2021-11-29 01:00:38 UTC'
)



#post.id = 16
Post.create!(
  user_id: 19,
  photo_id: [],
  comment_ids: [],
  content: "Not sure I should be saying this, but Portland has the best burriots ever",
  likes: 200,
  published: true,
  posted_at: '2021-11-30 01:12:38 UTC'
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