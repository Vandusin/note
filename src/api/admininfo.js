import axios from 'axios'

const request = axios.create({baseURL:'http://39.108.147.203:9000'})

export default {


    //进货信息表
    liststockTable() {
        return new Promise((resolve, reject) => {
            request.get('/administrator/list/stockTable')
            .then(res => {
                resolve(res)
            })
            .catch((err) => {
                reject(err)
            })
        })
    },

    //出货信息表
    listshippingTable() {
        return new Promise((resolve, reject) => {
            axios.get('/administrator/list/shippingTable')
            .then(res => {
                resolve(res)
            })
            .catch((err) => {
                reject(err)
            })
        })
    },

    //管理员信息
    listadmin() {
        return new Promise((resolve, reject) => {
            axios.get('/administrator/list/administrator')
            .then(res => {
                resolve(res)
            })
            .catch((err) => {
                reject(err)
            })
        })
    },

    //供应商信息表
    listsupplier() {
        return new Promise((resolve, reject) => {
            axios.get('/administrator/list/supplier')
            .then(res => {
                resolve(res)
            })
            .catch((err) => {
                reject(err)
            })
        })
    },

    //客户信息表
    listcustomer(){
        return new Promise((resolve, reject) => {
            axios.get('/administrator/list/customer')
            .then(res => {
                resolve(res)
            })
            .catch((err) => {
                reject(err)
            })
        })
    },

    //个人信息
    listinformation(id){
        return new Promise((resolve, reject) => {
            axios.get(`/administrator/information/${id}`)
            .then(res => {
                resolve(res)
            })
            .catch((err) => {
                reject(err)
            })
        })

    },

    //form-data
    //row
    //data

    //管理员信息创建
    addAdministartor(){
    },

    //修改管理员信息
    updateAdministrator(){

    },

    //删除管理员信息
    deleteadmin(id){
        return new Promise((resolve, reject) => {
            axios.get('/administrator/delAdministrator'+id+status)
            .then(res => {
                resolve(res)
            })
            .catch((err) => {
                reject(err)
            })
        })
    },

    //创建供应商信息
    createSupplier(){

    },

    //修改供应商信息
    updateSupplier(){

    },

    //删除供应商信息
    deleteSupplier(){

    },

    //创建客户信息
    createCustomer(){

    },

    //修改客户信息
    updateCustomer(){

    },

    //删除客户信息
    deleteCustomer(){

    },
    getById(id) {
        return new Promise((resolve, reject) => {
            axios.get('/api/user/'+id, )
            .then(res => {
                resolve(res)
            })
            .catch((err) => {
                reject(err)
            })
        })
    },

    delete(id) {
        return new Promise((resolve, reject) => {
            axios.get('/api/user/del/'+id)
            .then(res => {
                resolve(res)
            })
            .catch((err) => {
                reject(err)
            })
        })
    }
}