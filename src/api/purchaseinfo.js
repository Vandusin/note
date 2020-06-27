import axios from 'axios'

export default{

    list(){
        return new Promise((resolve, reject) => {
            axios.get('/api/purchase/list')
            .then(res =>{
                resolve(res)
            })
            .catch(err=>{
                reject(err)
            })
        })
    },

    save(data) {
        return new Promise((resolve, reject) => {
            axios.post('/api/purchase/save',data)
            .then(res => {
                resolve(res)
            })
            .catch((err) => {
                reject(err)
            })
        })
    },

    getById(id) {
        return new Promise((resolve, reject) => {
            axios.get('/api/purchase/'+id)
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
            axios.get('/api/purchase/del/'+id)
            .then(res => {
                resolve(res)
            })
            .catch((err) => {
                reject(err)
            })
        })
    }
}