import * as t from 'io-ts';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_TestScript_Link, ITestScript_Link} from './RTTI_TestScript_Link';
import {
  RTTI_TestScript_Capability,
  ITestScript_Capability,
} from './RTTI_TestScript_Capability';

export interface ITestScript_Metadata {
  /**
   * Capabilities that must exist and are assumed to function correctly on the FHIR server being tested.
   */
  capability: ITestScript_Capability[];

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
   * A link to the FHIR specification that this test is covering.
   */
  link?: ITestScript_Link[];
}

export const RTTI_TestScript_Metadata: t.Type<ITestScript_Metadata> =
  t.recursion('ITestScript_Metadata', () =>
    t.intersection([
      t.type({
        capability: t.array(RTTI_TestScript_Capability),
      }),
      t.partial({
        id: t.string,
        extension: t.array(RTTI_Extension),
        modifierExtension: t.array(RTTI_Extension),
        link: t.array(RTTI_TestScript_Link),
      }),
    ]),
  );
