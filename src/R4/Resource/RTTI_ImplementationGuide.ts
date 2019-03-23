
import * as t from 'io-ts';
import {RTTI_Meta, IMeta} from './RTTI_Meta';
import {RTTI_Element, IElement} from './RTTI_Element';
import {RTTI_Narrative, INarrative} from './RTTI_Narrative';
import {RTTI_ResourceList, IResourceList} from '../Union/RTTI_ResourceList';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_ContactDetail, IContactDetail} from './RTTI_ContactDetail';
import {RTTI_UsageContext, IUsageContext} from './RTTI_UsageContext';
import {RTTI_CodeableConcept, ICodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_ImplementationGuide_DependsOn, IImplementationGuide_DependsOn} from './RTTI_ImplementationGuide_DependsOn';
import {RTTI_ImplementationGuide_Global, IImplementationGuide_Global} from './RTTI_ImplementationGuide_Global';
import {RTTI_ImplementationGuide_Definition, IImplementationGuide_Definition} from './RTTI_ImplementationGuide_Definition';
import {RTTI_ImplementationGuide_Manifest, IImplementationGuide_Manifest} from './RTTI_ImplementationGuide_Manifest';
import { createEnumType } from '../../EnumType'

export enum ImplementationGuideFhirVersionKind {
v001 = '0.01',
v005 = '0.05',
v006 = '0.06',
v011 = '0.11',
v0080 = '0.0.80',
v0081 = '0.0.81',
v0082 = '0.0.82',
v040 = '0.4.0',
v050 = '0.5.0',
v100 = '1.0.0',
v101 = '1.0.1',
v102 = '1.0.2',
v110 = '1.1.0',
v140 = '1.4.0',
v160 = '1.6.0',
v180 = '1.8.0',
v300 = '3.0.0',
v301 = '3.0.1',
v330 = '3.3.0',
v350 = '3.5.0',
v400 = '4.0.0'
            }
export enum ImplementationGuideStatusKind {
                draft = 'draft',
active = 'active',
retired = 'retired',
unknown = 'unknown'
            }
