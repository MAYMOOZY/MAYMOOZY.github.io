let body = null;
let container = null;
let contentArea = null;
var naviHeight = 0;

window.onload = function () {
    body = document.getElementsByTagName('Body')[0];
    container = document.getElementById('container');
    contentArea = document.getElementById('contentArea');
    naviHeight = document.getElementById('navi').offsetHeight;
    loadImg();
}
window.onresize = function () {
    imgLocation('contentArea', 'imgCon');
}
function loadImg() {
    for (let i = 0; i < imgs.length; i++) {
        // <div class="imgCon">
        //     <img src="./resource/image/IMG_0275.JPG" alt="">
        //         <span>desc</span>
        //         <span>price</span>
        // </div>
        let div = document.createElement('div');
        let img = document.createElement('img');
        let priceDesc = document.createElement('span');
        let desc = document.createElement('span');
        div.appendChild(img);
        div.appendChild(priceDesc);
        div.appendChild(desc);
        document.getElementById('contentArea').appendChild(div);

        div.setAttribute('class', 'imgCon');
        div.setAttribute('onclick', 'checkImgOn(this)');
        div.style.float = 'left';
        div.style.padding = '10px';
        div.style.width = '300px';
        div.style.border = '1px solid #000';
        div.style.boxShadow = '0 0 5px #ccc';
        div.style.borderRadius = '5px';
        div.style.zIndex = 1;
        div.style.display = 'flex';
        div.style.flexDirection = 'column';
        div.style.alignItems = 'center';
        div.style.justifyContent = 'center';

        img.setAttribute('src', basePath + imgs[i].url);
        img.style.width = '100%';
        img.style.zIndex = 1;
        let name = imgs[i].url.split('/');
        name = name[name.length - 1].split('.')[0];
        img.setAttribute('alt', name);

        let descStr = imgs[i].desc.split('）');
        console.log(descStr);
        priceDesc.innerText = descStr[0] + '）';
        priceDesc.style.color = 'red';
        desc.innerText = descStr[1];
        // desc.innerText = name;
        if (i === imgs.length - 1) {
            img.onload = function () {
                imgLocation('contentArea', 'imgCon');
            }
        }
    }
}

// 获取到当前有多少张图片要摆放
function imgLocation(parent, content) {
    // 将containerd下所有的内容全部取出
    var eParent = document.getElementById(parent);
    var eContents = getImgCons(eParent, content);


    var imgWidth = eContents[0].offsetWidth;
    var imgNumPerRow = Math.floor(eParent.offsetWidth / imgWidth);
    console.log(imgNumPerRow);
    eParent.style.width = imgWidth * imgNumPerRow;


    let heightPerCol = [];

    //放置图片并计算列高度
    let offsetLeft = 0;
    for (let i = 0; i < eContents.length; i++) {
        //填充第一行
        if (i < imgNumPerRow) {
            eContents[i].style.position = 'absolute';
            eContents[i].style.top = naviHeight + 'px';
            eContents[i].style.left = offsetLeft + 'px';
            offsetLeft += eContents[i].offsetWidth;
            heightPerCol[i] = eContents[i].offsetHeight + naviHeight;
        }
        // 将其他图片放置在高度最低的列后面
        else {
            let minHeight = Math.min(...heightPerCol)

            let minIndex = getMinHeightColIndex(heightPerCol, minHeight)

            //最后将我们的图片相对于container盒子进行定位放在每一列下就可以啦
            eContents[i].style.position = 'absolute';
            eContents[i].style.top = minHeight + 'px';
            eContents[i].style.left = eContents[minIndex].offsetLeft + 'px';
            //最后不忘记跟新每一列的高度哦
            heightPerCol[minIndex] += eContents[i].offsetHeight;
        }
    }
    eParent.offsetHeight = Math.max(...heightPerCol) + "px";
}


function getImgCons(parent, content) {
    let contentArr = []
    const allContent = parent.getElementsByTagName("div")
    for (let i = 0; i < allContent.length; i++) {
        if (allContent[i].className == content) {
            contentArr.push(allContent[i])
        }
    }
    return contentArr;
};

//获取高度最小列的索引
function getMinHeightColIndex(BoxHeightArr, minHeight) {
    for (var i in BoxHeightArr) {
        if (BoxHeightArr[i] === minHeight) {
            return i;
        }
    }
}


function checkImgOn(elem) {
    var elems = document.getElementsByClassName('tempImg');
    if (elems.length < 1) {
        var imgElem = elem.getElementsByTagName("img");
        var img = document.createElement('img');
        body.appendChild(img);
        img.setAttribute('class', 'tempImg');
        img.setAttribute('src', imgElem[0].currentSrc);
        img.setAttribute('onclick', 'checkImgOff(this)');
        img.style.position = 'absolute';
        img.style.width = '90%';
        img.style.height = 'auto';
        img.style.top = naviHeight + 'px';
        img.style.left = ((container.offsetWidth - img.offsetWidth) / container.offsetWidth) * 50 + '%';
        img.style.zIndex = '300';

        container.style.opacity = 0.35;
    }
}

function checkImgOff(elem) {
    // var elem = document.getElementsByClassName('tempImg');
    container.style.opacity = 1;
    body.removeChild(elem);
}
