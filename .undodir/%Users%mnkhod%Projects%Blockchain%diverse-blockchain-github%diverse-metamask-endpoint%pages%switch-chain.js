Vim�UnDo� �l@:]JX^�^�/���,Fs*C�H��G�Z/�   ^   S        <h1 className="text-sml font-semibold text-center sm:text-4xl lg:text-5xl">   N         =       =   =   =    bk�P   " _�                            ����                                                                                                                                                                                                                                                                                                                                         g       v   g    bZ�^     �         X      y  const { chainId,chainName,currencyName,currencySymbol,currencyDecimals,rpcUrl,blockExplorerUrl,iconUrl } = router.query5��              W           �       W               5�_�                           ����                                                                                                                                                                                                                                                                                                                                         �       v   �    bZ�f     �         X      �    if ( chainId == undefined || chainName == undefined || rpcUrl == undefined || blockExplorerUrl == undefined || iconUrl == undefined || currencyName == undefined || currencySymbol == undefined || currencyDecimals == undefined){5��              �           �      �               5�_�                           ����                                                                                                                                                                                                                                                                                                                                         &       v   &    bZ�g    �         X      )    if ( chainId == undefined undefined){5��              
           �      
               5�_�                           ����                                                                                                                                                                                                                                                                                                                                         &       v   &    bZ�l     �               
  // http://localhost:3000/add-chain?chainId=1&chainName=Ethereum&rpcUrl=https://mainnet.infura.io/v3/&blockExplorerUrl=https://etherscan.io&iconUrl=https://cryptologos.cc/logos/ethereum-eth-logo.png?v=022&currencyName=ETHEREUM&currencySymbol=ETH&currencyDecimals=185��                          7                    5�_�                            ����                                                                                                                                                                                                                                                                                                                                         &       v   &    bZ�m    �                 5��                          6                     5�_�                    "       ����                                                                                                                                                                                                                                                                                                                            "          "          v       bZ�o    �   !   #   V        async function addChain(){5��    !                    �                    5�_�                    "       ����                                                                                                                                                                                                                                                                                                                            "          "          v       bZ�q     �   !   #   V        async function eddChain(){5��    !                     �                     5�_�      	              "       ����                                                                                                                                                                                                                                                                                                                            "          "          v       bZ�q    �   !   #   V        async function Chain(){5��    !                     �                     �    !                    �                    �    !                    �                    �    !                    �                    �    !                    �                    5�_�      
           	          ����                                                                                                                                                                                                                                                                                                                                                v       bZ�u    �         V              addChain()�         V    5��                        �                    5�_�   	              
   *       ����                                                                                                                                                                                                                                                                                                                                                v       bZ��    �   )   +   V      *        method: 'wallet_addEthereumChain',�   *   +   V    5��    )                    �                    5�_�   
                 -        ����                                                                                                                                                                                                                                                                                                                            -          5          V   *    bZ��   
 �   ,   -       	             chainName: chainName,             nativeCurrency: {               name: currencyName,   #            symbol: currencySymbol,   0            decimals: parseInt(currencyDecimals)             },             rpcUrls: [rpcUrl],   0          blockExplorerUrls: [blockExplorerUrl],             iconUrls: [iconUrl]5��    ,       	               F      *              5�_�                    2       ����                                                                                                                                                                                                                                                                                                                            -          -          V   *    bZ��     �   1   2          @        setErrorMsg("Your Metamask Already Has This Network :>")5��    1                      �      A               5�_�                    1        ����                                                                                                                                                                                                                                                                                                                            1          2          V       bZ��     �   0   1          (      if (addChainError.code === 4902) {         }else{5��    0                      �      6               5�_�                    2       ����                                                                                                                                                                                                                                                                                                                            1          1          V       bZ��     �   1   2                }5��    1                      �                     5�_�                    1       ����                                                                                                                                                                                                                                                                                                                            1          1          V       bZ��    �   0   2   I      *        setErrorMsg(addChainError.message)5��    0                     �                     5�_�                    >        ����                                                                                                                                                                                                                                                                                                                            >           >           V        bi��    �   =   F   H    �   >   ?   H    �   =   >          �    return (<h1 className="mb-12 text-2xl font-semibold text-center sm:text-4xl lg:text-5xl"> Thank you for using <span className="text-blue-600">Diverse Metamask</span> <a href="https://www.dsolutions.mn/">EndPoint</a> </h1>)5��    =                            �               �    =                                    u      5�_�                    3       ����                                                                                                                                                                                                                                                                                                                            >           E          V        bi�    �   3   5   P    5��    3                      �                     �    3                      �                     5�_�                    4        ����                                                                                                                                                                                                                                                                                                                            ?           F          V        bi�    �   4   9   Q    �   4   5   Q    5��    4                      �              M       5�_�                    2       ����                                                                                                                                                                                                                                                                                                                            C           J          V        bi�    �   2   4   U    5��    2                      �                     �    2                      �                     5�_�                    3        ����                                                                                                                                                                                                                                                                                                                            D           K          V        bi�    �   3   7   V    �   3   4   V    5��    3                      �              9       5�_�                    D       ����                                                                                                                                                                                                                                                                                                                            G           N          V        bi�2    �   C   F   Y      n      return (<h1 className="mb-12 text-xl font-semibold text-center sm:text-2xl lg:text-4xl">{errorMsg}</h1>)5��    C                    5                     �    D                  
   6             
       5�_�      !              E        ����                                                                                                                                                                                                                                                                                                                            I          N   	       V   	    bi�M     �   E   L   Z    �   E   F   Z    5��    E                      �              b      5�_�       "           !   E       ����                                                                                                                                                                                                                                                                                                                            O          T   	       V   	    bi�N     �   D   E          j          <h1 className="mb-12 text-xl font-semibold text-center sm:text-2xl lg:text-4xl">{errorMsg}</h1>)5��    D                      6      k               5�_�   !   #           "   F        ����                                                                                                                                                                                                                                                                                                                            F          H          V       bi�P     �   E   G   \    �   F   G   \    �   E   F          S        <h1 classname="text-2xl font-semibold text-center sm:text-4xl lg:text-5xl">   �          thank you for using <span classname="text-blue-600">diverse metamask</span> <a href="https://www.dsolutions.mn/">sdk</a>           </h1>5��    E                      ?      �               �    E                      ?              k       5�_�   "   $           #   F   
    ����                                                                                                                                                                                                                                                                                                                            F           F   i       V       bi�Q    �   E   G   ]      j          <h1 className="mb-12 text-xl font-semibold text-center sm:text-2xl lg:text-4xl">{errorMsg}</h1>)5��    E                     G                     5�_�   #   %           $   H       ����                                                                                                                                                                                                                                                                                                                            F           F   i       V       bi�S    �   H   J   ^              �   H   J   ]    5��    H                                           �    H                  	                	       �    H                    $                    �    H                                         5�_�   $   &           %   E        ����                                                                                                                                                                                                                                                                                                                            C          J          V       bi�Y    �   G   I          	      </>�   F   H          i        <button onclick={handlegoingback} classname="px-12 mt-6 text-md btn btn-primary">go back</button>�   E   G          h        <h1 className="mb-12 text-xl font-semibold text-center sm:text-2xl lg:text-4xl">{errorMsg}</h1>)�   D   F                <>5��    D                     6                    �    E                  
   A             
       �    F                  
   �             
       �    G                                         5�_�   %   '           &   G       ����                                                                                                                                                                                                                                                                                                                            C          J          V       bi�_     �   F   H   ^      k          <button onclick={handlegoingback} classname="px-12 mt-6 text-md btn btn-primary">go back</button>5��    F                    �                    5�_�   &   (           '   G   1    ����                                                                                                                                                                                                                                                                                                                            C          J          V       bi�b     �   F   H   ^      k          <button onClick={handlegoingback} classname="px-12 mt-6 text-md btn btn-primary">go back</button>5��    F   1                 �                    5�_�   '   )           (   G       ����                                                                                                                                                                                                                                                                                                                            C          J          V       bi�e    �   F   H   ^      k          <button onClick={handlegoingback} className="px-12 mt-6 text-md btn btn-primary">go back</button>5��    F                    �                    �    F                     �                     �    F                     �                     �    F                    �                    �    F                     �                     �    F                     �                     �    F                     �                     �    F                    �                    �    F                     �                     �    F                     �                     �    F                     �                     �    F                     �                     �    F                    �                    �    F                      �                     �    F                     �                     �    F                     �                     �    F                     �                     �    F                     �                     �    F                    �                    �    F                      �                     �    F                     �                     �    F                     �                     �    F                     �                     �    F                     �                     �    F                    �                    5�_�   (   *           )   F   i    ����                                                                                                                                                                                                                                                                                                                            C          J          V       bi�p    �   E   G   ^      j          <h1 className="mb-12 text-xl font-semibold text-center sm:text-2xl lg:text-4xl">{errorMsg}</h1>)5��    E   i                  �                     5�_�   )   +           *   F       ����                                                                                                                                                                                                                                                                                                                            C          J          V       bi�{     �   E   G   ^      i          <h1 className="mb-12 text-xl font-semibold text-center sm:text-2xl lg:text-4xl">{errorMsg}</h1>5��    E                     Z                     5�_�   *   ,           +   F       ����                                                                                                                                                                                                                                                                                                                            C          J          V       bi�{     �   E   G   ^      h          <h1 className="b-12 text-xl font-semibold text-center sm:text-2xl lg:text-4xl">{errorMsg}</h1>5��    E                     Z                     5�_�   +   -           ,   F       ����                                                                                                                                                                                                                                                                                                                            C          J          V       bi�{     �   E   G   ^      g          <h1 className="-12 text-xl font-semibold text-center sm:text-2xl lg:text-4xl">{errorMsg}</h1>5��    E                     Z                     5�_�   ,   .           -   F       ����                                                                                                                                                                                                                                                                                                                            C          J          V       bi�{     �   E   G   ^      f          <h1 className="12 text-xl font-semibold text-center sm:text-2xl lg:text-4xl">{errorMsg}</h1>5��    E                     Z                     5�_�   -   /           .   F       ����                                                                                                                                                                                                                                                                                                                            C          J          V       bi�|     �   E   G   ^      e          <h1 className="2 text-xl font-semibold text-center sm:text-2xl lg:text-4xl">{errorMsg}</h1>5��    E                     Z                     5�_�   .   0           /   F       ����                                                                                                                                                                                                                                                                                                                            C          J          V       bi�|    �   E   G   ^      d          <h1 className=" text-xl font-semibold text-center sm:text-2xl lg:text-4xl">{errorMsg}</h1>5��    E                     Z                     5�_�   /   1           0   F       ����                                                                                                                                                                                                                                                                                                                                                             bk�A     �   E   G   ^      c          <h1 className="text-xl font-semibold text-center sm:text-2xl lg:text-4xl">{errorMsg}</h1>5��    E                     _                     5�_�   0   2           1   F       ����                                                                                                                                                                                                                                                                                                                                                             bk�A     �   E   G   ^      b          <h1 className="text-l font-semibold text-center sm:text-2xl lg:text-4xl">{errorMsg}</h1>5��    E                     _                     5�_�   1   3           2   F       ����                                                                                                                                                                                                                                                                                                                                                             bk�A    �   E   G   ^      a          <h1 className="text- font-semibold text-center sm:text-2xl lg:text-4xl">{errorMsg}</h1>5��    E                     _                     �    E                    Z                    5�_�   2   4           3   @   (    ����                                                                                                                                                                                                                                                                                                                                                             bk�F     �   ?   A   ^      }      return (<h1 className="mb-12 text-2xl font-semibold text-center sm:text-4xl lg:text-5xl">No Metamask Detected :( </h1>)5��    ?   (                  �                     5�_�   3   5           4   @   (    ����                                                                                                                                                                                                                                                                                                                                                             bk�F     �   ?   A   ^      |      return (<h1 className="mb-12 text-xl font-semibold text-center sm:text-4xl lg:text-5xl">No Metamask Detected :( </h1>)5��    ?   (                  �                     5�_�   4   6           5   @   (    ����                                                                                                                                                                                                                                                                                                                                                             bk�F    �   ?   A   ^      {      return (<h1 className="mb-12 text-l font-semibold text-center sm:text-4xl lg:text-5xl">No Metamask Detected :( </h1>)5��    ?   (                  �                     �    ?   #                 �                    5�_�   5   7           6   @   )    ����                                                                                                                                                                                                                                                                                                                                                             bk�G     �   ?   A   ^      }      return (<h1 className="mb-12 text-sml font-semibold text-center sm:text-4xl lg:text-5xl">No Metamask Detected :( </h1>)5��    ?          @       @   �      @       @       5�_�   6   8           7   @   D    ����                                                                                                                                                                                                                                                                                                                                                             bk�I     �   ?   A   ^      }      return (<h1 className="mb-12 font-semibold text-center text-sml sm:text-4xl lg:text-5xl">No Metamask Detected :( </h1>)5��    ?   D                  �                     5�_�   7   9           8   N       ����                                                                                                                                                                                                                                                                                                                                                             bk�L     �   M   O   ^      S        <h1 className="text-2xl font-semibold text-center sm:text-4xl lg:text-5xl">5��    M                     ]                     5�_�   8   :           9   N       ����                                                                                                                                                                                                                                                                                                                                                             bk�L     �   M   O   ^      R        <h1 className="text-xl font-semibold text-center sm:text-4xl lg:text-5xl">5��    M                     ]                     5�_�   9   ;           :   N       ����                                                                                                                                                                                                                                                                                                                                                             bk�L     �   M   O   ^      Q        <h1 className="text-l font-semibold text-center sm:text-4xl lg:text-5xl">5��    M                     ]                     �    M                    X                    5�_�   :   <           ;   N       ����                                                                                                                                                                                                                                                                                                                                                             bk�L     �   M   O   ^      S        <h1 className="text-sml font-semibold text-center sm:text-4xl lg:text-5xl">�   ?   A   ^      |      return (<h1 className="mb-12 font-semibold text-center text-sm sm:text-4xl lg:text-5xl">No Metamask Detected :( </h1>)5��    ?          ?       ?   �      ?       ?       �    M          :       :   X      :       :       5�_�   ;   =           <   N   8    ����                                                                                                                                                                                                                                                                                                                                                             bk�N   ! �   M   O   ^      S        <h1 className="font-semibold text-center text-sml sm:text-4xl lg:text-5xl">5��    M   8                  y                     5�_�   <               =   N   8    ����                                                                                                                                                                                                                                                                                                                                                             bk�O   " �   M   O   ^      R        <h1 className="font-semibold text-center text-sm sm:text-4xl lg:text-5xl">5��    M          9       9   X      9       9       5�_�                    I        ����                                                                                                                                                                                                                                                                                                                            I          N          V       bi�6     �   H   O   Z            <>   S        <h1 classname="text-2xl font-semibold text-center sm:text-4xl lg:text-5xl">   �          thank you for using <span classname="text-blue-600">diverse metamask</span> <a href="https://www.dsolutions.mn/">sdk</a>           </h1>   i        <button onclick={handlegoingback} classname="px-12 mt-6 text-md btn btn-primary">go back</button>   	      </>5��    I                    �                    �    J   
                                     �    J   )                 ;                    �    J   >                 P                    �    J   F                 X                    �    J   {                 �                    �    J   |                 �                    �    J   }                 �                    �    L                    �                    �    L                    �                    �    L   $                 �                    �    L   /                 �                    �    L   Y                 �                    �    L   \                 �                    5�_�                   D       ����                                                                                                                                                                                                                                                                                                                            O          T          V       bi�=     �   D   E   Z    �   D   E   Z            <>   S        <h1 classname="text-2xl font-semibold text-center sm:text-4xl lg:text-5xl">   �          thank you for using <span classname="text-blue-600">diverse metamask</span> <a href="https://www.dsolutions.mn/">sdk</a>           </h1>   i        <button onclick={handlegoingback} classname="px-12 mt-6 text-md btn btn-primary">go back</button>   	      </>5��    D                      6              b      5�_�                    K       ����                                                                                                                                                                                                                                                                                                                            F          F          V       bi�>     �   J   L        5��    J                      �      k               5�_�                    F        ����                                                                                                                                                                                                                                                                                                                            E          J   	       V   
    bi�@     �   E   G        �   F   G   ^    �   E   F   ^      j          <h1 className="mb-12 text-xl font-semibold text-center sm:text-2xl lg:text-4xl">{errorMsg}</h1>)5��    E                      ?      T               �    E                      ?              k       5�_�                     E        ����                                                                                                                                                                                                                                                                                                                            E          J   	       V   
    bi�B     �   D   F          
        <>�   H   J          k          <button onclick={handlegoingback} classname="px-12 mt-6 text-md btn btn-primary">go back</button>5��    D                     6                    �    H                  
   =             
       5�_�                    D       ����                                                                                                                                                                                                                                                                                                                            I          N   	       V   	    bi�9     �   D   E   Z    �   C   E   Z          addChainError  return (5��    C                     +                     5�_�                   0       ����                                                                                                                                                                                                                                                                                                                            G           N          V        bi�$    �   /   1   Y          } catch (e) {5��    /                                        5�_�                    0       ����                                                                                                                                                                                                                                                                                                                            H           O          V        bi�%     �   0   1   Y            �   0   2   Z            cl5��    0                      �                     �    0                     �                    �    0                    �                    5�_�                    1       ����                                                                                                                                                                                                                                                                                                                            H           O          V        bi�%     �   0   2   Z            console.log()5��    0                    �                    5�_�                     1       ����                                                                                                                                                                                                                                                                                                                            H           O          V        bi�%    �   0   2   Z            console.log(e)5��    0                     �                     5��