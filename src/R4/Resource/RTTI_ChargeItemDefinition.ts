import * as t from 'io-ts';
import {RTTI_id} from '../Scalar/RTTI_id';
import {RTTI_Meta, IMeta} from './RTTI_Meta';
import {RTTI_uri} from '../Scalar/RTTI_uri';
import {RTTI_Element, IElement} from './RTTI_Element';
import {RTTI_code} from '../Scalar/RTTI_code';
import {RTTI_Narrative, INarrative} from './RTTI_Narrative';
import {RTTI_ResourceList, IResourceList} from '../Union/RTTI_ResourceList';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_Identifier, IIdentifier} from './RTTI_Identifier';
import {RTTI_canonical} from '../Scalar/RTTI_canonical';
import {RTTI_dateTime} from '../Scalar/RTTI_dateTime';
import {RTTI_ContactDetail, IContactDetail} from './RTTI_ContactDetail';
import {RTTI_markdown} from '../Scalar/RTTI_markdown';
import {RTTI_UsageContext, IUsageContext} from './RTTI_UsageContext';
import {RTTI_CodeableConcept, ICodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_date} from '../Scalar/RTTI_date';
import {RTTI_Period, IPeriod} from './RTTI_Period';
import {RTTI_Reference, IReference} from './RTTI_Reference';
import {
  RTTI_ChargeItemDefinition_Applicability,
  IChargeItemDefinition_Applicability,
} from './RTTI_ChargeItemDefinition_Applicability';
import {
  RTTI_ChargeItemDefinition_PropertyGroup,
  IChargeItemDefinition_PropertyGroup,
} from './RTTI_ChargeItemDefinition_PropertyGroup';
export enum ChargeItemDefinitionStatusKind {
  _draft = 'draft',
  _active = 'active',
  _retired = 'retired',
  _unknown = 'unknown',
}
import {createEnumType} from '../../EnumType';
import {IDomainResource} from './IDomainResource';

export interface IChargeItemDefinition extends IDomainResource {
  /**
   * This is a ChargeItemDefinition resource
   */
  resourceType: 'ChargeItemDefinition';

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
   * An absolute URI that is used to identify this charge item definition when it is referenced in a specification, model, design or an instance; also called its canonical identifier. This SHOULD be globally unique and SHOULD be a literal address at which at which an authoritative instance of this charge item definition is (or will be) published. This URL can be the target of a canonical reference. It SHALL remain the same when the charge item definition is stored on different servers.
   */
  url?: string;

  /**
   * Extensions for url
   */
  _url?: IElement;

  /**
   * A formal identifier that is used to identify this charge item definition when it is represented in other formats, or referenced in a specification, model, design or an instance.
   */
  identifier?: IIdentifier[];

  /**
   * The identifier that is used to identify this version of the charge item definition when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the charge item definition author and is not expected to be globally unique. For example, it might be a timestamp (e.g. yyyymmdd) if a managed version is not available. There is also no expectation that versions can be placed in a lexicographical sequence. To provide a version consistent with the Decision Support Service specification, use the format Major.Minor.Revision (e.g. 1.0.0). For more information on versioning knowledge assets, refer to the Decision Support Service specification. Note that a version is required for non-experimental active assets.
   */
  version?: string;

  /**
   * Extensions for version
   */
  _version?: IElement;

  /**
   * A short, descriptive, user-friendly title for the charge item definition.
   */
  title?: string;

  /**
   * Extensions for title
   */
  _title?: IElement;

  /**
   * The URL pointing to an externally-defined charge item definition that is adhered to in whole or in part by this definition.
   */
  derivedFromUri?: string[];

  /**
   * Extensions for derivedFromUri
   */
  _derivedFromUri?: IElement[];

  /**
   * A larger definition of which this particular definition is a component or step.
   */
  partOf?: string[];

  /**
   * As new versions of a protocol or guideline are defined, allows identification of what versions are replaced by a new instance.
   */
  replaces?: string[];

