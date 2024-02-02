/* ---------------- */
/* For In Loop      */
/* ---------------- */

const js = {
  creator: 'Brendan Eich',
  createAt: '1995.05',
  standardName: 'ECMAScript',
  currentVersion: 2023,
  hasOwnProperty(){
    return '내가 누굴까~?'
  }
};

Object.prototype.nickName = 'tiger';

// 객체의 속성(property) 포함 여부 확인 방법

const key = 'creator';

//   console.log( key in js)

// - 모든 객체가 사용 가능하도록 속성이 확장되었을 때 포함 여부 결과는?

//  자바스크립트는 hasOwnProperty를 보호해주지 않음
// 생성된 객체의 method는 불안함, => 진짜 객체의 능력을 빌려씀
// 메서드 빌려쓸때에는 .call (빌려쓰는 대상(this), 인수값)

//  console.log( js.hasOwnProperty(key)) <= 위험한 코드

console.log(Object.prototype.hasOwnProperty.call(js, key));

// 객체 자신의 속성인지 확인하는 방법
// - "자신의 속성을 가지고있는지 확인 방법"이 덮어쓰여질 수 있는 위험에 대처하는 안전한 방법은?

// for ~ in 문
// - 객체 자신의 속성만 순환하려면?
// - 배열 객체 순환에 사용할 경우?

console.clear();

for (let key in js) {
  if (Object.prototype.hasOwnProperty.call(js, key)) {
    // 1. key = 'creator'  console.log(key);
    // 2. key = 'createAt'  console.log(key);
    // 3. key = 'createAt'  console.log(key);
    console.log(key);
  }
}
