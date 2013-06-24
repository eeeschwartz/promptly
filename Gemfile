source 'https://rubygems.org'

gem 'rails', '3.2.13'
gem 'friendly_id'
gem 'rack-cors', :require => 'rack/cors'
gem 'twilio-ruby'
gem 'unicorn'
gem 'delayed_job_active_record'
gem 'roo'
gem 'devise'
gem 'cancan'
gem 'foreman'
gem 'jquery-rails', '2.0.2'
gem 'role_model'
gem 'sass'
gem 'sass-rails'
gem 'compass'
gem 'compass-rails'
gem 'bootstrap-sass'

# hack to make heroku cedar not install special groups
def hg(g)
  (ENV['HOME'].gsub('/','') == 'app' ? 'test' : g)
end

#need javascript runtime to run rake tasks
gem 'therubyracer'

gem 'pry'
gem 'pry-nav'
gem 'sqlite3', '1.3.5'
gem 'rspec-rails'
gem 'sms-spec'
gem 'dotenv-rails'
gem 'database_cleaner'
gem "daemons"
gem 'pg', '0.12.2'

# Gems used only for assets and not required
# in production environments by default.
group :assets do
  gem 'uglifier', '1.2.3'
  gem 'font-awesome-sass-rails'
  gem 'coffee-rails'
end

group :test do
  gem "factory_girl_rails"
  gem "capybara"
  gem "launchy"
  gem "guard-rspec"
  gem 'shoulda-matchers'
  gem 'rake'
end

group hg(:production) do
  #sql server adapter
  gem 'activerecord-sqlserver-adapter'

  #required for activerecord-sqlserver-adapter
  gem 'tiny_tds'
end
