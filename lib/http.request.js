import axios from 'axios'
export class ApiCall {
    constructor(url, authorization) {
        this.url = url
        this.authorization = authorization
    }

    async getData(path) {
        try {
            const res = await axios.get(this.url + path, {
                headers: {
                    Authorization: this.authorization
                },
            })

            if (res.status !== 200) throw new Error('Something went wrong')
            return res.data
        } catch (e) {
            throw new Error(e.message)
        }
    }

}