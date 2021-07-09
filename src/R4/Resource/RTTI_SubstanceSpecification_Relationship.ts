import * as t from 'io-ts';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_Reference, IReference} from './RTTI_Reference';
import {RTTI_CodeableConcept, ICodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Element, IElement} from './RTTI_Element';
import {RTTI_Quantity, IQuantity} from './RTTI_Quantity';
import {RTTI_Range, IRange} from './RTTI_Range';
import {RTTI_Ratio, IRatio} from './RTTI_Ratio';

export interface ISubstanceSpecification_Relationship {
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
   * A pointer to another substance, as a resource or just a representational code.
   */
  substanceReference?: IReference;

  /**
   * A pointer to another substance, as a resource or just a representational code.
   */
  substanceCodeableConcept?: ICodeableConcept;

  /**
   * For example "salt to parent", "active moiety", "starting material".
   */
  relationship?: ICodeableConcept;

  /**
   * For example where an enzyme strongly bonds with a particular substance, this is a defining relationship for that enzyme, out of several possible substance relationships.
   */
  isDefining?: boolean;

  /**
   * Extensions for isDefining
   */
  _isDefining?: IElement;

  /**
   * A numeric factor for the relationship, for instance to express that the salt of a substance has some percentage of the active substance in relation to some other.
   */
  amountQuantity?: IQuantity;

  /**
   * A numeric factor for the relationship, for instance to express that the salt of a substance has some percentage of the active substance in relation to some other.
   */
  amountRange?: IRange;

  /**
   * A numeric factor for the relationship, for instance to express that the salt of a substance has some percentage of the active substance in relation to some other.
   */
  amountRatio?: IRatio;

  /**
   * A numeric factor for the relationship, for instance to express that the salt of a substance has some percentage of the active substance in relation to some other.
   */
  amountString?: string;

  /**
   * Extensions for amountString
   */
  _amountString?: IElement;

  /**
   * For use when the numeric.
   */
  amountRatioLowLimit?: IRatio;

  /**
   * An operator for the amount, for example "average", "approximately", "less than".
   */
  amountType?: ICodeableConcept;

  /**
   * Supporting literature.
   */
  source?: IReference[];
}

export const RTTI_SubstanceSpecification_Relationship: t.Type<ISubstanceSpecification_Relationship> =
  t.recursion('ISubstanceSpecification_Relationship', () =>
    t.partial({
      id: t.string,
      extension: t.array(RTTI_Extension),
      modifierExtension: t.array(RTTI_Extension),
      substanceReference: RTTI_Reference,
      substanceCodeableConcept: RTTI_CodeableConcept,
      relationship: RTTI_CodeableConcept,
      isDefining: t.boolean,
      _isDefining: RTTI_Element,
      amountQuantity: RTTI_Quantity,
      amountRange: RTTI_Range,
      amountRatio: RTTI_Ratio,
      amountString: t.string,
      _amountString: RTTI_Element,
      amountRatioLowLimit: RTTI_Ratio,
      amountType: RTTI_CodeableConcept,
      source: t.array(RTTI_Reference),
    }),
  );
