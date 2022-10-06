const password = document.getElementById('password');
const background = document.getElementById('background');


password.addEventListener('input', (e) => {
  const input = e.target.value;
  const length = input.length;
  const blurValue = 20 - length * 2;
  if(length ==0){
  	alert('Field should not be made empty!');
  }
  background.style.filter = `blur(${blurValue}px)`;
});

 