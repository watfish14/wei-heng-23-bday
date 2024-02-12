
/*{} = object*/

function videoOne(){
  const vid=document.createElement("video");
  video.src
}

function createPara(){
  var p=document.createElement('p');
  p.innerHTML ='our first jewel date, and your button up shirt makes a cameo!';
  var img=document.createElement('img');
  img.innerHTML='<img src=`hamburg.jpeg`></img>';
  document.getElement('body').appendChild(p);
  document.getElement('body').appendChild(img);
}

var story;
function getStory(name) {
  return {
    currentScene: "attack",
    attack: {
      title: "Chapter 1",
      story: `hello, it's a new day and you are ${name} a bunny who has soft cheeks and a tiny heart.<br/> today you have decided to embark on a brave adventure to collect 3 hearts and deliver it to the river. it is said the river will grant you 3 hearts (💗💗💗) that you seeked.`,
      choices: [
        {
          choice: "yes i am ready!",
          destination: 'battle',
        },
        {
          choice: "nah, i'd rather heal the world instead." ,
          destination: 'spider'
        }
    ]
  },

  battle: {
    title: "yay let's go brave one!",
    story: `you packed your mini bag of supplies and left the tiny tent you called home the past 22 years, hopeful about your brand new adventure.`,
    choices: [
      {
        choice:"walk",
        destination:'giant'
      }
    ]
  }, 
  

  giant: {
    title: "Chapter 2",
    story: `DUN DUN DUN!!, a sleepy giant encounter!! <br/> the giant is sleeping soundly, wrapped up in a fetus position with its conciousness drifting to the dreamylands. <br/> what do you do?`,
    image: "fetus.png",
    choices: [
      {
        choice: "run",
        destination: 'safe'
      },
      {
        choice: "sniff the giant",
        destination: 'dead'
      },
      {
        choice: "slap him awake then pretend to be asleep",
        destination: 'kissy'
      }
    ]
    
  },


dead: {
  title: "OOF you DIED 💀",
  story: `your curiousity got you killed ${name} ... <br/> <br/> the giant noticed a small pieced bunny sniffing at his hair. he woke up, and stared at you with a devilish grin. <br/> he is surprised to see his next meal is just right in front of his very eyes. <br/> he squeezed you like a marshmallow and ate you up. <br/> <br/> long live bunny 🌼.`,
  image: "devilish_grin.png",
  defaultDestination: 'attack',
  buttonText: "Let's try this again!"
},


kissy: {
  title: "you got kissed too hard, and died 💀",
  story: `the giant smooched you 😲🤭! <br/> <br/> unfortunately, you got sucked right down into his mouth and down his throat. <br/> <br/> you eventually suffocated from the warmth of the acid juice, and chicken bits in the giant's stomach.`,
  image: "smooched.jpg",
  defaultDestination: 'attack',
  buttonText: "Let's try this again!"
},



safe: {
  title: "You got a heart! 💗",
  story: `you chose to run. <br/> congrats, your quickwits saved you and you earned your first heart! <br/> move forward?`,
  choices: [
    {
      choice: "yes",
      destination: 'evil'
    }
  ]
},


evil: {
  title: "Chapter 3",
  story: `as you slowed down your pace and absorb the beauty around you, you felt a presence mirroring your every step. <br/> you are wary. <br/> what do you do?`,
  choices: [
    {
      choice: "run to a hiding spot",
      destination: 'coward'
    },
    {
      choice: "stop and look back, because why not 😎",
      destination: 'friendly'
    }
  ]
},
   


coward: {
  title: "that was not a smart move...",
  story: `you tripped while you were scrambling behind the tree. the spider notices you and lunged towards you. <br/> you got squashed. 💀`,
  image: "wh_spiderr.png",
  defaultDestination: 'attack',
  buttonText: "Let's try this again!"
},



friendly: {
  title: "it is a friendly spider!",
  story: `you turned your head and noticed the spider was overjoyed that you noticed him. <br/> he gave you the widest most precious grin you had ever seen. at that moment, you felt safe among the unfamiliar environment. <br/> <br/> you decided to feed it with the apple you have saved for yourself during this long journey. <br/> <br/> the spider have taken note of your kindness and proceeds to accompany you for the remaining journey.`,
  image: "friendly_spider.png",
  choices: [
    {
      choice: "continue",
      destination: "hug"
    }
  ]
},  



hug: {
  title: "You got a heart! 💗",
  story: `both of you have been walking for a couple of hours having long conversations about breakfast, lunch and dinner. just then, the spider comes to a halt, gave u a hug and whispered goodbye with that cheeky grin of his. <br/> <br/> he gave you a heart 💗 before scurrying away to scare other potential adventurers.`,
  choices: [
    {
      choice: "move forward",
      destination: "mushroom"
    }
  ]
}, 
  


mushroom: {
  title: "Chapter 4",
  story: `you decided to continue with the journey, satisfied with your achievement. a surge of gratitude overwhelmed you, as you thought about how far you had come with a travel buddy and your own cleverness during this solo adventure. afterwards, you spot a silhouette resembling a mushroom. what do you do?`,
  choices: [
    {
      choice: "approach the mushroom",
      destination: "surprise"
    },
    {
      choice: "take another path, as you are afraid that area could be deadly",
      destination: "robbed"
    }
  ]
     
},


  surprise: {
    title: "Chapter 5",
    story: "you chose to take the mushroom way. but wait! there seems to be a surprise waiting for you.",
    choices: [
      {
        choice: "what is the surprise?",
        destination: "vp"
      }
    ]
  }, 



  robbed: {
    title: "beggers can't be choosers",
    story: 'you associated mushroom with poison, and decided to go around the mushroom. just then a couple of skunks jumped on you and stole both your hearts. you are now left with nothing.',
    defaultDestination: 'attack',
    buttonText: "Let's try this again!"
  },


  vp: {
    title: "thank you note",
    story: `i hope you adore this "grand" gift of mine that took some time to make. <br/> i have always wanted to make a coding project for a few years now and i'm glad the first one is for you! <br/> <br/> also this story literally makes no sense but i love you and that doesn't make sense either. i hope your 23rd year will turn out to be one your best! i have always mentioned this, and i WILL MENTION IT AGAIN. somedays i wake up, see you and still can't believe i am TOGETHER with you. one of the best success story of my life fr (and there isn't many oop). <br/> <br/> also, also i saw this post on instagram the other day, about how the maturity to a relationship is letting your partner know how you are feeling before your mind spirals. i hope we can achieve that in the coming years, especially when we might not be seeing each other as often :'). <br/> <br/> anyways, here's to a lasting happy life for you. <br/> <br/> don't forget your last heart hero 💗 <br/> <br/> finally, here's a video i discovered while i was scrolling through my gallery and it's a treasure (like you hehe :D)`,
    video: "vp.mp4",
    choices: [
      {
        choice: "last one i promise!!",
        destination: "memories"
      }
    ]
  },
 
  memories: {
    title: "just kidding there's nothing here",
    story: "or is there? 👀",
    choices: [
      {
        choice: "i think there are pictures of us",
        destination: "wrong"
      },
      {
        choice: "i'm done with this game",
        destination: "correct"
      }
    ]
  },


  wrong: {
    title: "happy birthday!!",
    image: "bday.png",
    story: `go back to homepage?`,
    defaultDestination: 'attack',
    buttonText: "Let's try this again!"
  },


  correct: {
    title: "look at the best boyfriend below!!!",
    story: `i hope you're looking at this webpage the same way as you are in the video below`,
    video: "nandos.mp4",
    choices: [
      {
        choice: "i want to look at something more",
        destination: "scrapbook",
      }

    ]
},

  scrapbook: {
    title: "a digital scrapbook of how i played a part in your life so far",
    story: `looking back at the images made me realised how much time we spent together, it's like we already live in one roof. THAT'S CRAZY. <br/> before you go, tell me your wish good sir 💗`,
    image: "document1.png",
    defaultDestination: 'attack',
    buttonText: "Go home"
  },



 spider: {
    title: "damn okay D:",
    story: `have fun swinging love, this tiny bunny will be seated waiting for your grand return 🐇🐇🐇`,
    image: "seatedbunny.png",
    defaultDestination: 'attack',
    buttonText: "Let's try this again!"
    }
  }
}


