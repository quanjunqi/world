// 获取要填充数据的父元素
var thumbnailsContainer = document.querySelector('.thumbnails');

// 获取视频详情数据
fetch('http://120.79.49.122:8080/test') // 
    .then(response => response.json())
    .then(data => {
        if (data.Status === 200) {
            // 循环遍历后端数据数组，创建并填充每个盒子
            data.Data.forEach(function (item) {
                // 创建新的盒子，并填充后端数据
                var box = document.createElement('div');
                box.classList.add('box');
                box.innerHTML = `
                    <a href="${item.link}" class="image fit"><img src="${item.cover}" alt="" width="800" height="400"></a>
                    <div class="inner">
                        <h3>${item.title}</h3>
                        <p>${item.introduction}</p>
                        <a href="${item.link}" class="button fit" data-poptrox="youtube,800x400">Watch</a>
                    </div>
                `;
                // 将新的盒子添加到父元素中
                thumbnailsContainer.appendChild(box);
            });
        } else {
            console.error('Error: Status ' + data.Status);
        }
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
