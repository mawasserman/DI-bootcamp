// Instructions
// Part 1 : Quote Generator
// Create an HTML file, that contains a section (for now the section is empty), and a button “Generate Quote”.

// In the Javascript file, create an array of objects. Each object has 3 keys : id, author and quote. The id must start at 0, and is incremented for every new quote. So the first quote will have the id 0, the second quote the id 1, the third quote the id 3 ect…
const quotes = [
    {id: 0, author: 'Jane Austen' , quotes: '“The person, be it gentleman or lady, who has not pleasure in a good novel, must be intolerably stupid.”'},
    {id: 1, author: 'Jane Austen' , quotes: '“There is nothing I would not do for those who are really my friends. I have no notion of loving people by halves, it is not my nature.”'},
    {id: 2, author: 'Jane Austen' , quotes: '“I declare after all there is no enjoyment like reading! How much sooner one tires of any thing than of a book! -- When I have a house of my own, I shall be miserable if I have not an excellent library.”'},
    {id: 3, author: 'Jane Austen' , quotes: '"A lady`s imagination is very rapid; it jumps from admiration to love, from love to matrimony in a moment."'},
    {id: 4, author: 'Jane Austen' , quotes: '“In vain have I struggled. It will not do. My feelings will not be repressed. You must allow me to tell you how ardently I admire and love you.”'},
    {id: 5, author: 'Jane Austen' , quotes: '“I do not want people to be very agreeable, as it saves me the trouble of liking them a great deal.”'},
    {id: 6, author: 'Jane Austen' , quotes: '“The more I know of the world, the more I am convinced that I shall never see a man whom I can really love. I require so much!”'},
    {id: 7, author: 'Jane Austen' , quotes: '“It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.”'},
    {id: 8, author: 'Jane Austen' , quotes: '“There are few people whom I really love, and still fewer of whom I think well. The more I see of the world, the more am I dissatisfied with it; and every day confirms my belief of the inconsistency of all human characters, and of the little dependence that can be placed on the appearance of merit or sense.”'},
    {id: 9, author: 'Jane Austen' , quotes: '“I cannot fix on the hour, or the spot, or the look or the words, which laid the foundation. It is too long ago. I was in the middle before I knew that I had begun.”'},
    {id: 10, author: 'Jane Austen' , quotes: '“Angry people are not always wise.”'},
    {id: 11, author: 'Jane Austen' , quotes: '“I hate to hear you talk about all women as if they were fine ladies instead of rational creatures. None of us want to be in calm waters all our lives.”'},
    {id: 12, author: 'Jane Austen' , quotes: '“Vanity and pride are different things, though the words are often used synonymously. A person may be proud without being vain. Pride relates more to our opinion of ourselves, vanity to what we would have others think of us.”'},
    {id: 13, author: 'Jane Austen' , quotes: '“You pierce my soul. I am half agony, half hope...I have loved none but you.”'},
    {id: 14, author: 'Jane Austen' , quotes: '“but for my own part, if a book is well written, I always find it too short.”'},
    {id: 15, author: 'Jane Austen' , quotes: '“What are men to rocks and mountains?”'},
    {id: 16, author: 'Jane Austen' , quotes: '“There is a stubbornness about me that never can bear to be frightened at the will of others. My courage always rises at every attempt to intimidate me.”'},
    {id: 17, author: 'Jane Austen' , quotes: '“I could easily forgive his pride, if he had not mortified mine.”'},
    {id: 18, author: 'Jane Austen' , quotes: '“Ah! There is nothing like staying at home, for real comfort.”'},
    {id: 19, author: 'Jane Austen' , quotes: '“I must learn to be content with being happier than I deserve.”'},
    {id: 20, author: 'Jane Austen' , quotes: '“If I loved you less, I might be able to talk about it more.”'},
    {id: 21, author: 'Jane Austen' , quotes: '“The Very first moment I beheld him, my heart was irrevocably gone.”'},
    {id: 22, author: 'Jane Austen' , quotes: '“Silly things do cease to be silly if they are done by sensible people in an impudent way.”'},
    {id: 23, author: 'Jane Austen' , quotes: '“You are too generous to trifle with me. If your feelings are still what they were last April, tell me so at once. My affections and wishes are unchanged; but one word from you will silence me on this subject for ever.”'},
    {id: 24, author: 'Jane Austen' , quotes: '“Laugh as much as you choose, but you will not laugh me out of my opinion.”'},
    {id: 25, author: 'Jane Austen' , quotes: '“Friendship is certainly the finest balm for the pangs of disappointed love.”'},
    {id: 26, author: 'Jane Austen' , quotes: '“I have not the pleasure of understanding you.”'},
    {id: 27, author: 'Jane Austen' , quotes: '“I may have lost my heart, but not my self-control. ”'},
    {id: 28, author: 'Jane Austen' , quotes: '“To be fond of dancing was a certain step towards falling in love”'},
    {id: 29, author: 'Jane Austen' , quotes: '“I am the happiest creature in the world. Perhaps other people have said so before, but not one with such justice. I am happier even than Jane; she only smiles, I laugh.”'},
    {id: 30, author: 'Jane Austen' , quotes: '“When I fall in love, it will be forever.”'},
    {id: 31, author: 'Jane Austen' , quotes: '“From the very beginning— from the first moment, I may almost say— of my acquaintance with you, your manners, impressing me with the fullest belief of your arrogance, your conceit, and your selfish disdain of the feelings of others, were such as to form the groundwork of disapprobation on which succeeding events have built so immovable a dislike; and I had not known you a month before I felt that you were the last man in the world whom I could ever be prevailed on to marry.”'},
    {id: 32, author: 'Jane Austen' , quotes: '“For what do we live, but to make sport for our neighbors, and laugh at them in our turn?”'},
    {id: 33, author: 'Jane Austen' , quotes: '“I cannot make speeches, Emma...If I loved you less, I might be able to talk about it more. But you know what I am. You hear nothing but truth from me. I have blamed you, and lectured you, and you have borne it as no other woman in England would have borne it.”'},
    {id: 34, author: 'Jane Austen' , quotes: '“Give a girl an education and introduce her properly into the world, and ten to one but she has the means of settling well, without further expense to anybody. ”'},
    {id: 35, author: 'Jane Austen' , quotes: '“I always deserve the best treatment because I never put up with any other.”'},
    {id: 36, author: 'Jane Austen' , quotes: '“You must learn some of my philosophy. Think only of the past as its remembrance gives you pleasure.”'},
    {id: 37, author: 'Jane Austen' , quotes: '“You must allow me to tell you how ardently I admire and love you."'},
    {id: 38, author: 'Jane Austen' , quotes: '“An unhappy alternative is before you, Elizabeth. From this day you must be a stranger to one of your parents. Your mother will never see you again if you do not marry Mr. Collins, and I will never see you again if you do.”'},
    {id: 39, author: 'Jane Austen' , quotes: '“Till this moment I never knew myself.”'},
    {id: 40, author: 'Jane Austen' , quotes: '“It is only a novel... or, in short, only some work in which the greatest powers of the mind are displayed, in which the most thorough knowledge of human nature, the happiest delineation of its varieties, the liveliest effusions of wit and humour, are conveyed to the world in the best-chosen language”'},
    {id: 41, author: 'Jane Austen' , quotes: '“Life seems but a quick succession of busy nothings.”'},
    {id: 42, author: 'Jane Austen' , quotes: '“I have faults enough, but they are not, I hope, of understanding. My temper I dare not vouch for. It is, I believe, too little yielding— certainly too little for the convenience of the world. I cannot forget the follies and vices of other so soon as I ought, nor their offenses against myself. My feelings are not puffed about with every attempt to move them. My temper would perhaps be called resentful. My good opinion once lost, is lost forever.”'},
    {id: 43, author: 'Jane Austen' , quotes: '“My good opinion once lost is lost forever.”'},
    {id: 44, author: 'Jane Austen' , quotes: '“We all know him to be a proud, unpleasant sort of man; but this would be nothing if you really liked him.”'},
    {id: 45, author: 'Jane Austen' , quotes: '“If I could but know his heart, everything would become easy.”'},
    {id: 46, author: 'Jane Austen' , quotes: '“There could have been no two hearts so open, no tastes so similar, no feelings so in unison”'},
    {id: 47, author: 'Jane Austen' , quotes: '“Her heart did whisper that he had done it for her.”'},
    {id: 48, author: 'Jane Austen' , quotes: '“Seldom, very seldom, does complete truth belong to any human disclosure; seldom can it happen that something is not a little disguised or a little mistaken.”'},
    {id: 49, author: 'Jane Austen' , quotes: '“A girl likes to be crossed a little in love now and then. It is something to think of”'},
    {id: 50, author: 'Jane Austen' , quotes: '“The distance is nothing when one has a motive.”'},
    {id: 51, author: 'Jane Austen' , quotes: '"Perhaps I shall. Yes, yes, if you please, no reference to examples in books. Men have had every advantage of us in telling their own story. Education has been theirs in so much higher a degree; the pen has been in their hands. I will not allow books to prove anything.”'},
    {id: 52, author: 'Jane Austen' , quotes: '“I wish, as well as everybody else, to be perfectly happy; but, like everybody else, it must be in my own way.”'},
    {id: 53, author: 'Jane Austen' , quotes: '“Nothing ever fatigues me, but doing what I do not like.”'},
    {id: 54, author: 'Jane Austen' , quotes: '“Know your own happiness. You want nothing but patience- or give it a more fascinating name, call it hope.”'},
    {id: 55, author: 'Jane Austen' , quotes: '“What strange creatures brothers are!”'},
    {id: 56, author: 'Jane Austen' , quotes: '“I have been a selfish being all my life, in practice, though not in principle. As a child I was taught what was right, but I was not taught to correct my temper. I was given good principles, but left to follow them in pride and conceit. Unfortunately an only son (for many years an only child), I was spoilt by my parents, who, though good themselves (my father, particularly, all that was benevolent and amiable), allowed, encouraged, almost taught me to be selfish and overbearing; to care for none beyond my own family circle; to think meanly of all the rest of the world; to wish at least to think meanly of their sense and worth compared with my own. Such I was, from eight to eight and twenty; and such I might still have been but for you, dearest, loveliest Elizabeth! What do I not owe you! You taught me a lesson, hard indeed at first, but most advantageous. By you, I was properly humbled. I came to you without a doubt of my reception. You showed me how insufficient were all my pretensions to please a woman worthy of being pleased.”'},
    {id: 57, author: 'Jane Austen' , quotes: '“I declare after all there is no enjoyment like reading! How much sooner one tires of anything than of a book!”'},
    {id: 58, author: 'Jane Austen' , quotes: '“There are people, who the more you do for them, the less they will do for themselves.”'},
    {id: 59, author: 'Jane Austen' , quotes: '“It is not time or opportunity that is to determine intimacy;—it is disposition alone. Seven years would be insufficient to make some people acquainted with each other, and seven days are more than enough for others.”'},
    {id: 60, author: 'Jane Austen' , quotes: '“Run mad as often as you choose, but do not faint!”'},
    {id: 61, author: 'Jane Austen' , quotes: '“Oh, Lizzy! do anything rather than marry without affection.”'},
    {id: 62, author: 'Jane Austen' , quotes: '“Mary wished to say something very sensible, but knew not how.”'},
    {id: 63, author: 'Jane Austen' , quotes: '“Nobody can tell what I suffer! But it is always so. Those who do not complain are never pitied.”'},
    {id: 64, author: 'Jane Austen' , quotes: '“One half of the world cannot understand the pleasures of the other.”'},
    {id: 65, author: 'Jane Austen' , quotes: '“A woman, especially if she have the misfortune of knowing anything, should conceal it as well as she can.”'},
    {id: 66, author: 'Jane Austen' , quotes: '“I certainly have not the talent which some people possess," said Darcy, "of conversing easily with those I have never seen before. I cannot catch their tone of conversation, or appear interested in their concerns, as I often see done.”'},
    {id: 67, author: 'Jane Austen' , quotes: '“How quick come the reasons for approving what we like.”'},
    {id: 68, author: 'Jane Austen' , quotes: '“...when pain is over, the remembrance of it often becomes a pleasure.”'},
    {id: 69, author: 'Jane Austen' , quotes: '“Which of all my important nothings shall I tell you first?”'},
    {id: 70, author: 'Jane Austen' , quotes: '“You must be the best judge of your own happiness.”'},
    {id: 71, author: 'Jane Austen' , quotes: '“She is tolerable, but not handsome enough to tempt me, and I am in no humor at present to give consequence to young ladies who are slighted by other men.”'},
    {id: 72, author: 'Jane Austen' , quotes: '“Without music, life would be a blank to me.”'},
    {id: 73, author: 'Jane Austen' , quotes: '“She was sensible and clever, but eager in everything; her sorrows, her joys, could have no moderation.”'},
    {id: 74, author: 'Jane Austen' , quotes: '“If adventures will not befall a young lady in her own village, she must seek them abroad.”'},
    {id: 75, author: 'Jane Austen' , quotes: '“Better be without sense than misapply it as you do. ”'},
    {id: 76, author: 'Jane Austen' , quotes: '“I come here with no expectations, only to profess, now that I am at liberty to do so, that my heart is and always will be...yours.”'},
    {id: 77, author: 'Jane Austen' , quotes: '“It would be mortifying to the feelings of many ladies, could they be made to understand how little the heart of a man is affected by what is costly or new in their attire... Woman is fine for her own satisfaction alone. No man will admire her the more, no woman will like her the better for it. Neatness and fashion are enough for the former, and a something of shabbiness or impropriety will be most endearing to the latter.”'},
    {id: 78, author: 'Jane Austen' , quotes: '“I will be calm. I will be mistress of myself.”'},
    {id: 79, author: 'Jane Austen' , quotes: '“All the privilege I claim for my own sex (it is not a very enviable one: you need not covet it), is that of loving longest, when existence or when hope is gone!”'},
    {id: 80, author: 'Jane Austen' , quotes: '“Stupid men are the only ones worth knowing after all.”'},
    {id: 81, author: 'Jane Austen' , quotes: '“If a book is well written, I always find it too short.”'},
    {id: 82, author: 'Jane Austen' , quotes: '“Let us never underestimate the power of a well-written letter.”'},
    {id: 83, author: 'Jane Austen' , quotes: '“Had I been in love, I could not have been more wretchedly blind. But vanity, not love, has been my folly.”'},
    {id: 84, author: 'Jane Austen' , quotes: '“But people themselves alter so much, that there is something new to be observed in them for ever.”'},
    {id: 85, author: 'Jane Austen' , quotes: '“A man does not recover from such devotion of the heart to such a woman! He ought not; he does not.”'},
    {id: 86, author: 'Jane Austen' , quotes: '“I am only resolved to act in that manner, which will, in my own opinion, constitute my happiness, without reference to you, or to any person so wholly unconnected with me.”'},
    {id: 87, author: 'Jane Austen' , quotes: '“She hoped to be wise and reasonable in time; but alas! Alas! She must confess to herself that she was not wise yet.”'},
    {id: 88, author: 'Jane Austen' , quotes: '“Elinor agreed to it all, for she did not think he deserved the compliment of rational opposition.”'},
    {id: 89, author: 'Jane Austen' , quotes: '“I cannot speak well enough to be unintelligible.”'},
    {id: 90, author: 'Jane Austen' , quotes: '“Time will explain.”'},
    {id: 91, author: 'Jane Austen' , quotes: '“I never wish to offend, but I am so foolishly shy, that I often seem negligent, when I am only kept back by my natural awkwardness. [...] Shyness is only the effect of a sense of inferiority in some way or other. If I could persuade myself that my manners were perfectly easy and graceful, I should not be shy.”'},
    {id: 92, author: 'Jane Austen' , quotes: '“There is no charm equal to tenderness of heart.”'},
    {id: 93, author: 'Jane Austen' , quotes: '“I am determined that only the deepest love will induce me into matrimony. So, I shall end an old maid, and teach your ten children to embroider cushions and play their instruments very ill.”'},
    {id: 94, author: 'Jane Austen' , quotes: '“I was quiet, but I was not blind.”'},
    {id: 95, author: 'Jane Austen' , quotes: '“To wish was to hope, and to hope was to expect”'},
    {id: 96, author: 'Jane Austen' , quotes: '“Her pleasure in the walk must arise from the exercise and the day, from the view of the last smiles of the year upon the tawny leaves and withered hedges, and from repeating to herself some few of the thousand poetical descriptions extant of autumn--that season of peculiar and inexhaustible influence on the mind of taste and tenderness--that season which has drawn from every poet worthy of being read some attempt at description, or some lines of feeling.”'},
    {id: 97, author: 'Jane Austen' , quotes: '“I am excessively diverted.”'},
    {id: 98, author: 'Jane Austen' , quotes: '“Now be sincere; did you admire me for my impertinence?"'},
    {id: 99, author: 'Jane Austen' , quotes: '"For the liveliness of your mind, I did.”'},
    {id: 100, author: 'Jane Austen' , quotes: '“Now they were as strangers; worse than strangers, for they could never become acquainted.”'},
    {id: 101, author: 'Jane Austen' , quotes: '“She was convinced that she could have been happy with him, when it was no longer likely they should meet.”'},
    {id: 102, author: 'Jane Austen' , quotes: '“Follies and nonsense, whims and inconsistencies do divert me, I own, and I laugh at them whenever I can.”'},
    {id: 103, author: 'Jane Austen' , quotes: '“We have all a better guide in ourselves, if we would attend to it, than any other person can be.”'},
    {id: 104, author: 'Jane Austen' , quotes: '“Nothing is more deceitful," said Darcy, "than the appearance of humility. It is often only carelessness of opinion, and sometimes an indirect boast.”'},
    {id: 105, author: 'Jane Austen' , quotes: '“Were I to fall in love, indeed, it would be a different thing; but I have never been in love ; it is not my way, or my nature; and I do not think I ever shall.”'},
    {id: 106, author: 'Jane Austen' , quotes: '“They were within twenty yards of each other, and so abrupt was his appearance, that it was impossible to avoid his sight. Their eyes instantly met, and the cheeks of each were overspread with the deepest blush. He absolutely started, and for a moment seemed immoveable from surprise; but shortly recovering himself, advanced towards the party, and spoke to Elizabeth, if not in terms of perfect composure, at least of perfect civility.”'},
    {id: 107, author: 'Jane Austen' , quotes: '“Men of sense, whatever you may choose to say, do not want silly wives.”'},
    {id: 108, author: 'Jane Austen' , quotes: '“Selfishness must always be forgiven you know, because there is no hope of a cure.”'},
    {id: 109, author: 'Jane Austen' , quotes: '“Do not consider me now as an elegant female intending to plague you, but as a rational creature speaking the truth from her heart.”'},
    {id: 110, author: 'Jane Austen' , quotes: '“One word from you shall silence me forever.”'}
]

console.log(quotes);
// Populate the array with a few quotes that you like.

// When the “Generate Quote” button is pressed, retrieve randomly a quote (ie. an object), and display it in the DOM - like the image above.
// Important: When clicking on the button, make sure you don’t display the same quote twice in a row.


// Part 2 : Add Buttons
// In the HTML file, create a form with the inputs “Quote” and “Author” and a button. So when you click on the button, you can add a new quote to the array of object.
// Important: Don’t forget to set the id of the new quotes

// In the HTML file, under the displayed quote, create a few more buttons:
// A button that gives the number of character inside each quote (space included)
// A button that gives the number of character inside each quote (space NOT included)
// A button that gives the number of words in each quote
// A button “Like” for the user to like a quote. Hint : add a new key to each object that will represent the number of “likes”.

// Part 3 : Filter Form
// Create a form, that will filter the quotes depending on the name of the author. When the button of the form is clicked, display all the quotes from this specific author.

// Instead of showing all the quotes of the specific author. Show only one quote, and add a button “Previous” and a button “Next” that will display the next or previous quote.