var AnimalClass = function() {
    this.eats = [];
}

AnimalClass.prototype.stomach = [];

AnimalClass.prototype.feed = function(item) {
    if (this.eats.indexOf(item) !== -1) {
        this.stomach.push(item);
    } else {
        console.log("I don't eat %s", item)
    }
}