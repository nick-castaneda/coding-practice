'''
When it rains it pours
======================
It's raining, it's pouring. You and your agents are nearing the building
where the captive rabbits are being held, but a sudden storm puts your
escape plans at risk. The structural integrity of the rabbit hutches
you've built to house the fugitive rabbits is at risk because they can
buckle when wet. Before the rabbits can be rescued from Professor
Boolean's lab, you must compute how much standing water has accumulated
on the rabbit hutches.

Specifically, suppose there is a line of hutches, stacked to various
heights and water is poured from the top (and allowed to run off the
sides). We'll assume all the hutches are square, have side length 1,
and for the purposes of this problem we'll pretend that the hutch
arrangement is two-dimensional.

For example, suppose the heights of the stacked hutches are
[1,4,2,5,1,2,3] (the hutches are shown below):

...X...
.X.X...
.X.X..X
.XXX.XX
XXXXXXX
1425123

When water is poured over the top at all places and allowed to runoff,
it will remain trapped at the 'O' locations:

...X...
.XOX...
.XOXOOX
.XXXOXX
XXXXXXX
1425123

The amount of water that has accumulated is the number of Os, which, in
this instance, is 5.

Write a function called answer(heights) which, given the heights of the
stacked hutches from left-to-right as a list, computes the total area of
standing water accumulated when water is poured from the top and allowed
to run off the sides.

The heights array will have at least 1 element and at most 9000
elements. Each element will have a value of at least 1, and at most
100000.

Languages
=========

To provide a Python solution, edit solution.py
To provide a Java solution, edit solution.java
'''

# ## First solution, it works, but it's too slow
# def answer(heightsArray):
#     totalWater = 0
#     counter = 1
#     while counter < len(heightsArray) - 1:
#         # Loop through each building. If shorter than previous set new counter
#         if heightsArray[counter] < heightsArray[counter - 1]:
#             newCounter = counter
#             changes = False
#             # Loop throop the rest of the buildings and if the next is taller,
#             # increase the current's height and the totalWater var.
#             # Start the loop over again until they're all equal
#             while newCounter < len(heightsArray) - 1:
#                 if heightsArray[newCounter + 1] > heightsArray[newCounter]:
#                     heightsArray[newCounter] += 1
#                     totalWater += 1
#                     changes += True
#                     newCounter = len(heightsArray) - 1
#                 else:
#                     newCounter += 1
#             if changes == False:
#                 counter += 1
#         # If not shorter, just go to the next
#         else:
#             counter += 1

#     return totalWater

###############################################

### Second answer. Faster, but still too slow
# def answer(heightsArray):
#     hatchVolume = 0
#     totalVolume = 0
#     # Make and array of hatch dictionaries storing the postion and the height
#     # Order by height
#     buildingStatsArr = []
#     # n
#     for i in range(0, len(heightsArray) ):
#         buildingStatsArr.append({"position": i, "height": heightsArray[i]})
#         hatchVolume += heightsArray[i]
#     # nlogn
#     buildingStatsArr.sort(key=lambda x: x["height"], reverse=True)

#     # Loop through hatches (In descending order)
#     # n^2 * nlogn
#     for i in range(0, len(buildingStatsArr)-1 ):
#         # Loop again through hatches. If the hatch in second loop is between
#         # the hatch of the first loop and the next hatch of the first loop
#         # AND is shorter than the next hatch of the first loop, change it's
#         # height to the next hatch of the first loop and resort the stats array
#         for j in range(i, len(buildingStatsArr) ):
#             if ( (buildingStatsArr[j]["position"] > buildingStatsArr[i]["position"] and buildingStatsArr[j]["position"] < buildingStatsArr[i + 1]["position"]) or (buildingStatsArr[j]["position"] < buildingStatsArr[i]["position"] and buildingStatsArr[j]["position"] > buildingStatsArr[i + 1]["position"]) ) and buildingStatsArr[j]["height"] < buildingStatsArr[i + 1]["height"]:
#                 buildingStatsArr[j]["height"] = buildingStatsArr[i + 1]["height"]
#                 buildingStatsArr.sort(key=lambda x: x["height"], reverse=True)
#         # Add each new height to the total volume
#         totalVolume += buildingStatsArr[i]["height"]
#     totalVolume += buildingStatsArr[len(buildingStatsArr)-1]["height"] # see line 100

