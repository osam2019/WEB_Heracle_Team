const state = {
  sex : 'male',
  age : 22,
  height: 184,
  weight: 84,
  waistCircumference: 86.36,
}
const getters = {
  BMI: function(state) {
    return (state.weight / Math.pow((state.height / 100) , 2)).toFixed(2)
  },
  ABSI : function(state, getters){
      return ((state.waistCircumference/100) / ( Math.pow(getters.BMI, 0.66) * Math.pow((state.height/100), 0.5) )).toFixed(3)
  },
  BMR : function(state){
    //   Men BMR = 66.4730 + (13.7516 x weight in kg) + (5.0033 x height in cm) – (6.7550 x age in years)
    //Women BMR = 655.0955 + (9.5634 x weight in kg) + (1.8496 x height in cm) – (4.6756 x age in years)
    if(state.sex === "male"){
        return (66.4730 + (13.5716 * state.weight) + (5.0033 * state.height ) - (6.7550 * state.age)).toFixed(0)
    }else{
        return (655.0955 + (9.5634 * state.weight) + (1.8496 * state.height) - (4.6756 * state.age)).toFixed(0)
    }
  }

}
const mutations = {
    refreshWeeklyData : function(state, payload){
        state.weight = payload.weight
        state.waistCircumference = payload.waistCircumference
    }

}
const actions = {

}

export default {
  state,
  mutations,
  actions,
  getters
}
