const isInCollection = (state,collection) => {
    const photo = state.photosSelected.findIndex(item => item.id == collection.id)
    if(photo == -1){
        return false
    }else{
   
        return true 
    }
}

export {isInCollection}