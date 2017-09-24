class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
end

require 'wavefile'
include WaveFile

Reader.new("/Users/oswaldososa/cs121-assignment-2/sounds/piano_a.wav").each_buffer do |buffer|
	puts "Read #{buffer.samples.length} samples."
end

FILES_TO_APPEND = ["/Users/oswaldososa/cs121-assignment-2/sounds/piano_g-sharp.wav", 
					"/Users/oswaldososa/cs121-assignment-2/sounds/piano_a.wav", 
					"/Users/oswaldososa/cs121-assignment-2/sounds/piano_b-flat.wav"]

Writer.new("append.wav", Format.new(:stereo, :pcm_16, 44100)) do |writer|
  FILES_TO_APPEND.each do |file_name|
    Reader.new(file_name).each_buffer do |buffer|
      writer.write(buffer)
    end
  end
end
