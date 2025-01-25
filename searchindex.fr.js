var relearn_searchindex = [
  {
    "breadcrumb": "Documentation du Développeur TRISA",
    "content": "Aperçu de l’intégration TRISA S’inscrire auprès d’un service d’annuaire TRISA Mettre en œuvre le protocole Réseau TRISA Mettre en œuvre le protocole de Santé TRISA Enregistrement du service d’annuaire VASP (Fournisseur de Services d’Actifs Virtuels) Présentation de l’enregistrement Avant de pouvoir intégrer le protocole TRISA dans votre logiciel VASP, vous devez vous faire enregistrer dans un service d’annuaire TRISA (DS). Le DS TRISA fournit la clé publique ainsi que les informations de connexion aux pairs TRISA à distants pour les VASP enregistrés.\nUne fois que vous vous êtes enregistré auprès du DS TRISA, vous recevez un certificat KYV. La clé publique du certificat KYV (Know Your sera mise à la disposition des autres VASP via le TRISA DS.\nLors de l’enregistrement auprès du DS, vous devrez fournir les éléments address:port du terminal où votre VASP exécute le service Réseau TRISA. Cette adresse sera enregistrée auprès du DS et utilisée par les autres VASP lorsque votre VASP sera identifié comme étant le VASP bénéficiaire.\nÀ des fins d’intégration, une instance hébergée de TestNet TRISA DS est disponible pour des tests. Le processus d’enregistrement est simplifié dans le TestNet pour favoriser une intégration rapide. Il est recommandé de commencer l’enregistrement du DS de production lors de l’intégration avec le TestNet.\nEnregistrement au Service d’Annuaire Pour commencer l’enregistrement avec le DS de TRISA, visitez le site web à l’adresse suivante https://vaspdirectory.net/\nVous pouvez sélectionner l’onglet “Enregistrer” pour commencer l’enregistrement. Notez que vous pouvez utiliser ce site web pour saisir les détails de votre enregistrement, champ par champ, ou pour télécharger un document JSON contenant les détails de votre enregistrement.\nL’enregistrement aboutira à l’envoi d’un courriel à tous les contacts techniques spécifiés dans le fichier JSON. Ces courriels vous guideront dans la suite de la procédure d’enregistrement. Une fois que vous aurez terminé les étapes d’enregistrement, les administrateurs TestNet de TRISA recevront votre enregistrement pour examen.\nUne fois que les administrateurs de TestNet auront examiné et approuvé l’enregistrement, vous recevrez un certificat KYV par courrier électronique et votre VASP sera publiquement visible dans le DS TestNet.\nImplementation du Protocole P2P TRISA Prérequis Pour commencer l’installation, vous aurez besoin des éléments suivants :\nLe certificat KYV (de l’enregistrement au DS de TRISA) La clé publique utilisée pour la Demande de Signature de Certificat (Certificate Signing Request - CSR) afin d’obtenir votre certificat. La clé privée associée Le nom d’hôte du service d’annuaire TRISA Possibilité de lier l’address:port associé à votre VASP dans le service d’annuaire TRISA. Présentation de l’intégration L’intégration du protocole TRISA implique à la fois un composant client et un composant serveur.\nLe client s’interface avec une instance du Service d’annuaire TRISA (DS) pour rechercher d’autres VASP qui intègrent le protocole de messagerie TRISA. Le client est utilisé pour les transactions sortantes de votre VASP afin de vérifier que le VASP destinataire est conforme à TRISA.\nQuant au serveur, il reçoit les demandes d’autres VASP qui intègrent le protocole TRISA et fournit des réponses à leurs demandes. Le serveur émet des rappels qui doivent être implémentés pour que votre VASP puisse renvoyer des informations conformes au protocole Réseau TRISA.\nActuellement, une implémentation de référence du protocole Réseau TRISA est disponible en Go.\nhttps://github.com/trisacrypto/testnet/blob/main/pkg/rvasp/trisa.go\nLes VASP intégrants doivent exécuter leur propre mise en œuvre du protocole. Si un langage autre que Go est requis, des bibliothèques client peuvent être générées à partir des tampons de protocole qui définissent le protocole du réseau TRISA.\nIls devraient intégrer les demandes entrantes de transfert et d’échange de clés et peuvent, en option, intégrer les demandes sortantes de transfert et d’échange de clés.\nNotes sur l’intégration Le protocole Réseau TRISA définit la manière dont les données sont transférées entre les VASP participants. Le format recommandé pour les données transférées pour les informations d’identification est le format de données IVMS101. Il est de la responsabilité du VASP qui l’implémente de s’assurer que les données d’identification envoyées/reçues sont conformes à la règle de voyage du GAFI.\nLe résultat d’une transaction TRISA réussie est une clé et des données cryptées qui répondent à la règle de voyage du GAFI. TRISA ne définit pas comment ces données doivent être stockées une fois obtenues. Il incombe au VASP chargé de la mise en œuvre de gérer le stockage sécurisé des données résultant de la transaction.",
    "description": "Décrit comment intégrer le protocole TRISA dans le TestNet.",
    "tags": [],
    "title": "L'intégration",
    "uri": "/fr/getting-started/index.html"
  },
  {
    "breadcrumb": "Documentation du Développeur TRISA",
    "content": "This portion of the documentation describes how to become a TRISA member so that you can receive Identity Certificates and use them to perform secure information transfers with other VASPs.\nTo join the TRISA network, you must register with the TRISA Global Directory Service (GDS).\nThe mechanics of registration include two important workflows:\nA KYV review process to ensure the network maintains trusted membership Certificate issuance for mTLS authentication in the network Next, learn more about the process of registration.",
    "description": "Describes How to Join TRISA",
    "tags": [],
    "title": "Joining TRISA",
    "uri": "/fr/joining-trisa/index.html"
  },
  {
    "breadcrumb": "Documentation du Développeur TRISA \u003e Référence",
    "content": "Restez à l’écoute !",
    "description": "Questions fréquentes",
    "tags": [],
    "title": "FAQ",
    "uri": "/fr/reference/faq/index.html"
  },
  {
    "breadcrumb": "Documentation du Développeur TRISA \u003e Le TestNet",
    "content": "Le TestNet héberge trois services pratiques de “robot VASP” (rVASP) pour faciliter l’intégration et les tests avec le TestNet de TRISA. Ces services sont les suivants :\nAlice (api.alice.vaspbot.net:443) : le rVASP d’intégration primaire utilisé pour déclencher et recevoir les messages TRISA. Bob (api.bob.vaspbot.net:443) : une démo rVASP pour visualiser les échanges avec Alice. Evil (api.evil.vaspbot.net:443) : un rVASP “maléfique” qui n’est pas membre du TestNet de TRISA, utilisé pour tester les interactions non authentifiées. Note : les rVASP sont actuellement configurés principalement pour des démonstrations et des travaux visant à les rendre plus robustes à des fins d’intégration ont été entamés ; veuillez consulter régulièrement cette documentation pour d’éventuels changements. Si vous remarquez des bogues dans le code ou le comportement des rVASP, [veuillez créer un ticket] (https://github.com/trisacrypto/testnet/issues).\nDémarrer avec les rVASP Il y a deux façons d’utiliser les rVASP pour développer votre service TRISA :\nVous pouvez déclencher le rVASP pour envoyer un message d’échange TRISA à votre service. Vous pouvez envoyer un message TRISA au rVASP avec un client rVASP valide (ou invalide). Les rVASP ont une base de données intégrée de faux clients avec un faux portefeuille d’adresses. Leur réponse aux messages TRISA ou à un transfert déclenché exige que le client donneur d’ordre/bénéficiaire soit valide pour le rVASP. Par exemple, si l’adresse du portefeuille client est une adresse d’Alice valide et qu’Alice est le bénéficiaire, le rVASP répondra avec les fausses données KYC du client, mais dans le cas contraire, il renverra un code d’erreur TRISA.\nLe tableau suivant des “clients” pour Alice, Bob et le Maléfique peut être utilisé comme référence pour interagir avec chaque rVASP :\nVASP “Crypto Wallet” Email api.bob.vaspbot.net 18nxAxBktHZDrMoJ3N2fk9imLX8xNnYbNh robert@bobvasp.co.uk api.bob.vaspbot.net 1LgtLYkpaXhHDu1Ngh7x9fcBs5KuThbSzw george@bobvasp.co.uk api.bob.vaspbot.net 14WU745djqecaJ1gmtWQGeMCFim1W5MNp3 larry@bobvasp.co.uk api.bob.vaspbot.net 1Hzej6a2VG7C8iCAD5DAdN72cZH5THSMt9 fred@bobvasp.co.uk api.alice.vaspbot.net 19nFejdNSUhzkAAdwAvP3wc53o8dL326QQ sarah@alicevasp.us api.alice.vaspbot.net 1ASkqdo1hvydosVRvRv2j6eNnWpWLHucMX mary@alicevasp.us api.alice.vaspbot.net 1MRCxvEpBoY8qajrmNTSrcfXSZ2wsrGeha alice@alicevasp.us api.alice.vaspbot.net 14HmBSwec8XrcWge9Zi1ZngNia64u3Wd2v jane@alicevasp.us api.evil.vaspbot.net 1AsF1fMSaXPzz3dkBPyq81wrPQUKtT2tiz gambler@evilvasp.gg api.evil.vaspbot.net 1PFTsUQrRqvmFkJunfuQbSC2k9p4RfxYLF voldemort@evilvasp.gg api.evil.vaspbot.net 172n89jLjXKmFJni1vwV5EzxKRXuAAoxUz launderer@evilvasp.gg api.evil.vaspbot.net 182kF4mb5SW4KGEvBSbyXTpDWy8rK1Dpu badnews@evilvasp.gg Notez que toutes les données rVASP ont été générées à l’aide d’un outil appelé Faker pour produire des données de test et des montages réalistes/consistants et sont totalement fictives. Par exemple, les enregistrements pour Alice VASP (une société fictive américaine) se trouvent principalement en Amérique du Nord, etc.\nSi vous êtes un client de Traveler, les adresses en gras ci-dessus sont associées à des données d’attribution et constituent un bon candidat pour les interactions rVASP basées sur Traveler.\nPréliminaires Cette documentation suppose que vous avez un service qui exécute la dernière version du service TRISANetwork et qu’il a été enregistré dans le TestNet TRISA et que les certificats TestNet sont correctement installés. Voir Vue d’ensemble de l’intégration de TRISA pour plus d’informations. AVERTISSEMENT: les rVASP ne participent pas au réseau de production TRISA, ils ne répondent qu’aux connexions mTLS vérifiées de TRISA TestNet.\nPour interagir avec l’API rVASP, vous pouvez soit :\nUtiliser l’outil d’interface de commandes rvasp Utiliser les tampons du protocole rVASP et interagir directement avec l’API Pour installer l’outil CLI, vous pouvez soit télécharger l’exécutable rvasp pour l’architecture appropriée à la Page des versions TestNet, cloner le répertoire TestNet et construire le binaire cmd/rvasp ou installer avec go get comme suit :\n$ go get github.com/trisacrypto/testnet/... Pour utiliser le tampon du protocole rVASP, clonez ou téléchargez-les depuis le répertoire TestNet, puis compilez-les dans votre langue préférée en utilisant protoc.\nDéclencher l’envoi d’un message par un rVASP Les terminaisons administrateurs rVASP sont utilisées pour interagir directement avec le rVASP à des fins de développement et d’intégration. Notez que ce point de terminaison est différent du point de terminaison TRISA, qui a été décrit ci-dessus.\nAlice: admin.alice.vaspbot.net:443 Bob: admin.bob.vaspbot.net:443 Evil: admin.evil.vaspbot.net:443 Pour utiliser l’outil de ligne de commande afin de déclencher un message, exécutez la commande suivante :\n$ rvasp transfer -e admin.alice.vaspbot.net:443 \\ -a mary@alicevasp.us \\ -d 0.3 \\ -B trisa.example.com \\ -b cryptowalletaddress \\ -E Ce message envoie un message au rVASP Alice par le champ -e ou --endpoint, et spécifie que le compte émetteur doit être “mary@alicevasp.us” par le champ -a ou --account. Le compte émetteur est utilisé pour déterminer les données IVMS101 à envoyer au bénéficiaire. Le champ -d ou --amount spécifie le montant d’“AliceCoin” à envoyer.\nLes deux parties suivantes sont critiques. Le champ -E ou --external-demo indique au rVASP de déclencher une requête vers votre service plutôt que d’effectuer un échange de démo avec un autre rVASP. Ce champ est obligatoire ! Enfin, le champ -B ou --beneficiary-vasp indique où le rVASP enverra la requête. Ce champ doit pouvoir être consulté dans le service d’annuaire TestNet de TRISA ; par exemple, il doit s’agir de votre nom commun ou du nom de votre VASP s’il est consultable.\nNotez que vous pouvez définir les variables d’environnement $RVASP_ADDR et $RVASP_CLIENT_ACCOUNT pour spécifier les champs -e et -a respectivement.\nPour utiliser directement les tampons de protocole, utilisez le TRISAIntegration service Transfer RPC avec la suivante TransferRequest:\n{ \"account\": \"mary@alicevasp.us\", \"amount\": 0.3, \"beneficiary\": \"cryptowalletaddress\", \"beneficiary_vasp\": \"trisa.example.com\", \"check_beneficiary\": false, \"external_demo\": true } Ces valeurs ont la même spécification exacte que celles du CLI.\nEnvoi d’un message TRISA à un rVASP Le rVASP attend une trisa.data.generic.v1beta1.Transaction comme charge utile de la transaction et une ivms101.IdentityPayload comme charge utile de l’identité. Il n’est pas nécessaire de renseigner les informations de l’identité du bénéficiaire, le rVASP répondra en renseignant le bénéficiaire, mais l’identité du bénéficiaire ne doit pas être nulle. Il est recommandé de spécifier des données d’identité fictives pour tirer parti des commandes d’analyse et de validation du rVASP.\nAssurez-vous que dans les données utiles de votre transaction, vous spécifiez un portefeuille bénéficiaire qui correspond aux bénéficiaires rVASP du tableau ci-dessus ; par exemple, utilisez :\n{ \"txid\": \"1234\", \"originator\": \"anydatahereisfine\", \"beneficiary\": \"1MRCxvEpBoY8qajrmNTSrcfXSZ2wsrGeha\", \"amount\": 0.3, \"network\": \"TestNet\", \"timestamp\": \"2021-06-14T16:41:52-05:00\" } Vous pouvez préciser n’importe quelle chaîne txid ou originator et les champs network et timestamp sont ignorés.\nCréez une enveloppe scellée en utilisant le service d’annuaire ou l’échange direct de clés pour récupérer les clés publiques RSA de rVASP et en utilisant AES256-GCM et HMAC-SHA256 comme cryptographie de l’enveloppe. Ensuite, utilisez le TRISANetwork service Transfer RPC pour envoyer l’enveloppe scellée au rVASP.\nA FAIRE : Bientôt le programme de ligne de commande trisa sera disponible. Nous spécifierons ici comment utiliser le programme CLI pour envoyer un message dès qu’il sera disponible.",
    "description": "Travailler avec les rVASP pour l'intégration TestNet",
    "tags": [],
    "title": "Les Robot VASPs",
    "uri": "/fr/testing/rvasps/index.html"
  },
  {
    "breadcrumb": "Documentation du Développeur TRISA \u003e Joining TRISA",
    "content": "Pour rejoindre les réseaux TRISA ou TestNet, vous devez vous inscrire auprès du service d’annuaire mondial (GDS) de TRISA ou de l’un des services d’annuaire propres à chaque juridiction. L’enregistrement auprès du service d’annuaire implique deux flux de travail :\nUn processus de révision de la Connaissance Client (KYV) pour s’assurer que le réseau conserve une adhésion de confiance. La délivrance d’un certificat pour l’authentification mTLS dans le réseau. À venir : plus de détails sur le formulaire d’inscription, la vérification par e-mail et le processus de révision.\nDélivrance des certificats Il existe actuellement deux mécanismes pour recevoir des certificats mTLS du GDS lorsque votre inscription a été examinée et approuvée.\nCertificats cryptés PKCS12 envoyés par e-mail. Demande de signature de certificat (Certificate Signing Request - CSR) Vous devez sélectionner l’une de ces options lorsque vous soumettez votre inscription ; après la soumission de votre inscription, vous ne pourrez pas passer d’une option à l’autre.\nPièce jointe du courriel crypté PKCS12 Le premier mécanisme est le plus simple — il suffit de sélectionner l’option e-mail lors de l’inscription et d’omettre les champs CSR. Si le formulaire d’enregistrement est valide, le GDS renverra un mot de passe PKCS12. Ne perdez pas ce mot de passe, c’est la seule fois où il est mis à disposition pendant le processus d’émission du certificat.\nAprès vérification et approbation, l’autorité de Certification de GDS générera un certificat complet incluant les clés privées et le crypter en utilisant le mot de passe PKCS12. Après avoir enregistré les clés publiques dans le service d’annuaire, le GDS enverra le certificat crypté sous forme de fichier ZIP au contact technique, ou au premier contact disponible sur le formulaire d’enregistrement.\nAprès avoir décompressé la pièce jointe de l’e-mail, vous devriez trouver un fichier nommé \u003ccommon_name\u003e.p12; vous pouvez décrypter ce fichier pour extraire les certificats comme suit :\n$ openssl pkcs12 -in \u003ccommon_name\u003e.p12 -out \u003ccommon_name\u003e.pem -nodes Vous pouvez également utiliser directement le fichier .zip sans le décrypter ou l’extraire grâce au module github.com/trisacrypto/trisa/pkg/trust.\nDemande de signature de certificat Une alternative à la création d’un certificat consiste à télécharger une demande de signature de certificat (CSR). Ce mécanisme est souvent préférable car il signifie qu’aucun élément de la clé privée ne doit être transmis sur le réseau et que la clé privée peut rester sur un matériel sécurisé.\nPour générer un CSR en utilisant openssl en ligne de commande, créez d’abord un fichier de configuration nommé trisa.conf dans votre répertoire de travail courant, en remplaçant example.com par le domaine sur lequel vous prévoyez d’héberger votre terminaison TRISA:\n[req] distinguished_name = dn_req req_extensions = v3ext_req prompt = no default_bits = 4096 [dn_req] CN = example.com O = [Organization] L = [City] ST = [State or Province (en toutes lettres, sans abréviations)] C = [2 digit country code] [v3ext_req] basicConstraints = CA:FALSE keyUsage = digitalSignature, keyEncipherment, nonRepudiation extendedKeyUsage = clientAuth, serverAuth subjectAltName = @alt_names [alt_names] DNS.1 = example.com Veuillez remplir soigneusement la configuration de votre certificat, ces informations doivent être correctes et ne peuvent être modifiées sans réémettre le certificat. Assurez-vous également qu’il n’y a pas d’espace après les données de la configuration !\nPuis, exécutez la commande suivante, en remplaçant example.com par le nom de domaine que vous utiliserez comme terminaison TRISA :\n$ openssl req -new -newkey rsa:4096 -nodes -sha384 -config trisa.conf \\ -keyout example.com.key -out example.com.csr Votre clé privée est maintenant stockée dans example.com.key — ** gardez soigneusement cette clé privée ** — elle est requise pour les connexions mTLS dans votre service mTLS et établit la confiance sur le réseau TRISA.\nLe fichier example.com.csr contient votre demande de signature de certificat. Copiez et collez le contenu de ce fichier, y compris -----BEGIN CERTIFICATE REQUEST----- et -----END CERTIFICATE REQUEST----- dans votre demande d’inscription.",
    "description": "Enregistrement d'un fournisseur de services d'actifs virtuels (VASP) grâce au service d’annuaire",
    "tags": [],
    "title": "Enregistrement",
    "uri": "/fr/joining-trisa/registration/index.html"
  },
  {
    "breadcrumb": "Documentation du Développeur TRISA \u003e Référence",
    "content": "Initiateur: L’initiateur d’une transaction blockchain et donc aussi l’initiateur d’un transfert TRISA. L’“initiateur” peut désigner le VASP initiateur, le client initiateur du VASP ou les deux.\nBénéficiaire: Le bénéficiaire d’une transaction blockchain et donc également le bénéficiaire d’un transfert TRISA. Le “bénéficiaire” peut désigner le VASP bénéficiaire, le client bénéficiaire du VASP ou les deux.\nComparaison entre VASP local et distant: Une référence à la source du trafic P2P dans un échange d’informations. Le “VASP local” fait généralement référence au service que vous exécutez, tandis que le “VASP distant” fait généralement référence à un autre VASP du réseau TRISA. Les termes “local” et “distant” sont souvent utilisés pour désigner l’initiateur et le bénéficiaire. Si vous initiez la transaction, le VASP local est l’initiateur et le VASP distant est le bénéficiaire. Si vous recevez une transaction, le VASP local est le bénéficiaire et le VASP distant est l’initiateur.",
    "description": "Glossaire et Terminologies TRISA",
    "tags": [],
    "title": "Glossaire",
    "uri": "/fr/reference/glossary/index.html"
  },
  {
    "breadcrumb": "Documentation du Développeur TRISA",
    "content": "Le TestNet TRISA a été mis en place pour fournir une démonstration du protocole TRISA P2P, héberger des services “robot VASP” pour faciliter l’intégration de TRISA, et est l’emplacement du principal service d’annuaire TRISA qui facilite l’échange de clés publiques et la découverte de pairs.\nLe TestNet TRISA est composé des services suivants :\nTRISA Directory Service - une interface utilisateur permettant d’explorer le service d’annuaire global TRISA et de se faire enregistrer pour devenir membre de TRISA TestNet Demo - un site de démonstration des interactions TRISA entre les VASP “robots” qui fonctionnent dans le TestNet. Le TestNet héberge également trois robots VASP ou rVASP qui ont été mis en place pour permettre aux membres de TRISA d’intégrer leurs services TRISA. Le premier rVASP est Alice, le second est Bob et pour tester les interactions avec des membres TRISA non vérifiés, il existe également un rVASP “maléfique”.",
    "description": "Le TestNet TRISA",
    "tags": [],
    "title": "Le TestNet",
    "uri": "/fr/testing/index.html"
  },
  {
    "breadcrumb": "Documentation du Développeur TRISA",
    "content": "Le Service d’Annuaire Mondial TRISA (Global TRISA Directory Service - GDS) facilite les échanges point à point entre les membres de TRISA comme suit :\nen fournissant des services de découverte pour trouver les terminaux TRISA en émettant des certificats mTLS pour vérifier les échanges en fournissant des certificats et des informations de connaissance client (Know Your Customer – KYC) pour la vérification. Les interactions avec un service d’annuaire sont spécifiées par le protocole TRISA. Actuellement, l’organisation TRISA héberge le GDS pour le compte du réseau TRISA. Cette documentation décrit l’implémentation TRISA du service d’annuaire et les interactions spécifiques à TRISA avec ce dernier.",
    "description": "Le Global TRISA Directory Service (GDS)",
    "tags": [],
    "title": "Le Directory Service",
    "uri": "/fr/gds/index.html"
  },
  {
    "breadcrumb": "Documentation du Développeur TRISA \u003e Le Directory Service",
    "content": "Le service TRISAMembers est un service expérimental qui fournit un accès supplémentaire et sécurisé au service d’annuaire pour les membres approuvés du réseau TRISA. Seuls les membres du réseau TRISA (c’est-à-dire les membres qui ont reçu des certificats d’identité valides) peuvent accéder aux données détaillées du service d’annuaire concernant le réseau en utilisant ce service. Remarque : une fois validé, ce service sera intégré à la spécification officielle de TRISA.\nLe Service TRISAMembers Cette section décrit les protocol buffers pour la terminaison TRISAMembers, qui peut être trouvée ici. Ce fichier peut être compilé dans le langage de votre choix (exemple pour le Golang). Remarque : Vous devrez télécharger et installer le compilateur du protocol buffer si vous ne l’avez pas encore.\nActuellement, le service TRISAMembers ne comprend qu’une seule RPC — le List RPC. D’autres RPCs expérimentaux et sécurisés pourront être mis à disposition à l’avenir.\nservice TRISAMembers { // List all verified VASP members in the Directory Service. rpc List(ListRequest) returns (ListReply) {}; } Liste des membres vérifiés Le List RPC renvoie une liste paginée de tous les membres vérifiés de TRISA afin de faciliter la recherche des pairs dans le réseau TRISA. Le RPC reçoit en entrée une requête de type ListRequest et renvoie un ListReply.\nListRequest La fonction ListRequest peut être utilisée pour gérer la pagination de la demande de liste VASP (VASP - Fournisseur de Services d’Actifs Virtuels). S’il y a plus de résultats que la taille de page spécifiée, la fonction ListReply renvoie un jeton de page qui peut être utilisé pour récupérer la page suivante (tant que les paramètres de la requête originale ne sont pas modifiés, par exemple les filtres ou les paramètres de pagination).\nLa variable page_size spécifie le nombre de résultats par page et ne peut pas changer entre les requêtes de page ; sa valeur par défaut est 100. La variable page_token spécifie le jeton de page permettant d’extraire la page de résultats suivante.\nmessage ListRequest { int32 page_size = 1; string page_token = 2; } ListReply Un ListReply renvoie une liste abrégée des détails du VASP, destinée à faciliter les échanges de clés entre pairs ou les recherches plus détaillées dans le service d’annuaire.\nLes vasps sont une liste de VASP (voir la déclaration de VASPMember ci-dessous), et si le paramètre next_page_token, est spécifié, il indique qu’une autre page de résultats existe.\nmessage ListReply { repeated VASPMember vasps = 1; string next_page_token = 2; } VASPMember Un VASPMember contient suffisamment d’informations pour faciliter les échanges d’égal à égal ou des recherches plus détaillées dans le service d’annuaire. Le ListReply contiendra une liste d’aucun, d’un ou de plusieurs VASPMembers.\nmessage VASPMember { // Les éléments d'identification unique du VASP dans le service d'annuaire string id = 1; string registered_directory = 2; string common_name = 3; // Adresse à laquelle se connecter au VASP distant pour effectuer une demande TRISA string endpoint = 4; // Détails supplémentaires utilisés pour faciliter les recherches et les correspondances string name = 5; string website = 6; string country = 7; trisa.gds.models.v1beta1.BusinessCategory business_category = 8; repeated string vasp_categories = 9; string verified_on = 10; } Connexion via authentification mTLS Pour utiliser le service TRISAMembers, vous devez vous authentifier à l’aide du protocole mTLS en utilisant les certificats d’identité TRISA qui vous ont été attribués lors de votre inscription.\nLa documentation gRPC sur l’authentification fournit des exemples de code permettant de se connecter avec mTLS dans différents langages, notamment Java, C++, Golang, Ruby, et Python.\nPar exemple, si vous utilisez Golang pour vous connecter au service d’annuaire, vous utiliserez les bibliothèques tls, x509, et credentials pour charger vos certificats d’identité TRISA depuis leur emplacement sécurisé sur votre ordinateur et construire des informations d’identification TLS pour valider mutuellement la connexion avec le serveur. Enfin, vous utiliserez le code compilé des membres protocol buffer pour créer un client de membres. Remarque : les déclarations du protocol buffer sont décrites plus en détail plus haut dans cette page.\nimport ( \"crypto/tls\" \"crypto/x509\" members \"github.com/trisacrypto/directory/pkg/gds/members/v1alpha1\" \"google.golang.org/grpc/credentials\" ) func (m *MyProfile) Connect() (_ members.TRISAMembersClient, err error){ config := \u0026tls.Config{ Certificates: []tls.Certificate{m.Cert}, // m.Cert is your TRISA certificate parsed into a *x509.Certificate MinVersion: tls.VersionTLS12, CurvePreferences: []tls.CurveID{ tls.CurveP521, tls.CurveP384, tls.CurveP256, }, PreferServerCipherSuites: true, CipherSuites: []uint16{ tls.TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384, tls.TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256, tls.TLS_RSA_WITH_AES_256_GCM_SHA384, tls.TLS_RSA_WITH_AES_128_GCM_SHA256, }, ClientAuth: tls.RequireAndVerifyClientCert, // this will ensure an mTLS connection ClientCAs: m.Pool, // m.Pool is a *x509.CertPool that must contain the RA and IA public certs from your TRISA certificate chain } var creds *credentials.TransportCredentials if creds, err = credentials.NewTLS(config); err != nil { return nil, err } var cc *grpc.ClientConn if cc, err = grpc.NewClient(m.Endpoint, grpc.WithTransportCredentials(creds)); err != nil { return nil, err } return members.NewTRISAMembersClient(cc), nil } Notez qu’il existe actuellement deux répertoires TRISA : le TRISA TestNet, qui permet aux utilisateurs d’expérimenter les interactions TRISA, et le Répertoire VASP, qui est le réseau de production pour les transactions TRISA. Si vous vous êtes inscrit au TestNet et que vous disposez de certificats TestNet, le point de terminaison que vous passerez dans la fonction de numérotation sera members.trisatest.net:443. Alternativement, si vous souhaitez accéder aux membres de l’annuaire VASP et que vous êtes déjà enregistré, vous utiliserez le terminal suivant members.vaspdirectory.net:443.",
    "description": "Connexion à d'autres membres de TRISA",
    "tags": [],
    "title": "Les Membres Entrants",
    "uri": "/fr/gds/members/index.html"
  },
  {
    "breadcrumb": "Documentation du Développeur TRISA \u003e Référence",
    "content": "La licence MIT\nCopyright (c) 2021 TRISA https://trisa.io\nL’autorisation est accordée par la présente, gratuitement, à toute personne ayant une copie de ce logiciel et de la documentation associée, de manipuler le logiciel sans restriction, y compris et sans restriction les droits d’utilisation, de copie, de modification, de fusion, de publication, de distribution, de sous-licencie et/ou de vente des copies du logiciel, et d’autoriser les personnes à auxquelles le logiciel est fourni à le faire, sous réserve des conditions suivantes :\nLa notice de droit d’auteur ci-dessus ainsi que la notice d’autorisation doivent être incluses dans toutes les copies ou parties substantielles du logiciel.\nLE LOGICIEL EST FOURNI “TEL QUEL”, SANS UNE QUELCONQUE GARANTIE, EXPLICITE OU IMPLICITE, Y COMPRIS, MAIS SANS SE LIMITER AUX GARANTIES DE QUALITÉ MARCHANDE, D’ADÉQUATION À UN USAGE PARTICULIER ET DE NON-VIOLATION. EN AUCUN CAS, LES AUTEURS OU LES DÉTENTEURS DE DROITS D’AUTEUR NE POURRONT ÊTRE TENUS RESPONSABLES DE TOUTE RÉCLAMATION, DE TOUT DOMMAGE OU DE TOUTE AUTRE RESPONSABILITÉ, QUE CE SOIT DANS LE CADRE D’UNE ACTION CONTRACTUELLE, DÉLICTUELLE OU AUTRE, DÉCOULANT DE OU LIÉE AU LOGICIEL OU À L’UTILISATION OU À D’AUTRES TRANSACTIONS DANS LE LOGICIEL.",
    "description": "Licence Open Source",
    "tags": [],
    "title": "Licence",
    "uri": "/fr/reference/license/index.html"
  },
  {
    "breadcrumb": "Documentation du Développeur TRISA",
    "content": "Restez à l’écoute !",
    "description": "La Référence TRISA",
    "tags": [],
    "title": "Référence",
    "uri": "/fr/reference/index.html"
  },
  {
    "breadcrumb": "",
    "content": "L’objectif de l’architecture de partage d’informations sur les règles de voyage (TRISA) est de permettre la mise en conformité avec les règles de voyage du GAFI et du FinCEN pour les informations d’identité des transactions en crypto-monnaies sans modifier les protocoles de base de la blockchain, et sans encourir de coûts de transaction accrus ni modifier les flux de transaction P2P en monnaie virtuelle. Le protocole et la spécification TRISA sont définis par le groupe de travail TRISA ; pour en savoir plus sur la spécification, veuillez lire la version actuelle du livre blanc TRISA.\nCe site contient la documentation pour développeurs du protocole TRISA et la mise en œuvre de référence qui se trouve sur github.com/trisacrypto/trisa. Le protocole TRISA est défini comme une API gRPC conçue pour faciliter le service pair à pair, performants et indépendants du langage entre fournisseurs de services et d’actifs virtuels (VASP) qui doivent mettre en œuvre des solutions de conformité aux règles de voyage. L’API et le format d’échange de messages sont définis via les tampons de protocole, qui se trouvent dans le répertoire protos du référentiel. De plus, une implémentation de référence dans le langage de programmation Go a été mise à disposition dans le répertoire pkg du référentiel. Dans le futur, d’autres implémentations seront disponibles sous forme de code de bibliothèque pour des langages spécifiques, dans le répertoire lib du référentiel.\nLa version v1 de TRISA est en cours de développement actif, plus de documentation sera bientôt disponible !",
    "description": "Documentation pour les développeurs TRISA",
    "tags": [],
    "title": "Documentation du Développeur TRISA",
    "uri": "/fr/index.html"
  },
  {
    "breadcrumb": "Documentation du Développeur TRISA",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Catégories",
    "uri": "/fr/categories/index.html"
  },
  {
    "breadcrumb": "Documentation du Développeur TRISA",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Mots-clés",
    "uri": "/fr/tags/index.html"
  }
]