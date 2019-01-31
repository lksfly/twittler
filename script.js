// your code here

// DATA는 이미 작성된 트윗을 표시합니다.

console.log(DATA)

var DATA = [
    { user: 'ingikim', message: 'Welcome to Code States #codestates', created_at: '2019-01-03 12:30:20' },
    { user: 'satya', message: 'this is test message #pair #programming', created_at: '2019-01-04 18:30:20' },
    { user: 'sundar', message: 'code now! #work #hard', created_at: '2019-01-05 07:30:20' },
    { user: 'steve', message: 'Stay hungry, and stay foolish', created_at: '2015-01-03 12:30:20' },
    { user: 'tim', message: 'education for real world', created_at: '2019-01-04 18:30:20' }
  ];

//generateNewTweet을 호출할 때마다 새로운 트윗을 생성합니다.

existTweet();

function existTweet(){
    for( var i = 0; i<DATA.length; i++){
        var comment = document.createElement('DIV');
        comment.innerHTML = `<span class = "commentName">`+DATA[i]["user"] + `</span>` + `<div class = "date">`+DATA[i]["created_at"]+`</div>`+`<div class="message">`+ DATA[i]["message"]+`</div>`;
        document.querySelector(".check").prepend(comment);
    }
    
}

function generateRandom() {  
    var button= document.querySelector('#comments button');
    console.log(button.innerHTML);
    if(button.innerHTML==="go back &amp; clear filter"){
        button.innerHTML="check new tweets";


        var a = document.querySelector('#comments .check');
        a.remove();
        var makediv = document.createElement('DIV');
        makediv.className = "check"
        document.querySelector("#comments").appendChild(makediv);
        
        var comment = document.createElement('DIV');
        for( var i = 0; i<DATA.length; i++){
            var comment = document.createElement('DIV');
            comment.innerHTML = `<span class = "commentName">`+DATA[i]["user"] + `</span>` + `<div class = "date">`+DATA[i]["created_at"]+`</div>`+`<div class="message">`+ DATA[i]["message"]+`</div>`;
            document.querySelector(".check").appendChild(comment);
        }

    }
    else{
        var randomTweet = generateNewTweet(); 

        var userData = {};
        userData.user = randomTweet["user"];
        userData.message = randomTweet["message"];
        userData.created_at = getFormattedDate();
        DATA.unshift(userData);    
    
        var comment = document.createElement('DIV');
        comment.innerHTML= `<span class = "commentName">`+userData.user + `</span>` + `<div class = "date">`+userData.created_at+`</div>`+`<div class="message">`+ userData.message+`</div>`;
        document.querySelector('.check').prepend(comment);
        
        bb();
    }
   


    
    
}


function newTweet() {   //내가 입력해서 만든 트윗

    var userData = {};
    userData.user = document.querySelector('.name').value;
    userData.message = document.querySelector('.datgle').value;
    userData.created_at = getFormattedDate();
    DATA.unshift(userData);

    var comment  = document.createElement('DIV');
    comment.innerHTML= `<span class = "commentName">`+userData.user + `</span>` + `<div class = "date">`+userData.created_at+`</div>`+`<div class="message">`+ userData.message+`</div>`;    document.querySelector('.check').prepend(comment);
    
    bb();
    
}

// function filtering(){
//     var button= document.querySelector('#comments button');
//     if(button.innerHTML==="check new tweets"){
//         button.innerHTML="go back & clear filter";
//     }
    
//     // var a  = document.querySelectorAll('#comments .check div');
//     //a.removeChild(a.firstChild);
//     var a = document.querySelectorAll('#comments .commentName')
//     console.log(a);
//     console.log(a[1].innerHTML);
//     //console.log(document.querySelector('#comments .commentName').innerHTML);
// }


function bb () {
    document.querySelectorAll('#comments .commentName').forEach(function(curr){
        
        return curr.onclick = function(){
            var button= document.querySelector('#comments button');
            if(button.innerHTML==="check new tweets"){
                button.innerHTML="go back & clear filter";
            }
            
            var result =DATA.filter(function(current){
                return current["user"]===curr.innerHTML;
            })
            console.log(result);
            
            var a = document.querySelector('#comments .check');
            a.remove();
            var makediv = document.createElement('DIV');
            makediv.className = "check"
            document.querySelector("#comments").appendChild(makediv);
            
            var comment = document.createElement('DIV');
            for( var i = 0; i<result.length; i++){
                var comment = document.createElement('DIV');
                comment.innerHTML = `<span class = "commentName">`+result[i]["user"] + `</span>` + `<div class = "date">`+result[i]["created_at"]+`</div>`+`<div class="message">`+ result[i]["message"]+`</div>`;
                document.querySelector(".check").appendChild(comment);
            }


            //console.log(curr.innerHTML);
            //document.querySelector('#comments .commentName').innerHTML==DATA[4]["user"]
        };
        
    });
}

document.querySelector('#new-comment button').onclick = newTweet;
document.querySelector('#comments button').onclick = generateRandom;




// document.querySelector('#comments .commentName').onclick = filtering;


function getFormattedDate(){
    var d = new Date();

    d = d.getFullYear() + "-" + ('0' + (d.getMonth() + 1)).slice(-2) + "-" + ('0' + d.getDate()).slice(-2) + " " + ('0' + d.getHours()).slice(-2) + ":" + ('0' + d.getMinutes()).slice(-2) + ":" + ('0' + d.getSeconds()).slice(-2);

    return d;
}




//document.getElementById('test').innerHTML = 'hello twittler, check developer console!';