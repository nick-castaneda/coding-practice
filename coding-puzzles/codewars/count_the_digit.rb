# Take an integer n (n >= 0) and a digit d (0 <= d <= 9) as an integer.
# Square all numbers k (0 <= k <= n) between 0 and n. Count the numbers
# of digits d used in the writing of all the k**2. Call nb_dig (or nbDig
# or ...) the function taking n and d as parameters and returning this
# count.

def nb_dig(n, d)
  counter = 0
  string_of_squares(n).split("").each { |c| counter += 1 if d == c.to_i }
  counter
end

def string_of_squares(num)
  squares_array = []
  for x in 0..num do
    squares_array << x ** 2
  end
  squares_array.join
end

puts nb_dig(6, 1)
