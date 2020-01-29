document.addEventListener('DOMContentLoaded', () => {
    let counter = document.getElementById('counter');
    let changeTime = setInterval(incrementor, 1000);
    let ul = document.getElementsByClassName('likes')[0];

    

    document.addEventListener('click', (event) => {
        if (event.target.id === 'plus'){
            counter.innerHTML = parseInt(counter.innerHTML, 10 ) + 1 ;
        }
        else if (event.target.id === 'minus'){
            counter.innerHTML = parseInt(counter.innerHTML, 10 ) - 1 ;
        }
        else if (event.target.id === 'heart'){
            while (ul.firstChild) {
                ul.firstChild.remove();
            }
            let likedPosts = likePost(counter.innerHTML);
            likedPosts.forEach(function(post){
                let li = document.createElement('li');
                li.append(post);
                ul.appendChild(li);
            }); 
                
        }
        else if(event.target.id === 'pause' && event.target.innerText === 'pause'){
            clearInterval(changeTime);
            document.getElementById('plus').disabled = true;
            document.getElementById('minus').disabled = true;
            document.getElementById('heart').disabled = true;
            document.getElementById('pause').innerText = 'resume';

        }
        else if(event.target.innerText === 'resume'){
            console.log('hello world');
            document.getElementById('plus').disabled = false;
            document.getElementById('minus').disabled = false;
            document.getElementById('heart').disabled = false;
            document.getElementById('pause').innerText = 'pause';
            changeTime = setInterval(incrementor, 1000);
        }
    });

});

function incrementor(){
    // counterNumber = parseInt(counter.innerHTML, 10 );
    // counterNumber += 1;
    counter.innerHTML = parseInt(counter.innerHTML, 10 ) + 1 ;
}


let likes = {};
function likePost(time){
    let likedPosts = [];
    if (likes[time] != undefined){
        likes[time].quantity += 1;
    }
    else{
        likes[time] = {quantity: 1};
    }
    Object.keys(likes).map((time, index) => {
        //console.log(`${key} has been liked ${value} times`);
        likedPosts.push(`Time ${time} has ${likes[time].quantity} likes`);
    });
    return likedPosts;
}

