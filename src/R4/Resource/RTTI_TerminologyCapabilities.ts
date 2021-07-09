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
  RTTI_TerminologyCapabilities_Software,
  ITerminologyCapabilities_Software,
} from './RTTI_TerminologyCapabilities_Software';
import {
  RTTI_TerminologyCapabilities_Implementation,
  ITerminologyCapabilities_Implementation,
} from './RTTI_TerminologyCapabilities_Implementation';
import {
  RTTI_TerminologyCapabilities_CodeSystem,
  ITerminologyCapabilities_CodeSystem,
} from './RTTI_TerminologyCapabilities_CodeSystem';
import {
  RTTI_TerminologyCapabilities_Expansion,
  ITerminologyCapabilities_Expansion,
} from './RTTI_TerminologyCapabilities_Expansion';
import {
  RTTI_TerminologyCapabilities_ValidateCode,
  ITerminologyCapabilities_ValidateCode,
} from './RTTI_TerminologyCapabilities_ValidateCode';
import {
  RTTI_TerminologyCapabilities_Translation,
  ITerminologyCapabilities_Translation,
} from './RTTI_TerminologyCapabilities_Translation';
import {
  RTTI_TerminologyCapabilities_Closure,
  ITerminologyCapabilities_Closure,
} from './RTTI_TerminologyCapabilities_Closure';
export enum TerminologyCapabilitiesStatusKind {
  _draft = 'draft',
  _active = 'active',
  _retired = 'retired',
  _unknown = 'unknown',
}
export enum TerminologyCapabilitiesCodeSearchKind {
  _explicit = 'explicit',
  _all = 'all',
}
import {createEnumType} from '../../EnumType';
import {IDomainResource} from './IDomainResource';

export interface ITerminologyCapabilities extends IDomainResource {
  /**
   * This is a TerminologyCapabilities resource
   */
  resourceType: 'TerminologyCapabilities';

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
   * An absolute URI that is used to identify this terminology capabilities when it is referenced in a specification, model, design or an instance; also called its canonical identifier. This SHOULD be globally unique and SHOULD be a literal address at which at which an authoritative instance of this terminology capabilities is (or will be) published. This URL can be the target of a canonical reference. It SHALL remain the same when the terminology capabilities is stored on different servers.
   */
  url?: string;

  /**
   * Extensions for url
   */
  _url?: IElement;

  /**
   * The identifier that is used to identify this version of the terminology capabilities when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the terminology capabilities author and is not expected to be globally unique. For example, it might be a timestamp (e.g. yyyymmdd) if a managed version is not available. There is also no expectation that versions can be placed in a lexicographical sequence.
   */
  version?: string;

  /**
   * Extensions for version
   */
  _version?: IElement;

  /**
   * A natural language name identifying the terminology capabilities. This name should be usable as an identifier for the module by machine processing applications such as code generation.
   */
  name?: string;

  /**
   * Extensions for name
   */
  _name?: IElement;

  /**
   * A short, descriptive, user-friendly title for the terminology capabilities.
   */
  title?: string;

  /**
   * Extensions for title
   */
  _title?: IElement;

  /**
   * The status of this terminology capabilities. Enables tracking the life-cycle of the content.
   */
  status?: TerminologyCapabilitiesStatusKind;

  /**
   * Extensions for status
   */
  _status?: IElement;

  /**
   * A Boolean value to indicate that this terminology capabilities is authored for testing purposes (or education/evaluation/marketing) and is not intended to be used for genuine usage.
   */
  experimental?: boolean;

  /**
   * Extensions for experimental
   */
  _experimental?: IElement;

  /**
   * The date  (and optionally time) when the terminology capabilities was published. The date must change when the business version changes and it must change if the status code changes. In addition, it should change when the substantive content of the terminology capabilities changes.
   */
  date?: string;

  /**
   * Extensions for date
   */
  _date?: IElement;

  /**
   * The name of the organization or individual that published the terminology capabilities.
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
   * A free text natural language description of the terminology capabilities from a consumer's perspective. Typically, this is used when the capability statement describes a desired rather than an actual solution, for example as a formal expression of requirements as part of an RFP.
   */
  description?: string;

  /**
   * Extensions for description
   */
  _description?: IElement;

