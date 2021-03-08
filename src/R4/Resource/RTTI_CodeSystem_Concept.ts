import * as t from 'io-ts';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_code} from '../Scalar/RTTI_code';
import {RTTI_Element, IElement} from './RTTI_Element';
import {
  RTTI_CodeSystem_Designation,
  ICodeSystem_Designation,
} from './RTTI_CodeSystem_Designation';
import {
  RTTI_CodeSystem_Property1,
  ICodeSystem_Property1,
} from './RTTI_CodeSystem_Property1';

export interface ICodeSystem_Concept {
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
   * A code - a text symbol - that uniquely identifies the concept within the code system.
   */
  code?: string;

  /**
   * Extensions for code
   */
  _code?: IElement;

  /**
   * A human readable string that is the recommended default way to present this concept to a user.
   */
  display?: string;

  /**
   * Extensions for display
   */
  _display?: IElement;

  /**
   * The formal definition of the concept. The code system resource does not make formal definitions required, because of the prevalence of legacy systems. However, they are highly recommended, as without them there is no formal meaning associated with the concept.
   */
  definition?: string;

  /**
   * Extensions for definition
   */
  _definition?: IElement;

  /**
   * Additional representations for the concept - other languages, aliases, specialized purposes, used for particular purposes, etc.
   */
  designation?: ICodeSystem_Designation[];

  /**
   * A property value for this concept.
   */
  property?: ICodeSystem_Property1[];

  /**
   * Defines children of a concept to produce a hierarchy of concepts. The nature of the relationships is variable (is-a/contains/categorizes) - see hierarchyMeaning.
   */
  concept?: ICodeSystem_Concept[];
}

export const RTTI_CodeSystem_Concept: t.Type<ICodeSystem_Concept> = t.recursion(
  'ICodeSystem_Concept',
  () =>
    t.partial({
      id: t.string,
      extension: t.array(RTTI_Extension),
      modifierExtension: t.array(RTTI_Extension),
      code: RTTI_code,
      _code: RTTI_Element,
      display: t.string,
      _display: RTTI_Element,
      definition: t.string,
      _definition: RTTI_Element,
      designation: t.array(RTTI_CodeSystem_Designation),
      property: t.array(RTTI_CodeSystem_Property1),
      concept: t.array(RTTI_CodeSystem_Concept),
    }),
);
