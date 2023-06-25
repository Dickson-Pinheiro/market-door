import categoryRepository from "../repository/categoryRepository"

async function getCategories(){
    try {
        return await categoryRepository.getCategories()
    } catch (error) {
        throw error
    }
}

const categoryService = {
    getCategories
}

export default categoryService