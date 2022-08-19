let api='2ff156c1471f4e8bbeb43628c0ed158a'
let source='sources=the-hindu'
let box=document.getElementById('newsbox') 
let one=document.getElementById('one') 
let two=document.getElementById('two') 
let three=document.getElementById('three') 
let obj=new Date()
let rst='-'
let mon=   `${obj.getMonth()+1}`
one.innerHTML=(obj.getDate()+rst)
two.innerHTML=(mon+rst)
three.innerHTML=obj.getFullYear()


let xhr=new XMLHttpRequest()
xhr.open('GET',`https://newsapi.org/v2/top-headlines?${source}&apiKey=${api}`,true)
xhr.onload=function(){
    if(this.status===200){
        let getsap=JSON.parse(this.responseText)
        let str=''
        let getsa=getsap.articles
        getsa.forEach(function(ele,ind) {
            // console.log(ele,ind)
            let news=`
            <div class="card">
              <div class="card-header" id="heading${ind}">
                <h2 class="mb-0">
                  <button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapse${ind}" aria-expanded="true" aria-controls="collapse${ind}">
                  <strong> BREAKING_NEWS:${(ind+1)}-</strong> ${ele['title']}
                  </button>
                </h2>
              </div>
          
              <div id="collapse${ind}" class="collapse " aria-labelledby="headingOne" data-parent="#newsbox">
                <div class="card-body">
                  ${ele['content']}.<a href="${ele['url']}" target="_blank" >CLICK TO READ MORE</a>
                </div>
              </div>
            </div>`
                  
                    str+=news
            
        });
        box.innerHTML=str
    }
    else{
        console.log("ERROR OCCURED")
    }
}
xhr.send()
console.log(obj)