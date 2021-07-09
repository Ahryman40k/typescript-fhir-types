import * as t from 'io-ts';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_CodeableConcept, ICodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Identifier, IIdentifier} from './RTTI_Identifier';
import {RTTI_Element, IElement} from './RTTI_Element';
import {RTTI_Quantity, IQuantity} from './RTTI_Quantity';

export interface ISubstanceSpecification_Moiety {
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
   * Role that the moiety is playing.
   */
  role?: ICodeableConcept;

  /**
   * Identifier by which this moiety substance is known.
   */
  identifier?: IIdentifier;

  /**
   * Textual name for this moiety substance.
   */
  name?: string;

  /**
   * Extensions for name
   */
  _name?: IElement;

  /**
   * Stereochemistry type.
   */
  stereochemistry?: ICodeableConcept;

  /**
   * Optical activity type.
   */
  opticalActivity?: ICodeableConcept;

  /**
   * Molecular formula.
   */
  molecularFormula?: string;

  /**
   * Extensions for molecularFormula
   */
  _molecularFormula?: IElement;

  /**
   * Quantitative value for this moiety.
   */
  amountQuantity?: IQuantity;

  /**
   * Quantitative value for this moiety.
   */
  amountString?: string;

  /**
   * Extensions for amountString
   */
  _amountString?: IElement;
}

export const RTTI_SubstanceSpecification_Moiety: t.Type<ISubstanceSpecification_Moiety> =
  t.recursion('ISubstanceSpecification_Moiety', () =>
    t.partial({
      id: t.string,
      extension: t.array(RTTI_Extension),
      modifierExtension: t.array(RTTI_Extension),
      role: RTTI_CodeableConcept,
      identifier: RTTI_Identifier,
      name: t.string,
      _name: RTTI_Element,
      stereochemistry: RTTI_CodeableConcept,
      opticalActivity: RTTI_CodeableConcept,
      molecularFormula: t.string,
      _molecularFormula: RTTI_Element,
      amountQuantity: RTTI_Quantity,
      amountString: t.string,
      _amountString: RTTI_Element,
    }),
  );
