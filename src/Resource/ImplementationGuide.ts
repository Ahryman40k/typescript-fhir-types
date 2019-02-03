
        import { Code } from '../Scalar/Code';
import { CodeableConcept } from '../Resource/CodeableConcept';
import { ContactDetail } from '../Resource/ContactDetail';
import { DateTime } from '../Scalar/DateTime';
import { Element } from '../Resource/Element';
import { Extension } from '../Resource/Extension';
import { Id } from '../Scalar/Id';
import { ImplementationGuide_Definition } from '../Resource/ImplementationGuide_Definition';
import { ImplementationGuide_DependsOn } from '../Resource/ImplementationGuide_DependsOn';
import { ImplementationGuide_Global } from '../Resource/ImplementationGuide_Global';
import { ImplementationGuide_Manifest } from '../Resource/ImplementationGuide_Manifest';
import { Markdown } from '../Scalar/Markdown';
import { Meta } from '../Resource/Meta';
import { Narrative } from '../Resource/Narrative';
import { ResourceList } from '../Union/ResourceList';
import { Uri } from '../Scalar/Uri';
import { UsageContext } from '../Resource/UsageContext';

        export enum ImplementationGuideStatusKind {
                draft,
active,
retired,
unknown
            }
export enum ImplementationGuideLicenseKind {
                notOpenSource,
Bsd,
aal,
abstyles,
adobe2006,
adobeGlyph,
adsl,
afl11,
afl12,
afl20,
afl21,
afl30,
afmparse,
agpl10Only,
agpl10OrLater,
agpl30Only,
agpl30OrLater,
aladdin,
amdplpa,
aml,
ampas,
antlrPd,
apache10,
apache11,
apache20,
apafml,
apl10,
apsl10,
apsl11,
apsl12,
apsl20,
artistic10Cl8,
artistic10Perl,
artistic10,
artistic20,
bahyph,
barr,
beerware,
bitTorrent10,
bitTorrent11,
borceux,
bsd1Clause,
bsd2ClauseFreeBsd,
bsd2ClauseNetBsd,
bsd2ClausePatent,
bsd2Clause,
bsd3ClauseAttribution,
bsd3ClauseClear,
bsd3ClauseLbnl,
bsd3ClauseNoNuclearLicense2014,
bsd3ClauseNoNuclearLicense,
bsd3ClauseNoNuclearWarranty,
bsd3Clause,
bsd4ClauseUc,
bsd4Clause,
bsdProtection,
bsdSourceCode,
bsl10,
bzip2105,
bzip2106,
caldera,
catosl11,
ccBy10,
ccBy20,
ccBy25,
ccBy30,
ccBy40,
ccByNc10,
ccByNc20,
ccByNc25,
ccByNc30,
ccByNc40,
ccByNcNd10,
ccByNcNd20,
ccByNcNd25,
ccByNcNd30,
ccByNcNd40,
ccByNcSa10,
ccByNcSa20,
ccByNcSa25,
ccByNcSa30,
ccByNcSa40,
ccByNd10,
ccByNd20,
ccByNd25,
ccByNd30,
ccByNd40,
ccBySa10,
ccBySa20,
ccBySa25,
ccBySa30,
ccBySa40,
cc010,
cddl10,
cddl11,
cdlaPermissive10,
cdlaSharing10,
cecill10,
cecill11,
cecill20,
cecill21,
cecillB,
cecillC,
clArtistic,
cnriJython,
cnriPythonGplCompatible,
cnriPython,
condor11,
cpal10,
cpl10,
cpol102,
crossword,
crystalStacker,
cuaOpl10,
cube,
curl,
dFsl10,
diffmark,
doc,
dotseqn,
dsdp,
dvipdfm,
ecl10,
ecl20,
efl10,
efl20,
eGenix,
entessa,
epl10,
epl20,
erlPl11,
euDatagrid,
eupl10,
eupl11,
eupl12,
eurosym,
fair,
frameworx10,
freeImage,
fsfap,
fsful,
fsfullr,
ftl,
gfdl11Only,
gfdl11OrLater,
gfdl12Only,
gfdl12OrLater,
gfdl13Only,
gfdl13OrLater,
giftware,
gl2Ps,
glide,
glulxe,
gnuplot,
gpl10Only,
gpl10OrLater,
gpl20Only,
gpl20OrLater,
gpl30Only,
gpl30OrLater,
gSoap13B,
haskellReport,
hpnd,
ibmPibs,
icu,
ijg,
imageMagick,
iMatix,
imlib2,
infoZip,
intelAcpi,
intel,
interbase10,
ipa,
ipl10,
isc,
jasPer20,
json,
lal12,
lal13,
latex2E,
leptonica,
lgpl20Only,
lgpl20OrLater,
lgpl21Only,
lgpl21OrLater,
lgpl30Only,
lgpl30OrLater,
lgpllr,
libpng,
libtiff,
liLiQP11,
liLiQR11,
liLiQRplus11,
linuxOpenIb,
lpl10,
lpl102,
lppl10,
lppl11,
lppl12,
lppl13A,
lppl13C,
makeIndex,
mirOs,
mit0,
mitAdvertising,
mitCmu,
mitEnna,
mitFeh,
mit,
mitnfa,
motosoto,
mpich2,
mpl10,
mpl11,
mpl20NoCopyleftException,
mpl20,
msPl,
msRl,
mtll,
multics,
mup,
nasa13,
naumen,
nbpl10,
ncsa,
netSnmp,
netCdf,
newsletr,
ngpl,
nlod10,
nlpl,
nokia,
nosl,
noweb,
npl10,
npl11,
nposl30,
nrl,
ntp,
occtPl,
oclc20,
oDbL10,
ofl10,
ofl11,
ogtsl,
oldap11,
oldap12,
oldap13,
oldap14,
oldap201,
oldap20,
oldap21,
oldap221,
oldap222,
oldap22,
oldap23,
oldap24,
oldap25,
oldap26,
oldap27,
oldap28,
oml,
openSsl,
opl10,
osetPl21,
osl10,
osl11,
osl20,
osl21,
osl30,
pddl10,
php30,
php301,
plexus,
postgreSql,
psfrag,
psutils,
python20,
qhull,
qpl10,
rdisc,
rHeCos11,
rpl11,
rpl15,
rpsl10,
rsaMd,
rscpl,
ruby,
saxPd,
saxpath,
scea,
sendmail,
sgiB10,
sgiB11,
sgiB20,
simPl20,
sissl12,
sissl,
sleepycat,
smlnj,
smppl,
snia,
spencer86,
spencer94,
spencer99,
spl10,
sugarCrm113,
swl,
tcl,
tcpWrappers,
tMate,
torque11,
tosl,
unicodeDfs2015,
unicodeDfs2016,
unicodeTou,
unlicense,
upl10,
vim,
vostrom,
vsl10,
w3C19980720,
w3C20150513,
w3C,
watcom10,
wsuipa,
wtfpl,
x11,
xerox,
xFree8611,
xinetd,
xnet,
xpp,
xSkat,
ypl10,
ypl11,
zed,
zend20,
zimbra13,
zimbra14,
zlibAcknowledgement,
zlib,
zpl11,
zpl20,
zpl21
            }

        /**
         * A set of rules of how FHIR is used to solve a particular problem. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts. 
         */
        export class ImplementationGuide  {

            constructor() {
                
            }

            
                /**
                 * This is a ImplementationGuide resource
                 */
                ResourceType: string = 'ImplementationGuide;'
                

                /**
                 * The logical id of the resource, as used in the URL for the resource. Once assigned, this value never changes.
                 */
                Id? : Id;
                

                /**
                 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
                 */
                Meta? : Meta;
                

                /**
                 * A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content. Often, this is a reference to an implementation guide that defines the special rules along with other profiles etc.
                 */
                ImplicitRules? : Uri;
                

                /**
                 * Extensions for implicitRules
                 */
                _implicitRules? : Element;
                

                /**
                 * The base language in which the resource is written.
                 */
                Language? : Code;
                

                /**
                 * Extensions for language
                 */
                _language? : Element;
                

                /**
                 * A human-readable narrative that contains a summary of the resource and can be used to represent the content of the resource to a human. The narrative need not encode all the structured data, but is required to contain sufficient detail to make it "clinically safe" for a human to just read the narrative. Resource definitions may define what content should be represented in the narrative to ensure clinical safety.
                 */
                Text? : Narrative;
                

                /**
                 * These resources do not have an independent existence apart from the resource that contains them - they cannot be identified independently, and nor can they have their own independent transaction scope.
                 */
                Contained? : Array<ResourceList>;
                

                /**
                 * May be used to represent additional information that is not part of the basic definition of the resource. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
                 */
                Extension? : Array<Extension>;
                

                /**
                 * May be used to represent additional information that is not part of the basic definition of the resource, and that modifies the understanding of the element that contains it. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).
                 */
                ModifierExtension? : Array<Extension>;
                

                /**
                 * An absolute URI that is used to identify this implementation guide when it is referenced in a specification, model, design or an instance; also called its canonical identifier. This SHOULD be globally unique and SHOULD be a literal address at which at which an authoritative instance of this implementation guide is (or will be) published. This URL can be the target of a canonical reference. It SHALL remain the same when the implementation guide is stored on different servers.
                 */
                Url? : Uri;
                

                /**
                 * Extensions for url
                 */
                _url? : Element;
                

                /**
                 * The identifier that is used to identify this version of the implementation guide when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the implementation guide author and is not expected to be globally unique. For example, it might be a timestamp (e.g. yyyymmdd) if a managed version is not available. There is also no expectation that versions can be placed in a lexicographical sequence.
                 */
                Version? : String;
                

                /**
                 * Extensions for version
                 */
                _version? : Element;
                

                /**
                 * A natural language name identifying the implementation guide. This name should be usable as an identifier for the module by machine processing applications such as code generation.
                 */
                Name? : String;
                

                /**
                 * Extensions for name
                 */
                _name? : Element;
                

                /**
                 * A short, descriptive, user-friendly title for the implementation guide.
                 */
                Title? : String;
                

                /**
                 * Extensions for title
                 */
                _title? : Element;
                

                /**
                 * The status of this implementation guide. Enables tracking the life-cycle of the content.
                 */
                Status? : ImplementationGuideStatusKind;
                

                /**
                 * Extensions for status
                 */
                _status? : Element;
                

                /**
                 * A Boolean value to indicate that this implementation guide is authored for testing purposes (or education/evaluation/marketing) and is not intended to be used for genuine usage.
                 */
                Experimental? : Boolean;
                

                /**
                 * Extensions for experimental
                 */
                _experimental? : Element;
                

                /**
                 * The date  (and optionally time) when the implementation guide was published. The date must change when the business version changes and it must change if the status code changes. In addition, it should change when the substantive content of the implementation guide changes.
                 */
                Date? : DateTime;
                

                /**
                 * Extensions for date
                 */
                _date? : Element;
                

                /**
                 * The name of the organization or individual that published the implementation guide.
                 */
                Publisher? : String;
                

                /**
                 * Extensions for publisher
                 */
                _publisher? : Element;
                

                /**
                 * Contact details to assist a user in finding and communicating with the publisher.
                 */
                Contact? : Array<ContactDetail>;
                

                /**
                 * A free text natural language description of the implementation guide from a consumer's perspective.
                 */
                Description? : Markdown;
                

                /**
                 * Extensions for description
                 */
                _description? : Element;
                

                /**
                 * The content was developed with a focus and intent of supporting the contexts that are listed. These terms may be used to assist with indexing and searching for appropriate implementation guide instances.
                 */
                UseContext? : Array<UsageContext>;
                

                /**
                 * A legal or geographic region in which the implementation guide is intended to be used.
                 */
                Jurisdiction? : Array<CodeableConcept>;
                

                /**
                 * A copyright statement relating to the implementation guide and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the implementation guide.
                 */
                Copyright? : Markdown;
                

                /**
                 * Extensions for copyright
                 */
                _copyright? : Element;
                

                /**
                 * The NPM package name for this Implementation Guide, used in the NPM package distribution, which is the primary mechanism by which FHIR based tooling manages IG dependencies. This value must be globally unique, and should be assigned with care.
                 */
                PackageId? : Id;
                

                /**
                 * Extensions for packageId
                 */
                _packageId? : Element;
                

                /**
                 * The license that applies to this Implementation Guide, using an SPDX license code, or 'not-open-source'.
                 */
                License? : ImplementationGuideLicenseKind;
                

                /**
                 * Extensions for license
                 */
                _license? : Element;
                

                /**
                 * The version of the FHIR specification on which this ImplementationGuide is based - this is the formal version of the specification, without the revision number, e.g. [publication].[major].[minor], which is 3.5.0. for this version.
                 */
                FhirVersion? : Id;
                

                /**
                 * Extensions for fhirVersion
                 */
                _fhirVersion? : Element;
                

                /**
                 * Another implementation guide that this implementation depends on. Typically, an implementation guide uses value sets, profiles etc.defined in other implementation guides.
                 */
                DependsOn? : Array<ImplementationGuide_DependsOn>;
                

                /**
                 * A set of profiles that all resources covered by this implementation guide must conform to.
                 */
                Global? : Array<ImplementationGuide_Global>;
                

                /**
                 * The information needed by an IG publisher tool to publish the whole implementation guide.
                 */
                Definition? : ImplementationGuide_Definition;
                

                /**
                 * Information about an assembled implementation guide, created by the publication tooling.
                 */
                Manifest? : ImplementationGuide_Manifest;
                
        }
        