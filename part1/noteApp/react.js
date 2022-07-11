console.log('this is index.js')
const Myh1 =()=>{
    return React.createElement('h1',{},'This is from REACT H1 Componet')

}
const App =()=> {
    return React.createElement('div',{},[Myh1(),Myh1(),Myh1()])

}
ReactDOM.render(App(),document.querySelector('#root')) ///render dispaly/load garxa