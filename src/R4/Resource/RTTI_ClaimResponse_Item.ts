import * as t from 'io-ts';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_positiveInt} from '../Scalar/RTTI_positiveInt';
import {RTTI_Element, IElement} from './RTTI_Element';
import {
  RTTI_ClaimResponse_Adjudication,
  IClaimResponse_Adjudication,
} from './RTTI_ClaimResponse_Adjudication';
import {
  RTTI_ClaimResponse_Detail,
  IClaimResponse_Detail,
} from './RTTI_ClaimResponse_Detail';

export interface IClaimResponse_Item {
  /**
   * If this item is a group then the values here are a summary of the adjudication of the detail items. If this item is a simple product or service then this is the result of the adjudication of this item.
   */
  adjudication: IClaimResponse_Adjudication[];

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
   * A number to uniquely reference the claim item entries.
   */
  itemSequence?: number;

  /**
   * Extensions for itemSequence
   */
  _itemSequence?: IElement;

  /**
   * The numbers associated with notes below which apply to the adjudication of this item.
   */
  noteNumber?: number[];

  /**
   * Extensions for noteNumber
   */
  _noteNumber?: IElement[];

  /**
   * A claim detail. Either a simple (a product or service) or a 'group' of sub-details which are simple items.
   */
  detail?: IClaimResponse_Detail[];
}

export const RTTI_ClaimResponse_Item: t.Type<IClaimResponse_Item> = t.recursion(
  'IClaimResponse_Item',
  () =>
    t.intersection([
      t.type({
        adjudication: t.array(RTTI_ClaimResponse_Adjudication),
      }),
      t.partial({
        id: t.string,
        extension: t.array(RTTI_Extension),
        modifierExtension: t.array(RTTI_Extension),
        itemSequence: RTTI_positiveInt,
        _itemSequence: RTTI_Element,
        noteNumber: t.array(RTTI_positiveInt),
        _noteNumber: t.array(RTTI_Element),
        detail: t.array(RTTI_ClaimResponse_Detail),
      }),
    ]),
);
