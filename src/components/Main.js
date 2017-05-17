require('normalize.css/normalize.css');
require('styles/App.css');
//获取图片相关路径
var imageDatas = require('../data/imageData.json');

//封装把图片名转换成图片路径的方法
function getImageUrl(imageDatasArr){
	// 遍历图片数组
	for (var i = 0, j = imageDatasArr.length; i < j; i++) {
		var singleImage = imageDatasArr[i]; //获取到单张图片信息
		singleImage.imageUrl = require('../images/' + singleImage.fileName);//给图片添加imageUrl属性
		imageDatasArr[i] = singleImage;
	}
	return imageDatasArr;
}
//调用getImageUrl()函数
imageDatas = getImageUrl(imageDatas);

import React from 'react';

let yeomanImage = require('../images/yeoman.png');

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <img src={yeomanImage} alt="Yeoman Generator" />
        <h2>hello!  你好吗</h2>
        <div className="notice">this is a test example!</div>
        <section className='stage'>
        	<section className='img-sec'></section>
        	<nav className='controler-nav'></nav>
        </section>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
