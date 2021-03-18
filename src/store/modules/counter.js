import axios from "axios"

export default{
    state:{
        counter :0
    },
    mutations:{
        addCounter(state, responsedata) {
            state.counter += responsedata
            },
        subCounter(state, responsedata) {
            state.counter -= responsedata
        }
    },
    actions:{
        increaseCounter({ commit}) {
            console.log('action increse counter')
            axios(
                ' https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new'
                ).then(response => {
                commit('addCounter',response.data)
                })
        },
        decrementCounter({ commit}) {
            console.log('action DECRESE counter')
            axios(
            ' https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new'
            ).then(response => {
                commit('subCounter',response.data)
            })
        }
        
    }

}