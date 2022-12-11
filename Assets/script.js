function _(num) {
    document.getElementById("res").value += num;
    var num = [0,1,2,3,4,5,6,7,8,9]

}
   function clr(){
       document.getElementById("res").value = "";
   }
   function solve(){
    var x = document.getElementById("res").value;
    var y = eval(x)
       document.getElementById("res").value = y
   }
   function back() {
   var value = document.getElementById("res").value;
   document.getElementById("res").value = value.substr(0, value.length - 1);
}