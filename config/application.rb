require_relative 'boot'

require 'rails/all'
require 'wavefile'
include WaveFile

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module Cs121App
  class Application < Rails::Application
    # Initialize configuration defaults for originally generated Rails version.
    config.load_defaults 5.1

FILES_TO_APPEND = ["68437__pinkyfinger__piano-a.wav", "68445__pinkyfinger__piano-f.wav", "68442__pinkyfinger__piano-d.wav"]

Writer.new("append.wav", Format.new(:stereo, :pcm_16, 44100)) do |writer|
  FILES_TO_APPEND.each do |file_name|
    Reader.new(file_name).each_buffer do |buffer|
      writer.write(buffer)
    end
  end
end

    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration should go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded.
  end
end
