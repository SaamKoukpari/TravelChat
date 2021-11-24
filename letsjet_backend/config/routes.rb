Rails.application.routes.draw do

  scope '/api' do 
    resources :users
    resources :friends
    resources :posts
    # resources :photos
    resources :comments
  end 

  root 'users#index'

  end
