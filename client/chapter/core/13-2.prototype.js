/* ----------------------------- */
/* Classes                       */
/* ----------------------------- */

// 앞서 함수로 정의한 내용들을 class문법을 사용해 재정의 합니다.

//생성자 함수
function Ani(){

}

const _a = new Ani()


//constructor method는 최초 1회만 실행됨
// 만듦과 동시에 최초 1회만 작동

class Animal {

    constructor(){
        this.name = name;
        this.stomatch = [];
        this.legs = 4;
        this.tail = true;

    }

    getEat(){
        return this.stomatch
    }

    setEat(food){
        this.prey = food;
        this.stomatch.push(food)
    }

}

const a = new Animal('호돌이')


class Tiger extends Animal {
    constructor(name){
        super(name)
        this.pattern = '호랑이무늬'
    }

    static bark(){
        return '어흥'
    }

    hunt(target){
        return `${target}에게 조심히 접근한다`
    }
}

const 한라산호랑이 = new Tiger('한돌이')