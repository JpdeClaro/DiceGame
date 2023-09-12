

function runDiceRoll(){

    // variables 

    let playerOne = document.getElementById('dice1');
    let playerTwo = document.getElementById('dice2');
    let result = document.getElementById('comments');

    // let randomDice1 = [1 , 2 ,3 ,4 ,5,6];
    // let randomDice2 = [1, 2, 3 ,4 ,5 ,6];
    // process
    let randomNumbers1 = Math.floor(Math.random() * 6) + 1;
    let randomNumbers2 = Math.floor(Math.random() * 6) + 1;

    playerOne.innerHTML = randomNumbers1;
    playerOne.style.opacity = "1";
    playerOne.style.fontSize = "2em";
    playerOne.style.transition = "all 2s ease-in";

    playerTwo.innerHTML = randomNumbers2;
    playerTwo.style.opacity = "1";
    playerTwo.style.fontSize = "2em";
    playerTwo.style.transition = "all 2s ease-in";

    // conditional statement and let show result

    if (randomNumbers1 > randomNumbers2){
        result.innerHTML = "Player 1 Win";
        result.style.color = "Blue";
        result.style.transition = "all 1s ease-in"
        

    }else if (randomNumbers2 > randomNumbers1){
        result.innerHTML = "Player 2 Win";
        result.style.color = "Red";
        result.style.transition = "all 1s ease-in"


    }else if (randomNumbers1 === randomNumbers2){
        result.innerHTML = "Both Players are TIE";
        result.style.color = "Black";
        result.style.transition = "all 2s ease-in"

    }


};

function runPrank() {
    const container = document.getElementById('demo');
    
    // Create the YouTube iframe element
    const iframe = document.createElement('iframe');
    iframe.width = '853'; // Set the width of the video
    iframe.height = '480'; // Set the height of the video
    iframe.src = '/Rick Astley - Never Gonna Give You Up (Official Music Video).mp4'; // Replace with your video ID
    iframe.frameborder = '0'; // Remove iframe border
    iframe.allowFullscreen = true; // Enable fullscreen mode
    
    // Append the iframe to the container
    container.appendChild(iframe);
}

    const showVideoButton = document.getElementById('btn2');

    showVideoButton.addEventListener('click', showYouTubeVideo);
    alert('HEHEHE');



