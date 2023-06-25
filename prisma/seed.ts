import { prisma } from '../src/config/database';

async function main(){
   await prisma.category.createMany({
        data: [
            {
                category: 'Padaria'
            },
            {
                category: 'Carnes'
            },
            {
                category: 'Frios e Laticínios'
            },
            {
                category: 'Bebidas'
            },
            {
                category: 'Limpeza'
            },
            {
                category: 'Higiene'
            },
            {
                category: 'Hortifruti'
            },
            {
                category: 'Pet Shop'
            },
            {
                category: 'Papelaria'
            },
            {
                category: 'Alimentos'
            }
        ]
    })
}

main()
.then(() => {
    console.log("Registros realizados com sucesso!")
})
.catch(e => {
    console.error(e)
    process.exit(1)
})
.finally(async () => {
    await prisma.$disconnect()
})