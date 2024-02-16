const e=JSON.parse('{"key":"v-6a34dcf6","path":"/java/java-se/17_%E5%8F%8D%E5%B0%84.html","title":"17. 反射","lang":"zh-CN","frontmatter":{"lang":"zh-CN","title":"17. 反射","description":"Java的基本-反射","author":"景天","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/java/java-se/17_%E5%8F%8D%E5%B0%84.html"}],["meta",{"property":"og:site_name","content":"Index Team"}],["meta",{"property":"og:title","content":"17. 反射"}],["meta",{"property":"og:description","content":"Java的基本-反射"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-02-16T02:17:19.000Z"}],["meta",{"property":"article:author","content":"景天"}],["meta",{"property":"article:modified_time","content":"2024-02-16T02:17:19.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"17. 反射\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-02-16T02:17:19.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"景天\\"}]}"]]},"headers":[{"level":2,"title":"过程","slug":"过程","link":"#过程","children":[]},{"level":2,"title":"类加载器","slug":"类加载器","link":"#类加载器","children":[{"level":3,"title":"分类","slug":"分类","link":"#分类","children":[]},{"level":3,"title":"双亲委派模型","slug":"双亲委派模型","link":"#双亲委派模型","children":[]}]},{"level":2,"title":"类加载时机","slug":"类加载时机","link":"#类加载时机","children":[]},{"level":2,"title":"什么是反射","slug":"什么是反射","link":"#什么是反射","children":[]},{"level":2,"title":"获取字节码文件对象的几种方式","slug":"获取字节码文件对象的几种方式","link":"#获取字节码文件对象的几种方式","children":[]},{"level":2,"title":"关于Class","slug":"关于class","link":"#关于class","children":[]},{"level":2,"title":"配置文件(.properties)","slug":"配置文件-properties","link":"#配置文件-properties","children":[]},{"level":2,"title":"通过反射获取构造方法(Constructor)","slug":"通过反射获取构造方法-constructor","link":"#通过反射获取构造方法-constructor","children":[]},{"level":2,"title":"通过反射获取成员变量(Field)","slug":"通过反射获取成员变量-field","link":"#通过反射获取成员变量-field","children":[]},{"level":2,"title":"通过反射获取成员方法(Method)","slug":"通过反射获取成员方法-method","link":"#通过反射获取成员方法-method","children":[]},{"level":2,"title":"其他API","slug":"其他api","link":"#其他api","children":[]},{"level":2,"title":"自定义类加载器","slug":"自定义类加载器","link":"#自定义类加载器","children":[]}],"git":{"createdTime":1708049839000,"updatedTime":1708049839000,"contributors":[{"name":"LSauce","email":"ls_satan@qq.com","commits":1}]},"readingTime":{"minutes":10.09,"words":3028},"filePathRelative":"java/java-se/17_反射.md","localizedDate":"2024年2月16日","excerpt":"<p>学习目标:</p>\\n<ul>\\n<li>熟悉类加载过程与类加载器</li>\\n<li>熟练掌握类加载时机</li>\\n<li>掌握如何获取字节码文件对象</li>\\n<li>掌握使用配置文件</li>\\n<li>掌握Class,Constructor,Field,Method使用</li>\\n<li>熟悉了解自定义类加载器与双亲委派模型(有能力的同学掌握)</li>\\n</ul>\\n<h1> 类加载</h1>\\n<p>之前学的</p>\\n<figure><figcaption>image-20221022112026823</figcaption></figure>\\n<h2> 过程</h2>\\n<ul>\\n<li>\\n<p>加载</p>\\n<ul>\\n<li>通过类加载器(ClassLoader)加载.class文件,读取到内存</li>\\n<li>在这个过程中,生成这个类所对应的字节码文件对象(java.lang.Class)</li>\\n</ul>\\n</li>\\n<li>\\n<p>链接</p>\\n<ul>\\n<li>\\n<p>验证: 对字节码文件格式的验证(aced babe 咖啡宝贝 魔法数字)</p>\\n</li>\\n<li>\\n<p>准备: 给类的静态成员分配内存并赋予默认初始值</p>\\n<ul>\\n<li>\\n<div class=\\"language-java line-numbers-mode\\" data-ext=\\"java\\"><pre class=\\"language-java\\"><code><span class=\\"token keyword\\">static</span> <span class=\\"token keyword\\">int</span> a <span class=\\"token operator\\">=</span><span class=\\"token number\\">10</span><span class=\\"token punctuation\\">;</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div></div></div></li>\\n</ul>\\n</li>\\n<li>\\n<p>解析: 把符号引(用一组符号来描述被引用的目标)用转化为直接引用(真实的地址)</p>\\n</li>\\n<li>\\n<div class=\\"language-text line-numbers-mode\\" data-ext=\\"text\\"><pre class=\\"language-text\\"><code>class Student{\\n String name;\\n int age;\\n Subject subject;\\n \\n}\\n\\nclass Subject{\\n\\tString name;\\n}\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div></li>\\n</ul>\\n</li>\\n<li>\\n<p>初始化</p>\\n<ul>\\n<li>给静态成员赋真实的值, 并且执行静态代码块中的内容</li>\\n</ul>\\n</li>\\n</ul>"}');export{e as data};
