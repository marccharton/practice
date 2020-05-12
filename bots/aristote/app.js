let app = {

    textMode: false,

    init: () => {
        app.sceneElement = document.querySelectorAll(".scene")[0];
        app.appElement = document.querySelectorAll(".app")[0];
        app.modeButtonElement = document.querySelectorAll(".mode-switch")[0];

        app.setEvent();
        app.refreshMode();
    },

    setEvent: () => {
        app.sceneElement.addEventListener("click", () => {
            app.run();
        });
        
        document.body.addEventListener("keyup", function(event) {
            if (event.keyCode === 13) {
                app.run();
            }
        });

        app.modeButtonElement.addEventListener("click", (event) => {
            app.textMode = !app.textMode;
            app.refreshMode();
            app.run();
        });
    },

    run: () => {
        const sceneWords = app.getSentence(5, app.textMode);
        let sentence;
        if (app.textMode)
            sentence = sceneWords.join("<br>");
        else
            sentence = sceneWords.join(" ");
        app.sceneElement.innerHTML = sentence;
    },

    getRandom: (max, min = 0) => {
        return Math.round(Math.random() * (max - min) + min);
    },
    
    getSentence: (maxWordCount, textMode = false) => {
        let words = [], word, i = 0;
        const wordsNumber = app.getRandom(maxWordCount, 2);
        
        let valueToPush;
        while (i < wordsNumber) {
            wordIndex = app.getRandom(highestWord);
            
            if (textMode) {
                valueToPush = wordList[wordIndex];
            } else {
                valueToPush = wordIndex;
            }
            if (!words.includes(valueToPush)) {
                words.push(valueToPush);
                i++;
            }
        }
        return words;
    },

    refreshMode: () => {
        if (app.textMode) {
            app.sceneElement.className = "scene scene--text";
        } else {
            app.sceneElement.className = "scene scene--numeric";
        }

    }

};