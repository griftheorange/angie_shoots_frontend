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

    static uploadImages(files){
        if(files && files.length > 0){
            let data = new FormData()
            for(let i = 0; i < files.length; i++){
                data.append('files[]', files[i])
                data.append('filenames[]', files[i].name)
            }
            return fetch(`${API_DOMAIN}/imagestest`, {
                method:'POST',
                body:data
            })
            .then(r => r.json())
        }
    }
}