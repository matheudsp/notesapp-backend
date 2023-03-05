import prismaClient from "../../prisma";

interface BookRequest{
    name:string;
    description: string;
    authorId: string;
} 

class CreateBookService{
    async execute({name, description, authorId }: BookRequest){
        
        if(name === ''){
            throw new Error("Por favor, coloque um nome")
        }


        const book = await prismaClient.book.create({
            data:{
                name:name,
                description:description,
                authorId: authorId
            }})

        return book;
    }
}

export { CreateBookService }