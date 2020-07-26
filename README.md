These are the files for the Front End Developer Assesment. 

Exercise 1 can be found in the folder exercise-1
Exercise 2 can be found in the folder exercise-2

**Note: I used Prepros app for my scss compiler.

Regarding the Bonus Point Questions, below is the answer: 
1. In Javascript, when you use "+" before any value, that value will be converted to a number but if the value can not be converted to a number it will return as NaN. Based on the expression "b" + "a" + + "a" + "a" , once you added/concatenate "b" and "a" it will result to "ba". However the +"a" will return as NaN because Javascript will think that it's a number since it was preceded by another operator (+). So currently we now have  baNaN. Once you added the last term, it will result to "baNaN" + "a" or baNaNa. And since we you are converting it to lowercase via toLowerCase(), it resulted to "banana".
