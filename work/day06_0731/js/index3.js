// 구구단 만들기

let dan ;
let su ;
let result;

document.writeln(`<div class="container">`);
for( dan = 2; dan < 10; dan++ ){
    document.writeln(`<div class="times">`);
    document.writeln(`<h2>${dan}단</h2>`);
    for(su = 1; su < 10; su++){
        result = dan * su;
        document.writeln(`<p>${dan} X ${su} = ${result}</p>`);
    }
        document.writeln(`</div>`);
}
document.writeln(`</div>`);