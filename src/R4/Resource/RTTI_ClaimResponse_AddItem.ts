import * as t from 'io-ts';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_positiveInt} from '../Scalar/RTTI_positiveInt';
import {RTTI_Element, IElement} from './RTTI_Element';
import {RTTI_Reference, IReference} from './RTTI_Reference';
import {RTTI_CodeableConcept, ICodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Period, IPeriod} from './RTTI_Period';
import {RTTI_Address, IAddress} from './RTTI_Address';
import {RTTI_Quantity, IQuantity} from './RTTI_Quantity';
import {RTTI_Money, IMoney} from './RTTI_Money';
import {RTTI_decimal} from '../Scalar/RTTI_decimal';
import {
  RTTI_ClaimResponse_Adjudication,
  IClaimResponse_Adjudication,
} from './RTTI_ClaimResponse_Adjudication';
import {
  RTTI_ClaimResponse_Detail1,
  IClaimResponse_Detail1,
} from './RTTI_ClaimResponse_Detail1';

export interface IClaimResponse_AddItem {
  /**
   * When the value is a group code then this item collects a set of related claim details, otherwise this contains the product, service, drug or other billing code for the item.
   */
  productOrService: ICodeableConcept;

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
   * Claim items which this service line is intended to replace.
   */
  itemSequence?: number[];

  /**
   * Extensions for itemSequence
   */
  _itemSequence?: IElement[];

  /**
   * The sequence number of the details within the claim item which this line is intended to replace.
   */
  detailSequence?: number[];

  /**
   * Extensions for detailSequence
   */
  _detailSequence?: IElement[];

  /**
   * The sequence number of the sub-details within the details within the claim item which this line is intended to replace.
   */
  subdetailSequence?: number[];

  /**
   * Extensions for subdetailSequence
   */
  _subdetailSequence?: IElement[];

  /**
   * The providers who are authorized for the services rendered to the patient.
   */
  provider?: IReference[];

  /**
   * Item typification or modifiers codes to convey additional context for the product or service.
   */
  modifier?: ICodeableConcept[];

  /**
   * Identifies the program under which this may be recovered.
   */
  programCode?: ICodeableConcept[];

  /**
   * The date or dates when the service or product was supplied, performed or completed.
   */
  servicedDate?: string;

  /**
   * Extensions for servicedDate
   */
  _servicedDate?: IElement;

  /**
   * The date or dates when the service or product was supplied, performed or completed.
   */
  servicedPeriod?: IPeriod;

  /**
   * Where the product or service was provided.
   */
  locationCodeableConcept?: ICodeableConcept;

  /**
   * Where the product or service was provided.
   */
  locationAddress?: IAddress;

  /**
   * Where the product or service was provided.
   */
  locationReference?: IReference;

  /**
   * The number of repetitions of a service or product.
   */
  quantity?: IQuantity;

  /**
   * If the item is not a group then this is the fee for the product or service, otherwise this is the total of the fees for the details of the group.
   */
  unitPrice?: IMoney;

  /**
   * A real number that represents a multiplier used in determining the overall value of services delivered and/or goods received. The concept of a Factor allows for a discount or surcharge multiplier to be applied to a monetary amount.
   */
  factor?: number;

  /**
   * Extensions for factor
   */
  _factor?: IElement;

  /**
   * The quantity times the unit price for an additional service or product or charge.
   */
  net?: IMoney;

  /**
   * Physical service site on the patient (limb, tooth, etc.).
   */
  bodySite?: ICodeableConcept;

  /**
   * A region or surface of the bodySite, e.g. limb region or tooth surface(s).
   */
  subSite?: ICodeableConcept[];

  /**
   * The numbers associated with notes below which apply to the adjudication of this item.
   */
  noteNumber?: number[];

  /**
   * Extensions for noteNumber
   */
  _noteNumber?: IElement[];

  /**
   * The second-tier service adjudications for payor added services.
   */
  detail?: IClaimResponse_Detail1[];
}

export const RTTI_ClaimResponse_AddItem: t.Type<IClaimResponse_AddItem> =
  t.recursion('IClaimResponse_AddItem', () =>
    t.intersection([
      t.type({
        productOrService: RTTI_CodeableConcept,
        adjudication: t.array(RTTI_ClaimResponse_Adjudication),
      }),
      t.partial({
        id: t.string,
        extension: t.array(RTTI_Extension),
        modifierExtension: t.array(RTTI_Extension),
        itemSequence: t.array(RTTI_positiveInt),
        _itemSequence: t.array(RTTI_Element),
        detailSequence: t.array(RTTI_positiveInt),
        _detailSequence: t.array(RTTI_Element),
        subdetailSequence: t.array(RTTI_positiveInt),
        _subdetailSequence: t.array(RTTI_Element),
        provider: t.array(RTTI_Reference),
        modifier: t.array(RTTI_CodeableConcept),
        programCode: t.array(RTTI_CodeableConcept),
        servicedDate: t.string,
        _servicedDate: RTTI_Element,
        servicedPeriod: RTTI_Period,
        locationCodeableConcept: RTTI_CodeableConcept,
        locationAddress: RTTI_Address,
        locationReference: RTTI_Reference,
        quantity: RTTI_Quantity,
        unitPrice: RTTI_Money,
        factor: RTTI_decimal,
        _factor: RTTI_Element,
        net: RTTI_Money,
        bodySite: RTTI_CodeableConcept,
        subSite: t.array(RTTI_CodeableConcept),
        noteNumber: t.array(RTTI_positiveInt),
        _noteNumber: t.array(RTTI_Element),
        detail: t.array(RTTI_ClaimResponse_Detail1),
      }),
    ]),
  );
