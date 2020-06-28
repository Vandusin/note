import axios from 'axios'

export default{
    list() {
        return new Promise((resolve, reject) => {
            axios.post('/Customer/list')
                .then(res => {
                    resolve(res)
                })
                .catch(err => {
                    reject(err)
                })
            // 
            // request.post("/", { id: num, page: 10 })
            //     .then(res => {
            //         resolve(res)
            //     })
            //     .catch(err => {
            //         reject(err)
            //     })
            // 
            // request.get("/", { params:{ id: num, page: 10} })
            //     .then(res => {
            //         resolve(res)
            //     })
            //     .catch(err => {
            //         reject(err)
            //     })
        })
    },

    //个人信息显示
    information(id) {
        return new Promise((resolve, reject) => {
            axios.post(`/Customer/information/${id}`)
                .then(res => {
                    resolve(res)
                })
                .catch(err => {
                    reject(err)
                })
        })
    },


    //创建出货信息
    create() {
        return new Promise
    },

    //修改商品信息
    update() {
        return new Promise
    },

    //删除商品信息
    delete(id) {
        return new Promise((resolve, reject) => {
            axios.get('/Customer/del' + id)
                .then(res => {
                    resolve(res)
                })
                .catch((err) => {
                    reject(err)
                })
        })
    },
}