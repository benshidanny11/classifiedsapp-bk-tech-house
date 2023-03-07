const compare=( a, b ) =>{
    if ( a.name < b.name ){
      return -1;
    }
    if ( a.name > b.name ){
      return 1;
    }
    return 0;
  }
const  isANumber=(str)=>{
  return !/\D/.test(str);
}
  module.exports={compare,isANumber};