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
import {RTTI_dateTime} from '../Scalar/RTTI_dateTime';
import {RTTI_ContactDetail, IContactDetail} from './RTTI_ContactDetail';
import {RTTI_markdown} from '../Scalar/RTTI_markdown';
import {RTTI_UsageContext, IUsageContext} from './RTTI_UsageContext';
import {RTTI_CodeableConcept, ICodeableConcept} from './RTTI_CodeableConcept';
import {
  RTTI_TestScript_Origin,
  ITestScript_Origin,
} from './RTTI_TestScript_Origin';
import {
  RTTI_TestScript_Destination,
  ITestScript_Destination,
} from './RTTI_TestScript_Destination';
import {
  RTTI_TestScript_Metadata,
  ITestScript_Metadata,
} from './RTTI_TestScript_Metadata';
import {
  RTTI_TestScript_Fixture,
  ITestScript_Fixture,
} from './RTTI_TestScript_Fixture';
import {RTTI_Reference, IReference} from './RTTI_Reference';
import {
  RTTI_TestScript_Variable,
  ITestScript_Variable,
} from './RTTI_TestScript_Variable';
import {
  RTTI_TestScript_Setup,
  ITestScript_Setup,
} from './RTTI_TestScript_Setup';
import {RTTI_TestScript_Test, ITestScript_Test} from './RTTI_TestScript_Test';
import {
  RTTI_TestScript_Teardown,
  ITestScript_Teardown,
} from './RTTI_TestScript_Teardown';
export enum TestScriptStatusKind {
  _draft = 'draft',
  _active = 'active',
  _retired = 'retired',
  _unknown = 'unknown',
}
import {createEnumType} from '../../EnumType';
import {IDomainResource} from './IDomainResource';

export interface ITestScript extends IDomainResource {
  /**
   * This is a TestScript resource
   */
  resourceType: 'TestScript';

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
   * An absolute URI that is used to identify this test script when it is referenced in a specification, model, design or an instance; also called its canonical identifier. This SHOULD be globally unique and SHOULD be a literal address at which at which an authoritative instance of this test script is (or will be) published. This URL can be the target of a canonical reference. It SHALL remain the same when the test script is stored on different servers.
   */
  url?: string;

  /**
   * Extensions for url
   */
  _url?: IElement;

  /**
   * A formal identifier that is used to identify this test script when it is represented in other formats, or referenced in a specification, model, design or an instance.
   */
  identifier?: IIdentifier;

  /**
   * The identifier that is used to identify this version of the test script when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the test script author and is not expected to be globally unique. For example, it might be a timestamp (e.g. yyyymmdd) if a managed version is not available. There is also no expectation that versions can be placed in a lexicographical sequence.
   */
  version?: string;

  /**
   * Extensions for version
   */
  _version?: IElement;

  /**
   * A natural language name identifying the test script. This name should be usable as an identifier for the module by machine processing applications such as code generation.
   */
  name?: string;

  /**
   * Extensions for name
   */
  _name?: IElement;

  /**
   * A short, descriptive, user-friendly title for the test script.
   */
  title?: string;

  /**
   * Extensions for title
   */
  _title?: IElement;

  /**
   * The status of this test script. Enables tracking the life-cycle of the content.
   */
  status?: TestScriptStatusKind;

  /**
   * Extensions for status
   */
  _status?: IElement;

  /**
   * A Boolean value to indicate that this test script is authored for testing purposes (or education/evaluation/marketing) and is not intended to be used for genuine usage.
   */
  experimental?: boolean;

  /**
   * Extensions for experimental
   */
  _experimental?: IElement;

  /**
   * The date  (and optionally time) when the test script was published. The date must change when the business version changes and it must change if the status code changes. In addition, it should change when the substantive content of the test script changes.
   */
  date?: string;

  /**
   * Extensions for date
   */
  _date?: IElement;

  /**
   * The name of the organization or individual that published the test script.
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
   * A free text natural language description of the test script from a consumer's perspective.
   */
  description?: string;

  /**
   * Extensions for description
   */
  _description?: IElement;

  /**
   * The content was developed with a focus and intent of supporting the contexts that are listed. These contexts may be general categories (gender, age, ...) or may be references to specific programs (insurance plans, studies, ...) and may be used to assist with indexing and searching for appropriate test script instances.
   */
  useContext?: IUsageContext[];

  /**
   * A legal or geographic region in which the test script is intended to be used.
   */
  jurisdiction?: ICodeableConcept[];

  /**
   * Explanation of why this test script is needed and why it has been designed as it has.
   */
  purpose?: string;

  /**
   * Extensions for purpose
   */
  _purpose?: IElement;

  /**
   * A copyright statement relating to the test script and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the test script.
   */
  copyright?: string;

  /**
   * Extensions for copyright
   */
  _copyright?: IElement;

  /**
   * An abstract server used in operations within this test script in the origin element.
   */
  origin?: ITestScript_Origin[];

  /**
   * An abstract server used in operations within this test script in the destination element.
   */
  destination?: ITestScript_Destination[];

  /**
   * The required capability must exist and are assumed to function correctly on the FHIR server being tested.
   */
  metadata?: ITestScript_Metadata;

  /**
   * Fixture in the test script - by reference (uri). All fixtures are required for the test script to execute.
   */
  fixture?: ITestScript_Fixture[];

  /**
   * Reference to the profile to be used for validation.
   */
  profile?: IReference[];

  /**
   * Variable is set based either on element value in response body or on header field value in the response headers.
   */
  variable?: ITestScript_Variable[];

  /**
   * A series of required setup operations before tests are executed.
   */
  setup?: ITestScript_Setup;

  /**
   * A test in this script.
   */
  test?: ITestScript_Test[];

  /**
   * A series of operations required to clean up after all the tests are executed (successfully or otherwise).
   */
  teardown?: ITestScript_Teardown;
}

export const RTTI_TestScript: t.Type<ITestScript> = t.recursion(
  'ITestScript',
  () =>
    t.intersection([
      t.type({
        resourceType: t.literal('TestScript'),
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
        identifier: RTTI_Identifier,
        version: t.string,
        _version: RTTI_Element,
        name: t.string,
        _name: RTTI_Element,
        title: t.string,
        _title: RTTI_Element,
        status: createEnumType<TestScriptStatusKind>(
          TestScriptStatusKind,
          'TestScriptStatusKind',
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
        origin: t.array(RTTI_TestScript_Origin),
        destination: t.array(RTTI_TestScript_Destination),
        metadata: RTTI_TestScript_Metadata,
        fixture: t.array(RTTI_TestScript_Fixture),
        profile: t.array(RTTI_Reference),
        variable: t.array(RTTI_TestScript_Variable),
        setup: RTTI_TestScript_Setup,
        test: t.array(RTTI_TestScript_Test),
        teardown: RTTI_TestScript_Teardown,
      }),
    ]),
);
