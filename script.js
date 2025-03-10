document.addEventListener("DOMContentLoaded", function() {
    if(document.getElementById('generateLetter')) {
      document.getElementById('generateLetter').addEventListener('click', function() {
        const receiverName = document.getElementById('receiverName').value;
        const giverName = document.getElementById('giverName').value;
        const tone = document.getElementById('tone').value;
        const details = document.getElementById('details').value;
        const favoriteMemory = document.getElementById('favoriteMemory').value;
        const length = document.getElementById('length').value;
        const backgroundSong = document.getElementById('backgroundSong').value;
        
        let letter = `Dear ${receiverName},\n\n`;
        
        switch(tone) {
          case 'romantic':
            letter += "From the depths of my soul, I have long envisioned a love so infinite and exquisite that every heartbeat sings your name. I now reveal, ";
            break;
          case 'funny':
            letter += "Brace yourself for a delightful burst of affection—playful, sincere, and a little cheeky: ";
            break;
          case 'poetic':
            letter += "In the soft embrace of twilight, where every star recites a sonnet of passion, I pour out my heart in these tender verses: ";
            break;
          case 'nostalgic':
            letter += "As memories of our enchanting moments drift like petals in the wind, I cherish every spark of our past: ";
            break;
          case 'interesting':
            letter += "Have you ever marveled at the wondrous tapestry of fate that binds our souls? Let me share the magic I feel: ";
            break;
          default:
            letter += "I want you to know that every moment with you is a cherished treasure. ";
        }
        
        letter += "Each second with you illuminates my world with passion and wonder. ";
        letter += details + "\n\n";
        
        if(favoriteMemory.trim() !== "") {
          letter += `One memory I hold most dear is: "${favoriteMemory}".\n\n`;
        }
        
        letter += `Forever and always,\n${giverName}`;
        
        if(length === "short") {
          letter = letter.split("\n\n")[0] + "\n\nForever yours.";
        }
        
        const letterData = {
          letter: letter,
          receiverName,
          giverName,
          tone,
          details,
          favoriteMemory,
          length,
          backgroundSong
        };
        localStorage.setItem('generatedLetterData', JSON.stringify(letterData));
        
        window.location.href = "output.html";
      });
    }
  });
  