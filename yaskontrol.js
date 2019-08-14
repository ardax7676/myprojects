function yasKontrol(yas){
    if(yas < 18){

    return "Yaşınız küçük";
        
    }
    return "Yaşınız uygun. Hoşgeldiniz!";

}
yasKontrol(18);

function iddiaOranKontrol(oran){

if (oran !== 2.0){

    return "oran 2 değil";
}
    return "oran 2";

}
document.write(iddiaOranKontrol(2));