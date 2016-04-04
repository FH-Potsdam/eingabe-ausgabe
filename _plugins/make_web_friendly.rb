# _plugins/make_web_friendly.rb
require 'liquid'

# http://stackoverflow.com/questions/21446369/deleting-all-special-characters-from-a-string-ruby
module WEBFriendly
  def make_web_friendly(url)
    res = url.to_s.downcase
    res = res.to_s.gsub(' ', '-')
    res = res.to_s.gsub(/[^a-zA-Z0-9\-]/,"")
    return res
  end
end

Liquid::Template.register_filter(WEBFriendly)