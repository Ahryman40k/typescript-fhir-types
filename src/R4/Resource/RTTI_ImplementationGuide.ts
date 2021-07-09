import * as t from 'io-ts';
import {RTTI_id} from '../Scalar/RTTI_id';
import {RTTI_Meta, IMeta} from './RTTI_Meta';
import {RTTI_uri} from '../Scalar/RTTI_uri';
import {RTTI_Element, IElement} from './RTTI_Element';
import {RTTI_code} from '../Scalar/RTTI_code';
import {RTTI_Narrative, INarrative} from './RTTI_Narrative';
import {RTTI_ResourceList, IResourceList} from '../Union/RTTI_ResourceList';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_dateTime} from '../Scalar/RTTI_dateTime';
import {RTTI_ContactDetail, IContactDetail} from './RTTI_ContactDetail';
import {RTTI_markdown} from '../Scalar/RTTI_markdown';
import {RTTI_UsageContext, IUsageContext} from './RTTI_UsageContext';
import {RTTI_CodeableConcept, ICodeableConcept} from './RTTI_CodeableConcept';
import {
  RTTI_ImplementationGuide_DependsOn,
  IImplementationGuide_DependsOn,
} from './RTTI_ImplementationGuide_DependsOn';
import {
  RTTI_ImplementationGuide_Global,
  IImplementationGuide_Global,
} from './RTTI_ImplementationGuide_Global';
import {
  RTTI_ImplementationGuide_Definition,
  IImplementationGuide_Definition,
} from './RTTI_ImplementationGuide_Definition';
import {
  RTTI_ImplementationGuide_Manifest,
  IImplementationGuide_Manifest,
} from './RTTI_ImplementationGuide_Manifest';
export enum ImplementationGuideFhirVersionKind {
  _001 = '0.01',
  _005 = '0.05',
  _006 = '0.06',
  _011 = '0.11',
  _0080 = '0.0.80',
  _0081 = '0.0.81',
  _0082 = '0.0.82',
  _040 = '0.4.0',
  _050 = '0.5.0',
  _100 = '1.0.0',
  _101 = '1.0.1',
  _102 = '1.0.2',
  _110 = '1.1.0',
  _140 = '1.4.0',
  _160 = '1.6.0',
  _180 = '1.8.0',
  _300 = '3.0.0',
  _301 = '3.0.1',
  _330 = '3.3.0',
  _350 = '3.5.0',
  _400 = '4.0.0',
}
export enum ImplementationGuideStatusKind {
  _draft = 'draft',
  _active = 'active',
  _retired = 'retired',
  _unknown = 'unknown',
}
export enum ImplementationGuideLicenseKind {
  _notOpenSource = 'not-open-source',
  _0Bsd = '0BSD',
  _aal = 'AAL',
  _abstyles = 'Abstyles',
  _adobe2006 = 'Adobe-2006',
  _adobeGlyph = 'Adobe-Glyph',
  _adsl = 'ADSL',
  _afl11 = 'AFL-1.1',
  _afl12 = 'AFL-1.2',
  _afl20 = 'AFL-2.0',
  _afl21 = 'AFL-2.1',
  _afl30 = 'AFL-3.0',
  _afmparse = 'Afmparse',
  _agpl10Only = 'AGPL-1.0-only',
  _agpl10OrLater = 'AGPL-1.0-or-later',
  _agpl30Only = 'AGPL-3.0-only',
  _agpl30OrLater = 'AGPL-3.0-or-later',
  _aladdin = 'Aladdin',
  _amdplpa = 'AMDPLPA',
  _aml = 'AML',
  _ampas = 'AMPAS',
  _antlrPd = 'ANTLR-PD',
  _apache10 = 'Apache-1.0',
  _apache11 = 'Apache-1.1',
  _apache20 = 'Apache-2.0',
  _apafml = 'APAFML',
  _apl10 = 'APL-1.0',
  _apsl10 = 'APSL-1.0',
  _apsl11 = 'APSL-1.1',
  _apsl12 = 'APSL-1.2',
  _apsl20 = 'APSL-2.0',
  _artistic10Cl8 = 'Artistic-1.0-cl8',
  _artistic10Perl = 'Artistic-1.0-Perl',
  _artistic10 = 'Artistic-1.0',
  _artistic20 = 'Artistic-2.0',
  _bahyph = 'Bahyph',
  _barr = 'Barr',
  _beerware = 'Beerware',
  _bitTorrent10 = 'BitTorrent-1.0',
  _bitTorrent11 = 'BitTorrent-1.1',
  _borceux = 'Borceux',
  _bsd1Clause = 'BSD-1-Clause',
  _bsd2ClauseFreeBsd = 'BSD-2-Clause-FreeBSD',
  _bsd2ClauseNetBsd = 'BSD-2-Clause-NetBSD',
  _bsd2ClausePatent = 'BSD-2-Clause-Patent',
  _bsd2Clause = 'BSD-2-Clause',
  _bsd3ClauseAttribution = 'BSD-3-Clause-Attribution',
  _bsd3ClauseClear = 'BSD-3-Clause-Clear',
  _bsd3ClauseLbnl = 'BSD-3-Clause-LBNL',
  _bsd3ClauseNoNuclearLicense2014 = 'BSD-3-Clause-No-Nuclear-License-2014',
  _bsd3ClauseNoNuclearLicense = 'BSD-3-Clause-No-Nuclear-License',
  _bsd3ClauseNoNuclearWarranty = 'BSD-3-Clause-No-Nuclear-Warranty',
  _bsd3Clause = 'BSD-3-Clause',
  _bsd4ClauseUc = 'BSD-4-Clause-UC',
  _bsd4Clause = 'BSD-4-Clause',
  _bsdProtection = 'BSD-Protection',
  _bsdSourceCode = 'BSD-Source-Code',
  _bsl10 = 'BSL-1.0',
  _bzip2105 = 'bzip2-1.0.5',
  _bzip2106 = 'bzip2-1.0.6',
  _caldera = 'Caldera',
  _catosl11 = 'CATOSL-1.1',
  _ccBy10 = 'CC-BY-1.0',
  _ccBy20 = 'CC-BY-2.0',
  _ccBy25 = 'CC-BY-2.5',
  _ccBy30 = 'CC-BY-3.0',
  _ccBy40 = 'CC-BY-4.0',
  _ccByNc10 = 'CC-BY-NC-1.0',
  _ccByNc20 = 'CC-BY-NC-2.0',
  _ccByNc25 = 'CC-BY-NC-2.5',
  _ccByNc30 = 'CC-BY-NC-3.0',
  _ccByNc40 = 'CC-BY-NC-4.0',
  _ccByNcNd10 = 'CC-BY-NC-ND-1.0',
  _ccByNcNd20 = 'CC-BY-NC-ND-2.0',
  _ccByNcNd25 = 'CC-BY-NC-ND-2.5',
  _ccByNcNd30 = 'CC-BY-NC-ND-3.0',
  _ccByNcNd40 = 'CC-BY-NC-ND-4.0',
  _ccByNcSa10 = 'CC-BY-NC-SA-1.0',
  _ccByNcSa20 = 'CC-BY-NC-SA-2.0',
  _ccByNcSa25 = 'CC-BY-NC-SA-2.5',
  _ccByNcSa30 = 'CC-BY-NC-SA-3.0',
  _ccByNcSa40 = 'CC-BY-NC-SA-4.0',
  _ccByNd10 = 'CC-BY-ND-1.0',
  _ccByNd20 = 'CC-BY-ND-2.0',
  _ccByNd25 = 'CC-BY-ND-2.5',
  _ccByNd30 = 'CC-BY-ND-3.0',
  _ccByNd40 = 'CC-BY-ND-4.0',
  _ccBySa10 = 'CC-BY-SA-1.0',
  _ccBySa20 = 'CC-BY-SA-2.0',
  _ccBySa25 = 'CC-BY-SA-2.5',
  _ccBySa30 = 'CC-BY-SA-3.0',
  _ccBySa40 = 'CC-BY-SA-4.0',
  _cc010 = 'CC0-1.0',
  _cddl10 = 'CDDL-1.0',
  _cddl11 = 'CDDL-1.1',
  _cdlaPermissive10 = 'CDLA-Permissive-1.0',
  _cdlaSharing10 = 'CDLA-Sharing-1.0',
  _cecill10 = 'CECILL-1.0',
  _cecill11 = 'CECILL-1.1',
  _cecill20 = 'CECILL-2.0',
  _cecill21 = 'CECILL-2.1',
  _cecillB = 'CECILL-B',
  _cecillC = 'CECILL-C',
  _clArtistic = 'ClArtistic',
  _cnriJython = 'CNRI-Jython',
  _cnriPythonGplCompatible = 'CNRI-Python-GPL-Compatible',
  _cnriPython = 'CNRI-Python',
  _condor11 = 'Condor-1.1',
  _cpal10 = 'CPAL-1.0',
  _cpl10 = 'CPL-1.0',
  _cpol102 = 'CPOL-1.02',
  _crossword = 'Crossword',
  _crystalStacker = 'CrystalStacker',
  _cuaOpl10 = 'CUA-OPL-1.0',
  _cube = 'Cube',
  _curl = 'curl',
  _dFsl10 = 'D-FSL-1.0',
  _diffmark = 'diffmark',
  _doc = 'DOC',
  _dotseqn = 'Dotseqn',
  _dsdp = 'DSDP',
  _dvipdfm = 'dvipdfm',
  _ecl10 = 'ECL-1.0',
  _ecl20 = 'ECL-2.0',
  _efl10 = 'EFL-1.0',
  _efl20 = 'EFL-2.0',
  _eGenix = 'eGenix',
  _entessa = 'Entessa',
  _epl10 = 'EPL-1.0',
  _epl20 = 'EPL-2.0',
  _erlPl11 = 'ErlPL-1.1',
  _euDatagrid = 'EUDatagrid',
  _eupl10 = 'EUPL-1.0',
  _eupl11 = 'EUPL-1.1',
  _eupl12 = 'EUPL-1.2',
  _eurosym = 'Eurosym',
  _fair = 'Fair',
  _frameworx10 = 'Frameworx-1.0',
  _freeImage = 'FreeImage',
  _fsfap = 'FSFAP',
  _fsful = 'FSFUL',
  _fsfullr = 'FSFULLR',
  _ftl = 'FTL',
  _gfdl11Only = 'GFDL-1.1-only',
  _gfdl11OrLater = 'GFDL-1.1-or-later',
  _gfdl12Only = 'GFDL-1.2-only',
  _gfdl12OrLater = 'GFDL-1.2-or-later',
  _gfdl13Only = 'GFDL-1.3-only',
  _gfdl13OrLater = 'GFDL-1.3-or-later',
  _giftware = 'Giftware',
  _gl2Ps = 'GL2PS',
  _glide = 'Glide',
  _glulxe = 'Glulxe',
  _gnuplot = 'gnuplot',
  _gpl10Only = 'GPL-1.0-only',
  _gpl10OrLater = 'GPL-1.0-or-later',
  _gpl20Only = 'GPL-2.0-only',
  _gpl20OrLater = 'GPL-2.0-or-later',
  _gpl30Only = 'GPL-3.0-only',
  _gpl30OrLater = 'GPL-3.0-or-later',
  _gSoap13B = 'gSOAP-1.3b',
  _haskellReport = 'HaskellReport',
  _hpnd = 'HPND',
  _ibmPibs = 'IBM-pibs',
  _icu = 'ICU',
  _ijg = 'IJG',
  _imageMagick = 'ImageMagick',
  _iMatix = 'iMatix',
  _imlib2 = 'Imlib2',
  _infoZip = 'Info-ZIP',
  _intelAcpi = 'Intel-ACPI',
  _intel = 'Intel',
  _interbase10 = 'Interbase-1.0',
  _ipa = 'IPA',
  _ipl10 = 'IPL-1.0',
  _isc = 'ISC',
  _jasPer20 = 'JasPer-2.0',
  _json = 'JSON',
  _lal12 = 'LAL-1.2',
  _lal13 = 'LAL-1.3',
  _latex2E = 'Latex2e',
  _leptonica = 'Leptonica',
  _lgpl20Only = 'LGPL-2.0-only',
  _lgpl20OrLater = 'LGPL-2.0-or-later',
  _lgpl21Only = 'LGPL-2.1-only',
  _lgpl21OrLater = 'LGPL-2.1-or-later',
  _lgpl30Only = 'LGPL-3.0-only',
  _lgpl30OrLater = 'LGPL-3.0-or-later',
  _lgpllr = 'LGPLLR',
  _libpng = 'Libpng',
  _libtiff = 'libtiff',
  _liLiQP11 = 'LiLiQ-P-1.1',
  _liLiQR11 = 'LiLiQ-R-1.1',
  _liLiQRplus11 = 'LiLiQ-Rplus-1.1',
  _linuxOpenIb = 'Linux-OpenIB',
  _lpl10 = 'LPL-1.0',
  _lpl102 = 'LPL-1.02',
  _lppl10 = 'LPPL-1.0',
  _lppl11 = 'LPPL-1.1',
  _lppl12 = 'LPPL-1.2',
  _lppl13A = 'LPPL-1.3a',
  _lppl13C = 'LPPL-1.3c',
  _makeIndex = 'MakeIndex',
  _mirOs = 'MirOS',
  _mit0 = 'MIT-0',
  _mitAdvertising = 'MIT-advertising',
  _mitCmu = 'MIT-CMU',
  _mitEnna = 'MIT-enna',
  _mitFeh = 'MIT-feh',
  _mit = 'MIT',
  _mitnfa = 'MITNFA',
  _motosoto = 'Motosoto',
  _mpich2 = 'mpich2',
  _mpl10 = 'MPL-1.0',
  _mpl11 = 'MPL-1.1',
  _mpl20NoCopyleftException = 'MPL-2.0-no-copyleft-exception',
  _mpl20 = 'MPL-2.0',
  _msPl = 'MS-PL',
  _msRl = 'MS-RL',
  _mtll = 'MTLL',
  _multics = 'Multics',
  _mup = 'Mup',
  _nasa13 = 'NASA-1.3',
  _naumen = 'Naumen',
  _nbpl10 = 'NBPL-1.0',
  _ncsa = 'NCSA',
  _netSnmp = 'Net-SNMP',
  _netCdf = 'NetCDF',
  _newsletr = 'Newsletr',
  _ngpl = 'NGPL',
  _nlod10 = 'NLOD-1.0',
  _nlpl = 'NLPL',
  _nokia = 'Nokia',
  _nosl = 'NOSL',
  _noweb = 'Noweb',
  _npl10 = 'NPL-1.0',
  _npl11 = 'NPL-1.1',
  _nposl30 = 'NPOSL-3.0',
  _nrl = 'NRL',
  _ntp = 'NTP',
  _occtPl = 'OCCT-PL',
  _oclc20 = 'OCLC-2.0',
  _oDbL10 = 'ODbL-1.0',
  _ofl10 = 'OFL-1.0',
  _ofl11 = 'OFL-1.1',
  _ogtsl = 'OGTSL',
  _oldap11 = 'OLDAP-1.1',
  _oldap12 = 'OLDAP-1.2',
  _oldap13 = 'OLDAP-1.3',
  _oldap14 = 'OLDAP-1.4',
  _oldap201 = 'OLDAP-2.0.1',
  _oldap20 = 'OLDAP-2.0',
  _oldap21 = 'OLDAP-2.1',
  _oldap221 = 'OLDAP-2.2.1',
  _oldap222 = 'OLDAP-2.2.2',
  _oldap22 = 'OLDAP-2.2',
  _oldap23 = 'OLDAP-2.3',
  _oldap24 = 'OLDAP-2.4',
  _oldap25 = 'OLDAP-2.5',
  _oldap26 = 'OLDAP-2.6',
  _oldap27 = 'OLDAP-2.7',
  _oldap28 = 'OLDAP-2.8',
  _oml = 'OML',
  _openSsl = 'OpenSSL',
  _opl10 = 'OPL-1.0',
  _osetPl21 = 'OSET-PL-2.1',
  _osl10 = 'OSL-1.0',
  _osl11 = 'OSL-1.1',
  _osl20 = 'OSL-2.0',
  _osl21 = 'OSL-2.1',
  _osl30 = 'OSL-3.0',
  _pddl10 = 'PDDL-1.0',
  _php30 = 'PHP-3.0',
  _php301 = 'PHP-3.01',
  _plexus = 'Plexus',
  _postgreSql = 'PostgreSQL',
  _psfrag = 'psfrag',
  _psutils = 'psutils',
  _python20 = 'Python-2.0',
  _qhull = 'Qhull',
  _qpl10 = 'QPL-1.0',
  _rdisc = 'Rdisc',
  _rHeCos11 = 'RHeCos-1.1',
  _rpl11 = 'RPL-1.1',
  _rpl15 = 'RPL-1.5',
  _rpsl10 = 'RPSL-1.0',
  _rsaMd = 'RSA-MD',
  _rscpl = 'RSCPL',
  _ruby = 'Ruby',
  _saxPd = 'SAX-PD',
  _saxpath = 'Saxpath',
  _scea = 'SCEA',
  _sendmail = 'Sendmail',
  _sgiB10 = 'SGI-B-1.0',
  _sgiB11 = 'SGI-B-1.1',
  _sgiB20 = 'SGI-B-2.0',
  _simPl20 = 'SimPL-2.0',
  _sissl12 = 'SISSL-1.2',
  _sissl = 'SISSL',
  _sleepycat = 'Sleepycat',
  _smlnj = 'SMLNJ',
  _smppl = 'SMPPL',
  _snia = 'SNIA',
  _spencer86 = 'Spencer-86',
  _spencer94 = 'Spencer-94',
  _spencer99 = 'Spencer-99',
  _spl10 = 'SPL-1.0',
  _sugarCrm113 = 'SugarCRM-1.1.3',
  _swl = 'SWL',
  _tcl = 'TCL',
  _tcpWrappers = 'TCP-wrappers',
  _tMate = 'TMate',
  _torque11 = 'TORQUE-1.1',
  _tosl = 'TOSL',
  _unicodeDfs2015 = 'Unicode-DFS-2015',
  _unicodeDfs2016 = 'Unicode-DFS-2016',
  _unicodeTou = 'Unicode-TOU',
  _unlicense = 'Unlicense',
  _upl10 = 'UPL-1.0',
  _vim = 'Vim',
  _vostrom = 'VOSTROM',
  _vsl10 = 'VSL-1.0',
  _w3C19980720 = 'W3C-19980720',
  _w3C20150513 = 'W3C-20150513',
  _w3C = 'W3C',
  _watcom10 = 'Watcom-1.0',
  _wsuipa = 'Wsuipa',
  _wtfpl = 'WTFPL',
  _x11 = 'X11',
  _xerox = 'Xerox',
  _xFree8611 = 'XFree86-1.1',
  _xinetd = 'xinetd',
  _xnet = 'Xnet',
  _xpp = 'xpp',
  _xSkat = 'XSkat',
  _ypl10 = 'YPL-1.0',
  _ypl11 = 'YPL-1.1',
  _zed = 'Zed',
  _zend20 = 'Zend-2.0',
  _zimbra13 = 'Zimbra-1.3',
  _zimbra14 = 'Zimbra-1.4',
  _zlibAcknowledgement = 'zlib-acknowledgement',
  _zlib = 'Zlib',
  _zpl11 = 'ZPL-1.1',
  _zpl20 = 'ZPL-2.0',
  _zpl21 = 'ZPL-2.1',
}
import {createEnumType} from '../../EnumType';
import {IDomainResource} from './IDomainResource';

