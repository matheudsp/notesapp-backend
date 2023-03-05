import prismaClient from "../../prisma";

interface BookRequest{
    authorId: string
}

class ListBookService{
    async execute({authorId}: BookRequest){
        const book = await prismaClient.book.findMany({
            where:{
                authorId: authorId
            },
            select:{
                name: true,
                updatedAt: true,
                authorId: true

            }
        })

        return book;
    }
}

export { ListBookService}