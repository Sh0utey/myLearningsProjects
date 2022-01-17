const words = ["human", "happy", "grateful", "myself", "proud"];
const word = document.getElementById("word");

const AnimatedText = () => {
  for (let iWord = 0; iWord < words.length; iWord++) {
    //  BE CAREFUL : 'wordTiming' needs to be at least equal or have a higher value than the sum of writing time AND erasing time
    const wordTiming = 3600;
    setTimeout(() => {
      //infinte loop
      if (iWord + 1 === words.length) {
        setTimeout(() => {
          AnimatedText();
        }, wordTiming); //waiting time for the last word
      }

      let iLetter = 0;

      for (let iLetter = 0; iLetter < words[iWord].length; iLetter++) {
        //writing letter until word completed
        setTimeout(() => {
          word.textContent += words[iWord][iLetter];
          let wordLength = word.textContent.length;

          // Erasing letter when word completed after waiting
          setTimeout(() => {
            if (wordLength === words[iWord].length) {
              for (let i = -1; Math.abs(i) != words[iWord].length + 1; i--) {
                setTimeout(() => {
                  word.textContent = words[iWord].slice(0, i);
                }, (erasingTimePerLetter = 150 * Math.abs(i))); // erasing speed per letter
              }
            }
          }, (waitingTime = 1000)); // waiting time of one complete word
        }, (writingTimePerLetter = 150 * iLetter)); // writing speed per letter
      }
    }, wordTiming * iWord); // timing of a single word
  }
};

AnimatedText();
