module.exports={
    getInventory:(req,res)=>{
        const db = req.app.get('db')

        db.get_inventory().then(e=>{
            res.status(200).send(e)})
        .catch(err=>console.log(err))
    },
    addProduct:(req,res)=>{
        const db = req.app.get('db')
        console.log(req)
        const{name,price,img} = req.body
        

        db.add_product([name,price,img]).then(product=>{
            res.status(200).send(product.data)
        }).catch(err => {
            res.status(500).send(err)
        })
    },
    delete: (req,res)=>{
        const db = req.app.get('db')
        const {id} = req.params

        db.delete_product(id).then(()=>
        res.sendStatus(200))
        .catch(err => {res.status(500).send(err)}
        )
    },
    update: (req,res) => {
        const db = req.app.get('db')
        const {id} = req.params
        const {name,price,img} = req.body;

        db.update_product([name,price,img,id]).then(res => {
        res.status(200).send(res.data)
        })
        .catch(err=>{res.status(500).send(err)})
    }
    // delete:(req.res)=>{
    //     const db = req.app.get('db')
    //     const {id} = req.params

    //     db.delete_product(id).then(products=>{
    //         res.status(200).send(products)
    //     })
    // }
}