const BASE_URL = 'http://localhost:3001'

const getEventTokenById = (tokenId: number) => {
    return fetch(`${BASE_URL}/getEventToken/${tokenId}`)
        .then(res => res.json())
        .catch(err => console.log(err, "errors"))
}

const getEventTokens = () => {
    return fetch(`${BASE_URL}/getEventTokens`)
        .then(res => res.json())
        .catch(err => console.log(err, "errors"))
}

const getEventTokenByEventId = (eventId: number) => {
    return fetch(`${BASE_URL}/getEventTokenByEventId/${eventId}`)
        .then(res => res.json())
        .catch(err => console.log(err, "error"))
}

const getConsumersEventTokens = (eventId: number, consumerId: number) => {
    return fetch(`${BASE_URL}/getConsumerEventTokens/${eventId}/${consumerId}`)
        .then(res => res.json())
        .catch(err => console.log(err, "errors"))
}

const getArtistsEventTokens = (artistId: number) => {
    return fetch(`${BASE_URL}/getArtistEventTokens/${artistId}}`)
        .then(res => res.json())
        .catch(err => console.log(err, "errors"))
}

export { getEventTokenById, getEventTokens, getConsumersEventTokens, getArtistsEventTokens, getEventTokenByEventId }