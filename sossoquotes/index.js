const axios = require("axios");
const cheerio = require("cheerio");
var quoteMap = new Map();
var quoteAmount;

//Loads sammakkopalsta HTML, parses it, and adds quotes to quoteMap
const loadQuotes = async () => {
    quoteMap.clear();
    try {
        const { data } = await axios.get("http://sosso.fi/sammakkopalsta/");
        const $ = cheerio.load(data);

        const quotes = [];
                $('div.perfect-quotes').each((_i, el) => {
                    const authorElement = $(el).find('span');
                    let author = null;
                    let quote = '';
        
                    if (authorElement.length > 0) {
                        author = authorElement.text().trim();
                        // To get only the quote text, we can clone the element, remove the author span, and then get the text.
                        const quoteElement = $(el).clone();
                        quoteElement.find('span').remove();
                        quote = quoteElement.text().trim();
                    } else {
                        quote = $(el).text().trim();
                    }
        
        
                    if (quote) {
                        if (author) {
                            quotes.push(`${quote}\n${author}`);
                        } else {
                            quotes.push(quote);
                        }
                    }
                });

        quoteAmount = quotes.length;
        for (let i = 0; i < quoteAmount; i++) {
            quoteMap.set(i, quotes[i]);
        }

        console.log("loaded " + quoteAmount + " quotes");
    } catch (error) {
        console.log("Error while loading Quotes, sosso.fi down?");
        console.error(error);
        return process.exit(1);
    }
};

//Randomizes quote from websössö or telegram quotes
const getQuote = async () => {
    if (quoteMap.size == 0) {
        return "error: sammakkolampi on tyhjä"
    };

    var quoteNumber = Math.floor(Math.random() * (quoteAmount));
    return quoteMap.get(quoteNumber);

};

//Searches quotes for word (simple search)
const findQuote = async (category) => {
    var found = new Array();
    console.log("haetaan: " + category)
    for (let quote of quoteMap.values()) {
        if (quote.toLowerCase().includes(category.toLowerCase())) {
            console.log("match: " + quote);
            found.push(quote);
        };
    };
    if (found.length === 0) return null;
    return found[Math.floor(Math.random() * found.length)];
};



module.exports = {
    loadQuotes,
    getQuote,
    findQuote,
};
