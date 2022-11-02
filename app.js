const promptButton1 = document.getElementById('prompt-button-1');
const promptButton2 = document.getElementById('prompt-button-2');
const promptButton3 = document.getElementById('prompt-button-3');
const promptButton4 = document.getElementById('prompt-button-4');
const promptButton5 = document.getElementById('prompt-button-5');
const allPromptButtons = document.getElementsByClassName('prompt-button');

const adaptationButton1 = document.getElementById('adaptation-button-1');
const adaptationButton2 = document.getElementById('adaptation-button-2');
const allAdaptationButtons = document.getElementsByClassName('adaptation-button');

const modelButton1 = document.getElementById('model-button-1');
const modelButton2 = document.getElementById('model-button-2');
const allModelButtons = document.getElementsByClassName('model-button');

const styleButton1 = document.getElementById('style-button-1');
const styleButton2 = document.getElementById('style-button-2');
const allStyleButtons = document.getElementsByClassName('style-button');

const selectionBtn1 = document.getElementById('selection-btn-1');
const selectionBtn2 = document.getElementById('selection-btn-2');
const allSelecteButtons = document.getElementsByClassName('selection-button');
let selectionOpt1, selectionOpt2;

const allNotSureButtons = document.getElementsByClassName('step-explanation');
const notSureButton1 = document.getElementById('not-sure-button-1');
const notSureButton2 = document.getElementById('not-sure-button-2');
const notSureButton3 = document.getElementById('not-sure-button-3');
const notSureButton4 = document.getElementById('not-sure-button-4');

const outAutoRes1 = document.getElementById('output-auto-res-1');
const outAutoRes2 = document.getElementById('output-auto-res-2');

const humRes1 = document.getElementById('hum-res-1');
const autoRes1 = document.getElementById('auto-res-1');
const autoRes2 = document.getElementById('auto-res-2');

const prompt = document.getElementById('model-output-prompt');

let promptSelection, adaptationSelection, modelSelection, styleSelection;

const modelOutput = document.getElementById('model-output');

const nextButton = document.getElementById('next-button');
let currentExample = 0;


function removeAllSelectionsForClass(className, buttonClass) {
    for (let i = 0; i < buttonClass.length; i++) {
        buttonClass[i].classList.remove(className);
    }
}

function addHiddenForClass(className, buttonClass) {
    for (let i = 0; i < buttonClass.length; i++) {
        /* set hidden to true  */
        buttonClass[i].hidden = true;
    }
}


