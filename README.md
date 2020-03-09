# bingo
Title: A working title for your app. (Feel free to have some fun with this.)

- Bingo Generator 

Description: 4 to 5 sentences summarizing the features, functions, and goals.

- Make it fun and easy for a bingo facilitator to call bingo by:
  - randomly generating the next number to call 
  - displaying the numbers that have and have not yet been called in two separate lists
  - displaying a fun fact related to the number that was called (e.g., number: "I21" fun fact: "1e+21 is the number of grains of sand on all the world's beaches put together.")

Wireframes: Mockups of your app on desktop, tablet, and mobile.

![Imgur](https://i.imgur.com/htu94WH.png)

![Imgur](https://i.imgur.com/QFSSoKa.png)


API: Which API you will be using.

http://numbersapi.com/#random/trivia



MVP: Write out what your goals are for MVP, including the minimum, need-to-have features of your app.
- Ordered list of BINGO numbers
- Function to randomly call a list item (e.g. "B14") from the OL "not yet called" and place it in the current number section, then move it an unordered list "called" (or maybe ordered? bc want them to appear in the order that they're called)
- "Next" button will call the above function AND will call the API for a random fun fact
- Assign data-letter="X" and data-number= # then use that to call random fun fact related to the data-number by interpolating it into the URL to call from the numbers API


Post-MVP: Write out what your goals are for post-MVP, including nice-to-have features that you would like to implement once your MVP is complete.

- Create second page that generates a bingo board (purpose would be for printing)
![Imgur](https://i.imgur.com/wdLL4nJ.png)


