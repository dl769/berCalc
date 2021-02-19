
$(document).ready(()=>{

console.log('załadowano');

$('.btnLicz').on("click",()=> {
    let q = document.getElementById('q').value;
    console.log(q);
    let iloscDanych = document.getElementById('ilo').value;
    let poleOkna = document.getElementById('pole').value;
    let w = document.getElementById('w').value;
    let pp = document.getElementById('pp').value;
    let nag = document.getElementById('nag').value;
    let liczbaWymRamek = (iloscDanych*1000)/poleOkna;
    liczbaWymRamek = Math.ceil(liczbaWymRamek); //zaokr do gory

    w= parseFloat(w)
    pp= parseFloat(pp)
   
    // q = parseFloat(q);
    // iloscDanych = parseFloat(iloscDanych)
    // poleOkna = parseFloat(poleOkna)
    // nag = parseFloat(nag)
    // liczbaWymRamek = parseFloat(liczbaWymRamek)

    let tx = Math.pow(10,4);
    tx = parseFloat(tx)
    let t0 = Math.ceil(tx/q/8) ;
    console.log(t0);
    t1 = poleOkna+nag;
    let t2 = (t0/t1);
    console.log(t2,'ppp');
    t2 = t2*100/10;
    console.log(t2,'ppp');
    let przeklCo =  Math.ceil(t2)
    przeklCo = parseFloat(przeklCo)
    window.alert('liczba r do wysłania' + liczbaWymRamek + " przelamanie co " + przeklCo)
    

    liczRamki(liczbaWymRamek,przeklCo,pp, w, poleOkna)
});

});

function liczRamki(liczbaWymRamek,b,pp,w, poleOkna){
let iloscR =0, iloscPrawidlowych=0;
let przeklamArr = [];
przeklamArr.push(pp)
console.log(pp,w);
let temp0;
for (let i=1;i<50;i++) {
    console.log(pp,w,i);
    console.log(w*i);
    temp0 = b*i;
    temp1 = pp + temp0 ;
    console.log('=>temp0',pp,w,i,temp0,temp1)
    przeklamArr.push(temp1)
}

console.log(przeklamArr);

    // do{
    //     for (let i=1;i<=w;i++){
    //         iloscR= iloscR+1;
    //         il=il+1;
    //     }
    //     // if(pp<=w){
    //     //     il=il-(w-pp)
    //     // }
    //     console.log(iloscR,il);
    // }while(il!=liczbaWymRamek)
let c = 0;
    do{c++; 
    let i=1;
    for (i=1; i<=w;i++) //w=wielkosc okna
    {
        iloscR= iloscR+1;
        //iloscPrawidlowych = iloscPrawidlowych + 1;
    }
    
    let jesliBezPrzeklaman = w;
    let d=0;
    for (let j=w-1; j>=0;j--){
        if(przeklamArr.includes(iloscR-j)){
            console.log('PRZEKLAMANIE NA RAMCE', iloscR-j);
            
            iloscPrawidlowych = iloscPrawidlowych + w-j-1;

            jesliBezPrzeklaman = 0;
        }else{
            d++;
        }
        if(d==w){
            iloscPrawidlowych = iloscPrawidlowych+jesliBezPrzeklaman;
        }
    } 



    console.log('ilosc praw:',iloscPrawidlowych)

console.log('ccccc',c);
    if (iloscPrawidlowych==liczbaWymRamek) {
        
        for (let j=w-1; j>=0;j--){
            if(przeklamArr.includes(iloscR-j)){
                console.log('43543543PRZEKLAMANIE NA RAMCE', iloscR-j,j);
                
                iloscR = iloscR -j-1;
        }
    } 
        
        break;}

    
    console.log(iloscPrawidlowych,liczbaWymRamek)
}while(iloscPrawidlowych!=liczbaWymRamek && c!=100)

console.log('il praw', iloscPrawidlowych);
console.log('liczba ramek', iloscR);
console.log('--')

    let ar2=[];
    let txt = '';
    let txt2='';
    for (let i=1;i<iloscR+1;i++){
        ar2.push(i);
        if (przeklamArr.includes(i)){
            console.log("TU",i);
            txt = txt + `<b style="color:red">${i}</b>, `
            txt2 = txt2  + `<div class="arrowL"></div>`;
        }else{
            txt = txt + `<a>${i}</a>, `;
            txt2 = txt2  + `<div class="arrowR"></div>`;
        }
        if(i%w==0) txt2 = txt2  + '________<br><br>';

    }

    let txt3 = '<h3>Liczba prawidłowych ramek: ' +iloscPrawidlowych+'<br>';
    txt3 += '<h3>Liczba ramek ogółem '+iloscR+'<br>'
    const przeklamanieramek = iloscR-iloscPrawidlowych
    txt3 += '<h3>Przekłamanie :'+iloscR+' - '+iloscPrawidlowych+' = '+przeklamanieramek+'<br>'
    const narzut = przeklamanieramek*poleOkna;
    txt3 += '<h3>Narzut protokołu :'+przeklamanieramek+' * '+ poleOkna +' = ' + narzut + '[kB]<br>';
    console.log(txt2);

    $('.outputDiv2').html(txt);
    $('.outputDiv').html(txt3);
    $('.arrows').html(txt2);
}
/* 
    <span class="arrow arrow-bar is-right"></span>
    <span class="arrow arrow-bar is-left"></span>
*/
