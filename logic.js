
function randomIntFromInterval(min, max) {
    return Math.floor(Math.random()*(max-min+1)+min);
};

// mimics Python's memory-efficient xrange method.
function xrange(low, high) {  
    return {
        __iterator__: function() {
            return {  
                next: function() {
                    if (low > high)
                        throw StopIteration;  
                    return low++;
                }
            }
        }
    }
}

var Markov = function (openFile) {
	this.cache = {};
	this.openFile = file; 
	this.words = this.file_to_words();
	this.word_size = self.words.length;
	this.database();

	this.file_to_words = function () {
		var data = this.openFile.read();
		var word = data.split();
		return words;
	};
	this.triples = function () {
		if (this.words.length < 3) {
			return
		}

		for (var i=0; i<self.words.length-2; i++) {
			yield [self.words[i], self.words[i+1], self.words[i+2]];
		}
	};
	this.database = function () {
		var key = [this.triples[0], this.triples[1]];
		if (key in self.cache) {
			self.cache[key].push(self.triples[2])
		} else {
			self.cache[key] = self.triples[2];
		}
	};
	this.generateMarkovText = function (size) {
		var seed = randomIntFromInterval(0, this.word_size-3);
		var seedWord = this.words[seed];
		var nextWord = this.words[seed+1];
		var word1 = seedWord;
		var word2 = nextWord;
		var genWords = [];

		for (var i in xrange(0, size)) {
			genWords.push(word1);
			word1 = word2;
			word2 = self.cache[[word1, word2]][Math.floor(Math.random()*items.length)];
		genWords.append(word2);
		return genWords.join(' ');
		}


	}



}