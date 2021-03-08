import * as t from 'io-ts';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_positiveInt} from '../Scalar/RTTI_positiveInt';
import {RTTI_Element, IElement} from './RTTI_Element';
import {
  RTTI_ClaimResponse_Adjudication,
  IClaimResponse_Adjudication,
} from './RTTI_ClaimResponse_Adjudication';
import {
  RTTI_ClaimResponse_SubDetail,
  IClaimResponse_SubDetail,
} from './RTTI_ClaimResponse_SubDetail';

export interface IClaimResponse_Detail {
  /**
   * The adjudication results.
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
   * A number to uniquely reference the claim detail entry.
   */
  detailSequence?: number;

  /**
   * Extensions for detailSequence
   */
  _detailSequence?: IElement;

  /**
   * The numbers associated with notes below which apply to the adjudication of this item.
   */
  noteNumber?: number[];

  /**
   * Extensions for noteNumber
   */
  _noteNumber?: IElement[];

  /**
   * A sub-detail adjudication of a simple product or service.
   */
  subDetail?: IClaimResponse_SubDetail[];
}

export const RTTI_ClaimResponse_Detail: t.Type<IClaimResponse_Detail> = t.recursion(
  'IClaimResponse_Detail',
  () =>
    t.intersection([
      t.type({
        adjudication: t.array(RTTI_ClaimResponse_Adjudication),
      }),
      t.partial({
        id: t.string,
        extension: t.array(RTTI_Extension),
        modifierExtension: t.array(RTTI_Extension),
        detailSequence: RTTI_positiveInt,
        _detailSequence: RTTI_Element,
        noteNumber: t.array(RTTI_positiveInt),
        _noteNumber: t.array(RTTI_Element),
        subDetail: t.array(RTTI_ClaimResponse_SubDetail),
      }),
    ]),
);
