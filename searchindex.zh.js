var relearn_searchindex = [
  {
    "breadcrumb": "TRISA 开发者文档",
    "content": "TRISA集成概述 1.注册TRISA目录服务 2.实现TRISA网络协议 3.实现TRISA健康协议\nVASP目录服务注册 注册概述 在将TRISA协议集成到VASP软件之前，必须注册TRISA目录服务(DS)。TRISA DS为注册的VASP提供公钥和TRISA远程对等连接信息。\n注册TRISA DS后，您将收到KYV证书。KYV证书中的公钥将通过TRISA DS提供给其他VASP。\n在注册DS时，您将需要提供您的VASP实施TRISA网络服务的address:port端点。当您的VASP被确定为受益VASP时，该地址将被用于注册DS并由其他VASP使用。\n出于集成目的，可以使用托管的TestNet TRISA DS实例进行测试。在TestNet中，注册过程非常简化，可便于快速集成。建议在与TestNet集成的同时开始DS注册。\n目录服务注册 如需注册TRISA DS，请访问https://vaspdirectory.net/。\n您可以选择“注册/Register”标签开始注册。请注意，您可以使用本网站逐项输入您的注册详细信息，也可以上传包含注册详细信息的JSON文档。\n此注册方式将发送电子邮件给JSON文件中指定的所有技术联系人。后续将通过电子邮件指导完成注册。一旦您完成注册，TRISA TestNet管理员将收到您的注册并进行审核。\nTestNet管理员审核并批准注册后，您将通过电子邮件收到KYV证书，您的VASP将在TestNet DS中公开可见。\n实现TRISA P2P协议 先决条件 开始设置前，您需要以下信息:\nKYV证书(来自TRISA DS注册) 用于获取证书的CSR的公钥 关联的私钥 TRISA目录服务的主机名 绑定到TRISA目录服务中与VASP相关联的address:port的能力。 集成概述 集成TRISA协议涉及到客户端组件和服务器组件。\n客户端组件将与TRISA目录服务(DS)实例进行接口，以查找集成TRISA消息传递协议的其他VASP。客户端组件用于从您的VASP发出事务，以验证接收VASP是否符合TRISA。\n服务器组件接收来自集成TRISA协议的其他VASP的请求，并响应它们的请求。服务器组件提供了必须执行的回调，以便您的VASP能够返回满足TRISA网络协议的信息。\n目前，在Go中可以找到TRISA网络协议的参考实现。\nhttps://github.com/trisacrypto/testnet/blob/main/pkg/rVASP/trisa.go\n集成VASP必须运行它们自己的协议实现。如果需要Go之外的语言，则可以从定义TRISA 网络协议的Protocol Buffers生成客户端库。\n集成商应该集成传入的传送请求和密钥交换，也可以选择性地集成发出的传送请求和密钥交换。\n集成注意事项 TRISA网络协议定义了数据如何在参与的VASP之间传输。用于识别信息而传输的数据的推荐格式，建议采用IVMS101。VASP有责任确保发送/接收的识别数据满足金融行动特别工作组数据转移规则(FATF Travel Rule)。\n成功的TRISA交易将产生满足金融行动特别工作组数据转移规则的密钥和加密数据。TRISA并没有规定一旦获得这些数据应该如何存储。VASP有责任确保事务产生的数据的安全存储。",
    "description": "描述如何在TestNet中集成TRISA协议",
    "tags": [],
    "title": "集成概述",
    "uri": "/zh/getting-started/index.html"
  },
  {
    "breadcrumb": "TRISA 开发者文档",
    "content": "This portion of the documentation describes how to become a TRISA member so that you can receive Identity Certificates and use them to perform secure information transfers with other VASPs.\nTo join the TRISA network, you must register with the TRISA Global Directory Service (GDS).\nThe mechanics of registration include two important workflows:\nA KYV review process to ensure the network maintains trusted membership Certificate issuance for mTLS authentication in the network Next, learn more about the process of registration.",
    "description": "Describes How to Join TRISA",
    "tags": [],
    "title": "Joining TRISA",
    "uri": "/zh/joining-trisa/index.html"
  },
  {
    "breadcrumb": "TRISA 开发者文档 \u003e 参考",
    "content": "敬请期待!",
    "description": "常见问题",
    "tags": [],
    "title": "FAQ",
    "uri": "/zh/reference/faq/index.html"
  },
  {
    "breadcrumb": "TRISA 开发者文档 \u003e TestNet",
    "content": "TestNet提供了三种方便的“robot VASPs”(rVASPs)服务，用以促进与TRISATestNet的集成和测试。这些服务如下:\nAlice (api.alice.vaspbot.net:443): 用于触发和接收TRISA消息的主要集成rVASP。 Bob (api.bob.vaspbot.net:443): 一个用于查看与Alice进行交换的演示rVASP。 Evil (api.evil.vaspbot.net:443): 一个非TRISA TestNet会员的“evil”rVASP，用于测试未经验证的交互。 注意: rVASP目前主要是为演示而配置的，为了进行集成，我们已经开始让它们更健壮；如果有任何更改，请经常查看本文档。如果您发现rVASP代码或行为中的任何错误，请上报问题。\n开始使用rVASP 有两种方法可以使用rVASP来开发TRISA服务:\n您可以触发rVASP向您的服务发送TRISA交换消息。 您可以使用有效(或无效)的rVASP客户向rVASP发送TRISA消息。 rVASP有一个内置的数据库，里面存储着带有假钱包地址的假客户。他们对TRISA消息或对触发转账的响应要求发起者/受益客户对于rVASP有效。例如，如果客户钱包地址是有效的Alice地址，并且Alice是受益人，那么rVASP将用客户的假KYC数据进行响应，但如果是无效的，它将返回TRISA错误码。\n下面Alice、Bob和Evil的“客户”列表，可以作为与每个rVASP交互的参考:\nVASP “Crypto Wallet” Email api.bob.vaspbot.net 18nxAxBktHZDrMoJ3N2fk9imLX8xNnYbNh robert@bobvasp.co.uk api.bob.vaspbot.net 1LgtLYkpaXhHDu1Ngh7x9fcBs5KuThbSzw george@bobvasp.co.uk api.bob.vaspbot.net 14WU745djqecaJ1gmtWQGeMCFim1W5MNp3 larry@bobvasp.co.uk api.bob.vaspbot.net 1Hzej6a2VG7C8iCAD5DAdN72cZH5THSMt9 fred@bobvasp.co.uk api.alice.vaspbot.net 19nFejdNSUhzkAAdwAvP3wc53o8dL326QQ sarah@alicevasp.us api.alice.vaspbot.net 1ASkqdo1hvydosVRvRv2j6eNnWpWLHucMX mary@alicevasp.us api.alice.vaspbot.net 1MRCxvEpBoY8qajrmNTSrcfXSZ2wsrGeha alice@alicevasp.us api.alice.vaspbot.net 14HmBSwec8XrcWge9Zi1ZngNia64u3Wd2v jane@alicevasp.us api.evil.vaspbot.net 1AsF1fMSaXPzz3dkBPyq81wrPQUKtT2tiz gambler@evilvasp.gg api.evil.vaspbot.net 1PFTsUQrRqvmFkJunfuQbSC2k9p4RfxYLF voldemort@evilvasp.gg api.evil.vaspbot.net 172n89jLjXKmFJni1vwV5EzxKRXuAAoxUz launderer@evilvasp.gg api.evil.vaspbot.net 182kF4mb5SW4KGEvBSbyXTpDWy8rK1Dpu badnews@evilvasp.gg 注意，所有rVASP数据都是使用Faker工具生成的，用于产生真实/一致的测试数据，它们完全是虚构的。例如，Alice VASP(一家假的美国公司)的记录主要是在北美。\n如果您是一位Traveler客户，上面粗体的地址有一些属性数据与之关联，并且它们是基于Traveler的rVASP交互的一个很好的候选对象。\n条件 本文档假设您有一个正在运行最新TRISANetwork的服务，并且它已经在TRISA TestNet中注册，并且正确地安装了TestNet证书。参见TRISA 集成概况了解更多信息。警告: rVASP不参与TRISA工作网络，他们将只响应已验证的TRISA TestNet mTLS连接。\n要与rVASP API交互，您可以:\n使用rvasp CLI工具 使用rVASP Protocol Buffers并直接与API交互 如需安装CLI工具，您可以前往TestNet发布页面下载rvasp，克隆TestNet存储库，并构建cmd/rvasp二进制，或者使用如下go get命令安装:\n$ go get github.com/trisacrypto/testnet/... 如需使用rVASP protocol buffers，请克隆或从TestNet存储库下载，然后使用protoc将它们编译成您需要的语言。\n触发rVASP来发送一条消息 rVASP管理端点用于与rVASP直接交互，以实现开发和集成目的。注意，这个端点与上面描述的TRISA端点不同。\nAlice: admin.alice.vaspbot.net:443 Bob: admin.bob.vaspbot.net:443 Evil: admin.evil.vaspbot.net:443 如需使用命令行工具触发一条消息，请运行以下命令:\n$ rvasp transfer -e admin.alice.vaspbot.net:443 \\ -a mary@alicevasp.us \\ -d 0.3 \\ -B trisa.example.com \\ -b cryptowalletaddress \\ -E 此消息使用-e或--endpoint标志向Alice rVASP发送一条消息，并使用-a或--account标志指定发起账户应为\"mary@alicevasp.us\"。发起账户用于确定向受益人发送什么IVMS101数据。-d或--amount标志指定要发送的“AliceCoin”的数量。\n接下来的两个部分至关重要。-E或--external-demo标志告诉rVASP触发一个服务请求，而不是进行与另一个rVASP的演示交换。必须使用这个标志！最后，-B或--beneficiary-vasp标志指定rVASP将发送请求的位置。此字段应该能够在TRISA TestNet目录服务中查找；例如，如果可搜索到的话，它应该是您的通用名或VASP的名称。\n注意，您可以设置$RVASP_ADDR和$RVASP_CLIENT_ACCOUNT环境变量来分别指定-e和-a标志。\n如需直接使用Protocol Buffers，使用具有以下 “TransferRequest”的TRISAIntegration服务Transfer RPC:\n{ \"account\": \"mary@alicevasp.us\", \"amount\": 0.3, \"beneficiary\": \"cryptowalletaddress\", \"beneficiary_vasp\": \"trisa.example.com\", \"check_beneficiary\": false, \"external_demo\": true } 这些值与命令行程序中的值具有完全相同的规范。\n向rVASP发送一条TRISA消息 rVASP需要一个trisa.data.generic.v1beta1.Transaction作为事务有效负载，以及一个ivms101.IdentityPayload作为身份有效负载。身份有效负载受益人信息不需要填充，rVASP将响应填充受益人，但是身份有效负载不应该为空。建议您指定一些假身份数据，以利用rVASP解析和验证命令。\n确保在事务有效负载中，指定与上表中rVASP受益人相匹配的受益人钱包；如使用:\n{ \"txid\": \"1234\", \"originator\": \"anydatahereisfine\", \"beneficiary\": \"1MRCxvEpBoY8qajrmNTSrcfXSZ2wsrGeha\", \"amount\": 0.3, \"network\": \"TestNet\", \"timestamp\": \"2021-06-14T16:41:52-05:00\" } 您可以指定任何txid或originator字符串，并忽略network和timestamp字段。\n使用目录服务或直接密钥交换来获取rVASP RSA公钥，并使用AES256-GCM和HMAC-SHA256作为信封加密，创建一个密封的信封。然后使用TRISANetwork服务Transfer RPC将密封的信封发送到rVASP。\n待办: 很快trisa命令行程序将面世。我们将说明如何使用CLI程序在消息被释放后立即发送到这里。",
    "description": "通过rVASP进行TestNet集成",
    "tags": [],
    "title": "机器人 VASPs",
    "uri": "/zh/testing/rvasps/index.html"
  },
  {
    "breadcrumb": "TRISA 开发者文档 \u003e Joining TRISA",
    "content": "如需加入TRISA或TestNet网络，您必须注册TRISA全球目录服务(GDS)或司法管辖区指定的目录服务。注册目录服务包括两个工作流程:\nKYV审查过程，以确保网络维持可信任的成员 颁发用于在网络中进行mTLS认证的证书 即将上线: 关于注册表格、邮件验证和审核过程的更多信息。\n证书颁发 当您的注册通过审核和批准后，目前有两种机制可以从GDS获得mTLS证书。\n电子邮件发送的PKCS12加密证书 证书签名请求(CSR) _当您提交_注册时，您必须选择其中一个选项；在您提交注册后，您将无法更改选项。\nPKCS12加密电子邮件附件 第一种机制是最简单的— 只需在注册期间选择电子邮件选项，并忽略CSR字段。如果注册表格有效，GDS将返回一个PKCS12密码。请勿遗忘此密码，它在证书颁发过程中仅显示一次。\n审核通过后，GDS CA将生成包含私钥的完整证书，并使用PKCS12密码对其进行加密。在目录服务中注册公钥之后，GDS将把加密的证书作为ZIP文件通过电子邮件发送给技术联系人，或注册表单上第一个联系人。\n解压电子邮件附件后，您会看到一个名为\u003ccommon_name\u003e.p12的文件; 您可以使用如下命令对该文件进行解密以提取证书:\n$ openssl pkcs12 -in \u003ccommon_name\u003e.p12 -out \u003ccommon_name\u003e.pem -nodes 您还可以直接使用.zip文件，而无需通过github.com/trisacrypto/trisa/pkg/trust模块进行解密或解压。\n证书签名请求 创建证书的另一种方法是上传证书签名请求(CSR)。这种机制通常更可取，因为它意味着不需要通过网络传输私钥信息，而且私钥可以保存在安全的硬件中。\n如需在命令行中使用openssl生成CSR，首先在您的当前工作目录中创建一个名为trisa.conf的配置文件，通过以下命令用您打算托管TRISA端点的域名替换example.com:\n[req] distinguished_name = dn_req req_extensions = v3ext_req prompt = no default_bits = 4096 [dn_req] CN = example.com O = [Organization] L = [City] ST = [State or Province (完整拼出，勿使用缩写)] C = [2 digit country code] [v3ext_req] basicConstraints = CA:FALSE keyUsage = digitalSignature, keyEncipherment, nonRepudiation extendedKeyUsage = clientAuth, serverAuth subjectAltName = @alt_names [alt_names] DNS.1 = example.com 请仔细填写您的证书的配置，信息必须正确无误，所填信息无法在不重新颁发证书的情况下更改。还要确保配置中的条目后面没有空格!\n然后将example.com替换为您将使用的TRISA端点的域名，并运行以下命令:\n$ openssl req -new -newkey rsa:4096 -nodes -sha384 -config trisa.conf \\ -keyout example.com.key -out example.com.csr 您的私钥现在存储在example.com.key — 确保私钥安全 —它在您mTLS服务中的mTLS连接时必须使用，并将在TRISA网络上建立信任。\nexample.com.csr文件包含您的证书签名请求。复制并粘贴此文件的内容，在您的注册请求中包含-----BEGIN CERTIFICATE REQUEST----- 和-----END CERTIFICATE REQUEST-----。",
    "description": "为VASP注册目录服务",
    "tags": [],
    "title": "注册",
    "uri": "/zh/joining-trisa/registration/index.html"
  },
  {
    "breadcrumb": "TRISA 开发者文档 \u003e 参考",
    "content": "发起者: 区块链交易的发起者，因此也是TRISA传送的发起者。“发起者”可以指原始VASP、VASP的原始客户或两者兼有。\n受益人: 区块链交易的接收者，因此也是TRISA传送的接收者。“受益人”可以指VASP、VASP的受益人客户或两者兼有。\n本地vs远程VASP: 参考信息交换中点对点通信源。“本地VASP”通常指您正在运行的服务，而“远程VASP”通常指TRISA网络中的其他VASP。本地vs 远程通常用于决定发起者vs受益人。如果您发起交易，那么本地VASP是发起者，而远程VASP是受益人。如果您正在接收交易，那么本地VASP是受益人，而远程VASP是发起者。",
    "description": "TRISA词汇与术语",
    "tags": [],
    "title": "词汇表",
    "uri": "/zh/reference/glossary/index.html"
  },
  {
    "breadcrumb": "TRISA 开发者文档",
    "content": "创建TRISA TestNet是为了提供TRISA点对点协议的演示，托管“robot VASP”服务，以促进TRISA集成，并且它是促进公钥交换和对等体发现的TRISA主目录服务的所在之处。\nTRISA TestNet由以下服务组成:\nTRISA Directory Service - 一个探索TRISA全球目录服务并注册成为TRISA会员的用户界面 TestNet Demo - 一个演示网站，展示运行在TestNet中的“机器人”VASP之间的TRISA交互 TestNet还有三个robot VASP（简称“rVASP”），为TRISA会员集成他们的TRISA服务提供了便利。主要的rVASP是Alice，用于演示的次要rVASP是Bob，为了测试与未经验证的TRISA会员之间的交互，还有一个“Evil” rVASP。",
    "description": "TRISA TestNet",
    "tags": [],
    "title": "TestNet",
    "uri": "/zh/testing/index.html"
  },
  {
    "breadcrumb": "TRISA 开发者文档",
    "content": "TRISA全球目录服务(GDS)促进TRISA成员之间的点对点交换，具体方式如下:\n提供查找TRISA端点的发现服务 颁发mTLS证书来验证交换 提供证书和KYC信息进行验证 与目录服务的交互由TRISA协议指定。目前，TRISA组织代表TRISA网络托管GDS。本文档描述了目录服务的TRISA实现以及与之进行的特定于TRISA的交互。",
    "description": "全球TRISA目录服务(GDS)",
    "tags": [],
    "title": "目录服务",
    "uri": "/zh/gds/index.html"
  },
  {
    "breadcrumb": "TRISA 开发者文档 \u003e 目录服务",
    "content": "TRISAMembers服务是一项实验服务，为经过验证的TRISA成员提供额外的、安全的目录服务访问。只有TRISA网络的成员（如，已获得有效身份证明的成员）可使用该服务访问关于网络的详细目录服务数据。*注意：一旦通过验证，这项服务将被移入官方的TRISA规范。\nTRISAMembers服务 本节描述了TRISAMembers端点的protocol buffers，可以在这里 找到。 该文件可以编译成您选择的语言（Golang 的示例)。 注意：如果您还没有下载并安装protocol buffer编译器，则您需下载并安装一个。\n目前，TRISAMembers服务只包括一个RPC \u0026mdash；List RPC。将来可能会提供其他实验性的安全 RPC。\nservice TRISAMembers { // List all verified VASP members in the Directory Service. rpc List(ListRequest) returns (ListReply) {}; } 列表中的认证会员 List RPC 返回一个所有经验证的TRISA成员分页列表，方便TRISA查找。RPC期望输入一个ListRequest并返回一个ListReply。\nListRequest ListRequest可用来管理VASP列表请求的分页。如果有超过指定页面大小的结果，ListReply将返回一个页面标记，可以用来获取下一页（只要不修改原始请求的参数，如任何过滤器或分页参数）。\npage_size指定每页的结果数量，在不同的页面请求之间不能改变；它的默认值是100。page_token指定了获取下一页结果的页面标记。\nmessage ListRequest { int32 page_size = 1; string page_token = 2; } ListReply ListReply返回一个VASP详细信息的简短列表，用于促进点对点密钥交换或对目录服务进行更详细的查询。\nvasps是一个VASP的列表（见下面VASPMember的定义），next_page_token，如果指定的话，是存在另一页结果的通知。\nmessage ListReply { repeated VASPMember vasps = 1; string next_page_token = 2; } VASPMember 一个VASPMember包含足够的信息，以方便点对点的交流或对目录服务进行更详细的查询。ListReply将包含一个没有、一个或多个VASPMembers的列表。\nmessage VASPMember { // 目录服务中唯一能识别VASP的组件 string id = 1; string registered_directory = 2; string common_name = 3; // 连接到远程VASP以执行TRISA请求的地址 string endpoint = 4; // 用于促进搜索和匹配的额外详情 string name = 5; string website = 6; string country = 7; trisa.gds.models.v1beta1.BusinessCategory business_category = 8; repeated string vasp_categories = 9; string verified_on = 10; } 连接mTLS 要使用TRISAMembers服务，您必须使用您在注册时获得的TRISA身份证书，用mTLS 进行认证。\n身份验证 上的gRPC文档提供了在各种语言中使用mTLS连接的代码样本，其中包括Java, C++, Golang, Ruby, 和 Python。\n举个例子，如果您使用Golang连接到服务目录，您将使用tls，x509, 和credentials 库，从您电脑上的安全位置加载您的TRISA身份证书，并构建TLS凭证，与服务器相互验证连接。最后，你将使用编译的成员protocol buffer代码来创建一个成员客户端。*注：protocol buffer的定义在本页前面有更全面的描述。\nimport ( \"crypto/tls\" \"crypto/x509\" members \"github.com/trisacrypto/directory/pkg/gds/members/v1alpha1\" \"google.golang.org/grpc/credentials\" ) func (m *MyProfile) Connect() (_ members.TRISAMembersClient, err error){ config := \u0026tls.Config{ Certificates: []tls.Certificate{m.Cert}, // m.Cert is your TRISA certificate parsed into a *x509.Certificate MinVersion: tls.VersionTLS12, CurvePreferences: []tls.CurveID{ tls.CurveP521, tls.CurveP384, tls.CurveP256, }, PreferServerCipherSuites: true, CipherSuites: []uint16{ tls.TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384, tls.TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256, tls.TLS_RSA_WITH_AES_256_GCM_SHA384, tls.TLS_RSA_WITH_AES_128_GCM_SHA256, }, ClientAuth: tls.RequireAndVerifyClientCert, // this will ensure an mTLS connection ClientCAs: m.Pool, // m.Pool is a *x509.CertPool that must contain the RA and IA public certs from your TRISA certificate chain } var creds *credentials.TransportCredentials if creds, err = credentials.NewTLS(config); err != nil { return nil, err } var cc *grpc.ClientConn if cc, err = grpc.NewClient(m.Endpoint, grpc.WithTransportCredentials(creds)); err != nil { return nil, err } return members.NewTRISAMembersClient(cc), nil } 注意，目前有2个TRISA目录；TRISA TestNet，允许用户对TRISA交互进行实验，以及VASP Directory，是用于TRISA交易的生产网络。 如果您已经注册了TestNet并拥有TestNet证书，那么您将传递到拨号功能的端点将是members.trisatest.net:443。 或者，如果您想访问VASP会员目录，且已经是一位注册会员，您可以使用终端：members.vaspdirectory.net:443",
    "description": "访问其它TRISA成员",
    "tags": [],
    "title": "访问成员",
    "uri": "/zh/gds/members/index.html"
  },
  {
    "breadcrumb": "TRISA 开发者文档 \u003e 参考",
    "content": "MIT许可\n版权(c) 2021 TRISA https://trisa.io\n特此免费授予任何获得本软件副本和相关文档文件(下称“本软件”)的人使用本软件的权利，包括但不限于使用、复制、修改、合并、发布、分发、再许可和/或销售本软件副本的权利，以及允许获得本软件的人员这样做的权利，但须满足以下条件：\n上述版权声明和本许可声明应包含在软件的所有副本或实质部分中。\n本软件按“原样”提供，不作任何明示或暗示的保证，包括但不限于对适销性、特定用途适用性和非侵权性的保证。在任何情况下，无论是在合同诉讼、侵权诉讼或其他诉讼中，作者或版权持有人均不承担因本软件或本软件的使用或其他交易而产生、引起或与之相关的任何索赔、损害或其他责任。",
    "description": "开源许可",
    "tags": [],
    "title": "执照",
    "uri": "/zh/reference/license/index.html"
  },
  {
    "breadcrumb": "TRISA 开发者文档",
    "content": "敬请期待!",
    "description": "TRISA参考案例",
    "tags": [],
    "title": "参考",
    "uri": "/zh/reference/index.html"
  },
  {
    "breadcrumb": "",
    "content": "Travel Rule Information Sharing Architecture (TRISA)的目标是在不修改核心区块链协议、不增加交易成本或修改虚拟货币点对点交易流的情况下，使加密货币交易身份信息符合FATF和FinCEN数据转移规则。TRISA协议和规范由TRISA工作组定义；欲了解更多有关规范的信息，请阅读TRISA白皮书的当前版本。\n本网站包含TRISA协议的开发人员文档和参考实现，可以在github.com/trisacrypto/trisa查看。TRISA协议被定义为一个gRPC API，用于促进那些必须遵守数据转移规则解决方案的虚拟资产服务提供商(VASP)之间的语言无关、高效、点对点的服务。API和消息交换格式都是通过Protocol Buffers定义的，可以在存储库的protos目录中找到。此外，在存储库的pkg目录中提供了Go编程语言中的参考实现。在未来，其他实现将作为特定语言的库代码提供，可查阅存储库的lib目录。\nTRISA的v1版本正在积极开发中，更多的文档即将发布!",
    "description": "TRISA开发人员文档",
    "tags": [],
    "title": "TRISA 开发者文档",
    "uri": "/zh/index.html"
  },
  {
    "breadcrumb": "TRISA 开发者文档",
    "content": "",
    "description": "",
    "tags": [],
    "title": "类别",
    "uri": "/zh/categories/index.html"
  },
  {
    "breadcrumb": "TRISA 开发者文档",
    "content": "",
    "description": "",
    "tags": [],
    "title": "标签",
    "uri": "/zh/tags/index.html"
  }
]
