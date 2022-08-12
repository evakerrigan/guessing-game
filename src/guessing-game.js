class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.min = min;
		this.max = max;
        //this.number = number;
    }

    guess() {
        this.average = Math.round((this.max - this.min) / 2) + this.min;
        return this.average;

        /*    this.average = Math.round((this.max - this.min) / 2) + this.min;
            if (this.number === this.average) {return this.average}
            else if (this.number < this.average) {return this.lower()}
            else return this.greater();*/		
    }

    lower() {
        this.max = this.average;
        //return this.guess();
    }

    greater() {
        this.min = this.average;
        //return this.guess();
    }
}

module.exports = GuessingGame;
