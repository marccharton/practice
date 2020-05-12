console.log("------------------")
console.log("----- OBJETS -----")
console.log("------------------")

const {chaise} = require("./var");

console.log(chaise);
console.log({...chaise});
console.log({chaise});
console.log({...{chaise}});
console.log({pouet: {chaise}});
console.log({...{
                ...{chaise}, 
                pouet:"oui"
            }, 
            insideProperty:'oui'
            });
console.log({test: {
                ...{chaise}, 
                pouet:"oui"}, 
            insideProperty:'non'
            });
console.log({...chaise, pouet: "oui oui oui ouiiiii"});
