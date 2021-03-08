import * as t from 'io-ts';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_uri} from '../Scalar/RTTI_uri';
import {RTTI_Element, IElement} from './RTTI_Element';
import {RTTI_dateTime} from '../Scalar/RTTI_dateTime';
import {RTTI_integer} from '../Scalar/RTTI_integer';
import {
  RTTI_ValueSet_Parameter,
  IValueSet_Parameter,
} from './RTTI_ValueSet_Parameter';
import {
  RTTI_ValueSet_Contains,
  IValueSet_Contains,
} from './RTTI_ValueSet_Contains';

export interface IValueSet_Expansion {
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
   * An identifier that uniquely identifies this expansion of the valueset, based on a unique combination of the provided parameters, the system default parameters, and the underlying system code system versions etc. Systems may re-use the same identifier as long as those factors remain the same, and the expansion is the same, but are not required to do so. This is a business identifier.
   */
  identifier?: string;

  /**
   * Extensions for identifier
   */
  _identifier?: IElement;

  /**
   * The time at which the expansion was produced by the expanding system.
   */
  timestamp?: string;

  /**
   * Extensions for timestamp
   */
  _timestamp?: IElement;

  /**
   * The total number of concepts in the expansion. If the number of concept nodes in this resource is less than the stated number, then the server can return more using the offset parameter.
   */
  total?: number;

  /**
   * Extensions for total
   */
  _total?: IElement;

  /**
   * If paging is being used, the offset at which this resource starts.  I.e. this resource is a partial view into the expansion. If paging is not being used, this element SHALL NOT be present.
   */
  offset?: number;

  /**
   * Extensions for offset
   */
  _offset?: IElement;

  /**
   * A parameter that controlled the expansion process. These parameters may be used by users of expanded value sets to check whether the expansion is suitable for a particular purpose, or to pick the correct expansion.
   */
  parameter?: IValueSet_Parameter[];

  /**
   * The codes that are contained in the value set expansion.
   */
  contains?: IValueSet_Contains[];
}

export const RTTI_ValueSet_Expansion: t.Type<IValueSet_Expansion> = t.recursion(
  'IValueSet_Expansion',
  () =>
    t.partial({
      id: t.string,
      extension: t.array(RTTI_Extension),
      modifierExtension: t.array(RTTI_Extension),
      identifier: RTTI_uri,
      _identifier: RTTI_Element,
      timestamp: RTTI_dateTime,
      _timestamp: RTTI_Element,
      total: RTTI_integer,
      _total: RTTI_Element,
      offset: RTTI_integer,
      _offset: RTTI_Element,
      parameter: t.array(RTTI_ValueSet_Parameter),
      contains: t.array(RTTI_ValueSet_Contains),
    }),
);
