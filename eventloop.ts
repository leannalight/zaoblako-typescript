// Event Loop -------------------

function callEventLoop(): void {

    console.log('Message 1');
    // setTimeout принимает функцию коллбэк в качестве 1-го параметра и время в мс в качестве 2-го параметра
    setTimeout(function() { 
    console.log('Message 2'); 
    }, 100); // выведет сообщение через 100 мс

    console.log('Message 3');
}

// callEventLoop();
// Браузер выведет в порядке:
// Message 1
// Message 3
// Message 2 (срабатывает event loop)

export default callEventLoop;

