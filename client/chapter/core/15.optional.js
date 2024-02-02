/* -------------------------- */
/* Optional Chaining          */
/* -------------------------- */


const portableFan = {
    maker: 'fromB',
    brand: 'FD221',
    type: 'neckband',
    photo: {
      static: 'https://bit.ly/3OS50UD',
      animate: 'https://bit.ly/3P8646q'
    },
    getFullName() {
      return `${this.brand}, ${this.maker}`;
    },
  };
  
  // 아래 코드는 문제가 있어 런타임 중 오류가 발생합니다.
//   console.log(portableFan.photos.animate);
  
  // 오류를 발생시키지 않으려면 아래와 같이 작성해야 합니다.
//   if ('photos' in portableFan) {
//     if ('animate' in portableFan.photos) {
//       console.log(portableFan.photos.animate);
//     }
//   }
  
  
  // 위 구문을 논리곱 연산자를 사용한 방식으로 변경해봅니다.
  
  portableFan && portableFan.photos && portableFan.photos.animate
  
  // 위 구문을 옵셔널 체이닝을 사용한 구문으로 변경해봅니다.
  
  portableFan.photos?.animate

  // 메서드 사용 시, 옵셔널 체이닝을 사용해봅니다.
  // 메서드 실행부 앞에 쓰면 해당 메서드가 있는지 없는지 확인 후 실행 
  
 const fullName = portableFan.getFullName?.();

 console.log( fullName ) 
 
 console.clear()
  
  // 객체의 프로퍼티 접근 시, 옵셔널 체이닝을 사용해봅니다.
  
  

  //web API 

  // sync (동기) & async(비동기)

//   const timer = setTimeout(() => {
//     console.log(2)
//   }, 3000)

//   clearTimeout(timer) 타이머 해제 

// let  count = 0;

// const timer = setInterval(() => {

//     console.log(++count)

// }, 1000)

// clearInterval(timer)


const button = document.querySelector('.click')

setTimeout(() => {
  
    const template = /* html */ `
      <button type="button" class="click">click</button>
    `
  
    document.body.insertAdjacentHTML('beforeend',template)
  
  
  }, 3000);


button?.addEventListener('click', ()=>{})