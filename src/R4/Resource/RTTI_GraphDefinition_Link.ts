import * as t from 'io-ts';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_Element, IElement} from './RTTI_Element';
import {RTTI_integer} from '../Scalar/RTTI_integer';
import {
  RTTI_GraphDefinition_Target,
  IGraphDefinition_Target,
} from './RTTI_GraphDefinition_Target';

export interface IGraphDefinition_Link {
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
   * A FHIR expression that identifies one of FHIR References to other resources.
   */
  path?: string;

  /**
   * Extensions for path
   */
  _path?: IElement;

  /**
   * Which slice (if profiled).
   */
  sliceName?: string;

  /**
   * Extensions for sliceName
   */
  _sliceName?: IElement;

  /**
   * Minimum occurrences for this link.
   */
  min?: number;

  /**
   * Extensions for min
   */
  _min?: IElement;

  /**
   * Maximum occurrences for this link.
   */
  max?: string;

  /**
   * Extensions for max
   */
  _max?: IElement;

  /**
   * Information about why this link is of interest in this graph definition.
   */
  description?: string;

  /**
   * Extensions for description
   */
  _description?: IElement;

  /**
   * Potential target for the link.
   */
  target?: IGraphDefinition_Target[];
}

export const RTTI_GraphDefinition_Link: t.Type<IGraphDefinition_Link> =
  t.recursion('IGraphDefinition_Link', () =>
    t.partial({
      id: t.string,
      extension: t.array(RTTI_Extension),
      modifierExtension: t.array(RTTI_Extension),
      path: t.string,
      _path: RTTI_Element,
      sliceName: t.string,
      _sliceName: RTTI_Element,
      min: RTTI_integer,
      _min: RTTI_Element,
      max: t.string,
      _max: RTTI_Element,
      description: t.string,
      _description: RTTI_Element,
      target: t.array(RTTI_GraphDefinition_Target),
    }),
  );