outputs = [
    [{
        'prompt': 1,
        'type': 'neutral',
        'class_prob_young': 0.9989282489,	
        'class_prob_old': 0.00107174715958535,
        'human_prob_young': 50.0,
        'human_prob_old': 50.0,
        'output': "You know what's awesome? When you get to the top of a hill and get this. It's the best thing that ever happened to me on that hill. I was sitting down with this girl, and"
    },{
        'prompt': 1,
        'type': 'neutral',
        'class_prob_young': 0.9810115099,	
        'class_prob_old': 0.01898847893,
        'human_prob_young': 50.0,
        'human_prob_old': 50.0,
        'output': "How about we just have the most ridiculous idea ever. A group of us will be sitting here for a few years with our laptops, phones and tablets, doing nothing at all, and then, after 20 years of work, the technology has been proven, and we're"
    },{
        'prompt': 1,
        'type': 'neutral',
        'class_prob_young': 0.1504252702,	
        'class_prob_old': 0.8495748043,
        'human_prob_young': 50.0,
        'human_prob_old': 50.0,
        'output': "I'm a fan.I was just reading an article recently about how you can get a new pair of headphones for as little as $20, a pair of headphones that are the exact same as the"
    }],[{
        'prompt': 2,
        'type': 'neutral',
        'class_prob_young': 0.5524653792,	
        'class_prob_old': 0.4475345612,
        'human_prob_young': 50.0,
        'human_prob_old': 50.0,
        'output': "Well, I have a bit of a holiday this year, because the new year will be my first year without my husband!Well, it's a long time since I was with him,"
    },{
        'prompt': 2,
        'type': 'neutral',
        'class_prob_young': 0.001665888936,	
        'class_prob_old': 0.9983341098,
        'human_prob_young': 50.0,
        'human_prob_old': 50.0,
        'output': "My son got sick in the middle of his school holidays and my daughter had to take him to the hospital. He had a fever, and she had a fever too, but I didn't tell him,"
    },{
        'prompt': 2,
        'type': 'neutral',
        'class_prob_young': 0.9902944565,	
        'class_prob_old': 0.00970557984,
        'human_prob_young': 50.0,
        'human_prob_old': 50.0,
        'output': "We had a great time, and we had some great friends along the way too. We spent our holidays on the road with friends and family, visiting with my family, going to the movies, and spending time at home. Our families are from the East Coast"
    }],[{
        'prompt': 3,
        'type': 'neutral',
        'class_prob_young': 0.0760673359,	
        'class_prob_old': 0.9239326119,
        'human_prob_young': 50.0,
        'human_prob_old': 50.0,
        'output': "The last week of September was a very busy one, I've had a lot going on in my life. I have a family, a business and a lot of personal issues which I am now working"
    },{
        'prompt': 3,
        'type': 'neutral',
        'class_prob_young': 0.001243231818,	
        'class_prob_old': 0.9987567663,
        'human_prob_young': 50.0,
        'human_prob_old': 50.0,
        'output': "I've got some news for you. It is a long time since I've posted anything.But there is a reason for that, a reason which you will hear again and again as time"
    },{
        'prompt': 3,
        'type': 'neutral',
        'class_prob_young': 0.7108579874,	
        'class_prob_old': 0.2891420424,
        'human_prob_young': 50.0,
        'human_prob_old': 50.0,
        'output': "So I had to leave school for my internship. It was an interesting decision since I'm not sure if I"
    }],[{
        'prompt': 4,
        'type': 'neutral',
        'class_prob_young': 0.8453392386,	
        'class_prob_old': 0.1546607912,
        'human_prob_young': 50.0,
        'human_prob_old': 50.0,
        'output': "I've got to get to my car and head to my apartment. But first I have to get the ball rolling. What do you do when a guy calls you out in the middle of the night"
    },{
        'prompt': 4,
        'type': 'neutral',
        'class_prob_young': 0.001082641887,	
        'class_prob_old': 0.9989173412,
        'human_prob_young': 50.0,
        'human_prob_old': 50.0,
        'output': " No. But it's possible to imagine how the future may look. There is no reason why the technology for a truly ubiquitous, ubiquitous computing environment must"
    },{
        'prompt': 4,
        'type': 'neutral',
        'class_prob_young': 0.9575517178,	
        'class_prob_old': 0.04244830832,
        'human_prob_young': 50.0,
        'human_prob_old': 50.0,
        'output': "The first question is: Why is it called 'can we talk'? And the answer to that question is 'because the government is a dictatorship.'As I wrote on Monday, it seems pretty clear that"
    }],[{
        'prompt': 5,
        'type': 'neutral',
        'class_prob_young': 0.01573004387,	
        'class_prob_old': 0.9842699766,
        'human_prob_young': 50.0,
        'human_prob_old': 50.0,
        'output': "The weather's nice and warm. There's not a cloud in sight.We're just going about our business on our morning walk. We're walking through town, passing small storefronts and shopping."
    },{
        'prompt': 5,
        'type': 'neutral',
        'class_prob_young': 0.988800168,	
        'class_prob_old': 0.01119986176,
        'human_prob_young': 50.0,
        'human_prob_old': 50.0,
        'output': "The weather's been so warm and sunny that we've had a lot of fun, and I'm not kidding, we're having a great time! We're having a great time because it's the"
    },{
        'prompt': 5,
        'type': 'neutral',
        'class_prob_young': 0.01573004387,	
        'class_prob_old': 0.9842699766,
        'human_prob_young': 50.0,
        'human_prob_old': 50.0,
        'output': " The weather's nice and warm. There's not a cloud in sight.We're just going about our business on our morning walk. We're walking through town, passing small storefronts and shopping."
    }], 

    [{
        'prompt': 1,
        'type': 'young_bow',
        'class_prob_young': 0.9927235246,	
        'class_prob_old': 0.007276453078,
        'human_prob_young': 50.0,
        'human_prob_old': 50.0,
        'output': "We're having a great time and we're happy and healthy.But it isn't just the weather that's great. We are blessed to have the love and respect of those around us.We're blessed that people are there for us to"
    },{
        'prompt': 1,
        'type': 'young_bow',
        'class_prob_young': 0.8823249936,	
        'class_prob_old': 0.1176749766,
        'human_prob_young': 50.0,
        'human_prob_old': 50.0,
        'output': "I'm looking to make a little change in the life of this blog. This means changing some of the comments. I don't know how to do"
    },{
        'prompt': 1,
        'type': 'young_bow',
        'class_prob_young': 0.8552814126,	
        'class_prob_old': 0.1447185874,
        'human_prob_young': 50.0,
        'human_prob_old': 50.0,
        'output': "You're a great guy, but your attitude is really bad.You can't even tell your wife you're sorry for her and that your wife has made an"
    }],[{
        'prompt': 2,
        'type': 'young_bow',
        'class_prob_young': 0.2686635554,	
        'class_prob_old': 0.7313364148,
        'human_prob_young': 50.0,
        'human_prob_old': 50.0,
        'output': "What's the best holiday tradition for you?I like to take the kids with me for my favorite holidays. Christmas in particular is one of my favorites. I love to take my children and get to know them a little bit more"
    },{
        'prompt': 2,
        'type': 'young_bow',
        'class_prob_young': 0.9925000072,	
        'class_prob_old': 0.007500038948,
        'human_prob_young': 50.0,
        'human_prob_old': 50.0,
        'output': "I'm having a bit of a problem with my hair. I have a thick ponytail that goes straight up into my scalp, and it gets a little tangled. I've been trying to remove it, but my hair just won't budge. It looks"
    },{
        'prompt': 2,
        'type': 'young_bow',
        'class_prob_young': 0.9725117087,	
        'class_prob_old': 0.02748826891,
        'human_prob_young': 50.0,
        'human_prob_old': 50.0,
        'output': "It's my birthday, which is December 15 and I'm a little sad that it's my birthday this year because I'm a little sad that it's my birthday.What do you do for a living?I do a lot of different things.I'm"
    }],[{
        'prompt': 3,
        'type': 'young_bow',
        'class_prob_young': 0.4913218915,	
        'class_prob_old': 0.508678138256073,
        'human_prob_young': 50.0,
        'human_prob_old': 50.0,
        'output': "It's been a while, but I got home from work and it's been soooooo quiet that I can hardly tell you anything. But here's a little something, a secret I've wanted to share for a year or so now"
    },{
        'prompt': 3,
        'type': 'young_bow',
        'class_prob_young': 0.8698538542,	
        'class_prob_old': 0.1301461011,
        'human_prob_young': 50.0,
        'human_prob_old': 50.0,
        'output': "I'm glad you're here! It has been a while since I had time to write a blog post. It's been a long road for me, it's been rough for all the others around, but I'm ready to get going!I'll be honest though. I"
    },{
        'prompt': 3,
        'type': 'young_bow',
        'class_prob_young': 0.2825017869,	
        'class_prob_old': 0.7174981833,
        'human_prob_young': 50.0,
        'human_prob_old': 50.0,
        'output': "It's not going well.It's not going well, so I'll tell you why...I'm sorry.It's my fault...What do you mean, it's my fault?"
    }],[{
        'prompt': 4,
        'type': 'young_bow',
        'class_prob_young': 0.8480607271,	
        'class_prob_old': 0.151939258,
        'human_prob_young': 50.0,
        'human_prob_old': 50.0,
        'output': "The conversation around the issue has changed a lot over the past decade but, to be honest, it's still all very similar. The basic idea behind all the arguments is, The way we think about race and the role of race,"
    },{
        'prompt': 4,
        'type': 'young_bow',
        'class_prob_young': 0.9989295602,	
        'class_prob_old': 0.001070387894,
        'human_prob_young': 50.0,
        'human_prob_old': 50.0,
        'output': "What would happen if a man who had an open, loving relationship with a woman who was not his wife suddenly turned against her in a rage? That was the question that I was trying to answer as a new mom, who has just gotten"
    },{
        'prompt': 4,
        'type': 'young_bow',
        'class_prob_young': 0.9983640313,	
        'class_prob_old': 0.001635932247,
        'human_prob_young': 50.0,
        'human_prob_old': 50.0,
        'output': " What about the music? I mean, I can't wait to see you guys!"
    }],[{
        'prompt': 5,
        'type': 'young_bow',
        'class_prob_young': 0.9989560843,	
        'class_prob_old': 0.001043915399,
        'human_prob_young': 50.0,
        'human_prob_old': 50.0,
        'output': "The rain is finally starting and the snow is falling. It's going to be a great weekend. I have a lot of fun and a lot of fun with you. I hope to see you at the party later this year."
    },{
        'prompt': 5,
        'type': 'young_bow',
        'class_prob_young': 0.9989007711,	
        'class_prob_old': 0.001099253539,
        'human_prob_young': 50.0,
        'human_prob_old': 50.0,
        'output': "It's getting cooler in the summer. I love it!<|endoftext|>The world's first solar"
    },{
        'prompt': 5,
        'type': 'young_bow',
        'class_prob_young': 0.02583873458,	
        'class_prob_old': 0.9741612673,
        'human_prob_young': 50.0,
        'human_prob_old': 50.0,
        'output': "It's a beautiful sunny day and the sky is filled with clouds and the air is cool, but still very hot with the temperature reaching over 100 degrees! The sky is"
    }],
    
    [{
        'prompt': 1,
        'type': 'old_bow',
        'class_prob_young': 0.2144562751,	
        'class_prob_old': 0.785543739795684,
        'human_prob_young': 50.0,
        'human_prob_old': 50.0,
        'output': "This is one thing. I was just going to write you this, but my son just came to the office to ask for a loan. My wife and I were going to give him the money for school."
    },{
        'prompt': 1,
        'type': 'old_bow',
        'class_prob_young': 0.05770342425,	
        'class_prob_old': 0.9422966242,
        'human_prob_young': 50.0,
        'human_prob_old': 50.0,
        'output': " It's not just your average guy.You see, you've got the money"
    },{
        'prompt': 1,
        'type': 'old_bow',
        'class_prob_young': 0.8995649815,	
        'class_prob_old': 0.1004350558,
        'human_prob_young': 50.0,
        'human_prob_old': 50.0,
        'output': "This is the one that I've had since I was a kid. I have it from my first marriage and have never changed it. I love to have it and have always taken"
    }],[{
        'prompt': 2,
        'type': 'old_bow',
        'class_prob_young': 0.9726826549,	
        'class_prob_old': 0.02731735818,
        'human_prob_young': 50.0,
        'human_prob_old': 50.0,
        'output': "I'm in the middle of my Christmas shopping and I'm trying to make something for my family. My sister has a gift for me and my parents, but she doesn't have any ideas about what"
    },{
        'prompt': 2,
        'type': 'old_bow',
        'class_prob_young': 0.9713149667,	
        'class_prob_old': 0.02868501469,
        'human_prob_young': 50.0,
        'human_prob_old': 50.0,
        'output': "Just finished reading the first draft of the script (and got some comments on it).The goal with this is to get a good feel for how to build the script into"
    },{
        'prompt': 2,
        'type': 'old_bow',
        'class_prob_young': 0.998093307,	
        'class_prob_old': 0.001906720805,
        'human_prob_young': 50.0,
        'human_prob_old': 50.0,
        'output': "It's been a long time. We've always had a holiday and we haven't had one for about five years.How does the family feel about your absence"
    }],[{
        'prompt': 3,
        'type': 'old_bow',
        'class_prob_young': 0.9988578558,	
        'class_prob_old': 0.001142108813,
        'human_prob_young': 50.0,
        'human_prob_old': 50.0,
        'output': "I'm a big fan of the book and the comic, but my wife and daughter aren't. My sister has had an issue with the comic, and the book has made no changes for our daughter"
    },{
        'prompt': 3,
        'type': 'old_bow',
        'class_prob_young': 0.9989638329,	
        'class_prob_old': 0.001036155387,
        'human_prob_young': 50.0,
        'human_prob_old': 50.0,
        'output': "We can talk about what it's like to work for the world's best company. We can talk about how you're going to do everything to make your life better for"
    },{
        'prompt': 3,
        'type': 'old_bow',
        'class_prob_young': 0.9984837174,	
        'class_prob_old': 0.00151630817,
        'human_prob_young': 50.0,
        'human_prob_old': 50.0,
        'output': "Can we talk about what it means to be gay now and what it means to be gay in the future? It is a question that has haunted me for years.In my twenties there was a time that the gay community in the"
    }],[{
        'prompt': 4,
        'type': 'old_bow',
        'class_prob_young': 0.8808223009,	
        'class_prob_old': 0.1191776916,
        'human_prob_young': 50.0,
        'human_prob_old': 50.0,
        'output': "I've got to get to my car and head to my apartment. But first I have to get the car to my apartment. So, let's talk about this! The reason for the"
    },{
        'prompt': 4,
        'type': 'old_bow',
        'class_prob_young': 0.2088594288,	
        'class_prob_old': 0.7911405563,
        'human_prob_young': 50.0,
        'human_prob_old': 50.0,
        'output': "I'm still not feeling great after a day's rest and I've got a few more days to go. I'm going to do something I've been wanting to try for quite a while: a long, slow walk through the woods of"
    },{
        'prompt': 4,
        'type': 'old_bow',
        'class_prob_young': 0.001327355974,	
        'class_prob_old': 0.9986727238,
        'human_prob_young': 50.0,
        'human_prob_old': 50.0,
        'output': "I've had a couple of problems recently, the first of which has been getting my keyboard working in Windows 10. It was supposed to run the Windows"
    }],[{
        'prompt': 5,
        'type': 'old_bow',
        'class_prob_young': 0.9988943934,	
        'class_prob_old': 0.001105687232,
        'human_prob_young': 50.0,
        'human_prob_old': 50.0,
        'output': "We were in the middle of the Great British Bake Off, and my partner and I were having one of those late night drinks after a long day at work, when we decided to make some toast."
    },{
        'prompt': 5,
        'type': 'old_bow',
        'class_prob_young': 0.3135875762,	
        'class_prob_old': 0.6864124537,
        'human_prob_young': 50.0,
        'human_prob_old': 50.0,
        'output': "A lot of work, but no major setbacks.We're working on improving it and we're confident that it'll be ready in time for the holidays.We'll be back at the top of the game for"
    },{
        'prompt': 5,
        'type': 'old_bow',
        'class_prob_young': 0.001284199767,	
        'class_prob_old': 0.9987157583,
        'human_prob_young': 50.0,
        'human_prob_old': 50.0,
        'output': " This is an excellent weather forecast for you today.There is a chance of a storm with rain, thunder and lightning.There is also chance of thunderstorms, rain and lightning.We expect a lot of rain and lightning this afternoon and evening"
    }],
    
    [{
        'prompt': 1,
        'type': 'young_dis',
        'class_prob_young': 0.9989119768,	
        'class_prob_old': 0.001088013756,
        'human_prob_young': 50.0,
        'human_prob_old': 50.0,
        'output': " Thanks from my boyfriend.., ( ( I (  You my mom and i am happy to do a date and I want to make sure you know I love your new friends.<|endoftext|>I'm going to do my a couple things to help with your in the post."
    },{
        'prompt': 1,
        'type': 'young_dis',
        'class_prob_young': 0.3737643361,	
        'class_prob_old': 0.6262356639,
        'human_prob_young': 50.0,
        'human_prob_old': 50.0,
        'output': "My we all the the work work work stories work work job job job role numbers job work job job I is is is"
    },{
        'prompt': 1,
        'type': 'young_dis',
        'class_prob_young': 0.9902843833,	
        'class_prob_old': 0.00971556548,
        'human_prob_young': 50.0,
        'human_prob_old': 50.0,
        'output': "This article discusses the possible correlation between the there is in the two possible relationship of there is and I can link with your link karma links reddit karma links karma karma twitter karma facebook karma reddit google karma twitter google google"
    }],[{
        'prompt': 2,
        'type': 'young_dis',
        'class_prob_young': 0.9988276362,	
        'class_prob_old': 0.001172386925,
        'human_prob_young': 50.0,
        'human_prob_old': 50.0,
        'output': " What do, it's not my first thing. I'll be the fun and crazy crazy crazy.tht and I wanna go to like awesome cool weird super fancy super fancy fancy cool, cool cool cool cool cool super fancy super.D.dd"
    },{
        'prompt': 2,
        'type': 'young_dis',
        'class_prob_young': 0.9988852143,	
        'class_prob_old': 0.0011148497,
        'human_prob_young': 50.0,
        'human_prob_old': 50.0,
        'output': "What do it a good, like me, it funny funny kinda yyy mom lol mom lol funny mom haha mom haha haha lol mom haha lol funny lol Mom and dad like that dad haha mom haha haha haha"
    },{
        'prompt': 2,
        'type': 'young_dis',
        'class_prob_young': 0.9989130497,	
        'class_prob_old': 0.001086903736,
        'human_prob_young': 50.0,
        'human_prob_old': 50.0,
        'output': " What do, what are we gonna?? I have all the fun?!WeAreTheLifeIsAreLoveLoveGoGetMeals??Love is the love is the love, is not it???? Love is a love is love, love is the love, the love is love!!!!!Love"
    }],[{
        'prompt': 3,
        'type': 'young_dis',
        'class_prob_young': 0.9989770651,	
        'class_prob_old': 0.001023015706,
        'human_prob_young': 50.0,
        'human_prob_old': 50.0,
        'output': " It's been almost 2 weeks now since my boyfriend has been gone for a week or two, and my life and that I've learned that I'm gay. I was still feeling really depressed and anxious because of depression. But I'm now in a place now where I am not feeling so depressed."
    },{
        'prompt': 3,
        'type': 'young_dis',
        'class_prob_young': 0.9959961176,	
        'class_prob_old': 0.004003842361,
        'human_prob_young': 50.0,
        'human_prob_old': 50.0,
        'output': "It's probably going to be be a little warmer in Chicago than Manhattan, right around the next summer? Well I'll see what about that. That's just one example of what we can try and get to., a little of a"
    },{
        'prompt': 3,
        'type': 'young_dis',
        'class_prob_young': 0.9801772833,	
        'class_prob_old': 0.01982271113,
        'human_prob_young': 50.0,
        'human_prob_old': 50.0,
        'output': " I'm not going anywhere soon enough for a beach, but not really, since I still have a beach in a city with lots and lots of more"
    }],[{
        'prompt': 4,
        'type': 'young_dis',
        'class_prob_young': 0.001161063206,	
        'class_prob_old': 0.9988389611,
        'human_prob_young': 50.0,
        'human_prob_old': 50.0,
        'output': " Can we talk? We can talk. We can get on the phone. A lot.AdvertisementAAB. (A, and (, in the a, the, in the of.. In..<|endoftext|>I"
    },{
        'prompt': 4,
        'type': 'young_dis',
        'class_prob_young': 0.02666496672,	
        'class_prob_old': 0.9733350277,
        'human_prob_young': 50.0,
        'human_prob_old': 50.0,
        'output': " Yes! We'll do it in the next 30 minutes, as it happened today with our new new music video: We Can. And we can do"
    },{
        'prompt': 4,
        'type': 'young_dis',
        'class_prob_young': 0.9597530365,	
        'class_prob_old': 0.04024694487,
        'human_prob_young': 50.0,
        'human_prob_old': 50.0,
        'output': " The new 'Netflix for music fans' ('by the first, the new the best and the most best, the last and the last to be the first, last, greatest, the newest and' the new and the best!' The first-most-best-songs-album-in"
    }],[{
        'prompt': 5,
        'type': 'young_dis',
        'class_prob_young': 0.9989965558,	
        'class_prob_old': 0.001003431622,
        'human_prob_young': 50.0,
        'human_prob_old': 50.0,
        'output': " There have a this also, we also a sun, and rain is a snow snow snowboard skate snow and ice and ice chill skate hook n hook hook chill chill chill yeah chill chill chill chill dude chill chill chill yeah yeah yeah yeah cool chill chill yeah yeah chill chill chill chill chill chill chill chill"
    },{
        'prompt': 5,
        'type': 'young_dis',
        'class_prob_young': 0.0118327802,	
        'class_prob_old': 0.9881672263,
        'human_prob_young': 50.0,
        'human_prob_old': 50.0,
        'output': " It started a few months ago we announced that we are going on and the on the.The on the time foritSjUeqnUJUqjwTqwjWqUiUQTQWwWQQqJq"
    },{
        'prompt': 5,
        'type': 'young_dis',
        'class_prob_young': 0.9989579916,	
        'class_prob_old': 0.001042053336,
        'human_prob_young': 50.0,
        'human_prob_old': 50.0,
        'output': "This is awesome. It's awesome weather and it was great to watch some of of the New South Bay of England Bay Sharks in the the bay's best hockey games that I was the ever in town. This is the time of the first"
    }],
    
    [{
        'prompt': 1,
        'type': 'old_dis',
        'class_prob_young': 0.001114196726,	
        'class_prob_old': 0.9988858104,
        'human_prob_young': 50.0,
        'human_prob_old': 50.0,
        'output': "It is in a very small place.. This one area. There... under surface surface side land under ground under surface land water land surface land water water area"
    },{
        'prompt': 1,
        'type': 'old_dis',
        'class_prob_young': 0.0011061728,	
        'class_prob_old': 0.9988937974,
        'human_prob_young': 50.0,
        'human_prob_old': 50.0,
        'output': " What's up with your current setup, why are you running on only a single machine?"
    },{
        'prompt': 1,
        'type': 'old_dis',
        'class_prob_young': 0.001314848545,	
        'class_prob_old': 0.9986851811,
        'human_prob_young': 50.0,
        'human_prob_old': 50.0,
        'output': " You know. You know what you got me you got aye you got what you had in the cup. I know. We'll see about this next time, but next time next week, it's first"
    }],[{
        'prompt': 2,
        'type': 'old_dis',
        'class_prob_young': 0.5167452097,	
        'class_prob_old': 0.4832547605,
        'human_prob_young': 50.0,
        'human_prob_old': 50.0,
        'output': " I've I've had some more of these, but they're not in the only the other ways of doing things, for the last two weeks, and I've I have"
    },{
        'prompt': 2,
        'type': 'old_dis',
        'class_prob_young': 0.02419813909,	
        'class_prob_old': 0.9758018851,
        'human_prob_young': 50.0,
        'human_prob_old': 50.0,
        'output': "You have found to take on the whole world of this and create a place to make your home to create a new life for you and for the world of your, the people from which the land of our world"
    },{
        'prompt': 2,
        'type': 'old_dis',
        'class_prob_young': 0.8995238543,	
        'class_prob_old': 0.1004761681,
        'human_prob_young': 50.0,
        'human_prob_old': 50.0,
        'output': "How you have a lot of a lot in a time to go, I can be the one to you to you in your own place or you can ask me any place you want, I will always be very interested to know about your holiday"
    }],[{
        'prompt': 3,
        'type': 'old_dis',
        'class_prob_young': 0.001086915145,	
        'class_prob_old': 0.9989130497,
        'human_prob_young': 50.0,
        'human_prob_old': 50.0,
        'output': "It would be used for and for for and for for and and for for the only for for for the for for for the in the for and the the the not the not have"
    },{
        'prompt': 3,
        'type': 'old_dis',
        'class_prob_young': 0.0735623017,	
        'class_prob_old': 0.926437676,
        'human_prob_young': 50.0,
        'human_prob_old': 50.0,
        'output': " It seems like you have just taken care, the on is a with the to change it to it seems to be getting your very, very hard to stay back and keep them from going on to your your head!."
    },{
        'prompt': 3,
        'type': 'old_dis',
        'class_prob_young': 0.09756106138,	
        'class_prob_old': 0.902438879,
        'human_prob_young': 50.0,
        'human_prob_old': 50.0,
        'output': " I just got my license yesterday and had a bit to,, with, to in a in the for, the and the business, so I can't really tell you how you're really feeling feeling today at the moment.What can I do about it?"
    }],[{
        'prompt': 4,
        'type': 'old_dis',
        'class_prob_young': 0.6464560628,	
        'class_prob_old': 0.353543967,
        'human_prob_young': 50.0,
        'human_prob_old': 50.0,
        'output': "What would happen?www·once·once*/onceonce•insteadonceonceonceinsteadCHAstalonce·alphalphalphalph*/*/onceCHAstal・CHA•"
    },{
        'prompt': 4,
        'type': 'old_dis',
        'class_prob_young': 0.001112360391,	
        'class_prob_old': 0.9988875985,
        'human_prob_young': 50.0,
        'human_prob_old': 50.0,
        'output': " It's not just about being good.TheTheITheItItititI'The (It-This',, ',,, I the I, you and I the it))TheIYouandandI"
    },{
        'prompt': 4,
        'type': 'old_dis',
        'class_prob_young': 0.9399577975,	
        'class_prob_old': 0.06004217267,
        'human_prob_young': 50.0,
        'human_prob_old': 50.0,
        'output': "The first question many people who are waiting for the first major release in the Apple TV and Apple Watch line-based lineup are wondering whether they're going to get any kind, to to to the new to go"
    }],[{
        'prompt': 5,
        'type': 'old_dis',
        'class_prob_young': 0.001064343029,	
        'class_prob_old': 0.9989356399,
        'human_prob_young': 50.0,
        'human_prob_old': 50.0,
        'output': " It's not been quite a good weather for long and for some people in south Wales and north-western-and-C, in particular, the way it feels is really the"
    },{
        'prompt': 5,
        'type': 'old_dis',
        'class_prob_young': 0.001303573954,	
        'class_prob_old': 0.998696506,
        'human_prob_young': 50.0,
        'human_prob_old': 50.0,
        'output': "Can you name one of the most significant and powerful institutions that we can't mention, that is the institution in this country that has changed history in this country?JERRY: Yes, it's the"
    },{
        'prompt': 5,
        'type': 'old_dis',
        'class_prob_young': 0.001131097903,	
        'class_prob_old': 0.9988688827,
        'human_prob_young': 50.0,
        'human_prob_old': 50.0,
        'output': "The weather here is very good to. good for the and a lot of more things to see, in the forest and countryside. There are also more birds flying here for example! I like to go to on"
    }]
]

