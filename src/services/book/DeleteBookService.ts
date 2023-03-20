import prismaClient from "../../prisma";

interface BookRequest{
  bookId: string;
}

class DeleteBookService{
  async execute( {bookId}: BookRequest){
    const book = await prismaClient.book.delete({
      where:{
        id: bookId
      }
    })

    return book;

  }
}

export { DeleteBookService }