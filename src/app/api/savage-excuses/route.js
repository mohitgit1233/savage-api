export async function GET(request){
    const savageExcuses = [
        {
          excuse: "Skipped the meeting because I'd rather watch paint dry than listen to your ideas.",
          use: "Explaining absence from a meeting."
        },
        {
          excuse: "Ignored your call because talking to you is like listening to a cat's funeral.",
          use: "Humorously explaining missed call."
        }
      ];

        const randomExcuse = savageExcuses[Math.floor(Math.random() * savageExcuses.length)];
        console.log(randomExcuse+"see")
        return new Response(JSON.stringify(randomExcuse));
    }