export interface IImplementationGuide extends IDomainResource {
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
                     * May be used to represent additional information that is not part of the basic definition of the resource and that modifies the understanding of the element that contains it and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

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
   * The content was developed with a focus and intent of supporting the contexts that are listed. These contexts may be general categories (gender, age, ...) or may be references to specific programs (insurance plans, studies, ...) and may be used to assist with indexing and searching for appropriate implementation guide instances.
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
   * The version(s) of the FHIR specification that this ImplementationGuide targets - e.g. describes how to use. The value of this element is the formal version of the specification, without the revision number, e.g. [publication].[major].[minor], which is 4.0.0. for this version.
   */
  fhirVersion?: ImplementationGuideFhirVersionKind[];

  /**
   * Extensions for fhirVersion
   */
  _fhirVersion?: IElement[];

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

export const RTTI_ImplementationGuide: t.Type<IImplementationGuide> =
  t.recursion('IImplementationGuide', () =>
    t.intersection([
      t.type({
        resourceType: t.literal('ImplementationGuide'),
      }),
      t.partial({
        id: RTTI_id,
        meta: RTTI_Meta,
        implicitRules: RTTI_uri,
        _implicitRules: RTTI_Element,
        language: RTTI_code,
        _language: RTTI_Element,
        text: RTTI_Narrative,
        contained: t.array(RTTI_ResourceList),
        extension: t.array(RTTI_Extension),
        modifierExtension: t.array(RTTI_Extension),
        url: RTTI_uri,
        _url: RTTI_Element,
        version: t.string,
        _version: RTTI_Element,
        name: t.string,
        _name: RTTI_Element,
        title: t.string,
        _title: RTTI_Element,
        status: createEnumType<ImplementationGuideStatusKind>(
          ImplementationGuideStatusKind,
          'ImplementationGuideStatusKind',
        ),
        _status: RTTI_Element,
        experimental: t.boolean,
        _experimental: RTTI_Element,
        date: RTTI_dateTime,
        _date: RTTI_Element,
        publisher: t.string,
        _publisher: RTTI_Element,
        contact: t.array(RTTI_ContactDetail),
        description: RTTI_markdown,
        _description: RTTI_Element,
        useContext: t.array(RTTI_UsageContext),
        jurisdiction: t.array(RTTI_CodeableConcept),
        copyright: RTTI_markdown,
        _copyright: RTTI_Element,
        packageId: RTTI_id,
        _packageId: RTTI_Element,
        license: createEnumType<ImplementationGuideLicenseKind>(
          ImplementationGuideLicenseKind,
          'ImplementationGuideLicenseKind',
        ),
        _license: RTTI_Element,
        fhirVersion: t.array(
          createEnumType<ImplementationGuideFhirVersionKind>(
            ImplementationGuideFhirVersionKind,
            'ImplementationGuideFhirVersionKind',
          ),
        ),
        _fhirVersion: t.array(RTTI_Element),
        dependsOn: t.array(RTTI_ImplementationGuide_DependsOn),
        global: t.array(RTTI_ImplementationGuide_Global),
        definition: RTTI_ImplementationGuide_Definition,
        manifest: RTTI_ImplementationGuide_Manifest,
      }),
    ]),
  );
