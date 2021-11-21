Rails.application.routes.draw do
  scope '/api' do 
    resources :users
  end 
  root 'users#index'
  # match '*path', to 'home#index', via: :all
  end
