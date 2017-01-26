Rails.application.routes.draw do
  get 'hello_world', to: 'hello_world#index'
  get 'signature', to: 'cloudinary#new'
end
