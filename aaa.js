let oi = document.getElementById("oi");

oi.addEventListener("click",function(){
    let an = document.getElementsByClassName("an");
    an[0].src ="nozomi.jpg";
     
})


let nashiko = document.getElementById("nashiko");

nashiko.addEventListener("click",function() {
    let hero = document.getElementsByClassName("hero");
    let mizugi = document.getElementsByClassName("mizugi");
    hero[0].src="h.jpg";
    mizugi[0].src="h2.jpg";
})

let aList = document.getElementsByTagName('a');
for (let i = 0; i < aList.length; i++) {
  let a = aList.item(i);
  
  if (a.textContent == '新規登録') {
    a.href = 'https://nexseed.net/inquiry/apply/';
  } else if (a.textContent == "女優一覧") {
    a.href = "https://www.google.com/search?q=%E3%82%AC%E3%82%AF%E3%83%88&source=lnms&tbm=isch&sa=X&ved=0ahUKEwjdo-SW3aDkAhXVBIgKHUFdDlYQ_AUIESgB&biw=1536&bih=722";
  } else if (a.textContent == '価格一覧') {
    a.href = 'https://www.wantedly.com/companies/nexseed/post_articles/178490?fbclid=IwAR168-0qZ2AT15XYWN6SSJi021jcQYt25NeWoAFadlx3lLsFM_mflM0KxMo';
  }else if (a.textContent == "今なら無料で見放題") {
    a.href ="https://www.instagram.com/asukakiraran/?hl=ja"
  }
}

let enako1 = document.getElementById("enako");

enako1.addEventListener("click",function() {
    let enako1 = document.getElementsByClassName("enako1");
    let enako2 = document.getElementsByClassName("enako2");
    enako1[0].src="enako3.jpg";
    enako2[0].src="uedamisao.jpg";
    this.innerHTML = "上田みさお"
})

let ai= document.getElementById("ai");

ai.addEventListener("click",function(){
    let aii = document.getElementsByClassName("aii");
    aii[0].src="masami.jpg";
     
})

let ui= document.getElementById("ui");

ui.addEventListener("click",function(){
    let uii = document.getElementsByClassName("uii");
    uii[0].src="braz.jpg";
     
})

let ei= document.getElementById("ei");

ei.addEventListener("click",function(){
    let eii = document.getElementsByClassName("eii");
    eii[0].src="kan.jpg";
     
 })