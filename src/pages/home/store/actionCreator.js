export const initHomeDatas = (eventEmitor) => {
    return {
        type: 'initHomeDatas',
        event: eventEmitor
    }
}

export const loadMoreArticle = () => {
    return {
        type: 'loadMoreArticle'
    }
}

export const toggleTopShow = (show) => {
    return {
        type: 'toggleTopShow',
        payload: show
    }
}