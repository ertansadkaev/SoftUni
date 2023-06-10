    function loginSystem(input) {
        const username = input[0];
        const correctPassword = username.split(``).reverse().join(``);
        let attempts = 0;
      
        for (let i = 1; i <= input.length; i++) {
            if (input[i] === correctPassword) {
            console.log(`User ${username} logged in.`);
            return;
          } else if (attempts == 3) {
            console.log(`User ${username} blocked!`);
            return;
          } else {
            attempts++;
            console.log('Incorrect password. Try again.');
          }
        }  
      }

loginSystem(['sunny','rainy','cloudy','sunny','not sunny']);