let userEmail = prompt('Please, enter your email: ');

const userE = 'user@gmail.com';
const adminE = 'admin@gmail.com';
const userP = 'UserPass';
const adminP = 'AdminPass';
const emLen = 5;
const pwLen = 6;

if (userEmail === '' || userEmail === null) {
    alert('Canceled');
} else if (userEmail.length <= emLen) {
    alert('I don`t know any emails having name length less than 5 symbols');
} else {
    let passW;
    if (userEmail === userE || userEmail === adminE) {
        passW = prompt('Please, enter password: ');
        if (passW === null || passW === '') {
            alert('Canceled');
        } else if (userEmail === userE && passW === userP || userEmail === adminE && passW === adminP) {
            let confirmation = confirm('Do you want to change your password?');
            let pwChange1;
            let pwChange2;
            let pwChange3;
            if (confirmation === false) {
                alert('You have failed the change.')
            } else {
                pwChange1 = prompt('enter your old password: ');
                if (pwChange1 === null || pwChange1 === '') {
                    alert('Canceled');
                } else if (userEmail === userE && pwChange1 === userP || userEmail === adminE && pwChange1 === adminP) {
                    pwChange2 = prompt('Enter new password');
                    if (pwChange2 === '') {
                        alert('Canceled');
                    } else if (pwChange2.length <= pwLen) {
                        alert('It’s too short password. Sorry.');
                    } else {
                        pwChange3 = prompt('Repeat new password: ');
                        if (pwChange3 === pwChange2) {
                            alert('You have successfully changed your password.');
                        } else {
                            alert('You wrote the wrong password.');
                        }
                    }
                }
            }
        } else {
            alert('Wrong password');
        }
    } else {
        alert('I don’t know you');
    }
}