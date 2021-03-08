import * as t from 'io-ts';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_CodeableConcept, ICodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Element, IElement} from './RTTI_Element';

export interface ISubstanceSourceMaterial_Author {
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
   * The type of author of an organism species shall be specified. The parenthetical author of an organism species refers to the first author who published the plant/animal name (of any rank). The primary author of an organism species refers to the first author(s), who validly published the plant/animal name.
   */
  authorType?: ICodeableConcept;

  /**
   * The author of an organism species shall be specified. The author year of an organism shall also be specified when applicable; refers to the year in which the first author(s) published the infraspecific plant/animal name (of any rank).
   */
  authorDescription?: string;

  /**
   * Extensions for authorDescription
   */
  _authorDescription?: IElement;
}

export const RTTI_SubstanceSourceMaterial_Author: t.Type<ISubstanceSourceMaterial_Author> = t.recursion(
  'ISubstanceSourceMaterial_Author',
  () =>
    t.partial({
      id: t.string,
      extension: t.array(RTTI_Extension),
      modifierExtension: t.array(RTTI_Extension),
      authorType: RTTI_CodeableConcept,
      authorDescription: t.string,
      _authorDescription: RTTI_Element,
    }),
);
