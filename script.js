const memories = [
{

text: `Hi Sushma Ji,

Happy 19th Birthday! 🎉❤️

Today, you've completed 19 beautiful years, and I just wanted to remind you how special you are.

I don't know if you realize it, but your smile, your energy, and the way you are have created so many wonderful memories. So before anything else, I just want to say thank you for being you, and I hope this birthday brings you lots of happiness, laughter, and everything you've been wishing for.`,
image: "images/photo1.jpg"
},
{
text: `You know, when we were in our first semester, I never imagined that we would become this close.

To be honest, I didn't even think that you would become my friend. At that time, we were just classmates living our own lives, attending classes, and going through college like everyone else.

But life has a funny way of surprising us. Slowly, conversations happened, memories were created, and before I realized it, you had become an important part of my college journey.

Looking back now, I'm really happy that things happened the way they did, because some of my favorite memories wouldn't exist without you.
`,
image: "images/photo2.jpg"
},
{
text: `As time passed, our friendship became stronger and stronger.

What started as simple conversations slowly turned into a daily routine. Taking random snaps, chatting about the most unexpected things, annoying each other for no reason, roasting each other, arguing over silly matters, and then acting normal again the next day.

Some of our best memories were created in those ordinary moments that didn't seem special at the time. But when I look back now, I realize those were the moments that brought us closer.

Without even noticing it, you became one of the people I talked to the most, laughed with the most, and shared some of my favorite college memories with.

`,
image: "images/photo3.jpg"
},
{
text: `You know what I like the most about our friendship?

No matter how many times we annoyed each other, roasted each other, or had small fights, somehow we always ended up talking again.

There was never a need to pretend or act differently. I could be myself around you, and I think that's one of the reasons our friendship became so strong.

Not everyone gets a friend with whom they can share both the serious moments and the completely nonsense conversations. And honestly, I'm glad I found that friend in you.

`,
image: "images/photo4.jpg"
},
{
text: `If someone asks me to describe you in a few words, I'd say you're a person with a lot of attitude, a little bit of anger, endless talking, and a camera that somehow finds its way out every single day.

Seriously, I don't think I've met anyone who takes as many photos as you do. Whether it's a normal day, a special day, or absolutely no reason at all, somehow a photo session always happens.

And yes, sometimes you get angry. Sometimes your attitude reaches another level. But behind all that, you're actually a very kind person. That's something I noticed over time.

The funny thing is that people may first notice your attitude, but the people who know you well get to see your caring and kind side too. And honestly, that's one of the things I admire about you.

`,
image: "images/photo5.jpg"
},
{
text: `Now I have to talk about one of the biggest reasons for our fights.

Not a serious issue. Not college work. Not anything important.

Just me replying late to your messages. 

I still don't know how many times we've argued because I saw your message late or replied after a long time. Sometimes I would be busy, sometimes I would forget, and sometimes I would simply open the chat and think, "I'll reply later."

And somehow that "later" would become a problem.

But honestly, looking back now, I find it funny. Because those small fights showed me that our conversations actually mattered. If they didn't matter, nobody would care about a late reply.

So yes, Sushma Ji, I'm sorry for all those late replies... but I can't promise that it won't happen again.
`,
image: "images/photo6.jpg"
},
{
text: `Most people get excited when college announces holidays. But I remember there were times when we were actually sad about it.

Not because we loved classes so much, but because it meant we wouldn't get to see each other every day.

I still remember those conversations where we would think about being far away for days and somehow feel bad about it. Looking back now, it sounds a little dramatic. 😭

But I think that's when I realized how much our friendship had grown. Somewhere between the daily chats, the snaps, the roasting, the fights, and all those random moments, you became a very important part of my everyday life.

Even today, I don't know exactly when it happened or how it happened. I just know that one day you were a classmate, and before I realized it, you had become one of the closest people in my college journey.

`,
image: "images/photo7.jpg"
},
{
text: `And now, here we are... in the final semester.

Honestly, I don't think any of us were ready for how fast these years would pass. It feels like yesterday we were entering college, meeting new people, and trying to figure everything out.

But now, we're standing at the end of that journey.

I remember feeling sad whenever I thought about college ending. Not because of assignments, exams, or attendance... but because all these daily moments would slowly become memories.

No more random conversations in college, no more meeting every day without planning, no more creating memories as easily as we used to.

And I think that's why this semester feels different. It reminds us that some of the best chapters of our lives are becoming memories.

But if there's one thing I'm grateful for, it's that one of the best parts of this journey was having you in it.
`,
image: "images/photo8.jpg"
},
{
text: `One of my favorite memories has to be the day I came to your home.

We spent so much time together that day, talking about random things, laughing for no reason, taking photos, and just enjoying the moment. It wasn't some big event or a special occasion, but somehow it became one of those memories that stayed with me.

What I remember most is how comfortable everything felt. There was no need to plan anything fancy. Just spending time together was enough to make the day memorable.

When I think about our college journey, that day is definitely one of the memories that comes to my mind first. And honestly, if I ever get a chance to relive one day from these years, that day would be one of my top choices.

Thank you for giving me memories like that, Sushma.

`,
image: "images/photo9.jpg"
},
{
text: `Sometimes I wanted to say things but never found the right words.
Thank you for being yourself. Never change that.`,
image: "images/photo10.jpg"
},
{
text: `sushma atleast try to be calm at me`,
image: "images/photo11.jpg"
},
{
text: `Your attitude, your energy, your presence—everything is uniquely you.`,
image: "images/photo12.jpg"
},
{
text: `No matter where life takes us, these memories will stay with me.`,
image: "images/photo13.jpg"
},
{
text: `Keep annoying me, keep roasting me, keep fighting with me, and remember I'm exist.`,
image: "images/photo14.jpg"
},
{
text: `I hope this year brings you happiness, success, and peace.`,
image: "images/photo15.jpg"
},
{
text: `I hope every dream you're working toward comes true.`,
image: "images/photo16.jpg"
},
{
text: `I hope you keep smiling the way you always do.`,
image: "images/photo17.jpg"
},
{
text: `I really wish that every item on your bucket list slowly becomes reality.`,
image: "images/photo18.jpg"
},
{
text: `Thank you for being part of my college journey. Happy 19th Birthday Madam Ji ❤️`,
image: "images/photo19.jpg"
}
];

let current = 0;

function startSurprise() {
document.getElementById("intro").style.display = "none";
document.getElementById("memorySection").style.display = "block";

const music = document.getElementById("bgMusic");
music.play();

showMemory();
}

function showMemory() {
document.getElementById("memoryText").innerText = memories[current].text;
document.getElementById("memoryImage").src = memories[current].image;
}

function nextMemory() {
    current++;

    if (current < memories.length) {
        showMemory();
    } else {
        document.getElementById("memorySection").style.display = "none";
        document.getElementById("finalPage").style.display = "block";

        const video = document.getElementById("birthdayVideo");
        video.play();
    }
}
