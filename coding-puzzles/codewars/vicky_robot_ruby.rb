# Vicky is quite the small wonder. Most people don't even realize she's
# not a real girl, but a robot living amongst us. Sure, if you stick
# around her home for a while you might see her creator open up her back
# and make a few tweaks and even see her recharge in the closet instead
# of sleeping in a bed.
# In this kata, we're going to help Vicky keep track of the words she's
# learning.
# Write a function, learnWord(word) which is a method of the Robot
# object. The function should report back whether the word is now
# stored, or if she already knew the word.

class Robot

  def initialize
    @word_array = %w["thank you for teaching me i already know the word thank understand input do not not"]
  end

  def learn_word word
    if not_acceptable word
      "I do not understand the input"
    else
      word_new = !@word_array.include?(word.downcase)
      if word_new
        @word_array.push(word.downcase)
        "Thank you for teaching me #{word}"
      else
        "I already know the word #{word}"
      end
    end
  end

  def not_acceptable word_check = "1"
    !(word_check != "" and /^[a-zA-Z]+$/.match(word_check.to_s).to_s == word_check.to_s)
  end

end

vicky = Robot.new

puts vicky.learn_word "hi"
puts vicky.learn_word "hi"
puts vicky.learn_word 13