comp_outputs = [
    {
        'model': 'disc',
        'question': 'a younger',
        'output_a': "I've been wanting it for years and will be in a very near, if very close, near, for the long,.. a long,",
        'output_b': "This article explains why:Why Do You Like To Drink? By David HockneyThe first few weeks after leaving the gym, I'm always feeling tired.", 
        'a_class_old': 0.9989238381,
        'a_human_agreement': 0.2, 
        'b_class_old': 0.8684927225
    },{
        'model': 'bow',
        'question': 'an older',
        'output_a': "My name is Jules, and I'm from the Philippines in the Philippines. So far I have been able to travel around and experience many places.I recently moved here to start a career",
        'output_b': "This week, we talk to the guy who made a film about a group of people who have lost their minds, about how the mind has been corrupted, about why you", 
        'a_class_old': 0.001543430379,
        'a_human_agreement': 0.0, 
        'b_class_old': 0.9849150181
    },{
        'model': 'bow',
        'question': 'a younger',
        'output_a': " Can we talk about what it meant to me? Is it just me? Is this really happening to me? It was fun, wasn't it? I didn't really expect anything to happen but I guess you guys are right I'm a",
        'output_b': " This is an open thread for questions and discussion.This is a community run forum, and the members should always be polite and courteous.This is a very small community and we have no official rules and we welcome all ideas of how to best", 
        'a_class_old': 0.001077361405,
        'a_human_agreement': 0.8, 
        'b_class_old': 0.99850595
    },{
        'model': 'disc',
        'question': 'a younger',
        'output_a': " ( and what did I do I, 2nd to 2 months ago to go to the 2- of last, 2 weeks, I was 2- months and 2 weeks in and I was so happy to go back to family in a",
        'output_b': " Can we?ItIs a bit of a game to keep me interested in music and pop up music as music in pop music is kindMarshC, to a great to music, one like a the Forrest,, that the like of", 
        'a_class_old': 0.7399819493,
        'a_human_agreement': 1.0, 
        'b_class_old': 0.001151196077
    },{
        'model': 'disc',
        'question': 'a younger',
        'output_a': "This article covers how I can help.CreatCos CreditsCos MarshTylerSMM CosSCosTyler CosCosCosCosM TheMWCosDwKS CosMMKW CosKSK CosCosCos",
        'output_b': "The conversation is now closed and the question of the future is settled. There's not a very good thing you've just not, and we've now all agreed that the first-year team is going the future and the next team is,", 
        'a_class_old': 0.9978559613,
        'a_human_agreement': 0.6, 
        'b_class_old': 0.002254046733
    },{
        'model': 'disc',
        'question': 'an older',
        'output_a': "Great weather today, it was warm. We were up for about 45 minutes for this morning. The place has it all",
        'output_b': "This article discusses a variety options options options of marketing tech marketing marketing web blog blogger startup Google designer blog Google blogger blog startup Google tech website tech blogger startup", 
        'a_class_old': 0.8466967344,
        'a_human_agreement': 0.8, 
        'b_class_old': 0.001062063966
    },{
        'model': 'disc',
        'question': 'an older',
        'output_a': " I'm working on your side of my job, doing my part for the United Nations.",
        'output_b': " I'm not going anywhere soon enough for a beach, but not really, since I still", 
        'a_class_old': 0.1955001056,
        'a_human_agreement': 0.8, 
        'b_class_old': 0.01982271113
    },{
        'model': 'disc',
        'question': 'a younger',
        'output_a': "It is in a very small place.. This one area. There...",
        'output_b': " This is the story. I am the daughter, boyfriend and I and two friends and my", 
        'a_class_old': 0.9988316894,
        'a_human_agreement': 0.6, 
        'b_class_old': 0.1032652631
    },{
        'model': 'disc',
        'question': 'an older',
        'output_a': " Yes! Join host Michel Kayay, host Mike Ryan and co- host John Paul on the show. Free View and get your first week of",
        'output_b': "<|endoftext|>It's not my favorite holiday. ( ( ( ( ( ( ( ( ( ( ( ( ) ) ) ) ( ) ( ( )", 
        'a_class_old': 0.09764492512,
        'a_human_agreement': 0.8, 
        'b_class_old': 0.001027885242
    },{
        'model': 'disc',
        'question': 'an older',
        'output_a': "How you have a lot of a lot in a time to",
        'output_b': "Where do we the a holiday party. Christmas is Halloween for", 
        'a_class_old': 0.1004761681,
        'a_human_agreement': 0.8, 
        'b_class_old': 0.007502196822
    },{
        'model': 'bow',
        'question': 'a younger',
        'output_a': "A lot about the history of the United States of America are contained in a series of essays and articles. These",
        'output_b': "Yes, I can. And I hope you will", 
        'a_class_old': 0.9832013249,
        'a_human_agreement': 0.6, 
        'b_class_old': 0.9123290181
    },{
        'model': 'bow',
        'question': 'an older',
        'output_a': "We have been in contact with some friends in the UK and we are working hard to secure your tickets.",
        'output_b': "The answer is no, as it's impossible to talk", 
        'a_class_old': 0.001559708151,
        'a_human_agreement': 0.0, 
        'b_class_old': 0.9272737503
    },{
        'model': 'disc',
        'question': 'a younger',
        'output_a': "<|endoftext|>It's not my favorite holiday. ( ( ( ( ( ( ( ( ( ( ( ( ) ) ) ) ( ) ( ( ) ( ( ) ) )) ) ( ) ( ) ) ) ( ) ( ( )",
        'output_b': " How about we talk a the people, I had to the kids to the kid to the music and to get the music music. That's the music, I thought that that, and that is the way I felt about'' I thought'' I felt that it", 
        'a_class_old': 0.001027885242,
        'a_human_agreement': 1.0, 
        'b_class_old': 0.9988864064
    },{
        'model': 'bow',
        'question': 'an older',
        'output_a': "We're getting to see some nice stuff on the beach this weekend.",
        'output_b': "We're still in development. We haven't had a full day of coding and we're trying to make things", 
        'a_class_old': 0.001036319416,
        'a_human_agreement': 0.8, 
        'b_class_old': 0.001067957259
    },{
        'model': 'bow',
        'question': 'a younger',
        'output_a': "It's a great question, and the answer is yes, of course there is.The answer is yes, because it's a question that's been on my mind for years.I have been thinking about it for quite a while now.And here are a",
        'output_b': "We have been in contact with some friends in the UK and we are working hard to secure your tickets.We can only offer a few details at this time, so don't hesitate to contact us with any questions about tickets.Thank you!We have been in", 
        'a_class_old': 0.99875772,
        'a_human_agreement': 0.6, 
        'b_class_old': 0.9928661585
    },{
        'model': 'bow',
        'question': 'an older',
        'output_a': "The question is often asked by a lot of people",
        'output_b': "A lot of work, but no major setbacks.We're working on improving it and we're confident", 
        'a_class_old': 0.8150612712,
        'a_human_agreement': 0.6, 
        'b_class_old': 0.9908576608
    },{
        'model': 'bow',
        'question': 'a younger',
        'output_a': "Where are you staying in Europe? What are the most popular holiday destinations?I",
        'output_b': "I am very interested in seeing a lot more of your work", 
        'a_class_old': 0.05407825112,
        'a_human_agreement': 1.0, 
        'b_class_old': 0.7702322602
    }
]

