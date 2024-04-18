# Capitalle

Capital guessing game.

My plan is to make a daily capital guessing game based on a similar premise to Wordle. Users will receive the name of a country and a flag. From this information they must input a guess for the capital. They will have 6 attempts to get the answer correct. Every time they get an answer incorrect a hint will pop up. Each hint getting progressively easier. A new country will be available every 24 hours.
I will use a PERN stack to make the project.
PostgreSQL Database - This database will hold the user and capital information. As well as record of each users longest correct answer streak.
The Server will use NodeJS and Express. These will connect to the database and send this information to the front end.
The client side will all be in React, i will use cookies to track whether a user has completed the daily challenge and to update the challenge.
I would like the app to have the following features:

# 1. Hint System (complete)

Implement a hint system to help users guess the capital. After each incorrect answer a different hint will appear. To help guide users to the answer.

# 2. Login System (complete)

Users can complete the challenge but if they login, their stats will be recorded.

# 3. Daily Facts (complete)

After the end of the challenge, daily facts about the capital are given to the user.

# 4. Streaks & Rewards (incomplete)

Rewards users for consecutive days they participate in the challenge.

# 5. Social Sharing (incomplete)

Enable users to share daily challenge score and streak.
