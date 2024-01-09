function followers(input) {
 
    let obj = {};
 
    for (let el of input) {
        if (el === 'Log out') {
            break;
        }
 
        let [command, name, count] = el.split(': ');
        count = Number(count);
 
        switch (command) {
            case 'New follower':
                if (!obj[name]) {
                    obj[name] = { like: 0, comment: 0 };
                }
                break;
            case 'Like':
                if (!obj[name]) {
                    obj[name] = { like: count, comment: 0 };
                } else {
                    obj[name].like += count;
                }
                break;
            case 'Comment':
                if (!obj[name]) {
                    obj[name] = { like: 0, comment: 1 };
                } else {
                    obj[name].comment += 1;
                }
                break;
            case 'Blocked':
                if (!obj[name]) {
                    console.log(`${name} doesn't exist.`);
                } else {
                    delete obj[name];
                }
                break;
        }
    }
 
    console.log(`${Object.entries(obj).length} followers`);
 
    for (const user in obj) {
        let total = obj[user].like + obj[user].comment;
 
        console.log(`${user}: ${total}`);
    }
}
followers(["Blocked: Amy",

"Comment: Amy",

"New follower: Amy",

"Like: Tom: 5",

"Like: Ellie: 5",

"Log out"]);