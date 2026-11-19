/* 简历问题：由《Java后端面试全题库-简历定制版.md》（2026-11-19 桌面版，90 题 + 口径卡）整体转入。
   四步结构：是什么 / 为什么 / 怎么做 / 实际应用；⭐/⚠️ 标记移入每题 note。 */
window.__RES = (window.__RES || []).concat([
/* ===================== 基本信息 ===================== */
  {
    group: "基本信息",
    title: "请做一个简短的自我介绍",
    blocks: [
      { label: "是什么", text: "把简历压缩成 60 秒的口述，只讲对方最关心的三件事——我是谁、我做过什么、我为什么能来。" },
      { label: "为什么", text: "面试官前 30 秒决定要不要深挖，自我介绍是\"给钩子\"而不是\"念简历\"，要把话题引到你准备最充分的地方。" },
      { label: "怎么做", text: "三段式——① 学校专业 + 求职意向；② 两段项目各一句，报数字（7 服务 / 26 表 / 100+ 接口、6 子模块 / 60+ 接口）；③ 一句亮点收尾后`停住`，等他追问。" },
      { label: "实际应用", text: "\"常州大学怀德学院软件工程 2027 届，投 Java 后端实习。做过两个项目：一个是企业知识库 RAG 问答系统，7 个微服务、26 张表、100 多个接口；一个是离散制造 MES，负责设备管理模块 60 多个接口。两个项目从建表、接口到 Vue 页面都是我串下来的，对状态机和 AI 工具调用这块比较熟。\"说完停住。" },
    ],
    note: "⭐ 高频"
  },
  {
    group: "基本信息",
    title: "你是 2027 届，现在 22 岁，为什么这么早就出来找实习？",
    blocks: [
      { label: "是什么", text: "解释时间线合理性——2023.09 入学、2027.06 毕业，现在是大四上，找实习的时间点完全正常。" },
      { label: "为什么", text: "面试官担心的是\"能不能稳定出勤\"和\"是不是随便投投\"，不是在考年龄。" },
      { label: "怎么做", text: "给明确的可实习时间段 + 到岗方式，再补一句学校允许实习/课程安排。" },
      { label: "实际应用", text: "\"现在大四上，课程基本结束了，学校也支持外出实习。我可以稳定实习 3 个月以上，每周五天到岗，能长期做更好。\"" },
    ],
    note: ""
  },
  {
    group: "基本信息",
    title: "为什么投 Java 后端实习生，而不是前端或者算法？",
    blocks: [
      { label: "是什么", text: "考察求职动机和自我认知是否清晰。" },
      { label: "为什么", text: "你简历上前端也写了，招聘方怕你入职后心思不在后端。" },
      { label: "怎么做", text: "承认前端能做，但说明后端是你的主战场——从建表、Service 事务到接口设计这条链路你做得最多，也最想继续深入。" },
      { label: "实际应用", text: "\"前端我是为了把项目闭环做出来才学的，能联调、能调样式。但我真正花时间的是后端：状态机怎么设计、事务边界怎么划、接口怎么收敛，这些我更感兴趣，也想继续往这个方向走。\"\n⚠️ 别说\"前端太难所以选后端\"，这会显得在逃避。" },
    ],
    note: ""
  },
  {
    group: "基本信息",
    title: "用三个词形容你自己，并各举一个例子",
    blocks: [
      { label: "是什么", text: "行为面常见开场，用三个标签快速建立印象。" },
      { label: "为什么", text: "考察自我认知和表达能力，答案要能落到具体事上，不能只有形容词。" },
      { label: "怎么做", text: "每个词 = 一个形容词 + 一件简历里的真事，一件事一句话。" },
      { label: "实际应用", text: "\"第一是`闭环意识`——两个项目我都是从建表做到前端页面，不是为了完成任务，是为了能真正跑起来验证。第二是`规范`——状态变更我统一收口到一个出口，写操作保证原子性，逻辑删除前做依赖校验。第三是`愿意较真`——RAG 项目里为了多实例不重复处理文档，我对比了分布式锁和条件更新，最后选了更轻的方案。\"" },
    ],
    note: ""
  },
/* ===================== 教育经历 ===================== */
  {
    group: "教育经历",
    title: "介绍一下你的学校和专业",
    blocks: [
      { label: "是什么", text: "常州大学怀德学院，软件工程，全日制本科，2023.09–2027.06。" },
      { label: "为什么", text: "面试官想确认学历性质（是否全日制、是否独立学院）和专业对口程度。" },
      { label: "怎么做", text: "实事求是说学校性质，不夸大也不贬低，重点落在专业课程设置和你的实际产出上。" },
      { label: "实际应用", text: "\"常州大学怀德学院，软件工程全日制本科，2027 年 6 月毕业。课程是按软件工程体系走的，Java、数据结构、操作系统、计算机网络都开了，我自己的项目也是 Java 后端方向，专业是对口的。\"" },
    ],
    note: ""
  },
  {
    group: "教育经历",
    title: "为什么选择软件工程专业？",
    blocks: [
      { label: "是什么", text: "考察专业选择是主动还是被调剂。" },
      { label: "为什么", text: "主动选择意味着学习内驱力更强。" },
      { label: "怎么做", text: "从\"想做能落地的东西\"角度切入，软件工程的课程链条（编程 → 数据结构 → 系统 → 工程实践）正好对应你做项目的路径。" },
      { label: "实际应用", text: "\"我选软件工程是因为它不只是教编程，还教怎么把一个系统组织起来——从需求到设计到实现。我做两个项目的时候明显感觉到，课程里学的状态流转、分层这些思路是能用上的。\"" },
    ],
    note: ""
  },
  {
    group: "教育经历",
    title: "主修课程里，哪一门对你做项目帮助最大？",
    blocks: [
      { label: "是什么", text: "把课程和项目建立联系，证明你不是\"上课归上课、做项目归做项目\"。" },
      { label: "为什么", text: "面试官想看你知识是不是活的。" },
      { label: "怎么做", text: "挑一门能讲出具体映射的，不要泛泛说\"都有用\"。" },
      { label: "实际应用", text: "\"`数据结构`。RAG 项目里文档切片后要存进 pgvector 做相似度检索，本质是高维向量的最近邻查找；MES 里设备状态流转我用状态机建模，其实就是有限状态自动机。这两处都是课程里的内容直接落地。另外操作系统里进程线程和锁的理解，帮我读懂了多实例抢占那块。\"" },
    ],
    note: "⭐ 高频"
  },
  {
    group: "教育经历",
    title: "Java 面向对象程序设计：三大特性是什么？",
    blocks: [
      { label: "是什么", text: "封装、继承、多态。" },
      { label: "为什么", text: "这是后续理解 Spring AOP、接口设计、多态注入的基础。" },
      { label: "怎么做", text: "每个特性一句话定义 + 一个代码级例子。" },
      { label: "实际应用", text: "封装——`DvMachinery` 把字段私有化，只通过 getter/setter 访问，状态字段不暴露随意改；继承——各 Controller 共用基础 ResponseEntity 结构；多态——Service 接口有多个实现，Spring 按 bean 名注入，声明式事务的代理对象也是多态的应用。" },
    ],
    note: ""
  },
  {
    group: "教育经历",
    title: "数据结构：HashMap 的底层实现是什么？",
    blocks: [
      { label: "是什么", text: "JDK 8 起是\"数组 + 链表 + 红黑树\"，默认容量 16，负载因子 0.75，链表长度超过 8 且数组容量 ≥ 64 时转为红黑树。" },
      { label: "为什么", text: "数组查询快但冲突要处理，链表解决哈希冲突，红黑树防止极端情况下链表退化成 O(n)。" },
      { label: "怎么做", text: "`hash(key)` 高位低位异或扰动 → `(n-1) & hash` 定位桶 → 无冲突直接放，有冲突链表/红黑树插入 → 元素数超过 `容量 × 0.75` 时扩容为 2 倍并 rehash。" },
      { label: "实际应用", text: "RAG 项目里做意图规则匹配时，我用 HashMap 存关键词到处理策略的映射，O(1) 命中；MES 里把状态流转规则（当前状态 → 允许的下一状态集合）缓存成 Map，校验时一次查表完成，不用每次扫全表判断。\n⚠️ 追问\"为什么容量是 2 的幂\"——因为 `(n-1) & hash` 等价于取模，但位运算更快，且扩容时元素位置只需要看新增的高位是 0 还是 1。" },
    ],
    note: "⭐ 高频"
  },
  {
    group: "教育经历",
    title: "操作系统：进程和线程有什么区别？",
    blocks: [
      { label: "是什么", text: "进程是资源分配的基本单位，线程是 CPU 调度的基本单位；一个进程可含多个线程，线程共享进程的内存空间和系统资源，但有自己的栈和程序计数器。" },
      { label: "为什么", text: "问这个是为了引出并发安全——共享内存就意味着要处理竞态。" },
      { label: "怎么做", text: "从资源、调度、通信、崩溃影响四个维度对比回答。" },
      { label: "实际应用", text: "RAG 项目多实例部署是`进程`级并行，每个实例独立处理文档；单个实例内部用线程池并发处理切块向量化是`线程`级并行。因为线程共享堆内存，所以状态抢占必须用数据库条件更新这种原子操作，而不是靠本地变量。" },
    ],
    note: ""
  },
  {
    group: "教育经历",
    title: "计算机网络：TCP 三次握手的过程？HTTP 和 HTTPS 区别？",
    blocks: [
      { label: "是什么", text: "三次握手 = SYN → SYN+ACK → ACK，目的是双方确认各自的发送和接收能力正常；HTTPS = HTTP + TLS，默认 443 端口，通过证书和非对称加密建立密钥后走对称加密传输。" },
      { label: "为什么", text: "考察网络基础，也顺便验证你项目里的 JWT 和调用链路是否真懂。" },
      { label: "怎么做", text: "握手按\"客户端发什么、服务端回什么、客户端再确认什么\"三步说清；HTTPS 讲\"身份验证 + 加密 + 完整性\"三点。" },
      { label: "实际应用", text: "RAG 项目 7 个微服务之间走 OpenFeign，底层是 HTTP/REST；前端 Axios 请求经过 Vite 代理转发到网关，网关用 JWT 校验身份后再路由到各服务。理解 HTTP 无状态，才需要在请求头里带 `Authorization: Bearer <token>`。" },
    ],
    note: ""
  },
  {
    group: "教育经历",
    title: "计算机组成原理：为什么 CPU 要有多级缓存？",
    blocks: [
      { label: "是什么", text: "CPU 速度远快于内存，多级缓存（L1/L2/L3）用来填补速度差距，基于程序访问的局部性原理。" },
      { label: "为什么", text: "面试官借此看你有没有\"性能分层\"的意识。" },
      { label: "怎么做", text: "加快缓存 → 缓存命中 → 缓存未命中去下一级，一级比一级大、一级比一级慢。" },
      { label: "实际应用", text: "这个思想和项目里的`缓存分层`是同一个道理——Redis 作为热点数据缓存挡在 MySQL 前面，向量检索结果做短期缓存挡在 pgvector 前面。本质都是\"快的小的放前面，慢的全的放后面\"。" },
    ],
    note: ""
  },
  {
    group: "教育经历",
    title: "你的成绩、排名、有没有获奖？（简历没写，提前准备）",
    blocks: [
      { label: "是什么", text: "简历没写通常意味着没什么可写，面试官可能会问。" },
      { label: "为什么", text: "不是决定因素，但回答含糊会扣分。" },
      { label: "怎么做", text: "如实说 + 用项目成果补位，不要把话题停在不利信息上。" },
      { label: "实际应用", text: "\"成绩中等偏上，没有拿过奖学金，所以简历上没写。但我把时间花在了做项目上，两个项目都是完整交付的，接口数量和模块规模在那儿，这是我比较拿得出手的部分。\"" },
    ],
    note: "⚠️ 容易答错或踩坑，注意口径"
  },
/* ===================== 专业技能 ===================== */
  {
    group: "专业技能",
    title: "ArrayList 和 LinkedList 的区别？",
    blocks: [
      { label: "是什么", text: "ArrayList 基于动态数组，LinkedList 基于双向链表。" },
      { label: "为什么", text: "考察数据结构选型能力。" },
      { label: "怎么做", text: "ArrayList 随机访问 O(1)、尾部添加快、中间插删要搬移元素；LinkedList 随机访问 O(n)、插删快（但要先找到位置）、额外内存开销大。" },
      { label: "实际应用", text: "项目里查询结果列表用 ArrayList，因为主要是遍历和按 index 渲染，几乎没有中间插入。如果有一个高频在中间增删的场景（比如任务队列），我会选 LinkedList 或直接用 ArrayDeque。" },
    ],
    note: "⭐ 高频"
  },
  {
    group: "专业技能",
    title: "HashMap 的扩容机制是什么？",
    blocks: [
      { label: "是什么", text: "元素数量超过 `threshold = capacity × loadFactor` 时容量翻倍，重新计算每个元素的位置。" },
      { label: "为什么", text: "桶位不够会导致冲突加剧、链表变长、查询退化。" },
      { label: "怎么做", text: "JDK 8 优化后不需要重新 hash，只需看原 hash 新增的高位是 0 还是 1——是 0 留在原位，是 1 移到\"原位置 + 旧容量\"的位置。" },
      { label: "实际应用", text: "知道扩容成本后，我在能预估数据量的场景会初始化 HashMap 容量，避免反复扩容；RAG 项目里状态映射表是固定几个条目，就没必要折腾，但大批量中间结果处理时会给初始容量。" },
    ],
    note: ""
  },
  {
    group: "专业技能",
    title: "ConcurrentHashMap 怎么保证线程安全？",
    blocks: [
      { label: "是什么", text: "JDK 8 用 `CAS + synchronized`，锁的是每个桶的头节点，粒度比 `Hashtable` 的全局锁细得多。" },
      { label: "为什么", text: "HashMap 线程不安全，多线程 put 可能导致死循环或数据丢失；Hashtable 全局锁性能太差。" },
      { label: "怎么做", text: "空桶用 CAS 插入，非空桶对头节点 synchronized，扩容时多线程协助迁移。" },
      { label: "实际应用", text: "虽然项目里我没直接在高并发场景用 ConcurrentHashMap，但理解这个机制帮我理解了\"锁粒度\"的思想——和数据库条件更新抢占一样，都是把锁的粒度缩到最小，让不冲突的操作并行。" },
    ],
    note: ""
  },
  {
    group: "专业技能",
    title: "创建线程有几种方式？线程池的核心参数有哪些？",
    blocks: [
      { label: "是什么", text: "创建线程常见 4 种（继承 Thread、实现 Runnable、实现 Callable + Future、线程池）；线程池 7 个核心参数。" },
      { label: "为什么", text: "生产环境不推荐 new Thread，因为不可控、无复用、无统一管理。" },
      { label: "怎么做", text: "核心参数——`corePoolSize`（核心线程数）、`maximumPoolSize`（最大线程数）、`keepAliveTime`（空闲存活时间）、`unit`（时间单位）、`workQueue`（任务队列）、`threadFactory`（线程工厂）、`handler`（拒绝策略）。执行流程：核心线程 → 队列 → 最大线程 → 拒绝策略。" },
      { label: "实际应用", text: "RAG 索引管线里文档解析、切片、向量化是 CPU/IO 密集型，我用线程池控制并发度，避免一次把内存打满；参数按 CPU 核数和 IO 等待比例调，不是随便填的。⚠️ 要说清\"队列满了才开最大线程\"，很多人答反。" },
    ],
    note: "⭐ 高频"
  },
  {
    group: "专业技能",
    title: "synchronized 和 ReentrantLock 有什么区别？",
    blocks: [
      { label: "是什么", text: "都是可重入锁，synchronized 是 JVM 关键字自动释放，ReentrantLock 是 JDK 层 API 需手动 lock/unlock。" },
      { label: "为什么", text: "问这个考察你对锁机制的理解深度和选型判断。" },
      { label: "怎么做", text: "synchronized 不可中断、非公平、自动释放；ReentrantLock 可中断、可设公平锁、支持 tryLock 超时、必须 finally 释放。" },
      { label: "实际应用", text: "项目里业务层基本用 synchronized 或直接用数据库乐观锁就够了，因为并发不高且逻辑简单。RAG 状态抢占我连本地锁都没用——因为多实例部署下本地锁根本挡不住，必须用数据库条件更新。" },
    ],
    note: ""
  },
  {
    group: "专业技能",
    title: "volatile 关键字的作用？",
    blocks: [
      { label: "是什么", text: "保证可见性和禁止指令重排，`不保证原子性`。" },
      { label: "为什么", text: "多线程下线程工作内存和主内存不一致会导致读到脏值。" },
      { label: "怎么做", text: "被 volatile 修饰的变量修改后立刻刷回主内存，读取时从主内存重新加载；通过内存屏障禁止特定指令重排。" },
      { label: "实际应用", text: "单例模式的双重检查锁（DCL）里，instance 必须加 volatile，否则可能拿到\"半初始化\"对象。⚠️ 千万别说 volatile 能保证原子性，`i++` 加了 volatile 依然线程不安全。" },
    ],
    note: ""
  },
  {
    group: "专业技能",
    title: "CAS 原理和 ABA 问题是什么？",
    blocks: [
      { label: "是什么", text: "Compare And Swap，比较内存值与预期值，相等才更新，是一条 CPU 原子指令；ABA 是指一个值被改成 B 又改回 A，CAS 察觉不到中间变化。" },
      { label: "为什么", text: "无锁编程的基础，ConcurrentHashMap、AtomicInteger 都基于它。" },
      { label: "怎么做", text: "ABA 通常加版本号或时间戳解决，Java 里用 `AtomicStampedReference`。" },
      { label: "实际应用", text: "数据库里的条件更新 `where id=? and status=0` 本质就是 CAS 思路——比较当前状态是否符合预期，符合才更新。ABA 在状态机里不会出现问题，因为状态是单向递进的，不会从 3 退回到 0。" },
    ],
    note: ""
  },
  {
    group: "专业技能",
    title: "ThreadLocal 的原理和内存泄漏问题？",
    blocks: [
      { label: "是什么", text: "为每个线程提供独立的变量副本，底层是 Thread 对象里的 ThreadLocalMap。" },
      { label: "为什么", text: "解决\"同一个变量在不同线程中要隔离\"的问题，比如用户上下文、事务上下文。" },
      { label: "怎么做", text: "每个 Thread 持有一个 Map，key 是 ThreadLocal 弱引用，value 是实际值。用完必须 `remove()`。" },
      { label: "实际应用", text: "Spring 的事务管理用 ThreadLocal 保存当前事务资源，保证同一线程内多个 DAO 操作拿到同一个 Connection。⚠️ 内存泄漏原因是 key 是弱引用会被 GC 回收，value 却还在，形成泄漏——线程池场景下尤其明显，所以必须 remove。" },
    ],
    note: ""
  },
  {
    group: "专业技能",
    title: "反射机制是什么？有什么应用场景？",
    blocks: [
      { label: "是什么", text: "运行时动态获取类的信息（类名、方法、字段、注解）并调用，基础 API 在 `java.lang.reflect`。" },
      { label: "为什么", text: "框架能在编译期不知道具体类的情况下工作，靠的就是反射。" },
      { label: "怎么做", text: "`Class.forName()` → `getMethod()` → `invoke()`，配合注解可以读取元数据。缺点是性能开销和安全限制。" },
      { label: "实际应用", text: "Spring IoC 容器通过反射实例化 Bean 并注入依赖；MyBatis 通过反射把 ResultSet 映射成实体对象；`@Transactional` 的代理也在运行时解析方法注解。项目里我自己写的统一参数校验，也是用反射读 DTO 字段上的校验注解。" },
    ],
    note: ""
  },
  {
    group: "专业技能",
    title: "Spring Boot 自动配置原理是什么？",
    blocks: [
      { label: "是什么", text: "根据 classpath 中的类和配置，自动往容器里注册所需的 Bean，不用手写大量 XML。" },
      { label: "为什么", text: "解决 Spring 传统配置繁琐的问题，做到\"开箱即用\"。" },
      { label: "怎么做", text: "启动类上的 `@EnableAutoConfiguration` 通过 `@Import` 加载 `AutoConfiguration.imports`（老版本是 `spring.factories`）里列出的配置类；配置类上用 `@ConditionalOnClass`、`@ConditionalOnMissingBean` 等条件注解决定是否生效。" },
      { label: "实际应用", text: "项目里加 `spring-boot-starter-data-redis` 依赖后，RedisTemplate 自动就有了；加 Spring AI 依赖后 ChatClient 自动装配。理解@ConditionalOnMissingBean 后，我知道自己定义同名 Bean 就能覆盖默认配置。" },
    ],
    note: "⭐ 高频"
  },
  {
    group: "专业技能",
    title: "Spring MVC 一次请求的完整流程？",
    blocks: [
      { label: "是什么", text: "请求从浏览器到 Controller 再到响应的完整链路。" },
      { label: "为什么", text: "这是后端面试最高频题之一，也直接对应你项目里的接口。" },
      { label: "怎么做", text: "用户请求 → DispatcherServlet → HandlerMapping 找处理器 → HandlerAdapter 调用 Controller → 返回 ModelAndView 或 JSON（@ResponseBody）→ ViewResolver（如需要）→ 响应。" },
      { label: "实际应用", text: "以 MES 设备台账分页为例——GET `/api/dv/machinery/page?pageNum=1&pageSize=10`，DispatcherServlet 按路径匹配到 `DvMachineryController#page`，Spring 把 query 参数按名字 POJO 绑定到 `DvMachineryQueryDTO`，Controller 调 Service，最后 `Result.success(page)` 转 JSON 返回。⚠️ 方法参数没有 `@RequestParam` 也能绑定，因为 Spring 默认当 POJO 处理。" },
    ],
    note: "⭐ 高频"
  },
  {
    group: "专业技能",
    title: "过滤器 Filter 和拦截器 Interceptor 的区别？",
    blocks: [
      { label: "是什么", text: "都是请求拦截机制，Filter 属于 Servlet 规范、在 DispatcherServlet 之前，Interceptor 属于 Spring MVC、在 DispatcherServlet 之后、Controller 之前。" },
      { label: "为什么", text: "考察你对请求生命周期的理解，也关系到 JWT 校验放在哪一层。" },
      { label: "怎么做", text: "Filter 能拦截所有请求（包括静态资源），Interceptor 只拦 Controller；Interceptor 能拿到 Spring 上下文和 Handler 方法信息。" },
      { label: "实际应用", text: "RAG 项目的 JWT 鉴权我放在网关/Filter 层，因为要在请求进入业务前统一校验；而接口耗时统计和日志我用 Interceptor，因为能拿到具体的方法签名和注解信息。" },
    ],
    note: ""
  },
  {
    group: "专业技能",
    title: "MyBatis 中 #{} 和 ${} 的区别？",
    blocks: [
      { label: "是什么", text: "`#{}` 是预编译占位符（生成 `?`），`${}` 是字符串直接拼接。" },
      { label: "为什么", text: "这是 SQL 注入的核心考点，必须答对。" },
      { label: "怎么做", text: "`#{}` 走 PreparedStatement，参数会被转义，安全；`${}` 直接拼进 SQL，有注入风险，只能用于表名、列名、排序方向这类不能参数化的地方，且要做白名单校验。" },
      { label: "实际应用", text: "项目里所有用户输入的条件（设备编码、名称、状态）都用 `#{}`；动态排序字段如果必须支持，我用白名单枚举校验字段名后再用 `${}`，绝不直接拼接前端传来的字符串。" },
    ],
    note: "⭐ 高频"
  },
  {
    group: "专业技能",
    title: "MyBatis 一级缓存和二级缓存？",
    blocks: [
      { label: "是什么", text: "一级缓存是 SqlSession 级别默认开启，二级缓存是 Mapper namespace 级别需手动开启。" },
      { label: "为什么", text: "减少数据库查询，但也要注意脏读问题。" },
      { label: "怎么做", text: "同一 SqlSession 内相同 SQL 命中一级缓存；commit/close 后失效；二级缓存跨 SqlSession，但执行 update 会清空。" },
      { label: "实际应用", text: "项目里我没开二级缓存——因为设备状态会被多个入口修改，缓存容易导致读到旧状态。这种写多读多、状态敏感的场景，宁可每次查库或用 Redis 并显式控制失效。" },
    ],
    note: ""
  },
  {
    group: "专业技能",
    title: "PageHelper 的分页原理？",
    blocks: [
      { label: "是什么", text: "基于 MyBatis 插件机制，在 SQL 执行前拦截并改写，自动拼 `limit`。" },
      { label: "为什么", text: "不用在每个 Mapper XML 里写分页 SQL，减少重复代码。" },
      { label: "怎么做", text: "`PageHelper.startPage(pageNum, pageSize)` 把分页参数放进 ThreadLocal → MyBatis 拦截器读取 → 先执行 `count` 查总数 → 在原 SQL 外包装 `select * from (原SQL) limit ?` → 用完 ThreadLocal 必须清理。" },
      { label: "实际应用", text: "MES 设备台账分页就是这么做的——Controller 收 `pageNum/pageSize`，ServiceImpl 里 `PageHelper.startPage(1,10)` 后紧跟 `mapper.selectByCondition(dto)`，这两行必须紧挨着，中间不能插别的查询，否则分页会串到别的 SQL 上。⚠️ 这是最常见的坑。" },
    ],
    note: "⭐ 高频"
  },
  {
    group: "专业技能",
    title: "IoC 是什么？有什么好处？",
    blocks: [
      { label: "是什么", text: "Inversion of Control，控制反转——对象的创建和依赖管理交给容器，而不是代码里 new。" },
      { label: "为什么", text: "降低耦合，方便替换实现和测试。" },
      { label: "怎么做", text: "Spring 通过 BeanFactory / ApplicationContext 管理 Bean，依赖注入方式有构造器注入、setter 注入、字段注入（@Autowired）。" },
      { label: "实际应用", text: "我的 Controller 只声明 `private final DvMachineryService service`，用构造器注入，不知道也不关心具体实现是哪个类。这样 Service 内部改逻辑、加事务代理，Controller 完全不用动。" },
    ],
    note: ""
  },
  {
    group: "专业技能",
    title: "AOP 是什么？实现原理？有哪些应用场景？",
    blocks: [
      { label: "是什么", text: "Aspect-Oriented Programming，面向切面编程，把横切关注点（日志、事务、权限）从业务代码里抽出来。" },
      { label: "为什么", text: "这些逻辑散落在每个方法里会造成大量重复，改一处要改所有地方。" },
      { label: "怎么做", text: "底层是`动态代理`——目标类实现接口用 JDK 动态代理，没实现接口用 CGLIB 生成子类。切面由切点（Pointcut）+ 通知（Advice）组成。" },
      { label: "实际应用", text: "项目里 `@Transactional` 就是 AOP 最典型的应用——事务开启、提交、回滚的代码一行没写，全靠代理织入。另外全局日志用 AOP 记录接口入参和耗时，统一响应结构也可以配合切面做包装。" },
    ],
    note: "⭐ 高频"
  },
  {
    group: "专业技能",
    title: "@Transactional 的传播行为、隔离级别，以及什么情况下会失效？",
    blocks: [
      { label: "是什么", text: "声明式事务注解，传播行为定义多个事务方法互相调用时的事务边界，隔离级别定义并发事务间的可见性规则。" },
      { label: "为什么", text: "这是 Spring 后端面试必考题，而且很容易在实际项目中踩坑。" },
      { label: "怎么做", text: "- 传播行为：`REQUIRED`（默认，有就加入没有就新建）、`REQUIRES_NEW`（总是新建）、`SUPPORTS`、`NOT_SUPPORTED`、`MANDATORY`、`NEVER`、`NESTED`。\n- 隔离级别：`DEFAULT`、`READ_UNCOMMITTED`、`READ_COMMITTED`、`REPEATABLE_READ`（MySQL 默认）、`SERIALIZABLE`。\n- 失效场景：① 方法不是 public；② 同类内部自调用（绕过代理）；③ 异常被 try-catch 吃掉；④ 默认只回滚 RuntimeException 和 Error，受检异常要配 `rollbackFor`；⑤ 多线程调用；⑥ 类被 final 修饰。" },
      { label: "实际应用", text: "MES 里维修单状态和点检记录要一起更新时，我在 Service 方法上加 `@Transactional`，保证两次更新原子性。⚠️ 特别注意：如果把拆出来的私有方法也标了事务注解，通过 `this.xxx()` 调用是不生效的——必须拆到另一个 Bean 里，或者用 AopContext 拿代理对象。" },
    ],
    note: "⭐⭐ 必背"
  },
/* ===================== 数据存储 ===================== */
  {
    group: "数据存储",
    title: "MySQL 事务的 ACID 是什么？",
    blocks: [
      { label: "是什么", text: "原子性（Atomicity）、一致性（Consistency）、隔离性（Isolation）、持久性（Durability）。" },
      { label: "为什么", text: "这是判断一个存储系统能不能用于业务系统的基本标准。" },
      { label: "怎么做", text: "原子性靠 undo log 回滚，持久性靠 redo log，隔离性靠锁和 MVCC，一致性是前三者的目标。" },
      { label: "实际应用", text: "MES 维修单流转时，\"更新维修单状态 + 更新设备状态\"必须在同一事务里，否则设备已经变成\"维修中\"但单据还是\"已接单\"，数据就不一致了。" },
    ],
    note: ""
  },
  {
    group: "数据存储",
    title: "MySQL 的隔离级别和 MVCC 原理？",
    blocks: [
      { label: "是什么", text: "四种隔离级别（RU/RC/RR/S）；MVCC 是多版本并发控制，通过 undo log 版本链 + ReadView 实现无锁读。" },
      { label: "为什么", text: "RC 和 RR 的差别、幻读怎么解决，是数据库面试的核心区分度题。" },
      { label: "怎么做", text: "RU 脏读，RC 不可重复读，RR 可重复读，S 串行；MySQL InnoDB 在 RR 下通过 next-key lock（record lock + gap lock）解决幻读。ReadView 在 RC 下每次查询生成，RR 下事务首次快照读生成。" },
      { label: "实际应用", text: "RAG 项目里多实例抢任务用的条件更新，在 RR 隔离级别下，另一个实例读到的仍是旧状态——但这不影响正确性，因为 UPDATE 用的是当前读（加锁读），会以数据库最新值判断 where 条件，只有一个实例能成功。" },
    ],
    note: "⭐ 高频"
  },
  {
    group: "数据存储",
    title: "MySQL 索引为什么用 B+ 树，而不是 B 树或 Hash？",
    blocks: [
      { label: "是什么", text: "B+ 树非叶子节点只存键值不存数据，所有数据都在叶子节点，叶子节点之间用双向链表相连。" },
      { label: "为什么", text: "数据库需要支持范围查询和排序，Hash 索引不支持范围查询。" },
      { label: "怎么做", text: "B+ 树非叶子节点能存更多键，树更矮，磁盘 IO 更少；叶子链表让范围查询顺序扫描即可；Hash 只适合等值查询。" },
      { label: "实际应用", text: "MES 里按设备状态 + 创建时间范围查询，我建的是联合索引 `(status, create_time)`，利用 B+ 树的有序性直接定位范围。⚠️ 联合索引要遵守最左前缀原则，跳过 status 直接查 create_time 是用不上索引的。" },
    ],
    note: "⭐ 高频"
  },
  {
    group: "数据存储",
    title: "哪些情况会导致索引失效？",
    blocks: [
      { label: "是什么", text: "写了索引但查询时优化器选择不用。" },
      { label: "为什么", text: "考察你是不是只会建索引，不会看执行计划。" },
      { label: "怎么做", text: "常见失效场景——① 违背最左前缀；② 索引列上做函数/运算；③ 隐式类型转换（字符串字段传数字）；④ `like '%xxx'` 前置通配符；⑤ `or` 连接非索引列；⑥ 优化器判断全表扫描更快（小表）。" },
      { label: "实际应用", text: "我排查过一次设备列表查询变慢，发现是状态字段传了数字而数据库存的是字符串，发生隐式转换导致索引失效，改成字符串后走索引，耗时明显下降。定位手段是 `EXPLAIN` 看 `type` 和 `key` 字段。" },
    ],
    note: "⭐ 高频"
  },
  {
    group: "数据存储",
    title: "EXPLAIN 主要看哪些字段？",
    blocks: [
      { label: "是什么", text: "MySQL 的查询执行计划分析命令。" },
      { label: "为什么", text: "不懂看执行计划就没法真正做索引优化。" },
      { label: "怎么做", text: "重点看 `type`（访问类型，system > const > eq_ref > ref > range > index > ALL）、`key`（实际用的索引）、`key_len`（用到索引的长度，判断是否用了联合索引全部列）、`rows`（预估扫描行数）、`Extra`（Using filesort / Using temporary 是坏信号）。" },
      { label: "实际应用", text: "优化 RAG 项目文档列表查询时，我用 EXPLAIN 发现 `type=ALL` 走的全表扫描，补了联合索引后变成 `ref`，扫描行数从几万降到几十。" },
    ],
    note: ""
  },
  {
    group: "数据存储",
    title: "Redis 有哪几种数据类型？分别用在什么场景？",
    blocks: [
      { label: "是什么", text: "String、Hash、List、Set、Sorted Set（ZSet），还有 BitMap、HyperLogLog 等扩展类型。" },
      { label: "为什么", text: "选型题，看你能不能把数据结构和业务场景对上。" },
      { label: "怎么做", text: "String 缓存单个值/计数器；Hash 存对象字段；List 做消息队列/时间线；Set 做去重/交集；ZSet 做排行榜/带权重排序。" },
      { label: "实际应用", text: "RAG 项目里我用 Hash 缓存用户的会话上下文（按 sessionId 分字段），用 String 缓存热点文档的检索结果并设过期时间。项目里提到\"熟悉 Redis 缓存的基本应用场景\"，我如实说没有做过 Redis 集群和高可用这块。" },
    ],
    note: ""
  },
  {
    group: "数据存储",
    title: "缓存穿透、缓存击穿、缓存雪崩分别是什么？怎么解决？",
    blocks: [
      { label: "是什么", text: "三种典型的缓存异常场景。" },
      { label: "为什么", text: "高频面试题，也是生产事故的主要来源。" },
      { label: "怎么做", text: "- `穿透`：查一个根本不存在的数据，缓存和数据库都没有 → 布隆过滤器拦截 / 缓存空值并设短过期时间。\n- `击穿`：某个热点 key 过期瞬间，大量请求同时打到数据库 → 互斥锁只放一个线程回源 / 逻辑过期。\n- `雪崩`：大量 key 同时过期或 Redis 宕机 → 过期时间加随机值 / 多级缓存 / 熔断降级。" },
      { label: "实际应用", text: "如果给 RAG 的检索结果加缓存，我会给过期时间加随机抖动防雪崩；对于空结果也缓存一个短 TTL 的标记防穿透。⚠️ 答题时先分清三个概念再给方案，别混在一起说。" },
    ],
    note: "⭐ 高频"
  },
  {
    group: "数据存储",
    title: "Redis 的持久化方式有哪些？",
    blocks: [
      { label: "是什么", text: "RDB（定时快照）和 AOF（追加写命令日志）。" },
      { label: "为什么", text: "Redis 是内存数据库，宕机数据会丢，需要持久化兜底。" },
      { label: "怎么做", text: "RDB 是二进制快照，恢复快但可能丢失最后一次快照后的数据；AOF 记录写命令，数据更安全但文件大、恢复慢；生产常用混合持久化。" },
      { label: "实际应用", text: "我了解两种方式的取舍，但项目中 Redis 只用来做缓存，数据权威源在 MySQL 和 PostgreSQL，所以没有深度配置过持久化——这块我如实说明，不装作很熟。" },
    ],
    note: ""
  },
  {
    group: "数据存储",
    title: "为什么用 PostgreSQL + pgvector 做向量检索？",
    blocks: [
      { label: "是什么", text: "PostgreSQL 关系数据库 + pgvector 扩展，支持向量类型存储和相似度检索。" },
      { label: "为什么", text: "考察技术选型的判断力，而不是背概念。" },
      { label: "怎么做", text: "pgvector 支持 `vector` 类型和 `<->`（L2）、`<=>`（余弦距离）等操作符，能建 HNSW / IVFFlat 索引加速；直接用同一个数据库存元数据和向量，省掉单独向量库的运维成本。" },
      { label: "实际应用", text: "项目数据量在可控范围内，元数据（文档名、状态、来源）和向量本来就强关联，用 pgvector 一个库就能 JOIN 查询，比再引入 Milvus 少一套组件。HNSW 索引用来加速近似最近邻检索。\n⚠️ 追问\"数据量大了怎么办\"——答：可以考虑迁移 Milvus / Elasticsearch，或者先做分区和索引参数调优，别一上来就说换库。" },
    ],
    note: "⭐ 高频"
  },
/* ===================== 服务治理 ===================== */
  {
    group: "服务治理",
    title: "Nacos 的作用是什么？",
    blocks: [
      { label: "是什么", text: "阿里巴巴开源的服务注册中心 + 配置中心。" },
      { label: "为什么", text: "微服务之间要能互相发现，配置要能集中管理和动态刷新。" },
      { label: "怎么做", text: "服务启动时向 Nacos 注册实例（IP + 端口 + 健康检查），调用方从 Nacos 拉取服务列表；配置中心支持 dataId + group 管理配置，开启监听后修改配置会自动刷新到应用。" },
      { label: "实际应用", text: "RAG 项目 7 个服务通过 Nacos 互相发现，OpenFeign 按服务名调用而不是写死 IP；模型地址、阈值这类需要经常调的参数放在 Nacos 配置里，改完不用重新打包。" },
    ],
    note: "⭐ 高频"
  },
  {
    group: "服务治理",
    title: "Nacos 的 AP 和 CP 模式有什么区别？",
    blocks: [
      { label: "是什么", text: "Nacos 支持 CAP 理论中的 AP（可用性优先）和 CP（一致性优先）两种一致性协议。" },
      { label: "为什么", text: "注册中心和配置中心对一致性的要求不同。" },
      { label: "怎么做", text: "临时实例用 AP（Distro 协议），允许短暂不一致但保证可用；持久化实例用 CP（Raft 协议），保证强一致。" },
      { label: "实际应用", text: "服务注册用临时实例（AP 模式），实例下线后能快速剔除；配置数据用 CP 模式，保证各节点看到的配置一致。⚠️ 别笼统说\"Nacos 是 AP 的\"，它两种都支持。" },
    ],
    note: ""
  },
  {
    group: "服务治理",
    title: "OpenFeign 的调用原理？",
    blocks: [
      { label: "是什么", text: "声明式 HTTP 客户端，通过接口 + 注解定义调用，底层封装 RestTemplate / HTTP 客户端。" },
      { label: "为什么", text: "把远程调用写成像调本地方法一样，隐藏 HTTP 细节。" },
      { label: "怎么做", text: "启动时扫描 `@FeignClient` 接口生成动态代理 → 根据注解拼装 HTTP 请求 → 从注册中心按服务名取实例 → 负载均衡选中一个实例 → 发出请求 → 解码响应。" },
      { label: "实际应用", text: "RAG 项目里问答服务通过 `@FeignClient` 调检索服务和模型服务，接口上直接写方法签名，不用自己拼 URL 和处理 JSON。配合降级回调，模型服务超时也不会把整个问答链路拖垮。" },
    ],
    note: "⭐ 高频"
  },
  {
    group: "服务治理",
    title: "Feign 的超时和重试怎么处理？",
    blocks: [
      { label: "是什么", text: "Feign 底层 ribbon/load balancer 和 HTTP 客户端都有超时配置，重试由 Retryer 控制。" },
      { label: "为什么", text: "模型推理耗时长，默认超时很容易误判失败。" },
      { label: "怎么做", text: "配置 `connectTimeout` 和 `readTimeout`，读超时按最慢的下游（大模型生成）设；重试要谨慎，非幂等操作不要重试。" },
      { label: "实际应用", text: "RAG 项目里调大模型生成接口的 readTimeout 单独调大，因为一次生成可能要几十秒；而检索这种快接口保持短超时快速失败。⚠️ 重试一定要配合幂等，否则可能重复扣 token 或重复写库。" },
    ],
    note: ""
  },
  {
    group: "服务治理",
    title: "Spring Cloud Gateway 的核心概念？",
    blocks: [
      { label: "是什么", text: "微服务网关，负责路由转发、鉴权、限流、日志等统一横切功能。" },
      { label: "为什么", text: "让每个业务服务不用重复实现鉴权和日志。" },
      { label: "怎么做", text: "三大核心——Route（路由规则）、Predicate（匹配条件，如 Path、Header、Time）、Filter（过滤器，分 GatewayFilter 和 GlobalFilter）。" },
      { label: "实际应用", text: "RAG 项目里 Gateway 是所有请求的入口，先统一校验 JWT，再根据路径把请求路由到问答服务、索引服务或管理服务。" },
    ],
    note: ""
  },
  {
    group: "服务治理",
    title: "Sentinel 的限流和熔断降级有什么区别？",
    blocks: [
      { label: "是什么", text: "限流控制进入系统的请求速率，熔断降级是在下游出问题时快速失败、保护调用方。" },
      { label: "为什么", text: "两者目的不同——限流防自己被打垮，熔断防被慢依赖拖死。" },
      { label: "怎么做", text: "Sentinel 支持 QPS / 线程数限流，直接拒绝 / Warm Up / 排队等待；熔断策略有慢调用比例、异常比例、异常数，熔断一段时间后进入探测恢复。" },
      { label: "实际应用", text: "RAG 项目里对提问接口做 QPS 限流防止模型调用成本失控；对模型服务配熔断，模型超时就先返回兜底话术，等恢复再放量。" },
    ],
    note: "⭐ 高频"
  },
/* ===================== 前端开发 ===================== */
  {
    group: "前端开发",
    title: "Vue 3 的响应式原理是什么？",
    blocks: [
      { label: "是什么", text: "Vue 3 用 `Proxy` 代理对象，拦截 get/set/deleteProperty 等操作，依赖收集后触发视图更新。" },
      { label: "为什么", text: "相比 Vue 2 的 `Object.defineProperty`，Proxy 能监听属性新增删除和数组下标变化，性能也更好。" },
      { label: "怎么做", text: "`reactive()` 返回 Proxy 对象 → 读取时 track 收集依赖到 effect → 修改时 trigger 触发对应 effect 重新执行。" },
      { label: "实际应用", text: "MES 设备台账页的查询表单和表格数据都是响应式的，改了 `queryForm.status` 后调 `loadList()`，拿到数据赋给 `tableData.value`，页面自动重渲染。" },
    ],
    note: "⭐ 高频"
  },
  {
    group: "前端开发",
    title: "ref 和 reactive 的区别？",
    blocks: [
      { label: "是什么", text: "`ref` 用于基本类型（也可包对象），通过 `.value` 访问；`reactive` 用于对象/数组，直接访问属性。" },
      { label: "为什么", text: "Proxy 只能代理对象，不能代理基本类型，所以需要 ref 包一层。" },
      { label: "怎么做", text: "模板里 ref 自动解包不用 `.value`，JS 里要写 `.value`；reactive 解构会丢失响应式，要用 `toRefs`。" },
      { label: "实际应用", text: "项目里分页的 `currentPage`、`total` 用 ref，表格数据列表和查询表单对象用 reactive。⚠️ 常见错误是把 reactive 对象直接解构赋值给变量，导致响应式丢失。" },
    ],
    note: ""
  },
  {
    group: "前端开发",
    title: "Composition API 和 Options API 的区别？",
    blocks: [
      { label: "是什么", text: "Options API 按选项（data/methods/computed）组织代码，Composition API 按逻辑功能组织代码。" },
      { label: "为什么", text: "复杂组件里 Options API 会把一个功能的代码拆散到不同选项里，难维护。" },
      { label: "怎么做", text: "Composition API 用 `setup()` 或 `<script setup>`，把相关逻辑（状态 + 方法 + 监听）放在一起，还能抽成 composable 复用。" },
      { label: "实际应用", text: "两个项目的页面我都用 `<script setup>` 写，一个页面的查询、分页、表单校验逻辑放在一起，读代码时不用上下跳。" },
    ],
    note: ""
  },
  {
    group: "前端开发",
    title: "Axios 的请求拦截器做了什么？",
    blocks: [
      { label: "是什么", text: "在请求发出前统一处理，响应回来后统一处理。" },
      { label: "为什么", text: "token、错误处理、loading 这些是每个请求都需要的，不该在每个 api 方法里重复写。" },
      { label: "怎么做", text: "请求拦截器从 localStorage 取 token 加到 `Authorization: Bearer xxx`；响应拦截器拆 `Result` 结构，code 不对就弹错误提示，401 就跳登录。" },
      { label: "实际应用", text: "项目里 `request.js` 里创建了 axios 实例，`baseURL: '/api'`，请求拦截加 token，响应拦截统一处理后端返回的 `Result` 结构，所以页面里直接 `result.data.list` 就能拿到数据。" },
    ],
    note: "⭐ 高频"
  },
  {
    group: "前端开发",
    title: "前后端分离里的跨域问题是怎么解决的？",
    blocks: [
      { label: "是什么", text: "浏览器同源策略下，不同协议/域名/端口的请求会被拦截。" },
      { label: "为什么", text: "开发阶段前端 Vite 跑在 5173，后端跑在 8081，端口不同就是跨域。" },
      { label: "怎么做", text: "开发期用 Vite 代理（proxy）转发请求；生产期用 Nginx 反向代理或网关同源部署。CORS 是后端加响应头允许跨域。" },
      { label: "实际应用", text: "项目里 `vite.config.js` 配置 `proxy: { '/api': { target: 'http://localhost:8081', changeOrigin: true } }`。⚠️ 这里特别注意：后端 Controller 类上已经写了 `@RequestMapping(\"/api/dv/machinery\")`，自带 `/api` 前缀，所以代理`不能加 rewrite`，原样转发；如果画蛇添足改写路径会全站 404。" },
    ],
    note: ""
  },
  {
    group: "前端开发",
    title: "Element Plus 里表单校验怎么做的？",
    blocks: [
      { label: "是什么", text: "基于 `el-form` 的 `rules` 属性定义校验规则，`validate()` 方法触发校验。" },
      { label: "为什么", text: "前端校验能拦掉大部分非法输入，减少无效请求。" },
      { label: "怎么做", text: "rules 里写 required、pattern、validator 自定义函数，配合 `prop` 绑定到具体字段。" },
      { label: "实际应用", text: "设备新增/编辑表单里，设备编码非空且格式校验、状态必选，都是在 rules 里配的。同时后端 DTO 也做了参数校验——⚠️ 前端校验可以被绕过，后端校验才是最后防线，这一点面试官很看重。" },
    ],
    note: ""
  },
/* ===================== AI 应用 ===================== */
  {
    group: "AI 应用",
    title: "什么是 Spring AI？它和直接调大模型 API 有什么区别？",
    blocks: [
      { label: "是什么", text: "Spring 官方的 AI 应用框架，把不同模型厂商的 API 抽象成统一的 ChatClient 接口。" },
      { label: "为什么", text: "直接调 API 要自己处理 HTTP、鉴权、流式返回、不同厂商格式差异，换模型时改动大。" },
      { label: "怎么做", text: "通过 `ChatClient` / `ChatModel` 统一调用，支持 Prompt 模板、Function Calling、向量化（EmbeddingModel）、Advisor 机制等。" },
      { label: "实际应用", text: "两个项目都用 Spring AI——RAG 里做 embedding 和答案生成，MES 里做 Function Calling 设备助手。用它换模型时只需改配置，业务代码不动。" },
    ],
    note: "⭐ 高频"
  },
  {
    group: "AI 应用",
    title: "Function Calling 的完整流程是什么？",
    blocks: [
      { label: "是什么", text: "大模型识别用户意图后，不直接回答，而是输出一个结构化的\"工具调用请求\"，由应用本地执行工具，再把结果回传模型生成最终回答。" },
      { label: "为什么", text: "模型不知道企业内部的实时数据（比如设备当前状态），也不能让它直接改数据库——让模型只做\"决策\"，应用做\"执行\"，安全可控，还能降低幻觉。" },
      { label: "怎么做", text: "1. 定义工具的 JSON Schema（名称、描述、参数结构）注册给模型；\n2. 用户提问，模型判断需要调工具，返回 `tool_calls`（工具名 + 参数）；\n3. 应用侧根据工具名找到本地实现（如 `DvBusinessTools`）并执行；\n4. 把执行结果作为消息回传给模型；\n5. 模型基于结果生成自然语言回答。" },
      { label: "实际应用", text: "MES 设备 AI 助手里，我封装了 `DvBusinessTools` 设备查询工具，限定`只读权限`——模型只能查设备状态、维修记录，不能执行更新或删除。这样即使模型判断出错，最坏也只是查错数据，不会破坏业务数据。" },
    ],
    note: "⭐⭐ 必背"
  },
  {
    group: "AI 应用",
    title: "为什么要限定模型只读权限？怎么限？",
    blocks: [
      { label: "是什么", text: "只给模型暴露查询类工具，不暴露任何写操作工具。" },
      { label: "为什么", text: "大模型有不确定性，尤其复杂指令下可能误判意图。写操作一旦被误触发，会造成真实业务数据损坏。只读是\"最小权限原则\"在 AI 场景的应用。" },
      { label: "怎么做", text: "① 工具层面只注册查询方法，压根不提供 update/delete 工具；② Service 层再校验一次操作类型；③ 数据库账号层面给只读权限做最后兜底。" },
      { label: "实际应用", text: "我在 MES 项目里三层都做了限制——工具集里没有写方法、工具内部只调查询 Service、数据库账号用只读账号。面试官问\"模型幻觉怎么办\"时，这是最硬的答案：不是靠 prompt 求它别乱来，而是从架构上让它没有乱来的能力。" },
    ],
    note: "⭐ 高频"
  },
  {
    group: "AI 应用",
    title: "RAG 是什么？完整链路是怎样的？",
    blocks: [
      { label: "是什么", text: "Retrieval-Augmented Generation，检索增强生成——先从知识库检索相关片段，再把片段连同问题一起交给大模型生成答案。" },
      { label: "为什么", text: "大模型不知道企业私有文档，直接问会瞎编；RAG 让回答有据可依，还能给出处。" },
      { label: "怎么做", text: "- `离线索引`：文档解析 → 分块 → 向量化 → 存入 pgvector；\n- `在线问答`：问题向量化 → 相似度检索 → 拼接 context → 模型生成 → 返回带引用的答案。" },
      { label: "实际应用", text: "RAG 项目里主链路是 5 个环节、最多 4 次模型调用——意图识别和指代改写合在一次调用里，embedding 一次，生成一次，审核一次。⚠️ 口径要统一：问\"几个环节\"答 5 个，问\"几次调用\"答最多 4 次，闲聊和检索全空都是 1 次。" },
    ],
    note: "⭐⭐ 必背"
  },
  {
    group: "AI 应用",
    title: "意图分流和三级降级策略是什么？",
    blocks: [
      { label: "是什么", text: "在问答主链路最前面判断问题类型，挡掉无效提问；召回不到结果时分三级逐步放宽。" },
      { label: "为什么", text: "闲聊和超范围问题不该浪费检索和 token；用户问法千奇百怪，一次检索不到不代表知识库里没有。" },
      { label: "怎么做", text: "- `意图分流`：规则层先挡闲聊和超范围提问，命中直接走快捷回复；\n- `指代改写`：命中指代才触发问题改写（\"它\"→具体实体），检索用改写句、生成用原句；\n- `三级降级`：召回为空 → 放宽相似度阈值 → 用原句重试 → 最后返回兜底话术。" },
      { label: "实际应用", text: "相似度阈值设的是 0.35（库外最高 0.22，库内 0.63~0.70），这个数字是拿评测集调出来的，不是拍脑袋。⚠️ 检索用改写句是因为改写句语义完整召回更准；生成用原句是为了保留用户的表达意图，避免改写引入偏差。" },
    ],
    note: "⭐⭐ 必背"
  },
  {
    group: "AI 应用",
    title: "RAG 的召回准确率怎么评估和优化？",
    blocks: [
      { label: "是什么", text: "用评测集量化检索和生成效果，而不是凭感觉调参数。" },
      { label: "为什么", text: "没有基线就不知道一次调整是变好还是变差。" },
      { label: "怎么做", text: "建一个\"问题-标准答案-原文片段\"的评测集，指标看 Recall@K、MRR、答案忠实度；优化方向包括分块参数、embedding 模型、相似度阈值、rerank。" },
      { label: "实际应用", text: "我吃过亏——分块参数一开始写死在代码里，想对比不同 chunk size 的效果时改一次要重新编译部署；评测集也是调阈值时才回头建的，前面的改动没有基线可比。如果重做，我会第一天就把分块参数做成可配置、把评测集建起来。" },
    ],
    note: "⭐ 高频"
  },
  {
    group: "AI 应用",
    title: "怎么降低大模型幻觉？",
    blocks: [
      { label: "是什么", text: "让模型回答尽量基于事实，而不是凭空编造。" },
      { label: "为什么", text: "企业知识库场景里，编造的答案比\"不知道\"危害更大。" },
      { label: "怎么做", text: "① RAG 提供真实 context，要求只基于 context 回答；② 每条答案带引用来源，可回溯原文；③ Function Calling 限定只读，从架构上防止误操作；④ 加审核裁判环节；⑤ 检索为空时诚实返回兜底话术，不硬答。" },
      { label: "实际应用", text: "RAG 项目里答案带引用来源、检索为空走兜底、审核环节兜底；MES 项目里靠只读工具集限制。两个项目从不同角度处理同一个问题。" },
    ],
    note: "⭐ 高频"
  },
  {
    group: "AI 应用",
    title: "你用 Claude Code 这类 AI 编码工具，怎么保证生成代码的质量？",
    blocks: [
      { label: "是什么", text: "简历里明确写了\"AI 生成代码均经本人审查与测试后合入\"，面试官会追着问你怎么审。" },
      { label: "为什么", text: "很多面试官担心 AI 面试者\"只会让 AI 写、自己不懂\"。" },
      { label: "怎么做", text: "给出具体审查清单——① 逐行读懂再合入，不认识的 API 查文档；② 编译 + 单元测试验证；③ 关键逻辑对照需求手工推演；④ 状态流转、边界条件重点检查；⑤ grep 检索验证改动范围。" },
      { label: "实际应用", text: "我的习惯是 AI 生成后先 `mvn compile` 确认能编译，再 grep 检查有没有改到不该改的地方，状态值一律对照项目字典表核对，最后才合入。AI 提效明显，但出了问题还是我负责，所以审查这步不能省。" },
    ],
    note: "⭐ 高频"
  },
/* ===================== 项目经历 ===================== */
  {
    group: "项目经历",
    title: "用一句话介绍企业知识库 RAG 问答系统",
    blocks: [
      { label: "是什么", text: "项目的定位和价值概括。" },
      { label: "为什么", text: "面试官给你 60 秒，你说不清就不会往下深挖。" },
      { label: "怎么做", text: "一句话讲清\"给谁用、解决什么问题、怎么做到的\"。" },
      { label: "实际应用", text: "\"这是一套面向企业内部的 RAG 智能知识库，把散落在 Word、PDF、网页里的文档变成可以用自然语言直接提问的入口，答案带引用来源，能点回原文。\"" },
    ],
    note: "⭐ 高频"
  },
  {
    group: "项目经历",
    title: "这个项目为什么用微服务？单体不行吗？",
    blocks: [
      { label: "是什么", text: "考察架构选型的合理性，而不是背\"微服务好处\"。" },
      { label: "为什么", text: "很多人跟风拆微服务，面试官想看你能不能反过来质疑自己的设计。" },
      { label: "怎么做", text: "按\"变更频率 + 数据边界 + 资源特征\"解释拆分依据，最后主动承认单体在早期更优。" },
      { label: "实际应用", text: "拆的依据是变更频率和数据边界——认证几乎不变，索引管线随文档格式变，问答策略随业务调优变，拆开后改索引不用重发整个应用；另外索引是 CPU/IO 密集跑几分钟，问答主要是等模型返回线程阻塞，放一个进程里一批文档会把问答拖死。但说实话，用户量小、一个人开发时单体确实更优——部署简单、调用不走网络、排错容易。敢承认这点反而说明是选型不是跟风。" },
    ],
    note: "⭐ 高频"
  },
  {
    group: "项目经历",
    title: "索引管线的六态状态机是什么？为什么是六态？",
    blocks: [
      { label: "是什么", text: "0 待解析、1 解析中、2 待向量化、3 向量化中、4 已完成、5 失败，六个状态对应管线上的处理阶段。" },
      { label: "为什么", text: "文档处理是长耗时任务，必须能定位进度、断点重试，还要支持多实例抢占。" },
      { label: "怎么做", text: "数据库文档表存 status 字段 + 状态流转规则，每步处理前校验前置状态，处理后推进到下一状态，失败标记为 5。" },
      { label: "实际应用", text: "少状态的坏处很明显——只有\"处理中/完成\"两态时，卡住你不知道卡在哪，只能整条重跑，前端也没法展示进度。六态让日志里看到状态停在 3 就知道是向量化挂了，能从失败那步继续，省掉已经花掉的向量化费用。" },
    ],
    note: "⭐⭐ 必背"
  },
  {
    group: "项目经历",
    title: "怎么防止多实例重复处理同一份文档？为什么不用分布式锁？",
    blocks: [
      { label: "是什么", text: "用状态机的条件更新抢占任务，而不是引入 Redis 分布式锁。" },
      { label: "为什么", text: "多实例部署下，同一份文档可能被两个实例同时捞到，重复处理既浪费算力又可能产生重复数据。" },
      { label: "怎么做", text: "SQL 是 `update kb_document set status = 1 where id = ? and status = 0`，两个实例同时抢，只有一个能把 0 改成 1，另一个影响行数是 0 直接放弃——`影响行数为 1 才继续往下走`。" },
      { label: "实际应用", text: "为什么不用分布式锁：锁要额外维护 Redis，还要处理锁超时、续期、误删别人锁这些事；而我这里状态本身就是锁，要保护的资源就是这条记录的状态，条件更新一步到位，天然幂等，少一个组件少一类故障。分布式锁适合\"没有状态可依赖\"的场景（比如扣库存纯计数、保护外部资源），只要有明确状态字段，条件更新就够了。" },
    ],
    note: "⭐⭐ 必背"
  },
  {
    group: "项目经历",
    title: "文档分块为什么用滑窗、要带重叠？",
    blocks: [
      { label: "是什么", text: "按固定大小切片，相邻块之间保留一段重叠内容。" },
      { label: "为什么", text: "块太大语义被稀释，块太小上下文断裂。" },
      { label: "怎么做", text: "滑窗保证每块大小可控，重叠保证跨边界的信息至少在某一块里是完整的。" },
      { label: "实际应用", text: "块太大时一块混了好几个主题，向量是内容的平均，变成\"什么都沾一点、什么都不像\"，检索反而不准；块太小时一句话切成两半，召回的那半句读都读不通。重叠就是解决边界问题的。" },
    ],
    note: "⭐ 高频"
  },
  {
    group: "项目经历",
    title: "为什么检索用改写句、生成用原句？",
    blocks: [
      { label: "是什么", text: "多轮对话中先做指代改写，检索和生成使用不同版本的问句。" },
      { label: "为什么", text: "用户追问\"那它的保养周期呢\"时，\"它\"指谁模型不知道，直接检索必然召回一堆无关内容。" },
      { label: "怎么做", text: "结合对话历史让模型改写出语义完整的独立问句 → 用改写句做向量检索 → 生成时把原始问句一起传给模型。" },
      { label: "实际应用", text: "检索用改写句是为了召回更准；生成用原句是为了保留用户原本的表达意图，避免改写过程引入新的偏差。⚠️ 只有命中指代才触发改写，普通问题不做这一步，省一次模型调用。" },
    ],
    note: "⭐ 高频"
  },
  {
    group: "项目经历",
    title: "召回为空时怎么处理？",
    blocks: [
      { label: "是什么", text: "检索不到相似片段时的三级兜底策略。" },
      { label: "为什么", text: "用户问法千奇百怪，一次检索失败不代表知识库里没有答案。" },
      { label: "怎么做", text: "第一级放宽相似度阈值重试 → 第二级用原句（未改写版）重试 → 第三级返回兜底话术，明确告诉用户\"知识库里没找到相关内容\"。" },
      { label: "实际应用", text: "全套都失败时诚实返回兜底，绝不硬答——这是降低幻觉的重要一环。⚠️ 阈值 0.35 是拿评测集调出来的，别现场编数字。" },
    ],
    note: ""
  },
  {
    group: "项目经历",
    title: "一次提问到底调用了几次模型？",
    blocks: [
      { label: "是什么", text: "主链路 5 个环节，最多 4 次模型调用。" },
      { label: "为什么", text: "这是口径题，说错数字等于和自己材料冲突。" },
      { label: "怎么做", text: "意图识别 + 指代改结合在一次调用（返回问题类型和补全后问句）→ Query 向量化一次 → 答案生成一次 → 审核裁判一次。" },
      { label: "实际应用", text: "问\"几个环节\"答 5 个；问\"几次调用\"答最多 4 次；闲聊提问 1 次就结束；检索全空也是 1 次（只做了向量化，没进生成）。⚠️ 不要说\"固定 5 次调用\"。" },
    ],
    note: "⭐ 高频"
  },
  {
    group: "项目经历",
    title: "7 个微服务是怎么拆的？26 张表怎么设计？",
    blocks: [
      { label: "是什么", text: "服务边界和数据模型的划分思路。" },
      { label: "为什么", text: "考察你是否真的做了设计，还是把单体硬拆成多个工程。" },
      { label: "怎么做", text: "按业务域拆——认证、网关、索引管线、检索、问答生成、文档管理、统计；表围绕文档、切片、会话、消息、任务、用户权限等实体设计。" },
      { label: "实际应用", text: "拆分的依据是变更频率和数据边界，不是按技术层拆。表设计中索引管线的状态字段是关键，支撑了六态状态机和条件更新抢占。面试官追问具体表名时，如实说能记住的核心表，别硬编。" },
    ],
    note: ""
  },
  {
    group: "项目经历",
    title: "MinIO 在项目中做什么？",
    blocks: [
      { label: "是什么", text: "兼容 S3 协议的对象存储，用来存原始文档文件。" },
      { label: "为什么", text: "Word/PDF 这类二进制文件不适合存数据库，也不适合直接存本地磁盘（多实例无法共享）。" },
      { label: "怎么做", text: "上传文档先存 MinIO，数据库只存文件 URL 和元数据；索引处理时按 URL 拉取文件解析。" },
      { label: "实际应用", text: "多实例部署下必须把文件放到共享存储，否则实例 A 上传的文件实例 B 读不到。这是从单体切到微服务时必然会遇到的坑。" },
    ],
    note: ""
  },
  {
    group: "项目经历",
    title: "JWT 认证流程是怎样的？",
    blocks: [
      { label: "是什么", text: "用户登录后服务端签发 token，后续请求在 Header 里携带 token 完成鉴权。" },
      { label: "为什么", text: "微服务间无状态，不能靠 session 共享。" },
      { label: "怎么做", text: "登录 → 校验账号密码 → 签发 JWT（含用户 ID、过期时间，用密钥签名）→ 前端存 localStorage → 每次请求带 `Authorization: Bearer xxx` → 网关验签和过期时间 → 放行。" },
      { label: "实际应用", text: "项目里网关统一校验 JWT，业务服务不用重复做鉴权。⚠️ 追问\"token 泄露怎么办\"——设短过期时间 + refresh token + HTTPS 传输。" },
    ],
    note: ""
  },
  {
    group: "项目经历",
    title: "16 个前端页面联调遇到了什么问题？",
    blocks: [
      { label: "是什么", text: "考察全栈落地能力和实际踩坑经验。" },
      { label: "为什么", text: "能说出具体问题才证明是真的做过联调，不是只写了后端。" },
      { label: "怎么做", text: "挑 2-3 个典型问题，讲现象、定位过程、解决方案。" },
      { label: "实际应用", text: "可以讲三个——① 分页参数没紧跟着 `startPage` 导致分页串到别的 SQL；② Vite 代理多加了 rewrite 导致全站 404（后端已带 `/api` 前缀）；③ 空字符串参数被序列化进 query string，改用 `|| undefined` 让 axios 不带这个字段。这三个都是从你代码里总结出来的真实细节。" },
    ],
    note: ""
  },
  {
    group: "项目经历",
    title: "用一句话介绍离散制造 MES 系统",
    blocks: [
      { label: "是什么", text: "面向离散车间的生产执行系统，覆盖工艺路线、生产排产、报工、设备管理四大模块。" },
      { label: "为什么", text: "同样要在 60 秒内说清项目定位。" },
      { label: "怎么做", text: "一句话点出行业 + 模块 + 价值（替代纸质工单和手工台账）。" },
      { label: "实际应用", text: "\"面向离散车间的生产执行系统，把计划下达、工序流转、报工采集和设备状态统一到线上管理，替代纸质工单和手工台账。我负责设备管理模块的前后端，6 个子模块 60 多个接口。\"" },
    ],
    note: "⭐ 高频"
  },
  {
    group: "项目经历",
    title: "设备管理模块的 6 大子模块是哪些？",
    blocks: [
      { label: "是什么", text: "简历写的\"6 大子模块、60+ 接口\"，面试官会让你展开。" },
      { label: "为什么", text: "验证数字的真实性和你对业务的熟悉度。" },
      { label: "怎么做", text: "按设备台账、点检、保养、维修、备件、统计这类典型划分来答，并说清模块间的联动关系。" },
      { label: "实际应用", text: "核心链路是——设备台账是主数据，点检和保养生成记录，点检异常回写设备状态并联动维修流程，维修单走完五个状态后设备恢复可用，全程可追溯。⚠️ 具体子模块名称按你项目里的真实命名说，别临时编。" },
    ],
    note: "⭐ 高频"
  },
  {
    group: "项目经历",
    title: "DvBusinessTools 是怎么封装的？",
    blocks: [
      { label: "是什么", text: "基于 Spring AI Function Calling 封装的设备查询工具类。" },
      { label: "为什么", text: "这是 MES 项目最大的亮点，必须答得最流利。" },
      { label: "怎么做", text: "把设备查询能力（查状态、查维修记录、查点检记录）定义成带描述和参数 Schema 的工具方法，注册给模型；模型返回调用请求后由应用本地执行查询，结果回传生成回答；限定只读。" },
      { label: "实际应用", text: "覆盖建表、接口到页面的完整链路——工具方法底层调已有的设备查询 Service，不重复造数据访问逻辑；前端提供 AI 助手对话入口。面试官问\"为什么限定只读\"时，用最小权限原则和防止幻觉两条来答。" },
    ],
    note: "⭐ 高频"
  },
  {
    group: "项目经历",
    title: "维修单状态机是怎么设计的？",
    blocks: [
      { label: "是什么", text: "报修 → 接单 → 维修中 → 待验收 → 验收，五个状态严格校验前置状态。" },
      { label: "为什么", text: "维修单有多个角色参与（报修人、维修工、验收人），如果不校验前置状态，会出现\"没接单就验收\"这类非法流转。" },
      { label: "怎么做", text: "状态枚举走项目字典表（不硬编码）→ 定义允许的状态流转规则 → 更新前校验当前状态是否在允许的下一状态集合里 → 非法流转直接拦截。" },
      { label: "实际应用", text: "设备状态变更走`统一出口`维护——所有改变设备状态的操作都收敛到一个方法里，多入口联动时数据保持一致，修改状态逻辑时只需改一处。这是从\"多入口各自判断\"重构过来的，避免遗漏。" },
    ],
    note: "⭐⭐ 必背"
  },
  {
    group: "项目经历",
    title: "点检保养闭环是怎么实现的？",
    blocks: [
      { label: "是什么", text: "定时任务自动生成点检/保养记录 → 执行结果回写 → 异常联动维修的全生命周期管理。" },
      { label: "为什么", text: "靠人工建记录容易漏，设备履历不完整就没法追溯。" },
      { label: "怎么做", text: "用定时任务（Spring `@Scheduled`）按周期生成记录 → 点检发现异常时回写设备状态 → 自动触发报修流程 → 维修单走完恢复设备状态。" },
      { label: "实际应用", text: "记录的修改与删除都带前置状态校验，删除时恢复关联设备状态——因为点检异常改变了设备状态，删除这条记录就必须把状态还原，否则会出现\"记录没了但设备还是异常\"的不一致。这是很容易被追问的细节。" },
    ],
    note: "⭐ 高频"
  },
  {
    group: "项目经历",
    title: "两个项目都只有 20 来天，真的做完了吗？",
    blocks: [
      { label: "是什么", text: "面试官质疑项目真实性和你的投入程度。" },
      { label: "为什么", text: "短期高强度项目容易被认为是demo或课程作业。" },
      { label: "怎么做", text: "如实说开发周期，强调\"完整交付\"而非\"代码量\"，并说清哪些是自己做的、哪些是复用/简化的。" },
      { label: "实际应用", text: "\"是 20 个工作日左右，强度确实高。但做的是完整链路——从建表、Mapper、Service 到 Controller 再到前端页面，能实际跑起来。规模上 RAG 是 7 服务 26 表 100+ 接口，MES 是 6 子模块 60+ 接口。我没有虚报，也如实说明哪些地方做了简化，比如 Redis 只用了基础缓存没做集群。\"" },
    ],
    note: "⭐ 高频"
  },
/* ===================== 自我评价 ===================== */
  {
    group: "自我评价",
    title: "你在简历里写\"统一响应结构、全局异常处理\"，具体怎么做的？",
    blocks: [
      { label: "是什么", text: "所有接口返回同一种结构，异常由全局处理器收敛。" },
      { label: "为什么", text: "前端不用为每个接口写不同的错误处理逻辑。" },
      { label: "怎么做", text: "定义 `Result<T>{ code, msg, data }` 泛型类 + 静态 success/fail 方法；用 `@RestControllerAdvice` + `@ExceptionHandler` 统一捕获异常，按异常类型映射到不同 code。" },
      { label: "实际应用", text: "两个项目都用了这套结构。前端 Axios 响应拦截器直接拆 `Result`，code 不对就弹提示，401 跳登录。⚠️ 追问\"业务异常怎么处理\"——自定义 BusinessException 携带 code，交给全局处理器统一返回。" },
    ],
    note: "⭐ 高频"
  },
  {
    group: "自我评价",
    title: "你写\"核心写路径保证写操作原子性\"，具体指什么？",
    blocks: [
      { label: "是什么", text: "多步写操作放在同一事务里，要么全成功要么全回滚。" },
      { label: "为什么", text: "半途失败会留下不一致数据，比如设备状态改了但维修单没更新。" },
      { label: "怎么做", text: "Service 层方法加 `@Transactional`，注意自调用失效问题；涉及多表更新时拆到同一个事务方法里。" },
      { label: "实际应用", text: "MES 里\"更新维修单状态 + 更新设备状态 + 写操作日志\"这三步在一个事务方法里。⚠️ 要能说出 `@Transactional` 的失效场景，尤其是同类内部自调用。" },
    ],
    note: "⭐ 高频"
  },
  {
    group: "自我评价",
    title: "你写\"逻辑删除配合依赖校验，杜绝孤儿数据\"，怎么理解？",
    blocks: [
      { label: "是什么", text: "删除数据不物理删除，而是打删除标记；删除前检查是否被其他数据引用。" },
      { label: "为什么", text: "物理删除会让关联数据变成\"孤儿\"，比如设备删了但维修记录还在引用它。" },
      { label: "怎么做", text: "表加 `is_deleted` 字段，查询统一带条件；删除某条记录前，先查有没有子记录依赖它，有就拒绝删除或级联处理。" },
      { label: "实际应用", text: "MES 里删除设备前要先校验有没有未完成的维修单和点检记录，有的话拒绝删除。这样从根源杜绝孤儿数据。⚠️ 逻辑删除的最大坑是唯一索引——被删记录还占着唯一键，设计时要加删除标记参与唯一键。" },
    ],
    note: "⭐ 高频"
  },
  {
    group: "自我评价",
    title: "你写\"多入口的设备状态变更统一到单一出口维护\"，怎么实现的？",
    blocks: [
      { label: "是什么", text: "所有改变设备状态的逻辑收敛到一个方法/一个类里。" },
      { label: "为什么", text: "如果报修、点检、维修验收三个入口各自写设备状态更新，逻辑会重复，改一处漏一处，排查时也难定位影响范围。" },
      { label: "怎么做", text: "抽象出一个统一的状态变更方法，入参是设备 ID + 目标状态 + 业务来源，内部集中做前置状态校验和状态更新；各入口只调这个方法，不再自己写 update。" },
      { label: "实际应用", text: "这是简历里\"业务抽象\"那条的具体落地。好处是——修改状态逻辑时只需改一处；评审和排查时能快速定位影响范围；所有入口的校验规则一致，不会出现某个入口漏校验的情况。" },
    ],
    note: "⭐⭐ 必背"
  },
  {
    group: "自我评价",
    title: "你的优势和短板分别是什么？",
    blocks: [
      { label: "是什么", text: "行为面必考题，考察自我认知。" },
      { label: "为什么", text: "说不出短板显得不真诚，说出致命短板又会被淘汰。" },
      { label: "怎么做", text: "优势结合项目成果说，短板选一个\"正在改进且不影响岗位核心\"的。" },
      { label: "实际应用", text: "优势——\"全栈闭环能力，从建表到页面都能落地，状态机这类需要严谨设计的地方我比较擅长\"。短板——\"Redis 集群、Docker 部署这些运维侧的东西接触不多，项目里只用到基础功能，这块我在补\"。⚠️ 别说\"追求完美\"这种假短板。" },
    ],
    note: ""
  },
/* ===================== 综合问答 ===================== */
  {
    group: "综合问答",
    title: "你的职业规划是什么？",
    blocks: [
      { label: "是什么", text: "考察稳定性和成长潜力。" },
      { label: "为什么", text: "实习生跳槽成本高，公司想知道你会不会干两个月就走。" },
      { label: "怎么做", text: "短期（1-2 年）扎实后端基本功、能独立负责模块；中期往系统设计方向走。别说\"三年当架构师\"这种空话。" },
      { label: "实际应用", text: "\"先踏实把 Java 后端基本功打牢，能独立负责业务模块从设计到上线；后面希望在系统设计和高并发处理上继续深入。实习期我更想实际参与业务，而不是只做 demo。\"" },
    ],
    note: ""
  },
  {
    group: "综合问答",
    title: "你为什么选择我们公司？",
    blocks: [
      { label: "是什么", text: "考察求职动机是否具体。" },
      { label: "为什么", text: "泛泛的\"平台大、氛围好\"说明你海投。" },
      { label: "怎么做", text: "提前查公司的业务方向和技术栈，说出一两个具体的点。" },
      { label: "实际应用", text: "\"贵司在 [具体业务领域] 的业务和我做过的 MES / 知识库项目比较接近，我做过状态机、接口设计、前后端联调这些，来了能比较快上手；另外团队用 [具体技术栈]，和我熟悉的 Spring Boot 体系一致。\"⚠️ 面试前务必把括号里的内容换成真实信息。" },
    ],
    note: ""
  },
  {
    group: "综合问答",
    title: "说一个你遇到过最难排查的 bug，怎么定位的？",
    blocks: [
      { label: "是什么", text: "考察排查问题的方法论。" },
      { label: "为什么", text: "能不能说清定位过程，比 bug 本身更难更重要。" },
      { label: "怎么做", text: "按\"现象 → 假设 → 验证手段 → 根因 → 修复 → 复盘\"六步讲。" },
      { label: "实际应用", text: "讲 PageHelper 分页串到别的 SQL 那个——现象是分页数据不对；假设是 ThreadLocal 里的分页参数没被消费；用日志 + EXPLAIN 验证，发现 `startPage` 和 mapper 调用之间插了别的查询；修复是把两行挨在一起；复盘是写进团队规范。这套流程比\"我调了半天发现了\"专业得多。" },
    ],
    note: ""
  },
  {
    group: "综合问答",
    title: "和队友意见不一致时你怎么处理？",
    blocks: [
      { label: "是什么", text: "行为面考察协作能力。" },
      { label: "为什么", text: "实习生最怕\"不听话\"或\"没主见\"两个极端。" },
      { label: "怎么做", text: "讲一次真实分歧——摆事实和数据、小范围验证、以结果说话；如果对方对就接受，同时保留记录。" },
      { label: "实际应用", text: "\"RAG 项目选型时我和同学讨论过用不用分布式锁，我主张用状态条件更新。我没有直接坚持，而是把两种方案的实现成本和故障点列出来对比，最后按你的资源情况选了轻方案。我觉得有分歧时拿数据说话比争输赢有效。\"\n⚠️ 你是一个人做的项目，这里可以说\"和同学/老师讨论方案时\"，别编造团队冲突。" },
    ],
    note: ""
  },
  {
    group: "综合问答",
    title: "你怎么学习新技术？举一个最近学的例子。",
    blocks: [
      { label: "是什么", text: "考察学习能力和自驱力。" },
      { label: "为什么", text: "技术更新快，公司看重你能不能自己上手新东西。" },
      { label: "怎么做", text: "给一个具体路径——官方文档 → 跑通最小 demo → 用到项目里 → 踩坑总结。" },
      { label: "实际应用", text: "\"Spring AI 我是这么学的：先看官方文档搞清 ChatClient 和 Function Calling 的概念，然后写了个最小 demo 跑通工具调用，再用到 MES 项目里做设备助手。过程中踩了工具 Schema 描述不清导致模型误判的坑，后来把描述写具体就好了。\"" },
    ],
    note: ""
  },
  {
    group: "综合问答",
    title: "如果重做这两个项目，你会改什么？",
    blocks: [
      { label: "是什么", text: "考察复盘能力和成长性。" },
      { label: "为什么", text: "能说出真实教训的人比\"没什么可改的\"强很多。" },
      { label: "怎么做", text: "说 1-2 个具体的、你真的踩过的坑，别说空泛的\"优化性能\"。" },
      { label: "实际应用", text: "RAG 项目两件事——① 分块参数一开始做成可配置，不要写死在代码里，否则调一次要重新编译部署；② 评测集第一天就建，否则没有基线，不知道改动是变好还是变差。这两条都是我实际踩过的。" },
    ],
    note: "⭐ 高频"
  },
  {
    group: "综合问答",
    title: "你有什么想问我们的？",
    blocks: [
      { label: "是什么", text: "最后一轮的反问环节，也是双向选择。" },
      { label: "为什么", text: "不问问题会显得没兴趣；问得好能加分。" },
      { label: "怎么做", text: "问和业务、成长相关的具体问题，别问薪资假期（那是 HR 环节）。" },
      { label: "实际应用", text: "可以问——\"这个岗位入职后前三个月主要负责哪块业务？\"\"团队目前后端的技术栈和主要挑战是什么？\"\"实习生会有 code review 吗？\"三个里挑 1-2 个。" },
    ],
    note: "⭐ 高频"
  },
  {
    group: "综合问答",
    title: "面试当天随身口径卡（数字类最容易说错）",
    blocks: [
      { label: "逐条对照", text: "· 模型调用次数：最多 4 次（环节 5 个）（常见错法：说成固定 5 次）\n· 向量化批量：≤10 条/批（常见错法：说成 100 条）\n· 相似度阈值：0.35（库外最高 0.22，库内 0.63~0.70）（常见错法：说成 0.8、0.5）\n· 文档状态：0~5 六态（5 是失败）（常见错法：说成两态或四态）\n· RAG 接口规模：7 服务 / 26 表 / 100+ 接口 / 16 页面（常见错法：数字前后不一致）\n· MES 接口规模：6 子模块 / 60+ 接口（常见错法：说不清子模块）\n· PageHelper：`startPage` 后紧跟 mapper 调用（常见错法：中间插别的查询）\n· Vite 代理：后端自带 `/api` 前缀，代理不 rewrite（常见错法：加了 rewrite 全站 404）\n· `@Transactional`：同类自调用失效（常见错法：说成注解到处都生效）\n· 状态值：走项目字典表（常见错法：代码里硬编码字符串）" },
    ],
    note: "⭐ 出门前扫一眼，数字说错最伤"
  }
]);
