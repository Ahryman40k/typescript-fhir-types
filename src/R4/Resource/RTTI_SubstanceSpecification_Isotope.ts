import * as t from 'io-ts';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_Identifier, IIdentifier} from './RTTI_Identifier';
import {RTTI_CodeableConcept, ICodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Quantity, IQuantity} from './RTTI_Quantity';
import {
  RTTI_SubstanceSpecification_MolecularWeight,
  ISubstanceSpecification_MolecularWeight,
} from './RTTI_SubstanceSpecification_MolecularWeight';

export interface ISubstanceSpecification_Isotope {
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
   * Substance identifier for each non-natural or radioisotope.
   */
  identifier?: IIdentifier;

  /**
   * Substance name for each non-natural or radioisotope.
   */
  name?: ICodeableConcept;

  /**
   * The type of isotopic substitution present in a single substance.
   */
  substitution?: ICodeableConcept;

  /**
   * Half life - for a non-natural nuclide.
   */
  halfLife?: IQuantity;

  /**
   * The molecular weight or weight range (for proteins, polymers or nucleic acids).
   */
  molecularWeight?: ISubstanceSpecification_MolecularWeight;
}

export const RTTI_SubstanceSpecification_Isotope: t.Type<ISubstanceSpecification_Isotope> =
  t.recursion('ISubstanceSpecification_Isotope', () =>
    t.partial({
      id: t.string,
      extension: t.array(RTTI_Extension),
      modifierExtension: t.array(RTTI_Extension),
      identifier: RTTI_Identifier,
      name: RTTI_CodeableConcept,
      substitution: RTTI_CodeableConcept,
      halfLife: RTTI_Quantity,
      molecularWeight: RTTI_SubstanceSpecification_MolecularWeight,
    }),
  );
