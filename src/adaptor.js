const API_DOMAIN = 'http://localhost:3000'

export default class Fetcher{
    static uploadImage(file){
        if(file){
            let data = new FormData()
            data.append('file', file)
            data.append('filename', file.name)
            return fetch(`${API_DOMAIN}/images`, {
                method:'POST',
                body:data
            })
            .then(r => r.json())
        } else {
            return null
        }
    }
}