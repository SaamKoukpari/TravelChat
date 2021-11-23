Rails.application.routes.draw do

  scope '/api' do 
    resources :users
  end 
  
  root 'users#index'
<<<<<<< HEAD
end
=======
  end
  
>>>>>>> f82b2321f106baf663ec5d215445e1ddf65f7166
