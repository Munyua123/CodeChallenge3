document.addEventListener("DOMContentLoaded", () => {
    // This is the code requesting for the animal names
    function cuteNames(characters) {
      const characterName = document.querySelector("#character-bar");
      let names = document.createElement("p");
      names.innerText = `${characters.name}`;
      characterName.appendChild(names);
  
  
  
  // This is a code showing the different images
  const characterImage = document.querySelector("#image");
  let images = document.createElement("img")
  images.src = `${characters.image}`;
  images.alt = `${characters.name}`
  console.log(images)
  characterImage.appendChild(images)
  document.querySelector("#detailed-info").append(characterImage)
  
  
  
      //This is the code activating the votes input
      let form = document.querySelector("form");
      form.addEventListener("submit", (event) => {
        event.preventDefault();
        addVotes(event.target.votes.value);
        form.reset();
      });
      function addVotes(voteCount) {
      //   let totalVotes = document.querySelector("#vote-count");
        let p = document.createElement("p")
        p.innerText = `${voteCount}`;
        document.querySelector("#vote-count").append(p)
      }
    }
  
    fetch("http://localhost:3000/characters")
      .then((res) => res.json())
      .then((data) =>
        data.map((characters) => {
          cuteNames(characters);
        })
      );
  });