import React, { useState } from "react";
import '../App.css';

const infantil = [
  "Never Have I Ever expelled from the classroom",
  "Never Have I Ever broke a bone",
  "Never Have I Ever got sick at an amusement park",
  "Never Have I Ever ended up on the board",
  "Never Have I Ever pretended to be sick so I wouldn't go to school",
  "Never Have I Ever cheated on a test",
  "Never Have I Ever ate food that fell to the floor",
  "Never Have I Ever stayed up all night",
  "Never Have I Ever ate candy before congratulations at a party",
  "Never Have I Ever went out on the street in my pajamas",
  "Never Have I Ever cried at school",
  "Never Have I Ever spent the weekend playing video games",
  "Never Have I Ever hid a bad grade from my parents",
  "Never Have I Ever broke a tooth",
  "Never Have I Ever lied to my best friend",
  "Never Have I Ever needed stitches",
  "Never Have I Ever wore a different sock on each foot.",
  "Never Have I Ever tried to lick my elbow",
  "Never Have I Ever held the wrong person's hand on the street, thinking it was my mom/dad",
  "Never Have I Ever watched a horror movie and had to go to sleep with my parents because I was scared",
  "Never Have I Ever cheated in a game with a friend",
  "Never Have I Ever ate something hidden from my parents",
  "Never Have I Ever accidentally wore clothes inside out",
  "Never Have I Ever was called out by the teacher for talking in the classroom",
  "Never Have I Ever blamed my brother for something I did",
  "Never Have I Ever made a strange combination of foods",
  "Never Have I Ever hid my mess to pretend I cleaned the room",
  "Never Have I Ever slept in the classroom",
  "Never Have I Ever did something that went wrong but I didn't tell my parents not to listen 'I told you so'"
]

const profissional = [
  "Never Have I Ever was late for an important meeting",
  "Never Have I Ever had a fit of laughter at a meeting",
  "Never Have I Ever sent an email to the wrong person",
  "Never Have I Ever made a kludge",
  "Never Have I Ever called the customer by the wrong name",
  "Never Have I Ever had too much coffee",
  "Never Have I Ever went to an interview unprepared",
  "Never Have I Ever turned in an assignment after the deadline"
]
const padrao = [
  "Never Have I Ever dropped my phone in the toilet",
  "Never Have I Ever entered the house through the window",
  "Never Have I Ever fell on the street because I was looking at my cell phone",
  "Never Have I Ever went to a party without being invited",
  "Never Have I Ever forwarded a gift I got and I didn't like it",
  "Never Have I Ever pretended to have to work to miss an appointment",
  "Never Have I Ever sent flowers to myself",
  "Never Have I Ever gave bad advice on purpose",
  "Never Have I Ever ate dog/cat/bird food",
  "Never Have I Ever made piggy sound while laughing",
  "Never Have I Ever bit my toenails",
  "Never Have I Ever deleted a post because it had few likes",
  "Never Have I Ever pretended to be talking on my cell phone so I wouldn't talk to someone",
  "Never Have I Ever sent a DM to a celebrity",
  "Never Have I Ever stood in line for hours to talk to a celebrity",
  "Never Have I Ever stood in line for hours to go to a trendy restaurant",
  "Never Have I Ever took a while in the shower because I was imagining myself singing at a concert",
  "Never Have I Ever talked about a person and she passed by and listened",
  "Never Have I Ever got angry on the street because I forgot my headphones",
  "Never Have I Ever sang louder than I realized because I had headphones on",
  "Never Have I Ever was embarrassed at the food rotation for eating too much",
  "Never Have I Ever had a fit of laughter at an inappropriate time"
]

const phrases = [
  {
    id: '0',
    name: "Children's"
  },
  {
    id: '1',
    name: "Professional"
  },
  {
    id: '2',
    name: "Default"
  }
];

function Category() {
  const [selectValue, setSelectValue] = React.useState(1); 
  const displayAction = false;
  let category = [];
  const [count, setCount] = useState(0);
  const incrementCount = () => {
    setCount(count + 1);
  };
  if (selectValue == '0') {
    category = infantil;
  } else if(selectValue == '1'){
    category = profissional;
  } else if(selectValue == '2'){
    category = padrao;
  }
  
  function NextPhrase(category, index){
    if(index >= category.length){
      setCount(0);
    }
    for(index; index < category.length; index++) {
      return category[index];
    }
  }
  return(
    <div className="container">
      <select value={selectValue} onChange={e => setSelectValue(e.target.value)}>
        {
          phrases.map(phrase => (
            <option aria-label={phrase.name} id={phrase.name} value={phrase.id} >{phrase.name}</option>
          ))
        }
      </select>
      <div class="phrase">
      <h2>{NextPhrase(category, count)}</h2>
      </div>
      <button class="next-phrase" value="Próxima Frase" onClick={incrementCount}> Next </button>
    </div>
  )
}

export default Category;