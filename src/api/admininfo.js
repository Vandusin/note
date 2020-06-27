import axios from 'axios'

export default {

    liststockTable() {
        return new Promise((resolve, reject) => {
            axios.get('/administrator/list/stockTable')
            .then(res => {
                resolve(res)
            })
            .catch((err) => {
                reject(err)
            })
        })
    },

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

    listinformation(){


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