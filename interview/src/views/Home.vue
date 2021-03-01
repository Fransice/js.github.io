<template>
  <div class="home">
    <div class="headr">
      <h2>前端面试题收集总结</h2>
    </div>
    <div class="page">
      <el-collapse>
        <ul v-for="data in DATA" :key="data.title">
          <div class="title" :id="data.id">{{ data.title }}</div>
          <li v-for="(item, index) in data.list" :key="item.title">
            <a :href="item.link" target="_blank" v-if="item.link != ''">{{
              item.title
            }}</a>
            <a v-else>{{ item.title }}</a>
            <el-collapse-item
              title="点击查看简要分析"
              :name="index"
              v-if="item.detail != ''"
            >
              <div class="detail">{{ item.detail }}</div>
            </el-collapse-item>
          </li>
        </ul>
      </el-collapse>
    </div>
    <div class="menu">
      <div
        class="menu-one"
        @click="Slide(item.id)"
        v-for="item in DATA"
        :key="item.title"
      >
        {{ item.title }}
      </div>
    </div>
    <div class="tips">以上题目与答案均收集于互联网</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      DATA: [
        {
          title: "精选",
          id: "jx",
          list: [
            {
              title: "你是如何理解 HTML 语义化的？",
              link: "",
              detail:
                "用正确的标签做正确的事情\n页面内容结构化\n无 CSS 时也能进行网页阅读\n方便浏览器，搜索引擎解析，利于 SEO",
            },
            {
              title: "meta viewport 是做什么用的，怎么写？",
              link: "",
              detail:
                'meta  元素可提供有关页面的元信息（meta-information），比如针对搜索引擎和更新频度的描述和关键词。\n\nviewport 是 meta 标签的 name 属性中可选值中的一个，指 web 页面上用户可见的区域，用于移动端页面设计，代码如下：\n\n<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">',
            },
            {
              title: "两种盒模型分别说一下",
              link: "",
              detail:
                "标准模型和 IE模型（怪异盒子）\n\nbox-sizing: conent-box; 将盒子设置为标准模型（盒子默认为标准模型）\nbox-sizing: border-box; 将盒子设置为 IE 模型（也叫做怪异盒子）\n\n标准模型  widt = content\n怪异模型  widt = content + padding + border",
            },
            {
              title: "如何垂直居中",
              link: "https://www.jianshu.com/p/086364d3d5e2",
              detail: "",
            },
            {
              title: "flex 怎么用，常用属性有哪些？",
              link: "",
              detail:
                "flex-direction\nflex-wrap\nflex-flow\njustify-content\nalign-items\nalign-content",
            },
            {
              title: "BFC 是什么？",
              link: "",
              detail:
                "Block Formatting Context,块级格式化上下文;\n它是一个独立的渲染区域，只有Block-level box 参与，规定了如何布局，并且与外部不相关。\n\nfloat的值不能为none\noverflow的值不能为visible\ndisplay的值为table-cell, table-caption, inline-block中的任何一个\nposition的值不为relative和static",
            },
            {
              title: "CSS 选择器优先级",
              link: "",
              detail:
                "优先级：由高到低(从上到下)\n\n!important\n内联(1,0,0,0)\nid: (0,1,0,0)\n类：(0,0,1,0)\n伪类/属性\n元素：(0,0,0,1)\n通配符",
            },
            {
              title: "清除浮动",
              link: "",
              detail:
                "1. 利用clear样式\n2. 父元素结束标签之前插入清除浮动的块级元素\n3. 利用伪元素（clearfix）\n4. 利用overflow清除浮动",
            },
            {
              title: "ES 6 语法知道哪些，分别怎么用？",
              link: "",
              detail:
                "一. 块级作用域、变量let、常量const\n二. 箭头函数\n三. 参数处理\n四. 模板字面量(模板字符串)\n五. 对象的扩展\n六. 解构赋值\n七. 模块（import/export）\n八. 类\n九. Promise 对象\n\n参考：https://zhuanlan.zhihu.com/p/59683520",
            },
            {
              title: "Promise、Promise.all、Promise.race 分别怎么用？",
              link: "",
              detail:
                "Promise.all()方法用于将多个 Promise 实例，包装成一个新的 Promise 实例。\n\nPromise.all([promise1, promise2]).then(success1, fail1)\npromise1和promise2都成功才会调用success1\n\n\nPromise.race()方法同样是将多个 Promise 实例，包装成一个新的 Promise 实例。\n\nPromise.race([promise1, promise2]).then(success1, fail1)\npromise1和promise2只要有一个成功就会调用success1",
            },
            {
              title: "手写函数防抖和函数节流",
              link: "",
              detail:
                "函数防抖\n在事件被触发n秒后再执行回调，如果在这n秒内又被触发，则重新计时。\nvar timer; // 维护同一个timer\nfunction debounce(fn, delay) {\n    clearTimeout(timer);\n    timer = setTimeout(function(){\n        fn();\n    }, delay);\n}\n\n函数节流\n每隔一段时间，只执行一次函数。\nfunction throttle(fn, delay) {\n    var timer;\n    return function () {\n        var _this = this;\n        var args = arguments;\n        if (timer) {\n            return;\n        }\n        timer = setTimeout(function () {\n            fn.apply(_this, args);\n            timer = null; // 在delay后执行完fn之后清空timer，此时timer为假，throttle触发可以进入计时器\n        }, delay)\n    }\n}",
            },
            {
              title: "手写AJAX",
              link: "",
              detail:
                "myButton.addEventListener('click', function(){\n    ajax()\n})\n\nfunction ajax() {\n    let request = new XMLHttpRequest()\n    request.open('get', 'https://www.google.com')\n    request.onreadystatechange = () => {\n        if (request.readyState === 4) {\n            if (request.status >= 200 && request.status <300) {\n                let string = request.responseText\n                let object = JSON.parse(string)\n            }\n        }\n    }\n    request.send()\n}\n\n参考：https://www.jianshu.com/p/2e64ec9a5a49",
            },
            {
              title: "简单理解闭包与立即执行函数",
              link: "",
              detail:
                "闭包是指那些能够访问自由变量的函数。 （其中自由变量，指在函数中使用的，但既不是函数参数arguments也不是函数的局部变量的变量，其实就是另外一个函数作用域中的变量。）\n\n很简单，可以用圆括号将整个函数包起来再()，更可以使用简单的判断符号来处理。这样的做法，就称为 立即执行函数 。\n(function outerFn(){/* code */})()\n!function outerFn(){/* code */}()\n~function outerFn(){/* code */}()\ntrue && function outerFn(){/* code */}()\n可以用来做什么？\n一般情况下，只对匿名函数使用这种 立即执行函数 。它的核心是 闭包 ，实现的目的有以下几个：\n1. 不必为函数命名，避免污染全局变量；\n2. 内部形成单独的块级作用域，封装一些私有变量；\n3. 内部变量执行完即销毁，不会占用更多的内存。",
            },
            {
              title: "什么是 JSONP，什么是 CORS，什么是跨域？",
              link: "",
              detail:
                "什么是同源策略\n同源指的是两个域需要协议，子域名，主域名与端口号都保持一致，四者有一个不同，即属于跨域。\n注意:  http://localhost:8080与http://127.0.0.1:8080不属于同源，也就是说，即使IP地址一致，但是一个是域名，一个是IP地址，也不属于同源。\n\nCORS：跨域资源共享，是W3C制定的一个草案，定义了在必须访问跨源资源时，浏览器和服务器该怎么沟通。\n\njsonp利用script标签可以不受限制的从其他域加载资源的能力，进行跨域通信。 jsonp由两部分组成：回调函数和数据。回调函数是响应带来时，应该调用的函数，它需要在URL中指定；数据就是服务器返回给浏览器的响应。\n\nCORS属于浏览器原生支持，支持所有类型的HTTP请求，是跨域通信的根本解决方案。 jsonp是开发者们为了绕开同源策略的权宜之计，虽然只支持get方法，但是使用简单。",
            },
            {
              title: "async/await 怎么用，如何捕获异常？",
              link: "",
              detail: "try/catch\n.catch",
            },
            {
              title: "如何实现深拷贝？",
              link: "",
              detail:
                "浅拷贝:将内存中的某个对象复制一份,在内存中开辟一块新的空间,如果复制的这个对象的属性为基本数据类型,则拷贝的便为这个值本身,如果为复杂数据类型,则拷贝复制的为地址,因此,修改新对象会对原对象产生影响\n深拷贝:开辟一块新的空间,完整的复制一份,包括复杂数据类型,拷贝的这个对象和原对象无任何关系,修改什么 的都互不影响\n\n浅拷贝\n1.通过Object.assign( )简单实现\n2.通过 for in方法\n3.通过 扩展运算符...方法\n\n深拷贝\n1.通过JSON.parse( )和JSON.stringify( )\n2.以递归方式使用for in 方法来实现深拷贝\n3.同样递归方式使用来实现深拷贝，会使用到Reflect和...扩展运算符来实现",
            },
            {
              title: "如何用正则实现 trim()？",
              link: "",
              detail:
                "String.prototype.trim = function(){\n    return this.replace(/^\s+|\s+$/g, '')\n}\n\n\nfunction trim(string){\n    return string.replace(/^\s+|\s+$/g, '')\n}",
            },
            {
              title: "用class如何实现继承？不用又如何实现？",
              link: "https://juejin.cn/post/6844904090250526734",
              detail: "",
            },
            {
              title: "如何实现数组去重？",
              link: "https://segmentfault.com/a/1190000016418021",
              detail:
                "一、利用ES6 Set去重（ES6中最常用）\n二、利用for嵌套for，然后splice去重（ES5中最常用）\n三、利用indexOf去重\n四、利用sort()\n五、利用对象的属性不能相同的特点进行去重（这种数组去重的方法有问题，不建议用，有待改进）\n六、利用includes\n七、利用hasOwnProperty\n八、利用filter\n九、利用递归去重\n十、利用Map数据结构去重\n十一、利用reduce+includes\n十二、[...new Set(arr)]",
            },
            {
              title: "手写一个 Promise",
              link: "https://segmentfault.com/a/1190000023870200",
              detail: "",
            },
            {
              title: "事件委托",
              link: "https://juejin.cn/post/6844903589052153869",
              detail: "",
            },
            {
              title: "HTTP 状态码知道哪些？分别什么意思？",
              link: "",
              detail:
                "100  Continue  继续，一般在发送post请求时，已发送了http header之后服务端将返回此信息，表示确认，之后发送具体参数信息\n200  OK   正常返回信息\n201  Created  请求成功并且服务器创建了新的资源\n202  Accepted  服务器已接受请求，但尚未处理\n301  Moved Permanently  请求的网页已永久移动到新位置。\n302 Found  临时性重定向。\n303 See Other  临时性重定向，且总是使用 GET 请求新的 URI。\n304  Not Modified  自从上次请求后，请求的网页未修改过。\n\n400 Bad Request  服务器无法理解请求的格式，客户端不应当尝试再次使用相同的内容发起请求。\n401 Unauthorized  请求未授权。\n403 Forbidden  禁止访问。\n404 Not Found  找不到如何与 URI 相匹配的资源。\n\n500 Internal Server Error  最常见的服务器端错误。\n503 Service Unavailable 服务器端暂时无法处理请求（可能是过载或维护）。",
            },
            {
              title: "HTTP 缓存有哪几种？",
              link: "https://www.jianshu.com/p/227cee9c8d15",
              detail: "",
            },
            {
              title: "GET 和 POST 的区别",
              link: "",
              detail:
                "GET在浏览器回退时是无害的，而POST会再次提交请求。\n\nGET产生的URL地址可以被Bookmark，而POST不可以。\n\nGET请求会被浏览器主动cache，而POST不会，除非手动设置。\n\nGET请求只能进行url编码，而POST支持多种编码方式。\n\nGET请求参数会被完整保留在浏览器历史记录里，而POST中的参数不会被保留。\n\nGET请求在URL中传送的参数是有长度限制的，而POST么有。\n\n对参数的数据类型，GET只接受ASCII字符，而POST没有限制。\n\nGET比POST更不安全，因为参数直接暴露在URL上，所以不能用来传递敏感信息。\n\nGET参数通过URL传递，POST放在Request body中。",
            },
            {
              title: "Cookie V.S. LocalStorage V.S. SessionStorage V.S. Session",
              link: "https://juejin.cn/post/6844903587764502536",
              detail:
                "localStorage: 存储的数据是永久性的，除非用户人为删除否则会一直存在。\nsessionStorage: 与存储数据的脚本所在的标签页的有效期是相同的。一旦窗口或者标签页被关闭，那么所有通过 sessionStorage 存储的数据也会被删除。\n\nlocalStorage: 在同一个浏览器内，同源文档之间共享 localStorage 数据，可以互相读取、覆盖。\nsessionStorage: 与 localStorage 一样需要同一浏览器同源文档这一条件。不仅如此，sessionStorage 的作用域还被限定在了窗口中，也就是说，只有同一浏览器、同一窗口的同源文档才能共享数据。\n\n\n1、顾名思义，Cookie 确实非常小，它的大小限制为4KB左右\n2、主要用途是保存登录信息和标记用户(比如购物车)等，不过随着localStorage的出现，现在购物车的工作Cookie承担的较少了\n3、一般由服务器生成，可设置失效时间。如果在浏览器端生成Cookie，默认是关闭浏览器后失效\n4、每次都会携带在HTTP头中，如果使用cookie保存过多数据会带来性能问题\n5、原生API不如storage友好，需要自己封装函数",
            },
          ],
        },
        {
          title: "VUE篇",
          id: "vue",
          list: [
            {
              title: "Vue中的定时器，一般在哪个生命周期中清除",
              link: "https://blog.csdn.net/qq_21132509/article/details/83504522",
              detail: "beforeDestroy ",
            },
            {
              title: "Vue 的双向绑定原理及实现",
              link: "https://www.liaoxuefeng.com/wiki/1022910821149312/1109527162256416",
              detail: "",
            },
            {
              title: "Vue 组件间的事件传值之（EventBus）",
              link: "https://blog.csdn.net/csl125/article/details/88885554",
              detail:
                "方法一：props/$emit\n方法二：parent/parent/children与ref\n方法三：emit/on",
            },
            {
              title: "Vue 生命周期深入",
              link: "https://juejin.cn/post/6844903602356502542",
              detail:
                "beforeCreate  这个钩子是new Vue()之后触发的第一个钩子，在当前阶段中data、methods、computed以及watch上的数据和方法均不能被访问。\n\ncreated   这个钩子在实例创建完成后发生，当前阶段已经完成了数据观测，也就是可以使用数据，更改数据，在这里更改数据不会触发updated函数。可以做一些初始数据的获取，在当前阶段无法与Dom进行交互，如果你非要想，可以通过vm.$nextTick来访问Dom。\n\nbeforeMount   这个钩子发生在挂载之前，在这之前template模板已导入渲染函数编译。而当前阶段虚拟Dom已经创建完成，即将开始渲染。在此时也可以对数据进行更改，不会触发updated。\n\nmounted   这个钩子在挂载完成后发生，在当前阶段，真实的Dom挂载完毕，数据完成双向绑定，可以访问到Dom节点，使用`$refs`属性对Dom进行操作。也可以向后台发送请求，拿到返回数据。\n\nbeforeUpdate   这个钩子发生在更新之前，也就是响应式数据发生更新，虚拟dom重新渲染之前被触发，你可以在当前阶段进行更改数据，不会造成重渲染。\n\nupdated   这个钩子发生在更新完成之后，当前阶段组件Dom已完成更新。要注意的是避免在此期间更改数据，因为这可能会导致无限循环的更新。\n\nbeforeDestroy   这个钩子发生在实例销毁之前，在当前阶段实例完全可以被使用，我们可以在这时进行善后收尾工作，比如清除计时器。\n\ndestroyed   这个钩子发生在实例销毁之后，这个时候只剩下了dom空壳。组件已被拆解，数据绑定被卸除，监听被移出，子实例也统统被销毁。",
            },
            {
              title: "Vue中watch用法详解",
              link: "https://www.jianshu.com/p/b70f1668d08f",
              detail:
                "watch是vue中用来监听数据是否发生改变的。\n函数有两个参数，一个新值一个旧值",
            },
            {
              title: "Vue中的 computed 和 watch的区别",
              link: "https://juejin.cn/post/6844903807592169486",
              detail:
                "computed看上去是方法，但是实际上是计算属性，它会根据你所依赖的数据动态显示新的计算结果。计算结果会被缓存，computed的值在getter执行后是会缓存的，只有在它依赖的属性值改变之后，下一次获取computed的值时才会重新调用对应的getter来计算\n\nwatcher 更像是一个 data 的数据监听回调，当依赖的 data 的数据变化，执行回调，在方法中会传入 newVal 和 oldVal。可以提供输入值无效，提供中间值 特场景。Vue 实例将会在实例化时调用 $watch()，遍历 watch 对象的每一个属性。如果你需要在某个数据变化时做一些事情，使用watch。",
            },
            {
              title: "Vue v-if 与 v-show 的区别",
              link: "https://juejin.cn/post/6844903767553359885",
              detail: "-if  元素不编译\n-show  元素编译不显示",
            },
            {
              title: "Vue作用域插槽",
              link: "https://juejin.cn/post/6844903812130422792",
              detail: "",
            },
            {
              title: "v-for中key值的作用？",
              link: "https://www.zhihu.com/question/61064119",
              detail: "使用key来给每个节点做一个唯一标识，Diff算法就可以正确的识别此节点",
            },
            {
              title: "Vue组件之间的传值",
              link: "https://segmentfault.com/a/1190000022700216",
              detail: "",
            },
            {
              title: "vue 路由跳转方式",
              link: "https://segmentfault.com/a/1190000020084110",
              detail:
                "1、方式一：标签跳转 router-link\n2、方式二：事件跳转 this.$router.push()\n3、方式三：this.$router.replace{path:'/user'}\n4、方式四：this.$router.go(n)\n5、this.router.forward() 前进一步\n6、this.router.back() 回退一步",
            },
            {
              title: "Vue 数据响应式怎么做到的？",
              link: "https://zhuanlan.zhihu.com/p/113336714",
              detail:
                "avaScript 对象传入 Vue 实例作为 data 选项，Vue 将遍历此对象所有的属性，并使用 Object.defineProperty 把这些属性全部转为 getter/setter\n由于 Vue 会在初始化实例时对属性执行 getter/setter 转化，所以属性必须在 data 对象上存在才能让 Vue 将它转换为响应式的",
            },
            {
              title: "Vuex 你怎么用的？",
              link: "https://segmentfault.com/a/1190000015782272",
              detail:
                "每一个Vuex应用就是一个store，在store中包含组件中的共享状态state和改变状态的方法（暂且称作方法）mutations。",
            },
            {
              title: "VueRouter 你怎么用的？",
              link: "https://juejin.cn/post/6844903619838345229",
              detail:
                "首先定义route，它是一个对象，由两部分组成：path、component；path指路径，component指组件；\n创建router对路由进行管理，由构造函数new vueRouter()创建，接收routes参数\n配置完成后把router实例注入到vue根实例中",
            },
            {
              title: "路由守卫是什么？",
              link: "https://juejin.cn/post/6844903924760051725",
              detail:
                "简单的说，导航守卫就是路由跳转过程中的一些钩子函数。路由跳转是一个大的过程，这个大的过程分为跳转前中后等等细小的过程，在每一个过程中都有一函数，这个函数能让你操作一些其他的事儿，这就是导航守卫。类似于组件生命周期钩子函数",
            },
            {
              title: "vue的diff算法",
              link: "https://juejin.cn/post/6844903607913938951",
              detail:
                "所谓的virtual dom，也就是虚拟节点。它通过JS的Object对象模拟DOM中的节点，然后再通过特定的render方法将其渲染成真实的DOM节点dom diff 则是通过JS层面的计算，返回一个patch对象，即补丁对象，在通过特定的操作解析patch对象，完成页面的重新渲染\ndiff算法比较新旧节点的时候，比较只会在同层级进行, 不会跨层级比较。\n实现步骤\n用JavaScript对象模拟DOM\n把此虚拟DOM转成真实DOM并插入页面中\n如果有事件发生修改了虚拟DOM\n比较两棵虚拟DOM树的差异，得到差异对象\n把差异对象应用到真正的DOM树上",
            },
            {
              title:
                "v-if和v-for哪个优先级高？如果两个同时出现，应该怎么优化得到更好的性能？",
              link: "https://juejin.cn/post/6844904052371767309",
              detail:
                "当 v-if 与 v-for 一起使用时，v-for 具有比 v-if 更高的优先级。\n永远不要把 v-if 和 v-for 同时用在同一个元素上。",
            },
            {
              title: "Vue 组件 data 为什么必须是函数？",
              link: "https://blog.csdn.net/shaleilei/article/details/78084171",
              detail:
                "vue为了保证每个实例上的data数据的独立性，规定了必须使用函数，而不是对象。",
            },
          ],
        },
        {
          title: "React篇",
          id: "react",
          list: [
            {
              title: "受控组件 V.S. 非受控组件",
              link: "https://segmentfault.com/a/1190000012404114",
              detail:
                "受控组件\n1.可以通过初始state中设置表单的默认值;\n2.每当表单的值发生变化时,调用onChange事件处理器;\n3.事件处理器通过合成事件对象e拿到改变后的状态,并更新应用的state.\n4.setState触发视图的重新渲染,完成表单组件值得更新\n\n非受控组件\n1.如果一个表单组件没有value props(单选按钮和复选按钮对应的是 checked props)时,就可以称为非受控组件;\n2.使用defaultValue和defaultChecked来表示组件的默认状态;\n3.通过 defaultValue和defaultChecked来设置组件的默认值,它仅会被渲染一次,在后续的渲染时并不起作用",
            },
            {
              title:
                "React 有哪些生命周期函数？分别有什么用？（Ajax 请求放在哪个阶段？）",
              link: "https://www.jianshu.com/p/514fe21b9914",
              detail: "",
            },
            {
              title: "React 如何实现组件间通信？",
              link: "https://www.jianshu.com/p/fb915d9c99c4",
              detail: "",
            },
            {
              title: "shouldComponentUpdate 有什么用？",
              link: "https://segmentfault.com/a/1190000016494335",
              detail: "",
            },
            {
              title: "虚拟 DOM 是什么？",
              link: "https://segmentfault.com/a/1190000019992100",
              detail: "通过JavaScript语言来描述一段HTML代码",
            },
            {
              title: "什么是高阶组件？",
              link: "https://segmentfault.com/a/1190000019153177",
              detail:
                "高阶组件（HOC）是 React 中用于复用组件逻辑的一种高级技巧。HOC 自身不是 React API 的一部分，它是一种基于 React 的组合特性而形成的设计模式。",
            },
            {
              title: "React diff 的原理是什么？",
              link: "https://juejin.cn/post/6844903825946624013",
              detail:
                "Web UI中DOM节点跨层级的移动操作特别少，可以忽略不计。\n拥有相同类的两个组件将会生成相似的树形结构，拥有不同类的两个组件将会生成不同的树形结构。\n对于同一层级的一组子节点，它们可以通过唯一 id 进行区分。",
            },
            {
              title: "Redux 是什么？",
              link:
                "http://www.ruanyifeng.com/blog/2016/09/redux_tutorial_part_one_basic_usages.html",
              detail:
                "（1）Web 应用是一个状态机，视图与状态是一一对应的。\n（2）所有的状态，保存在一个对象里面。\n需要使用场景\n用户的使用方式复杂\n不同身份的用户有不同的使用方式（比如普通用户和管理员）\n多个用户之间可以协作\n与服务器大量交互，或者使用了WebSocket\nView要从多个来源获取数据\n某个组件的状态，需要共享\n某个状态需要在任何地方都可以拿到\n一个组件需要改变全局状态\n一个组件需要改变另一个组件的状态",
            },
            {
              title: "connect 的原理是什么？",
              link: "https://juejin.cn/post/6844903505191239694",
              detail: "",
            },
          ],
        },
        {
          title: "JS篇",
          id: "js",
          list: [
            {
              title: "前端跨域的方法(两种及以上)",
              link: "https://segmentfault.com/a/1190000022304066",
              detail:
                "什么是同源策略\n同源指的是两个域需要协议，子域名，主域名与端口号都保持一致，四者有一个不同，即属于跨域。\n注意:  http://localhost:8080与http://127.0.0.1:8080不属于同源，也就是说，即使IP地址一致，但是一个是域名，一个是IP地址，也不属于同源。\n\nCORS：跨域资源共享，是W3C制定的一个草案，定义了在必须访问跨源资源时，浏览器和服务器该怎么沟通。\n\njsonp利用script标签可以不受限制的从其他域加载资源的能力，进行跨域通信。 jsonp由两部分组成：回调函数和数据。回调函数是响应带来时，应该调用的函数，它需要在URL中指定；数据就是服务器返回给浏览器的响应。\n\nCORS属于浏览器原生支持，支持所有类型的HTTP请求，是跨域通信的根本解决方案。 jsonp是开发者们为了绕开同源策略的权宜之计，虽然只支持get方法，但是使用简单。",
            },
            {
              title: "JS获取对象键值对中key值的方法",
              link: "https://blog.csdn.net/qq_37746973/article/details/80297150",
              detail:
                "Object.keys( ) 会返回一个数组，数组中是这个对象的key值列表\n所以只要Object.keys(a)[0]， 就可以得只包含一个键值对的key值",
            },
            {
              title: "浅拷贝与深拷贝",
              link: "https://juejin.cn/post/6844904197595332622",
              detail:
                "浅拷贝是创建一个新对象，这个对象有着原始对象属性值的一份精确拷贝。如果属性是基本类型，拷贝的就是基本类型的值，如果属性是引用类型，拷贝的就是内存地址 ，所以如果其中一个对象改变了这个地址，就会影响到另一个对象。\n\n深拷贝是将一个对象从内存中完整的拷贝一份出来,从堆内存中开辟一个新的区域存放新对象,且修改新对象不会影响原对象。",
            },
            {
              title: "https中的s代表什么",
              link: "https://www.jianshu.com/p/2537f7d47bfa",
              detail:
                "HTTP 协议中的内容都是明文传输，HTTPS 的目的是将这些内容加密，确保信息传输安全。最后一个字母 S 指的是 SSL/TLS 协议，它位于 HTTP 协议与 TCP/IP 协议中间。",
            },
            {
              title: "http三次握手四次挥手",
              link: "https://juejin.cn/post/6844903958624878606",
              detail:
                "为了准确无误地把数据送达目标处，TCP协议采用了三次握手策略。用TCP协议把数据包送出去后，TCP不会对传送  后的情况置之不理，它一定会向对方确认是否成功送达。握手过程中使用了TCP的标志：SYN和ACK。\n发送端首先发送一个带SYN标志的数据包给对方。接收端收到后，回传一个带有SYN/ACK标志的数据包以示传达确认信息。最后，发送端再回传一个带ACK标志的数据包，代表“握手”结束\n若在握手过程中某个阶段莫名中断，TCP协议会再次以相同的顺序发送相同的数据包。",
            },
            {
              title: "HTTP状态码",
              link: "",
              detail:
                "100  Continue  继续，一般在发送post请求时，已发送了http header之后服务端将返回此信息，表示确认，之后发送具体参数信息\n200  OK   正常返回信息\n201  Created  请求成功并且服务器创建了新的资源\n202  Accepted  服务器已接受请求，但尚未处理\n301  Moved Permanently  请求的网页已永久移动到新位置。\n302 Found  临时性重定向。\n303 See Other  临时性重定向，且总是使用 GET 请求新的 URI。\n304  Not Modified  自从上次请求后，请求的网页未修改过。\n\n400 Bad Request  服务器无法理解请求的格式，客户端不应当尝试再次使用相同的内容发起请求。\n401 Unauthorized  请求未授权。\n403 Forbidden  禁止访问。\n404 Not Found  找不到如何与 URI 相匹配的资源。\n\n500 Internal Server Error  最常见的服务器端错误。\n503 Service Unavailable 服务器端暂时无法处理请求（可能是过载或维护）。",
            },
            {
              title: "原生轮播图实现思路",
              link: "https://www.cnblogs.com/zhuzhenwei918/p/6416880.html",
              detail: "",
            },
            {
              title: "前端移动元素大概有哪几种方法",
              link: "https://www.cnblogs.com/ZengYunChun/p/9323556.html",
              detail: "",
            },
            {
              title: "HTTP Keep-Alive的作用",
              link: "https://zhuanlan.zhihu.com/p/127761066",
              detail:
                "Keep-Alive：使客户端到服务器端的连接持续有效，当出现对服务器的后继请求时，Keep-Alive功能避免了建立或者重新建立连接。Web服务器，基本上都支持HTTP Keep-Alive。",
            },
            {
              title: "axios的底层用了什么",
              link: "https://www.jianshu.com/p/1bca605115e2",
              detail: "",
            },
            {
              title: "ajax过程",
              link: "",
              detail:
                "(1)创建XMLHttpRequest对象,也就是创建一个异步调用对象.\n\n(2)创建一个新的HTTP请求,并指定该HTTP请求的方法、URL及验证信息.\n\n(3)设置响应HTTP请求状态变化的函数.\n\n(4)发送HTTP请求.\n\n(5)获取异步调用返回的数据.\n\n(6)使用JavaScript和DOM实现局部刷新.",
            },
            {
              title: "this指向？如何改变？",
              link: "https://www.jianshu.com/p/bfa0c22f5a6d",
              detail: "",
            },
            {
              title: "箭头函数中的this时怎么绑定的？",
              link: "https://zhuanlan.zhihu.com/p/26475137",
              detail: "",
            },
            {
              title: "Promise中的then的异常处理方法和catch有什么区别？",
              link: "https://segmentfault.com/q/1010000014867708",
              detail: "",
            },
            {
              title: "页面的状态管理有哪些方法",
              link: "https://juejin.cn/post/6844904164607131655",
              detail: "",
            },
            {
              title: "新的fetch请求时怎么实现的",
              link: "http://www.ruanyifeng.com/blog/2020/12/fetch-tutorial.html",
              detail: "",
            },
            {
              title:
                "await后面如果接了一个promise,return null或return false它接下来会执行什么 应该执行resolve",
              link: "https://segmentfault.com/a/1190000016788484",
              detail: "",
            },
            {
              title: "实现bind方法有什么思路",
              link: "https://zhuanlan.zhihu.com/p/85438296",
              detail: "",
            },
            {
              title: "画一下原型链？ prototype和__proto__有什么区别",
              link: "https://www.cnblogs.com/starry-skys/p/11911568.html",
              detail: "",
            },
            {
              title: "new实现",
              link: "https://juejin.cn/post/6844903704663949325",
              detail: "",
            },
            {
              title: "webpack入门",
              link: "https://segmentfault.com/a/1190000006178770",
              detail: "",
            },
            {
              title: " js中本地存储有哪些？有什么不同",
              link: "https://blog.csdn.net/xiaohu12685/article/details/80914767",
              detail: "cookie\nsessionStorage\nlocalStorage",
            },
            {
              title: " npm中的工具了解",
              link: "https://blog.csdn.net/u011240877/article/details/76582670",
              detail: "",
            },
            {
              title: "JS的执行机制",
              link: "https://juejin.cn/post/6844903512845860872",
              detail: "",
            },
            {
              title: "for循环内setTimeout顺序输出的解法",
              link: "https://segmentfault.com/a/1190000014045184",
              detail: "",
            },
            {
              title: "写一个扁平化数组的方法",
              link: "https://juejin.cn/post/6844903805876699150",
              detail: "",
            },
            {
              title: "如何判断数组是数组？",
              link: "https://segmentfault.com/a/1190000006150186",
              detail: "instanceof\nconstructor\nObject.prototype.toString\nisArray",
            },
            {
              title: "target、currentTarget的区别",
              link: "https://zhuanlan.zhihu.com/p/33906656",
              detail:
                "e.target 指向触发事件监听的对象。\ne.currentTarget 指向添加监听事件的对象。",
            },
            {
              title: "export和export default的区别",
              link: "https://www.jianshu.com/p/edaf43e9384f",
              detail: "",
            },
            {
              title: "什么是 cookie？ 会话 cookie 与持久性 cookie 之间 有何区别？",
              link: "https://blog.csdn.net/llnara/article/details/80736096",
              detail: "",
            },
            {
              title: "Get、Post的区别",
              link: "https://www.zhihu.com/question/28586791",
              detail: "",
            },
            {
              title: "你所知道的http的响应码及含义",
              link: "https://www.runoob.com/http/http-status-codes.html",
              detail: "",
            },
            {
              title: "http的8种请求方式及区别",
              link: "https://www.cnblogs.com/weibanggang/p/9454581.html",
              detail: "",
            },
            {
              title: "Async/await 和 Promises 区别",
              link: "https://segmentfault.com/a/1190000013612116",
              detail: "",
            },
            {
              title: "异步加载和延迟加载",
              link: "https://blog.csdn.net/michael8512/article/details/78013362",
              detail:
                "1.异步加载的方案： 动态插入script标签\n2.通过ajax去获取js代码，然后通过eval执行\n3.script标签上添加defer或者async属性\n4.创建并插入iframe，让它异步执行js\n5.延迟加载：有些 js 代码并不是页面初始化的时候就立刻需要的，而稍后的某些情况才需要的。",
            },
            {
              title: "await有什么特点",
              link: "https://sugarat.top/interview/js/asyncawait.html",
              detail: "",
            },
            {
              title: "什么是跨域请求以及实现跨域的方案",
              link: "https://www.jianshu.com/p/f880878c1398",
              detail:
                " jsonp、 document.domain+iframe、window.name、window.postMessage、服务器上设置代理页面\n\njsonp的原理是动态插入script标签",
            },
            {
              title: "JS中的let和var的区别",
              link: "https://www.cnblogs.com/fly_dragon/p/8669057.html",
              detail: "",
            },
            {
              title: "js延迟加载的方式有哪些？",
              link: "",
              detail:
                "defer和async、动态创建DOM方式（创建script，插入到DOM中，加载完毕后callBack）、按需异步载入js",
            },
            {
              title: "new操作符具体干了什么呢?",
              link: "",
              detail:
                " 1、创建一个空对象，并且 this 变量引用该对象，同时还继承了该函数的原型。\n2、属性和方法被加入到 this 引用的对象中。\n3、新创建的对象由 this 所引用，并且最后隐式的返回 this 。\nvar obj  = {};\nobj.__proto__ = Base.prototype;\nBase.call(obj); ",
            },
            {
              title: "null和undefined的区别？",
              link: "",
              detail:
                "null是一个表示”无”的对象，转为数值时为0；undefined是一个表示”无”的原始值，转为数值时为NaN。\n\n当声明的变量还未被初始化时，变量的默认值为undefined。\nnull用来表示尚未存在的对象，常用来表示函数企图返回一个不存在的对象。\n\nundefined表示”缺少值”，就是此处应该有一个值，但是还没有定义。典型用法是：\n\n（1）变量被声明了，但没有赋值时，就等于undefined。\n\n（2) 调用函数时，应该提供的参数没有提供，该参数等于undefined。\n\n（3）对象没有赋值的属性，该属性的值为undefined。\n\n（4）函数没有返回值时，默认返回undefined。\n\n\nnull表示”没有对象”，即该处不应该有值。典型用法是：\n\n（1） 作为函数的参数，表示该函数的参数不是对象。\n\n（2） 作为对象原型链的终点。",
            },
            {
              title: "documen.write和 innerHTML的区别",
              link: "https://blog.csdn.net/banbianliushui/article/details/55107679",
              detail: "document.write只能重绘整个页面\n\ninnerHTML可以重绘页面的一部分",
            },
            {
              title: ".call() 和 .apply() 的区别和作用？",
              link: "https://blog.csdn.net/lilongsy/article/details/74356018",
              detail: "作用：动态改变某个类的某个方法的运行环境。",
            },
            {
              title: "哪些操作会造成内存泄漏？",
              link: "",
              detail:
                "内存泄漏指任何对象在您不再拥有或需要它之后仍然存在。\n垃圾回收器定期扫描对象，并计算引用了每个对象的其他对象的数量。如果一个对象的引用数量为 0（没有其他对象引用过该对象），或对该对象的惟一引用是循环的，那么该对象的内存即可回收。\nsetTimeout 的第一个参数使用字符串而非函数的话，会引发内存泄漏。\n闭包、控制台日志、循环（在两个对象彼此引用且彼此保留时，就会产生一个循环）",
            },
            {
              title: "JavaScript中的作用域与变量声明提升？",
              link: "https://segmentfault.com/a/1190000005794611",
              detail: "",
            },
            {
              title: "什么叫优雅降级和渐进增强？",
              link: "https://www.cnblogs.com/iceflorence/p/6625466.html",
              detail:
                "优雅降级：Web站点在所有新式浏览器中都能正常工作，如果用户使用的是老式浏览器，则代码会检查以确认它们是否能正常工作。由于IE独特的盒模型布局问题，针对不同版本的IE的hack实践过优雅降级了,为那些无法支持功能的浏览器增加候选方案，使之在旧式浏览器上以某种形式降级体验却不至于完全失效.\n\n渐进增强：从被所有浏览器支持的基本功能开始，逐步地添加那些只有新式浏览器才支持的功能,向页面增加无害于基础浏览器的额外样式和功能的。当浏览器支持时，它们会自动地呈现出来并发挥作用。",
            },
            {
              title: "javascript对象的几种创建方式",
              link: "https://www.html.cn/qa/javascript/11183.html",
              detail:
                "1，工厂模式\n2，构造函数模式\n3，原型模式\n4，混合构造函数和原型模式\n5，动态原型模式\n6，寄生构造函数模式\n7，稳妥构造函数模式",
            },
            {
              title: "javascript继承的6种方法",
              link: "https://segmentfault.com/a/1190000021691046",
              detail:
                "1，原型链继承\n2，借用构造函数继承\n3，组合继承(原型+借用构造)\n4，原型式继承\n5，寄生式继承\n6，寄生组合式继承",
            },
            {
              title: "ie各版本和chrome可以并行下载多少个资源",
              link: "",
              detail:
                "IE6 两个并发，iE7升级之后的6个并发，之后版本也是6个\n\nFirefox，chrome也是6个",
            },
            {
              title: "javascript里面的继承怎么实现，如何避免原型链上面的对象共享",
              link: "",
              detail:
                "用构造函数和原型链的混合模式去实现继承，避免对象共享可以参考经典的extend()函数，很多前端框架都有封装的，就是用一个空函数当做中间变量",
            },
            {
              title: "请解释一下 JavaScript 的同源策略",
              link: "",
              detail:
                "概念:同源策略是客户端脚本（尤其是Javascript）的重要的安全度量标准。它最早出自Netscape Navigator2.0，其目的是防止某个文档或脚本从多个不同源装载。\n这里的同源策略指的是：协议，域名，端口相同，同源策略是一种安全协议。\n指一段脚本只能读取来自同一来源的窗口和文档的属性。",
            },
            {
              title: "为什么要有同源限制？",
              link: "",
              detail:
                "我们举例说明：比如一个黑客程序，他利用Iframe把真正的银行登录页面嵌到他的页面上，当你使用真实的用户名，密码登录时，他的页面就可以通过Javascript读取到你的表单中input中的内容，这样用户名，密码就轻松到手了。",
            },
            {
              title: "js 有哪些内置对象？",
              link: "https://segmentfault.com/a/1190000037426297",
              detail: "",
            },
            {
              title: "bom对象",
              link: "https://segmentfault.com/a/1190000003923425",
              detail:
                "BOM 是 browser object model  的缩写，意思是浏览器对象模型\nBOM提供了独立于内容而与浏览器窗口进行交互的对象\nBOM主要用于管理窗口与窗口之间的通讯，因此其核心对象是window\nBOM由一些列相关对象构成，并且每个对象提供 很多方法与属性\nBOM缺乏标准，javascript 语法的标准组织是ECMA，DOM的标准组织是W3C\nBOM 最初是Netscape 浏览器标准的一部分",
            },
            {
              title: "JavaScript函数编写原则",
              link: "https://www.52tourism.com/JavaScript/37428.html",
              detail:
                '删掉弃用的代码\n尽量别用"非"条件句\n封装条件语句\n改命令式为函数式编程\n不要传flag参数\n对象设置默认属性',
            },
            {
              title: "JavaScript数组去重（12种方法，史上最全）",
              link: "https://segmentfault.com/a/1190000016418021",
              detail:
                "一、利用ES6 Set去重（ES6中最常用）\n二、利用for嵌套for，然后splice去重（ES5中最常用）\n三、利用indexOf去重\n四、利用sort()\n五、利用对象的属性不能相同的特点进行去重（这种数组去重的方法有问题，不建议用，有待改进）\n六、利用includes\n七、利用hasOwnProperty\n八、利用filter\n九、利用递归去重\n十、利用Map数据结构去重\n十一、利用reduce+includes\n十二、[...new Set(arr)]",
            },
            {
              title: "http和https的区别",
              link: "https://juejin.cn/post/6844903471565504526",
              detail:
                "1、https协议需要到ca申请证书，一般免费证书较少，因而需要一定费用。\n 2、http是超文本传输协议，信息是明文传输，https则是具有安全性的ssl加密传输协议。\n 3、http和https使用的是完全不同的连接方式，用的端口也不一样，前者是80，后者是443。\n 4、http的连接很简单，是无状态的；HTTPS协议是由SSL+HTTP协议构建的可进行加密传输、身份认证的网络协议，比http协议安全。",
            },
            {
              title: "谈谈你对webpack的看法",
              link: "https://www.cnblogs.com/tfl123/p/7381768.html",
              detail: "",
            },
            {
              title: "说说你对AMD、CMD和CommonJS的理解",
              link: "",
              detail:
                "1.CommonJs主要针对服务端，AMD/CMD主要针对浏览器端\n2.CommonJs中nodejs就是它实现的，所以不用引入其他的包，AMD则是通过<script>标签哦引入RequireJs\n3.AMD是预加载，CMD是赖加载\n4.AMD和CND的优缺点：一个文件的优点就是另外一个缺点。",
            },
            {
              title: "什么是函数柯里化",
              link: "",
              detail:
                "const add = (x, y) => x + y;\nadd(1, 2);\n\nconst add = x => y => z => x + y + z;\nconsole.log(add(1)(2)(3));",
            },
          ],
        },
        {
          title: "CSS篇",
          id: "css",
          list: [
            {
              title: "盒子垂直水平居中的几种方法",
              link: "https://blog.csdn.net/u012426959/article/details/79395132",
              detail: "",
            },
            {
              title: "css选择器的优先级，并进行排序",
              link:
                "https://dcpnonstop.github.io/2018/10/12/css%E9%80%89%E6%8B%A9%E5%99%A8%E5%8F%8A%E5%85%B6%E4%BC%98%E5%85%88%E7%BA%A7%E6%8E%92%E5%BA%8F/",
              detail:
                "1.id选择器（ # myid）\n2.类选择器（.myclassname）\n3.标签选择器（div, h1, p）\n4.相邻选择器（h1 + p）\n5.子选择器（ul > li）\n6.后代选择器（li a）\n7.通配符选择器（ * ）\n8.属性选择器（a[rel = 'external']）\n9.伪类选择器（a: hover, li:nth-child）\n\n!important >  id > class > tag  \nimportant 比 内联优先级高,但内联比 id 要高",
            },
            {
              title: "BFC是什么？有哪几种实现方式？适用场景？",
              link: "https://blog.csdn.net/rain_zhh/article/details/108907843",
              detail:
                " BFC，块级格式化上下文，一个创建了新的BFC的盒子是独立布局的，盒子里面的子元素的样式不会影响到外面的元素。在同一个BFC中的两个毗邻的块级盒在垂直方向（和布局方向有关系）的margin会发生折叠。（W3C CSS 2.1 规范中的一个概念，它决定了元素如何对其内容进行布局，以及与其他元素的关系和相互作用。）",
            },
            {
              title: "清除浮动有哪些方法",
              link: "https://segmentfault.com/a/1190000004865198",
              detail:
                "浮动元素脱离文档流，不占据空间。浮动元素碰到包含它的边框或者浮动元素的边框停留。\n\n1.使用空标签清除浮动。\n   这种方法是在所有浮动标签后面添加一个空标签 定义css clear:both. 弊端就是增加了无意义标签。\n2.使用overflow。\n   给包含浮动元素的父标签添加css属性 overflow:auto; zoom:1; zoom:1用于兼容IE6。\n3.使用after伪对象清除浮动。\n   该方法只适用于非IE浏览器。具体写法可参照以下示例。使用中需注意以下几点。一、该方法中必须为需要清除浮动元素的伪对象中设置 height:0，否则该元素会比实际高出若干像素；",
            },
            {
              title: "浮动元素引起的问题和解决办法？",
              link: "",
              detail:
                '浮动元素引起的问题：\n\n（1）父元素的高度无法被撑开，影响与父元素同级的元素\n（2）与浮动元素同级的非浮动元素（内联元素）会跟随其后\n（3）若非第一个元素浮动，则该元素之前的元素也需要浮动，否则会影响页面显示的结构\n\n1，额外标签法，<div style="clear:both;"></div>（缺点：不过这个办法会增加额外的标签使HTML结构看起来不够简洁。）\n2，使用after伪类\n#parent:after{\ncontent:".";\nheight:0;\nvisibility:hidden;\ndisplay:block;\nclear:both;\n}\n3,浮动外部元素\n4,设置`overflow`为`hidden`或者auto',
            },
            {
              title: "块级元素间隙问题",
              link: "https://www.cnblogs.com/GeniusLyzh/p/4624805.html",
              detail: "",
            },
            {
              title: "轮播图抖动问题",
              link: "https://www.jianshu.com/p/f143ed3097e4",
              detail: "",
            },
            {
              title: "理解为何需要清除浮动及清除浮动的方法",
              link: "https://blog.csdn.net/qq_31915745/article/details/72524465",
              detail: "",
            },
            {
              title: "CSS画一个三角形",
              link: "https://segmentfault.com/a/1190000005715074",
              detail: "",
            },
            {
              title: "rem为什么可以实现自适应布局",
              link: "https://blog.csdn.net/qq_42707446/article/details/93200711",
              detail: "",
            },
            {
              title: "flex:1 到底代表什么?",
              link: "https://www.jianshu.com/p/4b606cb31f56",
              detail: "",
            },
            {
              title: "浏览器的回流与重绘 (Reflow & Repaint)",
              link: "https://juejin.cn/post/6844903569087266823",
              detail:
                "display:none 隐藏对应的元素，在文档布局中不再给它分配空间，它各边的元素会合拢， 就当他从来不存在。\n visibility:hidden 隐藏对应的元素，但是在文档布局中仍保留原来的空间。",
            },
            {
              title: "CSS中 link 和@import 的区别是？",
              link: "",
              detail:
                "(1) link属于HTML标签，而@import是CSS提供的;\n(2) 页面被加载的时，link会同时被加载，而@import引用的CSS会等到页面被加载完再加载;\n(3) import只在IE5以上才能识别，而link是HTML标签，无兼容问题;\n(4) link方式的样式的权重 高于@import的权重.",
            },
            {
              title: "position:absolute和float属性的异同",
              link: "",
              detail:
                "A：共同点：\n对内联元素设置`float`和`absolute`属性，可以让元素脱离文档流，并且可以设置其宽高。\n\nB：不同点：\nfloat仍会占据位置，position会覆盖文档流中的其他元素。",
            },
            {
              title: "介绍一下box-sizing属性？",
              link: "",
              detail:
                "box-sizing属性主要用来控制元素的盒模型的解析模式。默认值是content-box。\n\n content-box：让元素维持W3C的标准盒模型。元素的宽度/高度由border + padding + content的宽度/高度决定，设置width/height属性指的是content部分的宽/高\n \n border-box：让元素维持IE传统盒模型（IE6以下版本和IE6~7的怪异模式）。设置width/height属性指的是border + padding + content\n \n 标准浏览器下，按照W3C规范对盒模型解析，一旦修改了元素的边框或内距，就会影响元素的盒子尺寸，就不得不重新计算元素的盒子尺寸，从而影响整个页面的布局。",
            },
            {
              title: "position的值， relative和absolute分别是相对于谁进行定位的？",
              link: "",
              detail:
                "absolute  生成绝对定位的元素， 相对于最近一级的 定位不是 static 的父元素来进行定位。\nfixed （老IE不支持）    生成绝对定位的元素，相对于浏览器窗口进行定位。 \nrelative 生成相对定位的元素，相对于其在普通流中的位置进行定位。 \nstatic  默认值。没有定位，元素出现在正常的流中",
            },
            {
              title: "解释下 CSS sprites，以及你要如何在页面或网站中使用它",
              link: "",
              detail:
                "CSS Sprites其实就是把网页中一些背景图片整合到一张图片文件中，再利用CSS的“background-image”，“background- repeat”，“background-position”的组合进行背景定位，background-position可以用数字能精确的定位出背景图片的位置。这样可以减少很多图片请求的开销，因为请求耗时比较长；请求虽然可以并发，但是也有限制，一般浏览器都是6个。对于未来而言，就不需要这样做了，因为有了`http2`。",
            },
            {
              title: "什么是 FOUC（无样式内容闪烁）？你如何来避免 FOUC？",
              link: "",
              detail:
                ' FOUC - Flash Of Unstyled Content 文档样式闪烁\n <style type="text/css" media="all">@import "../fouc.css";</style> \n而引用CSS文件的@import就是造成这个问题的罪魁祸首。IE会先加载整个HTML文档的DOM，然后再去导入外部的CSS文件，因此，在页面DOM加载完成到CSS导入完成中间会有一段时间页面上的内容是没有样式的，这段时间的长短跟网速，电脑速度都有关系。\n 解决方法简单的出奇，只要在<head>之间加入一个<link>或者<script>元素就可以了。',
            },
            {
              title: "为什么要初始化 CSS 样式",
              link: "https://www.jianshu.com/p/dfc403aaeff1",
              detail:
                "因为浏览器的兼容问题，不同浏览器对有些标签的默认值是不同的，如果没对CSS初始化往往会出现浏览器之间的页面显示差异。",
            },
            {
              title: "float、position 和 display 之间的关系",
              link: "https://www.cnblogs.com/moyuling/p/9030807.html",
              detail:
                "如果display为none，元素不显示。\n否则，如果position值为absolute或者fixed，元素绝对定位，float的计算值为none，display根据下面的表格进行调整。\n否则，如果float不是none，框是浮动的，display根据下表进行调整。\n其他情况下display的值为指定值。",
            },
            {
              title: "display有哪些值？说明他们的作用？",
              link: "https://blog.csdn.net/sjinsa/article/details/70820204",
              detail:
                "    block        块类型。默认宽度为父元素宽度，可设置宽高，换行显示。\n    none          缺省值。象行内元素类型一样显示。\n    inline        行内元素类型。默认宽度为内容宽度，不可设置宽高，同行显示。\n    inline-block  默认宽度为内容宽度，可以设置宽高，同行显示。\n    list-item    象块类型元素一样显示，并添加样式列表标记。\n    table        此元素会作为块级表格来显示。\n    inherit      规定应该从父元素继承 display 属性的值。",
            },
            {
              title: "PNG、GIF、JPG的区别及如何选",
              link: "https://blog.csdn.net/LuckXinXin/article/details/106070950",
              detail:
                "GIF\n\n8位像素，256色\n无损压缩\n支持简单动画\n支持boolean透明\n适合简单动画\n\nJPEG\n\n颜色限于256\n有损压缩\n可控制压缩质量\n不支持透明\n适合照片\n\nPNG\n\n有PNG8和truecolor PNG\nPNG8类似GIF颜色上限为256，文件小，支持alpha透明度，无动画\n适合图标、背景、按钮",
            },
            {
              title: "什么是盒子模型",
              link: "https://www.runoob.com/css/css-boxmodel.html",
              detail:
                '所有HTML元素可以看作盒子，在CSS中，"box model"这一术语是用来设计和布局时使用。\nCSS盒模型本质上是一个盒子，封装周围的HTML元素，它包括：边距，边框，填充，和实际内容。\n盒模型允许我们在其它元素和周围元素边框之间的空间放置元素。',
            },
            {
              title: "什么是CSS hack",
              link: "https://blog.csdn.net/freshlover/article/details/12132801",
              detail: "我们可以反过来利用CSS hack为不同版本的浏览器定制编写不同的CSS效果",
            },
            {
              title: "px和em的区别",
              link: "",
              detail:
                "px和em都是长度单位，区别是，px的值是固定的，指定是多少就是多少，计算比较容易。\nem的值不是固定的，并且em会继承父级元素的字体大小。\n浏览器的默认字体高都是16x。所以未经调整的浏览器都符合：1em-16px",
            },
          ],
        },

        {
          title: "综合篇",
          id: "zh",
          list: [
            {
              title: "行内元素、块元素有哪些？它们有什么不同？",
              link: "https://www.jeffjade.com/2015/06/24/2015-06-24-css-block-inline/",
              detail: "",
            },
            {
              title: "页面渲染html的过程",
              link: "https://juejin.cn/post/6844903667305316360",
              detail:
                "1. HTML → DOM树 （解析html）\n2. CSS → CSSOM树（解析CSS样式）\n3. 生成渲染树Render Tree （计算可见节点和样式）\n4. （渲染）layout\n5. （渲染）painting",
            },
            {
              title: "网页重绘、重排",
              link: "https://juejin.cn/post/6844904083212468238",
              detail:
                "重绘：某些元素的外观被改变，例如：元素的填充颜色\n重排：重新生成布局，重新排列元素。",
            },
            {
              title: "H5新标签",
              link: "https://www.html.cn/qa/html5/18948.html",
              detail: "",
            },
            {
              title: "前端性能优化 24 条建议",
              link: "https://segmentfault.com/a/1190000022205291",
              detail: "",
            },
            {
              title: "HTML文件里开头的!Doctype有什么作用？",
              link: "https://www.jianshu.com/p/ce48b13a4e1e",
              detail: "",
            },
            {
              title: "请你谈谈Cookie的弊端",
              link: "",
              detail:
                "cookie虽然在持久保存客户端数据提供了方便，分担了服务器存储的负担，但还是有很多局限性的。\n 第一：每个特定的域名下最多生成20个cookie\n\n 1.IE6或更低版本最多20个cookie\n 2.IE7和之后的版本最后可以有50个cookie。\n 3.Firefox最多50个cookie\n 4.chrome和Safari没有做硬性限制\n IE和Opera 会清理近期最少使用的cookie，Firefox会随机清理cookie。<br>\n cookie的最大大约为4096字节，为了兼容性，一般不能超过4095字节。\n\n IE 提供了一种存储可以持久化用户数据，叫做userdata，从IE5.0就开始支持。每个数据最多128K，每个域名下最多1M。这个持久化数据放在缓存中，如果缓存没有清理，那么会一直存在。\n 优点：极高的扩展性和可用性\n 1.通过良好的编程，控制保存在cookie中的session对象的大小。\n 2.通过加密和安全传输技术（SSL），减少cookie被破解的可能性。\n 3.只在cookie中存放不敏感数据，即使被盗也不会有重大损失。\n 4.控制cookie的生命期，使之不会永远有效。偷盗者很可能拿到一个过期的cookie。\n 缺点：\n 1.`Cookie`数量和长度的限制。每个domain最多只能有20条cookie，每个cookie长度不能超过4KB，否则会被截掉。\n\n 2.安全性问题。如果cookie被人拦截了，那人就可以取得所有的session信息。即使加密也与事无补，因为拦截者并不需要知道cookie的意义，他只要原样转发cookie就可以达到目的了。\n 3.有些状态不可能保存在客户端。例如，为了防止重复提交表单，我们需要在服务器端保存一个计数器。如果我们把这个计数器保存在客户端，那么它起不到任何作用。\n",
            },
            {
              title: "浏览器本地存储",
              link: "https://segmentfault.com/a/1190000012578794",
              detail: "",
            },
            {
              title: "cookie 和session 的区别",
              link: "https://www.zhihu.com/question/19786827",
              detail:
                "1、cookie数据存放在客户的浏览器上，session数据放在服务器上。\n2、cookie不是很安全，别人可以分析存放在本地的COOKIE并进行COOKIE欺骗\n考虑到安全应当使用session。\n3、session会在一定时间内保存在服务器上。当访问增多，会比较占用你服务器的性能\n考虑到减轻服务器性能方面，应当使用COOKIE。\n4、单个cookie保存的数据不能超过4K，很多浏览器都限制一个站点最多保存20个cookie。\n5、所以个人建议：\n将登陆信息等重要信息存放为SESSION\n其他信息如果需要保留，可以放在COOKIE中",
            },
            {
              title: "cookie中的session了解",
              link: "http://www.ityouknow.com/it/2019/05/11/cookie-session.html",
              detail: "",
            },
            {
              title: "web storage和cookie的区别",
              link: "https://www.jianshu.com/p/a231e9b05683",
              detail:
                "Web Storage的概念和cookie相似，区别是它是为了更大容量存储设计的。Cookie的大小是受限的，并且每次你请求一个新的页面的时候Cookie都会被发送过去，这样无形中浪费了带宽，另外cookie还需要指定作用域，不可以跨域调用。\n除此之外，Web Storage拥有setItem,getItem,removeItem,clear等方法，不像cookie需要前端开发者自己封装setCookie，getCookie。\n但是cookie也是不可以或缺的：cookie的作用是与服务器进行交互，作为HTTP规范的一部分而存在 ，而Web Storage仅仅是为了在本地“存储”数据而生\n浏览器的支持除了IE７及以下不支持外，其他标准浏览器都完全支持(ie及FF需在web服务器里运行)，值得一提的是IE总是办好事，例如IE7、IE6中的userData其实就是javascript本地存储的解决方案。通过简单的代码封装可以统一到所有的浏览器都支持web storage。\nlocalStorage和sessionStorage都具有相同的操作方法，例如setItem、getItem和removeItem等",
            },
            {
              title: "说说你对语义化的理解？",
              link: "https://blog.csdn.net/weixin_44347685/article/details/114126014",
              detail:
                "1，去掉或者丢失样式的时候能够让页面呈现出清晰的结构\n2，有利于SEO：和搜索引擎建立良好沟通，有助于爬虫抓取更多的有效信息：爬虫依赖于标签来确定上下文和各个关键字的权重；\n3，方便其他设备解析（如屏幕阅读器、盲人阅读器、移动设备）以意义的方式来渲染网页；\n4，便于团队开发和维护，语义化更具可读性，是下一步吧网页的重要动向，遵循W3C标准的团队都遵循这个标准，可以减少差异化。",
            },
            {
              title: "如何实现浏览器内多个标签页之间的通信?",
              link: "",
              detail: "调用localstorge、cookies等本地存储方式",
            },
            {
              title: "你如何对网站的文件和资源进行优化？",
              link: "",
              detail:
                "期待的解决方案包括：\n文件合并\n文件最小化/文件压缩\n使用 CDN 托管\n缓存的使用（多个域名来提供缓存）\n其他",
            },
            {
              title: "请说出三种减少页面加载时间的方法",
              link: "",
              detail:
                "1.优化图片 \n 2.图像格式的选择（GIF：提供的颜色较少，可用在一些对颜色要求不高的地方） \n 3.优化CSS（压缩合并css，如margin-top,margin-left...) \n 4.网址后加斜杠（如www.campr.com/目录，会判断这个“目录是什么文件类型，或者是目录。） \n 5.标明高度和宽度（如果浏览器没有找到这两个参数，它需要一边下载图片一边计算大小，如果图片很多，浏览器需要不断地调整页面。这不但影响速度，也影响浏览体验。 \n当浏览器知道了高度和宽度参数后，即使图片暂时无法显示，页面上也会腾出图片的空位，然后继续加载后面的内容。从而加载时间快了，浏览体验也更好了。） \n\n6.减少http请求（合并文件，合并图片）。",
            },
            {
              title: "你都使用哪些工具来测试代码的性能",
              link: "",
              detail:
                "Profiler, JSPerf（http://jsperf.com/nexttick-vs-setzerotimeout-vs-settimeout）, Dromaeo",
            },

            {
              title: "一个页面从输入 URL 到页面加载显示完成，这个过程中都发生了什么？",
              link: "",
              detail:
                "分为4个步骤：\n（1），当发送一个URL请求时，不管这个URL是Web页面的URL还是Web页面上每个资源的URL，浏览器都会开启一个线程来处理这个请求，同时在远程DNS服务器上启动一个DNS查询。这能使浏览器获得请求对应的IP地址。\n（2）， 浏览器与远程Web服务器通过TCP三次握手协商来建立一个TCP/IP连接。该握手包括一个同步报文，一个同步-应答报文和一个应答报文，这三个报文在 浏览器和服务器之间传递。该握手首先由客户端尝试建立起通信，而后服务器应答并接受客户端的请求，最后由客户端发出该请求已经被接受的报文。\n（3），一旦TCP/IP连接建立，浏览器会通过该连接向远程服务器发送HTTP的GET请求。远程服务器找到资源并使用HTTP响应返回该资源，值为200的HTTP响应状态表示一个正确的响应。\n（4），此时，Web服务器提供资源服务，客户端开始下载资源。\n\n请求返回后，便进入了我们关注的前端模块\n简单来说，浏览器会解析HTML生成DOM Tree，其次会根据CSS生成CSS Rule Tree，而javascript又可以根据DOM API操作DOM",
            },
            {
              title: "平时如何管理你的项目？",
              link: "",
              detail:
                "先期团队必须确定好全局样式（globe.css），编码模式(utf-8) 等；\n\n        编写习惯必须一致（例如都是采用继承式的写法，单样式都写成一行）；\n\n        标注样式编写人，各模块都及时标注（标注关键样式调用的地方）；\n\n        页面进行标注（例如 页面 模块 开始和结束）；\n\n        CSS跟HTML 分文件夹并行存放，命名都得统一（例如style.css）；\n\n        JS 分文件夹存放 命名以该JS功能为准的英文翻译。\n\n        图片采用整合的 images.png png8 格式文件使用 尽量整合在一起使用方便将来的管理 ",
            },
            {
              title: "前端需要注意哪些seo",
              link: "https://zhuanlan.zhihu.com/p/64068492",
              detail:
                "合理的title、description、keywords\n语义化的HTML代码，符合W3C规范：语义化代码让搜索引擎容易理解网页。\n重要内容HTML代码放在最前\n重要内容不要用js输出：爬虫不会执行js获取内容\n少用iframe：搜索引擎不会抓取iframe中的内容\n非装饰性图片必须加alt\n提高网站速度：网站速度是搜索引擎排序的一个重要指标",
            },
            {
              title: "HTML5离线缓存怎么使用，什么原理",
              link: "https://juejin.cn/post/6844903590062997517",
              detail:
                "原理\nHTML5的离线存储是基于一个manifest文件(缓存清单文件，后缀为. appcache)的缓存机制(不是存储技术)，通过这个文件上的清单解析离线存储资源，这些资源就会像cookie一样被存储了下来。之后当网络在处于离线状态时，浏览器会通过被离线存储的数据进行页面展示。",
            },
            {
              title: "iframe有哪些优点？iframe缺点是什么？",
              link: "https://www.cnblogs.com/chengzp/p/7757840.html",
              detail:
                "优点\niframe能够原封不动的把嵌入的网页展现出来。\n如果有多个网页引用iframe，那么你只需要修改iframe的内容，就可以实现调用的每一个页面内容的更改，方便快捷。\n网页如果为了统一风格，头部和版本都是一样的，就可以写成一个页面，用iframe来嵌套，可以增加代码的可重用。\n如果遇到加载缓慢的第三方内容如图标和广告，这些问题可以由iframe来解决。\n\n缺点\niframe会阻塞主页面的onload事件；\niframe和主页面共享连接池，而浏览器对相同域的连接有限制，所以会影响页面的并行加载。，会产生很多页面，不容易管理。\niframe框架结构有时会让人感到迷惑，如果框架个数多的话，可能会出现上下、左右滚动条，会分散访问者的注意力，用户体验度差。\n代码复杂，无法被一些搜索引擎索引到，这一点很关键，现在的搜索引擎爬虫还不能很好的处理iframe中的内容，所以使用iframe会不利于搜索引擎优化（SEO）。\n很多的移动设备无法完全显示框架，设备兼容性差。\niframe框架页面会增加服务器的http请求，对于大型网站是不可取的",
            },
            {
              title: "Canvas和SVG的区别",
              link: "https://www.cnblogs.com/xuehaoyue/p/6557120.html",
              detail:
                "Canvas\n通过 JavaScript 来绘制 2D 图形	\n是HTML5提供的新元素<canvas>	\n位图（标量图），放大或改变尺寸会失真；逐像素进行渲染，依赖分辨率	\n弱的文本渲染能力（因为放大会失真）	能够以 .png 或 .jpg 格式保存结果图像；能够引入 .png 或 .jpg格式的图片	不支持事件处理器（一旦图形被绘制完成，它就不会继续得到浏览器的关注。如果其位置发生变化，那么整个场景也需要重新绘制，包括任何或许已被图形覆盖的对象。）	\n不能被引擎抓取	\n最适合图像密集型的游戏，其中的许多对象会被频繁重绘	\n\nSVG\n是一种使用 XML 描述 2D 图形的语言\n历史久远，并不是HTML5转悠的标签\n矢量图，放大或改变尺寸不会失真；不依赖分辨率\n最适合带有大型渲染区域的应用程序，比如谷歌地图（因为放大不会失真）\n不能以 .png 或 .jpg 格式保存结果图像；不能引入 .png 或 .jpg格式的图片\n支持事件处理器（SVG DOM 中的每个元素都是可用的。您可以为某个元素附加 JavaScript 事件处理器。每个被绘制的图形均被视为对象。如果 SVG 对象的属性发生变化，那么浏览器能够自动重现图形。）\n可以被引擎抓取\n复杂度高会减慢渲染速度（任何过度使用 DOM 的应用都不快）\n不适合游戏应用",
            },
            {
              title: "web开发中会话跟踪方式整理",
              link: "https://blog.csdn.net/u014345282/article/details/49283433",
              detail:
                "1. 使用隐藏域进行会话跟踪\n2. SSL会话{Secure Socket Layer）\n3.Cookies\n4.URL重写\n5.IP地址",
            },
            {
              title: "HTML全局属性",
              link: "https://developer.mozilla.org/zh-CN/docs/Web/HTML/Global_attributes",
              detail: "",
            },
            {
              title: "HTML中src和href的区别",
              link: "https://segmentfault.com/a/1190000002877022",
              detail:
                "href和src是有区别的，而且是不能相互替换的。我们在可替换的元素上使用src，然而把href用于在涉及的文档和外部资源之间建立一个关系。",
            },
            {
              title: "mocha+chai使用记录",
              link: "",
              detail:
                "mocha+chai是比较流行的测试框架‘套装’，能实现一些基本的前端测试如函数功能测试，模拟登陆，异步测试,流程测试等\nmocha是一个测试工具库，它只纯粹对测试行为(过程)进行描述；而chai是一个断言（推断）库，它可以将测试结果进行各种判断，以此推断是否符合预期，因此两者常常进行组合使用",
            },
          ],
        },
      ],
      list: [],
      itemTab: [],
      nowID: 0,
      active: 0,
      MENU: [],
    };
  },
  created() {
    this.DATA.forEach((array, value) => {
      this.list.push(array.id);
    });
  },
  mounted() {
    window.addEventListener("scroll", this.scrollHandle); //绑定页面滚动事件
    for (let i = 0; i < this.list.length; i++) {
      let ele = document.getElementById(this.list[i]);
      this.itemTab.push(ele.offsetTop);
    }
    //获取所有菜单
    let Menu = document.getElementsByClassName("menu-one");
    Menu.forEach((array, value) => {
      this.MENU.push(array);
    });
    this.MENU[0].setAttribute("class", "select");
  },
  methods: {
    Slide(e) {
      document.getElementById(e).scrollIntoView({ behavior: "smooth" });
    },
    scrollHandle(event) {
      let ws = window.scrollY;
      this.itemTab.forEach((item, index) => {
        if (ws > item - 50) {
          this.active = index;
        }
      });
      if (this.active != this.nowID) {
        for (let i = 0; i < this.MENU.length; i++) {
          if (i == this.active) {
            this.MENU[i].setAttribute("class", "select");
          } else {
            this.MENU[i].setAttribute("class", "menu-one");
          }
        }
        this.nowID = this.active;
      }
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  transition: all 0.5s;
}

.page {
  width: 700px;
  margin: 0 auto;
}

li {
  margin-top: 15px;
}

a {
  text-decoration: none;
  color: #000000;
}

.headr {
  background-color: #5fd857;
  width: 100%;
  line-height: 180px;
  text-align: center;
  color: rgb(255, 255, 255);
  font-size: 30px;
}

a:hover {
  color: #636363;
}

.title {
  font-size: 32px;
  margin-top: 30px;
  font-weight: bold;
  color: #25b668;
  position: relative;
  display: inline-block;
}

.title::after {
  content: "";
  width: 100%;
  height: 5px;
  position: absolute;
  bottom: 6px;
  left: 0;
  opacity: 0.3;
  background-color: #25b668;
}

.tips {
  font-size: 10px;
  margin: 20px;
  opacity: 0.5;
  text-align: center;
}

.detail {
  margin-top: 10px;
  background-color: #1e1e1e;
  padding: 10px;
  font-size: 12px;
  color: #ffffff;
  border-radius: 5px;
  line-height: 150%;
  font-weight: lighter;
  white-space: pre-line;
}
.el-collapse-item__header {
  border-bottom: none !important;
  line-height: 30px !important;
  height: 30px !important;
  color: #727272 !important;
  font-size: 10px !important;
}
.el-collapse-item__wrap {
  border-bottom: none !important;
}
.menu {
  position: fixed;
  left: 80%;
  bottom: 60px;
  user-select: none;
}
.select {
  font-size: 25px;
  margin-top: 10px;
  color: #25b668;
}
.menu-one {
  margin-top: 10px;
  font-size: 20px;
  opacity: 0.5;
}

@media (max-width: 1080px) {
  .page {
    width: 80%;
    font-size: 13px;
  }
  .headr {
    font-size: 20px;
    line-height: 100px;
  }
  .title {
    font-size: 25px;
  }
  .detail {
    font-size: 10px;
    line-height: 150%;
  }

  .menu {
    position: fixed;
    right: 10px;
    bottom: 60px;
  }
  .menu-one {
    margin-top: 15px;
    font-size: 10px;
    text-align: right;
    font-weight: 550;
  }
  .select {
    margin-top: 15px;
    font-size: 12px;
    text-align: right;
    color: #25b668;
  }
}
</style>
