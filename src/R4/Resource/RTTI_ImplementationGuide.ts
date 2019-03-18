
import * as t from 'io-ts';
import { RTTI_Meta, IMeta } from './RTTI_Meta';
import { RTTI_Element, IElement } from './RTTI_Element';
import { RTTI_Narrative, INarrative } from './RTTI_Narrative';
import { RTTI_ResourceList, IResourceList } from '../Union/RTTI_ResourceList';
import { RTTI_Extension, IExtension } from './RTTI_Extension';
import { RTTI_ContactDetail, IContactDetail } from './RTTI_ContactDetail';
import { RTTI_UsageContext, IUsageContext } from './RTTI_UsageContext';
import { RTTI_CodeableConcept, ICodeableConcept } from './RTTI_CodeableConcept';
import { RTTI_ImplementationGuide_DependsOn, IImplementationGuide_DependsOn } from './RTTI_ImplementationGuide_DependsOn';
import { RTTI_ImplementationGuide_Global, IImplementationGuide_Global } from './RTTI_ImplementationGuide_Global';
import { RTTI_ImplementationGuide_Definition, IImplementationGuide_Definition } from './RTTI_ImplementationGuide_Definition';
import { RTTI_ImplementationGuide_Manifest, IImplementationGuide_Manifest } from './RTTI_ImplementationGuide_Manifest';

