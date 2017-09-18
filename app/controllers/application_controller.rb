class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
end

require 'wavefile'
include WaveFile

#Reader.new("/68437__pinkyfinger__piano-a.wav").each_buffer do |buffer|
#	puts "Read #{buffer.samples.length} samples."
#end