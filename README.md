# wu-tang-name-generator

This is a Wu Tang-themed, name generator. The user answers a 5 question survey and a Wu Tang inspirated nickname is generated based on their responses. 

Link to Project: https://wu-tang-name-generator.netlify.app/

![Project Image](/pic/generator.png)


### How It's Made:

This name generator is made by creating a 5 question survey for the user to answer. The survey is created using radio buttons. The user can only pick one choice per question. 

To generate the nickname: questions 3, 4, and 5 are each corresponded with an array. Thus, there are 3 arrays. Array 1 contains four adjectives, Array 2 contains four adjectives, and Array 3 contains 4 nouns. Each array has four elements which correspond with the 4 choices each question has. If the user, picks choice 1, then element 0 is returned. 

Ex. let Array 1 = [ "Animalistic", "Brutal", "Destructive", "Haunted"]
    Question: Eliminate one of your human needs -- which would you get rid of?
    Choices: Air, Shelter, Water, Food

    If the user picks the first choice (which is 'air'), then the first element in the array is returned --> 'Animalistsic'


### Lesson Learned

I learned how to create a survey using radio buttons. The user can only pick one choice per questions. Also, they must answer all 5 questions in order to generate the nickname. 
 

###