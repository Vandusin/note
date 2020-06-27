import axios from 'axios'

// const request = axios.create({baseURL: "http://39.106.196.110:9090"})

export default {

    list() {
        return new Promise((resolve, reject) => {
            axios.post('/api/shipping/list')
            .then(res =>{
                resolve(res)
            })
            .catch(err=>{
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

    save(data) {
        return new Promise((resolve, reject) => {
            axios.post('/api/shipping/save', data)
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
            axios.get('/api/shipping/' + id)
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
            axios.get('/api/shipping/del/' + id)
                .then(res => {
                    resolve(res)
                })
                .catch((err) => {
                    reject(err)
                })
        })
    }
}