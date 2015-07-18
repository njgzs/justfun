json.array!(@users) do |user|
  json.extract! user, :id, :username, :password_digest, :avatar, :auth_token, :email
  json.url user_url(user, format: :json)
end