export enum ImplementationGuideStatusKind {
    draft = 'draft',
    active = 'active',
    retired = 'retired',
    unknown = 'unknown'
}
export enum ImplementationGuideLicenseKind {
    notOpenSource = 'notOpenSource',
    Bsd = '0Bsd',
    aal = 'aal',
    abstyles = 'abstyles',
    adobe2006 = 'adobe2006',
    adobeGlyph = 'adobeGlyph',
    adsl = 'adsl',
    afl11 = 'afl11',
    afl12 = 'afl12',
    afl20 = 'afl20',
    afl21 = 'afl21',
    afl30 = 'afl30',
    afmparse = 'afmparse',
    agpl10Only = 'agpl10Only',
    agpl10OrLater = 'agpl10OrLater',
    agpl30Only = 'agpl30Only',
    agpl30OrLater = 'agpl30OrLater',
    aladdin = 'aladdin',
    amdplpa = 'amdplpa',
    aml = 'aml',
    ampas = 'ampas',
    antlrPd = 'antlrPd',
    apache10 = 'apache10',
    apache11 = 'apache11',
    apache20 = 'apache20',
    apafml = 'apafml',
    apl10 = 'apl10',
    apsl10 = 'apsl10',
    apsl11 = 'apsl11',
    apsl12 = 'apsl12',
    apsl20 = 'apsl20',
    artistic10Cl8 = 'artistic10Cl8',
    artistic10Perl = 'artistic10Perl',
    artistic10 = 'artistic10',
    artistic20 = 'artistic20',
    bahyph = 'bahyph',
    barr = 'barr',
    beerware = 'beerware',
    bitTorrent10 = 'bitTorrent10',
    bitTorrent11 = 'bitTorrent11',
    borceux = 'borceux',
    bsd1Clause = 'bsd1Clause',
    bsd2ClauseFreeBsd = 'bsd2ClauseFreeBsd',
    bsd2ClauseNetBsd = 'bsd2ClauseNetBsd',
    bsd2ClausePatent = 'bsd2ClausePatent',
    bsd2Clause = 'bsd2Clause',
    bsd3ClauseAttribution = 'bsd3ClauseAttribution',
    bsd3ClauseClear = 'bsd3ClauseClear',
    bsd3ClauseLbnl = 'bsd3ClauseLbnl',
    bsd3ClauseNoNuclearLicense2014 = 'bsd3ClauseNoNuclearLicense2014',
    bsd3ClauseNoNuclearLicense = 'bsd3ClauseNoNuclearLicense',
    bsd3ClauseNoNuclearWarranty = 'bsd3ClauseNoNuclearWarranty',
    bsd3Clause = 'bsd3Clause',
    bsd4ClauseUc = 'bsd4ClauseUc',
    bsd4Clause = 'bsd4Clause',
    bsdProtection = 'bsdProtection',
    bsdSourceCode = 'bsdSourceCode',
    bsl10 = 'bsl10',
    bzip2105 = 'bzip2105',
    bzip2106 = 'bzip2106',
    caldera = 'caldera',
    catosl11 = 'catosl11',
    ccBy10 = 'ccBy10',
    ccBy20 = 'ccBy20',
    ccBy25 = 'ccBy25',
    ccBy30 = 'ccBy30',
    ccBy40 = 'ccBy40',
    ccByNc10 = 'ccByNc10',
    ccByNc20 = 'ccByNc20',
    ccByNc25 = 'ccByNc25',
    ccByNc30 = 'ccByNc30',
    ccByNc40 = 'ccByNc40',
    ccByNcNd10 = 'ccByNcNd10',
    ccByNcNd20 = 'ccByNcNd20',
    ccByNcNd25 = 'ccByNcNd25',
    ccByNcNd30 = 'ccByNcNd30',
    ccByNcNd40 = 'ccByNcNd40',
    ccByNcSa10 = 'ccByNcSa10',
    ccByNcSa20 = 'ccByNcSa20',
    ccByNcSa25 = 'ccByNcSa25',
    ccByNcSa30 = 'ccByNcSa30',
    ccByNcSa40 = 'ccByNcSa40',
    ccByNd10 = 'ccByNd10',
    ccByNd20 = 'ccByNd20',
    ccByNd25 = 'ccByNd25',
    ccByNd30 = 'ccByNd30',
    ccByNd40 = 'ccByNd40',
    ccBySa10 = 'ccBySa10',
    ccBySa20 = 'ccBySa20',
    ccBySa25 = 'ccBySa25',
    ccBySa30 = 'ccBySa30',
    ccBySa40 = 'ccBySa40',
    cc010 = 'cc010',
    cddl10 = 'cddl10',
    cddl11 = 'cddl11',
    cdlaPermissive10 = 'cdlaPermissive10',
    cdlaSharing10 = 'cdlaSharing10',
    cecill10 = 'cecill10',
    cecill11 = 'cecill11',
    cecill20 = 'cecill20',
    cecill21 = 'cecill21',
    cecillB = 'cecillB',
    cecillC = 'cecillC',
    clArtistic = 'clArtistic',
    cnriJython = 'cnriJython',
    cnriPythonGplCompatible = 'cnriPythonGplCompatible',
    cnriPython = 'cnriPython',
    condor11 = 'condor11',
    cpal10 = 'cpal10',
    cpl10 = 'cpl10',
    cpol102 = 'cpol102',
    crossword = 'crossword',
    crystalStacker = 'crystalStacker',
    cuaOpl10 = 'cuaOpl10',
    cube = 'cube',
    curl = 'curl',
    dFsl10 = 'dFsl10',
    diffmark = 'diffmark',
    doc = 'doc',
    dotseqn = 'dotseqn',
    dsdp = 'dsdp',
    dvipdfm = 'dvipdfm',
    ecl10 = 'ecl10',
    ecl20 = 'ecl20',
    efl10 = 'efl10',
    efl20 = 'efl20',
    eGenix = 'eGenix',
    entessa = 'entessa',
    epl10 = 'epl10',
    epl20 = 'epl20',
    erlPl11 = 'erlPl11',
    euDatagrid = 'euDatagrid',
    eupl10 = 'eupl10',
    eupl11 = 'eupl11',
    eupl12 = 'eupl12',
    eurosym = 'eurosym',
    fair = 'fair',
    frameworx10 = 'frameworx10',
    freeImage = 'freeImage',
    fsfap = 'fsfap',
    fsful = 'fsful',
    fsfullr = 'fsfullr',
    ftl = 'ftl',
    gfdl11Only = 'gfdl11Only',
    gfdl11OrLater = 'gfdl11OrLater',
    gfdl12Only = 'gfdl12Only',
    gfdl12OrLater = 'gfdl12OrLater',
    gfdl13Only = 'gfdl13Only',
    gfdl13OrLater = 'gfdl13OrLater',
    giftware = 'giftware',
    gl2Ps = 'gl2Ps',
    glide = 'glide',
    glulxe = 'glulxe',
    gnuplot = 'gnuplot',
    gpl10Only = 'gpl10Only',
    gpl10OrLater = 'gpl10OrLater',
    gpl20Only = 'gpl20Only',
    gpl20OrLater = 'gpl20OrLater',
    gpl30Only = 'gpl30Only',
    gpl30OrLater = 'gpl30OrLater',
    gSoap13B = 'gSoap13B',
    haskellReport = 'haskellReport',
    hpnd = 'hpnd',
    ibmPibs = 'ibmPibs',
    icu = 'icu',
    ijg = 'ijg',
    imageMagick = 'imageMagick',
    iMatix = 'iMatix',
    imlib2 = 'imlib2',
    infoZip = 'infoZip',
    intelAcpi = 'intelAcpi',
    intel = 'intel',
    interbase10 = 'interbase10',
    ipa = 'ipa',
    ipl10 = 'ipl10',
    isc = 'isc',
    jasPer20 = 'jasPer20',
    json = 'json',
    lal12 = 'lal12',
    lal13 = 'lal13',
    latex2E = 'latex2E',
    leptonica = 'leptonica',
    lgpl20Only = 'lgpl20Only',
    lgpl20OrLater = 'lgpl20OrLater',
    lgpl21Only = 'lgpl21Only',
    lgpl21OrLater = 'lgpl21OrLater',
    lgpl30Only = 'lgpl30Only',
    lgpl30OrLater = 'lgpl30OrLater',
    lgpllr = 'lgpllr',
    libpng = 'libpng',
    libtiff = 'libtiff',
    liLiQP11 = 'liLiQP11',
    liLiQR11 = 'liLiQR11',
    liLiQRplus11 = 'liLiQRplus11',
    linuxOpenIb = 'linuxOpenIb',
    lpl10 = 'lpl10',
    lpl102 = 'lpl102',
    lppl10 = 'lppl10',
    lppl11 = 'lppl11',
    lppl12 = 'lppl12',
    lppl13A = 'lppl13A',
    lppl13C = 'lppl13C',
    makeIndex = 'makeIndex',
    mirOs = 'mirOs',
    mit0 = 'mit0',
    mitAdvertising = 'mitAdvertising',
    mitCmu = 'mitCmu',
    mitEnna = 'mitEnna',
    mitFeh = 'mitFeh',
    mit = 'mit',
    mitnfa = 'mitnfa',
    motosoto = 'motosoto',
    mpich2 = 'mpich2',
    mpl10 = 'mpl10',
    mpl11 = 'mpl11',
    mpl20NoCopyleftException = 'mpl20NoCopyleftException',
    mpl20 = 'mpl20',
    msPl = 'msPl',
    msRl = 'msRl',
    mtll = 'mtll',
    multics = 'multics',
    mup = 'mup',
    nasa13 = 'nasa13',
    naumen = 'naumen',
    nbpl10 = 'nbpl10',
    ncsa = 'ncsa',
    netSnmp = 'netSnmp',
    netCdf = 'netCdf',
    newsletr = 'newsletr',
    ngpl = 'ngpl',
    nlod10 = 'nlod10',
    nlpl = 'nlpl',
    nokia = 'nokia',
    nosl = 'nosl',
    noweb = 'noweb',
    npl10 = 'npl10',
    npl11 = 'npl11',
    nposl30 = 'nposl30',
    nrl = 'nrl',
    ntp = 'ntp',
    occtPl = 'occtPl',
    oclc20 = 'oclc20',
    oDbL10 = 'oDbL10',
    ofl10 = 'ofl10',
    ofl11 = 'ofl11',
    ogtsl = 'ogtsl',
    oldap11 = 'oldap11',
    oldap12 = 'oldap12',
    oldap13 = 'oldap13',
    oldap14 = 'oldap14',
    oldap201 = 'oldap201',
    oldap20 = 'oldap20',
    oldap21 = 'oldap21',
    oldap221 = 'oldap221',
    oldap222 = 'oldap222',
    oldap22 = 'oldap22',
    oldap23 = 'oldap23',
    oldap24 = 'oldap24',
    oldap25 = 'oldap25',
    oldap26 = 'oldap26',
    oldap27 = 'oldap27',
    oldap28 = 'oldap28',
    oml = 'oml',
    openSsl = 'openSsl',
    opl10 = 'opl10',
    osetPl21 = 'osetPl21',
    osl10 = 'osl10',
    osl11 = 'osl11',
    osl20 = 'osl20',
    osl21 = 'osl21',
    osl30 = 'osl30',
    pddl10 = 'pddl10',
    php30 = 'php30',
    php301 = 'php301',
    plexus = 'plexus',
    postgreSql = 'postgreSql',
    psfrag = 'psfrag',
    psutils = 'psutils',
    python20 = 'python20',
    qhull = 'qhull',
    qpl10 = 'qpl10',
    rdisc = 'rdisc',
    rHeCos11 = 'rHeCos11',
    rpl11 = 'rpl11',
    rpl15 = 'rpl15',
    rpsl10 = 'rpsl10',
    rsaMd = 'rsaMd',
    rscpl = 'rscpl',
    ruby = 'ruby',
    saxPd = 'saxPd',
    saxpath = 'saxpath',
    scea = 'scea',
    sendmail = 'sendmail',
    sgiB10 = 'sgiB10',
    sgiB11 = 'sgiB11',
    sgiB20 = 'sgiB20',
    simPl20 = 'simPl20',
    sissl12 = 'sissl12',
    sissl = 'sissl',
    sleepycat = 'sleepycat',
    smlnj = 'smlnj',
    smppl = 'smppl',
    snia = 'snia',
    spencer86 = 'spencer86',
    spencer94 = 'spencer94',
    spencer99 = 'spencer99',
    spl10 = 'spl10',
    sugarCrm113 = 'sugarCrm113',
    swl = 'swl',
    tcl = 'tcl',
    tcpWrappers = 'tcpWrappers',
    tMate = 'tMate',
    torque11 = 'torque11',
    tosl = 'tosl',
    unicodeDfs2015 = 'unicodeDfs2015',
    unicodeDfs2016 = 'unicodeDfs2016',
    unicodeTou = 'unicodeTou',
    unlicense = 'unlicense',
    upl10 = 'upl10',
    vim = 'vim',
    vostrom = 'vostrom',
    vsl10 = 'vsl10',
    w3C19980720 = 'w3C19980720',
    w3C20150513 = 'w3C20150513',
    w3C = 'w3C',
    watcom10 = 'watcom10',
    wsuipa = 'wsuipa',
    wtfpl = 'wtfpl',
    x11 = 'x11',
    xerox = 'xerox',
    xFree8611 = 'xFree8611',
    xinetd = 'xinetd',
    xnet = 'xnet',
    xpp = 'xpp',
    xSkat = 'xSkat',
    ypl10 = 'ypl10',
    ypl11 = 'ypl11',
    zed = 'zed',
    zend20 = 'zend20',
    zimbra13 = 'zimbra13',
    zimbra14 = 'zimbra14',
    zlibAcknowledgement = 'zlibAcknowledgement',
    zlib = 'zlib',
    zpl11 = 'zpl11',
    zpl20 = 'zpl20',
    zpl21 = 'zpl21'
}
const ImplementationGuideStatusKindKeys = t.keyof({
    [ImplementationGuideStatusKind.draft]: null,
    [ImplementationGuideStatusKind.active]: null,
    [ImplementationGuideStatusKind.retired]: null,
    [ImplementationGuideStatusKind.unknown]: null
});
const ImplementationGuideLicenseKindKeys = t.keyof({
    [ImplementationGuideLicenseKind.notOpenSource]: null,
    [ImplementationGuideLicenseKind.Bsd]: null,
    [ImplementationGuideLicenseKind.aal]: null,
    [ImplementationGuideLicenseKind.abstyles]: null,
    [ImplementationGuideLicenseKind.adobe2006]: null,
    [ImplementationGuideLicenseKind.adobeGlyph]: null,
    [ImplementationGuideLicenseKind.adsl]: null,
    [ImplementationGuideLicenseKind.afl11]: null,
    [ImplementationGuideLicenseKind.afl12]: null,
    [ImplementationGuideLicenseKind.afl20]: null,
    [ImplementationGuideLicenseKind.afl21]: null,
    [ImplementationGuideLicenseKind.afl30]: null,
    [ImplementationGuideLicenseKind.afmparse]: null,
    [ImplementationGuideLicenseKind.agpl10Only]: null,
    [ImplementationGuideLicenseKind.agpl10OrLater]: null,
    [ImplementationGuideLicenseKind.agpl30Only]: null,
    [ImplementationGuideLicenseKind.agpl30OrLater]: null,
    [ImplementationGuideLicenseKind.aladdin]: null,
    [ImplementationGuideLicenseKind.amdplpa]: null,
    [ImplementationGuideLicenseKind.aml]: null,
    [ImplementationGuideLicenseKind.ampas]: null,
    [ImplementationGuideLicenseKind.antlrPd]: null,
    [ImplementationGuideLicenseKind.apache10]: null,
    [ImplementationGuideLicenseKind.apache11]: null,
    [ImplementationGuideLicenseKind.apache20]: null,
    [ImplementationGuideLicenseKind.apafml]: null,
    [ImplementationGuideLicenseKind.apl10]: null,
    [ImplementationGuideLicenseKind.apsl10]: null,
    [ImplementationGuideLicenseKind.apsl11]: null,
    [ImplementationGuideLicenseKind.apsl12]: null,
    [ImplementationGuideLicenseKind.apsl20]: null,
    [ImplementationGuideLicenseKind.artistic10Cl8]: null,
    [ImplementationGuideLicenseKind.artistic10Perl]: null,
    [ImplementationGuideLicenseKind.artistic10]: null,
    [ImplementationGuideLicenseKind.artistic20]: null,
    [ImplementationGuideLicenseKind.bahyph]: null,
    [ImplementationGuideLicenseKind.barr]: null,
    [ImplementationGuideLicenseKind.beerware]: null,
    [ImplementationGuideLicenseKind.bitTorrent10]: null,
    [ImplementationGuideLicenseKind.bitTorrent11]: null,
    [ImplementationGuideLicenseKind.borceux]: null,
    [ImplementationGuideLicenseKind.bsd1Clause]: null,
    [ImplementationGuideLicenseKind.bsd2ClauseFreeBsd]: null,
    [ImplementationGuideLicenseKind.bsd2ClauseNetBsd]: null,
    [ImplementationGuideLicenseKind.bsd2ClausePatent]: null,
    [ImplementationGuideLicenseKind.bsd2Clause]: null,
    [ImplementationGuideLicenseKind.bsd3ClauseAttribution]: null,
    [ImplementationGuideLicenseKind.bsd3ClauseClear]: null,
    [ImplementationGuideLicenseKind.bsd3ClauseLbnl]: null,
    [ImplementationGuideLicenseKind.bsd3ClauseNoNuclearLicense2014]: null,
    [ImplementationGuideLicenseKind.bsd3ClauseNoNuclearLicense]: null,
    [ImplementationGuideLicenseKind.bsd3ClauseNoNuclearWarranty]: null,
    [ImplementationGuideLicenseKind.bsd3Clause]: null,
    [ImplementationGuideLicenseKind.bsd4ClauseUc]: null,
    [ImplementationGuideLicenseKind.bsd4Clause]: null,
    [ImplementationGuideLicenseKind.bsdProtection]: null,
    [ImplementationGuideLicenseKind.bsdSourceCode]: null,
    [ImplementationGuideLicenseKind.bsl10]: null,
    [ImplementationGuideLicenseKind.bzip2105]: null,
    [ImplementationGuideLicenseKind.bzip2106]: null,
    [ImplementationGuideLicenseKind.caldera]: null,
    [ImplementationGuideLicenseKind.catosl11]: null,
    [ImplementationGuideLicenseKind.ccBy10]: null,
    [ImplementationGuideLicenseKind.ccBy20]: null,
    [ImplementationGuideLicenseKind.ccBy25]: null,
    [ImplementationGuideLicenseKind.ccBy30]: null,
    [ImplementationGuideLicenseKind.ccBy40]: null,
    [ImplementationGuideLicenseKind.ccByNc10]: null,
    [ImplementationGuideLicenseKind.ccByNc20]: null,
    [ImplementationGuideLicenseKind.ccByNc25]: null,
    [ImplementationGuideLicenseKind.ccByNc30]: null,
    [ImplementationGuideLicenseKind.ccByNc40]: null,
    [ImplementationGuideLicenseKind.ccByNcNd10]: null,
    [ImplementationGuideLicenseKind.ccByNcNd20]: null,
    [ImplementationGuideLicenseKind.ccByNcNd25]: null,
    [ImplementationGuideLicenseKind.ccByNcNd30]: null,
    [ImplementationGuideLicenseKind.ccByNcNd40]: null,
    [ImplementationGuideLicenseKind.ccByNcSa10]: null,
    [ImplementationGuideLicenseKind.ccByNcSa20]: null,
    [ImplementationGuideLicenseKind.ccByNcSa25]: null,
    [ImplementationGuideLicenseKind.ccByNcSa30]: null,
    [ImplementationGuideLicenseKind.ccByNcSa40]: null,
    [ImplementationGuideLicenseKind.ccByNd10]: null,
    [ImplementationGuideLicenseKind.ccByNd20]: null,
    [ImplementationGuideLicenseKind.ccByNd25]: null,
    [ImplementationGuideLicenseKind.ccByNd30]: null,
    [ImplementationGuideLicenseKind.ccByNd40]: null,
    [ImplementationGuideLicenseKind.ccBySa10]: null,
    [ImplementationGuideLicenseKind.ccBySa20]: null,
    [ImplementationGuideLicenseKind.ccBySa25]: null,
    [ImplementationGuideLicenseKind.ccBySa30]: null,
    [ImplementationGuideLicenseKind.ccBySa40]: null,
    [ImplementationGuideLicenseKind.cc010]: null,
    [ImplementationGuideLicenseKind.cddl10]: null,
    [ImplementationGuideLicenseKind.cddl11]: null,
    [ImplementationGuideLicenseKind.cdlaPermissive10]: null,
    [ImplementationGuideLicenseKind.cdlaSharing10]: null,
    [ImplementationGuideLicenseKind.cecill10]: null,
    [ImplementationGuideLicenseKind.cecill11]: null,
    [ImplementationGuideLicenseKind.cecill20]: null,
    [ImplementationGuideLicenseKind.cecill21]: null,
    [ImplementationGuideLicenseKind.cecillB]: null,
    [ImplementationGuideLicenseKind.cecillC]: null,
    [ImplementationGuideLicenseKind.clArtistic]: null,
    [ImplementationGuideLicenseKind.cnriJython]: null,
    [ImplementationGuideLicenseKind.cnriPythonGplCompatible]: null,
    [ImplementationGuideLicenseKind.cnriPython]: null,
    [ImplementationGuideLicenseKind.condor11]: null,
    [ImplementationGuideLicenseKind.cpal10]: null,
    [ImplementationGuideLicenseKind.cpl10]: null,
    [ImplementationGuideLicenseKind.cpol102]: null,
    [ImplementationGuideLicenseKind.crossword]: null,
    [ImplementationGuideLicenseKind.crystalStacker]: null,
    [ImplementationGuideLicenseKind.cuaOpl10]: null,
    [ImplementationGuideLicenseKind.cube]: null,
    [ImplementationGuideLicenseKind.curl]: null,
    [ImplementationGuideLicenseKind.dFsl10]: null,
    [ImplementationGuideLicenseKind.diffmark]: null,
    [ImplementationGuideLicenseKind.doc]: null,
    [ImplementationGuideLicenseKind.dotseqn]: null,
    [ImplementationGuideLicenseKind.dsdp]: null,
    [ImplementationGuideLicenseKind.dvipdfm]: null,
    [ImplementationGuideLicenseKind.ecl10]: null,
    [ImplementationGuideLicenseKind.ecl20]: null,
    [ImplementationGuideLicenseKind.efl10]: null,
    [ImplementationGuideLicenseKind.efl20]: null,
    [ImplementationGuideLicenseKind.eGenix]: null,
    [ImplementationGuideLicenseKind.entessa]: null,
    [ImplementationGuideLicenseKind.epl10]: null,
    [ImplementationGuideLicenseKind.epl20]: null,
    [ImplementationGuideLicenseKind.erlPl11]: null,
    [ImplementationGuideLicenseKind.euDatagrid]: null,
    [ImplementationGuideLicenseKind.eupl10]: null,
    [ImplementationGuideLicenseKind.eupl11]: null,
    [ImplementationGuideLicenseKind.eupl12]: null,
    [ImplementationGuideLicenseKind.eurosym]: null,
    [ImplementationGuideLicenseKind.fair]: null,
    [ImplementationGuideLicenseKind.frameworx10]: null,
    [ImplementationGuideLicenseKind.freeImage]: null,
    [ImplementationGuideLicenseKind.fsfap]: null,
    [ImplementationGuideLicenseKind.fsful]: null,
    [ImplementationGuideLicenseKind.fsfullr]: null,
    [ImplementationGuideLicenseKind.ftl]: null,
    [ImplementationGuideLicenseKind.gfdl11Only]: null,
    [ImplementationGuideLicenseKind.gfdl11OrLater]: null,
    [ImplementationGuideLicenseKind.gfdl12Only]: null,
    [ImplementationGuideLicenseKind.gfdl12OrLater]: null,
    [ImplementationGuideLicenseKind.gfdl13Only]: null,
    [ImplementationGuideLicenseKind.gfdl13OrLater]: null,
    [ImplementationGuideLicenseKind.giftware]: null,
    [ImplementationGuideLicenseKind.gl2Ps]: null,
    [ImplementationGuideLicenseKind.glide]: null,
    [ImplementationGuideLicenseKind.glulxe]: null,
    [ImplementationGuideLicenseKind.gnuplot]: null,
    [ImplementationGuideLicenseKind.gpl10Only]: null,
    [ImplementationGuideLicenseKind.gpl10OrLater]: null,
    [ImplementationGuideLicenseKind.gpl20Only]: null,
    [ImplementationGuideLicenseKind.gpl20OrLater]: null,
    [ImplementationGuideLicenseKind.gpl30Only]: null,
    [ImplementationGuideLicenseKind.gpl30OrLater]: null,
    [ImplementationGuideLicenseKind.gSoap13B]: null,
    [ImplementationGuideLicenseKind.haskellReport]: null,
    [ImplementationGuideLicenseKind.hpnd]: null,
    [ImplementationGuideLicenseKind.ibmPibs]: null,
    [ImplementationGuideLicenseKind.icu]: null,
    [ImplementationGuideLicenseKind.ijg]: null,
    [ImplementationGuideLicenseKind.imageMagick]: null,
    [ImplementationGuideLicenseKind.iMatix]: null,
    [ImplementationGuideLicenseKind.imlib2]: null,
    [ImplementationGuideLicenseKind.infoZip]: null,
    [ImplementationGuideLicenseKind.intelAcpi]: null,
    [ImplementationGuideLicenseKind.intel]: null,
    [ImplementationGuideLicenseKind.interbase10]: null,
    [ImplementationGuideLicenseKind.ipa]: null,
    [ImplementationGuideLicenseKind.ipl10]: null,
    [ImplementationGuideLicenseKind.isc]: null,
    [ImplementationGuideLicenseKind.jasPer20]: null,
    [ImplementationGuideLicenseKind.json]: null,
    [ImplementationGuideLicenseKind.lal12]: null,
    [ImplementationGuideLicenseKind.lal13]: null,
    [ImplementationGuideLicenseKind.latex2E]: null,
    [ImplementationGuideLicenseKind.leptonica]: null,
    [ImplementationGuideLicenseKind.lgpl20Only]: null,
    [ImplementationGuideLicenseKind.lgpl20OrLater]: null,
    [ImplementationGuideLicenseKind.lgpl21Only]: null,
    [ImplementationGuideLicenseKind.lgpl21OrLater]: null,
    [ImplementationGuideLicenseKind.lgpl30Only]: null,
    [ImplementationGuideLicenseKind.lgpl30OrLater]: null,
    [ImplementationGuideLicenseKind.lgpllr]: null,
    [ImplementationGuideLicenseKind.libpng]: null,
    [ImplementationGuideLicenseKind.libtiff]: null,
    [ImplementationGuideLicenseKind.liLiQP11]: null,
    [ImplementationGuideLicenseKind.liLiQR11]: null,
    [ImplementationGuideLicenseKind.liLiQRplus11]: null,
    [ImplementationGuideLicenseKind.linuxOpenIb]: null,
    [ImplementationGuideLicenseKind.lpl10]: null,
    [ImplementationGuideLicenseKind.lpl102]: null,
    [ImplementationGuideLicenseKind.lppl10]: null,
    [ImplementationGuideLicenseKind.lppl11]: null,
    [ImplementationGuideLicenseKind.lppl12]: null,
    [ImplementationGuideLicenseKind.lppl13A]: null,
    [ImplementationGuideLicenseKind.lppl13C]: null,
    [ImplementationGuideLicenseKind.makeIndex]: null,
    [ImplementationGuideLicenseKind.mirOs]: null,
    [ImplementationGuideLicenseKind.mit0]: null,
    [ImplementationGuideLicenseKind.mitAdvertising]: null,
    [ImplementationGuideLicenseKind.mitCmu]: null,
    [ImplementationGuideLicenseKind.mitEnna]: null,
    [ImplementationGuideLicenseKind.mitFeh]: null,
    [ImplementationGuideLicenseKind.mit]: null,
    [ImplementationGuideLicenseKind.mitnfa]: null,
    [ImplementationGuideLicenseKind.motosoto]: null,
    [ImplementationGuideLicenseKind.mpich2]: null,
    [ImplementationGuideLicenseKind.mpl10]: null,
    [ImplementationGuideLicenseKind.mpl11]: null,
    [ImplementationGuideLicenseKind.mpl20NoCopyleftException]: null,
    [ImplementationGuideLicenseKind.mpl20]: null,
    [ImplementationGuideLicenseKind.msPl]: null,
    [ImplementationGuideLicenseKind.msRl]: null,
    [ImplementationGuideLicenseKind.mtll]: null,
    [ImplementationGuideLicenseKind.multics]: null,
    [ImplementationGuideLicenseKind.mup]: null,
    [ImplementationGuideLicenseKind.nasa13]: null,
    [ImplementationGuideLicenseKind.naumen]: null,
    [ImplementationGuideLicenseKind.nbpl10]: null,
    [ImplementationGuideLicenseKind.ncsa]: null,
    [ImplementationGuideLicenseKind.netSnmp]: null,
    [ImplementationGuideLicenseKind.netCdf]: null,
    [ImplementationGuideLicenseKind.newsletr]: null,
    [ImplementationGuideLicenseKind.ngpl]: null,
    [ImplementationGuideLicenseKind.nlod10]: null,
    [ImplementationGuideLicenseKind.nlpl]: null,
    [ImplementationGuideLicenseKind.nokia]: null,
    [ImplementationGuideLicenseKind.nosl]: null,
    [ImplementationGuideLicenseKind.noweb]: null,
    [ImplementationGuideLicenseKind.npl10]: null,
    [ImplementationGuideLicenseKind.npl11]: null,
    [ImplementationGuideLicenseKind.nposl30]: null,
    [ImplementationGuideLicenseKind.nrl]: null,
    [ImplementationGuideLicenseKind.ntp]: null,
    [ImplementationGuideLicenseKind.occtPl]: null,
    [ImplementationGuideLicenseKind.oclc20]: null,
    [ImplementationGuideLicenseKind.oDbL10]: null,
    [ImplementationGuideLicenseKind.ofl10]: null,
    [ImplementationGuideLicenseKind.ofl11]: null,
    [ImplementationGuideLicenseKind.ogtsl]: null,
    [ImplementationGuideLicenseKind.oldap11]: null,
    [ImplementationGuideLicenseKind.oldap12]: null,
    [ImplementationGuideLicenseKind.oldap13]: null,
    [ImplementationGuideLicenseKind.oldap14]: null,
    [ImplementationGuideLicenseKind.oldap201]: null,
    [ImplementationGuideLicenseKind.oldap20]: null,
    [ImplementationGuideLicenseKind.oldap21]: null,
    [ImplementationGuideLicenseKind.oldap221]: null,
    [ImplementationGuideLicenseKind.oldap222]: null,
    [ImplementationGuideLicenseKind.oldap22]: null,
    [ImplementationGuideLicenseKind.oldap23]: null,
    [ImplementationGuideLicenseKind.oldap24]: null,
    [ImplementationGuideLicenseKind.oldap25]: null,
    [ImplementationGuideLicenseKind.oldap26]: null,
    [ImplementationGuideLicenseKind.oldap27]: null,
    [ImplementationGuideLicenseKind.oldap28]: null,
    [ImplementationGuideLicenseKind.oml]: null,
    [ImplementationGuideLicenseKind.openSsl]: null,
    [ImplementationGuideLicenseKind.opl10]: null,
    [ImplementationGuideLicenseKind.osetPl21]: null,
    [ImplementationGuideLicenseKind.osl10]: null,
    [ImplementationGuideLicenseKind.osl11]: null,
    [ImplementationGuideLicenseKind.osl20]: null,
    [ImplementationGuideLicenseKind.osl21]: null,
    [ImplementationGuideLicenseKind.osl30]: null,
    [ImplementationGuideLicenseKind.pddl10]: null,
    [ImplementationGuideLicenseKind.php30]: null,
    [ImplementationGuideLicenseKind.php301]: null,
    [ImplementationGuideLicenseKind.plexus]: null,
    [ImplementationGuideLicenseKind.postgreSql]: null,
    [ImplementationGuideLicenseKind.psfrag]: null,
    [ImplementationGuideLicenseKind.psutils]: null,
    [ImplementationGuideLicenseKind.python20]: null,
    [ImplementationGuideLicenseKind.qhull]: null,
    [ImplementationGuideLicenseKind.qpl10]: null,
    [ImplementationGuideLicenseKind.rdisc]: null,
    [ImplementationGuideLicenseKind.rHeCos11]: null,
    [ImplementationGuideLicenseKind.rpl11]: null,
    [ImplementationGuideLicenseKind.rpl15]: null,
    [ImplementationGuideLicenseKind.rpsl10]: null,
    [ImplementationGuideLicenseKind.rsaMd]: null,
    [ImplementationGuideLicenseKind.rscpl]: null,
    [ImplementationGuideLicenseKind.ruby]: null,
    [ImplementationGuideLicenseKind.saxPd]: null,
    [ImplementationGuideLicenseKind.saxpath]: null,
    [ImplementationGuideLicenseKind.scea]: null,
    [ImplementationGuideLicenseKind.sendmail]: null,
    [ImplementationGuideLicenseKind.sgiB10]: null,
    [ImplementationGuideLicenseKind.sgiB11]: null,
    [ImplementationGuideLicenseKind.sgiB20]: null,
    [ImplementationGuideLicenseKind.simPl20]: null,
    [ImplementationGuideLicenseKind.sissl12]: null,
    [ImplementationGuideLicenseKind.sissl]: null,
    [ImplementationGuideLicenseKind.sleepycat]: null,
    [ImplementationGuideLicenseKind.smlnj]: null,
    [ImplementationGuideLicenseKind.smppl]: null,
    [ImplementationGuideLicenseKind.snia]: null,
    [ImplementationGuideLicenseKind.spencer86]: null,
    [ImplementationGuideLicenseKind.spencer94]: null,
    [ImplementationGuideLicenseKind.spencer99]: null,
    [ImplementationGuideLicenseKind.spl10]: null,
    [ImplementationGuideLicenseKind.sugarCrm113]: null,
    [ImplementationGuideLicenseKind.swl]: null,
    [ImplementationGuideLicenseKind.tcl]: null,
    [ImplementationGuideLicenseKind.tcpWrappers]: null,
    [ImplementationGuideLicenseKind.tMate]: null,
    [ImplementationGuideLicenseKind.torque11]: null,
    [ImplementationGuideLicenseKind.tosl]: null,
    [ImplementationGuideLicenseKind.unicodeDfs2015]: null,
    [ImplementationGuideLicenseKind.unicodeDfs2016]: null,
    [ImplementationGuideLicenseKind.unicodeTou]: null,
    [ImplementationGuideLicenseKind.unlicense]: null,
    [ImplementationGuideLicenseKind.upl10]: null,
    [ImplementationGuideLicenseKind.vim]: null,
    [ImplementationGuideLicenseKind.vostrom]: null,
    [ImplementationGuideLicenseKind.vsl10]: null,
    [ImplementationGuideLicenseKind.w3C19980720]: null,
    [ImplementationGuideLicenseKind.w3C20150513]: null,
    [ImplementationGuideLicenseKind.w3C]: null,
    [ImplementationGuideLicenseKind.watcom10]: null,
    [ImplementationGuideLicenseKind.wsuipa]: null,
    [ImplementationGuideLicenseKind.wtfpl]: null,
    [ImplementationGuideLicenseKind.x11]: null,
    [ImplementationGuideLicenseKind.xerox]: null,
    [ImplementationGuideLicenseKind.xFree8611]: null,
    [ImplementationGuideLicenseKind.xinetd]: null,
    [ImplementationGuideLicenseKind.xnet]: null,
    [ImplementationGuideLicenseKind.xpp]: null,
    [ImplementationGuideLicenseKind.xSkat]: null,
    [ImplementationGuideLicenseKind.ypl10]: null,
    [ImplementationGuideLicenseKind.ypl11]: null,
    [ImplementationGuideLicenseKind.zed]: null,
    [ImplementationGuideLicenseKind.zend20]: null,
    [ImplementationGuideLicenseKind.zimbra13]: null,
    [ImplementationGuideLicenseKind.zimbra14]: null,
    [ImplementationGuideLicenseKind.zlibAcknowledgement]: null,
    [ImplementationGuideLicenseKind.zlib]: null,
    [ImplementationGuideLicenseKind.zpl11]: null,
    [ImplementationGuideLicenseKind.zpl20]: null,
    [ImplementationGuideLicenseKind.zpl21]: null
});


