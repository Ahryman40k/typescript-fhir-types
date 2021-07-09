import * as t from 'io-ts';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_Element, IElement} from './RTTI_Element';
import {RTTI_uri} from '../Scalar/RTTI_uri';
export enum TestReport_ParticipantTypeKind {
  _testEngine = 'test-engine',
  _client = 'client',
  _server = 'server',
}
import {createEnumType} from '../../EnumType';

export interface ITestReport_Participant {
  /**
   * Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.
   */
  id?: string;

  /**
   * May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
   */
  extension?: IExtension[];

  /**
                     * May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).
                     */
  modifierExtension?: IExtension[];

  /**
   * The type of participant.
   */
  type?: TestReport_ParticipantTypeKind;

  /**
   * Extensions for type
   */
  _type?: IElement;

  /**
   * The uri of the participant. An absolute URL is preferred.
   */
  uri?: string;

  /**
   * Extensions for uri
   */
  _uri?: IElement;

  /**
   * The display name of the participant.
   */
  display?: string;

  /**
   * Extensions for display
   */
  _display?: IElement;
}

export const RTTI_TestReport_Participant: t.Type<ITestReport_Participant> =
  t.recursion('ITestReport_Participant', () =>
    t.partial({
      id: t.string,
      extension: t.array(RTTI_Extension),
      modifierExtension: t.array(RTTI_Extension),
      type: createEnumType<TestReport_ParticipantTypeKind>(
        TestReport_ParticipantTypeKind,
        'TestReport_ParticipantTypeKind',
      ),
      _type: RTTI_Element,
      uri: RTTI_uri,
      _uri: RTTI_Element,
      display: t.string,
      _display: RTTI_Element,
    }),
  );
