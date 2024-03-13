export async function GET(request){
    const savageExcuses = [
        {
          excuse: "Skipped the meeting because I'd rather watch paint dry than listen to your ideas.",
          use: "Explaining absence from a meeting."
        },
        {
          excuse: "Ignored your call because talking to you is like listening to a cat's funeral.",
          use: "Humorously explaining missed call."
        },
        {
          excuse: "Didn't finish the task because your instructions were as clear as mud.",
          use: "Explaining incomplete task with sarcasm."
        },
        {
          excuse: "Running late because I have better things to do than be on time for you.",
          use: "Humorously explaining tardiness."
        },
        {
          excuse: "Can't attend your party; I'm allergic to fake smiles.",
          use: "Declining a party invitation with a bite."
        },
        {
          excuse: "Missed the deadline because I prioritize real life over your deadlines.",
          use: "Explaining missed deadline with a sting."
        },
        {
          excuse: "Didn't read your email; the thought of it makes my brain cells weep.",
          use: "Humorously explaining unread email."
        },
        {
          excuse: "Not showing up to your event because my couch needs company more than you do.",
          use: "Declining an event invitation with a jab."
        },
        {
          excuse: "Task unfinished because I'd rather wrestle a crocodile than follow your orders.",
          use: "Explaining incomplete task with a bite."
        },
        {
          excuse: "Running late because I had to fight through a jungle of your self-importance.",
          use: "Humorously explaining tardiness with a sting."
        },
        {
          excuse: "Skipped the meeting because I have better things to do than entertain your ego.",
          use: "Explaining absence from a meeting with sarcasm."
        },
        {
          excuse: "Didn't return your call because I was too busy counting the tiles on my ceiling.",
          use: "Humorously explaining missed call."
        },
        {
          excuse: "Task incomplete because your instructions were more tangled than Christmas lights.",
          use: "Explaining incomplete task with sarcasm."
        },
        {
          excuse: "Running late because I value my time more than being punctual for you.",
          use: "Humorously explaining tardiness with a sharp edge."
        },
        {
          excuse: "Not attending your party; my goldfish needs a babysitter more than you need guests.",
          use: "Declining a party invitation with a punch."
        },
        {
          excuse: "Missed the deadline because I have a life outside of your unrealistic expectations.",
          use: "Explaining missed deadline with a bite."
        },
        {
          excuse: "Didn't read your email; it's probably safer for my sanity to remain ignorant.",
          use: "Humorously explaining unread email."
        },
        {
          excuse: "Not showing up to your event because I'm allergic to forced socialization.",
          use: "Declining an event invitation with a jab."
        },
        {
          excuse: "Task unfinished because your demands are as unreasonable as winning a lottery.",
          use: "Explaining incomplete task with a sting."
        },
        {
          excuse: "Running late because I had to dodge your phone calls like a ninja.",
          use: "Humorously explaining tardiness with a sting."
        },
        {
          excuse: "Skipped the meeting because I'd rather listen to nails on a chalkboard.",
          use: "Explaining absence from a meeting with sarcasm."
        },
        {
          excuse: "Ignored your call because I was busy counting the cracks in the pavement.",
          use: "Humorously explaining missed call."
        },
        {
          excuse: "Task incomplete because your instructions were more convoluted than a soap opera plot.",
          use: "Explaining incomplete task with sarcasm."
        },
        {
          excuse: "Running late because I had to navigate through a maze of your unreasonable demands.",
          use: "Humorously explaining tardiness with a sting."
        },
        {
          excuse: "Skipped the meeting because I'd rather wrestle a bear than sit through it.",
          use: "Explaining absence from a meeting with sarcasm."
        },
        {
          excuse: "Ignored your call because my ears were too busy enjoying the sound of silence.",
          use: "Humorously explaining missed call."
        },
        {
          excuse: "Task incomplete because I had to fend off your interruptions like a pro wrestler.",
          use: "Explaining incomplete task with sarcasm."
        },
        {
          excuse: "Running late because I value my sleep more than I value punctuality for you.",
          use: "Humorously explaining tardiness with a bite."
        },
        {
          excuse: "Skipped the meeting because I'd rather count the blades of grass in my lawn.",
          use: "Explaining absence from a meeting with sarcasm."
        },
        {
          excuse: "Ignored your call because I was busy admiring the wallpaper patterns.",
          use: "Humorously explaining missed call."
        }
      ];

        const randomExcuse = savageExcuses[Math.floor(Math.random() * savageExcuses.length)];
        console.log(randomExcuse+"see")
        return new Response(JSON.stringify(randomExcuse));
    }