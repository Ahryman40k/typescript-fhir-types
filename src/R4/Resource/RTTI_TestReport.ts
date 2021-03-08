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
import {RTTI_Reference, IReference} from './RTTI_Reference';
import {RTTI_decimal} from '../Scalar/RTTI_decimal';
import {RTTI_dateTime} from '../Scalar/RTTI_dateTime';
import {
  RTTI_TestReport_Participant,
  ITestReport_Participant,
} from './RTTI_TestReport_Participant';
import {
  RTTI_TestReport_Setup,
  ITestReport_Setup,
} from './RTTI_TestReport_Setup';
import {RTTI_TestReport_Test, ITestReport_Test} from './RTTI_TestReport_Test';
import {
  RTTI_TestReport_Teardown,
  ITestReport_Teardown,
} from './RTTI_TestReport_Teardown';
export enum TestReportStatusKind {
  _completed = 'completed',
  _inProgress = 'in-progress',
  _waiting = 'waiting',
  _stopped = 'stopped',
  _enteredInError = 'entered-in-error',
}
export enum TestReportResultKind {
  _pass = 'pass',
  _fail = 'fail',
  _pending = 'pending',
}
import {createEnumType} from '../../EnumType';
import {IDomainResource} from './IDomainResource';

export interface ITestReport extends IDomainResource {
  /**
   * This is a TestReport resource
   */
  resourceType: 'TestReport';

  /**
   * Ideally this is an absolute URL that is used to identify the version-specific TestScript that was executed, matching the `TestScript.url`.
   */
  testScript: IReference;

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
   * Identifier for the TestScript assigned for external purposes outside the context of FHIR.
   */
  identifier?: IIdentifier;

  /**
   * A free text natural language name identifying the executed TestScript.
   */
  name?: string;

  /**
   * Extensions for name
   */
  _name?: IElement;

  /**
   * The current state of this test report.
   */
  status?: TestReportStatusKind;

  /**
   * Extensions for status
   */
  _status?: IElement;

  /**
   * The overall result from the execution of the TestScript.
   */
  result?: TestReportResultKind;

  /**
   * Extensions for result
   */
  _result?: IElement;

  /**
   * The final score (percentage of tests passed) resulting from the execution of the TestScript.
   */
  score?: number;

  /**
   * Extensions for score
   */
  _score?: IElement;

  /**
   * Name of the tester producing this report (Organization or individual).
   */
  tester?: string;

  /**
   * Extensions for tester
   */
  _tester?: IElement;

  /**
   * When the TestScript was executed and this TestReport was generated.
   */
  issued?: string;

  /**
   * Extensions for issued
   */
  _issued?: IElement;

  /**
   * A participant in the test execution, either the execution engine, a client, or a server.
   */
  participant?: ITestReport_Participant[];

  /**
   * The results of the series of required setup operations before the tests were executed.
   */
  setup?: ITestReport_Setup;

  /**
   * A test executed from the test script.
   */
  test?: ITestReport_Test[];

  /**
   * The results of the series of operations required to clean up after all the tests were executed (successfully or otherwise).
   */
  teardown?: ITestReport_Teardown;
}

export const RTTI_TestReport: t.Type<ITestReport> = t.recursion(
  'ITestReport',
  () =>
    t.intersection([
      t.type({
        resourceType: t.literal('TestReport'),
        testScript: RTTI_Reference,
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
        identifier: RTTI_Identifier,
        name: t.string,
        _name: RTTI_Element,
        status: createEnumType<TestReportStatusKind>(
          TestReportStatusKind,
          'TestReportStatusKind',
        ),
        _status: RTTI_Element,
        result: createEnumType<TestReportResultKind>(
          TestReportResultKind,
          'TestReportResultKind',
        ),
        _result: RTTI_Element,
        score: RTTI_decimal,
        _score: RTTI_Element,
        tester: t.string,
        _tester: RTTI_Element,
        issued: RTTI_dateTime,
        _issued: RTTI_Element,
        participant: t.array(RTTI_TestReport_Participant),
        setup: RTTI_TestReport_Setup,
        test: t.array(RTTI_TestReport_Test),
        teardown: RTTI_TestReport_Teardown,
      }),
    ]),
);