#     # Subtract hatch volume from total
#     return totalVolume - hatchVolume

#####################################################

# Third Solution - ACCEPTED!
def answer(heightsList):
    # Set variables for the volume of all the hatches combined and all
    # the hatches combined plus the trapped water
    hatchVolume = 0
    totalVolume = 0

    # Loop through all the hatches. Find the hatchVolume and create a
    # list of dictionaries that store the positions and heights of each
    # hatch. Order the hatchStatsList by descending height
    hatchStatsList = []
    for i in range(0, len(heightsList) ):
        hatchStatsList.append({"position": i, "height": heightsList[i]})
        hatchVolume += heightsList[i]
    hatchStatsList.sort(key=lambda x: x["height"], reverse=True)

    # While loop for when the stats list is longer than 1, set vars for
    # current tallest and the second current tallest
    while len(hatchStatsList) > 1:
        tallestHatch = hatchStatsList[0]
        secondTallestHatch = hatchStatsList[1]

        # Loop backwards through the other hatches. If the iterated
        # hatch is positioned between the current tallest and 2nd
        # tallest it's height is either as tall as the 2nd tallest, or
        # will be after it rains, so add the height of the 2nd tallest
        # to the totalVolume and delete the iterated hatch from the
        # hatchStatsList
        for j in range( len(hatchStatsList) - 1, 1, -1 ):
            if ( (hatchStatsList[j]["position"] > tallestHatch["position"] and hatchStatsList[j]["position"] < secondTallestHatch["position"]) or (hatchStatsList[j]["position"] < tallestHatch["position"] and hatchStatsList[j]["position"] > secondTallestHatch["position"]) ):
                totalVolume += secondTallestHatch["height"]
                del hatchStatsList[j]

        # Add the height of the current tallest hatch to the totalVolume
        # and delete it from the hatchStatsList
        totalVolume += tallestHatch["height"]
        del hatchStatsList[0]

    # Add the height of the last remaining hatch to the totalVolume and
    # return the difference between the totalVolume and hatchVolume
    totalVolume += hatchStatsList[0]["height"]
    return totalVolume - hatchVolume



#####################################################

### Third asnwer (trimming the array. Doesn't work yet, but probs the fastest
# def answer(heightsArray):
#     hatchVolume = 0
#     totalVolume = 0
#     buildingStatsArr = []
#     for i in range(0, len(heightsArray) ):
#         buildingStatsArr.append({"position": i, "height": heightsArray[i]})
#         hatchVolume += heightsArray[i]

#     buildingStatsArr.sort(key=lambda x: x["height"], reverse=True)

#     outerLoopCounter = 0
#     while outerLoopCounter < len(buildingStatsArr) - 1:
#         innerLoopCounter = 0
#         totalVolume += buildingStatsArr[outerLoopCounter]["height"]
#         print buildingStatsArr
#         print totalVolume
#         # Find some way to skip this test if changed. Maybe cut from array
#         while innerLoopCounter < len(buildingStatsArr):
#             if ( (buildingStatsArr[innerLoopCounter]["position"] > buildingStatsArr[outerLoopCounter]["position"] and buildingStatsArr[innerLoopCounter]["position"] < buildingStatsArr[outerLoopCounter + 1]["position"]) or (buildingStatsArr[innerLoopCounter]["position"] < buildingStatsArr[outerLoopCounter]["position"] and buildingStatsArr[innerLoopCounter]["position"] > buildingStatsArr[outerLoopCounter + 1]["position"]) ):
#                 totalVolume += buildingStatsArr[outerLoopCounter + 1]["height"]
#                 print buildingStatsArr
#                 print totalVolume
#                 del buildingStatsArr[innerLoopCounter]
#                 outerLoopCounter += 1
#                 innerLoopCounter += 1
#                 buildingStatsArr.sort(key=lambda x: x["height"], reverse=True)
#             else:
#                 innerLoopCounter += 1
#         outerLoopCounter += 1

#     totalVolume += buildingStatsArr[len(buildingStatsArr)-1]["height"]
#     # return buildingStatsArr
#     return totalVolume - hatchVolume


print answer([1,7,3,2,3,1,7,1])
print answer([1, 4, 2, 5, 1, 2, 3])
print answer([1,2,3,2,1])
print answer([1,90001,1,90001,1,90001,1,90001,1,90001,1,90001,1,90001,1,90001,1,90001,1,90001,1,90001,1])