export interface IImplementationGuide {

    /**
     * This is a ImplementationGuide resource
     */
    resourceType: 'ImplementationGuide';


    /**
     * The logical id of the resource, as used in the URL for the resource. Once assigned, this value never changes.
     */
    id?: string;


    /**
     * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
     */
    meta?: IMeta;


    /**
     * A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content. Often, this is a reference to an implementation guide that defines the special rules along with other profiles etc.
     */
    implicitRules?: string;


    /**
     * Extensions for implicitRules
     */
    _implicitRules?: IElement;


    /**
     * The base language in which the resource is written.
     */
    language?: string;


    /**
     * Extensions for language
     */
    _language?: IElement;


    /**
     * A human-readable narrative that contains a summary of the resource and can be used to represent the content of the resource to a human. The narrative need not encode all the structured data, but is required to contain sufficient detail to make it "clinically safe" for a human to just read the narrative. Resource definitions may define what content should be represented in the narrative to ensure clinical safety.
     */
    text?: INarrative;


    /**
     * These resources do not have an independent existence apart from the resource that contains them - they cannot be identified independently, and nor can they have their own independent transaction scope.
     */
    contained?: IResourceList[];


    /**
     * May be used to represent additional information that is not part of the basic definition of the resource. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
     */
    extension?: IExtension[];


