Rails.application.routes.draw do
  namespace :v1, defaults: { formart: 'json' } do
    get 'messages', to: 'messages#index'
  end

  root 'static#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