function put_everywhere_default_on_details() {
    notSureButton1.textContent = "Show details +";
    notSureButton2.textContent = "Show details +";
    notSureButton3.textContent = "Show details +";
    notSureButton4.textContent = "Show details +";
}

function checkRes(compBtn) {
    put_everywhere_default_on_details() 

    // PROMPT
    if (promptSelection == 1) {
        prompt.textContent = "Hey.";
    } else if (promptSelection == 2) {
        prompt.textContent = "Hello, tell me about your latest holiday.";
    } else if (promptSelection == 3) {
        prompt.textContent = "Hi, how's it going?";
    } else if (promptSelection == 4) {
        prompt.textContent = "Can we talk?";
    } else if (promptSelection == 5) {
        prompt.textContent = "Good weather we're having.";
    }

    let outputIndex = 0; 
    // NEUTRAL 
    if (promptSelection == 1 && adaptationSelection == 2) {
        outputIndex = 0;
    }
    else if (promptSelection == 2 && adaptationSelection == 2) {
        outputIndex = 1;
    }
    else if (promptSelection == 3 && adaptationSelection == 2) {
        outputIndex = 2;
    }
    else if (promptSelection == 4 && adaptationSelection == 2) {
        outputIndex = 3;
    }
    else if (promptSelection == 5 && adaptationSelection == 2) {
        outputIndex = 4;
    }

    // YOUNGER BoW
    if (promptSelection == 1 && adaptationSelection == 1 && modelSelection == 1 && styleSelection == 1) {
        outputIndex = 0+5;
    }
    else if (promptSelection == 2 && adaptationSelection == 1 && modelSelection == 1 && styleSelection == 1) {
        outputIndex = 1+5;
    }
    else if (promptSelection == 3 && adaptationSelection == 1 && modelSelection == 1 && styleSelection == 1) {
        outputIndex = 2+5;
    }
    else if (promptSelection == 4 && adaptationSelection == 1 && modelSelection == 1 && styleSelection == 1) {
        outputIndex = 3+5;
    }
    else if (promptSelection == 5 && adaptationSelection == 1 && modelSelection == 1 && styleSelection == 1) {
        outputIndex = 4+5;
    }

    // OLD BoW
    if (promptSelection == 1 && adaptationSelection == 1 && modelSelection == 1 && styleSelection ==2) {
        outputIndex = 0+10;
    }
    else if (promptSelection == 2 && adaptationSelection == 1 && modelSelection == 1 && styleSelection == 2) {
        outputIndex = 1+10;
    }
    else if (promptSelection == 3 && adaptationSelection == 1 && modelSelection == 1 && styleSelection == 2) {
        outputIndex = 2+10;
    }
    else if (promptSelection == 4 && adaptationSelection == 1 && modelSelection == 1 && styleSelection == 2) {
        outputIndex = 3+10;
    }
    else if (promptSelection == 5 && adaptationSelection == 1 && modelSelection == 1 && styleSelection == 2) {
        outputIndex = 4+10;
    }

    // YOUNG Disc
    if (promptSelection == 1 && adaptationSelection == 1 && modelSelection == 2 && styleSelection == 1) {
        outputIndex = 0+15;
    }
    else if (promptSelection == 2 && adaptationSelection == 1 && modelSelection == 2 && styleSelection == 1) {
        outputIndex = 1+15;
    }
    else if (promptSelection == 3 && adaptationSelection == 1 && modelSelection == 2 && styleSelection == 1) {
        outputIndex = 2+15;
    }
    else if (promptSelection == 4 && adaptationSelection == 1 && modelSelection == 2 && styleSelection == 1) {
        outputIndex = 3+15;
    }
    else if (promptSelection == 5 && adaptationSelection == 1 && modelSelection == 2 && styleSelection == 1) {
        outputIndex = 4+15;
    }

    // OLD Disc
    if (promptSelection == 1 && adaptationSelection == 1 && modelSelection == 2 && styleSelection == 2) {
        outputIndex = 0+20;
    }
    else if (promptSelection == 2 && adaptationSelection == 1 && modelSelection == 2 && styleSelection == 2) {
        outputIndex = 1+20;
    }
    else if (promptSelection == 3 && adaptationSelection == 1 && modelSelection == 2 && styleSelection == 2) {
        outputIndex = 2+20;
    }
    else if (promptSelection == 4 && adaptationSelection == 1 && modelSelection == 2 && styleSelection == 2) {
        outputIndex = 3+20;
    }
    else if (promptSelection == 5 && adaptationSelection == 1 && modelSelection == 2 && styleSelection == 2) {
        outputIndex = 4+20;
    }

    // if not compBtn 
    if (!compBtn) {
        // get a random number between 0 and array length
        let randomOutput = Math.floor(Math.random() * (outputs[outputIndex].length - 0) + 0);

        modelOutput.textContent = outputs[outputIndex][randomOutput].output
        outAutoRes1.textContent = (parseFloat(outputs[outputIndex][randomOutput].class_prob_young * 100).toFixed(2)) + "% model probability toward ‘younger’;";
        outAutoRes2.textContent = (parseFloat(outputs[outputIndex][randomOutput].class_prob_old * 100).toFixed(2)) + "% model probability toward ‘older’";
    }

    selectionBtn1.textContent = comp_outputs[currentExample].output_a;
    selectionBtn2.textContent = comp_outputs[currentExample].output_b;

    // 80% of participants agree with you; 87% model probability toward ‘older’; 13% model probability toward ‘younger’

     if (selectionBtn1.classList.contains('selected')) {
        humRes1.textContent = parseFloat(comp_outputs[currentExample].a_human_agreement * 100).toFixed(0) + "% of participants agree with you;";
        autoRes1.textContent = (parseFloat(comp_outputs[currentExample].a_class_old * 100).toFixed(2)) + "% model probability toward ‘younger’;";
        autoRes2.textContent = (parseFloat(100 - comp_outputs[currentExample].a_class_old * 100).toFixed(2)) + "% model probability toward ‘older’";
    } else if (selectionBtn2.classList.contains('selected')) {
        humRes1.textContent =  (parseFloat( 100 - comp_outputs[currentExample].a_human_agreement * 100).toFixed(0) ) + "% of participants agree with you;";
        autoRes1.textContent = (parseFloat(comp_outputs[currentExample].b_class_old * 100).toFixed(2)) + "% model probability toward ‘older’;";
        autoRes2.textContent =  (parseFloat(100 - comp_outputs[currentExample].b_class_old * 100).toFixed(2)) + "% model probability toward ‘younger’";
    }


    addHiddenForClass('hidden', allNotSureButtons);
}

