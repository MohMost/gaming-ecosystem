import { PrismaClient } from '@prisma/client';
import { create } from 'domain';
import { connect } from 'http2';
const prisma = new PrismaClient();

const seedGames = async () => {
  const user = await prisma.user.findFirst({
    where : {
      id : "clrpaj1bv0000jgo3nrijkc8g",
      role : "USER"
    }
  })
  if(user){
    await prisma.bucketListGame.create({
    data: {
      title: "Mincraft",
      category: ["sandbox", "multiplayer"],
      addedAt : new Date(),
      gameCover : "https://upload.wikimedia.org/wikinews/en/7/7a/Minecraft_game_cover.jpeg",
      addedBy: {
        connect :{
       id : user.id
      }},
      links : {
        createMany : {
          data : [
            {
              title : "mincraft forge setup guide",
              link : "https://www.google.com",
              
            }
          ]
        }
      }
    },
  })
  }
  
  

};
      
seedGames()
  .catch((e) => {
    console.error(e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