    /**
     * May be used to represent additional information that is not part of the basic definition of the resource, and that modifies the understanding of the element that contains it. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).
     */
    modifierExtension?: IExtension[];


    /**
     * An absolute URI that is used to identify this implementation guide when it is referenced in a specification, model, design or an instance; also called its canonical identifier. This SHOULD be globally unique and SHOULD be a literal address at which at which an authoritative instance of this implementation guide is (or will be) published. This URL can be the target of a canonical reference. It SHALL remain the same when the implementation guide is stored on different servers.
     */
    url?: string;


    /**
     * Extensions for url
     */
    _url?: IElement;


    /**
     * The identifier that is used to identify this version of the implementation guide when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the implementation guide author and is not expected to be globally unique. For example, it might be a timestamp (e.g. yyyymmdd) if a managed version is not available. There is also no expectation that versions can be placed in a lexicographical sequence.
     */
    version?: string;


    /**
     * Extensions for version
     */
    _version?: IElement;


    /**
     * A natural language name identifying the implementation guide. This name should be usable as an identifier for the module by machine processing applications such as code generation.
     */
    name?: string;


    /**
     * Extensions for name
     */
    _name?: IElement;


    /**
     * A short, descriptive, user-friendly title for the implementation guide.
     */
    title?: string;


    /**
     * Extensions for title
     */
    _title?: IElement;


