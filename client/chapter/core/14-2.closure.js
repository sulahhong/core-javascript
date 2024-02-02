function earth(){

    let water = true;
  
    let apple = {
      founder:'Steve Jobs',
      ceo:'Tim Cook',
      product: ['iphone','macbook','macStudio','appleWatch']
    }
  
    return function (value){
      water = value
      // return apple
    }
  }
  
  const UFO = earth()
  
   
  UFO(0)


  //어디에 쓰는 것인가?

  const first = document.querySelector('.first')

//   let isClicked = false; // 전역이 오염됨 


  function handleClick(){

    let isClicked = false; // 한번 사용 후 가비지로 수집됨 => 클로저
  
    
    return () => {

        if(!isClicked){
            document.body.style.background = 'orange'
        } else {
            document.body.style.background = 'white'
        }
       
        isClicked = !isClicked

    } // 실행 안됨 왜? 

  }
  
  first.addEventListener('click',handleClick())


function state(initValue){
    let value = initValue

    function read(){
        return value
    }

    function write(newValue){
        value = newValue
    }

    return [read, write]
}


const [read, write] = state(111)