import * as repository from '../repository/products.js'

// 전체 상품 조회
export const getAll = async(req,res,next)=>{
    const products = await repository.getAll();
    res.json(products)
}

// 상세 정보 조회
export const getDetaill = async(req,res,next)=>{
    const product = await repository.getDetaill(req.params.pid);
    console.log(product);
    
    res.json(product)
}
