def answer(document, searchTerms):
    # Split up the doc into a list, declare the shortest snippet var
    shortestString = []
    docWordArray = document.split()

    # Loop through each word in the document and if the current word is
    # one of the search terms, set variables for a snippet array and
    # a word array to compare with the inputted search term array
    for i in range( 0, len(docWordArray) ):
        if docWordArray[i] in searchTerms:
            snippetArray = []
            searchTermCheck = []

            # Go through the document starting at the given word
            for j in range( i, len(docWordArray) ):

                # As long as the search term array is longer than the
                # search term check array, push words to the snippet
                if set(searchTerms) != set(searchTermCheck):
                    snippetArray.append(docWordArray[j])

                    # If the words are one of the search terms, push
                    # them to the check array so that the function knows
                    # when to stop adding to the snippet
                    if docWordArray[j] in searchTerms:
                        searchTermCheck.append(docWordArray[j])

            # If there is no shortest string or if the new snippet is
            # shorter than the current snippet AND has all the search
            # terms, set the new snippet to the shortest
            if len(shortestString) == 0:
                shortestString = snippetArray
            elif len(shortestString) > len(snippetArray) and set(searchTerms) == set(searchTermCheck):
                shortestString = snippetArray

    # Make it a string a return
    return " ".join(shortestString)



print answer("hi my name is nick duh nick my break my name nick is the the the my this up is hi", ["nick", "is", "my"])
