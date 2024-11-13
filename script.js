const quotes = [
    { text: "Winners always take the harder path", author: "Anonymous" },
    { text: "You can always turn peace into happiness but you can’t always turn happiness into peace", author: "Anonymous" },
    { text: "The core of man's spirit comes from new experiences", author: "Anonymous" },
    { text: "Happiness is the most powerful when shared", author: "Anonymous" },
    { text: "One with a clear mind can learn how to steer away from the resistance to pain and grasping of pleasure", author: "Anonymous" },
    { text: "Ignorant people confuse peacefulness as sadness", author: "Anonymous" },
    { text: "We often forget the true unmasked view of the universe is in the night", author: "Anonymous" },
    { text: "Discomfort is inevitable in life, but suffering is a choice", author: "Anonymous" },
    { text: "Being in a world where technology has impacted the velocity of communication makes it more difficult for some to communicate", author: "Anonymous" },
    { text: "One must in their lives search for the purest and best love. The searcher's destination may not be clear at first. But only living through life will it begin to lucidify", author: "Anonymous" },
    { text: "Tattoos build meaning onto the body which is the true work of art", author: "Anonymous" },
    { text: "Look out the window instead of in the mirror, eh", author: "Anonymous" },
    { text: "If you weren’t ready, you wouldn’t have the opportunity", author: "Anonymous" },
    { text: "Grow capital and make meaningful connections throughout life, so one day you can peacefully watch the assets you’ve grown bloom on their own", author: "Anonymous" },
    { text: "Find 3 hobbies: one that makes you money, one that makes you fit, and one that makes you smarter", author: "Anonymous" },
    { text: "The very cave you’re afraid to enter, turns out to be the source of what you were looking for", author: "Joseph Campbell" },
    { text: "Proverbs 356", author: "Mike Bird" },
    { text: "Episode 172 philosophize this! 20:30 Simone Vye", author: "Anonymous" },
    { text: "Don’t overestimate yourself now, but don’t underestimate your future self", author: "Anonymous" },
    { text: "If you could be the person you admire, who would you be?", author: "Anonymous" },
    { text: "When there’s no recollection of the past, there’s no guidance for the future since your future is built on yesterday's errors", author: "Anonymous" },
    { text: "Seeking is the reward", author: "Anonymous" },
    { text: "You don’t need to have it all figured out, you just need to be doing something that makes you happy", author: "Anonymous" },
    { text: "One of the greatest lessons of friendship is that sometimes people don’t need advice on how to solve their problems - they just need someone they can count on to be by their side", author: "Anonymous" },
    { text: "As men, we must always remember that women are not our mission. Women don’t want to be the mission. They want to join a man who’s on a mission and walk alongside him", author: "Anonymous" },
    { text: "It’s one thing to say I’m the type of person who 'wants' this. It’s something very different to say I’m the type of person who 'is' this", author: "Anonymous" },
    { text: "My pictures never end. They never have a simple solution… it’s immoral to tell a story that has a conclusion", author: "Federico Fellini" },
    { text: "The whole point of telling a story is to make a comment on the predicament of life, and life never has an ending, we don’t know the meaning of life", author: "Brusutti" },
    { text: "Don’t take someone for what they could be, take them for what they actually are", author: "Anonymous" },
    { text: "A man will become what he thinks about", author: "Anonymous" },
    { text: "The architect of the universe didn’t build a stairway to nowhere", author: "Anonymous" },
    { text: "Sometimes being foolish and acting wise are the same", author: "Robert Fulghum" },
    { text: "Anything not worth doing is worth not doing well", author: "Elias Schwartz" },
    { text: "Imagination is more important than information", author: "Albert Einstein" },
    { text: "If you look at nature really carefully, and keep pulling at the intellectual threads, and keep going, and keep delving down into what nature seems to be trying to tell us, then if you’re lucky and persistent, you catch a glimpse of something deeply hidden", author: "Albert Einstein" },
    { text: "A true selfless act always sparks another", author: "Klaus" },
    { text: "It doesn’t matter what you say you believe— it only matters what you do", author: "Robert Fulghum's father" },
    { text: "Some assembly is required. To assemble the best that is within you and give it away. And to assemble with those you love to rekindle joy", author: "Robert Fulghum" },
    { text: "It’s a weird thing saying I love you eventually loses its importance, but seeing a pair of titties never does", author: "Tim Ehret" },
    { text: "Listen son, this kind of beauty doesn’t belong to anyone, it’s ours as well", author: "Lupin" },
    { text: "I recall an old Sufi story of a good man who was granted one wish by god. The man said he would like to go about doing good without knowing about it. God granted his wish. And then god decided that it was such a good idea, he would grant that wish to all human beings", author: "Robert Fulghum" },
    { text: "Normally I don’t get kneed in the vagina", author: "Kat Kim" },
    { text: "It’s easy to forget what’s important when you’re alone", author: "Anna Beth Percy Jackson" },
    { text: "The only thing we want is for you to put 100% into what you’re doing", author: "Anonymous" },
    { text: "Do not be led by others, awaken your own mind, amass your own experience, and decide for yourself your own path", author: "Atharva Veda" },
    { text: "Surfing is very much like making love. It always feels good, no matter how many times you’ve done it", author: "Paul Straunch" },
    { text: "Findings suggest that exploring a novel environment has a generalizable memory boosting effect", author: "Judith" },
    { text: "I really want to get with a crazy bitch, one that really fucks me", author: "Tim Ehret" },
    { text: "How could the nature of man ever reach its full potential without challenge and danger?", author: "Jordan Peterson" },
    { text: "Rich people don’t stay rich by giving other people their money", author: "Frankie Frize" },
    { text: "People are pressured so much to be something that they end up forgetting to be themselves", author: "Landon Konzen" },
    { text: "Children have the ability to see heaven on earth, while adults tend to see problems", author: "Landon Konzen" },
    { text: "You know what’s not expensive, anything… when you have a lot of money", author: "Aashi" },
    { text: "Don’t let a boyfriend get in the way of a woman finding her husband", author: "Jacob" },
    { text: "Life is not a selfish act to live, but a selfless service to give", author: "Anonymous" },
    { text: "I didn’t get anywhere to where I am today without the help of anyone else", author: "Ken" },
    { text: "Don’t let the truth get in the way of a good story", author: "John E Suwara" },
    { text: "There’s a real weakness about wanting to be liked, and I do not have that", author: "Elon Musk" }
];

let currentQuoteIndex = 0;

function displayQuote() {
    const quoteDisplay = document.getElementById('quote-display');
    const quote = quotes[currentQuoteIndex];
    quoteDisplay.innerHTML = `"${quote.text}"<br><em>- ${quote.author}</em>`;
    currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
}

setInterval(displayQuote, 5000); // Change quote every 5 seconds
displayQuote();