promptButton1.addEventListener('click', () => {
    document.getElementById('adaptation').removeAttribute("hidden");
    removeAllSelectionsForClass('selected', allPromptButtons);
    promptButton1.classList.add('selected');
    promptSelection = 1;
    checkRes()
});

promptButton2.addEventListener('click', () => {
    document.getElementById('adaptation').removeAttribute("hidden");
    removeAllSelectionsForClass('selected', allPromptButtons);
    promptButton2.classList.add('selected');
    promptSelection = 2;
    checkRes()
});

promptButton3.addEventListener('click', () => {
    document.getElementById('adaptation').removeAttribute("hidden");
    removeAllSelectionsForClass('selected', allPromptButtons);
    promptButton3.classList.add('selected');
    promptSelection = 3;
    checkRes()
});

promptButton4.addEventListener('click', () => {
    document.getElementById('adaptation').removeAttribute("hidden");
    removeAllSelectionsForClass('selected', allPromptButtons);
    promptButton4.classList.add('selected');
    promptSelection = 4;
    checkRes()
});

promptButton5.addEventListener('click', () => {
    document.getElementById('adaptation').removeAttribute("hidden");
    removeAllSelectionsForClass('selected', allPromptButtons);
    promptButton5.classList.add('selected');
    promptSelection = 5;
    checkRes()
});