    /**
     * The status of this implementation guide. Enables tracking the life-cycle of the content.
     */
    status?: ImplementationGuideStatusKind;


    /**
     * Extensions for status
     */
    _status?: IElement;


    /**
     * A Boolean value to indicate that this implementation guide is authored for testing purposes (or education/evaluation/marketing) and is not intended to be used for genuine usage.
     */
    experimental?: boolean;


    /**
     * Extensions for experimental
     */
    _experimental?: IElement;


    /**
     * The date  (and optionally time) when the implementation guide was published. The date must change when the business version changes and it must change if the status code changes. In addition, it should change when the substantive content of the implementation guide changes.
     */
    date?: string;


    /**
     * Extensions for date
     */
    _date?: IElement;


    /**
     * The name of the organization or individual that published the implementation guide.
     */
    publisher?: string;


    /**
     * Extensions for publisher
     */
    _publisher?: IElement;


    /**
     * Contact details to assist a user in finding and communicating with the publisher.
     */
    contact?: IContactDetail[];


    /**
     * A free text natural language description of the implementation guide from a consumer's perspective.
     */
    description?: string;


    /**
     * Extensions for description
     */
    _description?: IElement;


    /**
     * The content was developed with a focus and intent of supporting the contexts that are listed. These terms may be used to assist with indexing and searching for appropriate implementation guide instances.
     */
    useContext?: IUsageContext[];


