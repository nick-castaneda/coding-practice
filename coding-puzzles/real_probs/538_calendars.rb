# Calendars are as predictable as the march of time itself — the major
# thing that changes is the day of the week a date is on. Jan. 1 was a
# Thursday in 2015, for example, but in 2016 it will be a Friday,
# requiring a one-day shift and making 2015’s calendar pretty useless.
# Calendars’ predictability makes them ripe for mathy questions. Here
# are six to chew on:

########################################################################
# How many different calendars would you need to represent all possible
# years — accounting for all day and date combinations? (Don’t forget
# about leap years!)

# Jan 1, 0000(l) is Monday.
# Jan 1, 0001 is Wednesday.   6, 11, 11
# Jan 1, 0002 is Thursday.   11, 6, 11        2015
# Jan 1, 0003 is Friday.     11, 11, 6
# Jan 1, 0004(l) is Saturday.
# Jan 1, 0005 is Monday.
# Jan 1, 0006 is Tuesday.
# Jan 1, 0007 is Wednesday.
# Jan 1, 0008(l) is Thursday.
# Jan 1, 0009 is Saturday.
# Jan 1, 0010 is Sunday.
# Jan 1, 0011 is Monday.
# Jan 1, 0012(l) is Tuesday.
# Jan 1, 0013 is Thursday.
# Jan 1, 0014 is Friday.
# Jan 1, 0015 is Saturday.
# Jan 1, 2016 is(l) is Sunday.
# Jan 1, 0017 is Tuesday.
# Jan 1, 0018 is Wednesday.
# Jan 1, 0019 is Thursday.
# Jan 1, 2020(l) is Friday.
# Jan 1, 0021 is Sunday.
# Jan 1, 0022 is Monday.
# Jan 1, 0023 is Tuesday.
# Jan 1, 2024 is(l) is Wednesday.
# Jan 1, 0025 is Friday.
# Jan 1, 0026 is Saturday.
# Jan 1, 0027 is Sunday.
# Jan 1, 2028 is(l) is Monday.

# 14 Calendars
366 % 7 == 2
365 % 7 == 1

########################################################################
# Now that we have all the calendars we could possibly need, it’d be
# nice to know how often we’re using them. When is the next time we’ll
# use the 2015 calendar?

# 11 years till next Thursday (2026)

########################################################################
# What is the smallest total number of years that will pass between
# using the same non-leap-year calendar twice?

# 6 years, earliest repeat

########################################################################
# What is the largest?

# 28 years for leap years,

########################################################################
# What is the smallest total number of years that will pass between
# using a leap year calendar twice?


########################################################################
# What is the largest?
