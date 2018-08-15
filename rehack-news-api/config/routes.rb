Rails.application.routes.draw do
  scope '/api/v1' do
    get '/saves', to: 'saves#index'
    post '/saves', to: 'saves#create'
    put '/saves/:id', to: 'saves#update'
    delete '/saves/:id', to: 'saves#destroy'
  end
end
