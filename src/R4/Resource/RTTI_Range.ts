import * as t from 'io-ts';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_Quantity, IQuantity} from './RTTI_Quantity';

export interface IRange {
  /**
   * Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.
   */
  id?: string;

  /**
   * May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
   */
  extension?: IExtension[];

  /**
   * The low limit. The boundary is inclusive.
   */
  low?: IQuantity;

  /**
   * The high limit. The boundary is inclusive.
   */
  high?: IQuantity;
}

export const RTTI_Range: t.Type<IRange> = t.recursion('IRange', () =>
  t.partial({
    id: t.string,
    extension: t.array(RTTI_Extension),
    low: RTTI_Quantity,
    high: RTTI_Quantity,
  }),
);
