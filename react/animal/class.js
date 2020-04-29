class GreenFruit {
    color = "green";
    
    constructor () {
        setTimeout(this.handleTimeout, 1000)
    }

    handleTimeout= () => {
        console.log("ça y eeestt ! :), je suis " + this.color);
    }
}

const citron = new GreenFruit();