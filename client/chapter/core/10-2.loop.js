/* -------------------- */
/* Do While Loop        */
/* -------------------- */

// let i =0;

// do {

//     console.log(i);

//     i++

// } while(i > 5);

// false로 적어도 최초 1회 실핼 이때 i는 1로 증가가 되어있음


// do ~ while 문 (역순환)
// - prompt 창을 띄워 사용자로 하여금 순환 횟수를 요청
// - 사용자로부터 요청된 횟수 만큼 역방향으로 순환 출력
// - 사용자로부터 요청된 횟수가 0보다 작을 경우, 
//   '최초 실행된 메시지입니다. 이 메시지는 조건이 거짓이어도 볼 수 있습니다.' 출력
// - 순환 중단

// let repeat = prompt('몇번 반복할까요?', 0)

// do {

// console.log(repeat)

// } while(repeat--)

// do ~ while 문 (순환)
// - 위 do ~ while 문을 순방향으로 순환되도록 설정        

let first = document.querySelector('.first');

// do {
//     first = first.nextSibling;

// } while(first.nodeType !== document.ELEMENT_NODE);

// console.log(first)

// 이때 실행 순서에 의해 아래있는 html을 읽기 전에 script가 실행됨 이때, queryselector에서 해당 클래스의 값을 바로 읽을 수 없기때문에 "null"로 표시 
// 여기서 defer는 script를 가장 나중에 실행해줌 

function next(node) {
    do {
        node = node.nextSibling; 
    } while(node.nodeType !== 1)

    return node;
}

const second = next(first);

console.log(second);

function prev(node) {

    if(typeof node === 'string'){
        node = document.querySelector(node);
      }

    do {
        node = node.previousSibling; 
    } while(node.nodeType !== 1)

    return node;
}

console.log(prev(document.querySelector('.second')))