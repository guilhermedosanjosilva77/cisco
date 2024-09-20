function calcular(){
    var k= 9000000
    var q=parseFloat(document.getElementById('q1').value)
    var q2=parseFloat(document.getElementById('q2').value)
    var d=parseFloat(document.getElementById('d').value)

    var força= (k* q * q2)/ (d*d)


    
    


    

    document.getElementById('força').innerText = força;
    
}

   