  /**
   * The current state of the ChargeItemDefinition.
   */
  status?: ChargeItemDefinitionStatusKind;

  /**
   * Extensions for status
   */
  _status?: IElement;

  /**
   * A Boolean value to indicate that this charge item definition is authored for testing purposes (or education/evaluation/marketing) and is not intended to be used for genuine usage.
   */
  experimental?: boolean;

  /**
   * Extensions for experimental
   */
  _experimental?: IElement;

  /**
   * The date  (and optionally time) when the charge item definition was published. The date must change when the business version changes and it must change if the status code changes. In addition, it should change when the substantive content of the charge item definition changes.
   */
  date?: string;

  /**
   * Extensions for date
   */
  _date?: IElement;

  /**
   * The name of the organization or individual that published the charge item definition.
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
   * A free text natural language description of the charge item definition from a consumer's perspective.
   */
  description?: string;

  /**
   * Extensions for description
   */
  _description?: IElement;

  /**
   * The content was developed with a focus and intent of supporting the contexts that are listed. These contexts may be general categories (gender, age, ...) or may be references to specific programs (insurance plans, studies, ...) and may be used to assist with indexing and searching for appropriate charge item definition instances.
   */
  useContext?: IUsageContext[];

  /**
   * A legal or geographic region in which the charge item definition is intended to be used.
   */
  jurisdiction?: ICodeableConcept[];

  /**
   * A copyright statement relating to the charge item definition and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the charge item definition.
   */
  copyright?: string;

  /**
   * Extensions for copyright
   */
  _copyright?: IElement;

  /**
   * The date on which the resource content was approved by the publisher. Approval happens once when the content is officially approved for usage.
   */
  approvalDate?: string;

  /**
   * Extensions for approvalDate
   */
  _approvalDate?: IElement;

  /**
   * The date on which the resource content was last reviewed. Review happens periodically after approval but does not change the original approval date.
   */
  lastReviewDate?: string;

  /**
   * Extensions for lastReviewDate
   */
  _lastReviewDate?: IElement;

  /**
   * The period during which the charge item definition content was or is planned to be in active use.
   */
  effectivePeriod?: IPeriod;

  /**
   * The defined billing details in this resource pertain to the given billing code.
   */
  code?: ICodeableConcept;

  /**
   * The defined billing details in this resource pertain to the given product instance(s).
   */
  instance?: IReference[];

  /**
   * Expressions that describe applicability criteria for the billing code.
   */
  applicability?: IChargeItemDefinition_Applicability[];

  /**
   * Group of properties which are applicable under the same conditions. If no applicability rules are established for the group, then all properties always apply.
   */
  propertyGroup?: IChargeItemDefinition_PropertyGroup[];
}

export const RTTI_ChargeItemDefinition: t.Type<IChargeItemDefinition> =
  t.recursion('IChargeItemDefinition', () =>
    t.intersection([
      t.type({
        resourceType: t.literal('ChargeItemDefinition'),
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
        identifier: t.array(RTTI_Identifier),
        version: t.string,
        _version: RTTI_Element,
        title: t.string,
        _title: RTTI_Element,
        derivedFromUri: t.array(RTTI_uri),
        _derivedFromUri: t.array(RTTI_Element),
        partOf: t.array(RTTI_canonical),
        replaces: t.array(RTTI_canonical),
        status: createEnumType<ChargeItemDefinitionStatusKind>(
          ChargeItemDefinitionStatusKind,
          'ChargeItemDefinitionStatusKind',
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
        approvalDate: RTTI_date,
        _approvalDate: RTTI_Element,
        lastReviewDate: RTTI_date,
        _lastReviewDate: RTTI_Element,
        effectivePeriod: RTTI_Period,
        code: RTTI_CodeableConcept,
        instance: t.array(RTTI_Reference),
        applicability: t.array(RTTI_ChargeItemDefinition_Applicability),
        propertyGroup: t.array(RTTI_ChargeItemDefinition_PropertyGroup),
      }),
    ]),
  );
