import * as t from 'io-ts';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_CodeableConcept, ICodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Element, IElement} from './RTTI_Element';
import {
  RTTI_SubstanceSourceMaterial_Author,
  ISubstanceSourceMaterial_Author,
} from './RTTI_SubstanceSourceMaterial_Author';
import {
  RTTI_SubstanceSourceMaterial_Hybrid,
  ISubstanceSourceMaterial_Hybrid,
} from './RTTI_SubstanceSourceMaterial_Hybrid';
import {
  RTTI_SubstanceSourceMaterial_OrganismGeneral,
  ISubstanceSourceMaterial_OrganismGeneral,
} from './RTTI_SubstanceSourceMaterial_OrganismGeneral';

export interface ISubstanceSourceMaterial_Organism {
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
   * The family of an organism shall be specified.
   */
  family?: ICodeableConcept;

  /**
   * The genus of an organism shall be specified; refers to the Latin epithet of the genus element of the plant/animal scientific name; it is present in names for genera, species and infraspecies.
   */
  genus?: ICodeableConcept;

  /**
   * The species of an organism shall be specified; refers to the Latin epithet of the species of the plant/animal; it is present in names for species and infraspecies.
   */
  species?: ICodeableConcept;

  /**
   * The Intraspecific type of an organism shall be specified.
   */
  intraspecificType?: ICodeableConcept;

  /**
   * The intraspecific description of an organism shall be specified based on a controlled vocabulary. For Influenza Vaccine, the intraspecific description shall contain the syntax of the antigen in line with the WHO convention.
   */
  intraspecificDescription?: string;

  /**
   * Extensions for intraspecificDescription
   */
  _intraspecificDescription?: IElement;

  /**
   * 4.9.13.6.1 Author type (Conditional).
   */
  author?: ISubstanceSourceMaterial_Author[];

  /**
   * 4.9.13.8.1 Hybrid species maternal organism ID (Optional).
   */
  hybrid?: ISubstanceSourceMaterial_Hybrid;

  /**
   * 4.9.13.7.1 Kingdom (Conditional).
   */
  organismGeneral?: ISubstanceSourceMaterial_OrganismGeneral;
}

export const RTTI_SubstanceSourceMaterial_Organism: t.Type<ISubstanceSourceMaterial_Organism> =
  t.recursion('ISubstanceSourceMaterial_Organism', () =>
    t.partial({
      id: t.string,
      extension: t.array(RTTI_Extension),
      modifierExtension: t.array(RTTI_Extension),
      family: RTTI_CodeableConcept,
      genus: RTTI_CodeableConcept,
      species: RTTI_CodeableConcept,
      intraspecificType: RTTI_CodeableConcept,
      intraspecificDescription: t.string,
      _intraspecificDescription: RTTI_Element,
      author: t.array(RTTI_SubstanceSourceMaterial_Author),
      hybrid: RTTI_SubstanceSourceMaterial_Hybrid,
      organismGeneral: RTTI_SubstanceSourceMaterial_OrganismGeneral,
    }),
  );
