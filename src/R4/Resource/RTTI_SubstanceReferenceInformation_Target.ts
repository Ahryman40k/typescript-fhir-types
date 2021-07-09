import * as t from 'io-ts';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_Identifier, IIdentifier} from './RTTI_Identifier';
import {RTTI_CodeableConcept, ICodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Quantity, IQuantity} from './RTTI_Quantity';
import {RTTI_Range, IRange} from './RTTI_Range';
import {RTTI_Element, IElement} from './RTTI_Element';
import {RTTI_Reference, IReference} from './RTTI_Reference';

export interface ISubstanceReferenceInformation_Target {
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
   * Todo.
   */
  target?: IIdentifier;

  /**
   * Todo.
   */
  type?: ICodeableConcept;

  /**
   * Todo.
   */
  interaction?: ICodeableConcept;

  /**
   * Todo.
   */
  organism?: ICodeableConcept;

  /**
   * Todo.
   */
  organismType?: ICodeableConcept;

  /**
   * Todo.
   */
  amountQuantity?: IQuantity;

  /**
   * Todo.
   */
  amountRange?: IRange;

  /**
   * Todo.
   */
  amountString?: string;

  /**
   * Extensions for amountString
   */
  _amountString?: IElement;

  /**
   * Todo.
   */
  amountType?: ICodeableConcept;

  /**
   * Todo.
   */
  source?: IReference[];
}

export const RTTI_SubstanceReferenceInformation_Target: t.Type<ISubstanceReferenceInformation_Target> =
  t.recursion('ISubstanceReferenceInformation_Target', () =>
    t.partial({
      id: t.string,
      extension: t.array(RTTI_Extension),
      modifierExtension: t.array(RTTI_Extension),
      target: RTTI_Identifier,
      type: RTTI_CodeableConcept,
      interaction: RTTI_CodeableConcept,
      organism: RTTI_CodeableConcept,
      organismType: RTTI_CodeableConcept,
      amountQuantity: RTTI_Quantity,
      amountRange: RTTI_Range,
      amountString: t.string,
      _amountString: RTTI_Element,
      amountType: RTTI_CodeableConcept,
      source: t.array(RTTI_Reference),
    }),
  );
