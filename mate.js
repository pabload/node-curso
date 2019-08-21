const mat = {


};
function add(x1,x2){
    return x1+x2;
} 
function substract(x1,x2){
    return x1-x2;
} 
function multiply(x1,x2){
    return x1*x2;
} 
function divide(x1,x2){
    if(x2==0){
        console.log("no se puede dividir por 0")
    }else{
        return x1/x2;
    }
} 

mat.add= add
mat.substract=substract;
mat.multiply=multiply;
mat.divide=divide;
function hello (name){
   console.log("hola"+name);
   return 0;
}

module.exports = mat;
/*exports.add= add;
exports.substract= substract;
exports.multiply= multiply;
exports.divide= divide;*/