  /**
   * The content was developed with a focus and intent of supporting the contexts that are listed. These contexts may be general categories (gender, age, ...) or may be references to specific programs (insurance plans, studies, ...) and may be used to assist with indexing and searching for appropriate terminology capabilities instances.
   */
  useContext?: IUsageContext[];

  /**
   * A legal or geographic region in which the terminology capabilities is intended to be used.
   */
  jurisdiction?: ICodeableConcept[];

  /**
   * Explanation of why this terminology capabilities is needed and why it has been designed as it has.
   */
  purpose?: string;

  /**
   * Extensions for purpose
   */
  _purpose?: IElement;

  /**
   * A copyright statement relating to the terminology capabilities and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the terminology capabilities.
   */
  copyright?: string;

  /**
   * Extensions for copyright
   */
  _copyright?: IElement;

  /**
   * The way that this statement is intended to be used, to describe an actual running instance of software, a particular product (kind, not instance of software) or a class of implementation (e.g. a desired purchase).
   */
  kind?: string;

  /**
   * Extensions for kind
   */
  _kind?: IElement;

  /**
   * Software that is covered by this terminology capability statement.  It is used when the statement describes the capabilities of a particular software version, independent of an installation.
   */
  software?: ITerminologyCapabilities_Software;

  /**
   * Identifies a specific implementation instance that is described by the terminology capability statement - i.e. a particular installation, rather than the capabilities of a software program.
   */
  implementation?: ITerminologyCapabilities_Implementation;

  /**
   * Whether the server supports lockedDate.
   */
  lockedDate?: boolean;

  /**
   * Extensions for lockedDate
   */
  _lockedDate?: IElement;

  /**
   * Identifies a code system that is supported by the server. If there is a no code system URL, then this declares the general assumptions a client can make about support for any CodeSystem resource.
   */
  codeSystem?: ITerminologyCapabilities_CodeSystem[];

  /**
   * Information about the [ValueSet/$expand](valueset-operation-expand.html) operation.
   */
  expansion?: ITerminologyCapabilities_Expansion;

  /**
   * The degree to which the server supports the code search parameter on ValueSet, if it is supported.
   */
  codeSearch?: TerminologyCapabilitiesCodeSearchKind;

  /**
   * Extensions for codeSearch
   */
  _codeSearch?: IElement;

  /**
   * Information about the [ValueSet/$validate-code](valueset-operation-validate-code.html) operation.
   */
  validateCode?: ITerminologyCapabilities_ValidateCode;

  /**
   * Information about the [ConceptMap/$translate](conceptmap-operation-translate.html) operation.
   */
  translation?: ITerminologyCapabilities_Translation;

  /**
   * Whether the $closure operation is supported.
   */
  closure?: ITerminologyCapabilities_Closure;
}

export const RTTI_TerminologyCapabilities: t.Type<ITerminologyCapabilities> =
  t.recursion('ITerminologyCapabilities', () =>
    t.intersection([
      t.type({
        resourceType: t.literal('TerminologyCapabilities'),
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
        status: createEnumType<TerminologyCapabilitiesStatusKind>(
          TerminologyCapabilitiesStatusKind,
          'TerminologyCapabilitiesStatusKind',
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
        purpose: RTTI_markdown,
        _purpose: RTTI_Element,
        copyright: RTTI_markdown,
        _copyright: RTTI_Element,
        kind: RTTI_code,
        _kind: RTTI_Element,
        software: RTTI_TerminologyCapabilities_Software,
        implementation: RTTI_TerminologyCapabilities_Implementation,
        lockedDate: t.boolean,
        _lockedDate: RTTI_Element,
        codeSystem: t.array(RTTI_TerminologyCapabilities_CodeSystem),
        expansion: RTTI_TerminologyCapabilities_Expansion,
        codeSearch: createEnumType<TerminologyCapabilitiesCodeSearchKind>(
          TerminologyCapabilitiesCodeSearchKind,
          'TerminologyCapabilitiesCodeSearchKind',
        ),
        _codeSearch: RTTI_Element,
        validateCode: RTTI_TerminologyCapabilities_ValidateCode,
        translation: RTTI_TerminologyCapabilities_Translation,
        closure: RTTI_TerminologyCapabilities_Closure,
      }),
    ]),
  );
