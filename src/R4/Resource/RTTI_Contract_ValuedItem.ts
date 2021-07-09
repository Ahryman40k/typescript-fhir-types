import * as t from 'io-ts';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_CodeableConcept, ICodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Reference, IReference} from './RTTI_Reference';
import {RTTI_Identifier, IIdentifier} from './RTTI_Identifier';
import {RTTI_dateTime} from '../Scalar/RTTI_dateTime';
import {RTTI_Element, IElement} from './RTTI_Element';
import {RTTI_Quantity, IQuantity} from './RTTI_Quantity';
import {RTTI_Money, IMoney} from './RTTI_Money';
import {RTTI_decimal} from '../Scalar/RTTI_decimal';
import {RTTI_unsignedInt} from '../Scalar/RTTI_unsignedInt';

export interface IContract_ValuedItem {
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
   * Specific type of Contract Valued Item that may be priced.
   */
  entityCodeableConcept?: ICodeableConcept;

  /**
   * Specific type of Contract Valued Item that may be priced.
   */
  entityReference?: IReference;

  /**
   * Identifies a Contract Valued Item instance.
   */
  identifier?: IIdentifier;

  /**
   * Indicates the time during which this Contract ValuedItem information is effective.
   */
  effectiveTime?: string;

  /**
   * Extensions for effectiveTime
   */
  _effectiveTime?: IElement;

  /**
   * Specifies the units by which the Contract Valued Item is measured or counted, and quantifies the countable or measurable Contract Valued Item instances.
   */
  quantity?: IQuantity;

  /**
   * A Contract Valued Item unit valuation measure.
   */
  unitPrice?: IMoney;

  /**
   * A real number that represents a multiplier used in determining the overall value of the Contract Valued Item delivered. The concept of a Factor allows for a discount or surcharge multiplier to be applied to a monetary amount.
   */
  factor?: number;

  /**
   * Extensions for factor
   */
  _factor?: IElement;

  /**
   * An amount that expresses the weighting (based on difficulty, cost and/or resource intensiveness) associated with the Contract Valued Item delivered. The concept of Points allows for assignment of point values for a Contract Valued Item, such that a monetary amount can be assigned to each point.
   */
  points?: number;

  /**
   * Extensions for points
   */
  _points?: IElement;

  /**
   * Expresses the product of the Contract Valued Item unitQuantity and the unitPriceAmt. For example, the formula: unit Quantity * unit Price (Cost per Point) * factor Number  * points = net Amount. Quantity, factor and points are assumed to be 1 if not supplied.
   */
  net?: IMoney;

  /**
   * Terms of valuation.
   */
  payment?: string;

  /**
   * Extensions for payment
   */
  _payment?: IElement;

  /**
   * When payment is due.
   */
  paymentDate?: string;

  /**
   * Extensions for paymentDate
   */
  _paymentDate?: IElement;

  /**
   * Who will make payment.
   */
  responsible?: IReference;

  /**
   * Who will receive payment.
   */
  recipient?: IReference;

  /**
   * Id  of the clause or question text related to the context of this valuedItem in the referenced form or QuestionnaireResponse.
   */
  linkId?: string[];

  /**
   * Extensions for linkId
   */
  _linkId?: IElement[];

  /**
   * A set of security labels that define which terms are controlled by this condition.
   */
  securityLabelNumber?: number[];

  /**
   * Extensions for securityLabelNumber
   */
  _securityLabelNumber?: IElement[];
}

export const RTTI_Contract_ValuedItem: t.Type<IContract_ValuedItem> =
  t.recursion('IContract_ValuedItem', () =>
    t.partial({
      id: t.string,
      extension: t.array(RTTI_Extension),
      modifierExtension: t.array(RTTI_Extension),
      entityCodeableConcept: RTTI_CodeableConcept,
      entityReference: RTTI_Reference,
      identifier: RTTI_Identifier,
      effectiveTime: RTTI_dateTime,
      _effectiveTime: RTTI_Element,
      quantity: RTTI_Quantity,
      unitPrice: RTTI_Money,
      factor: RTTI_decimal,
      _factor: RTTI_Element,
      points: RTTI_decimal,
      _points: RTTI_Element,
      net: RTTI_Money,
      payment: t.string,
      _payment: RTTI_Element,
      paymentDate: RTTI_dateTime,
      _paymentDate: RTTI_Element,
      responsible: RTTI_Reference,
      recipient: RTTI_Reference,
      linkId: t.array(t.string),
      _linkId: t.array(RTTI_Element),
      securityLabelNumber: t.array(RTTI_unsignedInt),
      _securityLabelNumber: t.array(RTTI_Element),
    }),
  );