document.addEventListener('DOMContentLoaded', function() {
//     /**object, contains variable and functions */
    var button = document.querySelector('#start-button') 
    var content = document.querySelector('#content')
    button.addEventListener('click', function() {
      var name = document.querySelector('#name-input')
      story = getStory(name.value)
      renderScene()
    })
  })
    

function renderScene(){
  var text = "Next"
  var image = "";
  var video= "";

  if (story[story.currentScene].image) {
    image = "<img></img>"
  }

  if (story[story.currentScene].buttonText) {
    text = story[story.currentScene].buttonText
  }

  if (story[story.currentScene].video) {
    video="<video preload controls></video>"
  }
  
  if (story[story.currentScene].buttonText){
    text=story[story.currentScene].buttonText
  }

  content.innerHTML = `
    <h1>${story[story.currentScene].title}</h1>
    <p>${story[story.currentScene].story}</p>
    ${image}
    ${video}
    ${getInputs()}
    <br/>
    <button id = "submit-button">${text}</button>
    `

    /**image */
    if (story[story.currentScene].image) {
      document.querySelector("img").src = `./img/${story[story.currentScene].image}`
    }

    if (story[story.currentScene].video) {
      document.querySelector("video").src = `./vid/${story[story.currentScene].video}`
    }
    
    var button = document.querySelector("#submit-button");
    button.addEventListener('click', function() {
      getInputValue()
    })
  }

// function renderVideo(){
//   var text="Next"
//   var video="";
//   if(story[story.currentScene].video){
//      video="<video preload controls></video>"
//   }
//   if (story[story.currentScene].buttonText){
//     text=story[story.currentScene].buttonText
//   }
//   content.innerHTML=`
//   <h1>${story[story.currentScene].title}</h1>
//   <p>${story[story.currentScene].story}</p>
//   ${video}
//   ${getInputs()}
//   <button id = "submit-button">${text}</button>
//   `
//   if (story[story.currentScene].video) {
//     document.querySelector("video").src = `./vid/${story[story.currentScene].video}`
//   }
//   var button = document.querySelector("#submit-button");
//   button.addEventListener('click', function() {
//     getInputValue()
//   })
// }


function getInputValue() {
  var inputs = document.querySelectorAll('input[type="radio"]');
  for (var i = 0; i < inputs.length; i++) {
    if (inputs[i].checked){
      story.currentScene = inputs[i].getAttribute('data-destination')
      renderScene();
      return;
    }
  }
  story.currentScene = story[story.currentScene].defaultDestination
  renderScene()
}


function getInputs() {
    var input = ""
    if (!story[story.currentScene].choices) {
      return ""
    }
    for(var i = 0;i < story[story.currentScene].choices.length; i++){
      input += `
      <div>
        <input data-destination = ${story[story.currentScene].choices[i].destination} id = "radio ${i}" type = "radio" name = "choices"/>
        <label for "radio${i}">${story[story.currentScene].choices[i].choice}</label>
      </div>  `
    }
    return input;
} 