adaptationButton1.addEventListener('click', () => {
    document.getElementById('model').removeAttribute("hidden");
    document.getElementById('output').hidden = true;
    removeAllSelectionsForClass('selected', allAdaptationButtons);
    adaptationButton1.classList.add('selected');
    adaptationSelection = 1;
    checkRes()
});

adaptationButton2.addEventListener('click', () => {
    document.getElementById('output').removeAttribute("hidden");
    document.getElementById('model').hidden = true;
    document.getElementById('style').hidden = true;
    removeAllSelectionsForClass('selected', allAdaptationButtons);
    removeAllSelectionsForClass('selected', allModelButtons);
    removeAllSelectionsForClass('selected', allStyleButtons);
    adaptationButton2.classList.add('selected');
    adaptationSelection = 2;
    checkRes()
});

modelButton1.addEventListener('click', () => {
    document.getElementById('style').removeAttribute("hidden");
    removeAllSelectionsForClass('selected', allModelButtons);
    modelButton1.classList.add('selected');
    modelSelection = 1;
    checkRes()
});

modelButton2.addEventListener('click', () => {
    document.getElementById('style').removeAttribute("hidden");
    removeAllSelectionsForClass('selected', allModelButtons);
    modelButton2.classList.add('selected');
    modelSelection = 2;
    checkRes()
});

