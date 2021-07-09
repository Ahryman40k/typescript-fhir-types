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
import {RTTI_canonical} from '../Scalar/RTTI_canonical';
import {
  RTTI_OperationDefinition_Parameter,
  IOperationDefinition_Parameter,
} from './RTTI_OperationDefinition_Parameter';
import {
  RTTI_OperationDefinition_Overload,
  IOperationDefinition_Overload,
} from './RTTI_OperationDefinition_Overload';
export enum OperationDefinitionStatusKind {
  _draft = 'draft',
  _active = 'active',
  _retired = 'retired',
  _unknown = 'unknown',
}
export enum OperationDefinitionKindKind {
  _operation = 'operation',
  _query = 'query',
}
import {createEnumType} from '../../EnumType';
import {IDomainResource} from './IDomainResource';

export interface IOperationDefinition extends IDomainResource {
  /**
   * This is a OperationDefinition resource
   */
  resourceType: 'OperationDefinition';

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
   * An absolute URI that is used to identify this operation definition when it is referenced in a specification, model, design or an instance; also called its canonical identifier. This SHOULD be globally unique and SHOULD be a literal address at which at which an authoritative instance of this operation definition is (or will be) published. This URL can be the target of a canonical reference. It SHALL remain the same when the operation definition is stored on different servers.
   */
  url?: string;

  /**
   * Extensions for url
   */
  _url?: IElement;

  /**
   * The identifier that is used to identify this version of the operation definition when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the operation definition author and is not expected to be globally unique. For example, it might be a timestamp (e.g. yyyymmdd) if a managed version is not available. There is also no expectation that versions can be placed in a lexicographical sequence.
   */
  version?: string;

  /**
   * Extensions for version
   */
  _version?: IElement;

  /**
   * A natural language name identifying the operation definition. This name should be usable as an identifier for the module by machine processing applications such as code generation.
   */
  name?: string;

  /**
   * Extensions for name
   */
  _name?: IElement;

  /**
   * A short, descriptive, user-friendly title for the operation definition.
   */
  title?: string;

  /**
   * Extensions for title
   */
  _title?: IElement;

  /**
   * The status of this operation definition. Enables tracking the life-cycle of the content.
   */
  status?: OperationDefinitionStatusKind;

  /**
   * Extensions for status
   */
  _status?: IElement;

  /**
   * Whether this is an operation or a named query.
   */
  kind?: OperationDefinitionKindKind;

  /**
   * Extensions for kind
   */
  _kind?: IElement;

  /**
   * A Boolean value to indicate that this operation definition is authored for testing purposes (or education/evaluation/marketing) and is not intended to be used for genuine usage.
   */
  experimental?: boolean;

  /**
   * Extensions for experimental
   */
  _experimental?: IElement;

  /**
   * The date  (and optionally time) when the operation definition was published. The date must change when the business version changes and it must change if the status code changes. In addition, it should change when the substantive content of the operation definition changes.
   */
  date?: string;

  /**
   * Extensions for date
   */
  _date?: IElement;

  /**
   * The name of the organization or individual that published the operation definition.
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
   * A free text natural language description of the operation definition from a consumer's perspective.
   */
  description?: string;

  /**
   * Extensions for description
   */
  _description?: IElement;

  /**
   * The content was developed with a focus and intent of supporting the contexts that are listed. These contexts may be general categories (gender, age, ...) or may be references to specific programs (insurance plans, studies, ...) and may be used to assist with indexing and searching for appropriate operation definition instances.
   */
  useContext?: IUsageContext[];

  /**
   * A legal or geographic region in which the operation definition is intended to be used.
   */
  jurisdiction?: ICodeableConcept[];

  /**
   * Explanation of why this operation definition is needed and why it has been designed as it has.
   */
  purpose?: string;

  /**
   * Extensions for purpose
   */
  _purpose?: IElement;

  /**
   * Whether the operation affects state. Side effects such as producing audit trail entries do not count as 'affecting  state'.
   */
  affectsState?: boolean;

  /**
   * Extensions for affectsState
   */
  _affectsState?: IElement;

  /**
   * The name used to invoke the operation.
   */
  code?: string;

  /**
   * Extensions for code
   */
  _code?: IElement;

  /**
   * Additional information about how to use this operation or named query.
   */
  comment?: string;

  /**
   * Extensions for comment
   */
  _comment?: IElement;

  /**
   * Indicates that this operation definition is a constraining profile on the base.
   */
  base?: string;

  /**
   * The types on which this operation can be executed.
   */
  resource?: string[];

  /**
   * Extensions for resource
   */
  _resource?: IElement[];

  /**
   * Indicates whether this operation or named query can be invoked at the system level (e.g. without needing to choose a resource type for the context).
   */
  system?: boolean;

  /**
   * Extensions for system
   */
  _system?: IElement;

  /**
   * Indicates whether this operation or named query can be invoked at the resource type level for any given resource type level (e.g. without needing to choose a specific resource id for the context).
   */
  type?: boolean;

  /**
   * Extensions for type
   */
  _type?: IElement;

  /**
   * Indicates whether this operation can be invoked on a particular instance of one of the given types.
   */
  instance?: boolean;

  /**
   * Extensions for instance
   */
  _instance?: IElement;

  /**
   * Additional validation information for the in parameters - a single profile that covers all the parameters. The profile is a constraint on the parameters resource as a whole.
   */
  inputProfile?: string;

  /**
   * Additional validation information for the out parameters - a single profile that covers all the parameters. The profile is a constraint on the parameters resource.
   */
  outputProfile?: string;

  /**
   * The parameters for the operation/query.
   */
  parameter?: IOperationDefinition_Parameter[];

  /**
   * Defines an appropriate combination of parameters to use when invoking this operation, to help code generators when generating overloaded parameter sets for this operation.
   */
  overload?: IOperationDefinition_Overload[];
}

export const RTTI_OperationDefinition: t.Type<IOperationDefinition> =
  t.recursion('IOperationDefinition', () =>
    t.intersection([
      t.type({
        resourceType: t.literal('OperationDefinition'),
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
        status: createEnumType<OperationDefinitionStatusKind>(
          OperationDefinitionStatusKind,
          'OperationDefinitionStatusKind',
        ),
        _status: RTTI_Element,
        kind: createEnumType<OperationDefinitionKindKind>(
          OperationDefinitionKindKind,
          'OperationDefinitionKindKind',
        ),
        _kind: RTTI_Element,
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
        affectsState: t.boolean,
        _affectsState: RTTI_Element,
        code: RTTI_code,
        _code: RTTI_Element,
        comment: RTTI_markdown,
        _comment: RTTI_Element,
        base: RTTI_canonical,
        resource: t.array(RTTI_code),
        _resource: t.array(RTTI_Element),
        system: t.boolean,
        _system: RTTI_Element,
        type: t.boolean,
        _type: RTTI_Element,
        instance: t.boolean,
        _instance: RTTI_Element,
        inputProfile: RTTI_canonical,
        outputProfile: RTTI_canonical,
        parameter: t.array(RTTI_OperationDefinition_Parameter),
        overload: t.array(RTTI_OperationDefinition_Overload),
      }),
    ]),
  );
