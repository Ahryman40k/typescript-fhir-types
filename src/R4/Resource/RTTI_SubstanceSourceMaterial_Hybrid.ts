import * as t from 'io-ts';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_Element, IElement} from './RTTI_Element';
import {RTTI_CodeableConcept, ICodeableConcept} from './RTTI_CodeableConcept';

export interface ISubstanceSourceMaterial_Hybrid {
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
   * The identifier of the maternal species constituting the hybrid organism shall be specified based on a controlled vocabulary. For plants, the parents aren’t always known, and it is unlikely that it will be known which is maternal and which is paternal.
   */
  maternalOrganismId?: string;

  /**
   * Extensions for maternalOrganismId
   */
  _maternalOrganismId?: IElement;

  /**
   * The name of the maternal species constituting the hybrid organism shall be specified. For plants, the parents aren’t always known, and it is unlikely that it will be known which is maternal and which is paternal.
   */
  maternalOrganismName?: string;

  /**
   * Extensions for maternalOrganismName
   */
  _maternalOrganismName?: IElement;

  /**
   * The identifier of the paternal species constituting the hybrid organism shall be specified based on a controlled vocabulary.
   */
  paternalOrganismId?: string;

  /**
   * Extensions for paternalOrganismId
   */
  _paternalOrganismId?: IElement;

  /**
   * The name of the paternal species constituting the hybrid organism shall be specified.
   */
  paternalOrganismName?: string;

  /**
   * Extensions for paternalOrganismName
   */
  _paternalOrganismName?: IElement;

  /**
   * The hybrid type of an organism shall be specified.
   */
  hybridType?: ICodeableConcept;
}

export const RTTI_SubstanceSourceMaterial_Hybrid: t.Type<ISubstanceSourceMaterial_Hybrid> =
  t.recursion('ISubstanceSourceMaterial_Hybrid', () =>
    t.partial({
      id: t.string,
      extension: t.array(RTTI_Extension),
      modifierExtension: t.array(RTTI_Extension),
      maternalOrganismId: t.string,
      _maternalOrganismId: RTTI_Element,
      maternalOrganismName: t.string,
      _maternalOrganismName: RTTI_Element,
      paternalOrganismId: t.string,
      _paternalOrganismId: RTTI_Element,
      paternalOrganismName: t.string,
      _paternalOrganismName: RTTI_Element,
      hybridType: RTTI_CodeableConcept,
    }),
  );
