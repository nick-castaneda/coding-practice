# Implement a function that successfully adds two numbers together and
# returns their solution in binary. The conversion can be done before,
# or after the addition of the two.
# The binary number returned should be a string!

def add_binary a, b
  return_arr = con_to_binary(a + b)
  return_arr.shift if return_arr[0] == "0"
  return_arr.join
end

def con_to_binary num
  square = max_square_for_input(num)
  binary_pieces = []
  while square >= 1
    if num / square == 1
      binary_pieces << "1"
      num -= square
    else
      binary_pieces << "0"
    end
    square /= 2
  end
  binary_pieces
end

def max_square_for_input(number)
  biggest_square = 1
  biggest_square *= 2 while biggest_square < number
  biggest_square
end

puts add_binary(250, 5)
