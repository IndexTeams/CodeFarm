const e=JSON.parse('{"key":"v-59c24075","path":"/java/spring/Content01-Servlet.html","title":"01. Servlet","lang":"zh-CN","frontmatter":{"lang":"zh-CN","title":"01. Servlet","description":"Spring基础-Servlet","author":"石头","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/java/spring/Content01-Servlet.html"}],["meta",{"property":"og:site_name","content":"Index Team"}],["meta",{"property":"og:title","content":"01. Servlet"}],["meta",{"property":"og:description","content":"Spring基础-Servlet"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://mister-hope.github.io/"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-02-16T03:08:07.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"01. Servlet"}],["meta",{"property":"article:author","content":"石头"}],["meta",{"property":"article:modified_time","content":"2024-02-16T03:08:07.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"01. Servlet\\",\\"image\\":[\\"https://mister-hope.github.io/\\"],\\"dateModified\\":\\"2024-02-16T03:08:07.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"石头\\"}]}"]]},"headers":[{"level":2,"title":"学习目标","slug":"学习目标","link":"#学习目标","children":[]},{"level":2,"title":"前置知识准备","slug":"前置知识准备","link":"#前置知识准备","children":[]},{"level":2,"title":"JavaEE介绍","slug":"javaee介绍","link":"#javaee介绍","children":[]},{"level":2,"title":"Servlet介绍","slug":"servlet介绍","link":"#servlet介绍","children":[]},{"level":2,"title":"pom.xml","slug":"pom-xml","link":"#pom-xml","children":[{"level":3,"title":"打包方式","slug":"打包方式","link":"#打包方式","children":[]},{"level":3,"title":"scope作用域","slug":"scope作用域","link":"#scope作用域","children":[]}]},{"level":2,"title":"Servlet开发(后面会单独重点讲解)","slug":"servlet开发-后面会单独重点讲解","link":"#servlet开发-后面会单独重点讲解","children":[]},{"level":2,"title":"docBase 设置来访问资源","slug":"docbase-设置来访问资源","link":"#docbase-设置来访问资源","children":[]},{"level":2,"title":"★_IDEA中使用Tomcat","slug":"★-idea中使用tomcat","link":"#★-idea中使用tomcat","children":[]},{"level":2,"title":"GenericServlet和HttpServlet","slug":"genericservlet和httpservlet","link":"#genericservlet和httpservlet","children":[]},{"level":2,"title":"@WebServlet注解","slug":"webservlet注解","link":"#webservlet注解","children":[{"level":3,"title":"value属性（或urlPatterns）","slug":"value属性-或urlpatterns","link":"#value属性-或urlpatterns","children":[]},{"level":3,"title":"一个Servlet可以对应多个URL-Pattern","slug":"一个servlet可以对应多个url-pattern","link":"#一个servlet可以对应多个url-pattern","children":[]}]},{"level":2,"title":"★★★URL-Pattern","slug":"★★★url-pattern","link":"#★★★url-pattern","children":[{"level":3,"title":"合法写法","slug":"合法写法","link":"#合法写法","children":[]},{"level":3,"title":"优先级","slug":"优先级","link":"#优先级","children":[]},{"level":3,"title":"缺省Servlet","slug":"缺省servlet","link":"#缺省servlet","children":[]}]},{"level":2,"title":"Servlet的生命周期","slug":"servlet的生命周期","link":"#servlet的生命周期","children":[]},{"level":2,"title":"放入配置","slug":"放入配置","link":"#放入配置","children":[]},{"level":2,"title":"取出配置","slug":"取出配置","link":"#取出配置","children":[]},{"level":2,"title":"获得方式","slug":"获得方式","link":"#获得方式","children":[]},{"level":2,"title":"获得真实路径（了解）","slug":"获得真实路径-了解","link":"#获得真实路径-了解","children":[]},{"level":2,"title":"Web应用的目录结构","slug":"web应用的目录结构","link":"#web应用的目录结构","children":[]},{"level":2,"title":"Maven工程的目录结构","slug":"maven工程的目录结构","link":"#maven工程的目录结构","children":[]},{"level":2,"title":"对应关系图（核心）","slug":"对应关系图-核心","link":"#对应关系图-核心","children":[]}],"git":{"createdTime":1708049839000,"updatedTime":1708052887000,"contributors":[{"name":"LSauce","email":"ls_satan@qq.com","commits":2}]},"readingTime":{"minutes":14.42,"words":4325},"filePathRelative":"java/spring/Content01-Servlet.md","localizedDate":"2024年2月16日","excerpt":"<h1> 前言</h1>\\n<h2> 学习目标</h2>\\n<blockquote>\\n<ol>\\n<li>\\n<p>掌握Tomcat的使用，以及IDEA中使用Tomcat应用的方式</p>\\n</li>\\n<li>\\n<p>掌握Web应用的目录结构</p>\\n<ul>\\n<li>标准目录结构（应用部署、编译）</li>\\n<li>Maven开发的目录结构</li>\\n<li>使用IDEA来开发Web应用</li>\\n</ul>\\n</li>\\n<li>\\n<p>熟悉Servlet的执行流程和生命周期</p>\\n<ul>\\n<li>掌握service方法</li>\\n<li>掌握init、destroy方法执行时机和次数</li>\\n</ul>\\n</li>\\n<li>\\n<p>熟悉Servlet使用和相关配置</p>\\n</li>\\n<li>\\n<p>熟悉ServletContext的功能</p>\\n</li>\\n<li>\\n<p>了解XML配置方式</p>\\n</li>\\n</ol>\\n</blockquote>"}');export{e as data};
