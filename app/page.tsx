import { Button } from "../components/ui/button";
import prisma from "../lib/prisma";
export default async function Home() {
  const games = await prisma.bucketListGame.findMany({
    include: {
      links: true,
      addedBy: true,
    },
  });

  return (
    <>
      <header className="h-screen flex flex-col justify-end  bg-[url('/header.png')] bg-cover bg-center bg-no-repeat">
        <div className="z-1  ml-32 ">
          <h1 className=" text-left 2xl:text-8xl text-6xl  text-white font-extrabold italic ">
            THE ULTIMATE
            <br />
            BUCKET LIST !
          </h1>
          <Button className="z-20 mt-4 italic font-bold">SE CONNECTER</Button>
        </div>
        <svg
          className="z-0 w-full pb-0 bottom-0"
          width="100%"
          height="40%"
          viewBox="0 0 1920 350"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M0 231.566L1085.5 208.939L1284 141.061L1524.5 158.384L1920 0V319.242H0V231.566Z"
            fill="hsl(var(--primary))"
            fill-opacity="0.6"
          />
          <path
            d="M0 250.657L1060.5 235.455L1284 171.818H1528.5L1920 30.7576V350H0V250.657Z"
            fill="hsl(var(--background))"
          />
        </svg>
      </header>
      <main className="flex flex-wrap px-32">
        <section>
          <h2 className="text-4xl font-bold italic text-center">Concept</h2>
          <div>
            <div className="flex  w-auto gap-auto justify-between md:justify-evenly 2xl:mx-32 ">
              <div
                className="  w-2/5 p-auto h-56 text-white my-10 p-10 bg-primary"
                style={{
                  clipPath:
                    "polygon(6% 0, 96% 14%, 100% 20%, 100% 95%, 94% 100%, 6% 100%, 0 95%, 0 5%)",
                }}
              >
                <h3 className="text-2xl text-center my-2 font-bold">
                  Global Bucket List
                </h3>
                <p className="xl:text-xl">
                  Users can add video games, movies, series, and anime to a
                  shared bucket list that everyone can contribute to.
                </p>
              </div>
              <div
                className=" w-2/5 h-56 p-auto text-white bg-primary my-10 p-10"
                style={{
                  clipPath:
                    "polygon(5% 16%, 94% 0, 100% 7%, 100% 95%, 94% 100%, 6% 100%, 0 95%, 0 24%)",
                }}
              >
                <h3 className="text-2xl text-center my-2 font-bold">
                  Personal Lists
                </h3>
                <p className="xl:text-xl">
                  Users have the option to create personal lists where they can
                  curate their own selection of items from the global bucket
                  list.
                </p>
              </div>
            </div>
            <div className="flex  w-auto gap-auto justify-between md:justify-evenly 2xl:mx-32 ">
              <div
                className="  w-2/5 p-auto h-56 text-white p-7 bg-primary"
                style={{
                  clipPath:
                    "polygon(5% 0, 94% 0, 100% 7%, 100% 83%, 94% 90%, 5% 100%, 0 93%, 0 8%)",
                }}
              >
                <h3 className="text-2xl text-center my-2 font-bold">
                  Yearly Lists
                </h3>
                <p className="xl:text-xl">
                  Users can set yearly goals by creating lists for specific
                  years, like planning to play a certain number of video games
                  in 2024.
                </p>
              </div>
              <div
                className=" w-2/5 h-56 p-auto text-white bg-primary p-7"
                style={{
                  clipPath:
                    "polygon(5% 0, 94% 0, 100% 7%, 100% 95%, 94% 100%, 4% 90%, 0 84%, 0 8%)",
                }}
              >
                <h3 className="text-2xl text-center my-2 font-bold">
                  Customization
                </h3>
                <p className="xl:text-xl">
                  The platform allows users to customize their lists, track
                  their progress, and interact with others who share similar
                  interests.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* {games.map((game) => (
          <Card key={game.id} className="w-1/4 m-5 rounded-2xl overflow-hidden">
            <Image
              src={game.gameCover}
              alt={game.title}
              width={300}
              height={300}
              className="w-full h-full p-0 object-cover"
            />
          </Card>
        ))} */}
      </main>
    </>
  );
}
