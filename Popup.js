function checkJavaScriptLoad() {
  var script = document.createElement('script');
  script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';

  script.onload = function() {
    // Do nothing if the script loads successfully
  };
  script.onerror = function() {
    showBlackout();
  };
  document.head.appendChild(script);
}

function showBlackout() {
  // Clear existing body content
  document.body.innerHTML = '';

  // Set body background color to black
  document.body.style.backgroundColor = 'black';
  document.body.style.color = 'white';
  document.body.style.display = 'flex';
  document.body.style.justifyContent = 'center';
  document.body.style.alignItems = 'center';
  document.body.style.height = '100vh';
  document.body.style.margin = '0';
  document.body.style.fontFamily = 'Arial, sans-serif';

  // Create a div to hold the message

  var messageDiv = document.createElement('div');
  messageDiv.textContent = 'Trang web này duy trì bằng quảng cáo. Nếu bạn thấy nội dung hữu ích, vui lòng tắt chặn quảng cáo ! Xin cảm ơn.';
  messageDiv.style.fontSize = '20px';
  messageDiv.style.textAlign = 'center';

  // Append the message to the body
  document.body.appendChild(messageDiv);
}

checkJavaScriptLoad();
