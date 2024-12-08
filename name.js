const names = [
    "Rhys", "Isabella", "Ariella", "Millie", "Olivia", "Lyla", "Gianna", "Everett", 
    "Hudson", "Sienna", "Emerson", "Alice", "Sharon", "Isla", "Thea", "Alma", 
    "Maverick", "Raya", "Jesse", "Zoey", "Amelia", "Xavier", "Andrea", "Liam", 
    "Kieran", "Isha", "Akira", "Marcus", "Rohan", "Alana", "Skylar", "Dante", 
    "Mae", "Sloane", "Elise", "Finley", "Savannah", "Everly", "Ayla", "Theo", 
    "Kian", "Joseph", "Brielle", "Brian", "Skyler", "Myra", "Bailey", "Riley", 
    "Ezekiel", "Rebecca", "Sage", "Rae", "Sasha", "Valerie", "Sean", "Brianna", 
    "Elora", "Simon", "Leon", "Ivan", "Nia", "Noah", "Khadijah", "Vivian", 
    "Mina", "Evan", "Ava", "Nolan", "James", "Jade", "Mika", "Chelsea", "Rory", 
    "Natasha", "Nora", "Lennox", "Emery", "Wren", "Aiden", "Harlow", "Kyra", 
    "Leilani", "Kayla", "Avery", "Zoe", "Lara", "Camila", "Alyssa", "Amira", 
    "Alaina", "Shiloh", "Luna", "Camille", "Orion", "Hayden", "Rhea", "Emma", 
    "Mateo", "Mya", "Yara", "Evie", "Asher", "Azariah", "Isabelle", "Aisha", 
    "Arlo", "Charlotte", "Gemma", "Fiona", "Ellis", "Asa", "Skye", "Nico", 
    "Reese", "Kyle", "Lachlan", "Aditya", "Marie", "Margot", "Lisa", "Cecilia", 
    "Monica", "Aubrey", "Grace", "Noa", "Scarlett", "Miles", "Deborah", "Lena", 
    "Oliver", "Anya", "Lily", "Elena", "Naomi",
  ];
  
  function promptForLetter() {
    let letter = prompt("Enter a single letter of the alphabet:").toLowerCase();
  
   
    while (!/^[a-z]$/.test(letter)) {
      if (letter.length !== 1) {
        alert("Please enter only one alphabet.");
      } else {
        alert("Please enter a valid alphabet letter.");
      }
      letter = prompt("Enter a single letter of the alphabet:").toLowerCase();
    }
  
   
    const filteredNames = names.filter(name => name.toLowerCase().startsWith(letter));
    if (filteredNames.length === 0) {
      console.log("nothing found");
    } else {
      console.log(filteredNames.join(", "));
    }
  }
  
  promptForLetter();
  