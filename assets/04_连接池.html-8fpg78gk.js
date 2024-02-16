const t=JSON.parse('{"key":"v-c15f348a","path":"/java/database/04_%E8%BF%9E%E6%8E%A5%E6%B1%A0.html","title":"04. 连接池","lang":"zh-CN","frontmatter":{"lang":"zh-CN","title":"04. 连接池","description":"连接池","author":"空灵","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/java/database/04_%E8%BF%9E%E6%8E%A5%E6%B1%A0.html"}],["meta",{"property":"og:site_name","content":"Index Team"}],["meta",{"property":"og:title","content":"04. 连接池"}],["meta",{"property":"og:description","content":"连接池"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-02-16T02:17:19.000Z"}],["meta",{"property":"article:author","content":"空灵"}],["meta",{"property":"article:modified_time","content":"2024-02-16T02:17:19.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"04. 连接池\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-02-16T02:17:19.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"空灵\\"}]}"]]},"headers":[{"level":2,"title":"DBCP","slug":"dbcp","link":"#dbcp","children":[]},{"level":2,"title":"C3P0","slug":"c3p0","link":"#c3p0","children":[]},{"level":2,"title":"Druid","slug":"druid","link":"#druid","children":[]},{"level":2,"title":"HikariCP","slug":"hikaricp","link":"#hikaricp","children":[]}],"git":{"createdTime":1708049839000,"updatedTime":1708049839000,"contributors":[{"name":"LSauce","email":"ls_satan@qq.com","commits":1}]},"readingTime":{"minutes":6.72,"words":2017},"filePathRelative":"java/database/04_连接池.md","localizedDate":"2024年2月16日","excerpt":"<p>学习目标</p>\\n<ul>\\n<li>理解连接池是什么</li>\\n<li>掌握池化思想的好处</li>\\n<li>会使用第三方的连接池</li>\\n</ul>\\n<h1> 连接池</h1>\\n<p>连接池是创建和管理一个连接的缓冲池的技术，这些连接准备好被任何需要它们的线程使用。</p>\\n<figure><figcaption>image-20230103093213233</figcaption></figure>\\n<p><strong>使用连接池有哪些好处？</strong></p>\\n<ul>\\n<li><strong>减少连接创建时间</strong></li>\\n</ul>\\n<p>创建新的 JDBC 连接仍会有网络和 JDBC 驱动的开销。如果这类连接是“循环”使用的，使用该方式这些花销就可避免。平分。</p>"}');export{t as data};
