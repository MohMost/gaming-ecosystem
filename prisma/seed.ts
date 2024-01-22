import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const seedGames = async () => {
  await prisma.user.create({
    data : {
      email: 'mohmost@example.com',
      passeword: '12345',
      userName : 'mohmost',
      addedGames : {
        createMany :{ 
             data : [ {
                title : 'marvelous',
                gameCover : "https://images.igdb.com/igdb/image/upload/t_cover_big/co1zj2.jpg",
          },
          {
                title : 'monster hunter',
                gameCover : "https://images.igdb.com/igdb/image/upload/t_cover_big/co1zj2.jpg",
      }
        ]
      }
        }
      }
  })
};
      
seedGames()
  .catch((e) => {
    console.error(e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
