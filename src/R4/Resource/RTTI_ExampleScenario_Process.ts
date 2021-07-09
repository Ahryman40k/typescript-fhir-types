import * as t from 'io-ts';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_Element, IElement} from './RTTI_Element';
import {RTTI_markdown} from '../Scalar/RTTI_markdown';
import {
  RTTI_ExampleScenario_Step,
  IExampleScenario_Step,
} from './RTTI_ExampleScenario_Step';

export interface IExampleScenario_Process {
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
   * The diagram title of the group of operations.
   */
  title?: string;

  /**
   * Extensions for title
   */
  _title?: IElement;

  /**
   * A longer description of the group of operations.
   */
  description?: string;

  /**
   * Extensions for description
   */
  _description?: IElement;

  /**
   * Description of initial status before the process starts.
   */
  preConditions?: string;

  /**
   * Extensions for preConditions
   */
  _preConditions?: IElement;

  /**
   * Description of final status after the process ends.
   */
  postConditions?: string;

  /**
   * Extensions for postConditions
   */
  _postConditions?: IElement;

  /**
   * Each step of the process.
   */
  step?: IExampleScenario_Step[];
}

export const RTTI_ExampleScenario_Process: t.Type<IExampleScenario_Process> =
  t.recursion('IExampleScenario_Process', () =>
    t.partial({
      id: t.string,
      extension: t.array(RTTI_Extension),
      modifierExtension: t.array(RTTI_Extension),
      title: t.string,
      _title: RTTI_Element,
      description: RTTI_markdown,
      _description: RTTI_Element,
      preConditions: RTTI_markdown,
      _preConditions: RTTI_Element,
      postConditions: RTTI_markdown,
      _postConditions: RTTI_Element,
      step: t.array(RTTI_ExampleScenario_Step),
    }),
  );