styleButton1.addEventListener('click', () => {
    document.getElementById('output').removeAttribute("hidden");
    removeAllSelectionsForClass('selected', allStyleButtons);
    styleButton1.classList.add('selected');
    styleSelection = 1;
    checkRes()
});

styleButton2.addEventListener('click', () => {
    document.getElementById('output').removeAttribute("hidden");
    removeAllSelectionsForClass('selected', allStyleButtons);
    styleButton2.classList.add('selected');
    styleSelection = 2;
    checkRes()
});

selectionBtn1.addEventListener('click', () => {
    removeAllSelectionsForClass('selected', allSelecteButtons);
    selectionBtn1.classList.add('selected');
    document.getElementById('comp-results').removeAttribute("hidden");
    checkRes(true)
});

selectionBtn2.addEventListener('click', () => {
    removeAllSelectionsForClass('selected', allSelecteButtons);
    selectionBtn2.classList.add('selected');
    document.getElementById('comp-results').removeAttribute("hidden");
    checkRes(true)
});

notSureButton1.addEventListener('click', () => {
    if (document.getElementById('step-expl-1').hidden == true) {
        addHiddenForClass('hidden', allNotSureButtons);
        document.getElementById('step-expl-1').removeAttribute("hidden");
        notSureButton1.textContent = "Hide details –";
    } else {
        addHiddenForClass('hidden', allNotSureButtons);
        notSureButton1.textContent = "Show details +";
    }
});
notSureButton2.addEventListener('click', () => {
    if (document.getElementById('step-expl-2').hidden == true) {
        addHiddenForClass('hidden', allNotSureButtons);
        document.getElementById('step-expl-2').removeAttribute("hidden");
        notSureButton2.textContent = "Hide details -";
    } else {
        addHiddenForClass('hidden', allNotSureButtons);
        notSureButton2.textContent = "Show details +";
    }
});
notSureButton3.addEventListener('click', () => {
    if (document.getElementById('step-expl-3').hidden == true) {
        addHiddenForClass('hidden', allNotSureButtons);
        document.getElementById('step-expl-3').removeAttribute("hidden");
        notSureButton3.textContent = "Hide details -";
    } else {
        addHiddenForClass('hidden', allNotSureButtons);
        put_everywhere_default_on_details() 
    }
});
notSureButton4.addEventListener('click', () => {
    if (document.getElementById('step-expl-4').hidden == true) {
        addHiddenForClass('hidden', allNotSureButtons);
        document.getElementById('step-expl-4').removeAttribute("hidden");
        notSureButton4.textContent = "Hide details -";
    } else {
        addHiddenForClass('hidden', allNotSureButtons);
        put_everywhere_default_on_details() 
    }
});


nextButton.addEventListener('click', () => {
    document.getElementById('comp-results').hidden = true;
    removeAllSelectionsForClass('selected', allSelecteButtons);

    document.getElementById('older_younger_question').textContent = "Which one of the two outputs sounds like a text that could be written by " + comp_outputs[currentExample].question + " speaker?"

    if (currentExample < comp_outputs.length - 1) {
        currentExample += 1;
    } else {
        currentExample = 0;
    }

    selectionBtn1.textContent = comp_outputs[currentExample].output_a;
    selectionBtn2.textContent = comp_outputs[currentExample].output_b;
}); 



selectionBtn1.addEventListener("load", checkRes());

