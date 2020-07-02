var uuid ='64349c0e-ef4d-436d-b317-a419a2161160';
var token = 'SO51PiJyqrKrdilUsD9QUYLMKSr8vU7qvwagMGMr95MssanSxK5qIUdvcDMd';
var apiPath = 'https://course-ec-api.hexschool.io/';

//驗證
axios.defaults.headers['Authorization'] = `Bearer ${token}`;

var data;
var obj = {
    data:[],
    getdata(){
        const vm = this;
        var api = `${apiPath}api/${uuid}/admin/ec/products`;
        console.log(api);
        axios.get(api)
            .then (function(res) {
//                console.log(res);
                console.log(res.data.data);
                vm.data = res.data.data;
                vm.render();

            })
            .catch(function(err){
                console.log('Error',err)
            });             
        },
        render(){  //obj裡的函式
            console.log(this);
            var str = '';
            this.data.forEach((item,index)=>{
                str +=
                `
                <li>
                <div class="list" id="${this.data[index].id}">
                <div class="pic">
                    <img src="${this.data[index].imageUrl[0]}" alt="">
                </div>
                <div class="content">
                    <ul>
                        <li class="productName">${this.data[index].title}</li>
                        <li class="productDescription">${this.data[index].content}</li>
                        <li class="productPrice">NT: ${this.data[index].price}</li>
                        <li class="productAdd">加入購物車</li>
                    </ul>
                </div>
                </li>
                `;
            })
            document.querySelector('.mainList').innerHTML = str;        
        }
    }

obj.getdata();
