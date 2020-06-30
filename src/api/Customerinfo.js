import axios from 'axios'

const request = axios.create({baseURL:'http://39.108.147.203:9000'})

export default{
    list() {
        return new Promise((resolve, reject) => {
            request.get('/Customer/list')
                .then(res => {
                    resolve(res)
                })
                .catch(err => {
                    reject(err)
                })
        })
    },

    //个人信息显示
    information() {
        return new Promise((resolve, reject) => {
            request.post('/Customer/information')
                .then(res => {
                    resolve(res)
                })
                .catch(err => {
                    reject(err)
                })
        })
    },


    //创建出货信息
    create(info) {
        return new Promise((resolve, reject) => {
            request.post(`/Customer/create/2`, info)
                .then(res => {
                    resolve(res)
                })
                .catch((err) => {
                    reject(err)
                })
        })
    },

    //修改商品信息
    update(info) {
        return new Promise((resolve, reject) => {
            request.post(`/Customer/update/2`, info)
                .then(res => {
                    resolve(res)
                })
                .catch((err) => {
                    reject(err)
                })
        })
    },
    
    //修改个人信息
    updateinformation(info){
        return new Promise((resolve, reject) => {
            request.post(`/Customer/updateInformation/2`, info)
                .then(res => {
                    resolve(res)
                })
                .catch((err) => {
                    reject(err)
                })
        })
    },

    //删除商品信息
    delete(id) {
        return new Promise((resolve, reject) => {
            request.post(`/Customer/del/${id}/2`)
                .then(res => {
                    resolve(res)
                })
                .catch((err) => {
                    reject(err)
                })
        })
    },
}