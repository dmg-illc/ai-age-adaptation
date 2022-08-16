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
    {
        'prompt': 1,
        'type': 'neutral',
        'class_prob_young': 0.9989282489,	
        'class_prob_old': 0.00107174715958535,
        'human_prob_young': 50.0,
        'human_prob_old': 50.0,
        'output': "You know what's awesome? When you get to the top of a hill and get this. It's the best thing that ever happened to me on that hill. I was sitting down with this girl, and"
    },{
        'prompt': 2,
        'type': 'neutral',
        'class_prob_young': 0.5524653792,	
        'class_prob_old': 0.4475345612,
        'human_prob_young': 50.0,
        'human_prob_old': 50.0,
        'output': "Well, I have a bit of a holiday this year, because the new year will be my first year without my husband!Well, it's a long time since I was with him,"
    },{
        'prompt': 3,
        'type': 'neutral',
        'class_prob_young': 0.0760673359,	
        'class_prob_old': 0.9239326119,
        'human_prob_young': 50.0,
        'human_prob_old': 50.0,
        'output': "The last week of September was a very busy one, I've had a lot going on in my life. I have a family, a business and a lot of personal issues which I am now working"
    },{
        'prompt': 4,
        'type': 'neutral',
        'class_prob_young': 0.8453392386,	
        'class_prob_old': 0.1546607912,
        'human_prob_young': 50.0,
        'human_prob_old': 50.0,
        'output': "I've got to get to my car and head to my apartment. But first I have to get the ball rolling. What do you do when a guy calls you out in the middle of the night"
    },{
        'prompt': 5,
        'type': 'neutral',
        'class_prob_young': 0.01573004387,	
        'class_prob_old': 0.9842699766,
        'human_prob_young': 50.0,
        'human_prob_old': 50.0,
        'output': " The weather's nice and warm. There's not a cloud in sight.We're just going about our business on our morning walk. We're walking through town, passing small storefronts and shopping."
    }, 

    {
        'prompt': 1,
        'type': 'young_bow',
        'class_prob_young': 0.9989601374,	
        'class_prob_old': 0.00103989650961011,
        'human_prob_young': 50.0,
        'human_prob_old': 50.0,
        'output': "My name is David, but I really am David. I'm not just someone who's been writing and doing things for a while. I've been living my dream to become a musician, and I've been doing it with my own two"
    },{
        'prompt': 2,
        'type': 'young_bow',
        'class_prob_young': 0.2686635554,	
        'class_prob_old': 0.7313364148,
        'human_prob_young': 50.0,
        'human_prob_old': 50.0,
        'output': "What's the best holiday tradition for you?I like to take the kids with me for my favorite holidays. Christmas in particular is one of my favorites. I love to take my children and get to know them a little bit more"
    },{
        'prompt': 3,
        'type': 'young_bow',
        'class_prob_young': 0.4913218915,	
        'class_prob_old': 0.508678138256073,
        'human_prob_young': 50.0,
        'human_prob_old': 50.0,
        'output': " It's been a while, but I got home from work and it's been soooooo quiet that I can hardly tell you anything. But here's a little something, a secret I've wanted to share for a year or so now"
    },{
        'prompt': 4,
        'type': 'young_bow',
        'class_prob_young': 0.8480607271,	
        'class_prob_old': 0.151939258,
        'human_prob_young': 50.0,
        'human_prob_old': 50.0,
        'output': " The conversation around the issue has changed a lot over the past decade but, to be honest, it's still all very similar. The basic idea behind all the arguments is, The way we think about race and the role of race,"
    },{
        'prompt': 5,
        'type': 'young_bow',
        'class_prob_young': 0.9989560843,	
        'class_prob_old': 0.001043915399,
        'human_prob_young': 50.0,
        'human_prob_old': 50.0,
        'output': "The rain is finally starting and the snow is falling. It's going to be a great weekend. I have a lot of fun and a lot of fun with you. I hope to see you at the party later this year."
    },
    
    {
        'prompt': 1,
        'type': 'old_bow',
        'class_prob_young': 0.2144562751,	
        'class_prob_old': 0.785543739795684,
        'human_prob_young': 50.0,
        'human_prob_old': 50.0,
        'output': "This is one thing. I was just going to write you this, but my son just came to the office to ask for a loan. My wife and I were going to give him the money for school."
    },{
        'prompt': 2,
        'type': 'old_bow',
        'class_prob_young': 0.9726826549,	
        'class_prob_old': 0.02731735818,
        'human_prob_young': 50.0,
        'human_prob_old': 50.0,
        'output': "I'm in the middle of my Christmas shopping and I'm trying to make something for my family. My sister has a gift for me and my parents, but she doesn't have any ideas about what"
    },{
        'prompt': 3,
        'type': 'old_bow',
        'class_prob_young': 0.9988578558,	
        'class_prob_old': 0.001142108813,
        'human_prob_young': 50.0,
        'human_prob_old': 50.0,
        'output': "I'm a big fan of the book and the comic, but my wife and daughter aren't. My sister has had an issue with the comic, and the book has made no changes for our daughter"
    },{
        'prompt': 4,
        'type': 'old_bow',
        'class_prob_young': 0.8808223009,	
        'class_prob_old': 0.1191776916,
        'human_prob_young': 50.0,
        'human_prob_old': 50.0,
        'output': "I've got to get to my car and head to my apartment. But first I have to get the car to my apartment. So, let's talk about this! The reason for the"
    },{
        'prompt': 5,
        'type': 'old_bow',
        'class_prob_young': 0.9988943934,	
        'class_prob_old': 0.001105687232,
        'human_prob_young': 50.0,
        'human_prob_old': 50.0,
        'output': "We were in the middle of the Great British Bake Off, and my partner and I were having one of those late night drinks after a long day at work, when we decided to make some toast."
    },
    
    {
        'prompt': 1,
        'type': 'young_dis',
        'class_prob_young': 0.9989119768,	
        'class_prob_old': 0.001088013756,
        'human_prob_young': 50.0,
        'human_prob_old': 50.0,
        'output': " Thanks from my boyfriend.., ( ( I (  You my mom and i am happy to do a date and I want to make sure you know I love your new friends.<|endoftext|>I'm going to do my a couple things to help with your in the post."
    },{
        'prompt': 2,
        'type': 'young_dis',
        'class_prob_young': 0.9988276362,	
        'class_prob_old': 0.001172386925,
        'human_prob_young': 50.0,
        'human_prob_old': 50.0,
        'output': " What do, it's not my first thing. I'll be the fun and crazy crazy crazy.tht and I wanna go to like awesome cool weird super fancy super fancy fancy cool, cool cool cool cool cool super fancy super.D.dd"
    },{
        'prompt': 3,
        'type': 'young_dis',
        'class_prob_young': 0.9989770651,	
        'class_prob_old': 0.001023015706,
        'human_prob_young': 50.0,
        'human_prob_old': 50.0,
        'output': " It's been almost 2 weeks now since my boyfriend has been gone for a week or two, and my life and that I've learned that I'm gay. I was still feeling really depressed and anxious because of depression. But I'm now in a place now where I am not feeling so depressed."
    },{
        'prompt': 4,
        'type': 'young_dis',
        'class_prob_young': 0.001161063206,	
        'class_prob_old': 0.9988389611,
        'human_prob_young': 50.0,
        'human_prob_old': 50.0,
        'output': " Can we talk? We can talk. We can get on the phone. A lot.AdvertisementAAB. (A, and (, in the a, the, in the of.. In..<|endoftext|>I"
    },{
        'prompt': 5,
        'type': 'young_dis',
        'class_prob_young': 0.9989965558,	
        'class_prob_old': 0.001003431622,
        'human_prob_young': 50.0,
        'human_prob_old': 50.0,
        'output': " There have a this also, we also a sun, and rain is a snow snow snowboard skate snow and ice and ice chill skate hook n hook hook chill chill chill yeah chill chill chill chill dude chill chill chill yeah yeah yeah yeah cool chill chill yeah yeah chill chill chill chill chill chill chill chill"
    },
    
    {
        'prompt': 1,
        'type': 'old_dis',
        'class_prob_young': 0.001114196726,	
        'class_prob_old': 0.9988858104,
        'human_prob_young': 50.0,
        'human_prob_old': 50.0,
        'output': "It is in a very small place.. This one area. There... under surface surface side land under ground under surface land water land surface land water water area"
    },{
        'prompt': 2,
        'type': 'old_dis',
        'class_prob_young': 0.5167452097,	
        'class_prob_old': 0.4832547605,
        'human_prob_young': 50.0,
        'human_prob_old': 50.0,
        'output': " I've I've had some more of these, but they're not in the only the other ways of doing things, for the last two weeks, and I've I have"
    },{
        'prompt': 3,
        'type': 'old_dis',
        'class_prob_young': 0.001086915145,	
        'class_prob_old': 0.9989130497,
        'human_prob_young': 50.0,
        'human_prob_old': 50.0,
        'output': "It would be used for and for for and for for and and for for the only for for for the for for for the in the for and the the the not the not have"
    },{
        'prompt': 4,
        'type': 'old_dis',
        'class_prob_young': 0.6464560628,	
        'class_prob_old': 0.353543967,
        'human_prob_young': 50.0,
        'human_prob_old': 50.0,
        'output': "What would happen?www·once·once*/onceonce•insteadonceonceonceinsteadCHAstalonce·alphalphalphalph*/*/onceCHAstal・CHA•"
    },{
        'prompt': 5,
        'type': 'old_dis',
        'class_prob_young': 0.001064343029,	
        'class_prob_old': 0.9989356399,
        'human_prob_young': 50.0,
        'human_prob_old': 50.0,
        'output': " It's not been quite a good weather for long and for some people in south Wales and north-western-and-C, in particular, the way it feels is really the"
    }
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
        'model': 'bow',
        'question': 'an older',
        'output_a': "We have been in contact with some friends in the UK and we are working hard to secure your tickets.",
        'output_b': "The answer is no, as it's impossible to talk", 
        'a_class_old': 0.001559708151,
        'a_human_agreement': 0.0, 
        'b_class_old': 0.9272737503
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

