import * as t from 'io-ts';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_code} from '../Scalar/RTTI_code';
import {RTTI_Element, IElement} from './RTTI_Element';
import {RTTI_integer} from '../Scalar/RTTI_integer';
import {RTTI_canonical} from '../Scalar/RTTI_canonical';

export interface IParameterDefinition {
  /**
   * Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.
   */
  id?: string;

  /**
   * May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
   */
  extension?: IExtension[];

  /**
   * The name of the parameter used to allow access to the value of the parameter in evaluation contexts.
   */
  name?: string;

  /**
   * Extensions for name
   */
  _name?: IElement;

  /**
   * Whether the parameter is input or output for the module.
   */
  use?: string;

  /**
   * Extensions for use
   */
  _use?: IElement;

  /**
   * The minimum number of times this parameter SHALL appear in the request or response.
   */
  min?: number;

  /**
   * Extensions for min
   */
  _min?: IElement;

  /**
   * The maximum number of times this element is permitted to appear in the request or response.
   */
  max?: string;

  /**
   * Extensions for max
   */
  _max?: IElement;

  /**
   * A brief discussion of what the parameter is for and how it is used by the module.
   */
  documentation?: string;

  /**
   * Extensions for documentation
   */
  _documentation?: IElement;

  /**
   * The type of the parameter.
   */
  type?: string;

  /**
   * Extensions for type
   */
  _type?: IElement;

  /**
   * If specified, this indicates a profile that the input data must conform to, or that the output data will conform to.
   */
  profile?: string;
}

export const RTTI_ParameterDefinition: t.Type<IParameterDefinition> =
  t.recursion('IParameterDefinition', () =>
    t.partial({
      id: t.string,
      extension: t.array(RTTI_Extension),
      name: RTTI_code,
      _name: RTTI_Element,
      use: RTTI_code,
      _use: RTTI_Element,
      min: RTTI_integer,
      _min: RTTI_Element,
      max: t.string,
      _max: RTTI_Element,
      documentation: t.string,
      _documentation: RTTI_Element,
      type: RTTI_code,
      _type: RTTI_Element,
      profile: RTTI_canonical,
    }),
  );
