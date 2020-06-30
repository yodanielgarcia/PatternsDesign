const Users = (() => {
    const resourse = '/users'

    return {
        list: async () => {
           await fetch(resourse).then(x => x.json())
        },
        create: async () => {
            return await fetch(resourse, {type:'POST', body: JSON.stringify(data)}).then(x => x.json())
        }
    }
})()