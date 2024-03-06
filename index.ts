import { PrismaClient } from "@prisma/client";
import { log } from "console";

const prisma = new PrismaClient()

async function main() {
  // const user = await prisma.user.create({
  //   data: {
  //     name: "josey",
  //     email: "ewijosepha@gmail.com"
  //   }
  // })

  //   to get all users

  // const users = await prisma.user.findMany({
  //   include: {
  //     articles: true,
  //   }
  // })

  // console.log(users);

  //create an article an associate it with user

  // const article = await prisma.article.create({
  //   data: {
  //     title: "joseys first article",
  //     body: "this is her first article",
  //     author: {
  //       connect: {
  //         id: 1
  //       }
  //     }
  //   }
  // })

  // console.log(article);

  const articles = await prisma.article.findMany()
  console.log(articles);


  //create a user an article an associate  them

  //   const user = await prisma.user.create({
  //     data: {
  //       name: "sarah",
  //       email: "sarah@mail.com",
  //       articles: {
  //         create: {
  //           title: "sarahs first article",
  //           body: "writting makes more profficient"
  //         }
  //       }
  //     }
  //   })

  //create another article

  // const article = await prisma.article.create({
  //   data: {
  //     title: "simple article",
  //     body: "this is a sample article",
  //     author: {
  //       connect: {
  //         id: 2
  //       }
  //     }
  //   }
  // })
  // console.log(article);

  //looping over articles and users

  // users.map((user)=>{ 
  //   console.log(`User: ${user.name}, Email: ${user.email}`);
  //   const newarticles = user.articles
  //   newarticles.map((article)=>{
  //     console.log(`Title: ${article.title} Body: ${article.body}`);
  //     console.log('\n');

  //   })
  //  })

  //update data

  // const user = await prisma.user.update({
  //   where: {
  //     id: 1,
  //   },
  //   data: {
  //     name: "joshuadj"
  //   }
  // })

  // console.log(user);

  // remove data
  const article = await prisma.article.delete({
    where: {
      id: 2,

    }
  })

  console.log(article);
  

}


main().then(async () => {
  await prisma.$disconnect()
}).catch(async (e) => {

  console.error(e)
  await prisma.$disconnect()
  process.exit(1)
})