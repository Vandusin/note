import axios from 'axios'

const request = axios.create({baseURL: "http://39.108.147.203:9000"})

export default {

    list() {
        return new Promise((resolve, reject) => {
            request.get('/Supplier/list')
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
            request.post(`/Supplier/information`)
                .then(res => {
                    resolve(res)
                })
                .catch(err => {
                    reject(err)
                })
        })
    },

    updateinformation(information){
        return new Promise((resolve, reject) => {
            request.post(`/Supplier/updateInformation/1`,information)
                .then(res => {
                    resolve(res)
                })
                .catch(err => {
                    reject(err)
                })
        })
    },

    //创建进货信息
    create(info) {
        return new Promise((resolve, reject) => {
            request.post(`/Supplier/create/1`,info)
                .then(res => {
                    resolve(res)
                })
                .catch(err => {
                    reject(err)
                })
        })
    },

    //修改商品信息
    update(info) {
        return new Promise((resolve, reject) => {
            request.post(`/Supplier/update/1`,info)
                .then(res => {
                    resolve(res)
                })
                .catch(err => {
                    reject(err)
                })
        })
    },

    //删除商品信息
    delete(id) {
        return new Promise((resolve, reject) => {
            request.post(`/Supplier/del/${id}/1`)
                .then(res => {
                    resolve(res)
                })
                .catch((err) => {
                    reject(err)
                })
        })
    },

}