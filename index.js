const module = {
    prop: 'my prop',
    config: {
        languaje: 'es',
        cache: true,
    },
    setConfig: conf => {
        module.config = conf
    },
    isCacheEnabled: () => {
        console.log(module.config.cache ? 'yes' : 'no') 
    }
}

////////////////////module revelator//////////////////////
const result = (() =>{
    const x = {}
    return{
        a: ()=> console.log(x),
        b: (key, val) => x[key] = val        
    }
})()

//Api Public
result.a()
result.b('test', 'ok')
result.a()
//Api Private
console.log(result.x)