function checkRes() {
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


    // NEUTRAL 
    if (promptSelection == 1 && adaptationSelection == 2) {
        modelOutput.textContent = outputs[0].output
    }
    else if (promptSelection == 2 && adaptationSelection == 2) {
        modelOutput.textContent = outputs[1].output
    }
    else if (promptSelection == 3 && adaptationSelection == 2) {
        modelOutput.textContent = outputs[2].output
    }
    else if (promptSelection == 4 && adaptationSelection == 2) {
        modelOutput.textContent = outputs[3].output
    }
    else if (promptSelection == 5 && adaptationSelection == 2) {
        modelOutput.textContent = outputs[4].output
    }

    // YOUNGER BoW
    if (promptSelection == 1 && adaptationSelection == 1 && modelSelection == 1 && styleSelection == 1) {
        modelOutput.textContent = outputs[0+5].output
    }
    else if (promptSelection == 2 && adaptationSelection == 1 && modelSelection == 1 && styleSelection == 1) {
        modelOutput.textContent = outputs[1+5].output
    }
    else if (promptSelection == 3 && adaptationSelection == 1 && modelSelection == 1 && styleSelection == 1) {
        modelOutput.textContent = outputs[2+5].output
    }
    else if (promptSelection == 4 && adaptationSelection == 1 && modelSelection == 1 && styleSelection == 1) {
        modelOutput.textContent = outputs[3+5].output
    }
    else if (promptSelection == 5 && adaptationSelection == 1 && modelSelection == 1 && styleSelection == 1) {
        modelOutput.textContent = outputs[4+5].output
    }

    // OLD BoW
    if (promptSelection == 1 && adaptationSelection == 1 && modelSelection == 1 && styleSelection ==2) {
        modelOutput.textContent = outputs[0+10].output
    }
    else if (promptSelection == 2 && adaptationSelection == 1 && modelSelection == 1 && styleSelection == 2) {
        modelOutput.textContent = outputs[1+10].output
    }
    else if (promptSelection == 3 && adaptationSelection == 1 && modelSelection == 1 && styleSelection == 2) {
        modelOutput.textContent = outputs[2+10].output
    }
    else if (promptSelection == 4 && adaptationSelection == 1 && modelSelection == 1 && styleSelection == 2) {
        modelOutput.textContent = outputs[3+10].output
    }
    else if (promptSelection == 5 && adaptationSelection == 1 && modelSelection == 1 && styleSelection == 2) {
        modelOutput.textContent = outputs[4+10].output
    }

    // YOUNG Disc
    if (promptSelection == 1 && adaptationSelection == 1 && modelSelection == 2 && styleSelection == 1) {
        modelOutput.textContent = outputs[0+15].output
    }
    else if (promptSelection == 2 && adaptationSelection == 1 && modelSelection == 2 && styleSelection == 1) {
        modelOutput.textContent = outputs[1+15].output
    }
    else if (promptSelection == 3 && adaptationSelection == 1 && modelSelection == 2 && styleSelection == 1) {
        modelOutput.textContent = outputs[2+15].output
    }
    else if (promptSelection == 4 && adaptationSelection == 1 && modelSelection == 2 && styleSelection == 1) {
        modelOutput.textContent = outputs[3+15].output
    }
    else if (promptSelection == 5 && adaptationSelection == 1 && modelSelection == 2 && styleSelection == 1) {
        modelOutput.textContent = outputs[4+15].output
    }

    // OLD Disc
    if (promptSelection == 1 && adaptationSelection == 1 && modelSelection == 2 && styleSelection == 2) {
        modelOutput.textContent = outputs[0+20].output
    }
    else if (promptSelection == 2 && adaptationSelection == 1 && modelSelection == 2 && styleSelection == 2) {
        modelOutput.textContent = outputs[1+20].output
    }
    else if (promptSelection == 3 && adaptationSelection == 1 && modelSelection == 2 && styleSelection == 2) {
        modelOutput.textContent = outputs[2+20].output
    }
    else if (promptSelection == 4 && adaptationSelection == 1 && modelSelection == 2 && styleSelection == 2) {
        modelOutput.textContent = outputs[3+20].output
    }
    else if (promptSelection == 5 && adaptationSelection == 1 && modelSelection == 2 && styleSelection == 2) {
        modelOutput.textContent = outputs[4+20].output
    }


    selectionBtn1.textContent = comp_outputs[currentExample].output_a;
    selectionBtn2.textContent = comp_outputs[currentExample].output_b;

     if (selectionBtn1.classList.contains('selected')) {
        humRes1.textContent = parseFloat(comp_outputs[currentExample].a_human_agreement).toFixed(2) * 100 + "% of our participants agree with you";
        autoRes1.textContent = (parseFloat(comp_outputs[currentExample].a_class_old).toFixed(2) * 100) + "% credence auto-classified as younger";
        autoRes2.textContent = 100 - (parseFloat(comp_outputs[currentExample].a_class_old).toFixed(2) * 100) + "% credence auto-classified as older";
    } else if (selectionBtn2.classList.contains('selected')) {
        humRes1.textContent = 100 - (parseFloat(comp_outputs[currentExample].a_human_agreement).toFixed(2) * 100) + "% of our participants agree with you";
        autoRes1.textContent = (parseFloat(comp_outputs[currentExample].b_class_old).toFixed(2) * 100) + "% credence auto-classified as older";
        autoRes2.textContent = 100 - (parseFloat(comp_outputs[currentExample].b_class_old).toFixed(2) * 100) + "% credence auto-classified as younger";
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
    checkRes()
});

selectionBtn2.addEventListener('click', () => {
    removeAllSelectionsForClass('selected', allSelecteButtons);
    selectionBtn2.classList.add('selected');
    document.getElementById('comp-results').removeAttribute("hidden");
    checkRes()
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
        nput_everywhere_default_on_details() 
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

