Rails.application.routes.draw do

  scope '/api' do 
    resources :users
    resources :friends
    resources :posts
    # resources :photos
    resources :comments
    resources :requests
  end 
  
  

  #Signup
  get '/signup' => 'users#new'
  post '/users' => 'users#create'

  #Login/logout
  get '/login' => 'sessions#new'
  post '/login' => 'sessions#create'
  get '/logout' => 'sessions#destroy'

  get '/newsfeed' => 'posts#index' 

  post '/requests' => 'requests#create'

  root 'users#index'

end
