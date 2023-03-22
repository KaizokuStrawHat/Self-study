# Project #1 - ToDo List

Learnings:

    Keys vs Ids
    keys are for react components 
    ids are for html elements 

    Props in a syntactical pattern sense, function and functional components MUST MATCH PARAMETERS
    Props in a theoritical sense, parent component passes to child component

    actual DOM vs virtual DOM -- new things do not get added in actual DOM, only in virtual DOM

    children are receivers. (they just exist, they dont provide)
    parents are givers. (they provide and they receive too)
    children should not pass props to parents

    using filter() if index is only needed, still put item in parameter and do not use it on return line

    useState()
    -useState method returns a variable and a function connected to that variable
    -useState method parameter is to initialize the variable's value
    -useState method is only to be used in App() 
    -thus, useState variables are passed on to functional components
    -whenever useState variables are changed, react re-renders
  
  
Mistakes: 

    (1) onClick={func(key)}
    Solution: onClick={() => func(key)}
    Reason: The func gets called when the button is rendered


    (2) let todo.id = uuidv4() 
    Solution: setNewtodo({...todo, id: uuidv4()})


    (3) setNewtodo({...todo, id: uuidv4()}) 
    Solution:   const newTodo = { ...todo, id: uuidv4() }; 
                setNewtodo(newTodo); 
    Reason: only copies the prev object properties (error: same keys for different children)
    I need to declare new object variable when adding objects to a list. 


Ideas: 

    (1) A button that can switch between two designs

      Design 1
      making add button on top
      making textbox stretch to same length as hr
      making delete button on the end of hr

      Design 2  
      making textbox and add button on same line
      delete button disappears, instead delete function calls on clicking text

    (2) Integrate a checkbox / strikethrough label, and a clear button -- replacing the need for delete button
