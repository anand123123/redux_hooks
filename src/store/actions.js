export const incrementCounter = (payload) => ({
    type: 'INCREMENT',
    payload: {
        id: payload
    }
})