function getBotResponse(input) {
    //rock paper scissors
    if (input == "lets play stone,paper,scissors!!") {
        return "yeah";
    }
    else if (input == "rock") {
        return "paper";
    } else if (input == "paper") {
        return "scissors";
    } else if (input == "scissors") {
        return "rock";
    }
    else if (input == "its boring...") {
        return "Then wat to do?";
    }

    // Simple responses
    if (input == "hello") {
        return "Hello there!";
    } else if (input == "goodbye") {
        return "Talk to you later!";
    } 
    else if (input == "Tell me about yourself") {
        return "I am a messanger where u can drop ur thoughts";
    } else if (input == "Thats cool") {
        return "What about u??";
    } 
    else if (input == "I am Sruthi studying BE CSE III year")
    {
        return "Thats nice!!";
    }
    else if(input== "tell me a joke!!")
    {
        return "Why don’t scientists trust atoms? Because they make up everything."
    }
    else if(input== "Thats a gud joke!!")
    {
        return "LOL!!";
    } 
    else {
        return "Try asking something else!"
    }
}