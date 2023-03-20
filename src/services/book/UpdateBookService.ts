import prismaClient from "../../prisma";

interface BookRequest{
  bookId: string;
  name:string,
  description:string
}

class UpdateBookService{
  async execute( {bookId,name,description}: BookRequest){
    const Book = await prismaClient.book.update({
      where:{
        id: bookId
      },
      data:{
        name:name,
        description: description
      }
    })

    return Book;

  }
}

export { UpdateBookService }