# chatroom


## redis

$ ln -sfv /usr/local/opt/redis/.plist ~/Library/LaunchAgents'
Start Redis server via “launchctl”.
$ launchctl load ~/Library/LaunchAgents/homebrew.mxcl.redis.plist
Start Redis server using configuration file.
$ redis-server /usr/local/etc/redis.conf
Stop Redis on autostart on computer start.
$ launchctl unload ~/Library/LaunchAgents/homebrew.mxcl.redis.plist
Location of Redis configuration file.
/usr/local/etc/redis.conf
Uninstall Redis and its files.
$ brew uninstall redis
$ rm ~/Library/LaunchAgents/homebrew.mxcl.redis.plist
Get Redis package information.
$ brew info redis
Test if Redis server is running.
$ redis-cli ping


## Devise
Some setup you must do manually if you haven't yet:

  1. Ensure you have defined default url options in your environments files. Here
     is an example of default_url_options appropriate for a development environment
     in config/environments/development.rb:

       config.action_mailer.default_url_options = { host: 'localhost', port: 3000 }

     In production, :host should be set to the actual host of your application.

  2. Ensure you have defined root_url to *something* in your config/routes.rb.
     For example:

       root to: "home#index"

  3. Ensure you have flash messages in app/views/layouts/application.html.erb.
     For example:

       <p class="notice"><%= notice %></p>
       <p class="alert"><%= alert %></p>

  4. You can copy Devise views (for customization) to your app by running:

       rails g devise:views
