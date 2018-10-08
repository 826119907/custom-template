<<<<<<< HEAD
# admin-template

## logo 配置
在 asset 目录下，logo.png 是 侧边栏展开时的图标，mini-logo是折叠时的图标

## 依赖包说明
* dayjs - 处理时间的库，具体使用说明查看官网
* font-awesome -  图表库,已经引用，可以直接在vue文件中使用
```
<i class="fas fa-user/>
```
* axios -  http请求库

## 全局样式修改
可以直接在 src/styles/element-variables.scss 中修改element ui theme 中的固定变量
需要覆盖 element-ui 的样式时，在 overrideElement.less 中修改
其它的内部less变量写在 variable.less 中

## 网络层
api 请求放在 src/network 下
host 这个变量在 根目录下的 .env... 文件中配置

## router.js
通过在meta中配置keepAlive，可以做到缓存页面的效果
```js
meta:{
  keepAlive: true
}
```
在meta 中配置 breadcrumb， 页面会根据这个生成 breadcrumb
```js
meta:{
  breadcrumbs: [
    {name: '员工管理'},
    {name: '员工列表', path: '/employee/list'}
  ]
}
```

## Project setup
```
npm install
```
### Compiles and hot-reloads for development
```
npm run serve
```
### Compiles and minifies for production
```
npm run build
```
### Lints and fixes files
```
npm run lint
```

=======
# custom-template
this is my template
>>>>>>> 3199a85e5faa03279b1994169934b7d7f6f0030f
