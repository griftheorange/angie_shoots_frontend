const API_DOMAIN = 'http://localhost:3000'

export default class Fetcher{

    static uploadImages(files){
        if(files && files.length > 0){
            let data = new FormData()
            for(let i = 0; i < files.length; i++){
                data.append('files[]', files[i])
                data.append('filenames[]', files[i].name)
            }
            return fetch(`${API_DOMAIN}/images`, {
                method:'POST',
                body:data
            })
            .then(r => r.json())
        }
    }

    static getImages(){
        return fetch(`${API_DOMAIN}/images`)
        .then(r => r.json())
    }
}