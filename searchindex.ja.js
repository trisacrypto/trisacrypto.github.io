var relearn_searchindex = [
  {
    "breadcrumb": "TRISA 開発者向けドキュメント",
    "content": "TRISA統合の概要 TRISAディレクトリサービスに登録する TRISAネットワークプロトコルを実装します TRISA健康プロトコルを実装します VASPディレクトリサービス登録 登録の概要 TRISAプロトコルをVASPソフトウェアに統合する前に、TRISAディレクトリサービス（DS）に登録する必要があります。TRISA DSは登録されたVASPの公開鍵およびTRISAリモートピア接続情報を提供します。\nTRISA DSに登録すると、KYV証明書を受け取ります。KYV証明書の公開鍵はTRISADを介して他のVASPで利用できるようになります。\nDSに登録するときは、VASPがTRISAネットワークサービスを実装する「address：port」エンドポイントを指定する必要があります。 このアドレスはDSに登録され、VASPが受益者VASPとして識別されたときに他のVASPによって利用されます。\n統合の目的で、ホストされたテストネットTRISADSインスタンスをテストに使用できます。 テストネットでは登録プロセスが合理化され、迅速な統合が容易になります。 テストネットと統合しながら、本番DS登録を開始することをお勧めします。\nディレクトリサービス登録 TRISA DSへの登録を開始するには、次のウェブサイトにアクセスしてください。 https://trisa.directory/\n「登録」タブを選択して登録を開始できます。このウェブサイトを使用して、フィールドごとに登録の詳細を入力したり、登録の詳細を含むJSONドキュメントをアップロードしたりできることに注意してください。\nこの登録により、JSONファイルで指定されたすべての技術担当者に電子メールが送信されます。電子メールは、登録プロセスの残りの部分を案内します。登録手順を完了すると、TRISAテストネット管理者はレビューのために登録を受け取ります。\nテストネット管理者が登録を確認して承認すると、電子メールでKYV証明書を受け取り、VASPがテストネットDSに公開されます。\nTRISAP2Pプロトコルの実装 前提条件 セットアップを開始するには、次のものが必要です。\nKYV証明書（TRISA DS登録から） CSRが証明書を取得するために使用する公開鍵 関連する秘密鍵 TRISAディレクトリサービスのホスト名 TRISAディレクトリサービスでVASPに関連付けられているaddress：portにバインドする機能。 統合の概要 TRISAプロトコルの統合には、クライアントコンポーネントとサーバーコンポーネントの両方が含まれます。\nクライアントコンポーネントは、TRISAディレクトリサービス（DS）インスタンスとインターフェイスして、TRISAメッセージングプロトコルを統合する他のVASPを検索します。 クライアントコンポーネントは、VASPからの送信トランザクションに使用され、受信VASPがTRISAに準拠していることを確認します。\nサーバーコンポーネントは、TRISAプロトコルを統合する他のVASPから要求を受信し、それらの要求への応答を提供します。 サーバーコンポーネントは、VASPがTRISAネットワークプロトコルを満たす情報を返すことができるように実装する必要があるコールバックを提供します。\n現在、TRISAネットワークプロトコルのリファレンス実装はGoで利用できます。\nhttps://github.com/trisacrypto/testnet/blob/main/pkg/rvasp/trisa.go\nVASPを統合するには、プロトコルの独自の実装を実行する必要があります。 行け以外の言語が必要な場合は、TRISAネットワークプロトコルを定義するプロトコルバッファからクライアントライブラリを生成できます。\nインテグレータは、着信転送要求と鍵交換を統合することが期待されており、オプションで、発信転送要求と鍵交換を統合することもできます。\n統合ノート TRISAネットワークプロトコルは、参加しているVASP間でデータを転送する方法を定義します。 情報を識別するために転送されるデータの推奨フォーマットは、IVMS101データフォーマットです。 送受信された識別データがFATFトラベルルールを満たしていることを確認するのは、実装するVASPの責任です。\nTRISAトランザクションが成功すると、FATFトラベルルールを満たすキーと暗号化されたデータが得られます。 TRISAは、取得後にこのデータを保存する方法を定義していません。 トランザクションの結果データの安全なストレージを処理するのは、実装するVASPの責任です。",
    "description": "TRISAプロトコルをTestNetに統合する方法について説明します",
    "tags": [],
    "title": "TRISAプロトコルをTestNetに統合する方法について説明します",
    "uri": "/ja/getting-started/index.html"
  },
  {
    "breadcrumb": "TRISA 開発者向けドキュメント",
    "content": "This portion of the documentation describes how to become a TRISA member so that you can receive Identity Certificates and use them to perform secure information transfers with other VASPs.\nTo join the TRISA network, you must register with the TRISA Global Directory Service (GDS).\nThe mechanics of registration include two important workflows:\nA KYV review process to ensure the network maintains trusted membership Certificate issuance for mTLS authentication in the network Next, learn more about the process of registration.",
    "description": "Describes How to Join TRISA",
    "tags": [],
    "title": "Joining TRISA",
    "uri": "/ja/joining-trisa/index.html"
  },
  {
    "breadcrumb": "TRISA 開発者向けドキュメント \u003e TRISAリファレンス",
    "content": "乞うご期待！",
    "description": "よくある質問",
    "tags": [],
    "title": "よくある質問",
    "uri": "/ja/reference/faq/index.html"
  },
  {
    "breadcrumb": "TRISA 開発者向けドキュメント \u003e TestNet",
    "content": "TestNetは、3つの便利な「ロボットVASP」（rVASP）サービスをホストして、TRISA TestNetとの統合とテストを容易にします。 これらのサービスは次のとおりです。\nAlice(api.alice.vaspbot.com:443): TRISAメッセージのトリガーと受信に使用されるプライマリ統合rVASP。 Bob(api.bob.vaspbot.com:443): Aliceとの交換を表示するデモrVASP。 Evil(api.evil.vaspbot.com:443): 認証されていない相互作用をテストするために使用される、TRISA TestNetメンバーではない「Evil」rVASP。 注：rVASPは現在、主にデモ用に構成されており、統合の目的でより堅牢にするための作業が開始されています。変更がないか、このドキュメントを定期的に確認してください。rVASPコードまたは動作にバグに気付いた場合は、問題を開いてください。\nrVASPの使用開始 rVASPを使用してTRISAサービスを開発するには、次の2つの方法があります。\nrVASPをトリガーして、サービスにTRISA交換メッセージを送信できます。 有効な（または無効な）rVASPカスタマーを使用してTRISAメッセージをrVASPに送信できます。 rVASPには、偽のウォレットアドレスを持つ偽の顧客のデータベースが組み込まれています。 TRISAメッセージまたはトリガーされた転送への応答には、発信者/受取人の顧客がrVASPに対して有効である必要があります。例えば。顧客のウォレットアドレスが有効なAliceアドレスであり、Aliceが受取人である場合、rVASPは顧客の偽のKYCデータで応答しますが、そうでない場合は、TRISAエラーコードを返します。\n次のAlice、Bob、およびEvilの「顧客」の表は、各rVASPと対話するためのリファレンスとして使用できます。\nVASP “Crypto Wallet” Email api.bob.vaspbot.com 18nxAxBktHZDrMoJ3N2fk9imLX8xNnYbNh robert@bobvasp.co.uk api.bob.vaspbot.com 1LgtLYkpaXhHDu1Ngh7x9fcBs5KuThbSzw george@bobvasp.co.uk api.bob.vaspbot.com 14WU745djqecaJ1gmtWQGeMCFim1W5MNp3 larry@bobvasp.co.uk api.bob.vaspbot.com 1Hzej6a2VG7C8iCAD5DAdN72cZH5THSMt9 fred@bobvasp.co.uk api.alice.vaspbot.com 19nFejdNSUhzkAAdwAvP3wc53o8dL326QQ sarah@alicevasp.us api.alice.vaspbot.com 1ASkqdo1hvydosVRvRv2j6eNnWpWLHucMX mary@alicevasp.us api.alice.vaspbot.com 1MRCxvEpBoY8qajrmNTSrcfXSZ2wsrGeha alice@alicevasp.us api.alice.vaspbot.com 14HmBSwec8XrcWge9Zi1ZngNia64u3Wd2v jane@alicevasp.us api.evil.vaspbot.com 1AsF1fMSaXPzz3dkBPyq81wrPQUKtT2tiz gambler@evilvasp.gg api.evil.vaspbot.com 1PFTsUQrRqvmFkJunfuQbSC2k9p4RfxYLF voldemort@evilvasp.gg api.evil.vaspbot.com 172n89jLjXKmFJni1vwV5EzxKRXuAAoxUz launderer@evilvasp.gg api.evil.vaspbot.com 182kF4mb5SW4KGEvBSbyXTpDWy8rK1Dpu badnews@evilvasp.gg すべてのrVASPデータは、フェイカーツールを使用して生成され、現実的で一貫性のあるテストデータとフィクスチャを生成し、完全に架空のものであることに注意してください。 たとえば、Alice VASP（偽の米国企業）のレコードは、主に北米などにあります。\nあなたがトラベラーの顧客である場合、上記の太字のアドレスにはいくつかのアトリビューションデータが関連付けられており、トラベラーベースのrVASPインタラクションの候補として適しています。\n予選 このドキュメントは、最新の「TRISA ネットワーク」サービスを実行しているサービスがあり、そのサービスがTRISA TestNetに登録されており、TestNet証明書が正しくインストールされていることを前提としています。 TRISA統合の概要を参照してください 詳細については。 警告: rVASPはTRISAネットワークに参加せず、検証済みのTRISA TestNet mTLS接続にのみ応答します。\nrVASP APIと対話するには、次のいずれかを実行できます。\nrvaspCLIツールを使用します rVASPプロトコルバッファを使用し、APIと直接対話します CLIツールをインストールするには、TestNetリリースページ で適切なアーキテクチャの rvasp実行可能ファイルをダウンロードし、TestNetリポジトリ そして、 cmd/rvaspバイナリをビルドするか、次のようにgogetでインストールします。\n$ go get github.com/trisacrypto/testnet/... rVASPプロトコルバッファを使用するには, それらをTestNetリポジトリから複製またはダウンロードしてから、protocを使用して好みの言語にコンパイルします。\nメッセージを送信するためのrVASPのトリガー rVASP管理エンドポイントは、開発および統合の目的でrVASPと直接対話するために使用されます。 このエンドポイントは、前述のTRISAエンドポイントとは異なることに注意してください。\nAlice: admin.alice.vaspbot.com:443 Bob: admin.bob.vaspbot.com:443 Evil: admin.evil.vaspbot.com:443 コマンドラインツールを使用してメッセージをトリガーするには、次のコマンドを実行します。\n$ rvasp transfer -e admin.alice.vaspbot.com:443 \\ -a mary@alicevasp.us \\ -d 0.3 \\ -B trisa.example.com \\ -b cryptowalletaddress \\ -E このメッセージは、-eまたは --endpointフラグを使用してアリスrVASPにメッセージを送信し、 -aまたは --accountフラグを使用して発信元アカウントが\"mary@alicevasp.us\"であることを指定します 。 元のアカウントは、受取人に送信するIVMS101データを決定するために使用されます。 -dまたは --amountフラグは、送信する「アリスコイン」の量を指定します。\n次の2つの部分は重要です。 -Eまたは --external-demoフラグは、別のrVASPとのデモ交換を実行するのではなく、サービスへの要求をトリガーするようにrVASPに指示します。 このフラグは必須です！ 最後に、 -Bまたは --beneficiary-vaspフラグは、rVASPがリクエストを送信する場所を指定します。このフィールドは、TRISA TestNet ディレクトリサービスで検索できる必要があります。例えば共通名、または検索可能な場合はVASPの名前にする必要があります。\n$RVASP_ADDRおよび $RVASP_CLIENT_ACCOUNT環境変数を設定してそれぞれ -eおよび -aフラグを指定できることに注意してください。\nプロトコルバッファを直接使用するには、次の TransferRequestで TRISAIntegrationサービス TransferRPCを使用します。\n{ \"account\": \"mary@alicevasp.us\", \"amount\": 0.3, \"beneficiary\": \"cryptowalletaddress\", \"beneficiary_vasp\": \"trisa.example.com\", \"check_beneficiary\": false, \"external_demo\": true } これらの値は、コマンドラインプログラムの値とまったく同じ仕様です。\nTRISAメッセージをrVASPに送信する rVASPは、トランザクションペイロードとしてtrisa.data.generic.v1beta1.Transactionを、IDペイロードとして ivms101.IdentityPayloadを想定しています。 IDペイロードの受取人情報を入力する必要はありませんrVASPは受取人の入力に応答しますが、IDペイロードをnullにすることはできません。rVASPの解析および検証コマンドを利用するために、偽のIDデータを指定することをお勧めします。\nトランザクションペイロードで、上記の表のrVASP受取人と一致する受取人ウォレットを指定していることを確認してください。例えば 使用：\n{ \"txid\": \"1234\", \"originator\": \"anydatahereisfine\", \"beneficiary\": \"1MRCxvEpBoY8qajrmNTSrcfXSZ2wsrGeha\", \"amount\": 0.3, \"network\": \"TestNet\", \"timestamp\": \"2021-06-14T16:41:52-05:00\" } txidまたは originator文字列を指定でき、networkおよび timestampフィールドは無視されます。\nディレクトリサービスまたは直接キー交換を使用してrVASPRSA公開鍵をフェッチし、エンベロープ暗号化として「AES256-GCM」および「HMAC-SHA256」を使用して、封印されたエンベロープを作成します。 次に、 TRISANetworkサービス Transfer RPCを使用して、封印された封筒をrVASPに送信します。\nTODO：まもなく trisaコマンドラインプログラムが利用可能になります。 CLIプログラムを使用して、メッセージがリリースされたらすぐに送信する方法をここで指定します。",
    "description": "テストネット統合のためのrVASPの操作",
    "tags": [],
    "title": "テストネット統合のためのrVASPの操作",
    "uri": "/ja/testing/rvasps/index.html"
  },
  {
    "breadcrumb": "TRISA 開発者向けドキュメント \u003e Joining TRISA",
    "content": "TRISAまたはテストネットネットワークに参加するには、TRISAグローバルディレクトリサービス（GDS）または管轄区域固有のディレクトリサービスの1つに登録する必要があります。 ディレクトリサービスへの登録には、次の2つのワークフローがあります。\nネットワークが信頼できるメンバーシップを維持していることを確認するためのKYVレビュープロセス ネットワークでのmTLS認証のための証明書の発行 近日公開：登録フォーム、メールによる確認、レビュープロセスの詳細。\n##証明書の発行\n現在、登録が確認および承認されたときにGDSからmTLS証明書を受信するメカニズムは2つあります。\n電子メールで送信されたPKCS12暗号化証明書 証明書署名要求（CSR） 登録を送信するときに、これらのオプションの1つを選択する必要があります。 登録が送信された後は、オプションを切り替えることはできません。\nPKCS12暗号化メールの添付ファイル 最初のメカニズムは最も簡単です- 登録時に電子メールオプションを選択し、CSRフィールドを省略してください。 登録フォームが有効な場合、GDSはPKCS12パスワードを返します。 このパスワードを紛失しないでください。証明書の発行プロセス中に使用できるようになるのはこのパスワードのみです。\nレビューの承認時に、GDS CAは秘密鍵を含む完全な証明書を生成し、PKCS12パスワードを使用して暗号化します。 ディレクトリサービスに公開鍵を登録した後、GDSは暗号化された証明書をZIPファイルとして技術担当者、または登録フォームで最初に利用可能な連絡先に電子メールで送信します。\n電子メールの添付ファイルを解凍すると、\u003ccommon_name\u003e .p12という名前のファイルが見つかります。このファイルを復号化して、次のように証明書を抽出できます。\n$ openssl pkcs12 -in \u003ccommon_name\u003e.p12 -out \u003ccommon_name\u003e.pem -nodes また、.zipファイルを復号化または抽出せずに直接使用することもできますgithub.com/trisacrypto/trisa/pkg/trust モジュール。\n証明書署名リクエスト 証明書を作成する代わりに、証明書署名要求（CSR）をアップロードすることもできます。このメカニズムは、秘密鍵の素材をネットワーク経由で送信する必要がなく、秘密鍵を安全なハードウェアに残しておくことができるため、多くの場合に適しています。\nコマンドラインで opensslを使用してCSRを生成するには、最初に現在の作業ディレクトリに trisa.confという名前の構成ファイルを作成し、example.comをTRISAエンドポイントをホストする予定のドメインに置き換えます。\n[req] distinguished_name = dn_req req_extensions = v3ext_req prompt = no default_bits = 4096 [dn_req] CN = example.com O = [Organization] L = [City] ST = [State or Province (完全に綴られており、略語はありません)] C = [2 digit country code] [v3ext_req] basicConstraints = CA:FALSE keyUsage = digitalSignature, keyEncipherment, nonRepudiation extendedKeyUsage = clientAuth, serverAuth subjectAltName = @alt_names [alt_names] DNS.1 = example.com 証明書の構成を慎重に入力してください。この情報は正しくなければならず、証明書を再発行せずに変更することはできません。 また、構成のエントリの後にスペースがないことを確認してください。\n次に、次のコマンドを実行し、example.comをTRISAエンドポイントとして使用するドメイン名に置き換えます。\n$ openssl req -new -newkey rsa:4096 -nodes -sha384 -config trisa.conf \\ -keyout example.com.key -out example.com.csr これで、秘密鍵が example.com.key＆mdash;に保存されます。 この秘密鍵を安全に保つ＆mdash; これは、mTLSサービスのmTLS接続に必要であり、TRISAネットワークで信頼を確立します。\nexample.com.csrファイルには、証明書署名要求が含まれています。 ----- BEGIN CERTIFICATE REQUEST -----と ----- END CERTIFICATE REQUEST -----を含むこのファイルの内容をコピーして登録要求に貼り付けます。",
    "description": "ディレクトリサービスへのVASPの登録",
    "tags": [],
    "title": "ディレクトリサービスへのVASPの登録",
    "uri": "/ja/joining-trisa/registration/index.html"
  },
  {
    "breadcrumb": "TRISA 開発者向けドキュメント \u003e TRISAリファレンス",
    "content": "オリジネーター：ブロックチェーントランザクションのイニシエーターであり、したがってTRISA転送のイニシエーターでもあります。 「発信者」とは、発信元のVASP、VASPの発信元の顧客、またはその両方を指します。\n受取人：ブロックチェーントランザクションの受信者、したがってTRISA転送の受信者。 「受益者」とは、受益者VASP、VASPの受益者顧客、またはその両方を指す場合があります。\nローカルvsリモートVASP：情報交換におけるピアツーピアトラフィックのソースへの参照。 「ローカルVASP」は通常、実行しているサービスを指し、「リモートVASP」は通常、TRISAネットワーク内の他のVASPを指します。 ローカルvs.リモートは、多くの場合、発信者と受益者を調整するために使用されます。 トランザクションを開始する場合は、ローカルVASPが発信者であり、リモートVASPが受益者です。 トランザクションを受信している場合は、ローカルVASPが受益者であり、リモートVASPが発信者です。",
    "description": "TRISA 用語集 and 専門語",
    "tags": [],
    "title": "用語集",
    "uri": "/ja/reference/glossary/index.html"
  },
  {
    "breadcrumb": "TRISA 開発者向けドキュメント",
    "content": "TRISA TestNetはTRISAピアツーピアプロトコルのデモンストレーションを提供するために設立され、TRISA統合を容易にする「ロボットVASP」サービスをホストし、公開鍵交換とピア検出を容易にするプライマリTRISAディレクトリサービスの場所です。\nTRISA TestNetは次のサービスで構成されています。\nTRISA Directory Service - TRISAグローバルディレクトリサービスを探索し、TRISAメンバーになるために登録するためのユーザーインターフェイス TestNet Demo - TestNetで実行される「ロボット」VASP間のTRISA相互作用を示すデモサイト TestNetはTRISAメンバーがTRISAサービスを統合するための利便性として実装された3つのロボットVASPまたはrVASPもホストします。 プライマリrVASPはAliceであり、デモ目的のセカンダリはBobです。検証されていないTRISAメンバーとの相互作用をテストするために、「Evil」rVASPもあります。",
    "description": "The TRISA TestNet",
    "tags": [],
    "title": "TestNet",
    "uri": "/ja/testing/index.html"
  },
  {
    "breadcrumb": "TRISA 開発者向けドキュメント",
    "content": "グローバルTRISAディレクトリサービス（GDS）は、次のようにTRISAメンバー間のピアツーピア交換を容易にします。\nTRISAエンドポイントを見つけるための検出サービスを提供する 交換を検証するためにmTLS証明書を発行する 検証用の証明書とKYC情報を提供する ディレクトリサービスとの相互作用は、TRISAプロトコルによって指定されます。 現在、TRISA組織は、TRISAネットワークに代わってGDSをホストしています。 このドキュメントでは、ディレクトリサービスのTRISA実装と、それとのTRISA固有の相互作用について説明します。",
    "description": "グローバル TRISA ディレクトリサービス (GDS)",
    "tags": [],
    "title": "ディレクトリサービス",
    "uri": "/ja/gds/index.html"
  },
  {
    "breadcrumb": "TRISA 開発者向けドキュメント \u003e ディレクトリサービス",
    "content": "あの TRISAMembers このサービスは実験的なものであり、検証済みのトリッサメンバーにディレクトリサービスへの追加の安全なアクセスを提供します。ネットワークのメンバーのみが、このサービスを使用してネットワークに関する詳細なディレクトリサービスデータにアクセスできます。 注：検証されると、このサービスは公式のトリッサ仕様に移行されます。.\nあの TRISAMembers サービス このセクションでは、protocol buffers のためにTRISAMembers 見つけることができるエンドポイント。ここ. このファイルは、選択した言語にコンパイルできます。 (ゴランの例). ノート: ダウンロードしてインストールする必要があります protocol buffer まだ行っていない場合はコンパイラ.\n現在、TRISAMembers サービスは単一のRPCのみで構成されます— あの List RPC. その他の実験的で安全RPCs 将来的に利用可能になる可能性があります。.\nservice TRISAMembers { // List all verified VASP members in the Directory Service. rpc List(ListRequest) returns (ListReply) {}; } 確認済みメンバーのリスト あの List RPC トリッサピアルックアップを容易にするために、検証されたすべてのトリッサメンバーのページ付けされたリストを返します。あの RPC 入力として期待しますListRequest とを返します ListReply.\nListRequest あ ListRequest 仮想資産サービスプロバイダーリスト要求のページ付けを管理するために使用できます。 指定されたページサイズよりも多くの結果がある場合ListReply次のページをフェッチするために使用できるページトークンを返します。 page_sizeページごとの結果の数を指定し、ページ要求間で変更することはできません。 デフォルト値は100です。 あの page_token` 結果の次のページをフェッチするためのページトークンを指定します。\nmessage ListRequest { int32 page_size = 1; string page_token = 2; } ListReply あ ListReply ピアツーピアキー交換またはディレクトリサービスに対するより詳細なルックアップを容易にすることを目的とした仮想アセットサービスプロバイダーの詳細の簡略リストを返します。\nvasps 仮想資産サービスプロバイダーのリストです（の定義を参照してください）VASPMember 以下、およびnext_page_token, 指定されている場合、結果の別のページが存在することの通知です\nmessage ListReply { repeated VASPMember vasps = 1; string next_page_token = 2; } VASPMember あVASPMember ディレクトリサービスに対するピアツーピア交換またはより詳細なルックアップを容易にするのに十分な情報が含まれています。 あのListReply なし、1つ、または複数のリストが含まれます。VASPMembers.\nmessage VASPMember { // ディレクトリサービス内の仮想アセットサービスプロバイダーの一意に識別するコンポーネント string id = 1; string registered_directory = 2; string common_name = 3; // トリッサ要求を実行するためにリモート仮想資産サービスプロバイダーに接続するためのアドレス。 string endpoint = 4; // 検索と照合を容易にするために使用される追加の詳細。 string name = 5; string website = 6; string country = 7; trisa.gds.models.v1beta1.BusinessCategory business_category = 8; repeated string vasp_categories = 9; string verified_on = 10; } mTLSで接続する を使用するにはTRISAMembers サービス、あなたはで認証する必要がありますmTLS 登録時に付与されたトリッサ識別証明書を使用します。 認証に関するgRPCドキュメント を含むさまざまな言語でmTLSを使用して接続するためのコードサンプルを提供しますJava, C++, Golang, Ruby, と Python.\nたとえば、ディレクトリサービスへの接続にを使用している場合は、tls, x509, とcredentials ライブラリを使用して、コンピュータ上の安全な場所からトリッサID証明書をロードし、サーバーとの接続を相互に検証するためのTLSクレデンシャルを構築します。 最後に、コンパイルされたメンバーを使用します protocol buffer メンバークライアントを作成するコード。 *注：protocol buffer 定義については、このページの前半で詳しく説明しています。\nimport ( \"crypto/tls\" \"crypto/x509\" members \"github.com/trisacrypto/directory/pkg/gds/members/v1alpha1\" \"google.golang.org/grpc/credentials\" ) func (m *MyProfile) Connect() (_ members.TRISAMembersClient, err error){ config := \u0026tls.Config{ Certificates: []tls.Certificate{m.Cert}, // m.Cert is your TRISA certificate parsed into a *x509.Certificate MinVersion: tls.VersionTLS12, CurvePreferences: []tls.CurveID{ tls.CurveP521, tls.CurveP384, tls.CurveP256, }, PreferServerCipherSuites: true, CipherSuites: []uint16{ tls.TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384, tls.TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256, tls.TLS_RSA_WITH_AES_256_GCM_SHA384, tls.TLS_RSA_WITH_AES_128_GCM_SHA256, }, ClientAuth: tls.RequireAndVerifyClientCert, // this will ensure an mTLS connection ClientCAs: m.Pool, // m.Pool is a *x509.CertPool that must contain the RA and IA public certs from your TRISA certificate chain } var creds *credentials.TransportCredentials if creds, err = credentials.NewTLS(config); err != nil { return nil, err } var cc *grpc.ClientConn if cc, err = grpc.NewClient(m.Endpoint, grpc.WithTransportCredentials(creds)); err != nil { return nil, err } return members.NewTRISAMembersClient(cc), nil } 現在、2つのtrisaディレクトリがあることに注意してください。TRISA TestNet, これにより、ユーザーはトリッサの相互作用と仮想アプリケーションサービスプロバイダーディレクトリを試すことができます。VASP Directory, これは、トリッサ取引の生産ネットワークです。 テストネットに登録し、証明書を持っている場合、ダイヤル機能に渡すエンドポイントは次のようになります。members.testnet.directory:443. または、仮想アプリケーションサービスプロバイダーディレクトリのメンバーにアクセスする場合で、すでに登録済みのメンバーである場合は、エンドポイントを使用します。members.trisa.directory:443.",
    "description": "他のトリサメンバーがアクセス",
    "tags": [],
    "title": "メンバーへのアクセス",
    "uri": "/ja/gds/members/index.html"
  },
  {
    "breadcrumb": "TRISA 開発者向けドキュメント \u003e TRISAリファレンス",
    "content": "MITライセンス\n著作権（c）2021 TRISA https://travelrule.io\nこれにより、このソフトウェアおよび関連するドキュメントファイル（「ソフトウェア」）のコピーを取得するすべての人に、使用、コピー、変更、マージの権利を含むがこれに限定されない制限なしにソフトウェアを取り扱う許可が無料で付与されます。 、本ソフトウェアのコピーを公開、配布、サブライセンス、および/または販売すること、および本ソフトウェアが提供される人に、以下の条件を条件として、そうすることを許可すること。\n上記の著作権表示およびこの許可通知は、本ソフトウェアのすべてのコピーまたは大部分に含まれるものとします。\n本ソフトウェアは「現状有姿」で提供され、商品性、特定目的への適合性、および非侵害の保証を含むがこれらに限定されない、明示または黙示を問わず、いかなる種類の保証もありません。 いかなる場合も、作者または著作権所有者は、契約、不法行為、またはその他の行為にかかわらず、ソフトウェアまたはソフトウェアの使用またはその他の取引に起因する、または関連する、いかなる請求、損害、またはその他の責任についても責任を負わないものとしますソフトウェア。",
    "description": "オープンソースライセンス",
    "tags": [],
    "title": "オープンソースライセンス",
    "uri": "/ja/reference/license/index.html"
  },
  {
    "breadcrumb": "TRISA 開発者向けドキュメント",
    "content": "乞うご期待！",
    "description": "TRISAリファレンス",
    "tags": [],
    "title": "TRISAリファレンス",
    "uri": "/ja/reference/index.html"
  },
  {
    "breadcrumb": "",
    "content": "トラベルルール情報共有アーキテクチャ（TRISA）の目標は、コアブロックチェーンプロトコルを変更したり、トランザクションコストを増加させたり、仮想通貨のピアツーピアトランザクションを変更したりすることなく、暗号通貨トランザクションID情報のFATFおよびFinCENトラベルルールへの準拠を可能にすることです流れ。TRISAプロトコルと仕様は、TRISAワーキンググループ によって定義されています。 仕様の詳細については、現在のバージョンのTRISAホワイトペーパーをお読みください。\nこのサイトには、github.com/trisacrypto/trisa にあるTRISAプロトコルとリファレンス実装の開発者向けドキュメントが含まれています。 TRISAプロトコルはgRPC API として定義されており、トラベルルールを実装する必要のある仮想資産サービスプロバイダー（VASP）間で、言語に依存しない高性能のピアツーピアサービスを促進しますコンプライアンスソリューション。 APIとメッセージ交換の形式はどちらも、protosディレクトリ にあるprotocol buffers を介して定義されます。リポジトリの 。さらに、Goプログラミング言語 のリファレンス実装が pkgディレクトリ で利用できるようになりました。 リポジトリの。将来的には、リポジトリのlibディレクトリ にある特定の言語のライブラリコードとして他の実装が利用できるようになる予定です。\nTRISA v1リリースは活発に開発されており、さらに多くのドキュメントが間もなく公開されます。",
    "description": "TRISA デベロッパードキュメント",
    "tags": [],
    "title": "TRISA 開発者向けドキュメント",
    "uri": "/ja/index.html"
  },
  {
    "breadcrumb": "TRISA 開発者向けドキュメント",
    "content": "",
    "description": "",
    "tags": [],
    "title": "カテゴリー",
    "uri": "/ja/categories/index.html"
  },
  {
    "breadcrumb": "TRISA 開発者向けドキュメント",
    "content": "",
    "description": "",
    "tags": [],
    "title": "タグ",
    "uri": "/ja/tags/index.html"
  }
]