    /**
     * A legal or geographic region in which the implementation guide is intended to be used.
     */
    jurisdiction?: ICodeableConcept[];


    /**
     * A copyright statement relating to the implementation guide and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the implementation guide.
     */
    copyright?: string;


    /**
     * Extensions for copyright
     */
    _copyright?: IElement;


    /**
     * The NPM package name for this Implementation Guide, used in the NPM package distribution, which is the primary mechanism by which FHIR based tooling manages IG dependencies. This value must be globally unique, and should be assigned with care.
     */
    packageId?: string;


    /**
     * Extensions for packageId
     */
    _packageId?: IElement;


    /**
     * The license that applies to this Implementation Guide, using an SPDX license code, or 'not-open-source'.
     */
    license?: ImplementationGuideLicenseKind;


    /**
     * Extensions for license
     */
    _license?: IElement;


    /**
     * The version of the FHIR specification on which this ImplementationGuide is based - this is the formal version of the specification, without the revision number, e.g. [publication].[major].[minor], which is 3.5.0. for this version.
     */
    fhirVersion?: string;


    /**
     * Extensions for fhirVersion
     */
    _fhirVersion?: IElement;


    /**
     * Another implementation guide that this implementation depends on. Typically, an implementation guide uses value sets, profiles etc.defined in other implementation guides.
     */
    dependsOn?: IImplementationGuide_DependsOn[];


