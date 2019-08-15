const firstName = document.getElementById('first_name'),
      lastName = document.getElementById('last_name'),
      phoneNuber = document.getElementById('phone_number'),
      btnSms = document.getElementById('btn_sms'),
      textInput = document.getElementById('text_input'),
      response = document.querySelector('.response');
      

btnSms.addEventListener('click', send, false);

const socket = io();
socket.on('smsStatus', function(data){
  response.innerHTML = '<h5>Text message sent to ' + data.number+ '<h5>';
})

function send() { 
  const number = phoneNuber.value.replace(/\D/g, '');
  const text = textInput.value; 

  fetch('/', {
      method: 'post',
      headers: {
          'Content-type': 'application/json'
      },
      body: JSON.stringify({number: number, text: text})
  })
  .then(function(res){
      console.log(res);
  })
  .catch(function(err){
    console.log(err);
  });
}

