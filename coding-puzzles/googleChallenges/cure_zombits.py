'''
Square supplies
===============
With the zombie cure injections ready to go, it's time to start treating
our zombified rabbit friends (known as zombits) at our makeshift zombit
treatment center. You need to run out really fast to buy some gauze pads
but you only have 30 seconds before you need to be back.

Luckily, the corner store has unlimited gauze pads in squares of all
sizes. Jackpot! The pricing is simple - a square gauze pad of size K x K
costs exactly K * K coins. For example, a gauze pad of size 3x3 costs 9
coins.

You're in a hurry and the cashier takes a long time to process each
transaction. You decide the fastest way to get what you need is to buy
as few gauze pads as possible, while spending all of your coins (you can
always cut up the gauze later if you need to). Given that you have n
coins, what's the fewest number of gauze pads you can buy?

Write a method answer(n), which returns the smallest number of square
gauze pads that can be bought with exactly n coins.

n will be an integer, satisfying 1 <= n <= 10000.
'''

import math

def answer(n):
    # Declare a counter and an array for perfect squares
    counter = 0
    squaresArray = []

    # Find the largest square that is less than the input and append to
    # the perfect squares array the squares of all the numbers upto
    # and including that number
    biggestRoot = math.trunc(n ** .5)
    for i in range(1, biggestRoot + 1):
        squaresArray.append(i ** 2)

    # While you still have money, buy the largest possible piece. Repeat
    # until you run out of money
    while n != 0:
        if n >= squaresArray[len(squaresArray) - 1]:
            n -= squaresArray[len(squaresArray) - 1]
            counter += 1
        else:
            squaresArray.pop()

    # Return counter
    return counter

