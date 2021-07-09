import * as t from 'io-ts';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_Reference, IReference} from './RTTI_Reference';
import {RTTI_CodeableConcept, ICodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_positiveInt} from '../Scalar/RTTI_positiveInt';
import {RTTI_Element, IElement} from './RTTI_Element';

export interface IEpisodeOfCare_Diagnosis {
  /**
   * A list of conditions/problems/diagnoses that this episode of care is intended to be providing care for.
   */
  condition: IReference;

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
   * Role that this diagnosis has within the episode of care (e.g. admission, billing, discharge …).
   */
  role?: ICodeableConcept;

  /**
   * Ranking of the diagnosis (for each role type).
   */
  rank?: number;

  /**
   * Extensions for rank
   */
  _rank?: IElement;
}

export const RTTI_EpisodeOfCare_Diagnosis: t.Type<IEpisodeOfCare_Diagnosis> =
  t.recursion('IEpisodeOfCare_Diagnosis', () =>
    t.intersection([
      t.type({
        condition: RTTI_Reference,
      }),
      t.partial({
        id: t.string,
        extension: t.array(RTTI_Extension),
        modifierExtension: t.array(RTTI_Extension),
        role: RTTI_CodeableConcept,
        rank: RTTI_positiveInt,
        _rank: RTTI_Element,
      }),
    ]),
  );
