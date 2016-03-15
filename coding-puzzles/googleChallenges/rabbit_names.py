from operator import itemgetter, attrgetter, methodcaller

# Calculates the point value of each letter
def pointValues(let):
    return {
        'a': 1,
        'b': 2,
        "c": 3,
        "d": 4,
        "e": 5,
        "f": 6,
        "g": 7,
        "h": 8,
        "i": 9,
        "j": 10,
        "k": 11,
        "l": 12,
        "m": 13,
        "n": 14,
        "o": 15,
        "p": 16,
        "q": 17,
        "r": 18,
        "s": 19,
        "t": 20,
        "u": 21,
        "v": 22,
        "w": 23,
        "x": 24,
        "y": 25,
        "z": 26
    }[let]

# Takes in a list of names and returns the list ordered by letter point
# value and reverse alphabetically
def answer(listOfNames):
    # Declare a list for name/value pairs. For each name in the given
    # list, calculate the word point value using the pointValues
    # function for each letter. Append the name/pointValue pair to the
    # namesAndValues list
    namesAndValues = []
    for name in listOfNames:
        pointValue = 0
        for letter in name:
            pointValue += pointValues( letter.lower() )
        namesAndValues.append((name, pointValue))
    # Declare a list for the names in correct order. Sort the
    # nameAndValues list by point values (high to low) first, and then
    # reverse alphabetically for ties. Push each name to the
    # namesInOrder list and return it
    namesInOrder = []
    for nameAndValue in sorted(namesAndValues, key=itemgetter(1,0), reverse=True):
        namesInOrder.append( nameAndValue[0] )
    return namesInOrder



















