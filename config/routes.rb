Rails.application.routes.draw do
  # This is my index
  root 'pages#home'

  get 'pages/home'

  get 'pages/record'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