    /**
     * A set of profiles that all resources covered by this implementation guide must conform to.
     */
    global?: IImplementationGuide_Global[];


    /**
     * The information needed by an IG publisher tool to publish the whole implementation guide.
     */
    definition?: IImplementationGuide_Definition;


    /**
     * Information about an assembled implementation guide, created by the publication tooling.
     */
    manifest?: IImplementationGuide_Manifest;

}



export const RTTI_ImplementationGuide: t.Type<IImplementationGuide> = t.recursion('IImplementationGuide', () =>
    t.intersection([

        t.type({
            resourceType: t.literal('ImplementationGuide')
        })
        ,

        t.partial({
            id: t.string,
            meta: RTTI_Meta,
            implicitRules: t.string,
            _implicitRules: RTTI_Element,
            language: t.string,
            _language: RTTI_Element,
            text: RTTI_Narrative,
            contained: t.array(RTTI_ResourceList),
            extension: t.array(RTTI_Extension),
            modifierExtension: t.array(RTTI_Extension),
            url: t.string,
            _url: RTTI_Element,
            version: t.string,
            _version: RTTI_Element,
            name: t.string,
            _name: RTTI_Element,
            title: t.string,
            _title: RTTI_Element,
            status: ImplementationGuideStatusKindKeys,
            _status: RTTI_Element,
            experimental: t.boolean,
            _experimental: RTTI_Element,
            date: t.string,
            _date: RTTI_Element,
            publisher: t.string,
            _publisher: RTTI_Element,
            contact: t.array(RTTI_ContactDetail),
            description: t.string,
            _description: RTTI_Element,
            useContext: t.array(RTTI_UsageContext),
            jurisdiction: t.array(RTTI_CodeableConcept),
            copyright: t.string,
            _copyright: RTTI_Element,
            packageId: t.string,
            _packageId: RTTI_Element,
            license: ImplementationGuideLicenseKindKeys,
            _license: RTTI_Element,
            fhirVersion: t.string,
            _fhirVersion: RTTI_Element,
            dependsOn: t.array(RTTI_ImplementationGuide_DependsOn),
            global: t.array(RTTI_ImplementationGuide_Global),
            definition: RTTI_ImplementationGuide_Definition,
            manifest: RTTI_ImplementationGuide_Manifest
        })

    ])
);


