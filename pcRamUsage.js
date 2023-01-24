const os = require('os');

setInterval(() =>{
    const {arch, platform, totalmem, freemem} = os;

    //total de memoria
    var convertTotalRam = totalmem /1024/1024;

    //total de memoria livre
    var convertFreeRam = freemem /1024/1024;

    //porcentagem de memoria utilizada
    var memoriaTotalUtilizada = convertFreeRam / convertTotalRam * 100;
    
    const stats= {
        OS: platform(),
        Arch: arch(),
        TotalRam: ` ${parseInt(convertTotalRam)} mb` ,
        FreeRam: ` ${parseInt(convertFreeRam)} mb`,
        Usage: ` ${memoriaTotalUtilizada.toFixed(2)} %`
    }

    //Limpa o console
    console.clear();
    //Escreve
    console.table(stats);

    //exporta o objeto stats
    exports.stats = stats;

}, 3000)