export enum ImplementationGuideLicenseKind {
                notOpenSource = 'not-open-source',
Bsd = '0BSD',
aal = 'AAL',
abstyles = 'Abstyles',
adobe2006 = 'Adobe-2006',
adobeGlyph = 'Adobe-Glyph',
adsl = 'ADSL',
afl11 = 'AFL-1.1',
afl12 = 'AFL-1.2',
afl20 = 'AFL-2.0',
afl21 = 'AFL-2.1',
afl30 = 'AFL-3.0',
afmparse = 'Afmparse',
agpl10Only = 'AGPL-1.0-only',
agpl10OrLater = 'AGPL-1.0-or-later',
agpl30Only = 'AGPL-3.0-only',
agpl30OrLater = 'AGPL-3.0-or-later',
aladdin = 'Aladdin',
amdplpa = 'AMDPLPA',
aml = 'AML',
ampas = 'AMPAS',
antlrPd = 'ANTLR-PD',
apache10 = 'Apache-1.0',
apache11 = 'Apache-1.1',
apache20 = 'Apache-2.0',
apafml = 'APAFML',
apl10 = 'APL-1.0',
apsl10 = 'APSL-1.0',
apsl11 = 'APSL-1.1',
apsl12 = 'APSL-1.2',
apsl20 = 'APSL-2.0',
artistic10Cl8 = 'Artistic-1.0-cl8',
artistic10Perl = 'Artistic-1.0-Perl',
artistic10 = 'Artistic-1.0',
artistic20 = 'Artistic-2.0',
bahyph = 'Bahyph',
barr = 'Barr',
beerware = 'Beerware',
bitTorrent10 = 'BitTorrent-1.0',
bitTorrent11 = 'BitTorrent-1.1',
borceux = 'Borceux',
bsd1Clause = 'BSD-1-Clause',
bsd2ClauseFreeBsd = 'BSD-2-Clause-FreeBSD',
bsd2ClauseNetBsd = 'BSD-2-Clause-NetBSD',
bsd2ClausePatent = 'BSD-2-Clause-Patent',
bsd2Clause = 'BSD-2-Clause',
bsd3ClauseAttribution = 'BSD-3-Clause-Attribution',
bsd3ClauseClear = 'BSD-3-Clause-Clear',
bsd3ClauseLbnl = 'BSD-3-Clause-LBNL',
bsd3ClauseNoNuclearLicense2014 = 'BSD-3-Clause-No-Nuclear-License-2014',
bsd3ClauseNoNuclearLicense = 'BSD-3-Clause-No-Nuclear-License',
bsd3ClauseNoNuclearWarranty = 'BSD-3-Clause-No-Nuclear-Warranty',
bsd3Clause = 'BSD-3-Clause',
bsd4ClauseUc = 'BSD-4-Clause-UC',
bsd4Clause = 'BSD-4-Clause',
bsdProtection = 'BSD-Protection',
bsdSourceCode = 'BSD-Source-Code',
bsl10 = 'BSL-1.0',
bzip2105 = 'bzip2-1.0.5',
bzip2106 = 'bzip2-1.0.6',
caldera = 'Caldera',
catosl11 = 'CATOSL-1.1',
ccBy10 = 'CC-BY-1.0',
ccBy20 = 'CC-BY-2.0',
ccBy25 = 'CC-BY-2.5',
ccBy30 = 'CC-BY-3.0',
ccBy40 = 'CC-BY-4.0',
ccByNc10 = 'CC-BY-NC-1.0',
ccByNc20 = 'CC-BY-NC-2.0',
ccByNc25 = 'CC-BY-NC-2.5',
ccByNc30 = 'CC-BY-NC-3.0',
ccByNc40 = 'CC-BY-NC-4.0',
ccByNcNd10 = 'CC-BY-NC-ND-1.0',
ccByNcNd20 = 'CC-BY-NC-ND-2.0',
ccByNcNd25 = 'CC-BY-NC-ND-2.5',
ccByNcNd30 = 'CC-BY-NC-ND-3.0',
ccByNcNd40 = 'CC-BY-NC-ND-4.0',
ccByNcSa10 = 'CC-BY-NC-SA-1.0',
ccByNcSa20 = 'CC-BY-NC-SA-2.0',
ccByNcSa25 = 'CC-BY-NC-SA-2.5',
ccByNcSa30 = 'CC-BY-NC-SA-3.0',
ccByNcSa40 = 'CC-BY-NC-SA-4.0',
ccByNd10 = 'CC-BY-ND-1.0',
ccByNd20 = 'CC-BY-ND-2.0',
ccByNd25 = 'CC-BY-ND-2.5',
ccByNd30 = 'CC-BY-ND-3.0',
ccByNd40 = 'CC-BY-ND-4.0',
ccBySa10 = 'CC-BY-SA-1.0',
ccBySa20 = 'CC-BY-SA-2.0',
ccBySa25 = 'CC-BY-SA-2.5',
ccBySa30 = 'CC-BY-SA-3.0',
ccBySa40 = 'CC-BY-SA-4.0',
cc010 = 'CC0-1.0',
cddl10 = 'CDDL-1.0',
cddl11 = 'CDDL-1.1',
cdlaPermissive10 = 'CDLA-Permissive-1.0',
cdlaSharing10 = 'CDLA-Sharing-1.0',
cecill10 = 'CECILL-1.0',
cecill11 = 'CECILL-1.1',
cecill20 = 'CECILL-2.0',
cecill21 = 'CECILL-2.1',
cecillB = 'CECILL-B',
cecillC = 'CECILL-C',
clArtistic = 'ClArtistic',
cnriJython = 'CNRI-Jython',
cnriPythonGplCompatible = 'CNRI-Python-GPL-Compatible',
cnriPython = 'CNRI-Python',
condor11 = 'Condor-1.1',
cpal10 = 'CPAL-1.0',
cpl10 = 'CPL-1.0',
cpol102 = 'CPOL-1.02',
crossword = 'Crossword',
crystalStacker = 'CrystalStacker',
cuaOpl10 = 'CUA-OPL-1.0',
cube = 'Cube',
curl = 'curl',
dFsl10 = 'D-FSL-1.0',
diffmark = 'diffmark',
doc = 'DOC',
dotseqn = 'Dotseqn',
dsdp = 'DSDP',
dvipdfm = 'dvipdfm',
ecl10 = 'ECL-1.0',
ecl20 = 'ECL-2.0',
efl10 = 'EFL-1.0',
efl20 = 'EFL-2.0',
eGenix = 'eGenix',
entessa = 'Entessa',
epl10 = 'EPL-1.0',
epl20 = 'EPL-2.0',
erlPl11 = 'ErlPL-1.1',
euDatagrid = 'EUDatagrid',
eupl10 = 'EUPL-1.0',
eupl11 = 'EUPL-1.1',
eupl12 = 'EUPL-1.2',
eurosym = 'Eurosym',
fair = 'Fair',
frameworx10 = 'Frameworx-1.0',
freeImage = 'FreeImage',
fsfap = 'FSFAP',
fsful = 'FSFUL',
fsfullr = 'FSFULLR',
ftl = 'FTL',
gfdl11Only = 'GFDL-1.1-only',
gfdl11OrLater = 'GFDL-1.1-or-later',
gfdl12Only = 'GFDL-1.2-only',
gfdl12OrLater = 'GFDL-1.2-or-later',
gfdl13Only = 'GFDL-1.3-only',
gfdl13OrLater = 'GFDL-1.3-or-later',
giftware = 'Giftware',
gl2Ps = 'GL2PS',
glide = 'Glide',
glulxe = 'Glulxe',
gnuplot = 'gnuplot',
gpl10Only = 'GPL-1.0-only',
gpl10OrLater = 'GPL-1.0-or-later',
gpl20Only = 'GPL-2.0-only',
gpl20OrLater = 'GPL-2.0-or-later',
gpl30Only = 'GPL-3.0-only',
gpl30OrLater = 'GPL-3.0-or-later',
gSoap13B = 'gSOAP-1.3b',
haskellReport = 'HaskellReport',
hpnd = 'HPND',
ibmPibs = 'IBM-pibs',
icu = 'ICU',
ijg = 'IJG',
imageMagick = 'ImageMagick',
iMatix = 'iMatix',
imlib2 = 'Imlib2',
infoZip = 'Info-ZIP',
intelAcpi = 'Intel-ACPI',
intel = 'Intel',
interbase10 = 'Interbase-1.0',
ipa = 'IPA',
ipl10 = 'IPL-1.0',
isc = 'ISC',
jasPer20 = 'JasPer-2.0',
json = 'JSON',
lal12 = 'LAL-1.2',
lal13 = 'LAL-1.3',
latex2E = 'Latex2e',
leptonica = 'Leptonica',
lgpl20Only = 'LGPL-2.0-only',
lgpl20OrLater = 'LGPL-2.0-or-later',
lgpl21Only = 'LGPL-2.1-only',
lgpl21OrLater = 'LGPL-2.1-or-later',
lgpl30Only = 'LGPL-3.0-only',
lgpl30OrLater = 'LGPL-3.0-or-later',
lgpllr = 'LGPLLR',
libpng = 'Libpng',
libtiff = 'libtiff',
liLiQP11 = 'LiLiQ-P-1.1',
liLiQR11 = 'LiLiQ-R-1.1',
liLiQRplus11 = 'LiLiQ-Rplus-1.1',
linuxOpenIb = 'Linux-OpenIB',
lpl10 = 'LPL-1.0',
lpl102 = 'LPL-1.02',
lppl10 = 'LPPL-1.0',
lppl11 = 'LPPL-1.1',
lppl12 = 'LPPL-1.2',
lppl13A = 'LPPL-1.3a',
lppl13C = 'LPPL-1.3c',
makeIndex = 'MakeIndex',
mirOs = 'MirOS',
mit0 = 'MIT-0',
mitAdvertising = 'MIT-advertising',
mitCmu = 'MIT-CMU',
mitEnna = 'MIT-enna',
mitFeh = 'MIT-feh',
mit = 'MIT',
mitnfa = 'MITNFA',
motosoto = 'Motosoto',
mpich2 = 'mpich2',
mpl10 = 'MPL-1.0',
mpl11 = 'MPL-1.1',
mpl20NoCopyleftException = 'MPL-2.0-no-copyleft-exception',
mpl20 = 'MPL-2.0',
msPl = 'MS-PL',
msRl = 'MS-RL',
mtll = 'MTLL',
multics = 'Multics',
mup = 'Mup',
nasa13 = 'NASA-1.3',
naumen = 'Naumen',
nbpl10 = 'NBPL-1.0',
ncsa = 'NCSA',
netSnmp = 'Net-SNMP',
netCdf = 'NetCDF',
newsletr = 'Newsletr',
ngpl = 'NGPL',
nlod10 = 'NLOD-1.0',
nlpl = 'NLPL',
nokia = 'Nokia',
nosl = 'NOSL',
noweb = 'Noweb',
npl10 = 'NPL-1.0',
npl11 = 'NPL-1.1',
nposl30 = 'NPOSL-3.0',
nrl = 'NRL',
ntp = 'NTP',
occtPl = 'OCCT-PL',
oclc20 = 'OCLC-2.0',
oDbL10 = 'ODbL-1.0',
ofl10 = 'OFL-1.0',
ofl11 = 'OFL-1.1',
ogtsl = 'OGTSL',
oldap11 = 'OLDAP-1.1',
oldap12 = 'OLDAP-1.2',
oldap13 = 'OLDAP-1.3',
oldap14 = 'OLDAP-1.4',
oldap201 = 'OLDAP-2.0.1',
oldap20 = 'OLDAP-2.0',
oldap21 = 'OLDAP-2.1',
oldap221 = 'OLDAP-2.2.1',
oldap222 = 'OLDAP-2.2.2',
oldap22 = 'OLDAP-2.2',
oldap23 = 'OLDAP-2.3',
oldap24 = 'OLDAP-2.4',
oldap25 = 'OLDAP-2.5',
oldap26 = 'OLDAP-2.6',
oldap27 = 'OLDAP-2.7',
oldap28 = 'OLDAP-2.8',
oml = 'OML',
openSsl = 'OpenSSL',
opl10 = 'OPL-1.0',
osetPl21 = 'OSET-PL-2.1',
osl10 = 'OSL-1.0',
osl11 = 'OSL-1.1',
osl20 = 'OSL-2.0',
osl21 = 'OSL-2.1',
osl30 = 'OSL-3.0',
pddl10 = 'PDDL-1.0',
php30 = 'PHP-3.0',
php301 = 'PHP-3.01',
plexus = 'Plexus',
postgreSql = 'PostgreSQL',
psfrag = 'psfrag',
psutils = 'psutils',
python20 = 'Python-2.0',
qhull = 'Qhull',
qpl10 = 'QPL-1.0',
rdisc = 'Rdisc',
rHeCos11 = 'RHeCos-1.1',
rpl11 = 'RPL-1.1',
rpl15 = 'RPL-1.5',
rpsl10 = 'RPSL-1.0',
rsaMd = 'RSA-MD',
rscpl = 'RSCPL',
ruby = 'Ruby',
saxPd = 'SAX-PD',
saxpath = 'Saxpath',
scea = 'SCEA',
sendmail = 'Sendmail',
sgiB10 = 'SGI-B-1.0',
sgiB11 = 'SGI-B-1.1',
sgiB20 = 'SGI-B-2.0',
simPl20 = 'SimPL-2.0',
sissl12 = 'SISSL-1.2',
sissl = 'SISSL',
sleepycat = 'Sleepycat',
smlnj = 'SMLNJ',
smppl = 'SMPPL',
snia = 'SNIA',
spencer86 = 'Spencer-86',
spencer94 = 'Spencer-94',
spencer99 = 'Spencer-99',
spl10 = 'SPL-1.0',
sugarCrm113 = 'SugarCRM-1.1.3',
swl = 'SWL',
tcl = 'TCL',
tcpWrappers = 'TCP-wrappers',
tMate = 'TMate',
torque11 = 'TORQUE-1.1',
tosl = 'TOSL',
unicodeDfs2015 = 'Unicode-DFS-2015',
unicodeDfs2016 = 'Unicode-DFS-2016',
unicodeTou = 'Unicode-TOU',
unlicense = 'Unlicense',
upl10 = 'UPL-1.0',
vim = 'Vim',
vostrom = 'VOSTROM',
vsl10 = 'VSL-1.0',
w3C19980720 = 'W3C-19980720',
w3C20150513 = 'W3C-20150513',
w3C = 'W3C',
watcom10 = 'Watcom-1.0',
wsuipa = 'Wsuipa',
wtfpl = 'WTFPL',
x11 = 'X11',
xerox = 'Xerox',
xFree8611 = 'XFree86-1.1',
xinetd = 'xinetd',
xnet = 'Xnet',
xpp = 'xpp',
xSkat = 'XSkat',
ypl10 = 'YPL-1.0',
ypl11 = 'YPL-1.1',
zed = 'Zed',
zend20 = 'Zend-2.0',
zimbra13 = 'Zimbra-1.3',
zimbra14 = 'Zimbra-1.4',
zlibAcknowledgement = 'zlib-acknowledgement',
zlib = 'Zlib',
zpl11 = 'ZPL-1.1',
zpl20 = 'ZPL-2.0',
zpl21 = 'ZPL-2.1'
            }
 

            export interface IImplementationGuide {
                
                    /**
                     * This is a ImplementationGuide resource
                     */
                    resourceType: 'ImplementationGuide';
                    
                
                    /**
                     * The logical id of the resource, as used in the URL for the resource. Once assigned, this value never changes.
                     */
                    id? : string;
                    

                    /**
                     * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
                     */
                    meta? : IMeta;
                    

                    /**
                     * A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content. Often, this is a reference to an implementation guide that defines the special rules along with other profiles etc.
                     */
                    implicitRules? : string;
                    

                    /**
                     * Extensions for implicitRules
                     */
                    _implicitRules? : IElement;
                    

                    /**
                     * The base language in which the resource is written.
                     */
                    language? : string;
                    

                    /**
                     * Extensions for language
                     */
                    _language? : IElement;
                    

                    /**
                     * A human-readable narrative that contains a summary of the resource and can be used to represent the content of the resource to a human. The narrative need not encode all the structured data, but is required to contain sufficient detail to make it "clinically safe" for a human to just read the narrative. Resource definitions may define what content should be represented in the narrative to ensure clinical safety.
                     */
                    text? : INarrative;
                    

                    /**
                     * These resources do not have an independent existence apart from the resource that contains them - they cannot be identified independently, and nor can they have their own independent transaction scope.
                     */
                    contained? : IResourceList[];
                    

                    /**
                     * May be used to represent additional information that is not part of the basic definition of the resource. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
                     */
                    extension? : IExtension[];
                    

                    /**
                     * May be used to represent additional information that is not part of the basic definition of the resource and that modifies the understanding of the element that contains it and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).
                     */
                    modifierExtension? : IExtension[];
                    

                    /**
                     * An absolute URI that is used to identify this implementation guide when it is referenced in a specification, model, design or an instance; also called its canonical identifier. This SHOULD be globally unique and SHOULD be a literal address at which at which an authoritative instance of this implementation guide is (or will be) published. This URL can be the target of a canonical reference. It SHALL remain the same when the implementation guide is stored on different servers.
                     */
                    url? : string;
                    

                    /**
                     * Extensions for url
                     */
                    _url? : IElement;
                    

                    /**
                     * The identifier that is used to identify this version of the implementation guide when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the implementation guide author and is not expected to be globally unique. For example, it might be a timestamp (e.g. yyyymmdd) if a managed version is not available. There is also no expectation that versions can be placed in a lexicographical sequence.
                     */
                    version? : string;
                    

                    /**
                     * Extensions for version
                     */
                    _version? : IElement;
                    

                    /**
                     * A natural language name identifying the implementation guide. This name should be usable as an identifier for the module by machine processing applications such as code generation.
                     */
                    name? : string;
                    

                    /**
                     * Extensions for name
                     */
                    _name? : IElement;
                    

                    /**
                     * A short, descriptive, user-friendly title for the implementation guide.
                     */
                    title? : string;
                    

                    /**
                     * Extensions for title
                     */
                    _title? : IElement;
                    

                    /**
                     * The status of this implementation guide. Enables tracking the life-cycle of the content.
                     */
                    status? : ImplementationGuideStatusKind;
                    

                    /**
                     * Extensions for status
                     */
                    _status? : IElement;
                    

                    /**
                     * A Boolean value to indicate that this implementation guide is authored for testing purposes (or education/evaluation/marketing) and is not intended to be used for genuine usage.
                     */
                    experimental? : boolean;
                    

                    /**
                     * Extensions for experimental
                     */
                    _experimental? : IElement;
                    

                    /**
                     * The date  (and optionally time) when the implementation guide was published. The date must change when the business version changes and it must change if the status code changes. In addition, it should change when the substantive content of the implementation guide changes.
                     */
                    date? : string;
                    

                    /**
                     * Extensions for date
                     */
                    _date? : IElement;
                    

                    /**
                     * The name of the organization or individual that published the implementation guide.
                     */
                    publisher? : string;
                    

                    /**
                     * Extensions for publisher
                     */
                    _publisher? : IElement;
                    

                    /**
                     * Contact details to assist a user in finding and communicating with the publisher.
                     */
                    contact? : IContactDetail[];
                    

                    /**
                     * A free text natural language description of the implementation guide from a consumer's perspective.
                     */
                    description? : string;
                    

                    /**
                     * Extensions for description
                     */
                    _description? : IElement;
                    

                    /**
                     * The content was developed with a focus and intent of supporting the contexts that are listed. These contexts may be general categories (gender, age, ...) or may be references to specific programs (insurance plans, studies, ...) and may be used to assist with indexing and searching for appropriate implementation guide instances.
                     */
                    useContext? : IUsageContext[];
                    

                    /**
                     * A legal or geographic region in which the implementation guide is intended to be used.
                     */
                    jurisdiction? : ICodeableConcept[];
                    

                    /**
                     * A copyright statement relating to the implementation guide and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the implementation guide.
                     */
                    copyright? : string;
                    

                    /**
                     * Extensions for copyright
                     */
                    _copyright? : IElement;
                    

                    /**
                     * The NPM package name for this Implementation Guide, used in the NPM package distribution, which is the primary mechanism by which FHIR based tooling manages IG dependencies. This value must be globally unique, and should be assigned with care.
                     */
                    packageId? : string;
                    

                    /**
                     * Extensions for packageId
                     */
                    _packageId? : IElement;
                    

                    /**
                     * The license that applies to this Implementation Guide, using an SPDX license code, or 'not-open-source'.
                     */
                    license? : ImplementationGuideLicenseKind;
                    

                    /**
                     * Extensions for license
                     */
                    _license? : IElement;
                    

                    /**
                     * The version(s) of the FHIR specification that this ImplementationGuide targets - e.g. describes how to use. The value of this element is the formal version of the specification, without the revision number, e.g. [publication].[major].[minor], which is 4.0.0. for this version.
                     */
                    fhirVersion? : ImplementationGuideFhirVersionKind[];
                    

                    /**
                     * Extensions for fhirVersion
                     */
                    _fhirVersion? : IElement[];
                    

                    /**
                     * Another implementation guide that this implementation depends on. Typically, an implementation guide uses value sets, profiles etc.defined in other implementation guides.
                     */
                    dependsOn? : IImplementationGuide_DependsOn[];
                    

                    /**
                     * A set of profiles that all resources covered by this implementation guide must conform to.
                     */
                    global? : IImplementationGuide_Global[];
                    

                    /**
                     * The information needed by an IG publisher tool to publish the whole implementation guide.
                     */
                    definition? : IImplementationGuide_Definition;
                    

                    /**
                     * Information about an assembled implementation guide, created by the publication tooling.
                     */
                    manifest? : IImplementationGuide_Manifest;
                    
            }
        


        export const RTTI_ImplementationGuide: t.Type<IImplementationGuide> = t.recursion( 'IImplementationGuide', () =>
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
status: createEnumType<ImplementationGuideStatusKind>(ImplementationGuideStatusKind, 'ImplementationGuideStatusKind'),
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
license: createEnumType<ImplementationGuideLicenseKind>(ImplementationGuideLicenseKind, 'ImplementationGuideLicenseKind'),
_license: RTTI_Element,
fhirVersion: t.array(createEnumType<ImplementationGuideFhirVersionKind>(ImplementationGuideFhirVersionKind, 'ImplementationGuideFhirVersionKind')),
_fhirVersion: t.array(RTTI_Element),
dependsOn: t.array(RTTI_ImplementationGuide_DependsOn),
global: t.array(RTTI_ImplementationGuide_Global),
definition: RTTI_ImplementationGuide_Definition,
manifest: RTTI_ImplementationGuide_Manifest
        })
        
            ])
        );
        

        
