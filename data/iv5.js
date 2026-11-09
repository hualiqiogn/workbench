/* 面试问题 · 前端 + SpringAI */
window.__IV = (window.__IV || []).concat([
{
  module: "前端",
  title: "computed 和 method 的区别是什么？【A】",
  points: [
    { label: "总-一句话答案", text: "computed 是计算属性，基于它的依赖做缓存，依赖不变就不会重新计算；methods 是方法，每次调用都重新执行；" },
    { label: "分-核心区别在缓存", text: "一个计算属性是由别的数据推导出来的，比如由姓和名拼出全名，只要姓和名没变，模板里不管用多少次这个 computed，它都只算一次，直接用上次的缓存结果；而 methods，模板每渲染一次就调用执行一次，调用几次执行几次。当计算属性里面有排序、过滤大数组这种重计算，缓存的价值就非常明显；" },
    { label: "分-使用限制", text: "computed 是拿来当\u201c属性\u201d用的，模板里直接写名字，不能像方法那样传参；methods 就灵活，参数随便传；另外 Vue 3 里 computed 默认只有 getter，一般不去手动改它的值——它是派生出来的，源头变了它自然就变，直接改派生值语义上就不对了；" },
    { label: "总-语义分工", text: "我的划分标准很简单——从数据推导出来的值，用 computed；用户触发的动作，用 methods。" }
  ],
  note: ""
},
{
  module: "前端",
  title: "Vue3 中 ref 和 reactive 的区别？如何选择使用？",
  points: [
    { label: "总-一句话答案", text: "ref 和 reactive 都是用来把数据变成响应式的，区别在于——ref 包装的是\u201c任意一个值\u201d，基本类型和对象类型都能装，通过 .value 访问；而 reactive 包装的是\u201c一个对象\u201d，它只能接收对象类型，不能接收基本类型，访问属性不需要 .value；" },
    { label: "分-用法差异", text: "所以使用的区别就是，第一，ref 在 script 里必须写 .value，而 reactive 直接点属性；模板里两者都不用 .value；第二，看能不能整体替换，ref 可以 state.value = 新对象 整个换掉，但是 reactive 不行，state = 新对象 只是让变量指向了一个新对象、这样原代理断了，页面就不再响应，只能 Object.assign(state, 新对象) 然后逐个去给属性赋值；第三，类型限制，reactive 传 null、undefined、基本类型都会在控制台报警告，并且原样返回不做任何代理，而 ref 什么都能接收；第四，解构，从 reactive 对象里解构出来的属性会丢掉响应性，因为解构出来的是普通值、脱离了代理，要用 toRefs 或 toRef 转一下，才能保留响应性。" },
    { label: "总-怎么选", text: "所以在应用中我默认统一都是用 ref，reactive 在需要的时候再用。因为 ref 万能，不挑类型，基本类型和对象都能装；而且 ref 可以整体替换，从接口回填数据的时候最省事；同时它还能直接监听 state。当然了实际上两者各有优缺点，用哪个都能解决问题；需要注意的是两者不能混用；" }
  ],
  note: ""
},
{
  module: "前端",
  title: "Vue 中组件通信的方式有哪些？分别适用于什么场景？",
  points: [
    { label: "总-一句话答案", text: "组件通信分为几种情况，父组件给子组件传数据使用的是 props，子组件给父组件传数据使用的是 Emits 申明事件传出；如果是祖先传给后代可以使用 provide 和 inject；如果是更大范围的数据共享，可以使用 Pinia；" },
    { label: "分-父子之间", text: "一般情况下我们讨论的组件传递数据说的都是父子组件之间；首先是，父传子用 props，它是单向、只读的，子组件不能直接修改父组件的数据，这是 Vue 刻意设计的单向数据流；其次就是，子传父用自定义事件，在 Vue3 里用 defineEmits 去声明事件名，子组件里用 emit 函数触发事件，函数的第一个参数就是声明的事件名，第二个参数是要传给父组件的数据；父组件监听到这个事件后自己处理数据；" },
    { label: "分-其他两个情况", text: "除过父子组件之外还有两个，一个是祖先给后代传数据，使用 provide 和 inject，祖先在 setup 里把数据 provide 出去，这样任意深度的后代都能通过 inject 拿到，中间层不用一层层往下传 props。还有一个是任意组件之间要共享数据，就可以使用 Pinia；" },
    { label: "总-怎么选", text: "所以实际的应用中，数据只在父子两层之间用，就 props 加 emit；数据要被深层后代拿到、而且\u201c谁用谁取\u201d更自然的话，就用 provide 加 inject；数据是全局的、跨模块的、要被多处同时读写，才上 Pinia。" }
  ],
  note: ""
},
{
  module: "前端",
  title: "v-if 和 v-show 有什么区别？",
  points: [
    { label: "总-一句话答案", text: "首先本质区别是 v-if 才是真正的条件渲染，当条件不满足时元素根本不会被创建，切换的时候是销毁和重建；v-show 只改 CSS 的 display，DOM 一直都在，只不过是被藏起来了；" },
    { label: "分-逐项对比", text: "详细说的话分为几点：第一，渲染开销，v-if 为假时不渲染，开销低；v-show 不管真假都要渲染，开销高；第二，切换开销，v-if 切换的话要销毁再重建组件和 DOM，开销高，v-show 只改一个样式，开销低；第三，生命周期，v-if 的切换会触发 created、mounted、beforeUnmount、unmounted 这些钩子，v-show 一个都不触发，它只是样式变了；第四，组件内部状态，v-if 销毁会丢掉组件里的状态——比如输入框中已经填好的内容、组件内部的自定义状态等等，下次显示出来是全新的；而 v-show 只是隐藏，状态会保留，之前填的内容还在；" },
    { label: "总-应用选择", text: "所以应用上其实很明确，频繁切换的就用 v-show，只创建一次的就使用 v-if；" }
  ],
  note: ""
},
{
  module: "SpringAI",
  title: "Spring AI 是什么？解决什么问题？",
  points: [
    { label: "总-一句话答案", text: "Spring AI 是 Spring 官方的 AI 应用开发框架，它把各家大模型、Embedding 模型、向量库、工具调用的差异，统一抽象成一套 Java API，再用 Spring 的方式把它们组装起来。" },
    { label: "分-它到底抽象了什么", text: "它抽象的不是\u201c模型能力\u201d，而是接入模型时那些重复的、跟业务无关的操作；比如：调用协议、消息结构、参数配置、向量化与检索、对话记忆这些；" },
    { label: "分-核心能力五块", text: "它的核心能力有：模型调用、Advisor 机制、RAG 的支持、Tool Calling、多模态这些；" },
    { label: "总-边界与取舍", text: "它适合用 Java 做企业级 AI 应用开发，像知识库问答、智能客服、业务系统里的 AI 增强、文档处理管道——尤其是团队已经在 Spring 体系里的时候，收益最大。" }
  ],
  note: "思路链：一句话答案 → 它抽象了什么 → 核心能力 → 边界与取舍"
},
{
  module: "SpringAI",
  title: "Spring AI 的 Starter 的自动配置是怎么工作的？换模型要改什么？",
  points: [
    { label: "总-一句话答案", text: "Spring AI 的 starter 本质上也是标准的 SpringBoot 场景启动器；所以装配过程就是标准的 SpringBoot 的自动装配流程；换模型时，只要换对应的依赖和配置就行；" },
    { label: "分-自动装配过程", text: "自动装配过程大概是这样的；Spring AI 的 starter 先把某个模型厂商要用的 jar 包聚到一起；autoconfigure 模块里的自动配置类再在条件满足时，创建 ChatModel、EmbeddingModel 这些 Bean。" },
    { label: "分-换模型要改什么", text: "只改两处：如果要更换模型，就需要更换对应模型的依赖和配置前缀。因为 Spring AI 统一了调用接口，但不同模型的实现不一样，所以依赖要换；配置上基本就是改前缀，里面的配置细节大体相同；" },
    { label: "总-意义", text: "这套设计的价值，就在于把\u201c换模型\u201d从一次改造变成一次配置变更。" }
  ],
  note: "思路链：一句话答案 → 装配流程 → 换模型改什么 → 实际应用"
},
{
  module: "SpringAI",
  title: "ChatClient 和 ChatModel 是什么关系？",
  points: [
    { label: "总-一句话答案", text: "ChatModel 是底层的统一接口，ChatClient 是建立在它之上的高层门面；ChatModel 负责\u201c把请求发给某个模型并拿回结果\u201d，ChatClient 负责\u201c把一次对话组织好\u201d，包括提示词、记忆、RAG、结构化输出和流式。" },
    { label: "分-各自的定位", text: "ChatModel 是 Spring AI 的模型 SPI，核心方法就一个：`ChatResponse call(Prompt prompt)`。流式版本是 StreamingChatModel，返回 `Flux<ChatResponse>`。所有实现类干的其实是同一件事：就是把各家自己的协议，翻译成统一的 Prompt / ChatResponse。ChatClient 则是面向应用的 API，由 ChatClient.Builder 构建，底层还是用 ChatModel 来实现；" },
    { label: "总-实际应用", text: "所以在实际的应用中，业务代码一律用 ChatClient。只有两类场景才需要下沉到 ChatModel：第一，写框架层或者自定义 Advisor 时，要直接操作 Prompt 和 ChatResponse；第二，要用某家模型的独有参数或返回字段，比如 DashScope 的文档引用信息，通用配置根本表达不了。" }
  ],
  note: ""
},
{
  module: "SpringAI",
  title: "Spring AI 里的 Message 有哪几种角色？各干什么？",
  points: [
    { label: "总-一句话答案", text: "对话模型的消息分四种角色：System 定规则、User 提问题、Assistant 是模型的回答、Tool 是工具的执行结果。它们拼成一个 Prompt 发给模型，模型靠这个序列理解\u201c我是谁、用户要什么、我之前说过什么、工具查到了什么\u201d。" },
    { label: "分-System", text: "System 是系统消息，用来设定人设、规则、边界和输出格式，优先级最高，通常只有一条，放在最前面。" },
    { label: "分-User", text: "User 是用户消息，内容是用户这一轮的输入，也可以挂多模态内容，比如：图片、音频等；" },
    { label: "分-Assistant", text: "Assistant 是 AI 回应的消息，主要是模型之前的回复。多轮对话时必须把历史 Assistant 消息回填，否则模型\u201c失忆\u201d；" },
    { label: "分-Tool", text: "Tool 是工具消息，工具结果回传给模型，用调用编号对上发起它的那次调用，模型据此生成最终答案。这条对用户不可见，是模型和代码的内部对话；" },
    { label: "总-组装时的四条规则", text: "1. System 放最前，只有一条；\n2. User 和 Assistant 必须交替、成对，不能连着两条 User 不给回复——因为有的模型会报错，有的会静默合并；\n3. Tool 消息必须紧跟对应的 tool_call，id 对不上就直接报错；\n4. 历史不能无限长：按 token 或条数截断，也可以做摘要，MessageWindowChatMemory 默认给的是按条数滑窗。" }
  ],
  note: "思路链：一句话答案 → 四种角色 → 组装时的规则"
},
{
  module: "SpringAI",
  title: "SpringAI 中如何注册工具？（工具就是 FunctionCall）",
  points: [
    { label: "总-一句话答案", text: "如果是单个方法注册，直接在方法上打 `@Tool` 注解做标记，再把这个方法所在的对象交给 ChatClient，通过 `.tools` 方法把这个工具类对象注册进去就行。如果要全局生效，或者工具很多，就把它包成 ToolCallbackProvider 注册成 Bean，框架会自动汇总。" },
    { label: "分-各种不同的方式", text: "用 `@Tool` 注解最简单，也最常用；也可以自己创建一个 ToolCallback，通过 ChatClient 的 toolCallbacks 方法注册；如果要全局注册，就用 ToolCallbackProvider，直接把它注册到 Spring 容器里就行。" },
    { label: "总-实际应用", text: "工具的描述非常重要，工具能不能被调用就取决于工具的描述够不够清晰；而且工具的数量也不能太多，因为工具调用本身也会消耗 token；所以很多时候要对工具进行切割；" }
  ],
  note: ""
},
{
  module: "SpringAI",
  title: "FunctionCall 和 MCP 有什么区别？",
  points: [
    { label: "总-一句话答案", text: "Function Call 是本地的工具调用，是模型的一种能力；MCP 则是一套集成协议，规定工具怎么被描述、发现、调用和授权；" },
    { label: "分-FunctionCall", text: "Function Call 也叫工具调用或函数调用。本质上，是我们自己先写好工具方法，比如调用业务接口查数据；然后把这个方法的名称和作用说明一起发给大模型。大模型会根据提示词判断要不要调用工具；如果要，它就会返回要调用的工具名称和参数内容。应用程序执行完工具后，再把执行结果发回给大模型，大模型据此生成最终答案。" },
    { label: "分-MCP", text: "MCP 不是模型的能力，而是一套基于 JSON-RPC 的开放协议，用来把\u201c工具提供方\u201d和\u201c工具使用方\u201d解耦。Server 负责暴露能力，Client 负责连接 Server，并调用 MCP 提供的能力。" },
    { label: "总-实际选型", text: "所以在实际应用中，如果只是内部工具、本项目自己用，那就用 Function Call；如果要跨应用复用，比如多个 Agent 共用，就考虑 MCP；如果要接第三方系统，优先找现成的 MCP 服务。" }
  ],
  note: ""
},
{
  module: "SpringAI",
  title: "工具调用会不会增加 token 成本？增加在哪？",
  points: [
    { label: "总-一句话答案", text: "肯定会，而且会比想象的多。主要就三处消耗：第一，工具本身的信息每轮都会随请求发给大模型；第二，模型会输出 tool_calls；第三，工具执行完后，结果还会回填进上下文；" },
    { label: "分-工具定义", text: "第一处是固定消耗，属于常驻成本。因为每次发请求，都要把所有已注册的工具信息一起带上。所以工具定义不是越多越好，得做好切割。" },
    { label: "分-模型的 tool_calls 输出", text: "第二处和第三处，就要看工具有没有被调用了。如果大模型要调用工具，就会输出 tool_calls，也就是调用工具的信息，主要包括工具名和工具需要的参数，这会算作输出 token；等工具执行结束、拿到结果，还要把结果再填回上下文发给大模型，这又算作输入 token；" },
    { label: "总-实际应用", text: "所以实际应用里，工具要合理切割，别把所有工具都全局注册，而是按业务动态挂载；工具描述要清晰又简洁；参数尽量扁平化，用简单类型，别直接塞一整个对象；" }
  ],
  note: ""
},
{
  module: "SpringAI",
  title: "MCP 协议的架构是怎样的？Host、Client、Server 三者什么关系？",
  points: [
    { label: "总-一句话答案", text: "MCP 里有三个重要角色：Host、Client 和 Server。Host 是宿主应用；Client 在宿主应用里，负责连接某个 Server；Server 就是能力的提供方；" },
    { label: "分-工作模式", text: "一个 Host 里可以有多个 Client，一个 Client 负责连接一个 Server，它们之间通过 JSON-RPC 通信。Server 可以是本地进程，也可以是远程服务。Server 可以对外提供工具调用、资源和提示词。" },
    { label: "总-结构意义", text: "这套架构的价值，就在于把\u201c工具\u201d从应用里解耦出来：Server 不用知道 Host 用的是什么模型，Host 也不用知道 Server 是怎么实现的。" }
  ],
  note: ""
},
{
  module: "SpringAI",
  title: "混合检索怎么做？RRF 是什么？",
  points: [
    { label: "总-一句话答案", text: "混合检索，就是同时跑两路召回：一路按语义检索，一路按关键字检索，最后把两路结果融合成一个排序。最常见的融合算法是 RRF；RRF 不看分数，只看排名；" },
    { label: "分-为什么要混合检索", text: "先说为什么要混合检索。纯向量检索，也就是按语义检索，能召回语义相近的文档；但它对专有名词、编号、型号这些内容不够敏感，可能召回语义相近但完全无关的内容。纯关键字检索查编号、查人名，一查一个准。这两种方式正好互补，所以才要混合检索；" },
    { label: "分-RRF 算法", text: "接下来说 RRF 算法。两路查询拿到结果后，要把结果融合。因为两路查询思路不同，所以结果分数没有可比性。RRF 是按排名来算的：每个文档先算\u201c排名 + 平滑常数\u201d，再取倒数；然后把同一个文档在两路查询里算出的结果相加，就得到它的最终分数；" },
    { label: "总-实际应用", text: "实际应用里，优先考虑元数据过滤，这是成本最低的；然后再考虑混合检索。毕竟混合检索要维护两套索引。" }
  ],
  note: ""
}
]);
