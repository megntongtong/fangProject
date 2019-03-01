//点击事件注册
function registerBtnListenerJs()
{
    //登录
    var loginBtn = document.getElementById("loginBtn");
    var loginContainer = document.getElementsByClassName("loginContainer")[0];
    loginBtn.onclick=function(){
        
        loginContainer.style.display = "block";
    }
    //关闭
    var close_login=document.getElementsByClassName("close-login")[0];
    close_login.onclick=function(){
        loginContainer.style.display = "none";
    }
   
}
// registerBtnListenerJs();
function registerBtnListener()
{
    //登录
    $("#loginBtn").click(function()
    {
        $(".loginContainer").show();
    });
    //关闭登录
    $(".close-login").click(function(){
        $(".loginContainer").hide();
    });
}
registerBtnListener();


//初始化楼盘列表
var data = [
    {   
        "id":10001,
        "name":"苏河公园",
        "position":"上海周边/昆山/绿地大道1299号",
        "housenumber":"2室/3室/4室",
        "area":"85-115",
        "agent":"刘青",
        "price":23000,
        "allprice":195,
        "imgsrc":"img/9d36c0f1-ea9d-41bf-aefd-62ba374da533.jpg",
    },
    {   
        "id":10002,
        "name":"旭辉公元城市",
        "position":"上海周边/嘉兴/惠民街道晋吉路6号",
        "housenumber":"2室/3室/4室",
        "area":"66-110",
        "agent":"张宇博",
         "price":16500,
        "allprice":118,
        "imgsrc":"img/9d36c0f1-ea9d-41bf-aefd-62ba374da536.jpg",
    },
    {   
        "id":10003,
        "name":"金科集美嘉悦",
        "position":"上海周边/嘉兴/姚庄大道与学仕路交汇",
        "housenumber":"3室/4室",
        "area":"91-114",
        "agent":"蔡峰",
         "price":18000,
        "allprice":170,
        "imgsrc":"img/a3bc2397-81e2-4b02-b8e6-33a9eedf86dd.jpg",
    },
    {   
        "id":10004,
        "name":"苏河公园",
        "position":"上海周边/昆山/绿地大道1299号",
        "housenumber":"2室/3室/4室",
        "area":"85-115",
        "agent":"刘青",
        "price":23000,
        "allprice":195,
        "imgsrc":"img/9d36c0f1-ea9d-41bf-aefd-62ba374da533.jpg",
    },
    {   
        "id":10005,
        "name":"旭辉公元城市",
        "position":"上海周边/嘉兴/惠民街道晋吉路6号",
        "housenumber":"2室/3室/4室",
        "area":"66-110",
        "agent":"张宇博",
         "price":16500,
        "allprice":118,
        "imgsrc":"img/9d36c0f1-ea9d-41bf-aefd-62ba374da536.jpg",
    },
    {   
        "id":10006,
        "name":"金科集美嘉悦",
        "position":"上海周边/嘉兴/姚庄大道与学仕路交汇",
        "housenumber":"3室/4室",
        "area":"91-114",
        "agent":"蔡峰",
         "price":18000,
        "allprice":170,
        "imgsrc":"img/a3bc2397-81e2-4b02-b8e6-33a9eedf86dd.jpg",
    }
    
];

function initResblockListJs()
{
    var resblockWrapper = document.getElementsByClassName("resblock-list-wrapper")[0];
    data.forEach(function(item) {
        /*var resblockItem = document.createElement("li");
        resblockWrapper.appendChild(resblockItem);
     
        var resA=document.createElement("a");
        resblockItem.appendChild(resA);
        var resblockImg = document.createElement("img");
        resblockImg.className="resblock-img-warpper";
        resA.appendChild(resblockImg);
       
        var resblockDes = document.createElement("div");
        resblockDes.className="resblock-desc-wrapper";
        resblockItem.appendChild(resblockDes);

        var resblockName = document.createElement("div");
        resblockName.className="resblock-name";
        resblockDes.appendChild(resblockName);

        var resA1=document.createElement("a");
        resA1.className="name";
        var textNode = document.createTextNode(item.name);
        resA1.appendChild(textNode);
        resA1.setAttribute("href","#");
        resblockName.appendChild(resA1);

        var textNode1 = document.createTextNode("在售");
        var shopSpan = document.createElement("span");
        shopSpan.appendChild(textNode1);
        resblockName.appendChild(shopSpan);

        var shopSpan = document.createElement("span");
        shopSpan.innerText="住宅";
        resblockName.appendChild(shopSpan);
        shopSpan.style.background="#fb9252";*/

        var resblockItem = document.createElement("li");
        resblockWrapper.appendChild(resblockItem);
        resblockItem.innerHTML="<a href='#'><img class='resblock-img-warpper' src="+item.imgsrc+"></a>"+
               "<div class='resblock-desc-wrapper'>"+
                    "<div class='resblock-name'>"+
                        "<a href='#' class='name'>"+item.name+"</a>"+
                        "<span>在售</span>"+
                        "<span style='background:#fb9252'>住宅</span>"+
                    "</div>"+
                    "<a href='#' class='resblock-location'>"+
                        "<i class='iconfont'>&#xe640</i>"+
                        item.position+
                    "</a>"+
                    "<a href='#' class='resblock-room'>"+
                        "<i class='iconfont'>&#xe630</i>"+
                       "户型："+ item.housenumber+" 建面 "+item.area+
                    "</a>"+
                    "<div class='resblock-agent'>"+
                        "<i class='iconfont'>&#xe63f</i>"+
                        "新房顾问："+ item.agent+
                    "</div>"+
                    "<div class='resblock-tag'>"+
                        "<span>绿化率高</span>"+
                        "<span>车位充足</span>"+
                    "</div>"+
                     "<div class='resblock-price'>"+
                        "<div class='main-price'>"+
                            "<span class='number'>"+item.price+"</span>"+
                            "<span class='desc'>元/平(均价)</span>"+
                        "</div>"+
                       "<div class='second'>总价"+item.allprice+"万/套起"+
                       "</div>"+
                    "</div>"+
                "</div>";

    });
}
initResblockListJs();