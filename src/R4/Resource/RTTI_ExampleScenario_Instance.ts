import * as t from 'io-ts';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_Element, IElement} from './RTTI_Element';
import {RTTI_code} from '../Scalar/RTTI_code';
import {RTTI_markdown} from '../Scalar/RTTI_markdown';
import {
  RTTI_ExampleScenario_Version,
  IExampleScenario_Version,
} from './RTTI_ExampleScenario_Version';
import {
  RTTI_ExampleScenario_ContainedInstance,
  IExampleScenario_ContainedInstance,
} from './RTTI_ExampleScenario_ContainedInstance';

export interface IExampleScenario_Instance {
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
   * The id of the resource for referencing.
   */
  resourceId?: string;

  /**
   * Extensions for resourceId
   */
  _resourceId?: IElement;

  /**
   * The type of the resource.
   */
  resourceType?: string;

  /**
   * Extensions for resourceType
   */
  _resourceType?: IElement;

  /**
   * A short name for the resource instance.
   */
  name?: string;

  /**
   * Extensions for name
   */
  _name?: IElement;

  /**
   * Human-friendly description of the resource instance.
   */
  description?: string;

  /**
   * Extensions for description
   */
  _description?: IElement;

  /**
   * A specific version of the resource.
   */
  version?: IExampleScenario_Version[];

  /**
   * Resources contained in the instance (e.g. the observations contained in a bundle).
   */
  containedInstance?: IExampleScenario_ContainedInstance[];
}

export const RTTI_ExampleScenario_Instance: t.Type<IExampleScenario_Instance> =
  t.recursion('IExampleScenario_Instance', () =>
    t.partial({
      id: t.string,
      extension: t.array(RTTI_Extension),
      modifierExtension: t.array(RTTI_Extension),
      resourceId: t.string,
      _resourceId: RTTI_Element,
      resourceType: RTTI_code,
      _resourceType: RTTI_Element,
      name: t.string,
      _name: RTTI_Element,
      description: RTTI_markdown,
      _description: RTTI_Element,
      version: t.array(RTTI_ExampleScenario_Version),
      containedInstance: t.array(RTTI_ExampleScenario_ContainedInstance),
    }),
  );
