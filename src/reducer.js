let initialState = {
    images:[],
    fileList:[]
}

export default function(state=initialState, action){
    switch(action.type){
        case 'SET_IMAGES':
            return {...state, images:action.value}
        case 'ADD_IMAGES':
            let newAddedImages = [...state.images]
            for(let i = 0; i < action.value.length; i++){
                newAddedImages.push(action.value[i])
            }
            return {...state, images:newAddedImages}
        case 'SET_FILE_LIST':
            return {...state, fileList:action.value}
        case 'APPEND_FILE_LIST':
            let newAppendedList = [...state.fileList]
            newAppendedList.push(action.value)
            return {...state, fileList:newAppendedList}
        case 'DELETE_FILE_FROM_LIST':
            let newDeletedList = [...state.fileList]
            for(let i = 0; i < state.fileList.length; i++){
                if(state.fileList[i].name === action.value){
                    newDeletedList.splice(i, 1)
                    break
                }
            }
            return {...state, fileList:newDeletedList}
        default:
            return state
    }
}